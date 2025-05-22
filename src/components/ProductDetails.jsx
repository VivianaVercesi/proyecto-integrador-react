import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useParams,Link } from "react-router-dom";
import "../styles/ProductDetails.css";
import { dispararSweetBasico } from '../assets/sweetAlert';

function ProductDetails({functionCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  useEffect(() => {
    fetch("https://682bb114d29df7a95be42521.mockapi.io/vestidos")
      .then((res) => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => String(item.id) === String(id));
        if (productoEncontrado) {
          setProduct(productoEncontrado);
          console.log("Producto encontrado:", productoEncontrado); 
        } else {
          setError("Producto no encontrado.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
  if (product) {
    console.log("Producto actualizado:", product); // ✅ Esto confirma que se actualizó
  }
}, [product]);

  function addToCart() {
    if (quantity < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    functionCart({ ...product, quantity });
  }

  function increaseCounter() {
    setQuantity(quantity + 1);
  }

  function decreaseCounter() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return null;

  return (
    <div className="detail-container">
      <div className="detail-card">
            <img className="detail-image" src={`/images/${product.name}.jpg`} alt={product.name} />
            <div className="detail-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>$ {product.price} </p>
              <div className="detail-counter">
                <button onClick={decreaseCounter}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseCounter}>+</button>
              </div>
              <button onClick={addToCart}>Agregar al carrito</button>
              <Link to={"/Products/" + product.id} ><button>Volver al listado de productos</button></Link>
            </div>
        </div>
    </div>
    
  );
}

export default ProductDetails;