import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/adminPanel.css';

function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="admin-panel-container">
      <h2>Panel de Administración</h2>
      <div className="admin-buttons">
        <button onClick={() => navigate('/admin/productsForm')}>Agregar Producto</button>
        <button onClick={() => navigate('/Products')}>Editar Producto</button>
        <button onClick={() => navigate('/Products')}>Eliminar Producto</button>
        <button onClick={() => navigate('/login')}>Cerrar sesión</button>
      </div>
    </div>
  );
}

export default AdminPanel;