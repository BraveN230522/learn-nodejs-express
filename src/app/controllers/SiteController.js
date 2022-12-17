const { MappingMongooseToObject } = require('../../utils/mongoose')
const Course = require('../models/Course')

class SiteController {
  index(req, res, next) {
    // res.render('home')
    Promise.all([Course.find({}), Course.countDeleted({})])
      .then(([courses, coursesDeleted]) => {
        res.render('home', {
          courses: MappingMongooseToObject(courses),
          coursesDeleted,
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
