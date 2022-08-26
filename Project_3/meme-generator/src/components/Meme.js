import React from "react";

export default function Meme() {
    return ( 
        <section className="form-cont">
            <form class="form">
                <div className="form--inputs">
                    <input className="form--first-input" value="" />
                    <input className="form--second-input" value="" />
                </div>
                
                <button className="form--submit-button" type="submit" >Get a new meme image</button>
            </form>
        </section>
    );

}
