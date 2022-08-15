import React from "react";

import star from "../images/star.png";
import myCardData from "../feed/data.js";

function PromoSlider() {

    let theList = () => { 
        let myStuff = Object.keys(myCardData).map(function(key) {

            let currentSlide = myCardData[key];
            let promoLabel = "";
            
            if (currentSlide.label !== "") { promoLabel = (<div className="label">{currentSlide.label}</div>) };
  
            return (
                <li key={key.toString()} className={"item-".concat(key)}>
                    <div className="img--cont">
                        <img src={currentSlide.imgsrc} alt={"carousel item ".concat(key)} className={"item-".concat(key)} />
                        {promoLabel}
                    </div>
                    <div className="ratings--cont">
                        <div><img src={star} alt="ratings star" className="star" /> {currentSlide.rating} ({currentSlide.numberOfRatings}) {currentSlide.location}</div>
                        <div>{currentSlide.text}</div>
                        <div className="pricing"><span className="price">{currentSlide.pricePrefix} {currentSlide.priceCurrencey}{currentSlide.price}</span> / {currentSlide.priceUnit}</div>
                    </div>
                </li>

            );
        });

        return myStuff;
    };

    return (
        <div className="carousel">
            <ul>
                {theList()}
            </ul>        
        </div>
    );
    
}

export default PromoSlider;