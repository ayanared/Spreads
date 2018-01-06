require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const index = require('./controllers/indexController')
const users = require('./controllers/usersController')
const readings = require('./controllers/readingsController')
const layouts = require('./controllers/layoutsController')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI) 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Now that we're connected, let's save that connection to the database in a variable.
const db = mongoose.connection

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
  console.log(err)
})

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
  console.log('database has been connected!')
})

app.use('/', index)
app.use('/users', users)
app.use('/users/:userId/readings', readings)
app.use('/users/:userId/layouts', layouts)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
