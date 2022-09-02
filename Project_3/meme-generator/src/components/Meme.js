import React from "react";
import memesData from "../data/memesData.js"


export default function Meme() {

    function randomImageClicker() {

        const memesArray = memesData.data.memes;
        const memesArrayRandom = randomIntFromInterval(1, memesArray.length); 
        const memesRandomImgURL = memesArray[memesArrayRandom].url;
     
        console.log(memesArrayRandom);
        console.log(memesRandomImgURL);

        return ( memesRandomImgURL );
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
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
                
                <button onClick={randomImageClicker} className="form--submit-button">Get a new meme image</button>
                <img id="meme" src={randomImageClicker()} alt="meme" />
            </div>
        </section>
    );

}
