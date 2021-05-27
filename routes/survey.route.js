const express = require('express');
const survey = express.Router();
const surveyRoute = require('../controllers/survey.controller.js');

survey.post('/survey',  surveyRoute.surveyControllerPost );
survey.get('/survey',  surveyRoute.surveyControllerGet );

module.exports = survey