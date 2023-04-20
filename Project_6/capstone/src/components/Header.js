import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {CapstoneContext} from "../context/CapstoneContext.js"

function Header() {

    const {cartItems} = useContext(CapstoneContext);

    const cartIcon = (cartItems.length > 0) //Are there items in the cart?
        ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>

    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart">{cartIcon}</Link>
        </header>
    )
}

export default Header;