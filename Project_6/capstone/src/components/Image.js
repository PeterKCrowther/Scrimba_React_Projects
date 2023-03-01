import React, {useState, useContext} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"
import useHover from "../hooks/useHover.js";
import PropTypes from 'prop-types';

function Image({img, className}) {
    
    const {toggleFavorite, addImageToCart, isItemInCart, removeImageFromCart} = useContext(CapstoneContext);
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    function heartIcon() {
        const emptyHeartIcon = <i className="ri-heart-line favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const filledHeartIcon = <i className="ri-heart-fill favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const isFavorited = img.isFavorite

        return  (isFavorited && filledHeartIcon) //Is favourited
                || // OR
                (hovered && emptyHeartIcon) //User is hovering over image
    }

    function cartIcon(){
        const addToCartIcon = <i className="ri-add-circle-line cart" onClick={() => (addImageToCart(img))} ></i>
        const inCartIcon = <i className="ri-shopping-cart-fill cart" onClick={() => (removeImageFromCart(img.id))} ></i>
        const itemInCart = isItemInCart(img.id);

        return  (itemInCart && inCartIcon) //Item in cart
                || //OR
                (hovered && addToCartIcon) //User is hovering over image
    } 

    // function pointerEnteredImgCont() {
    //     setHovered(() => true)
    // }

    // function pointerExitedImgCont(){
    //     setHovered(() => false)        
    // }

    return (
        <div 
            className={`${className} image-container`} 
            ref={ref}
            // onMouseOver={() => pointerEnteredImgCont()}  
            // onMouseOut={() => pointerExitedImgCont()}
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

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
}

export default Image;