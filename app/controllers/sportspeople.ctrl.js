'use strict';

var express = require('express');
var router = express.Router();
var sportspeopleService = require('../services/sportspeople.srv.js');

router.get('/sportspeople', function(req, res){
    sportspeopleService.getAllSportspeople(function(sportspeople){
        res.statusCode = 200;
        res.send(sportspeople);
    });
});

module.exports = router;