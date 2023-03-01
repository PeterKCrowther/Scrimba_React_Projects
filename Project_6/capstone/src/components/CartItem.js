import React, {useContext, useState} from "react"
import PropTypes from "prop-types"
import {CapstoneContext} from "../context/CapstoneContext"

function CartItem({item, itemCostLocale}) {

    const {removeImageFromCart} = useContext(CapstoneContext)
    const [deleteIconHover, setDeleteIconHover] = useState(false)

    return (
        <div className="cart-item">
            <i 
                className={(deleteIconHover) ? "ri-delete-bin-fill" : "ri-delete-bin-line"}  
                onClick={() => removeImageFromCart(item.id)}
                onMouseEnter={() => setDeleteIconHover(true)}
                onMouseLeave={() => setDeleteIconHover(false)}
            ></i>
            <img src={item.url} alt={item.id} width="130px" />
            <p>{itemCostLocale}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}



export default CartItem