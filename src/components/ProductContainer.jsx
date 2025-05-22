import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productContainer.css";

function ProductContainer({functionCart}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://682bb114d29df7a95be42521.mockapi.io/vestidos")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                console.log("Datos obtenidos:", datos); 
                setProducts(datos);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error:", error);
                setError("Hubo un problema al cargar los productos.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="products-container product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product} 
                />
            ))}
        </div>
    );
}

export default ProductContainer;