import "dotenv/config"
import fs from "node:fs"
import path from "node:path"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID
} = process.env

function getKnowledgeBaseArticle(kba_id) {
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', authorization: `Bearer ${FRONT_API_TOKEN}`}
    };

    fetch(`https://api2.frontapp.com/knowledge_base_articles/${kba_id}/content`, options)
    .then(res => res.json())
    .then(res => console.log(res.content))
    .catch(err => console.error(err));
}

// getKnowledgeBaseArticle("kba_5hite")

function getDocument(path){
    const fileContents = fs.readFileSync(path, "utf-8")

    console.log(fileContents)
    return fileContents
}

getDocument("docs/Getting started/examples-and-guides/show-button-on-condition.md")

