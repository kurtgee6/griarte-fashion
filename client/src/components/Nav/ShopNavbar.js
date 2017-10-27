import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import {$, Tab, Tabs, Card, CardTitle, Input, Button} from "react-materialize";
import "./ShopNavbar.css";
import ScrollHorizontal from "../ScrollHorizontal/ScrollHorizontal.js";
import { Link } from "react-router-dom";



class ShopNavbar extends Component {

    state: {
        clothings: [],
        type: "",
        price: "",
        sizes: "",
        quantity: "",
        image: ""
    };

    componentDidMount() {
        this.loadClothing();
    }

    loadClothing = () => {
        API.getClothes()
        .then(res => this.setState({clothings: res.data, type: "", price: "", sizes: "", quantity: "", image: ""}))
        .catch(err => console.log(err));
    };

    //


    render() {
    return (
    <div className="ShopBody">
        <Tabs className='tab-demo z-depth-1'>
            {/* Render All clothes */}
            <Tab title="All" id="ShopNavbars">
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.map(item => (
                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                        title="Card Title"
                        reveal={<p>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>
                               <div>Type: {item.type}</div>
                               <div>Price: {item.price}</div>
                               <div>Sizes: {item.sizes}</div>
                               <div>Quantity: {item.quantity}</div>

                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!</Button>
                            <div>Here is some more information about this product that is only revealed once clicked on.</div></p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }
                
            </Tab>
            {/* Render Long Sleeves Shirts */}
            <Tab title="Long Sleeves">
                    {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.map(item => (
                   if(item.type == "longsleeves") {


                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                        title="Card Title"
                        reveal={<p>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>
                               <div>Type: {item.type}</div>
                               <div>Price: {item.price}</div>
                               <div>Sizes: {item.sizes}</div>
                               <div>Quantity: {item.quantity}</div>

                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!</Button>
                            <div>Here is some more information about this product that is only revealed once clicked on.</div></p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                    }
                 )
                )
            }

               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }

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
