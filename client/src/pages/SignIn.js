import React, { Component, Redirect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import Navbar from "../components/Nav/Navbar.js";


class SignIn extends React.Component {
	
	state: {
		credentials: [],
		email: "",
		password: ""
	};

	componentDidMount() {
    	this.signIn();
  	}

  	signIn = id => {
  		API.getUserInfo(id)
  		.then(res => this.setState({credentials: res.data, email: "", password: "" })
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
  		if(this.state.email && this.state.password){
  			API.getUserInfo({
  				email: this.state.email,
  				password: this.state.password
  			})
  			.then(res => this.signIn())
  			.catch(err => console.log(err));
  		}
  	};

  render(){
	return(
		<div className="SignInPage">
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
				        value={this.state.password}
				        onChange={this.handleInputChange}
				        name="password" 
				        placeholder="Password (Required)" 
				        />
				        <FormBtn
			                disabled={!(this.state.email && this.state.password)}
			                onClick={this.handleFormSubmit}
			            >
			                Sign In
			            </FormBtn>
			    	</form>
			    </div>
		    </div>
		  </div>
		);
	}

};


export default SignIn;