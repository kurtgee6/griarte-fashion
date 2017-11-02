import React from "react";
import "../../../node_modules/video-react/dist/video-react.css";
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
        {/* Story Of The Future Timeline */}
        <div className="storyTimeline">
            <Collapsible accordion>
            <p id="storyTimelineH1">History Timeline</p>
            <CollapsibleItem header='Beginning of Griarte'>
                <p id="collapseHead"> 
                    <i>Griarte</i> began in July of 2016 when Kurt Griarte sold hats and shirts to his friends in order to get the word out. There were only a total of 12 shirts and 12 hats in his first collection.
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='First Investor'>
                <p id="collapseHead"> 
                    By August, Caleb Smith (Kurt's best friend) invested into the company and later on became Kurt's business partner. 
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='Developing A Team' >
                <p id="collapseHead"> 
                    Kurt and Caleb gathered a group of friends who are willing to work voluntarily due to their beliefs in Kurt's vision.<br/>
                    [ Rachel Griarte - Social Media Officer ]<br/>
                    [ Grace Bailey - Customer Service Officer ]<br/>
                    [ Sean Parekh - Chief Financial Officer ]<br/>
                    [ Justin Hurdle - Lead Marketing Officer ]<br/>
                    [ Alfaaz Mavani - ECU Marketing Officer ]
                </p>
            </CollapsibleItem>
                <CollapsibleItem header='The First Launch'>
                   <p id="collapseHead"> 
                       The <i>Griarte</i> website launched in December along with our first official clothing collection. Soon, the company began collaborating with frats/sororities, entrepreneurs, and manufacturers locally. Griarte also participated in voluntary photoshoots with people all over the Triangle. 
                    </p>
            </CollapsibleItem>
            <CollapsibleItem header='The Official LLC'>
                <p id="collapseHead"> 
                    Before the end of the year, Caleb deceived Kurt into signing an agreement he wrote stating him to 50% ownership of the company. He then secretly passed an LLC soonafter without Kurt's permission.
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='Team Destruction' > 
                <p id="collapseHead"> 
                    After making the LLC, Caleb started a business structure that nobody in the team agreed upon. Many of the team members had trouble getting along with Caleb due to his dictorial behavior. Justin was the first member to quit the team followed by everyone else.
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='Griarte Seperation'>
                <p id="collapseHead"> 
                    Kurt and Caleb buttheaded when it came to decision making. Kurt wanted to be in charge of the company's direction, while Caleb wanted it to go his way. Due to the differences in their vision, Kurt left his company. Quickly after, Caleb trademarked Griarte.
                </p>
            </CollapsibleItem>
            <CollapsibleItem header='The Story Of The Future'>
                <p id="collapseHead"> 
                <br/>Kurt Griarte will be rebranding <br/>in the near future.<br/><br/>
                </p>
            </CollapsibleItem>
        </Collapsible>
        </div>
        {/* The Team */}
        <div className="Team">
            <Slider>
                <Slide
                    placement="top">
                    <h3 id="TeamSlogan"> The Team</h3>
                    <h3 id="TeamSlogans">
                        Black <br/> & <br/> Yellow
                    </h3>
                </Slide>
                <Slide
                    placement="left">
                    <h3 id="TeamSlogan"> Krissy Griarte<br/>Front-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Being creative in your own way! 
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Debugging :(
                        <a href="mailto:krissygriarte1992@gmail.com">
                            <i id="yas" class="material-icons">email</i>                        
                        </a>
                    </h3>
                </Slide>
                <Slide
                    placement="left">
                    <h3 id="TeamSlogan"> Rach Griarte<br/>Front-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Designing the look and feel
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Positoning/Resizing
                        <a href="mailto:rachgriarte@griarte.com">
                            <i id="yas" class="material-icons">email</i>                       
                        </a>
                    </h3>
                </Slide>
                <Slide
                    placement="left">
                    <h3 id="TeamSlogan"> Kurt Griarte<br/>Back-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>The logic
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Setting up Stripe
                        <a href="mailto:kurtgriarte@griarte.com">
                            <i id="yas" class="material-icons">email</i>
                        </a>
                    </h3>
                </Slide>
                <Slide
                    placement="left">
                    <h3 id="TeamSlogan"> Melvin Hill<br/>Back-End Developer</h3>
                    <h3 id="TeamSlogans">
                        Favorite Part: 
                        <br/>Functionality
                        <br/>
                        <br/>Least Favorite: 
                        <br/>Learning Redux!
                        <a href="mailto:?">
                            <i id="yas" class="material-icons">email</i>
                        </a>
                    </h3>
                </Slide>
            </Slider>
        </div>
    </div>;

export default AboutG;