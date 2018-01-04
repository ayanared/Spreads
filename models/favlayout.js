const Schema = require('../db/schema')
const mongoose = require('mongoose')

const FavLayout = mongoose.model('FavLayout', Schema.FavLayoutSchema)
module.exports = FavLayout