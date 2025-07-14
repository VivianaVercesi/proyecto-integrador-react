import React, { useState } from 'react';
import "../styles/productsForm.css";
import { dispararSweetBasico } from '../assets/sweetAlert';
import { useProductsContext } from '../contexts/ProductsContext';
import { useNavigate } from "react-router-dom";

function ProductsForm() {
  const {addProduct} = useProductsContext();
  const [product, setProduct] = useState({
    name: '',
    image:'',
    price: 0,
    description: '',
  });
  const navigate = useNavigate();
  const [errores, setErrores] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!product.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }
    if (!product.image.trim()) {
      newErrors.image = 'La URL de la imagen es obligatoria.';
    }

    if (!product.price || parseFloat(product.price) <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0.';
    }

    if (!product.description.trim() || product.description.length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres.';
    }

    setErrores(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    addProduct(product)
      .then(() => {
        setProduct({ name: '',image: '', price: 0, description: '' });
        setErrores({});
        dispararSweetBasico(
          "Producto agregado",
          "El producto se agregó correctamente.",
          "success",
          "Aceptar"
        );
         navigate("/products");
      })
      .catch((error) => {
        dispararSweetBasico(
          "Error",
          error.message || "Hubo un problema al agregar el producto",
          "error",
          "Cerrar"
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className="products-form-container">
      <div className="products-form-card">
        <h2>Agregar Producto</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
          {errores.name && <p className="error">{errores.name}</p>}
        </div>

        <div>
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
          {errores.image && <p className="error">{errores.image}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            min="0"
          />
          {errores.price && <p className="error">{errores.price}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
          {errores.description && <p className="error">{errores.description}</p>}
        </div>

        <button type="submit" className="products-submit-btn">Agregar Producto</button>
      </div>
    </form>
  );
}

export default ProductsForm;

