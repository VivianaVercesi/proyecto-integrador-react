import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productContainer.css";
import { useProductsContext } from "../contexts/ProductsContext";
import {Helmet} from "react-helmet";

function ProductContainer() {
  const { products, listProducts, filterProductsByPrice } =
    useProductsContext();
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    listProducts()
      .then((products) => {
        setLoading(false);
      })
      .catch((error) => {
        setError("Hubo un problema al cargar los productos.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    filterProductsByPrice(min, max);
  }, [minPrice, maxPrice]);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="products-container product-list">
      <Helmet>
        <title>Productos Mi tienda</title>
        <meta
          name="description"
          content="Explora nuestra variedad de productos"
        />
      </Helmet>
      <div className="pagination-top">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="filter-container">
        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="products-container product-list">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;