const express = require('express')
const app = express()
const usersRouter = require('./routes/users')

// template engine
app.set('view engine', 'ejs')
// middleware
app.use(Logger)
// render static files
app.use(express.static('public'))
app.use('/static', express.static('public'))
// parse form
app.use(express.urlencoded({ extended: true }))
// parse JSON
app.use(express.json())

// get post put delete patch
app.get('/', Logger, (req, res, next) => {
  // res.send('hello')
  // res.json({ message: 'error' })
  // res.status(500).send('server error')
  // res.download('./server.js')
  res.render('index', { text: 'Express.js' })
})

app.use('/users', usersRouter)

function Logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

const PORT = process.env.PORT || 3003

app.listen(PORT)
