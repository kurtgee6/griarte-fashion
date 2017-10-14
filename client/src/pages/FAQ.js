import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import FAQuestions from "../components/FAQ/FAQuestions.js";
import Header from "../components/Header/Header.js";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.js"


const FAQ = () => (
  <div>
    <Header/>
    <FAQuestions/>
    <ShoppingCart/>
    <Navbar/>
  </div>

);

export default FAQ;
