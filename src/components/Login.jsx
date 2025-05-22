import React from "react";
import "../styles/login.css";

function Login({setLoggedInUser, setLoggedInAdmin, user, admin}) {

    return(
        <div className="login">
        <div className="login-container">
            <div className="login-card">
            <button className="login-btn" onClick={setLoggedInUser}>{user ? "Cerrar sesión" : "Iniciar sesión"}</button>
            <button className="login-btn admin" onClick={setLoggedInAdmin}>{admin ? "Cerrar sesión Admin" : "Iniciar sesión Admin"}</button>
            </div>
            
        </div></div>
    )
}

export default Login;