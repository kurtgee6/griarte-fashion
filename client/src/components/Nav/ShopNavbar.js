import React from "react";
import { Tab, Tabs } from "react-materialize";
import "./ShopNavbar.css";

const ShopNavbar = () =>
    <Tabs className='tab-demo z-depth-1'>
        <Tab title="Test 1">Test 1</Tab>
        <Tab title="Test 2" active>Test 2</Tab>
        <Tab title="Test 3">Test 3</Tab>
        <Tab title="Test 4">Test 4</Tab>
    </Tabs>
    // <div className="ShopNav">
    //     <p id="ShopNavShirts">
    //         All
    //     </p>
    //     <p id="ShopNavShirts">
    //         Long<br/>Sleeves
    //     </p>
    //     <p id="ShopNavShirts">
    //         Short<br/>Sleeves
    //     </p>
    //     <p id="ShopNavShirts">
    //         Sweatshirts/<br/>Jackets
    //     </p>
    //     <p id="ShopNavShirts">
    //         Sweatpants/<br/>Leggings
    //     </p>
    //     <p id="ShopNavShirts">
    //         Accesories 
    //     </p>
    // </div>
export default ShopNavbar;
