//Require griarte fasion dependencies
const express = require('express');
const request = require('request');
const app = express();

const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const Stripe = require('stripe');
const routes = require('../griarte-fashion/routes');
const PORT = process.env.JAWSDB_URL || 3001;

///////////////////////////////////////////////////////// STRIPE /////////////////////////////////////////////////////////


app.post('/charge',function(req, res){

var stripe = require('stripe')("sk_test_zEUsB2qIFm8kLWvwuCz9aI4D");

// Get the payment token ID submitted by the form:
//var token = request.body.stripeToken; // Using Express

//console.log(token);

// // Get the payment token ID submitted by the form:
// var token = request.body.stripeToken; // Using Express


// // Create a Customer:
// stripe.customers.create({
//   email: "paying.user@example.com",
//   source: token,
// }).then(function(customer) {
//   // YOUR CODE: Save the customer ID and other info in a database for later.
//   return stripe.charges.create({
//     amount: 1000,
//     currency: "usd",
//     customer: customer.id,
//   });
// }).then(function(charge) {
//   // Use and save the charge info.
// });


})

///////////////////////////////////////////////////////// STRIPE /////////////////////////////////////////////////////////


//The code below allows our app to the body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

//The code below allows us to add passport and express as middleware
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions



app.get('/', function(req, res) {

    res.send('Welcome to Griarte Fashion!');

});

//Require our DB Models user, clothing and faq
const models = require("./models");

// Add our routes
app.use(routes);

//Authentication Route
const authRoute = require('../griarte-fashion/routes/auth.js')(app, passport);

//load passport strategies
require('../griarte-fashion/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function(err) {

    if (!err) {
        console.log("Site is live");
        console.log("Listening on port: " + PORT);
    }
    else console.log(err)

});
