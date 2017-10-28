import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import TakeMoney from "../Stripe-Checkout/Stripe-Checkout.js";
import Navbar from "../Nav/Navbar.js";



const ShoppingCart = () =>
<div>
  <Navbar/>
  <div className="ShoppingCartPage">
    <h1 className="ShopTitle">My Items</h1>
      <div className="item1">

      <p id="shirtName">
        gree
      </p>
      <p id="shirtSize">
        S
      </p>
      <p id="shirtAmount">
        $20
      </p>
      </div>

    <div className="Purchase"><TakeMoney/></div>
  </div>
</div>


  export default ShoppingCart;
