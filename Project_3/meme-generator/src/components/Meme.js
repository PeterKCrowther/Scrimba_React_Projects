import React, { useState } from "react";
import memesData from "../data/memesData.js"


export default function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: randomMemeURL()
    });

    function randomMemeURL() {
        const memes = memesData.data.memes;
        const randomPos = (randomInt(1, memes.length));
        return memes[randomPos].url;
    }

    function randomInt(min, max) { // min and max included 
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

    function updateIMG (event) {

        console.log(event.type);

        setMeme( previousMeme => { 
            return {
                ...previousMeme,
                image: randomMemeURL()
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
                        name="topText"
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        className="form--second-input"
                        name="bottomText"
                        onChange={handleChange}                         
                    />
                </div>
                
                <button 
                    onClick={updateIMG} 
                    className="form--submit-button"
                    name="image-update">
                    Get a new meme image
                </button>
                <img className="meme" src={meme.image} alt="meme" />
            </div>
        </section>
    );

}
