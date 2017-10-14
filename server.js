const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const stripe = require('stripe')('sk_test_zEUsB2qIFm8kLWvwuCz9aI4D');

// Stripe

stripe.customers.create(
  { email: 'customer@example.com' },
  function(err, customer) {
    if (err) {
      console.log(err)
    } else {
      console.log(customer)
    }
  }
);



// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});