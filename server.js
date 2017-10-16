// const stripe = require('stripe')('sk_test_zEUsB2qIFm8kLWvwuCz9aI4D');

// // Stripe

// stripe.customers.create(
//   { email: 'customer@example.com' },
//   function(err, customer) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(customer)
//     }
//   }
// );


//Require griarte fasion dependencies
var express = require('express');
var app = express();

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();

//The code below allows our app to the body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//The code below allows us to add passport and express as middleware
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

 
 
app.get('/', function(req, res) {
 
    res.send('Welcome to Griarte Fashion!');
 
});

//Models
var models = require("./models");
 
//Sync Database
models.sequelize.sync({force: true}).then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
app.listen(5000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});