import React from "react";
import { Link } from "react-router-dom";
import "./SocialMedia.css";

const SocialMedia = () => 
    <div>
        <p id="Authentication">What's Up? Let's Sign Up!</p>
        <Row>
            <Input s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input s={6} label="Username" />
            <Input type="password" label="Password" s={12} />
            <Input type="email" label="Email" s={12} />
            {/* You want to subscribe */}
            <p id="emailSubscription">Subscribe to Griarte!</p>
            <Input name='group1' type='checkbox' value='yellow' label='Yes' defaultValue='checked' />
            <Input name='group1' type='checkbox' value='yellow' label='No' defaultValue='checked' />
        </Row>
    </div>; 

export default SocialMedia;