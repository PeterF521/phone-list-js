const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.set('port', process.env.PORT || config.get('server.port'))
    app.set('view engine', 'pug')
    
    app.use(bodyParser.json())

    // App routes
    require('../src/routes/pages')(app)
    require('../src/routes/users')(app)

    return app
}