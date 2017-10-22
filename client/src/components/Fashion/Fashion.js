import React from "react";
import { Link } from "react-router-dom";
import {Card, CardTitle} from 'react-materialize';
import "./Fashion.css";

const Fashion  = () =>
<div className="FashionBody">
  <div className="fashion-title">
    <h1>Each picture has its own stories.</h1>
  </div>
    <div className="pic1">
       <Card header={<CardTitle reveal image="https://raw.githubusercontent.com/kurtgee6/griarte-fashion/master/client/src/griarte_files/griarte1.jpg" waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="https://www.instagram.com/griarte.co/">This is a link</a></p>
      </Card>
    </div>
    <div className="pic2">
       <Card header={<CardTitle reveal image={"https://raw.githubusercontent.com/kurtgee6/griarte-fashion/master/client/src/griarte_files/griarte3.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="https://www.instagram.com/griarte.co/">This is a link</a></p>
      </Card>
    </div>
    <div className="pic3">
       <Card header={<CardTitle reveal image= {"https://raw.githubusercontent.com/kurtgee6/griarte-fashion/master/client/src/griarte_files/griarte23.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="https://www.instagram.com/griarte.co/">This is a link</a></p>
      </Card>
    </div>
    <div className="pic4">
       <Card header={<CardTitle reveal image= {"https://raw.githubusercontent.com/kurtgee6/griarte-fashion/master/client/src/griarte_files/griarte17.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="https://www.instagram.com/griarte.co/">This is a link</a></p>
      </Card>
    </div>
    <div className="pic5">
       <Card header={<CardTitle reveal image= {"https://raw.githubusercontent.com/kurtgee6/griarte-fashion/master/client/src/griarte_files/griarte19.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="https://www.instagram.com/griarte.co/">This is a link</a></p>
      </Card>
    </div>

</div>;

export default Fashion;
