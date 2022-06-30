import React from "react";
import reactLogo from '../images/react-logo-no-text.png';

export default NavBar;

function NavBar() {
    return (
        <nav>  
            <img src={reactLogo} alt="React Logo" />
            <h1>ReactFacts</h1>
            <h2>React Course - Project 1</h2>
        </nav>
    );
}