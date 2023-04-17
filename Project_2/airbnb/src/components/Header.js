import React from "react";
import airbnbLogo from '../images/airbnb.png';

function Header () {
    return (
        <div className="header--cont bg-white">
            <img src={airbnbLogo} alt="airbnb" className="airbnb" />
        </div>  
    );
}

export default Header;