const router = require('express').Router()

router.route('/').get((req, res) => {
  res.end('home works....')
})

module.exports = router
