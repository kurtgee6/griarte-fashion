import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import ShopNavbar from "../components/Nav/ShopNavbar.js";

class Shop extends React.Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
        <div>
            <Navbar/>
            <ShopNavbar/>
        </div>
    )};
};

export default Shop;