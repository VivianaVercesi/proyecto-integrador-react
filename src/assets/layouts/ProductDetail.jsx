import React from "react";
import { useParams } from "react-router-dom";   
import "../styles/productCard.css"

function ProductDetail() {
    const {id} = useParams();
    return(
        <div className="product-card">
            <h1 className="title h2">{product.name}</h1>
            <p className="product-details">{product.description}</p>
            <img className="product-image" src={product.image}></img>
        </div>
    );
}

export default ProductDetail;