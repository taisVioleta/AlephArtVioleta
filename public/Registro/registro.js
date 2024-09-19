document
  .getElementById("formularioRegistro")
  .addEventListener("submit", function (event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const contraseña2 = document.getElementById("contraseña2").value.trim();

    // Obtener referencias a los elementos de error
    const nombreError = document.getElementById("nombreError");
    const apellidoError = document.getElementById("apellidoError");
    const emailError = document.getElementById("emailError");
    const telefonoError = document.getElementById("telefonoError");
    const contraseñaError = document.getElementById("contraseñaError");
    const contraseña2Error = document.getElementById("contraseña2Error");

    // Limpiar los mensajes de error previos
    nombreError.textContent = "";
    apellidoError.textContent = "";
    emailError.textContent = "";
    telefonoError.textContent = "";
    contraseñaError.textContent = "";
    contraseña2Error.textContent = "";

    // Variables para verificar si hay errores
    let isValid = true;

    // Validar el nombre
    if (nombre === "") {
      nombreError.textContent = "El nombre es requerido.";
      isValid = false;
    }
    // Validar el apellido
    if (apellido === "") {
      apellidoError.textContent = "El apellido es requerido.";
      isValid = false;
    }
    // Validar el correo electrónico
    if (!validateEmail(email)) {
      emailError.textContent = "Ingresa un correo electrónico válido.";
      isValid = false;
    }
    // Validar el teléfono
    if (isNaN(telefono) || telefono.length < 10) {
      telefonoError.textContent = "Ingresa un teléfono válido.";
      isValid = false;
    }
    // Validar la contraseña
    if (!validateContraseña(contraseña)) {
      contraseñaError.textContent =
        "La contraseña debe tener entre 8 y 16 caracteres, incluyendo al menos un número, una letra mayúscula, una letra minúscula y un carácter especial.";
      isValid = false;
    }

    // Validar que las contraseñas coincidan
    if (contraseña !== contraseña2) {
      contraseña2Error.textContent = "Las contraseñas no coinciden.";
      isValid = false;
    }

    // Enviar el formulario si es válido
    if (isValid) {
      // Creamos un objeto con los datos del usuario
      const newUser = {
        firstName: nombre,
        lastName: apellido,
        email: email,
        phoneNumber: telefono,
        password: contraseña // Puedes hacer el hash en el backend
      };

      // Realizamos la petición al backend
      fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(response => {
        if (response.ok) {
          return response.json(); // Si la respuesta es exitosa
        } else if (response.status === 409) {
          // Si el correo ya está registrado (manejar el error 409 conflict)
          throw new Error('El correo electrónico ya está registrado.');
        } else {
          throw new Error('Error en el registro. Intenta nuevamente.');
        }
      })
      .then(data => {
        // Mostrar mensaje de éxito y redirigir a la página de login
        Swal.fire({
          icon: 'success',
          title: '¡Listo!',
          html: 'Te has registrado correctamente. <br> ¡Bienvenido!',
          customClass: {
            container: 'my-custom-container',
            title: 'my-custom-title',
            content: 'my-custom-content',
            confirmButton: 'my-custom-confirm-button'
          },
          buttonsStyling: false
        }).then(() => {
          window.location.href = "/login"; // Redirigir a la página de login
        });
      })
      .catch(error => {
        // Mostrar mensaje de error si hubo algún problema en el registro
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: error.message,
          customClass: {
            container: 'my-custom-container',
            title: 'my-custom-title',
            content: 'my-custom-content',
            confirmButton: 'my-custom-confirm-button'
          },
          buttonsStyling: false
        });
      });
    }
  });

// Función para validar email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para validar contraseña
function validateContraseña(contraseña) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/;
  return regex.test(contraseña);
}
