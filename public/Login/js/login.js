// Función para validar credenciales en el backend
async function validarCredenciales(email, contraseña) {
    try {
        // Realizar una petición POST al backend con las credenciales
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password: contraseña }) // Enviar las credenciales
        });

        // Si la respuesta es exitosa, devolver true 
        if (response.ok) {
            return true;
        } else {
            return false; // Credenciales inválidas
        }
    } catch (error) {
        console.error('Error al validar las credenciales:', error);
        return false; // En caso de error, tratar como credenciales inválidas
    }
}

// Manejar el inicio de sesión
document.getElementById("formularioRegistro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const contraseña = document.getElementById("inputPassword").value.trim();

    // Validar campos vacíos
    if (!email || !contraseña) {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Por favor, ingrese su correo electrónico y contraseña.",
        });
        return;
    }

    // Validar credenciales con el backend
    const credencialesValidas = await validarCredenciales(email, contraseña);
    if (credencialesValidas) {
        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            text: "¡Bienvenido!",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "../Publicaciones/Principal/principal.html"; // Redirige a la página de publicaciones
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Credenciales inválidas",
            text: "Nombre de usuario o contraseña incorrectos.",
        });
    }
});
