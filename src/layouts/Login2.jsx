import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext.jsx';
import { createUser, loginEmailPass } from '../auth/firebase.js';
import { dispararSweetBasico } from '../assets/sweetAlert.js';
import "../styles/login.css";

function Login2() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const { login, user, logout } = useAuthContext();
  const navigate = useNavigate();

  const validarFormulario = () => {
    if (!usuario || !password) {
      dispararSweetBasico("Revisá los datos", "Completá todos los campos", "warning", "Ok");
      return false;
    }
    if (!usuario.includes("@")) {
      dispararSweetBasico("Email inválido", "Debe contener @", "warning", "Ok");
      return false;
    }
    if (password.length < 6) {
      dispararSweetBasico("Contraseña inválida", "Debe tener al menos 6 caracteres", "warning", "Ok");
      return false;
    }
    return true;
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      const nuevoUsuario = await createUser(usuario, password);
      login(nuevoUsuario);
      dispararSweetBasico("Usuario registrado con éxito", "", "success", "Ok");
      navigate(usuario.includes("@adm") ? "/admin" : "/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        dispararSweetBasico("Ya existe un usuario con ese correo", "", "error", "Ok");
      } else {
        dispararSweetBasico("Error al registrar", error.message, "error", "Ok");
      }
    }
  };

  const signIn = async (e) => {
  e.preventDefault();
  if (!usuario || !password) {
    dispararSweetBasico("Revisá los datos", "Completá todos los campos", "warning", "Ok");
    return;
  }

  try {
    const user = await loginEmailPass(usuario, password);
    login(user); // login del contexto
    dispararSweetBasico("¡Bienvenido!", "Inicio de sesión exitoso", "success", "Continuar");
  } catch (error) {
    dispararSweetBasico("Error", error.message, "error", "Ok");
  }
};

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const toggleForm = () => setShow(!show);

  if (user) {
    return (
      <form onSubmit={handleLogout}>
        <div className="logout-container">
          <button className="logout-btn" type="submit">Cerrar sesión</button>
        </div>
      </form>
    );
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          {show ? (
            <form onSubmit={signIn}>
              <h2>Iniciar sesión</h2>
              <input
                placeholder="Email"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-btn" type="submit">Iniciar sesión</button>
            </form>
          ) : (
            <form onSubmit={signUp}>
              <h2>Registrarse</h2>
              <input
                placeholder="Email"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-btn" type="submit">Registrarse</button>
            </form>
          )}
          <button className="login-btn" onClick={toggleForm}>
            {show ? "Registrarse" : "Iniciar Sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login2;
