const express = require('express')
var morgan = require('morgan')
var { engine: handlebars } = require('express-handlebars')
var path = require('path')

const route = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3000

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded())
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
