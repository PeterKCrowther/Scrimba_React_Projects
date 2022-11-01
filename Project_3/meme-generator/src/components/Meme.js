import React, { useEffect, useState } from "react";
//import memesData from "../data/memesData.js"

export default function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: ""
    });

    const [allMemes, setAllMemes] = useState([]);

    /**
     * useEffect()
     * sets state for allMemes from imgflip API
     * sets inital image URL for current meme
     */
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            const memes  = data.data.memes;
            setAllMemes(memes);

            const randomPos = (randomInt(1, memes.length));
            const randomMemeURL = memes[randomPos].url;
            setMeme( (previousMeme) => {
                return {
                    ...previousMeme,
                    image: randomMemeURL
                }
            });
        }

        getMemes()
    }, [])

    /**
     * Picks URL of meme at random allMemes
     * @returns random allMeme URL
     */
    function randomMemeURL() {
        const randomPos = (randomInt(1, allMemes.length));
        return allMemes[randomPos].url;
    }

    /**
     * Random int from a range
     * @param {number} min Lowest number in range 
     * @param {number} max Greatest number in range
     * @returns random int from range provided
     */
    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Sets value of meme object after input change
     * @param {object} event DOM object from input change
     */
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme( previousMeme => { 
            return {
                ...previousMeme,
                [name] : value
            }
        });
    }    

    /**
     * Updates image of meme object
     * @param {object} event DOM object from button click
     */
    function updateIMG (event) {
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
                        value={meme.topText}
                        placeholder="Top text"
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        className="form--second-input"
                        name="bottomText"
                        value={meme.bottomText}
                        placeholder="Bottom text"
                        onChange={handleChange}                         
                    />
                </div>
                
                <button 
                    onClick={updateIMG} 
                    className="form--submit-button"
                    name="image-update">
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme" src={meme.image} alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>                
            </div>
        </section>
    );

}
