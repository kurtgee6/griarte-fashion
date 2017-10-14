//Require griarte fasion app dependencies
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const routes = require('./routes');

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

//Require our DB Models user, clothing and faq
const models = require("./models");

// Add our routes
app.use(routes);
 
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