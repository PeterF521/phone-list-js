const usersControllers = require('../controllers/usersControllers')

module.export = app => {
    app.route('/users')
        .get(usersControllers.get)
        .post(usersControllers.post)

    app.route('/users/:id')
        .put(usersControllers.put)
        .delete(usersControllers.delete)
}