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
    <div className="shopBackground">
        <Tabs className='tab-demo z-depth-1'>
            {/* Render All clothes */}
            <Tab title="All" id="ShopNavbars">
            <ScrollHorizontal>
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
                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }
            </ScrollHorizontal>   
            </Tab>
            {/* Render Long Sleeves Shirts */}
            <Tab title="Long Sleeves">
                <ScrollHorizontal>
                {(this.state && this.state.clothings && this.state.clothings.length)
                    ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "longsleeves").map(item => (

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

                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 )
                
                )
             
            }

               </List>
             ) : (
              <h3>No Results to Display</h3>
            )
           } 
        }
                </ScrollHorizontal>
                </Tab>
            {/* Render Short Sleeves Shirts */}
            <Tab title="Short Sleeves">
                <ScrollHorizontal>
                {(this.state && this.state.clothings && this.state.clothings.length)
                    ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "shortsleeves").map(item => (

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
                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                             </p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 )
                
                )
             
            }

               </List>
             ) : (
              <h3>No Results to Display</h3>
            )
            }
        }
                </ScrollHorizontal>
                </Tab>
                {/* Render Sweatpants/Leggings */}
                <Tab title="Sweatpants/Leggings">
                    <ScrollHorizontal>
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "sweatpants").map(item => (
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
                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }
            </ScrollHorizontal>
                </Tab>
                {/* Render Accesories */}
                <Tab title="Accesories">
                    <ScrollHorizontal>
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "accesories").map(item => (
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

                             </Link>
                             <Button id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            }
            </ScrollHorizontal>
                </Tab>
            </Tabs>
        </div>
        )};
    };

export default ShopNavbar;