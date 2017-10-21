//Require griarte fasion app dependencies
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;




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
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});