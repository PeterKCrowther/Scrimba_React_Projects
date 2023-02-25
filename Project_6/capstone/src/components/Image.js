import React, {useState, useEffect} from "react"

function Image({img, className}) {

    const [hover, setHover] = useState(false)
    const heartIcon = <i className="ri-heart-line favorite"></i>
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