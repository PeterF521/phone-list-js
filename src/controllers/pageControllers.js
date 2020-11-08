const data = require('../data/data')
const users = data.load()

exports.get = (req, res) => {
    res.render('index', {
        contacts: users.users
    })
}