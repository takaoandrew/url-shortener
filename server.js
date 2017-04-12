var express = require('express')
var opn = require('opn')
var app = express()
var openurl = require('openurl')
var url
var http = require('http')
app.get('/1000', function (req, res) {
  openurl(url) 
  res.send(url)
});
app.get('/:query', function (req, res) {
  url = req.params.query
  openurl.open(url)
  res.end(url)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
