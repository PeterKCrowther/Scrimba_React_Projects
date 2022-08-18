import React from "react";
import cardData from "../data/data.js";

export default function Card() {

    let allCards = cardData.map( (eachCard) => {

        return (
            <section className="card">
                <div className="image--cont"><img alt={eachCard.title} src={`../images/${eachCard.imageUrl}`} /></div>
                <div className="info">
                    <div className="info--cont">
                        <img alt="Map Pin" src="../images/pin.png"/>
                        <span className="info--cont-location">{eachCard.location}</span>
                        <span className="info--cont-googlemap"><a href={eachCard.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <h2>{eachCard.title}</h2>
                    <div className="dates">{eachCard.startDate} - {eachCard.startDate}</div>
                    <p>{eachCard.description}</p>
                </div>
            </section>    
        );
    });

    return (
        <div className="cards">{allCards}</div>
    );
} 