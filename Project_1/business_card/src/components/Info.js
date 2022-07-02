import React from "react";
import Big_Cow from "../images/big_cow_800W_2.jpg";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default Info;

function Info() {
    return (
        <div className="info">
            <img src={Big_Cow} alt="Big Cow" />
            <div className="info--details">
                <h1>Big Cow</h1>
                <h2>Archie's Favourite</h2>
                <p></p>
                <div className="button--cont">
                    <button className="email social-media"><img src={email} alt="email" /> Email</button>
                    <button className="linkedin social-media"><img src={linkedin} alt="linkedin" /> LinkedIn</button>
                </div>
            </div>
        </div>
    );
}