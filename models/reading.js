const Schema = require('../db/schema')
const mongoose = require('mongoose')

const Reading = mongoose.model('Reading', Schema.ReadingSchema)
module.exports = Reading