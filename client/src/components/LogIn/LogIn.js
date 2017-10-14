import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () =>
  <div className="LogInPage">
  	<div className="row">
  		<div className="col s2 offset-s2">
	      	<form className="card-panel grey lighten-4" id="signup" name="signup" method="post" action="/signup">
		        <label for="email">Email Address</label>
		        <input className="text" name="email" type="email" />
		        <label for="password">Password</label>
		        <input name="password" type="password" />
		        <input className="btn red" type="submit" value="Sign In" />
	    	</form>
	    </div>
    </div>
  </div>;

export default LogIn;
