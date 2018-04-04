var express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');


app.set('view engine','ejs');
app.set('views','app/views');


app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());

consign().
  include('app/routes').
  then('app/controllers').
  into(app);


module.exports = app;