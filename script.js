// script.js


// FOERMULARIO DE CONTACTO

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario para validar q los campos esten completos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formStatus = document.getElementById('form-status');
  
    if (name === "" || email === "" || subject === "" || message === "") {
      formStatus.textContent = "⚠️ Por favor, completá todos los campos.";
      formStatus.style.color = "#fa58bc";
      formStatus.style.display = "block";
      return;
    }
  
    formStatus.textContent = "✅ ¡Mensaje enviado con éxito!";
    formStatus.style.color = "#d0ff00";
    formStatus.style.display = "block";
  
    // Limpiar el formulario
    this.reset();
  });

  



// Función para desplazarse al principio de la página
// Selecciona el botón
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Función para mostrar/ocultar el botón según el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Aparece después de 300px de scroll
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Función para hacer scroll al principio de la página
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


