import React, {useContext, useState} from "react"
import {CapstoneContext} from "../context/CapstoneContext.js"
import CartItem from "../components/CartItem"

function Cart() {

    const [orderButtonText, setOrderButtonText] = useState("Place Order")

    const langageLocale = "en-GB"
    const currencyLocale = "GBP"

    const itemCost = 5.99
    const itemCostLocale = itemCost.toLocaleString(langageLocale, {style: "currency", currency: currencyLocale})

    const {cartItems, clearCart} = useContext(CapstoneContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem 
            key={item.id} 
            item={item} 
            itemCostLocale={itemCostLocale} 
        />
    ))

    const total = itemCost * cartItems.length;
    const totalLocale = total.toLocaleString(langageLocale, {style: "currency", currency: currencyLocale})

    function processOrder() {
        setOrderButtonText( () => ("Ordering...") )
        setTimeout(
            () => {
                clearCart()
                setOrderButtonText(() => ("Order placed!") )
            }
            ,3000
        );           
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalLocale}</p>
            <div className="order-button">
                <button onClick={() => processOrder()}>{orderButtonText}</button>
            </div>            
        </main>
    )
}

export default Cart