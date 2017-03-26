const router = require('express').Router()
const knex = require('../db/knex.js')




router.get('/', (req, res) => {
  knex('dirtbike')
    .then(result => {
      res.send(result)
    })
})

//not working
router.post('/post', (req, res) => {
  var name1 = req.body.name
  var make1 = req.body.make
  var size1 = req.body.size
  knex('dirtbike').insert({make:make1, name:name1, size:size1}).returning(['id', 'make', 'name', 'size'])
    .then(result => {
      res.send(200)
    })
})

router.delete('/:id', (req, res) => {
  var id = req.params.id
  knex('dirtbike').where('id', id).del()
    .then(result => {
      res.send(200)
    })
})



module.exports = router
