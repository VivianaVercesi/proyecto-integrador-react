import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/nav.css";

function Nav({position1,link1,position2,link2,position3,link3,position4,link4,position5,link5,position6,link6}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={link1}>{position1}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={link2}>{position2}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={link3}>{position3}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={link4}>{position4}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={link5}>{position5}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={link6}>{position6}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
       );
}

export default Nav;