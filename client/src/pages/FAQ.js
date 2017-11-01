import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import FAQuestions from "../components/FAQ/FAQuestions.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";
import VSocialMedia from "../components/SocialMedia/VSocialMedia.js";

class FAQ extends React.Component {
    render() {
    return (
        <div>
            <ScrollHorizontal>
            <FAQuestions/>
            <Navbar/>
            <VSocialMedia/>
            </ScrollHorizontal>
        </div>
    )};
};

export default FAQ;
