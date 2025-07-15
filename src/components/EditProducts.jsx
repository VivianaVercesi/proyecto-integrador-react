import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import "../styles/editProducts.css"; // mismo estilo del formulario de carga
import { dispararSweetBasico } from "../assets/sweetAlert";
import { toast, ToastContainer } from "react-toastify";
function EditProducts() {
  const { getProduct, editProduct } = useProductsContext();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
      .then((productoEncontrado) => {
        setProduct(productoEncontrado);
        setLoading(false);
      })
      .catch((error) => {
        const mensaje =
          error === "Producto no encontrado."
            ? "Producto no encontrado."
            : "Hubo un error al obtener el producto.";
        dispararSweetBasico("Error", mensaje, "error");
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
      newErrors.name = "El nombre es obligatorio.";
    }
    if (!product.image.trim()) {
      newErrors.image = "La URL de la imagen es obligatoria.";
    }
    if (!product.price || parseFloat(product.price) <= 0) {
      newErrors.price = "El precio debe ser mayor a 0.";
    }
    if (!product.description.trim() || product.description.length < 10) {
      newErrors.description =
        "La descripción debe tener al menos 10 caracteres.";
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
          toast.success("Producto actualizado correctamente.");
          setTimeout(() => {
      navigate("/products");
    }, 1500); // espera 1.5 segundos antes de navegar
  })
    
        .catch((error) => {
          toast.error("Mensaje de error.");
        });
    } else {
      const mensaje = Object.values(errores).join("\n");
      toast.error("Error en la carga de producto.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="products-form-container">
      <div className="products-form-card">
        <h2>Editar Producto</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
          {errores.name && <p className="error">{errores.name}</p>}
        </div>

        <div>
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="image"
            value={product.image || ""}
            onChange={handleChange}
          />
          {errores.image && <p className="error">{errores.image}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price || ""}
            onChange={handleChange}
            min="0"
          />
          {errores.price && <p className="error">{errores.price}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description || ""}
            onChange={handleChange}
          />
          {errores.description && <p className="error">{errores.description}</p>}
        </div>

         <div className="button-group">
          <button type="submit" className="action-btn">
            Actualizar Producto
          </button>
          <ToastContainer/>
          <button
            type="button"
            className="action-btn"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditProducts;
