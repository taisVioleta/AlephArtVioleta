document.addEventListener('DOMContentLoaded', () => {
    // Almacenar un usuario en el localStorage
    const usuariosPrueba = [
        {
            email: "prueba@ejemplo.com",
            contraseña: "password123"
        }
    ];

    // Guardar el usuario de prueba en el localStorage si aún no existe
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify(usuariosPrueba));
    }

    // Manejar el formulario de inicio de sesión
    const formulario = document.getElementById('formularioRegistro');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        const email = document.getElementById('email').value;
        const contraseña = document.getElementById('inputPassword').value;

        // Obtener la lista de usuarios almacenados en el localStorage
        const usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios'));

        // Verificar si existe un usuario con el email y la contraseña proporcionados
        const usuarioEncontrado = usuariosAlmacenados.find(usuario => 
            usuario.email === email && usuario.contraseña === contraseña
        );

        if (usuarioEncontrado) {
            // Autenticación exitosa
            Swal.fire('¡Bienvenido!', 'Has iniciado sesión correctamente', 'success');

            // Mostrar los elementos de la barra de navegación para usuarios autenticados
            document.getElementById('loggedInItems').style.display = 'block';
            document.getElementById('loggedOutItems').style.display = 'none';

            // Redirigir a la página principal u otra página
            // window.location.href = "../index.html"; // Redirigir a la página de inicio
        } else {
            // Autenticación fallida
            Swal.fire('Error', 'Correo electrónico o contraseña incorrectos', 'error');
        }
    });
});
