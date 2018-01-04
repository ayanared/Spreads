const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/spreads_db')

const User = require('../models/user')
const FavLayout = require('../models/favlayout')
const Reading = require('../models/reading')

User.remove()
.then(
    console.log('users were removed')
).catch(err=>{
    console.log(err)
})


const ayana = new User({
    name: 'Ayana',
    picture_link:'https://i.imgur.com/KSmcZFUs.jpg',
    favLayout: [{name:String,img:"", num_of_Cards:"3", description:"3 Card Spread"}],
    reading:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})


ayana.save()
.then(user=>{
    console.log (`${user.name} is in the database`)
    mongoose.connection.close()
})
.catch(err=>{
    console.log('sorry, there was an error')
    console.log(err)
})