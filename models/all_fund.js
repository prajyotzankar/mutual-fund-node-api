const mongoose = require('mongoose')
const Schema = mongoose.Schema

const all_fundSchema = new Schema({
  schemeCode: {
    type: Number,
    required: true,
    trim: true
  },
  schemeName: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('All_fund', all_fundSchema)
