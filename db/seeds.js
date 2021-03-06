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
    picture_link:'https://i.imgur.com/s1agXxYb.jpg',
    favLayouts: [{name:'setting intention',img:"https://i.imgur.com/uNHppv2.jpg", num_of_cards:6, description:"setting intentions"}],
    readings:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})

const olee = new User({
    name: 'Olee',
    picture_link:'https://i.imgur.com/s1agXxYb.jpg',
    favLayouts: [{name:'You, Your Path, Your Potential',img:"https://www.buzzle.com/images/hobbies/tarot-card-reading/three-card-spread.jpg", num_of_cards:4, description:"3 Card Spread"}],
    readings:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})
const kristin = new User({
    name: 'kristin',
    picture_link:'https://i.imgur.com/s1agXxYb.jpg',
    favLayouts: [{name:'You, Relationship, Partner',img:"https://www.buzzle.com/images/hobbies/tarot-card-reading/three-card-spread.jpg", num_of_cards:3, description:"3 Card Spread"}],
    readings:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})
const stacy = new User({
    name: 'Stacy',
    picture_link:'https://i.imgur.com/s1agXxYb.jpg',
    favLayouts: [{name:'Situation, Action, Outcome',img:"https://www.buzzle.com/images/hobbies/tarot-card-reading/three-card-spread.jpg", num_of_cards:3, description:"3 Card Spread"}],
    readings:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})
const mom = new User({
    name: 'Mom',
    picture_link:'https://i.imgur.com/s1agXxYb.jpg',
    favLayouts: [{name:'Idea, Process, Aspiration',img:"https://www.buzzle.com/images/hobbies/tarot-card-reading/three-card-spread.jpg", num_of_cards:3, description:"3 Card Spread"}],
    readings:[{query_nickname:"what do I really want", question:"what do I really want", cards_index:[1,2,3], date:"today"}]
})


ayana.save()
.then(user=>{
    console.log (`${user.name} is in the database`)
    return olee.save()
})
.then(user=>{
    console.log (`${user.name} is in the database`)
    return kristin.save()
})
.then(user=>{
    console.log (`${user.name} is in the database`)
    return stacy.save()
})
.then(user =>{
    console.log (`${user.name} is in the database`)
    mongoose.connection.close()
})
.catch(err=>{
    console.log('sorry, there was an error')
    console.log(err)
})