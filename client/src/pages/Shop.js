import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import ShopNavbar from "../components/Nav/ShopNavbar.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";

class Shop extends React.Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
        <div>
            <ScrollHorizontal>
            <Navbar/>
            <ShopNavbar/>
            </ScrollHorizontal>
        </div>
    )};
};

export default Shop;