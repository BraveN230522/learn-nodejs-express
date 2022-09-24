const express = require('express')
var morgan = require('morgan')
var { engine: handlebars } = require('express-handlebars')
var path = require('path')

const app = express()
const port = 3000

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
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
