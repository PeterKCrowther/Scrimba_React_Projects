import React from "react"

function Image({src, alt, className}) {
    return (
        <div className={`${className} image-container`}>
            <img src={src} alt={alt} className="image-grid" />
        </div>

    )
}

export default Image;