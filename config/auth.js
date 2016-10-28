// config/auth.js

// expose our config directly to our application using module.exports

module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1850299305188317', // your App ID
		'clientSecret' 	: '05f840038a508593f41f29526f878685', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'm68crxnofmI7HYP206cJSvDEY',
		'consumerSecret' 	: 'aSUthkRtyvMWfsO3FUvRxjLnFjDRy11Jh7JERtsqRCYxMmNG3f',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
