import React from "react";

export default function CurrentScore(props) {
    return (
        <td>{(props.score === 0 ) ? "--" : props.score}</td>
    );
}