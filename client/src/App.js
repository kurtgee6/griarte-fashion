import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import QuickView from "./pages/QuickView.js";
import FashionPage from "./pages/FashionPage.js";
import FAQ from "./pages/FAQ.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Shop/:id" component={QuickView} />
        <Route exact path="/Fashion" component={FashionPage} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
      </Switch>
    </div>
  </Router>;

export default App;
