const express = require('express')
const app = express()
const usersRouter = require('./routes/users')

app.set('view engine', 'ejs')

// get post put delete patch
app.get('/', (req, res, next) => {
  // res.send('hello')
  // res.json({ message: 'error' })
  // res.status(500).send('server error')
  // res.download('./server.js')
  res.render('index', { text: 'Express.js' })
})

app.use('/users', usersRouter)

const PORT = process.env.PORT || 3003

app.listen(PORT)
