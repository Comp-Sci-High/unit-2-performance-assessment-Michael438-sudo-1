const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to the world of Digimon")
console.log("Chose your Digimon")
console.log("Agumon(ID:Agu )", "Tentomon(ID:Ten)", "Patamon(ID:Pat)")

const choice =prompt("Enter The Digimon you want:")

let number = prompt("How many Digimon do you want to see:")

console.log(`Fetching ${number} ${choice} image(s)`)

const url = `https://digimon-api.vercel.app/api/digimon?_ids=${choice}&limit=${number}`

async function fetchDigimon(requrl){
const response = await fetch(requrl)
const data = await response.json()
console.log(data)
}
fetchDigimon(url)

