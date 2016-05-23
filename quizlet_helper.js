'use strict'

var creds = require('./credentials');


var myClientId = creds.myClientId;
var mySecret = creds.mySecret;

// URLs
var authorizeUrl = "https://quizlet.com/authorize?client_id=" + myClientId + "&response_type=code&scope=read";
var tokenUrl = 'https://api.quizlet.com/oauth/token';
var myUrl = "http://localhost:8080"
var token;

function QuizletHelper() { }

// This is where to do all the oauth2 stuff to log in.
QuizletHelper.prototype.linkAccount = function() {

	// Set the client credentials and the OAuth2 server 
	var credentials = {
	  clientID: myClientId,
	  clientSecret: mySecret,
	  site: authorizeUrl
	};

	// Initialize the OAuth2 Library 
	var oauth2 = require('simple-oauth2-promise')(credentials);

	// Get the access token object (the authorization code is given from the previous step). 
	var token;
	oauth2.authCode.getToken({
	  code: '<code>',
	  redirect_uri: 'http://localhost:3000/'
	}, saveToken);
 
	// Save the access token 
	function saveToken(error, result) {
	  if (error) { 
	  	console.log('Access Token Error', error.message); 
	  }
	  token = oauth2.accessToken.create(result);
	  console.log(token);
	}

	return token;	
}

module.exports = QuizletHelper;