import React from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import {$, Tab, Tabs, Card, CardTitle, Input, Button} from "react-materialize";
import "./ShopNavbar.css";
import ScrollHorizontal from "../ScrollHorizontal/ScrollHorizontal.js";
import { Link } from "react-router-dom";



class ShopNavbar extends React.Component {
    constructor(props) {
        super(props);
    };

    state: {
        clothing:[],
    }

    componentDidMount() {
        //Checking if component mounted
        //console.log("Component did mount");
        this.loadClothing();
    };

    loadClothing = () => {
        console.log("Loaded Clothes");
        API.getClothes().then(res => console.log(res.data))
        .catch(err => console.log(err));

    };

    //this.setState({clothing: res.data})

    render() {
    return (
    <div className="ShopBody">
        <Tabs className='tab-demo z-depth-1'>
            {/* Render All clothes */}
            <Tab title="All" id="ShopNavbars">
                {this.state.clothing.length ? (
                <List>
                 {this.state.clothing.map(item => (
                   <ListItem key={item.id}>
                     <Link to={"/clothing/" + item.id}>
                       <strong>
                         Type {item.type} 
                         Price {item.price}
                         Sizes {item.sizes}
                         Quantity {item.quantity}
                         Image {item.image}
                       </strong>
                     </Link>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                        title="Card Title"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <p><a href="#">This is a link</a></p>
                </Card>
            </Tab>
            {/* Render Long Sleeves Shirts */}
            <Tab title="Long Sleeves">
                <ScrollHorizontal>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title={<h1 id="cardTitle">Griarté OM</h1>}
                            reveal={<p  id="shirtQuickView" aria-label="hey">
                                Price:
                                <br/>
                                <p id="shirtprice">$22.00</p>
                                Size: 
                                <br/>
                                <Input id="pickSize" name='group1' type='checkbox' value='red' label='S' />
                                <Input id="pickSize" name='group1' type='checkbox'  value='yellow' label='M' />
                                <Input id="pickSize" name='group1' type='checkbox'  value='green' label='L' />
                                <br/>
                                <br/>
                                Quantity: 
                                <br/>
                                <Input s={6} defaultValue='0'/>
                                <br/>
                                <Button id="addToCart" waves='light' node='a'>i want this!</Button>
                                <br/>
                                <a href="http://www.facebook.com/share" target="_blank">
                                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" id="shareThis" />
                                </a>
                                <a href="https://twitter.com/share;text=CheckoutGriarte!&amp;hashtags=griarte" target="_blank">
                                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" id="shareThis"/>
                                </a>
                                <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">
                                    <img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" id="shareThis" />
                                </a>
                                <a href="mailto:?Subject=Checkout Griarte!&amp;Body=">
                                    <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" id="shareThis" />
                                </a>
                                </p>}>
                            <p id="shirtPrice">$ twenty-two</p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Griarte Divided"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p id="shirtPrice">twenty-two</p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="White Fundamental"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="GreeArté"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Griarté Nascar Original"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Chicken Original"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Black Fundamental"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Griarte Longsleeve Bandshirt"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Griarte Monkk"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    <div className="griarteOm">
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} waves='light'/>}
                            title="Story Of The Future"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </div>
                    </ScrollHorizontal>
                </Tab>
                {/* Render Short Sleeves Shirts */}
                <Tab title="Short Sleeves">
                    <ScrollHorizontal>
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} id="imageInShop" waves='light'/>}
                            title="Inspired By A$AP"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Philly"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Japanese Griarte"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Story of the Future"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Original Olive"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Astronaut Griarte"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Boxing Griarte"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Sideways Griarte"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Bus Stop"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Under The Fall"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </ScrollHorizontal>
                </Tab>
                {/* Render Sweatshirts/Jackets */}
                <Tab title="Sweatshirts/Jackets">
                    <ScrollHorizontal>
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} id="imageInShop" waves='light'/>}
                            title="Griarte White Sweatshirt"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Olive Sweatshirt"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Black Sweatshirt"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </ScrollHorizontal>
                </Tab>
                {/* Render Sweatpants/Leggings */}
                <Tab title="Sweatpants/Leggings">
                    <ScrollHorizontal>
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} id="imageInShop" waves='light'/>}
                            title="Griarte Sweatpants Black"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Sweatpants Grey"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Leggings Black"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarte Leggings Grey"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </ScrollHorizontal>
                </Tab>
                {/* Render Accesories */}
                <Tab title="Accesories">
                    <ScrollHorizontal>
                        <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} id="imageInShop" waves='light'/>}
                            title="Griarté Black Hat"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Griarté Olive Hat"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Black Griarte Beanie"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Grey Griarte Beanie"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="White Griarte Beanie"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </ScrollHorizontal>
                </Tab>
            </Tabs>
        </div>
        )};
    };

export default ShopNavbar;
