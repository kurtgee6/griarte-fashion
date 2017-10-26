import React from "react";
import "./ScrollHorizontal.css";

class ScrollHorizontal extends React.Component {
    constructor(props) {
      super(props);
    };
    render() {
        return (
    <div>
        <div className="scroll">
            {this.props.children}
        </div>
    </div>
        )};
    };

export default ScrollHorizontal;