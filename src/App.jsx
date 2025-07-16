import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './layouts/Home';
import Products from './layouts/Products';
import ProductDetails from './components/ProductDetails';
import AboutUs from "./layouts/AboutUs";
import Reviews from './layouts/Reviews';
import Contact from './layouts/Contact';
import Where from './layouts/Where';
import Cart from './layouts/Cart';
import Login2 from './layouts/Login2';
import ProductsForm from './components/ProductsForm';
import EditProducts from './components/EditProducts';
import AdminPanel from './layouts/AdminPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {

   return (
    <Router>
      
      <>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login2/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/where" element={<Where/>}></Route>
          <Route path="/cart" element={<Cart/> }/>   
          <Route path='/admin/productsForm' element={<ProductsForm/>} />
          <Route path="/productDetails/:id" element={<ProductDetails/>} />
          <Route path="/editProducts/:id" element={<EditProducts/>} />
          <Route path="/adminPanel" element={<AdminPanel/>} />
        </Routes>
      </>
                 
    </Router>
    
  );
}

export default App;


