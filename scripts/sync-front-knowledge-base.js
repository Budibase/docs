import "dotenv/config"

console.log("Begin syncing documentation to Front Knowledge Base")

const FRONT_API = "https://api2.frontapp.com"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID
} = process.env


if (!FRONT_API_TOKEN || !FRONT_KNOWLEDGE_BASE_ID || !FRONT_AUTHOR_ID) {
  throw new Error("Missing required env vars");
}

// Create new knowledge base
// const options = {
//   method: 'POST',
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     authorization: `Bearer ${FRONT_API_TOKEN}`
//   },
//   body: JSON.stringify({type: 'external', name: 'test_kb_written_by_API', })
// };

// fetch(`${FRONT_API}/knowledge_bases`, options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// List all Knowledge Bases
const options = {
  method: 'GET',
  headers: {accept: 'application/json', authorization: `Bearer ${FRONT_API_TOKEN}`}
};

fetch('https://api2.frontapp.com/knowledge_bases', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

