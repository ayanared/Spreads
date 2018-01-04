const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const FavLayout = require('../models/favlayout')
const Reading = require('../models/reading')
//================================
//  READ (see all users)
//================================
router.get('/', (req, res) => {
  User.find().then(users => {
    res.render('Users/index_users.hbs', {
      users: users
    })
  }).catch(err => {
    console.log(error)
    res.json("caught error")
  })
})
//================================
//  READ (see new form)
//================================

router.get('/new', function (req, res) {
  res.render("users/new_user.hbs")
})

//================================
//  POST (create new user)
//================================
router.post('/', (req, res) => {
  console.log("here")
  const newUser = new User({
    name: req.body.name,
    picture_link: req.body.picture_link
  })
  newUser.save()
    .then(user => {
      console.log(user.name + " is in the database")
      res.redirect(`/users/${user.id}`)
    })
    .catch(err => {
      console.log(`sorry, didn't work`)
      console.log(err)
      res.redirect(`/users`)
    })
})
//================================
//  READ (see specific user)
//================================
router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  User.findById(userId).then(user => {
    res.render('Users/show_user.hbs', {
      user: user
    })
  })

 })
//===================================
//  READ (see the form to edit a user)
//===================================
router.get('/:userId/edit', (req, res) => {
  const userId = req.params.userId
  User.findById(userId).then(user => {
    res.render('Users/edit_user', {
      user:user
    })
  })

 })
// //================================
// //  PUT (edit specific user)
// //================================
// router.put('/:userId', (req, res) => {
//   const updated = {
//     name: req.body.name,
//     picture_link: req.body.picture_link
//   }
//   const userId = req.params.userId
//   User.findByIdAndUpdate(userId, updated, { new: true })
//     .then(user => {
//       res.redirect(`/users/${userId}`)
//     })
//     .catch(err => {
//       console.log(err)
//     })

// })
// //===================================
// //  READ (see the form to delete auser)
// //===================================
// router.get('/:userId/delete', (req, res) => {
//   console.log("got here to render delete")
//   const userId = req.params.userId
//   User.findById(userId)
//     .then(user => {
//       console.log("got here")
//       res.render('users/delete_confirm', {
//         name: user.name,
//         id: user.id
//       })
//     })

// })
// //=====================================
// //  Destroy (actually GET) (delete user)
// //======================================
// router.get('/:userId/delete_forReal', (req, res) => {
//   const userId = req.params.userId
//   User.findByIdAndRemove(userId)
//   .then(user=>{
//     res.redirect('/users')
//     console.log('deleted user')
//   }).catch(err=>{
//     console.log('didnt delete')
//   })
// })


module.exports = router