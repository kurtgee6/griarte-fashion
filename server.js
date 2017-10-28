//Require griarte fasion dependencies
var express = require('express');
var request = require('request');
var app = express();

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var Stripe = require('stripe');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;


///////////////////////////////////////////////////////// STRIPE /////////////////////////////////////////////////////////


app.post('/charge',function(req, res){

var stripe = require('stripe')("sk_test_zEUsB2qIFm8kLWvwuCz9aI4D");

// Get the payment token ID submitted by the form:
var token = request.body.stripeToken; // Using Express

console.log(token);

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
const authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

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
