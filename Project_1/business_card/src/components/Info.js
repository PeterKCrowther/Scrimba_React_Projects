import React from "react";
import cp_dinosaur from "../images/Crystal_Palace_Dino_1600W.jpg";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default Info;

function Info() {
    return (
        <div className="info">
            <img src={cp_dinosaur} alt="Big Cow" />
            <div className="info--details">
                <h1>Crystal Palace Dinosaur</h1>
                <h2>A Not Quite Right Iguanodon</h2>
                <p></p>
                <div className="button--cont">
                    <button className="email social-media"><img src={email} alt="email" /> Email</button>
                    <button className="linkedin social-media"><img src={linkedin} alt="linkedin" /> LinkedIn</button>
                </div>
            </div>
        </div>
    );
}