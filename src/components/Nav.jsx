import React, { useContext } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../styles/nav.css";
import { CartContext, CartProvider } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";

function Nav() {
    const {productsCart} = useContext(CartContext);
    const {user} = useAuthContext();
    const isAdmin = user?.email?.includes("@admin");

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Inicio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Products">Catálogo</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/About">Nosotros</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Reviews">Reseñas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Contact">Contacto</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Where">Ubicación</NavLink>
                  </li>
                  {isAdmin && (
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Admin/productsForm">Admin</NavLink>
                    </li>
                  )}
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Login">Login</NavLink>
                  </li> 
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Cart">Carrito<span>{productsCart.length > 0 ? productsCart.reduce((total, product) => total + product.quantity, 0)
    : ""}</span></NavLink></li> 
                 
                </ul>
              </div>
            </div>
          </nav>
       );
}

export default Nav;