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
import Login2 from './components/Login2';
import ProductsForm from './components/ProductsForm';

import './App.css';
//import Cart from './assets/layouts/Cart';
//<Route path="/product/:id" element={<ProductDetails />}
function App() {

 
  /*function handleDelete(id) {
    const updatedCart = productsCart.filter(product => product.id !== id);
    setProductsCart(updatedCart);
  }*/


   return (
    <Router>
      
      <>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/*<Route path='/login' element={<Login user={loggedInUser} admin={loggedInAdmin} setLoggedInAdmin={manejarAdmin} setLoggedInUser={manejarUser}/>}/>*/}
          <Route path="/login" element={<Login2/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          
          <Route path="/about" element={<About/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/where" element={<Where/>}></Route>
          <Route path="/cart" element={<Cart  
              /*setProductsCart={setProductsCart}
              deleteFromCart={handleDelete}*/
              /> }/> 
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/productsForm' element={<ProductsForm/>} />
          <Route path="/productDetails/:id" element={<ProductDetails/>} />
        </Routes>
      </>
                 
    </Router>
    
  );
}

export default App;


