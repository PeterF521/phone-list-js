const data = require('../data/data')

const users = data.load()

exports.get = (req, res) => {
    res.send('Sucess get!')
}

exports.post = (req, res) => {
    res.send('Sucess post')
}

exports.put = (req, res) => {
    res.send('Sucess put')
}

exports.delete = (req, res) => {
    res.send('Sucess delete')
}