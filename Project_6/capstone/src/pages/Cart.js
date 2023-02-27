import React, {useContext, useState} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"
import CartItem from "../components/CartItem"

function Cart() {

    const langageLocale = "en-GB"
    const currencyLocale = "GBP"

    const itemCost = 5.99
    const itemCostLocale = itemCost.toLocaleString(langageLocale, {style: "currency", currency: currencyLocale})

    const {cartItems} = useContext(CapstoneContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem 
            key={item.id} 
            item={item} 
            itemCostLocale={itemCostLocale} 
        />
    ))

    const total = itemCost * cartItems.length;
    const totalLocale = total.toLocaleString(langageLocale, {style: "currency", currency: currencyLocale})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalLocale}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>            
        </main>
    )
}

export default Cart