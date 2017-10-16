import React from "react";
import {Collapsible, CollapsibleItem} from 'react-materialize'
import "./aboutGriarte.css";

const AboutG = () => 
   <div>
    {/* About Griarte  */}
        <div className="aboutGriarte">
            <p id="aboutGriarteH1">About Griarte</p>
            At Griarte we are here not just to create something that is better, but to create something that is new.
            Our look strikes the fine balance between contemporary and classy while epitomizing the urban culture around streetwear, luxury, art, and music.
    {/* Story Of The Future Timeline */}
        <div className="storyTimeline">
        <p id="aboutGriarteH1">History Timeline</p>
            <Collapsible accordion>
            <CollapsibleItem header='Beginning of Griarte'>
                Kurt Griarte started Griarte in July 2016. He sold hats and shirts to his friends in order to get the word out. 
            </CollapsibleItem>
            <CollapsibleItem header='First Investor'>
                By August, Caleb Smith invested into the company and later on became Kurt's business partner. 
            </CollapsibleItem>
            <CollapsibleItem header='Developing A Team'>
                By November, Kurt and Caleb decided to developed a team. 
                Rachel Griarte joined as the Social Media Officer
                Grace Bailey as the Customer Service Representative
                Sean Parekh as the Chief Financial Officer
                Justin Hurdle joined as the Lead Marketing Officer
                Alfaaz Mavani as the ECU Marketing Officer
            </CollapsibleItem>
                <CollapsibleItem header='The First Big Launch'>
                    Kurt Griarte bought the website 'Griarte.com'. The website launched in December as well as the first collection. Things started happening quickly. Photoshoots were being scheduled, frats/sororities collaborations, and spreading the brand out.
                </CollapsibleItem>
                <CollapsibleItem header='Team Destruction'>
                    After the first launch, Caleb started a business structure which nobody liked, he started getting power hungry and asked Kurt to be a Co-CEO; however Kurt did not agree. Justin was the first member to quit the team followed by everybody else.
                </CollapsibleItem>
                <CollapsibleItem header='Griarte Seperation'>
                    Due to the differences in their vision, Kurt left his compnay, then Griarte is trademarked by Caleb Smith.
                </CollapsibleItem>
                <CollapsibleItem header='The Story Of The Future'>
                    Kurt Griarte will be rebranding in the near future.
                </CollapsibleItem>
            </Collapsible>
            </div>
        </div>
        {/* About Griarte Image */}
            {<img className="aboutGriarteimg" alt="aboutGriarteimg" src={require("../../Images/aboutGriarteImg.jpg")} />}
        {/* sayGriarte video */}
            <video src="../../Images/sayGriarte.MOV" width="400" height="300"></video>
    </div>;

export default AboutG;