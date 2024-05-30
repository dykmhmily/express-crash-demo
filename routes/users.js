const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('users list')
})

router.post('/', (req, res) => {
  res.send('create new user')
})

router.get('/new', (req, res) => {
  res.send('new user form')
})

router
  .route('/:id')
  .get((req, res) => {
    res.send(`get user id ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`update user id ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`delete user id ${req.params.id}`)
  })

const users = [{ name: 'Alice' }, { name: 'Benny' }]
router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router
