const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
  {
    title: String,
    tasks: [{ task: String, done: Boolean, date: Number }],
    date: Number,
  }, { versionKey: false }
)

module.exports = mongoose.model('cards', Card)