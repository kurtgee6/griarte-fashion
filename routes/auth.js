const authController = require('../controllers/authcontroller.js');


module.exports = function(app, passport) {
 
    app.get('/SignUp', authController.signup);

    app.get('/SignIn', authController.signin);

    app.post('/SignUp', passport.authenticate('local-signup', {
	        successRedirect: '/',
	 
	        failureRedirect: '/SignUp'
	    }
 
	));

	app.post('/SignIn', passport.authenticate('local-signin', {
	        successRedirect: '/',
	 
	        failureRedirect: '/SignIn'
	    }
 
	));
 
}