const pageControllers = require('../controllers/pageControllers')

module.exports = app => {
    app.get('/', pageControllers.get)
    app.get('/newUser', pageControllers.newUserPage)

    return app
}