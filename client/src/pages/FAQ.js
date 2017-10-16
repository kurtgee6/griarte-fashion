import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import FAQuestions from "../components/FAQ/FAQuestions.js";
import Header from "../components/Header/Header.js";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";

class FAQ extends React.Component {
    constructor(props) {
      super(props);
    };
    render() {
    return (
        <div>
        <ScrollHorizontal>
        <Header/>
        <FAQuestions/>
        <ShoppingCart/>
        <Navbar/>
        </ScrollHorizontal>
        </div>
    )};
};

export default FAQ;
