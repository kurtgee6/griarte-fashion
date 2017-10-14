import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () =>
  <div className="SignUpPage">
  	<div className="row">
  		<div className="col s2 offset-s2">
	      	<form className="card-panel grey lighten-4" id="signup" name="signup" method="post" action="/signup">
		        <label for="email">Email Address</label>
		        <input className="text" name="email" type="email" />
		        <label for="firstname">Firstname</label>
		        <input name="firstname" type="text" />
		        <label for="lastname">Lastname</label>
		        <input name="lastname" type="text" />
		        <label for="password">Password</label>
		        <input name="password" type="password" />
		        <input className="btn red" type="submit" value="Sign Up" />
	    	</form>
	    </div>
    </div>
  </div>;

export default SignUp;
