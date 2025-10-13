// 1. Obtén el elemento div a controlar
const divAControlar = document.getElementById('miDivAControlar');

// 2. Define el punto de scroll donde debe ocultarse (en píxeles desde la parte superior)
const puntoDeActivacion = 360; // Por ejemplo, a 500px de scroll

// 3. Define la función que se ejecuta al hacer scroll
function manejarScroll() {
  // window.scrollY o window.pageYOffset da la posición vertical actual del scroll
  if (window.scrollY >= puntoDeActivacion) {
    // Si la posición es mayor o igual al punto de activación
    divAControlar.classList.add('ocultar'); // Añade la clase 'ocultar'
  } else {
    // Si la posición es menor al punto de activación
    divAControlar.classList.remove('ocultar'); // Quita la clase 'ocultar'
  }
}

// 4. Agrega un "escuchador de eventos" para que la función se ejecute cada vez que haya scroll
window.addEventListener('scroll', manejarScroll);