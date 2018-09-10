'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

var sportsController = require('./app/controllers/sports.ctrl.js');
var sportspeopleController = require('./app/controllers/sportspeople.ctrl.js');


const port = 8000;

app.options('*', cors());
app.use(cors());

app.use('/sports/api', [sportsController, sportspeopleController]);

app.use('/sports/api/*', function (req, res, next) {
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Sports back listening on ' + port);
});