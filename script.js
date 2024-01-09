// script.js

function enviarMensaje() {
         // Obtener los valores del formulario
         var nombre = document.getElementById("name").value;
         var correo = document.getElementById("email").value;
         var mensaje = document.getElementById("message").value;
     
         // Crear un objeto FormData para enviar los datos del formulario
         var formData = new FormData();
         formData.append("name", nombre);
         formData.append("email", correo);
         formData.append("message", mensaje);
     
         // Enviar los datos del formulario al servidor usando fetch
         fetch("URL_DEL_SERVIDOR", {
             method: "POST",
             body: formData
         })
         .then(response => {
             if (!response.ok) {
                 throw new Error("Error en la solicitud");
             }
             return response.json(); // Puedes cambiar a response.text() si esperas una respuesta diferente
         })
         .then(data => {
             // Manejar la respuesta exitosa del servidor (si es necesario)
             console.log("Mensaje enviado correctamente:", data);
             // Puedes agregar aquí acciones adicionales, como mostrar un mensaje de éxito al usuario
         })
         .catch(error => {
             // Manejar errores durante la solicitud
             console.error("Error al enviar el mensaje:", error);
             // Puedes mostrar un mensaje de error al usuario o realizar acciones adicionales
         });
     }
     