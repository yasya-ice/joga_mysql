const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const app = express()

app.set('views', path.json(__dirname, 'views'))
app.set('view engine', 'hbs'({
    extname: 'hbs',
    defaultLayot: 'main',
    LayoutsDir: __dirname + '/views/layouts/'
}))

app.use(bodyParser.urlencoded({extended: true}))

module.exports = app