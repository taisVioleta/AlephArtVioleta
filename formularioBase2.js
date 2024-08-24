document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    console.log('Formulario enviado');
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const inputDate = document.getElementById('inputDate').value.trim();
    const inputCity = document.getElementById('inputCity').value.trim();
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripcion = document.getElementById('descripcion').value.trim();

    const errores = [];

    // Limpiar mensajes anteriores
    document.getElementById('nombreError').textContent = '';
    document.getElementById('inputDateError').textContent = '';
    document.getElementById('inputCityError').textContent = '';
    document.getElementById('inputStateError').textContent = '';
    document.getElementById('inputCategoryError').textContent = '';
    document.getElementById('inputModeError').textContent = '';
    document.getElementById('descripcionError').textContent = '';

    // Validación de campos
    if (nombre === '') {
        errores.push('Nombre');
        document.getElementById('nombreError').textContent = 'Este campo es obligatorio.';
    }
    if (inputDate === '') {
        errores.push('Fecha');
        document.getElementById('inputDateError').textContent = 'Este campo es obligatorio.';
    }
    if (inputCity === '') {
        errores.push('Ciudad');
        document.getElementById('inputCityError').textContent = 'Este campo es obligatorio.';
    }
    if (inputState === 'Estado') {
        errores.push('Estado');
        document.getElementById('inputStateError').textContent = 'Debes seleccionar un estado.';
    }
    if (inputCategory === 'Categoría') {
        errores.push('Categoría');
        document.getElementById('inputCategoryError').textContent = 'Debes seleccionar una categoría.';
    }
    if (inputMode === 'Modalidad') {
        errores.push('Modalidad');
        document.getElementById('inputModeError').textContent = 'Debes seleccionar una modalidad.';
    }
    if (descripcion === '') {
        errores.push('Descripción');
        document.getElementById('descripcionError').textContent = 'Este campo es obligatorio.';
    }

    // Mostrar alertas Swal según el número de errores
    if (errores.length === 0) {
        Swal.fire({
            icon: "success",
            title: "¡Formulario enviado!",
            text: "Formulario enviado correctamente. <br> Tu evento será publicado."
        });
    } else if (errores.length === 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El campo ${errores[0]} es obligatorio.`
        });
    } else if (errores.length === 7) {
        Swal.fire({
            icon: "error",
            title: "Completa el formulario",
            text: "Todos los campos son obligatorios."
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Verifica los datos faltantes",
            text: "Hay varios campos que necesitan ser completados."
        });
    }
});