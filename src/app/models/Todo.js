const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({
  // _id: { type: String, maxLength: 255 },
  title: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 1000 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('todos', Todo)
