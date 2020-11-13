const data = require('../data/data')

const users = data.load()

function checkBodyRequest(body) {
    if(body.name === undefined || body.contacts === undefined) {
        const error = new Error('Body name or/and contacts must not be undefined')
        error.statusCode = 400
        return error
    }

    if(!Array.isArray(body.contacts)) {
        const newData = handleFormData(body)
        if(!newData) {
            const err = new Error('Contacts must not be undefined!')
            err.statusCode = 4000
            return err
        }
        return newData
    }
    return body.contacts
}

function handleFormData(body) {
    const rule = /(\d{9})|([a-z]+[0-9]*)[@]([a-z]+)[.]([a-z]+)/gm
    const contactsArray = body.contacts.match(rule)

    return contactsArray
}

function getId() {
    const number = Number(users.users.length)
    return number + 1
}

exports.get = (req, res) => {
    res.status(200).json(users.users)
}

exports.post = (req, res) => {
    const newContacts = checkBodyRequest(req.body)

    const user = {
        id: getId(),
        name: req.body.name,
        contacts: newContacts
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