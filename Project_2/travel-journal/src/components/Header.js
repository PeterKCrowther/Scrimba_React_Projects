import React from "react";

import globeImg from "../images/globe.png";

export default function Header () {
    return (
        <dir className="header">
            <img src={globeImg} alt="globe" />
            <span className="header--text">my travel journal</span>
        </dir>
    );
};;