import React, { useState } from "react";
import memesData from "../data/memesData.js"


export default function Meme() {

    const[meme, setMeme] =useState({
        topText: "",
        bottomText: "",
        image: getImageURL()
    });

    function getImageURL() {

        const memesArray = memesData.data.memes;

        const memesArrayRandom = randomIntFromInterval(1, memesArray.length); 
        const memesRandomImgURL = memesArray[memesArrayRandom].url;

        return ( memesRandomImgURL );
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function handleChange(event) {

        const {name, type, value} = event.target;
        setMeme( previousMeme => { 
            return {
                ...previousMeme,
                [name] : value
            }
        });
    }    

    function updateIMG () {
        setMeme( previousMeme => { 
            return {
                ...previousMeme,
                image: getImageURL()
            }
        });
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
                <img className="meme" src={meme.image} alt="meme" />
            </div>
        </section>
    );

}
