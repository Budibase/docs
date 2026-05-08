import "dotenv/config"
import fs from "node:fs"
import path from "node:path"

console.log("Begin syncing documentation to Front Knowledge Base")

const FRONT_API = "https://api2.frontapp.com"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID
} = process.env


if (!FRONT_API_TOKEN || !FRONT_KNOWLEDGE_BASE_ID || !FRONT_AUTHOR_ID) { // Possibly only the API_TOKEN needed
  throw new Error("Missing required env vars");
}

// Get all articles in Knowledge Base
let frontArticles;

const options = {
  method: 'GET',
  headers: {accept: 'application/json', authorization: `Bearer ${FRONT_API_TOKEN}`}
};

fetch('https://api2.frontapp.com/knowledge_bases/knb_e6a/articles', options)
  .then(res => res.json())
  .then((res) => {
    // console.log(res)
    // Make an array of article IDs
    const arrayOfArticleIDs = res._results.map((article) => {
        return article.id
    })

    // Loop over the article IDs to get the article content
    const articles = arrayOfArticleIDs.map((id) => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', authorization: `Bearer ${FRONT_API_TOKEN}`}
            };

            fetch(`https://api2.frontapp.com/knowledge_base_articles/${id}/content`, options)
            .then(res => res.json())
            .then(res => console.log("res")) // res here is article itself - _links,id,slug,name,status,keywords,content,locale,attachments,last_edited_at,created_at,updated_at
            .then()
            .catch(err => console.error(err));
    })
})
  .catch(err => console.error(err));


// Get filepath to all pages in documenation
const SEARCHABLE_FOLDERS = ["docs", "recipes", "reference"] // If more sections of the documentation get added, include them here

function getFiles(dir) {
  let results = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
        // Do not include _order.yaml
        if (fullPath.substring(fullPath.length-11) !== "_order.yaml") {
            results.push(fullPath);
        }
      
    }
  }

  return results;
}

const allFilePaths = [
  ...getFiles("./docs"),
  ...getFiles("./recipes"),
  ...getFiles("./reference"),
]

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

console.log(allFiles[1])

const options1 = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${FRONT_API_TOKEN}`
  },
  body: JSON.stringify({
    status: 'published',
    content: allFiles[1].page.documentContent,
    subject: allFiles[1].page.DocumentTitle,
    author_id: '[AUTHOR_ID_HERE]',
    category_id: '[CATEGORY_ID_HERE]'
  })
};

fetch('https://api2.frontapp.com/knowledge_bases/knb_e6a/locales/en/articles', options1)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));


// Match up Docs pages to Knowledge Base Articles
// console.log({frontArticles})



// Check if existing KBA matches docs page
// If not, update




