const express = require('express')
var morgan = require('morgan')
var { engine: handlebars } = require('express-handlebars')
var path = require('path')
var methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3000

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      id(id) {
        return id + 1
      },
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.get('/', (req, res) => res.send('Hello hot reload!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
