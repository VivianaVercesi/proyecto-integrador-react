import React, { createContext, useState, useEffect } from 'react';
// Crear el contexto
export const CartContext = createContext();
// Proveedor del contexto
export function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState([]);
    const addToCart = (product) => {
        const existe = productsCart.find(p => p.id === product.id);
        console.log(existe)
        if (existe) {
            const carritoActualizado = productsCart.map((p) => {
                if (p.id === product.id){
                    const productoActualizado = {...p, quantity: p.quantity + product.quantity}
                    return productoActualizado
                }else{
                    return p
            }
        })
            setProductsCart(carritoActualizado)
        }else{
        // Si no existe, lo agregamos con su cantidad
            const nuevoCarrito = [...productsCart, product];
            setProductsCart(nuevoCarrito)
    }
    };
    const emptyCart = () => {
        setProductsCart([]);
    };
    function deleteProductsFromCart(id) {
  setProductsCart((prevCart) => {
    return prevCart.reduce((acc, product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          // Si tiene más de una unidad, reducir cantidad en 1
          acc.push({ ...product, quantity: product.quantity - 1 });
        }
        // Si solo tiene 1, no se añade (se elimina)
      } else {
        acc.push(product);
      }
      return acc;
    }, []);
  });
}

    return (
        <CartContext.Provider value={{ productsCart, addToCart, emptyCart, deleteProductsFromCart }}>
            {children}
        </CartContext.Provider>
    );
}