import React from "react";
import { Tab, Tabs, Card, CardTitle } from "react-materialize";
import "./ShopNavbar.css";
import ScrollHorizontal from "../ScrollHorizontal/ScrollHorizontal.js";

class ShopNavbar extends React.Component {
    constructor(props) {
    super(props);
    };
    render() {
    return (
    <Tabs className='tab-demo z-depth-1'>
        {/* Render All clothes */}
        <Tab title="All" id="ShopNavbars">
            All
        </Tab>
        {/* Render Long Sleeves Shirts */}
        <Tab title="Long Sleeves">
            <ScrollHorizontal>
                <Card header={<CardTitle reveal image={require("../../griarte_files/griarte33.jpg")} id="imageInShop" waves='light'/>}
                    title="Griarté OM"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Griarte Divided"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="White Fundamental"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="GreeArté"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Griarté Nascar Original"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Chicken Original"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Black Fundamental"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Griarte Longsleeve Bandshirt"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Griarte Monkk"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                    title="Story Of The Future"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
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
        )};
    };

export default ShopNavbar;
