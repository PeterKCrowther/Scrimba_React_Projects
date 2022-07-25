import React from "react";
import airbnbLogo from '../images/airbnb_300W.png';

function Header () {
    return (
        <div className="header--cont">
            <img src={airbnbLogo} alt="airbnb" width="140px"/>
        </div>  
    );
}

export default Header;