import React, { useState } from "react";
import memesData from "../data/memesData.js"


export default function Meme() {

    const firstMemeImageURL = getImageURL();

    const[displayImgURL, setDisplayImg] = useState(firstMemeImageURL);

    function getImageURL() {

        const memesArray = memesData.data.memes;
        const memesArrayRandom = randomIntFromInterval(1, memesArray.length); 
        const memesRandomImgURL = memesArray[memesArrayRandom].url;

        return ( memesRandomImgURL );
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function updateIMG () {
        setDisplayImg(
            displayImgURL => getImageURL()
        );
    }

    return ( 
        <section className="form-cont">
            <div className="form">
                <div className="form--inputs">
                    <input 
                        type="text" 
                        className="form--first-input" 
                    />
                    <input 
                        type="text" 
                        className="form--second-input"
                    />
                </div>
                
                <button onClick={updateIMG} className="form--submit-button">Get a new meme image</button>
                <img className="meme" src={displayImgURL} alt="meme" />
            </div>
        </section>
    );

}
