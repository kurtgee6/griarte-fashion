import React from "react";
import { Link } from "react-router-dom";
import "./aboutGriarte.css";

const AboutG = () => 
   <div>
    
        {/* About Griarte  */}
        <div className="aboutGriarte">
            <h1>About Griarte</h1>
            At Griarte we are here not just to create something that is better, but to create something that is new.
            Our look strikes the fine balance between contemporary and classy while epitomizing the urban culture around streetwear, luxury, art, and music.
        </div>
        {/* About Griarte Image */}
       {<img className="aboutGriarteimg" alt="aboutGriarteimg" src={require("../../Images/aboutGriarteImg.jpg")} />}
       <video id="background-video" loop autoPlay>
    <source src="../../Images/aboutGriarteImg.jpg" type="video/mp4" />
    <source src="../../Images/aboutGriarteImg.jpg" type="video/ogg" />
    Your browser does not support the video tag.
</video>
    {/* Story Of The Future Timeline */}
    <div className="storyTimeline">
        <h1>Story Of The Future Timeline</h1>
        July 2016: Start
        Selling hats and shirt to friends
        August: Caleb invested into the company and asked to be a business partner
        developed a team, financial, find more investors
        Sept/Oct: Manufacturer/develope team
        Decemeber: launch website, photoshoots, created video ads
        talked to Frats/Sororities, writing names
        January: Team desctruction, Justin left, no one liked the business structure
        Caleb went behind Kurt's back to paten the name, made LLC
        February: Caleb left the team bc he didn't get the control (CCO)
         Caleb took over Griarte and Kurt left

        Griarte is trademarked by Caleb Smith and Kurt Griarte will be rebranding in the near future.
        
    </div>
    </div>;

export default AboutG;