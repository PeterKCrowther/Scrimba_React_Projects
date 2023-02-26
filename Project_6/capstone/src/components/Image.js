import React, {useState, useContext} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"
import PropTypes from 'prop-types';

function Image({img, className}) {
    
    const context = useContext(CapstoneContext); 
    const toggleFavorite = context.toggleFavorite;
    const addImageToCart = context.addImageToCart;
    const isItemInCart = context.isItemInCart;
    const removeImageFromCart = context.removeImageFromCart;

    const [hover, setHover] = useState(false)

    function heartIcon() {
        const emptyHeartIcon = <i className="ri-heart-line favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const filledHeartIcon = <i className="ri-heart-fill favorite" onClick={() => (toggleFavorite(img.id))} ></i>
        const isFavorited = img.isFavorite

        return  (isFavorited && filledHeartIcon) //Is favourited
                || // OR
                (hover && emptyHeartIcon) //User is hovering over image
    }

    function cartIcon(){
        const addToCartIcon = <i className="ri-add-circle-line cart" onClick={() => (addImageToCart(img))} ></i>
        const inCartIcon = <i className="ri-shopping-cart-fill cart" onClick={() => (removeImageFromCart(img.id))} ></i>
        const itemInCart = isItemInCart(img.id);

        return  (itemInCart && inCartIcon) //Item in cart
                || //OR
                (hover && addToCartIcon) //User is hovering over image
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

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
}

export default Image;