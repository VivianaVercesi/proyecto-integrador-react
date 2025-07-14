import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/productDetails.css";
import { dispararSweetBasico } from "../assets/sweetAlert";
import { CartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductsContext } from "../contexts/ProductsContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { foundProduct, getProduct, deleteProduct } = useProductsContext();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const isAdmin = user?.email?.includes("@admin");
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
      .then(() => setLoading(false))
      .catch((error) => {
        if (error === "Producto no encontrado.") {
          setError("Producto no encontrado.");
        } else {
          setError("Hubo un error al obtener el producto.");
        }
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
  dispararSweetBasico(
    "Eliminar producto",
    "¿Estás seguro que querés eliminar este producto?",
    "warning",
    "Eliminar",
    "Cancelar"
  ).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(foundProduct.id)
        .then(() => {
          dispararSweetBasico(
            "Producto eliminado",
            "El producto fue eliminado con éxito.",
            "success",
            "Aceptar"
          ).then(() => {
            navigate("/products");
          });
        })
        .catch(() => {
          dispararSweetBasico(
            "Error",
            "No se pudo eliminar el producto.",
            "error",
            "Cerrar"
          );
        });
    }
  });
};


  function functionCart() {
    if (quantity < 1) return;
    dispararSweetBasico(
      "Producto Agregado",
      "El producto fue agregado al carrito con éxito",
      "success",
      "Cerrar"
    );
    addToCart({ ...foundProduct, quantity });
  }

  function increaseCounter() {
    setQuantity(quantity + 1);
  }

  function decreaseCounter() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!foundProduct) return null;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img
          className="detail-image"
          src={`/images/${foundProduct.name}.jpg`}
          alt={foundProduct.name}
        />
        <div className="detail-details">
          <h2>{foundProduct.name}</h2>
          <p>{foundProduct.description}</p>
          <p>$ {foundProduct.price}</p>
          <div className="detail-counter">
            <button onClick={decreaseCounter}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseCounter}>+</button>
          </div>

          {isAdmin ? (
            <>
              <Link
                to={`/EditProducts/${foundProduct.id}`}
                className="action-btn"
              >
                Editar producto
              </Link>
              <button
                onClick={handleDelete}
                className="action-btn "
                
              >
                Eliminar producto
              </button>
            </>
          ) : (
            <button onClick={functionCart} className="action-btn">
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
