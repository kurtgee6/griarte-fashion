import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Tab, Tabs, Card, CardTitle, Button} from "react-materialize";
import "./ShopNavbar.css";
import ScrollHorizontal from "../ScrollHorizontal/ScrollHorizontal.js";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import TakeMoney from "../Stripe-Checkout/Stripe-Checkout.js";


class ShopNavbar extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         clothings: [],
    //         type: "",
    //         price: "",
    //         sizes: "",
    //         quantity: "",
    //         image: "",
    //         cart: []
    //     }
    // }


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
    
    //This gets our array
    var cart = this.state.cart;
    console.log("Delete Cart", cart);

    this.setState({cart: this.state.cart.filter(function(clothes){
        return clothes.id !== id
        })
    });

    

   

    


    // //This tells us the values of id and itemID
    // console.log("id", id);
    
    

    // //This gets the index of the array object
    // var getIndex = cart.map(e => e.id).indexOf(cart);
    // console.log("Get Index", getIndex);

    // //This remove the array object from cart using the "getIndex" value
    // cart.splice(getIndex, 1);
    // console.log("Updated Cart", cart);

    // //This sets the state of cart after item is removed
    // this.setState({cart: cart});
    // console.log("Final Cart", cart);
    
  };




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
                        reveal={<div>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>
                                        I WANT THIS!
                             </Button>
                            </div>}>
                        <p><a href="#">This is a link</a></p>  
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
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
                        reveal={<div>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>

                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
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
                        reveal={<div>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                             </div>}>
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
                        reveal={<div>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>
                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
                        <p><a href="#">This is a link</a></p>  
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
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
                        reveal={<div>
                            <div>Type: {item.type}</div>
                            <div>Price: {item.price}</div>
                            <div>Sizes: {item.sizes}</div>
                            <div>Quantity: {item.quantity}</div>
                            <Link to={"/clothing/" + item.id}>
                               <strong>
                                 Clothing Item
                               </strong>

                             </Link>
                             <Button onClick={() => this.addToCart(item.id)} id="addToCart" waves='light' node='a'>i want this!
                             </Button>
                            </div>}>
                        <p><a href="#">This is a link</a></p>   
                    </Card>
                   </ListItem>
                 ))}
               </List>
             ) : (
              <h3>No Results to Display</h3>
            )}
            
            </ScrollHorizontal>
                
                </Tab>
                {/* Render Accesories */}
                <Tab title="Shopping Cart">
               <TakeMoney></TakeMoney>
                    
            {(this.state && this.state.cart && this.state.cart.length) ? (
                <List>
               
                    {this.state.cart.map(item => (
                   <ListItem key={item.id}>
                           
                            <Card className='blue-grey darken-1' textClassName='white-text' title=''>
                                    <div><img src={item.image}></img></div>
                                    <div>Type: {item.type}</div>
                                    <div>Price: {item.price}</div>
                                    <div>Sizes: {item.sizes}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div>Total: {item.price}</div>
                                    <DeleteBtn onClick={() => this.deleteFromCart(item.id)} />  
                            </Card>

                             
                   </ListItem>
                ))}
               </List>

             ) : (
              <h3>Shopping Cart Empty</h3>
            )}
            
            
                
                </Tab>
            </Tabs>
        </div>
        )};
    };

export default ShopNavbar;