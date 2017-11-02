import React from "react";
import imageOne from "../../griarte_files/griarte2.jpg";
import imageTwo from "../../griarte_files/griarte15.jpg";
import imageThree from "../../griarte_files/griarte12.jpg";
import imageFour from "../../griarte_files/griarte11.jpg";
import imageFive from "../../griarte_files/griarte13.jpg";
import imageSix from "../../griarte_files/griarte10.jpg";
import imageSeven from "../../griarte_files/griarte5.jpg";
import imageEight from "../../griarte_files/griarte27.jpg";
import imageNine from "../../griarte_files/griarte22.jpg";
import imageTen from "../../griarte_files/griarte7.jpg";
import imageEleven from "../../griarte_files/griarte24.jpg";
import imageTwelve from "../../griarte_files/griarte035.jpg";
import imageThirteen from "../../griarte_files/griarte32.jpg";
import imageFourteen from "../../griarte_files/griarte23.jpg";

import "./Fashion.css";

const Fashion  = () =>
<div className="FashionBody">
    <div className="fashion-title">
    Story Of The Future
    </div>
    <div className="allpics1">
    <img id="pic4" src={imageFour} />
       <div className="overlay">
        <div className="text">Miranda </div>
       </div>
    </div>
    <div className="allpics">
       <img id="pic2" src={imageTwo} />
       <div className="overlay">
        <div className="text">Olga </div>
       </div>
    </div>
    <div className="allpics">
       <img id="pic3" src={imageThree} />
       <div className="overlay">
        <div className="text">Kevin </div>
       </div>
    </div>
    <div className="allpics">
    <img id="pic1" src={imageOne} />
    <div className="overlay">
     <div className="text">Kurt </div>
    </div>
    </div>
    <div className="allpics">
       <img id="pic5" src={imageFive} />
       <div className="overlay">
        <div className="text">Charm </div>
       </div>
    </div>
    <div className="allpics">
       <img id="pic6" src={imageSix} />
       <div className="overlay">
        <div className="text">Lisa</div>
       </div>
    </div>
    <div className="allpics">
       <img id="pic7" src={imageSeven} />
       <div className="overlay">
        <div className="text">Mahesh </div>
       </div>
    </div>
    <div className="allpics2">
       <img id="pic8" src={imageEight} />
       <div className="overlay">
        <div className="text">Reese </div>
       </div>
    </div>
    <div className="allpics3">
       <img id="pic11" src={imageEleven} />
       <div className="overlay">
        <div className="text">Jessica </div>
       </div>
    </div>
    <div className="allpics3">
       <img id="pic12" src={imageTwelve} />
       <div className="overlay">
        <div className="text">Krissy </div>
       </div>
    </div>
    <div className="allpics3">
    <img id="pic9" src={imageNine} />
       <div className="overlay">
        <div className="text">Brandon </div>
       </div>
    </div>
    <div className="allpics3">
    <img id="pic10" src={imageTen} />
    <div className="overlay">
     <div className="text">Colton </div>
    </div>
    </div>
    <div className="allpics3">
       <img id="pic13" src={imageThirteen} />
       <div className="overlay">
        <div className="text">Jacob</div>
       </div>
    </div>
    <div className="allpics3">
       <img id="pic14" src={imageFourteen} />
       <div className="overlay">
        <div className="text">Megan</div>
       </div>
    </div>
</div>


export default Fashion;
