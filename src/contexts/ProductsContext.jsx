import React, { createContext, useState, useContext } from 'react';
import {
  db,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from '../auth/firebase';
import { deleteDoc } from "firebase/firestore"

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [foundProduct, setFoundProduct] = useState({});
  


  // Obtener todos los productos
  async function listProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'vestidos'));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
      setOriginalProducts(products)
      return products;
    } catch (error) {
      console.error('Error al listar productos:', error);
      throw error;
    }
  }

  // Agregar un producto
  async function addProduct(product) {
    try {
      const docRef = await addDoc(collection(db, 'vestidos'), product);
      const newProduct = { id: docRef.id, ...product };
      setProducts((prev) => [...prev, newProduct]);
      return newProduct;
    } catch (error) {
      console.error('Error al agregar producto:', error);
      throw error;
    }
  }

  // Obtener producto por ID
  async function getProduct(id) {
    try {
      const docRef = doc(db, 'vestidos', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const producto = { id: docSnap.id, ...docSnap.data() };
        setFoundProduct(producto);
        return producto;
      } else {
        throw new Error('Producto no encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      throw error;
    }
  }

  // Editar producto
  async function editProduct(product) {
    try {
      const docRef = doc(db, 'vestidos', product.id);
      await updateDoc(docRef, {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        //review: product.review,
        //reviewAuthor: product.reviewAuthor,
      });

      const updated = { ...product };
      setFoundProduct(updated);
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? updated : p))
      );
      return updated;
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      throw error;
    }
  }
async function deleteProduct(id) {
  try {
    const docRef = doc(db, "vestidos", id);
    await deleteDoc(docRef);
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    console.log("Producto eliminado");
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
}

function filterProductsByPrice(minPrice = 0, maxPrice = Infinity) {
  const filteredProducts = originalProducts.filter((product) => {
    const price = parseFloat(product.price);
    return price >= minPrice && price <= maxPrice;
  });

  setProducts(filteredProducts);
}

  return (
    <ProductsContext.Provider
      value={{
        products,
        listProducts,
        addProduct,
        getProduct,
        foundProduct,
        editProduct,
        deleteProduct,
        filterProductsByPrice
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

// Hook personalizado para consumir el contexto
export const useProductsContext = () => useContext(ProductsContext);
