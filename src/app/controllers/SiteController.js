const { MappingMongooseToObject } = require('../../utils/mongoose')
const Todo = require('../models/Todo')

class SiteController {
  index(req, res, next) {
    // res.render('home')

    Todo.find({})
      .then((todos) => {
        res.render('home', {
          todos: MappingMongooseToObject(todos),
        })
      })
      .catch(next)
    // res.json({
    //   name: 'test',
    // })
  }
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
