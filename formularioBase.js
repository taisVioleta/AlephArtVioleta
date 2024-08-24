/*
document.getElementById('formularioEvento').addEventListener('submit', function(event) {
    //Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    //obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const inputDate = document.getElementById('inputDate').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputCategory = document.getElementById('inputCategory').value;
    const inputMode = document.getElementById('inputMode').value;
    const descripcion = document.getElementById('descripcion').value;
 
    //Obtener referencias a los elementos error
    const nombreError = document.getElementById('nombreError');
    const inputDateError = document.getElementById('inputDateError');
    const inputCityError = document.getElementById('inputCityError');
    const inputStateError = document.getElementById('inputStateError');
    const inputCategoryError= document.getElementById('inputCategoryError');
    const inputModeError = document.getElementById('inputModeError');
    const descripciónError = document.getElementById('descripcionError');

    //limpiar los mensajes de error previos
    nombreError.textContent ='';
    inputDateError.textContent ='';
    inputCityError.textContent ='';
    inputStateError.textContent ='';
    inputCategoryError.textContent ='';
    inputModeError.textContent ='';
    descripciónError.textContent ='';

    //Variable para verificar si hay errores
    let isValid = true;

    //validar el nombre
    if (nombre.trim() === '') {
        nombreError.textContent = "El nombre del evento es requerido.";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre del evento es requerido",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },

        });
        
        isValid = false;
    }


    //validar la fecha
    if (inputDate.trim() === '') {
        inputDateError.textContent = "La fecha es requerida.";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La fecha es requerida.",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
        });
        isValid = false;
    }

    //validar la ciudad
    if (inputCity.length < 4) {
        inputCityError.textContent = "Indica la ciudad correctamente.";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Indica la ciudad correctamente",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
        });
        isValid = false;
    }

    //validar el estado
    if (inputState === 'Estado') {
        inputStateError.textContent = "Selecciona un estado";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Selecciona un estado",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
        });
        isValid = false;
    }


    //validar la categoria
    if (inputCategory === 'Categoría') {
        inputCategoryError.textContent = "Selecciona una categoría";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Selecciona una Categoría",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
           

        });
        isValid = false;
    }
    //validar la modalidad
    if (inputMode === 'Modalidad') {
        inputModeError.textContent = "Selecciona la modalidad";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Selecciona la modadlidad",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
        

        });
        isValid = false;
    }
    //validar la descripción
    if (descripcion.length < 5) {
        descripcionError.textContent = "Describe tu evento correctamente.";
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Describe tu evento",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
                },
});
    isValid = false
}

    //Enviar formulario si es válido
        if(isValid) {
            Swal.fire({
                icon: "success",
                title: "¡Listo!",
                text: "Formulario enviado correctamente.",
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
                },
            });
//Función basada en el formulario de contacto
         // Enviar el formulario usando EmailJS
        enviarFormulario();
        this.reset(); // Reinicia el formulario después de enviar
    }
});
function enviarFormulario() {
    const serviceID = 'default_service';
    const templateID = 'template_we94yl3';

    emailjs.sendForm(serviceID, templateID, document.getElementById('formularioEvento'))
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Correo enviado",
                text: "Tu formulario ha sido enviado correctamente por correo."
            });
        }, (err) => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Hubo un error al enviar el correo: ${JSON.stringify(err)}`
            });
        });
}


//Envio de formulario
const btn = document.getElementById('btn-enviar');

document.getElementById('formularioEvento')
.addEventListener('submit', function(event) {
event.preventDefault();


const serviceID = 'default_service';
const templateID = 'template_we94yl3';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
    this.reset();
});
*/