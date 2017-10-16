import React from "react";
import {Collapsible, CollapsibleItem, Col, Card} from 'react-materialize'
import "./aboutGriarte.css";

const AboutG = () => 
   <div>
    {/* About Griarte  */}
        <div className="aboutGriarte">
            <p id="aboutGriarteH1">About Griarte</p>
            At Griarte, <br/>we are here to create the vision. <br/>Our look strikes the fine balance between contemporary and classy while epitomizing the urban culture around<br/> streetwear, luxury, art, and music.
        </div>
        {/* About Griarte Image */}
            {<img className="aboutGriarteimg" alt="aboutGriarteimg" src={require("../../Images/aboutGriarteImg0.jpg")} />}
        {/* What is the photo about? */}

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
            <div className="emptySpace">
            </div>
        {/* The Team */}
        <div className="Team">
            {/* Ending Griarte Image */}
            {<img className="griarte27" alt="aboutGriarteimg" src={require("../../griarte_files/griarte27.jpg")} />}
            {<img className="griarte30" alt="aboutGriarteimg" src={require("../../griarte_files/griarte30.jpg")} />}

        {/* <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Krissy Griarte' actions={[<a href='#'>This is a link</a>]}>
                Front-End Developer
                Favorite Part of Developing: 
                Least Favorite Part of Developing:
            </Card>
        </Col>
        <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Rachel Griarte' actions={[<a href='#'>This is a link</a>]}>
                Front-End Developer
                Favorite Part of Developing: 
                Least Favorite Part of Developing:
            </Card>
        </Col>
        <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Kurt Griarte' actions={[<a href='#'>This is a link</a>]}>
                Back-End Developer
                Favorite Part of Developing: 
                Least Favorite Part of Developing:
            </Card>
        </Col>
        <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Melvin Hill' actions={[<a href='#'>This is a link</a>]}>
                Back-End Developer
                Favorite Part of Developing: 
                Least Favorite Part of Developing:
            </Card>
        </Col> */}
        </div>
       {/* <div className="SocialMedia">
        hiiscksnfknsk
        </div> */}

    </div>;

export default AboutG;