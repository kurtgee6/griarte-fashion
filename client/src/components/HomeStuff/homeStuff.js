import React from "react";
import { Player } from 'video-react';
import {Row} from 'react-materialize';

import "./homeStuff.css";

const HomeStuff = () =>
    <div>
        {/* About Griarte Image */}
        {<img className="homeImage" alt="Home Image" src={require("../../griarte_files/griarte011.jpg")} />}
     {/* Griarte Video */}
        <Row classname="aboutVideo">
            <Player
                playsInline
                poster="/assets/poster.png"
                style
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </Row>
    </div>
export default HomeStuff;
