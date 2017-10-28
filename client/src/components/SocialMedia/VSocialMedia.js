import React from "react";
import {Button} from 'react-materialize';
import "./SocialMedia.css";

const VSocialMedia = () => 

    <Button floating fab='vertical' icon='more' className='socialMediaBtn' large style={{bottom: '45px', right: '24px'}}>
        <a href="https://www.instagram.com/griarte.co/">
            <Button className='VSCicon'>instagram</Button>
        </a>
        <a href="https://www.facebook.com/griarte.co">
            <Button className='VSCicon'>facebook</Button>
        </a>
        <a href="https://twitter.com/griarte_co">
            <Button className='VSCicon'>twitter</Button>
        </a>
        <a href="https://www.snapchat.com/griarte.co">
            <Button className='VSCicon'>snapchat</Button>
        </a>
    </Button>

export default VSocialMedia;