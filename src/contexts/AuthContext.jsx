import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userObject) => {
    if (!userObject || !userObject.email) {
       console.error("Error: usuario inválido al hacer login:", userObject);
      return;
    }

    // Simula un token (en una app real sería un JWT u otro token del servidor)
    const token = `fake-token-${userObject.email}`;
    localStorage.setItem('authToken', token);
    
    // Guardar solo la info necesaria del usuario
    setUser({
      email: userObject.email,
      uid: userObject.uid,
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

 useEffect(() => {
    // Verificar si hay token en localStorage y mantener usuario logueado
    const token = localStorage.getItem('authToken');
    if (token) {
      
      setUser({ email: token.replace('fake-token-', ''), uid: 'uid-placeholder' });
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para acceder al contexto
export const useAuthContext = () => useContext(AuthContext);
