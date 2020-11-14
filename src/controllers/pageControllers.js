const data = require('../data/data')
const users = data.load()

exports.get = (req, res) => {
    res.render('index', {
        contacts: users.users
    })
}

exports.newUserPage = (req, res) => {
    res.render('newUser', {
        name: 'New User',
        contacts: users.users
    })
}

exports.newUser = (req, res) => {
    try {
        const contacts = handleFormData(req.body)
        if(contacts === null) throw new Error('Invalid contact!')
        const user = {
            id: random(),
            name: req.body.name,
            contacts: contacts
        }
    
        users.users.push(user)
        data.save(users)

        res.status(201).render('submitStatus', {
            error: false,
            userId: user.id
        })
    } catch(err) {
        res.status(err.statusCode || 500).render('submitStatus', {
            error: true,
            msg: 'Oops! An error ocurred!'
        })
    }

}
function handleFormData(body) {
    const rule = /(\d{9})|([a-z]+[0-9]*)[@]([a-z]+)[.]([a-z]+)/gm
    const contactsArray = body.contacts.match(rule)

    return contactsArray
}

function random() {
    const length = users.users.length
    return length + 1
}