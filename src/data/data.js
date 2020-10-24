const fs = require('fs')

const data = module.exports = {}
const data_path = './users.json'

data.save = (save) => {
    const dataContent = JSON.stringify(save)
    fs.writeFileSync(data_path, dataContent)
}

data.load = () => {
    const dataContent = fs.readFileSync(data_path)
    return JSON.parse(dataContent)
}