import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import TakeMoney from "../Stripe-Checkout/Stripe-Checkout.js";
import Navbar from "../Nav/Navbar.js";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class ShoppingCart extends Component {
  render(){
    return(
    <div>
        <Navbar/>
        <List>
          <ListItem>
            <p>Type</p>
            <p>Price</p>
            <p>Sizes</p>
            <p>Quantity</p>
            <DeleteBtn onClick={() => this.deleteClothingItem()} />
          </ListItem>
        </List>

        <div className="Purchase"><TakeMoney/></div>
        <div>
          <Link to={"/Shop"}><h3>Continue Shopping</h3></Link>
        </div>
      </div>
      )
    

  }
} 
  



 export default ShoppingCart;