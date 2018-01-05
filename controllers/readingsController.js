const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const FavLayout = require('../models/favlayout')
const Reading = require('../models/reading')
//================================
//  READ (see all readings)
//================================
router.get('/', (req, res) => {
    const userId = req.params.userId
    console.log("userId" + userId)
    User.findById(userId)
        .then(user => {
            res.render('readings/index_readings.hbs', {
                user:user,
                reading:user.reading
            })
        })
})
//================================
//  READ (see new form)
//================================

router.get('/new', function (req, res) {
    User.findById(req.params.userId)
        .then(user => {
            res.render("readings/new_reading.hbs", {
                user: user
            })
        })
        .catch(err => {
            console.log(err)
        })
})

//================================
//  POST (create new reading)
//================================
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newReading = req.body
    User.findById(userId)
        .then((user) => {
            user.reading.push(newDay)
            return user.save()
        })
        .then((user) => {
            res.redirect(`/users/${userId}/readings`)
        })
        .catch(err => {
            console.log(`sorry, didn't save user`)
            console.log(err)
            res.redirect(`/users/${userId}/readings`)
        })

})

//================================
//  READ (see specific reading)
//================================
router.get('/:readingId', (req, res) => {
    const readingId = req.params.readingId
    const userId = req.params.userId
    User.findById(userId).then(user => {
        const reading = user.reading.id(readingId)
        
        res.render('readings/show_reading.hbs', {
            user:user,
            reading : reading         
        })
    })
        .catch(err => {
            console.log(err)
            console.log('did not work')
        })
})

// //================================
// //  PUT (edit day)
// //================================
// router.put('/:dayId', (req, res) => {
//     const updated = {
//         month: req.body.month,
//         day: req.body.day,
//         year: req.body.year,
//         mood: req.body.mood,
//         moon: req.body.moon,
//         workoutIntensity: req.body.workoutIntensity,
//         workout: req.body.workout
//     }
//     const userId = req.params.userId
//     const dayId = req.params.dayId
//     User.findById(userId)
//         .then(user => {
//             user.day.id(dayId).set(updated)
//             return user.save()
//         })
//         .then(user => {
//             res.redirect(`/users/${userId}/days/`)

//         })
//         .catch(err => {
//             console.log(err)
//         })
// })
// //=====================================
// //  Destroy (actually GET) (delete day)
// //======================================
// router.get('/:dayId/delete', (req, res) => {
//     const userId = req.params.userId
//     const dayId = req.params.dayId

//     User.findById(userId)
//         .then(user => {
//             user.day.id(dayId).remove()
//             console.log('deleted day')
//             return user.save()
//         })
//         .then((user) => {
//             res.redirect(`/users/${userId}/days`)
//             console.log('deleted day')
//         })
//         .catch(err => {
//             console.log('didnt delete')
//         })
// })

module.exports = router