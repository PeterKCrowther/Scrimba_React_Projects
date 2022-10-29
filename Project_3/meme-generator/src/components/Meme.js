import React, { useEffect, useState } from "react";
import memesData from "../data/memesData.js"

export default function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: ""
    });

    const [allMemes, setAllMemes] = useState([]);

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

    function randomMemeURL() {
        const randomPos = (randomInt(1, allMemes.length));
        return allMemes[randomPos].url;
    }

    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function handleChange(event) {

        const {name, value} = event.target;
        setMeme( previousMeme => { 
            return {
                ...previousMeme,
                [name] : value
            }
        });
    }    

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
