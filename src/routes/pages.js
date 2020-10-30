const pageControllers = require('../controllers/pageControllers')

module.exports = app => {
    app.get('/', pageControllers.get)

    return app
}