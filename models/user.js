const Schema = require('../db/schema')
const mongoose = require('mongoose')

const User = mongoose.model('User', Schema.UserSchema)
module.exports = User