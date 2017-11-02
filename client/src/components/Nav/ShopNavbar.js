import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Tab, Tabs, Card, CardTitle, Button, Row, Input} from "react-materialize";
import "./ShopNavbar.css";
import ScrollHorizontal from "../ScrollHorizontal/ScrollHorizontal.js";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import TakeMoney from "../Stripe-Checkout/Stripe-Checkout.js";


class ShopNavbar extends Component {

  state = {
        clothings: [],
        type: "",
        price: "",
        sizes: "",
        quantity: "",
        image: "",
        cart: []
    };

    componentDidMount() {
        this.loadClothing();
    }

    loadClothing = () => {
        API.getClothes()
        .then(res => this.setState({clothings: res.data, type: "", price: "", sizes: "", quantity: "", image: "", cart:[]}))
        .catch(err => console.log(err));
    };
  
  addToCart = (id) => {
    var cart = this.state.cart;
    API.getClothingItem(id)
    .then(res => {  
        cart.push(res.data);
        this.setState({
            cart: cart, 
            type: "", price: "", sizes: "", 
            quantity: "", image: ""
        });
    })
    .catch(err => console.log(err));
  };


  deleteFromCart =  id => {
    
    var cart = this.state.cart;
    this.setState({cart: this.state.cart.filter(function(clothes){
        return clothes.id !== id
        })
    });
   
  };


    render() {
    return (
    <div className="shopBackground">
        <Tabs className='tab-demo z-depth-1'>
            {/* Render All clothes */}
            <Tab title="All" id="ShopNavbars">
            {/* <ScrollHorizontal> */}
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.map(item => (
                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                     title= {"$" + item.price}
                        reveal={<div id="insideCard">
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes:
                            <Row>
                              <Input name='group1' type='checkbox' value='red' label='S' />
                              <Input name='group1' type='checkbox' value='red' label='M' />
                              <Input name='group1' type='checkbox' value='red' label='L' />   
                           </Row>
                           <br/>
                           <br/>
                           <br/>
                          </div>
                            <Link to={"/clothing/" + item.id}>
                        
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>
                                        I WANT THIS!
                             </Button>
                            </div>}>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
            {/* </ScrollHorizontal> */}
             
            </Tab>
            {/* Render Long Sleeves Shirts */}
            <Tab title="Long Sleeves">
                {/* <ScrollHorizontal> */}
                {(this.state && this.state.clothings && this.state.clothings.length)
                    ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "longsleeves").map(item => (
                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                     title= {"$" + item.price}
                     reveal={<div id="insideCard">
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes:
                            <Row>
                              <Input name='group1' type='checkbox' value='red' label='S' />
                              <Input name='group1' type='checkbox' value='red' label='M' />
                              <Input name='group1' type='checkbox' value='red' label='L' />   
                           </Row>
                           <br/>
                           <br/>
                           <br/>
                          </div>
                            <Link to={"/clothing/" + item.id}>
                              
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
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
                {/* </ScrollHorizontal> */}
                
                </Tab>
            {/* Render Short Sleeves Shirts */}
            <Tab title="Short Sleeves">
                {(this.state && this.state.clothings && this.state.clothings.length)
                    ? (
                <List>

                 {this.state.clothings.filter(clothes => clothes.type == "shortsleeves").map(item => (

                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                     title= {"$" + item.price}
                     reveal={<div id="insideCard">
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes:
                            <Row>
                              <Input name='group1' type='checkbox' value='red' label='S' />
                              <Input name='group1' type='checkbox' value='red' label='M' />
                              <Input name='group1' type='checkbox' value='red' label='L' />   
                           </Row>
                           <br/>
                           <br/>
                           <br/>
                          </div>
                            <Link to={"/clothing/" + item.id}>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                             </div>}>
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
                </Tab>
                {/* Render Sweatpants/Leggings */}
                <Tab title="Sweats/Leggings">
                    
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "sweatpants").map(item => (
                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                     title= {"$" + item.price}
                     reveal={<div id="insideCard">
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes:
                              <Row>
                                <Input name='group1' type='checkbox' value='red' label='S' />
                                <Input name='group1' type='checkbox' value='red' label='M' />
                                <Input name='group1' type='checkbox' value='red' label='L' />   
                             </Row>
                             <br/>
                             <br/>
                             <br/>
                            </div>
                            <Link to={"/clothing/" + item.id}>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
          
            
                </Tab>
                {/* Render Accesories */}
                <Tab title="Accesories">
                    {/* <ScrollHorizontal> */}
            {(this.state && this.state.clothings && this.state.clothings.length) ? (
                <List>
                 {this.state.clothings.filter(clothes => clothes.type == "accesories").map(item => (
                   <ListItem key={item.id}>
                     <Card header={<CardTitle reveal image={item.image} waves='light'/>}
                     title= {"$" + item.price}
                     reveal={<div id="insideCard">
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: one size
                          </div>
                            <Link to={"/clothing/" + item.id}>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
           </Tab>
            </Tabs>
            {/* In My Cart */}
            <div className="inMyCart">
              {/* <p id="inMyCarts"> My Shopping Cart </p> */}
            {(this.state && this.state.cart && this.state.cart.length) ? (
                <List>
               
                    {this.state.cart.map(item => (
                   <ListItem key={item.id}>
                      
                      <Card id="inShopping" className='blue-grey darken-1' textClassName='white-text' title=''>
                              <div><img id="imgcart" src={item.image}></img></div>
                              <div>Type: {item.type}</div>
                              <div>Price: {item.price}</div>
                              <div>Sizes: {item.sizes}</div>
                              <DeleteBtn id="byebye" onClick={() => this.deleteFromCart(item.id)} />  
                      </Card>

                             
                   </ListItem>
                ))}
               </List>

             ) : (
              <h3>Shopping Cart Empty</h3>
            )}
            <div className="plsPay">
              <TakeMoney ></TakeMoney>
            </div>
          </div>
        </div>
        )};
    };

export default ShopNavbar;