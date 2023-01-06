import React from 'react';

export default function BestScore(props) {
    return (
        <td>{(props.score === 0 ) ? "--" : props.score}</td>
    );
}