const express = require('express')
const app = express()
const usersRouter = require('./routes/users')

app.set('view engine', 'ejs')
app.use(Logger)
app.use(express.static('public'))
app.use('/static', express.static('public'))

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
