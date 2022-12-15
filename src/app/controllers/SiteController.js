const { MappingMongooseToObject } = require('../../utils/mongoose')
const Course = require('../models/Course')

class SiteController {
  index(req, res, next) {
    // res.render('home')

    Course.find({})
      .then((courses) => {
        console.log({ courses123: MappingMongooseToObject(courses) })
        res.render('home', {
          courses: MappingMongooseToObject(courses),
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
