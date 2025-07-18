import React, { useContext } from "react";
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import CartCard from "../components/CartCard";
import { Navigate } from "react-router-dom";
import "../styles/cart.css";
import { CartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";


function Cart() {
  const {user} = useAuthContext(); 
  const{productsCart,setProductsCart, emptyCart, deleteProductsFromCart} = useContext(CartContext); 
  console.log("Productos: " + productsCart)   

    function functionCart(id) {
    deleteProductsFromCart(id);
  }

  function increaseQuantity(id) {
    const updatedCart = productsCart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProductsCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = productsCart.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProductsCart(updatedCart);
  }

    const total = productsCart.reduce(
        (subTotal, product) => subTotal + product.price * product.quantity, 0
    )
    
    console.log("Total: " + total)

    if(!user){
        return(
            <Navigate to="/login" replace/>
        )
    }

    useEffect(() => {
        if (productsCart.length === 0) {
        Swal.fire({
        icon: 'info',
        title: 'Tu carrito está vacío',
        text: 'Agregá productos para continuar con la compra 😊',
        confirmButtonColor: '#a569bd'
        });
        }
    }, [productsCart]);

    return(
        <div className="cart-container">
            
            {productsCart.length>0 ?   productsCart.map((product) => (
                <CartCard 
                product={product}
                functionCart={functionCart}
                key={product.id}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
            ))
            : <p className="empty-cart"></p>}
             {total > 0 ? <span className="total-to-pay">Total a pagar: {total.toFixed(2)} $</span>: <></>}
             <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;

   