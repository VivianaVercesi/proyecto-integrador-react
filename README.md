# React + Vite

# Proyecto Integrador React - El Atelier de Ana

## Descripción

Este proyecto es una tienda online desarrollada como parte del Proyecto Integrador de la Tecnicatura en Desarrollo de Software. Consiste es una aplicación web desarrollada con React que simula un sistema de venta online para "El Atelier de Ana", una tienda de moda. La aplicación permite a los usuarios navegar por los productos, agregarlos al carrito y realizar compras. Además, cuenta con un panel de administración para gestionar el catálogo de productos.

## Tecnologías utilizadas

- **React**: Librería para construir la interfaz de usuario.
- **React Router DOM**: Para manejo de rutas y navegación.
- **Context API**: Para manejo de estado global.
- **Firebase**: Como base de datos y sistema de autenticación.
- **React Toastify**: Para manejo mostrar notificaciones tipo toast.
- **SweetAlert2**: Para mostrar alertas y mensajes al usuario.
- **Vite**: Herramienta para bundling y desarrollo.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/VivianaVercesi/proyecto-integrador-react.git
   ```

2. Instalar dependencias:

   ```bash
   cd proyecto-integrador-react
   npm install
   ```

3. Configurar Firebase:

   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Configurar autenticación con Email y Contraseña.
   - Obtener credenciales y agregar el archivo de configuración en `src/firebaseConfig.js`.

4. Ejecutar la aplicación:

   ```bash
   npm run dev
   ```

## Uso

- Navega por el catálogo de productos.
- Agrega productos al carrito y gestiona las cantidades.
- Regístrate o inicia sesión para poder comprar o administrar.

## Gestión de Usuarios y Roles

La aplicación distingue dos tipos de usuarios en función de su email:

- **Administrador** (mails con dominio `@admin.com`):
  - Acceso al **Panel de Administración** para agregar, editar y borrar productos.
  - No tiene acceso al carrito ni a funcionalidades de compra.
  - Navegación adaptada para mostrar solo las opciones de administración.

- **Cliente** (sin dominio `@admin.com` en el email):
  - Puede agregar productos al carrito, gestionar su contenido y realizar compras.
  - No tiene acceso al panel de administración.

La verificación de rol se realiza automáticamente al iniciar sesión y condiciona las rutas y elementos visibles en la UI.

## Estructura del Proyecto

src/
├── components/ # Componentes reutilizables (ProductCard, Nav, etc.)
├── contexts/ # Contextos globales (AuthContext, CartContext)
├── layouts/ # Vistas (Home, Products, AboutUs, etc.)
├── styles/ # Archivos CSS personalizados
├── assets/ # Utilidades (SweetAlerts, etc.)
├── auth/ # Lógica de autenticación con Firebase
├── App.jsx # Rutas y navegación
└── main.jsx # Punto de entrada

## Funcionalidades destacadas

- Paginación de productos.
- Filtros de búsqueda y filtrado por precio.
- Carrito de compras con actualización dinámica de cantidades.
- Sistema de login y registro con validaciones.
- Control de acceso basado en roles.
- Panel de administración con CRUD de productos.
- Notificaciones y alertas con SweetAlert2 y React Toastify.
- Diseño responsive para dispositivos móviles y desktop.

## Próximos desarrollos

- Integración con sistema de pago.
- Implementación de historial de compras.
- Mejoras en la experiencia de usuario y accesibilidad.

## Autor

Viviana Vercesi  
[GitHub](https://github.com/VivianaVercesi)
