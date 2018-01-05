const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavLayoutSchema = new Schema({
    name: String,
    img: String,
    num_of_cards: Number,
    description: String
}, {usePushEach: true})

const ReadingSchema = new Schema({
    query_nickname: String,
    question: String,
    cards_index: [Number],
    date: String
}, {usePushEach: true})

const UserSchema = new Schema({
    name: {type: String, required: true},
    picture_link: String,
    favLayout: [FavLayoutSchema],
    readings: [ReadingSchema]

}, {usePushEach: true})

module.exports = {
    UserSchema,
    ReadingSchema,
    FavLayoutSchema
}
