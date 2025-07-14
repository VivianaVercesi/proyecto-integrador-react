import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productContainer.css";
import { useProductsContext } from "../contexts/ProductsContext";

function ProductContainer() {
    const {products, listProducts} = useProductsContext();
    //const [productsComponent, setProductsComponent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        listProducts().then((products) => {
            setLoading(false); 
        }).catch((error) => {
            setError('Hubo un problema al cargar los productos.');
            setLoading(false);
        })
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