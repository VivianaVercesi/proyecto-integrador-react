import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './layouts/Home';
import Products from './layouts/Products';
import ProductDetails from './components/ProductDetails';
import About from './layouts/About';
import Reviews from './layouts/Reviews';
import Contact from './layouts/Contact';
import Where from './layouts/Where';
import Cart from './layouts/Cart';
import Admin from './components/Admin';
import Login from './components/Login';

import './App.css';
//import Cart from './assets/layouts/Cart';
//<Route path="/product/:id" element={<ProductDetails />}
function App() {

  const [productsCart, setProductsCart] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(false)
  const [loggedInAdmin, setLoggedInAdmin] = useState(false)
 

  function manejarAdmin() {
    setLoggedInAdmin(!loggedInAdmin)
  }

  function manejarUser(){
  setLoggedInUser(!loggedInUser);
}

  function functionCart(product){
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

  }

   function deleteProductsFromCart(id){
    console.log(id)
    const nuevoCarrito = productsCart.filter((p) => p.id !== id);
    setProductsCart(nuevoCarrito);
  }
  function handleDelete(id) {
    const updatedCart = productsCart.filter(product => product.id !== id);
    setProductsCart(updatedCart);
  }


   return (
    <Router>
      
      <>
        <Nav
          position1="Inicio" link1="/"
          position2="Catálogo" link2="/Products"
          position3="Nosotros" link3="/About"
          position4="Reseñas" link4="/Reviews"
          position5="Contacto" link5="/Contact"
          position6="Ubicación" link6="/Where"
          position7="Admin" link7="/Admin"
          position8="Login" link8="/Login"
          position9="Carrito" link9="/Cart"
          productsCart={productsCart} 
        />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={<Login user={loggedInUser} admin={loggedInAdmin} setLoggedInAdmin={manejarAdmin} setLoggedInUser={manejarUser}/>}/>
          <Route path="/products" element={<Products/>}></Route>
          
          <Route path="/about" element={<About/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/where" element={<Where/>}></Route>
          <Route path="/cart" element={<Cart productsCart={productsCart} functionDelete={deleteProductsFromCart} loggedInUser={loggedInUser} 
              setProductsCart={setProductsCart}
              deleteFromCart={handleDelete}
              /> }/> 
          <Route path='/admin' element={loggedInAdmin ? <Admin/> : <Navigate to={"/login"} replace/>} />
          <Route path="/productDetails/:id" element={<ProductDetails functionCart={functionCart} />} />
        </Routes>
      </>
                 
    </Router>
    
  );
}

export default App;


