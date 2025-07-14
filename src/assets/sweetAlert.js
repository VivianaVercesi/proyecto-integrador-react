import Swal from 'sweetalert2'

export function dispararSweetBasico(titulo, text, icon, textoBoton, textoCancelar = null) {
  const options = {
    title: titulo,
    text: text,
    icon: icon,
    confirmButtonText: textoBoton,
  };

  // Si se pasa un texto para el botón de cancelar, se habilita
  if (textoCancelar) {
    options.showCancelButton = true;
    options.cancelButtonText = textoCancelar;
  }

  // ✅ Retornamos la promesa
  return Swal.fire(options);
}