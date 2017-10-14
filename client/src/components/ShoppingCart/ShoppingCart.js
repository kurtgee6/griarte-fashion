import React from "react";
import { Link } from "react-router-dom";
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize'



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
    			        background: 'img/office.jpg',
    			        image: 'img/yuna.jpg',
    			        name: 'John Doe',
    			        email: 'jdandturk@gmail.com'
    		        }}
    	        />
    	      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
    	      <SideNavItem href='#!second'>Second Link</SideNavItem>
    	      <SideNavItem divider />
    	      <SideNavItem subheader>Subheader</SideNavItem>
    	      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
          </SideNav>
        </div>
    )
  }

}

  export default ShoppingCart;
