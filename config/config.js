const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

module.exports = () => {
    const app = express()

    app.set('port', process.env.PORT || config.get('server.port'))
    app.set('views', path.join(__dirname, '../views'))
    console.log(__dirname)
    app.set('view engine', 'pug')
    
    app.use(bodyParser.json())

    // App routes
    require('../src/routes/pages')(app)
    require('../src/routes/users')(app)

    return app
}