import React from "react";
import "../styles/cartCard.css";

function CartCard({product, functionCart}) {
    
    function deleteFromCart() {
        console.log("paso 1")
        functionCart(product.id)
    }

    return(
        <div className="cart-card">
    <div className="cart-image-container">
      <img className="cart-image" src={product.image} />
    </div>
    <div className="cart-details">
      <h1 className="cart-title">Producto: {product.name}</h1>
      <p className="cart-description">Descripción: {product.description}</p>
    </div>
    <div className="cartNumbers">
      <span>Cantidad: {product.quantity}</span>
      <div className="cart-unit">
        <span>Precio unitario: {product.price} $</span>
      </div>
      <div className="cart-sub">
        <span>Sub total: {product.quantity * product.price} $</span>
      </div>
      <button className="btn-cart" onClick={deleteFromCart}>
        Eliminar
      </button>
    </div>
  </div>
    )
}

export default CartCard;
           
