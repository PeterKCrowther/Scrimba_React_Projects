import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import pinterest from "../images/pinterest.png";

export default Footer;

function Footer() {
    return (
        <footer>
            <ul className="social-media">
                <li className="icon twitter"><img src={twitter} alt="twitter" /></li>
                <li className="icon facebook"><img src={facebook} alt="facebook" /></li>
                <li className="icon instagram"><img src={instagram} alt="instagram" /></li>
                <li className="icon pinterest"><img src={pinterest} alt="pinterest" /></li>                                                
            </ul>
        </footer>
    );
}