//import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './assets/layouts/Home';
import Products from './assets/layouts/Products';
//import ProductDetail from "./components/ProductDetail";
import About from './assets/layouts/About';
import Reviews from './assets/layouts/Reviews';
import Contact from './assets/layouts/Contact';
import Where from './assets/layouts/Where';

import './App.css';
//import Cart from './assets/layouts/Cart';
//<Route path="/product/:id" element={<ProductDetail />}
function App() {
   return (
    <Router>
      
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          
          <Route path="/about" element={<About/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/where" element={<Where/>}></Route>
        </Routes>
      </>
                 
    </Router>
    
  );
}

export default App;
