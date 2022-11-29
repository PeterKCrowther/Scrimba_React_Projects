import React from "react";

export default function Die(props) {

    let randomNumber1to6 = () => Math.floor(Math.random() * 6 + 1);

    return (
        <div className="die-cont">
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
            <div className="die-cont__item">{randomNumber1to6()}</div>
        </div>
    );
}
