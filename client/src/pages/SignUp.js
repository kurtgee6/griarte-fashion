import React, { Component, Redirect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navbar from "../components/Nav/Navbar.js";


class SignUp extends React.Component {
	state = {
    users: [],
    email: "",
    firstname: "",
    lastname: "",
    password: ""
  	};

  	componentDidMount() {
    	this.signIn();
  	}

  	signIn = id => {
  		API.getUserInfo(id)
  		.then(res => this.setState({users: res.data, email: "", firstname: "", lastname: "", password: "" })
  			)
  		.catch(err => console.log(err));
  		console.log("Signed In...");
  	};

  	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	};

  	handleFormSubmit = event => {
  		event.preventDefault();
  		if(this.state.email && this.state.firstname && this.state.lastname && this.state.password){
  			API.newUser({
  				email: this.state.email,
  				firstname: this.state.firstname,
  				lastname: this.state.lastname,
  				password: this.state.password
  			})
  			.then(res => this.signIn())
  			.catch(err => console.log(err));
  		}
  	};

render(){
	return(
		<div className="SignUpPage">
		  	<div className="row">
		  		<div className="col s2 offset-s2">
			      	<form>
				        <Input 
				        value={this.state.email}
				        onChange={this.handleInputChange}
				        name="email" 
				        placeholder="Email (Required)" 
				        />
				        <Input 
				        value={this.state.firstname}
				        onChange={this.handleInputChange}
				        name="firstname" 
				        placeholder="First Name (Required)" 
				        />
				        <Input 
				        value={this.state.lastname}
				        onChange={this.handleInputChange}
				        name="lastname" 
				        placeholder="Last Name (Required)" 
				        />
				        <Input 
				        value={this.state.password}
				        onChange={this.handleInputChange}
				        name="password" 
				        placeholder="Password (Required)" 
				        />
				        <FormBtn
			                disabled={!(this.state.email && this.state.firstname && this.state.lastname && this.state.password)}
			                onClick={this.handleFormSubmit}
			            >
			                Sign Up
			            </FormBtn>
			    	</form>
			    </div>
		    </div>
		  </div>
		);
	}
};

export default SignUp;