const { mongooseToObject, MappingMongooseToObject } = require('../../utils/mongoose')
const Course = require('../models/Course')

class CourseController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        console.log({ courses123: MappingMongooseToObject(courses) })
        res.render('/', {
          courses: MappingMongooseToObject(courses),
        })
      })
      .catch(next)
  }
  detail(req, res, next) {
    // res.send('Course details -' + req.params.slug)
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        console.log({ course123123: course })
        res.render('courses/detail', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }
  create(req, res, next) {
    res.render('courses/create')
  }
}

module.exports = new CourseController()
