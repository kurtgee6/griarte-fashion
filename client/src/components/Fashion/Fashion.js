import React from "react";
import { Link } from "react-router-dom";
import {Card, CardTitle} from 'react-materialize';
// import "./Fashion.css";


const Fashion  = () => {
      <div>
        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
  		    title="Card Title"
  		    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
  		    <p><a href="#">This is a link</a></p>
        </Card>
      </div>;
    }

export default Fashion;
