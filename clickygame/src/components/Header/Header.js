import React from "react";
import "./Header.css";

const Header = props => (
    
    <div>
        <div className="jumbotron">
            {props.children}
        </div>
    </div>
);

export default Header;