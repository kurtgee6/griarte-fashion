import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import TakeMoney from "../Stripe-Checkout/Stripe-Checkout.js";
import Navbar from "../Nav/Navbar.js";



const ShoppingCart = () =>
  <div className="ShoppingCartPage">
    <h1 className="ShopTitle">My Items</h1>
    <Navbar/>
    <div className="Purchase"><TakeMoney/></div>
  </div>


  export default ShoppingCart;
