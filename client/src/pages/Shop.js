import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import ShopNavbar from "../components/Nav/ShopNavbar.js";
import "../components/Nav/ShopNavbar.css";

class Shop extends React.Component {

    render() {
    return (
        <div className="shopBackground">
            <Navbar/>
            <ShopNavbar/>
        </div>
    )};
};

export default Shop;