import React, {useState, useContext} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"

function Image({img, className}) {
    
    const context = useContext(CapstoneContext); 
    const toggleFavorite = context.toggleFavorite;
    const [hover, setHover] = useState(false)

    const heartIcon = <i className="ri-heart-line favorite" onClick={() => (toggleFavorite(img.id))}  ></i>
    const addToCartIcon = <i className="ri-add-circle-line cart"></i>

    function pointerEnteredImgCont() {
        setHover(() => true)
    }

    function pointerExitedImgCont(){
        setHover(() => false)        
    }

    return (
        <div 
            className={`${className} image-container`} 
            onMouseOver={() => pointerEnteredImgCont()}  
            onMouseOut={() => pointerExitedImgCont()}
        >
            {hover && heartIcon}
            {hover && addToCartIcon}
            <img 
                src={img.url} 
                alt={`img-${img.id}`} 
                className="image-grid" 
            />
        </div>
    )
}

export default Image;