import "dotenv/config"

const {
    FRONT_API_TOKEN,
    FRONT_KNOWLEDGE_BASE_ID,
    FRONT_AUTHOR_ID
} = process.env

const options = {
  method: 'GET',
  headers: {accept: 'application/json', authorization: `Bearer ${FRONT_API_TOKEN}`}
};

fetch('https://api2.frontapp.com/teammates', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));