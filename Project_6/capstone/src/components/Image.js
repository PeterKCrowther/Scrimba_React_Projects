import React, {useState, useContext} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"

function Image({img, className}) {
    
    const context = useContext(CapstoneContext); 
    const toggleFavorite = context.toggleFavorite;
    const [hover, setHover] = useState(false)

    function heartIcon() {
        const emptyHeartIcon = <i className="ri-heart-line favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const filledHeartIcon = <i className="ri-heart-fill favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const isFavorited = img.isFavorite

        return (!isFavorited && hover && emptyHeartIcon)
                ||
               (isFavorited && filledHeartIcon)
    }

    function cartIcon(){
        const addToCartIcon = <i className="ri-add-circle-line cart"></i>
        return (hover && addToCartIcon)
    } 

    

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
            {heartIcon()}
            {cartIcon()}
            <img 
                src={img.url} 
                alt={`img-${img.id}`} 
                className="image-grid" 
            />
        </div>
    )
}

export default Image;