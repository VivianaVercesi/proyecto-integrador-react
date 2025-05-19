import React from "react";
import "../styles/productCard.css"

function Card({product}) {
    return(
        <div className="product-card">
            <h1 className="title h2">{product.name}</h1>
            <img className="product-image" src={product.image}></img>
            <button>Ver detalle</button>
        </div>
    );
}

export default Card;