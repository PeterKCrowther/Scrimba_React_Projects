import React from "react";
import SplashImage from "../images/splash_image.png";


function SplashBox () {
    return (
        <div className="splash-box">
            <img src={SplashImage} alt="Splash Box" className="group" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </div>
    );
}

export default SplashBox;