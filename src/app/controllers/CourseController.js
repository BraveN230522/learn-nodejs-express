const { mongooseToObject, MappingMongooseToObject } = require('../../utils/mongoose')
const Course = require('../models/Course')

class CourseController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('/', {
          courses: MappingMongooseToObject(courses),
        })
      })
      .catch(next)
  }

  recycleBin(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render('courses/recycleBin', {
          courses: MappingMongooseToObject(courses),
        })
      })
      .catch(next)
  }

  detail(req, res, next) {
    // res.send('Course details -' + req.params.slug)
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/detail', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }

  detailDeleted(req, res, next) {
    // res.send('Course details -' + req.params.slug)
    Course.findOneDeleted({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/detail', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }

  create(req, res, next) {
    res.render('courses/create')
  }

  store(req, res, next) {
    const formData = req.body
    formData.image = 'https://picsum.photos/1080/1920'
    const course = new Course(formData)
    course.save(function (err) {
      if (err) return handleError(err)
      res.redirect('/')
    })
  }

  edit(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .then((course) => {
        console.log({ course123123: course })
        res.render('courses/edit', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }

  update(req, res, next) {
    const formData = req.body
    Course.updateOne({ _id: req.params.id }, formData)
      .then(() => {
        res.redirect('/')
      })
      .catch(next)
  }

  restore(req, res, next) {
    const formData = req.body
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  delete(req, res, next) {
    const formData = req.body
    Course.delete({ _id: req.params.id }, formData)
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  forceDelete(req, res, next) {
    const formData = req.body
    Course.deleteOne({ _id: req.params.id }, formData)
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }
}

module.exports = new CourseController()
