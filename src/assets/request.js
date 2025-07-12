export const agregarProducto = async (product) => {
  return new Promise(async (res, rej) => {
    try {
      const respuesta = await fetch(
        "https://682bb114d29df7a95be42521.mockapi.io/vestidos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto.");
      }
      const data = await respuesta.json();
            console.log("Producto agregado:", data);
            res(data)
            //alert("Producto agregado correctamente");
    } catch (error) {
            console.error(error.message);
            //alert("Hubo un problema al agregar el producto.");
            rej("Hubo un problema al agregar el producto")
    }
  });
};
