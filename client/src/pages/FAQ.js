import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import FAQuestions from "../components/FAQ/FAQuestions.js";
import Header from "../components/Header/Header.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";
import VSocialMedia from "../components/SocialMedia/VSocialMedia.js";

class FAQ extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        name: "",
        email: "",
        message: ""
    }

    };
    myClick = () => {
        alert("Your message has been sent!");
        console.log(this.state.email);
        console.log(this.state.name);
        console.log(this.state.message);
    }

    render() {
    return (
        <div>
            <ScrollHorizontal>
            <FAQuestions
                onNameChange={(e) => this.setState({ name: e.target.value })}
                onEmailChange={(e) => this.setState({ email: e.target.value  })}
                onMessageChange={(e) => this.setState({ message: e.target.value  })}
                myClick={this.myClick}
            />
            <Navbar/>
            <VSocialMedia/>
            </ScrollHorizontal>
        </div>
    )};
};

export default FAQ;
