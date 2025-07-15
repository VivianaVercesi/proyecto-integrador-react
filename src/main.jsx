import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductsProvider } from './contexts/ProductsContext.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </ProductsProvider>
  </StrictMode>
);
