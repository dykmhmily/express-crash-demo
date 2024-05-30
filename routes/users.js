const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  let page = req.query?.page ?? 1
  res.send(`users list?page=${page}`)
})

router.post('/', (req, res) => {
  const isValid = true
  if (isValid) {
    // store into users
    users.push({ name: req.body.firstName })
    // redirect to /users/:id
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log('error')
    res.redirect('/users/new')
  }
})

router.get('/new', (req, res) => {
  res.render('users/new')
})

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user)
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
