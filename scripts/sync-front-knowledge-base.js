import "dotenv/config"
import fs from "node:fs"
import path from "node:path"

console.log("Begin syncing documentation to Front Knowledge Base")

const changedFiles = JSON.parse(process.argv[3] || []);

console.log(changedFiles);

for (const filepath of changedFiles) {
    console.log(filepath);
}

const FRONT_API = "https://api2.frontapp.com"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID
} = process.env

// Check for reequired environment variables
console.log("Checking for env vars")
if (!FRONT_API_TOKEN || !FRONT_KNOWLEDGE_BASE_ID || !FRONT_AUTHOR_ID) { // Possibly only the API_TOKEN needed
  throw new Error("Missing required env vars")
} else {
    console.log("env vars found")
}

// If more sections of the documentation get added, include them here
const allFilePaths = [
  ...getFiles("./docs"),
  ...getFiles("./recipes"),
  ...getFiles("./reference"),
]

// Get filepath to all pages in documenation
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
const allFiles = allFilePaths.map((filePath) => {
    if (filePath.substring(filePath.length -5) === ".yaml") {
        return
    }
     return {
        documentTitle: filePath,
        documentContent: fs.readFileSync(filePath, "utf-8")
    }
})


// Get all article IDs in Knowledge Base (Max 100/page)
function getAllArticlesInKB(knowledgeBaseId) {
    console.log("Getting all articles in Knowledge Base")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${FRONT_API_TOKEN}`
        }
    }

    const allArticleIds = []

    function fetchArticlesPage(url = `https://api2.frontapp.com/knowledge_bases/${knowledgeBaseId}/articles?limit=100`) {
        fetch(url, options)
            .then(res => res.json())
            .then((res) => {
                allArticleIds.push(...res._results.map(article => article.id))

                // Keep fetching until there are no more pages
                if (res._pagination && res._pagination.next) {
                    setTimeout(() => {
                        fetchArticlesPage(res._pagination.next)
                    }, 3000)
                    return
                }

                // Only runs once, after all article IDs have been fetched
                allArticleIds.forEach((id, index) => {
                    setTimeout(() => {
                        fetch(`https://api2.frontapp.com/knowledge_base_articles/${id}/content`, options)
                            .then(res => res.json())
                            .then(res => {
                                const frontKbaTitle = res.name
                                const frontKbaContent = res.content
                                const localFile = allFiles.find((file) => {
                                    return file.documentTitle === frontKbaTitle
                                })

                                if (localFile.documentContent === frontKbaContent) {

                                    console.log("Files are the same, no updates neeeded") 
                                } else {
                                    console.log("Files are different, writing changes to Front KBA")
                                }
                                
                            })
                            .catch(err => console.error(err))
                    }, index * 3000)
                })
            })
            .catch(err => console.error(err))
    }

    fetchArticlesPage()
}

// const articles = await getAllArticlesInKB(FRONT_KNOWLEDGE_BASE_ID)

// articles.forEach((article) => {
//   console.log(article.name)
// })

// Write files to Front KB
function writeFilesToFrontKB(files){
    files.forEach((file, index) => {
        setTimeout(() => {
            const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: `Bearer ${FRONT_API_TOKEN}`,
            },
            body: JSON.stringify({
                status: 'published',
                content: file.documentContent,
                subject: file.documentTitle,
                author_id: FRONT_AUTHOR_ID,
            }),
            }

            fetch(
            `https://api2.frontapp.com/knowledge_bases/${FRONT_KNOWLEDGE_BASE_ID}/locales/en/articles`,
            options
            )
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.error(err))
        }, index * 60_000) // 1 minute between each request
    })
}

// writeAllFilesToFrontKB(allFiles)
getAllArticlesInKB(FRONT_KNOWLEDGE_BASE_ID)




// Match up Docs pages to Knowledge Base Articles
// console.log({frontArticles})



// Check if existing KBA matches docs page
// If not, update




