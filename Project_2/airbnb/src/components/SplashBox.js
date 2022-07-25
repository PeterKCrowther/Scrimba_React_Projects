import React from "react";
import SplashImage from "../images/splash_image_396W.png";


function SplashBox () {
    return (
        <div className="splash-box">
            <img src={SplashImage} alt="Splash Box" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </div>
    );
}

export default SplashBox;