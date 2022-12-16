const mongoose = require('mongoose')
slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema(
  {
    // _id: { type: String, maxLength: 255 },
    title: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 1000, require: true },
    image: { type: String, maxLength: 255, require: true },
    slug: { type: String, maxLength: 255, slug: 'title', unique: true, require: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('courses', Course)
