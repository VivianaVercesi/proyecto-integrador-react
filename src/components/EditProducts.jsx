import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import "../styles/editProducts.css";
import { dispararSweetBasico } from "../assets/sweetAlert";

function EditProducts({}) {
  const { getProduct, foundProduct, editProduct } = useProductsContext();
  const { id } = useParams();
  const [product, setProduct] = useState({
  name: "",
  image: "",
  price: "",
  description: "",
});
  const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true); // ✅ agregado
  const [errores, setErrores] = useState({});   // ✅ agregado
  const navigate = useNavigate();

 useEffect(() => {
  getProduct(id)
    .then((productoEncontrado) => {
      setProduct(productoEncontrado); // ✅ actualiza el estado
      setLoading(false);
    })
    .catch((error) => {
      if (error === "Producto no encontrado.") {
        setError("Producto no encontrado.");
      } else {
        setError("Hubo un error al obtener el producto.");
      }
      setLoading(false);
    });
}, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
if (isValid) {
  editProduct(product)
    .then(() => {
      alert("Producto actualizado correctamente.");
      navigate("/products"); 
    })
    .catch((error) => {
      alert("Hubo un problema al actualizar el producto. " + error.message);
    });
} else {
  const mensaje = Object.values(errores).join("\n"); // muestra todos los errores
  dispararSweetBasico("Error en la carga de producto", mensaje, "error");
}
  };
  return (
    <form onSubmit={handleSubmit} className="container edit-form-container">
      <h2>Editar Producto</h2>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="name"
          value={product.name || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">URL de la imagen:</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio:</label>
        <input
          type="number"
          name="price"
          value={product.price || ""}
          onChange={handleChange}
          className="form-control"
          required
          min="0"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={product.description || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn edit-form-button w-100">
        Actualizar Producto
      </button>
    </form>
  );
}

export default EditProducts;
