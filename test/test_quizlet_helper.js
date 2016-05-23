'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var QuizletHelper = require('../quizlet_helper');
chai.config.includeStack = true;

describe('QuizletHelper', function() {
	
	var quizlet = new QuizletHelper();

	// this should be a JSON with the response and header
	var user = quizlet.linkAccount();

	console.log("user is " + user);
});