import React from "react";
import {Button} from 'react-materialize';
import "./SocialMedia.css";

const SocialMedia = () => 

    <Button floating fab='horizontal' icon='more' className='socialMediaBtn' large style={{bottom: '45px', right: '24px'}}>
        <a href="https://www.instagram.com/griarte.co/">
            <Button className='SCicon'>instagram</Button>
        </a>
        <a href="https://www.facebook.com/griarte.co">
            <Button className='SCicon'>facebook</Button>
        </a>
        <a href="https://twitter.com/griarte_co">
            <Button className='SCicon'>twitter</Button>
        </a>
        <a href="https://www.snapchat.com/griarte.co">
            <Button className='SCicon'>snapchat</Button>
        </a>
    </Button>

export default SocialMedia;