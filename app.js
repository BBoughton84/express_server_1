var express = require('express')
const app = express()
const bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080

var routes = require('./routes.js')

app.use('/routes', routes)



app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
