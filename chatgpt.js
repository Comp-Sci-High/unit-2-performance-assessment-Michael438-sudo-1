const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let requestURL = "https://api.openai.com/v1/responses"

async function chatter(){
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            "Content-Type": 'application/json'

        },
        body: JSON.stringify({
            model: prompt("What model are you using: "),
            input: prompt("What would you like to ask the chatBox: ")
        })


    }
    const response = await fetch(requestURL, options)
    const data = await response.json();
    console.log(data)
    return data;
}

chatter(requestURL)
