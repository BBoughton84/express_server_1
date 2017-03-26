var express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080

var routes = require('./routes/routes.js')

app.use('/routes', routes)

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
