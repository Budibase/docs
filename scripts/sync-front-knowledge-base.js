import "dotenv/config"
import fs from "node:fs"
import path from "node:path"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID,
} = process.env

const FRONT_API = "https://api2.frontapp.com"
const changedFiles = JSON.parse(process.argv[3] || "[]")

// Filter out files that aren't docs
const filteredChangedFiles = changedFiles.filter((file) => file.substring(file.length-3) === ".md")

// Check for reequired environment variables
console.log("Checking for env vars")
if (!FRONT_API_TOKEN) {
  throw new Error("Missing FRONT_API_TOKEN")
} else {
    console.log("FRONT_API_TOKEN found")
}

if (!FRONT_KNOWLEDGE_BASE_ID) {
  throw new Error("Missing FRONT_KNOWLEDGE_BASE_ID")
} else {
    console.log("FRONT_KNOWLEDGE_BASE_ID found")
}

if (!FRONT_AUTHOR_ID) {
  throw new Error("Missing FRONT_AUTHOR_ID")
} else {
    console.log("FRONT_AUTHOR_ID found")
}
// Proceed
console.log("Begin syncing documentation to Front Knowledge Base")

console.log(`Files to sync: ${filteredChangedFiles.length}`)
for (const filepath of filteredChangedFiles) {
    console.log(filepath);
}

// File Paths of all files that need to be synced to Front
// If more sections of the documentation get added, include them here
const allFilePaths = [
  ...getFiles("./docs"),
  ...getFiles("./recipes"),
  ...getFiles("./reference"),
]

// Get filepath to all pages in specified directory
function getFiles(dir) {
  let results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(getFiles(fullPath))
    } else {
        // Do not include _order.yaml
        if (fullPath.substring(fullPath.length-11) !== "_order.yaml") {
            results.push(fullPath)
        }
    }
  }
  return results
}

// Get contents of every file in documentation
const allFiles = []

allFilePaths.forEach((filePath) => {
    if (filePath.substring(filePath.length -5) === ".yaml") {
        return
    }
    allFiles.push({
        documentTitle: filePath,
        documentContent: fs.readFileSync(filePath, "utf-8")
    })
})
console.log(`Got ${allFiles.length} files in Docs Repo`)


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// Get all article IDs in Knowledge Base (Max 100/page)
async function getAllArticlesInKB(knowledgeBaseId) {
    console.log("Getting all articles in Knowledge Base")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${FRONT_API_TOKEN}`
        }
    }

    const allArticleIds = []
    const allArticles = []

    let url = `${FRONT_API}/knowledge_bases/${knowledgeBaseId}/articles?limit=100`

    while (url) {
        const res = await fetch(url, options)
        const data = await res.json()

        allArticleIds.push(...data._results.map(article => article.id))
        console.log("Number of KBAs", allArticleIds.length)

        url = data._pagination?.next || null

        if (url) {
            await sleep(2000)
        }
    }

    for (const [index, id] of allArticleIds.entries()) {
        console.log(`${index + 1} Getting ${id}`)

        const res = await fetch(`${FRONT_API}/knowledge_base_articles/${id}/content`, options)
        const data = await res.json()

        allArticles.push({
            documentTitle: data.name,
            documentContent: data.content,
            documentId: data.id
        })

        await sleep(2000)
    }

    console.log(`${allArticles.length} articles mapped to allArticles array`)
    return allArticles
}

const allFrontKBAs = await getAllArticlesInKB(FRONT_KNOWLEDGE_BASE_ID)

// All file paths locally
// All KBAs
// Changed files

// IN LIST OF CHANGED FILES:
// if file exists locally and NOT in KBA, write file
// if file exists locall AND IS IN KBA, update file using KBA-ID

// Write files to Front KB
function writeFilesToFrontKB(filePaths){ // Invoke with list of changed files ["/path/to/file1", "/path/to/file2", ...]
    console.log("writeFilestoFrontKB")
    const stats = {
        updated: 0,
        created: 0,
        errors: []
    }
    filePaths.forEach((filepath, index) => {
        console.log(`Writing file ${filepath}`)
        setTimeout(() => {
        // If there isn't a KBA with the name(which is a filepath) that matches that of this file, existingKBA will be false
        const existingKBA = allFrontKBAs.find((element) => {
            console.log({element})
            return element.documentTitle === filepath
        })
        const thisFile = allFiles.find((file) => {
            return file.documentTitle === filepath
        })
        if (!thisFile) {
            console.warn(`Skipping ${filepath}: file not found in local docs set`)
            stats.errors.push(new Error(`Missing local file: ${filepath}`))
            return
        }
        if (!existingKBA) {
            // Write a new article
            console.log("KBA did not exist, writing new KBA")
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: `Bearer ${FRONT_API_TOKEN}`
                },
                body: JSON.stringify({
                    status: 'published',
                    author_id: FRONT_AUTHOR_ID,
                    subject: thisFile.documentTitle,
                    content: thisFile.documentContent
                })
                };

            fetch(`${FRONT_API}/knowledge_bases/${FRONT_KNOWLEDGE_BASE_ID}/articles`, options)
                .then(res => res.json())
                .then((res) => {
                    stats.created ++
                })
                .catch((err) => {
                    console.error(err)
                    stats.errors.push(err)
                });
        } else {
            // Update Existing Article
            console.log("KBA Exists, updating existing KBA with new info")
            const options = {
                method: 'PATCH',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: `Bearer ${FRONT_API_TOKEN}`
                },
                body: JSON.stringify({
                    status: 'published',
                    author_id: FRONT_AUTHOR_ID,
                    content: thisFile.documentContent
                })
            };

            fetch(`${FRONT_API}/knowledge_base_articles/${existingKBA.documentId}/content`, options)
                .then(res => res.json())
                .then((res) => {
                    stats.updated ++
                })
                .catch((err) => {
                    console.error(err)
                    stats.errors.push(err)
                });
        }
        }, index * 2_000)  
    })
    console.log(`${stats.created} Knowledge Base Articles created`)
    console.log(`${stats.updated} Knowledge Base Articles Updated`)
    console.log(`${stats.errors.length} errors`)
    if (stats.errors.length > 0) {
        stats.errors.forEach((error) => {
            console.log(error)
        })
    }
}

writeFilesToFrontKB(filteredChangedFiles)



