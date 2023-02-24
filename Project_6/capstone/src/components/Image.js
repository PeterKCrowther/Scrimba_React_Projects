import React, {useState, useEffect} from "react"

function Image({img, className}) {

    const [hover, setHover] = useState(false)

    function pointerOverImage() {
        //console.log("mouse in " + img.id + " - " + hover)
        setHover(() => true)
    }

    function pointerLeftImage(){
        //console.log("mouse out " + img.id + " - " + hover)
        setHover(() => false)        
    }

    return (
        <div className={`${className} image-container`}>
            <img 
                src={img.url} 
                alt={`img-${img.id}`} 
                className="image-grid" 
                onMouseOver={() => pointerOverImage()} 
                onMouseOut={() => pointerLeftImage()} />
        </div>
    )
}

export default Image;