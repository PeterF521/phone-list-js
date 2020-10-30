const data = require('../data/data')

const users = data.load()

function checkBodyRequest(body) {
    if(body.name === undefined || body.contacts === undefined) {
        const error = new TypeError('Body name or/and contacts must not be undefined')
        error.statusCode = 400
        throw error
    }

    if(!Array.isArray(body.contacts)) {
        const error = new TypeError('Contacs must be an array')
        error.statusCode = 400
        throw error
    }
}

function getId() {
    const number = Number(users.users.length)
    return number + 1
}

exports.get = (req, res) => {
    res.status(200).json(users.users)
}

exports.post = (req, res) => {
    checkBodyRequest(req.body)

    const user = {
        id: getId(),
        name: req.body.name,
        contacts: req.body.contacts
    }

    users.users.push(user)
    data.save(users)
    
    res.status(201).json({
        message: 'User created sucessfully',
        error: 'false',
        users: users.users
    })
}

exports.put = (req, res) => {
    res.send('Sucess put')
}

exports.delete = (req, res) => {
    res.send('Sucess delete')
}