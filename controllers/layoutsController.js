const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const FavLayout = require('../models/favlayout')
const Reading = require('../models/reading')
//================================
//  READ (see all layouts)
//================================
router.get('/', (req, res) => {
    const userId = req.params.userId
    console.log("userId" + userId)
    User.findById(userId)
        .then(user => {
            res.render('layouts/index_layouts.hbs', {
                user:user,
                layouts:user.favLayouts
            })
        })
})
//================================
//  READ (see new form)
//================================

router.get('/new', function (req, res) {
    User.findById(req.params.userId)
        .then(user => {
            res.render("layouts/new_layout.hbs", {
                user: user
            })
        })
        .catch(err => {
            console.log(err)
        })
})

//================================
//  POST (create new layout)
//================================
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newLayout = req.body
    User.findById(userId)
        .then((user) => {
            console.log("found user")
            user.favLayouts.push(newLayout)
            return user.save()
        })
        .then((user) => {
            res.redirect(`/users/${userId}/layouts`)
        })
        .catch(err => {
            console.log(`sorry, didn't save user`)
            console.log(err)
            res.redirect(`/users/${userId}/layouts`)
        })

})

// //================================
// //  READ (see specific reading)
// //================================
// router.get('/:readingId', (req, res) => {
//     const readingId = req.params.readingId
//     const userId = req.params.userId
//     User.findById(userId).then(user => {
//         const reading = user.readings.id(readingId)
        
//         res.render('readings/show_reading.hbs', {
//             user:user,
//             reading : reading         
//         })
//     })
//         .catch(err => {
//             console.log(err)
//             console.log('did not work')
//         })
// })

// //=====================================
// //  Destroy (actually GET) (delete day)
// //======================================
// router.get('/:readingId/delete', (req, res) => {
//     const userId = req.params.userId
//     const readingId = req.params.readingId
//     console.log("inside delete route")

//     User.findById(userId)
//         .then(user => {
//             user.readings.id(readingId).remove()
//             console.log('deleted reading')
//             return user.save()
//         })
//         .then((user) => {
//             res.redirect(`/users/${userId}/readings`)
//             console.log('deleted reading')
//         })
//         .catch(err => {
//             console.log('didnt delete')
//             console.log(err)
//         })
// })

 module.exports = router