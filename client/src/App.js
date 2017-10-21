import React from "react";
import { BrowserRouter as Router, Route, Switch, Default } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import QuickView from "./pages/QuickView.js";
import Fashion from "./pages/Fashion.js";
import FAQ from "./pages/FAQ.js";
import ShoppingCart from "./pages/ShoppingCart.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import "./App.css";

const App = () => 
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Shop/:id" component={QuickView} />
        <Route exact path="/Fashion" component={Fashion} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  </Router>;

export default App;
