'use strict';
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var rp = require('request-promise');
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('src/dist/'));
app.get('/', function(request, response) {
  response.redirect('index.html');
});
app.get('*', function(req, res) {
  res.sendStatus(404);
});
const port = process.env.PORT || 3200;
app.listen(port, function() {
  console.log(`Application listening on port ${port}`);
});

module.exports = app;
