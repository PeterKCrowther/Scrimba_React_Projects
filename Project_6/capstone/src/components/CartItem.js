import React, {useContext} from "react"
import {CapstoneContext} from "../context/CapstoneContext"

function CartItem({item}) {

    const {removeImageFromCart} = useContext(CapstoneContext)

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeImageFromCart(item.id)}></i>
            <img src={item.url} alt={item.id} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem