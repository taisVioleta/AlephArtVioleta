// Variables globales
const eventContainer = document.getElementById('eventContainer');
let allEvents = []; //Añadi esta variable para tomarlo en la función de filtrado

// Event Listener para cargar los eventos al inicio
document.addEventListener('DOMContentLoaded', loadEventsFromLocalStorage);

// Funciones de carga y creación de cards de eventos
function loadEventsFromLocalStorage() {
    const storedEvents = localStorage.getItem('eventos');
    allEvents = storedEvents ? JSON.parse(storedEvents) : [];
    /**allEvents.forEach(event => createEventCard(formatEventData(event))); */ //Probar con esta y la de abajo
        
    // Ordenamos los eventos por fecha antes de renderizarlos
        const sortedEvents = sortEventsByDate(allEvents);

        renderEvents(sortedEvents);  // Renderizamos los eventos ordenados
   /* renderEvents(allEvents);  // Llama a renderEvents en lugar de crear las cards directamente */
}

function formatEventData(event) {
    const eventDate = new Date(event.fecha + 'T00:00:00'); // Convierte la fecha a objeto y asegura que la fecha se interprete correctamente
        
    return {
        id: event.id,
        image:event.image  ||'../assets/eventonuevo.png' ,  //se cambió el orden de la condicional para que se vea la imagen predeterminada antes de event.image
        day: eventDate.getUTCDate(), // Usar getUTCDate() para ajustar las zonas horarias automáticamente
        month: eventDate.toLocaleString('es-MX', { month: 'short', timeZone: 'UTC' }), //Formato MX, muestra un mes corto y ajusta la zona horaria
        title: event.nombre,
        place: `${event.ciudad}, ${event.estado} , ${event.hora} hrs`,
        description: event.descripcion
    };
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.dataset.id = event.id; // Asignar el id del evento al atributo dataset
    card.innerHTML = `
        <div class="event-cards row">
            <div class="col">
                <div class="card p-3 h-100 mb-4 d-flex flex-column">
                    <div class="row g-0">
                        <div class="col-8">
                            <img src="${event.image}" class="img-fluid" alt="event-image">
                        </div>
                        <div class="col-4 d-flex flex-column align-items-center justify-content-between">
                            <div class="text-center">
                                <h3 id="day" class="display-4">${event.day}</h3>
                                <p id="month" class="event-month">${event.month}</p>
                            </div>
                            <div class="d-flex">
                                <button class="btn btn-outline-light me-1">
                                    <img src="../assets/wishlist-star.png" width="20" height="20">
                                </button>
                                <button class="btn btn-outline-light me-1">
                                    <img src="../assets/calendar-plus.png" width="20" height="20">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="event-details mt-3">
                        <h4 class="event-title">${event.title}</h4>
                        <h6 class="event-place">${event.place}.</h6>
                        <p class="event-description flex-grow-1">${event.description}</p>
                        <br>
                        <a href="../html/formularioEditar.html?id=${event.id}">
                        <button class="btn btn-outline-light edit-event-btn">
                            <img src="../assets/pen-field.png" width="20" height="20">
                        </button>
                        </a>
                        <button class="btn btn-outline-light delete-event-btn">
                            <img src="../assets/trash.png" width="20" height="20">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    //Añadir eventos a los botones de edición y eliminación
    card.querySelector('.edit-event-btn').addEventListener('click', () => editEvent(event.id, card));
    card.querySelector('.delete-event-btn').addEventListener('click', () => confirmDelete(event.id, card));
    eventContainer.appendChild(card);
}

function sortEventsByDate(events) { //Se añade función para ordenar los elementos por orden cronológico
    return events.sort((a, b) => {
        const dateA = new Date(a.fecha);
        const dateB = new Date(b.fecha);
        return dateA - dateB;  // Orden ascendente: más cercano primero
    });
}


function confirmDelete(eventId, card) {
    Swal.fire({
        title: "¿Estás segur@?",
        text: "¡Una vez que elimines tu evento no podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
    }).then((result) => {
        if (result.isConfirmed) {
            card.remove(); // Elimina la tarjeta del DOM
            deleteEvent(eventId); // Elimina la publicación del almacenamiento
        }
    });
}

//Función para renderizar los eventos disponibles en cada momento
function renderEvents(events) {
    eventContainer.innerHTML = ''; //Limpiamos contenedores
    events.forEach(event => createEventCard(formatEventData(event)));

    // Se añade dentro de la función de renderizado la lógica para mostrar u ocultar la imagen de "no hay eventos"
    const noEventsImage = document.getElementById('no-events-image');
    if (allEvents.length === 0) {
        noEventsImage.style.display = 'block'; //mostrar la imagen como block en el contendor
    } else {
        noEventsImage.style.display = 'none'; //no mostrar la imagen en el contenedor
    }
}

// Funciones de edición y eliminación
function editEvent(eventId) {
    const allEvents = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventToEdit = allEvents.find(event => event.id === eventId);
    }

function deleteEvent(eventId) {
    allEvents = allEvents.filter(event => event.id !== eventId);
    localStorage.setItem('eventos', JSON.stringify(allEvents));
    renderEvents(allEvents); // Llamamos a renderEvents para actualizar la vista
}

// Funciones de filtrado y renderizado
function filterByMonth(month) {
    return allEvents.filter(event => new Date(event.fecha).getMonth() + 1 === month);
}

function filterByCategory(category) {
    return allEvents.filter(event => event.categoria === category);
}

// Eventos de los botones de filtrado
document.getElementById('b1').addEventListener('click', () => renderEvents(filterByMonth(new Date().getMonth() + 1))); //Botón de eventos de este mes
document.getElementById('b2').addEventListener('click', () => renderEvents(filterByMonth(new Date().getMonth() + 2))); //Botón de eventos del próximo mes
document.getElementById('b3').addEventListener('click', () => renderEvents(filterByCategory('Categoría1'))); //Botón de categoria arte urbano, etc
document.getElementById('b4').addEventListener('click', () => renderEvents(filterByCategory('Categoría2')));
document.getElementById('b5').addEventListener('click', () => renderEvents(filterByCategory('Categoría3')));
document.getElementById('b6').addEventListener('click', () => renderEvents(filterByCategory('Categoría4')));
document.getElementById('b7').addEventListener('click', () => renderEvents(filterByCategory('Categoría5')));

