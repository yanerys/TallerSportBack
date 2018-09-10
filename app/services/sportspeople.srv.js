'use strict';

const sportspeopleJson = require('../../assets/sportspeople.json');

module.exports.getAllSportspeople = function (success, error) {
    success(sportspeopleJson);
}