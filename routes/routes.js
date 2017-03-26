const router = require('express').Router()
const knex = require('../db/knex.js')




router.get('/', (req, res) => {
  knex('dirtbike')
    .then(result => {
      res.send(result)
    })
})

router.post('/post', (req, res) => {
  var name = req.body.name
  var make = req.body.make
  var size = req.body.size
  knex('dirtbike').insert({make:make, name:name, size:size})
    .then(result => {
      res.send(200)
    })
})



module.exports = router
