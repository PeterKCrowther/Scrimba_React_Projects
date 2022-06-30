import React from "react";
import reactLogo from '../images/react-logo-scrimba.png';

export default NavBar;

function NavBar() {
    return (
        <nav>  
            <img src={reactLogo} alt="React Logo" />
            <div className="lead">ReactFacts</div>
            <div className="secondary">React Course - Project 1</div>
        </nav>
    );
}