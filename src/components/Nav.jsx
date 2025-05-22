import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../styles/nav.css";

function Nav({position1,link1,position2,link2,position3,link3,position4,link4,position5,link5,position6,link6,position7,link7,position8,link8,position9,link9,productsCart}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link1}>{position1}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link2}>{position2}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link3}>{position3}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link4}>{position4}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link5}>{position5}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link6}>{position6}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link7}>{position7}</NavLink>
                  </li> 
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link8}>{position8}</NavLink>
                  </li> 
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link9}>{position9} <span>{productsCart.length > 0 ? productsCart.reduce((total, product) => total + product.quantity, 0)
    : ""}</span></NavLink></li> 
                 
                </ul>
              </div>
            </div>
          </nav>
       );
}

export default Nav;