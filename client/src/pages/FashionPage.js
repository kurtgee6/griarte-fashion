import React from "react";
import Navbar from "../components/Nav/Navbar.js";
// import Header from "../components/Header/Header.js";
import Fashion from "../components/Fashion/Fashion.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js"

class FashionPage extends React.Component {
      constructor(props) {
        super(props);
  };
  render() {
  return (
      <div>
        <ScrollHorizontal>
        <Navbar/>
        <Fashion/>
        </ScrollHorizontal>
      </div>
    )};
};


export default FashionPage;
