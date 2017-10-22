import React from "react";
import {Collapsible, CollapsibleItem, Slide, Slider, Modal, Button} from 'react-materialize';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import "./aboutGriarte.css";

const AboutG = (props) => 
   <div>
    {/* About Griarte  */}
        <div className="aboutGriarte">
            <p id="aboutGriarteH1">About Griarte</p>
            At Griarte, <br/>we are here to create the vision. <br/>Our look strikes the fine balance between contemporary and classy while epitomizing the urban culture around<br/> streetwear, luxury, art, and music.
        </div>
        {/* About Griarte Image */}
            {<img className="aboutGriarteimg" alt="aboutGriarteimg" src={require("../../griarte_files/griarte33.jpg")} />}
        {/* Griarte Image */}
        <div classname="aboutVideo">
            <Player
                playsInline
                poster="/assets/poster.png"
                style
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </div>
        {/* Story Of The Future Timeline */}
        <div className="storyTimeline">
            <Collapsible accordion>
            <p id="storyTimelineH1">History Timeline</p>
            <CollapsibleItem header='Beginning of Griarte'>
                <p id="collapseHead"> 
                    Kurt Griarte started <i>Griarte</i> in July of 2016. He sold hats and shirts to his friends in order to get the word out. 
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='First Investor'>
                <p id="collapseHead"> 
                    By August, Caleb Smith (Kurt's best friend) invested into the company and later on became Kurt's business partner. 
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='Developing A Team' >
                <p id="collapseHead"> 
                    Kurt and Caleb developed <br/>a team in November.<br/><br/> 
                    Rachel Griarte - Social Media Officer<br/>
                    Grace Bailey - Customer Service Officer<br/>
                    Sean Parekh - Chief Financial Officer<br/>
                    Justin Hurdle - Lead Marketing Officer<br/>
                    Alfaaz Mavani - ECU Marketing Officer
                </p>
            </CollapsibleItem>
                <CollapsibleItem header='The First Launch'>
                   <p id="collapseHead"> 
                       The <i>Griarte</i> website launched in December as well as the first collection. Things started happening quickly. Photoshoots were being scheduled, frats/sororities collaborations, and spreading the brand out.
                    </p>
            </CollapsibleItem>
                <CollapsibleItem header='Team Destruction' > 
                    <p id="collapseHead"> 
                        After the first launch, Caleb started a business structure which nobody liked, he started getting power hungry and asked Kurt to be a Co-CEO; however Kurt did not agree. Justin was the first member to quit the team followed by everybody else.
                    </p>
                </CollapsibleItem>
                <CollapsibleItem header='Griarte Seperation'>
                <p id="collapseHead"> 
                    Due to the differences in their vision, Kurt left his compnay, then Griarte is trademarked by Caleb Smith.
                </p>
                </CollapsibleItem>
                <CollapsibleItem header='The Story Of The Future'>
                    <p id="collapseHead"> 
                        Kurt Griarte will be rebranding <br/>in the near future.
                    </p>
                </CollapsibleItem>
            </Collapsible>
            </div>
        {/* The Team */}
        <div className="Team">
            <Slider>
                <Slide
                    src=""
                    placement="top">
                    <h3 id="TeamSlogan"> The Team</h3>
                    <h3 id="TeamSlogans">
                        Black <br/> & <br/> Yellow
                    </h3>
                </Slide>
                <Slide
                    src=""
                    placement="left">
                    <h3 id="TeamSlogan"> Krissy Griarte<br/>Front-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Being creative in your own way! 
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Debugging :(
                    </h3>
                </Slide>
                <Slide
                    id="teamNames"
                    placement="left">
                    <h3 id="TeamSlogan"> Rach Griarte<br/>Front-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Designing the look and feel
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Positoning/Resizing
                    </h3>
                </Slide>
                <Slide
                    src=""
                    placement="left">
                    <h3 id="TeamSlogan"> Kurt Griarte<br/>Back-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Designing the look and feel
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Positoning/Resizing
                    </h3>
                </Slide>
                <Slide
                    src=""
                    placement="left">
                    <h3 id="TeamSlogan"> Melvin Hill<br/>Back-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Designing the look and feel
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Positoning/Resizing
                    </h3>
                </Slide>
            </Slider>
        </div>
    </div>;

export default AboutG;