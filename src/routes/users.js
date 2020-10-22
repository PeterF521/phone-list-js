module.export = app => {
    app.route('/users')
        .get()
        .post()

    app.route('/users/:id')
        .put()
        .delete()
}