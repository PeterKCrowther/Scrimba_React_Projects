import React from "react"

function Image({img, className}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} alt={`img-${img.id}`} className="image-grid" />
        </div>
    )
}

export default Image;