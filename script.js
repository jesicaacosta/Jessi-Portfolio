// script.js

document.addEventListener("DOMContentLoaded", function () {
         // Agregar un evento de clic al botón "Enviar"
         document.getElementById("enviarBtn").addEventListener("click", function () {
             enviarMensaje();
         });
     
         // Agregar un evento de clic al botón "Restablecer"
         document.getElementById("resetBtn").addEventListener("click", function () {
             resetearFormulario();
         });
     });
     
     function enviarMensaje() {
         // Código para enviar el mensaje, como se mencionó anteriormente
         var nombre = document.getElementById("name").value;
         var correo = document.getElementById("email").value;
         var mensaje = document.getElementById("message").value;
     
         var formData = new FormData();
         formData.append("name", nombre);
         formData.append("email", correo);
         formData.append("message", mensaje);
     
         fetch("URL_DEL_SERVIDOR", {
             method: "POST",
             body: formData
         })
         .then(response => {
             if (!response.ok) {
                 throw new Error("Error en la solicitud");
             }
             return response.json();
         })
         .then(data => {
             console.log("Mensaje enviado correctamente:", data);
             // Puedes agregar aquí acciones adicionales, como mostrar un mensaje de éxito al usuario
         })
         .catch(error => {
             console.error("Error al enviar el mensaje:", error);
             // Puedes mostrar un mensaje de error al usuario o realizar acciones adicionales
         });
     }
     
     function resetearFormulario() {
         // Código para restablecer el formulario
         document.getElementById("contactForm").reset();
     }
     


     // Función para desplazarse al principio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar o ocultar el icono según el desplazamiento de la página
window.onscroll = function() {
    var scrollButton = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};
