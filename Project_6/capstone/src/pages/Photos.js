import React, {useContext} from "react";
import Image from "../components/Image.js"
import {getClass} from "../utils"

import {CapstoneContext} from "../context/CapstoneContext.js"

function Photos() {

    const context = useContext(CapstoneContext);
    const photos = context.photos;

    //console.log(photos)

    const imgElements = photos.map( 
        (img, index) =>         
            (
                <Image 
                    key={index}
                    img={img}
                    className={getClass(index)} />
            ) 
    )

    return (
        <main className="photos">
            {imgElements}
        </main>
    )
}

export default Photos;