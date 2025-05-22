import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/productCard.css"

function ProductCard({product}) {
    if (!product) return null; // Evita renderizar si no hay producto
    return(
        <div className="product-card product-details">
            <h1 className="title h2">{product.name}</h1>
            
            <img className="product-image" src={`/images/${product.name}.jpg`}></img>
            <p>Precio: $ {product.price}</p>
            <Button 
                Link2={"/ProductDetails/" + product.id}
                text="Ver detalle"
            />
            
        </div>
    );
}
//<p className="product-details">{product.description}</p>
export default ProductCard;

