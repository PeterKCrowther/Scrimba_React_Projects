import React from "react";
import memesData from "../data/memesData.js"


export default function Meme() {

    function randomImageClicker() {
        const randomTo100 = randomIntFromInterval(1, 100);
        console.log(randomTo100);
        console.log(memesData.data.memes[randomTo100].url);
    }


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }


    return ( 
        <section className="form-cont">
            <div class="form">
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
                
                <button onClick={randomImageClicker} className="form--submit-button">Get a new meme image</button>
            </div>
        </section>
    );

}
