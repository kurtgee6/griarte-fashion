import React from "react";
import { Link } from "react-router-dom";
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';
import "./ShoppingCart.css"


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: null,
    // };
  }

  render() {
    return (
      <div>
          <SideNav
    	     trigger={<i class="material-icons">shopping_cart</i>}
    	      options={{ closeOnClick: true }}
    	       >
    	        <SideNavItem userView
    		        user={{
    			        image: './griarte_files/griarte8.jpg',
    			        name: 'Shoppers name:',
    			        email: 'shoppers@shoppers.com'
    		        }}
    	        />
    	      <SideNavItem>MY CART:</SideNavItem>
    	      <SideNavItem href='#!second'>Item</SideNavItem>
    	      <SideNavItem divider />
    	      <SideNavItem button waves='light'>BUY NOW</SideNavItem>
          </SideNav>
        </div>
    )
  }

}

  export default ShoppingCart;
