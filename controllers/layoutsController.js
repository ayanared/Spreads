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

//================================
//  READ (see specific layout)
//================================
router.get('/:layoutId', (req, res) => {
    const layoutId = req.params.layoutId
    const userId = req.params.userId
    console.log("see a layout")
    User.findById(userId).then(user => {
        const cardlayout = user.favLayouts.id(layoutId)
        
        res.render('layouts/show_layout.hbs', {
            user:user,
            cardlayout:cardlayout         
        })
    })
        .catch(err => {
            console.log(err)
            console.log('did not work')
        })
})

//=====================================
//  Destroy (actually GET) (delete layout)
//======================================
router.get('/:layoutId/delete', (req, res) => {
    const userId = req.params.userId
    const layoutId = req.params.layoutId
    console.log("inside delete route")

    User.findById(userId)
        .then(user => {
            user.favLayouts.id(layoutId).remove()
            console.log('deleted reading')
            return user.save()
        })
        .then((user) => {
            res.redirect(`/users/${userId}/layouts`)
            console.log('deleted layouts')
        })
        .catch(err => {
            console.log('didnt delete')
            console.log(err)
        })
})

 module.exports = router