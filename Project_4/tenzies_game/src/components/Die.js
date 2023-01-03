import React from "react";

export default function Die(props) {

    const dieClasses = 
        (props.isHeld) 
        ? "die-cont__item--held" 
        : "die-cont__item";

    return (
        <div className={dieClasses} onClick={props.holdDice}>{props.value}</div>
    );
}
