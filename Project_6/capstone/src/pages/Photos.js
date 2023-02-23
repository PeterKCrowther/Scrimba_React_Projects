import React, {useContext} from "react";
import Image from "../components/Image.js"
import {getClass} from "../utils"

import {CapstoneContext} from "../context/CapstoneContext.js"

function Photos() {

    const context = useContext(CapstoneContext);
    const photos = context.photos;

    // console.log(photos)
    // console.log("here")

    return (
        <main className="photos">
            <h1>Images go here</h1>
            {photos.map( 
                (photo) => (
                    <Image 
                        key={photo.id} 
                        src={photo.url} 
                        alt={photo.id} 
                        className={getClass(photo.id)} />
                ) 
            )}

        </main>
    )
}

export default Photos;