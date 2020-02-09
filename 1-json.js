const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Uday"
user.age = 19

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON) 