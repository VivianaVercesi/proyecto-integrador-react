import React from "react";
import { useState } from "react";
import CartCard from "./CartCard";
import Cart from "../layouts/Cart";
import "../styles/cart.css";

function CartContainer({products}) {

    const [productsCart, setProductsCart] = useState[0]

    function functionCart(product) {
         console.log("paso 2")
          console.log(productsCart)
        var newCart = productsCart
        newCart.push(product)
        setProductsCart(newCart)
    }

    return(
        <div className="cartContainer">
            {products.map((product) => (
                <>
                    CartCard product={product}
                    functionCart={functionCart}
                </>
            ))
            }
        </div>
    )
}

export default CartContainer;