import React from "react";
import {Button, $, Modal} from 'react-materialize'
import "./TheTeam.css";

const TheTeam = () => 
    <div>
        <Button floating large className='red' waves='light' icon='add' onClick={() => {
            $('#foo').modal('open')
        }}>Black & Yellow</Button>
        <Modal
            id='foo'
            header='Modal Header'>
                <div className="Krissy">
                    {<img className="krissy" alt="Krissy" src={require("../../Images/aboutGriarteImg.jpg")} />}
                    <h1 id="kris">Krissy</h1>
                    <p>
                        Front-End Developer
                        Favorite Part of Developing: 
                        Least Favorite Part of Developing:
                    </p>
                </div>
                <div className="Rach">
                    {<img className="rach" alt="Krissy" src={require("../../Images/aboutGriarteImg.jpg")} />}
                    <h1 id="rachel">Rach</h1>
                    <p>
                        Front-End Developer
                        Favorite Part of Developing: 
                        Least Favorite Part of Developing:
                    </p>
                </div>
                <div className="Kurt">
                    {<img className="kurt" alt="Kurt" src={require("../../Images/aboutGriarteImg.jpg")} />}
                    <h1 id="kurty">Kurt</h1>
                    <p>
                        Back-End Developer
                        Favorite Part of Developing: 
                        Least Favorite Part of Developing:
                    </p>
                </div>
                <div className="Melvin">
                    {<img className="melvin" alt="Melvin" src={require("../../Images/aboutGriarteImg.jpg")} />}   
                    <h1 id="melville">Krissy</h1>
                    <p>
                        Back-End Developer
                        Favorite Part of Developing: 
                        Least Favorite Part of Developing:
                    </p>
                </div>
        </Modal>
    </div>;

export default TheTeam;