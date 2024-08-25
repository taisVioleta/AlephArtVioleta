// Obtener el contenedor de los eventos
const eventContainer = document.getElementById('eventContainer');

// Función para crear una tarjeta de evento
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4'; // Cada tarjeta ocupará 1/3 del ancho del contenedor

   card.innerHTML = `

   <div class="event-cards row">
               
        <div class="col">
            <div class="card p-3 h-100 mb-4 d-flex flex-column">
                <div class="row g-0">
                    <!-- Imagen -->
                    <div class="col-8">
                        <img src="${event.image}" class="img-fluid" alt="Imagen">
                   </div>
                          
                    <div class="col-4 d-flex flex-column align-items-center justify-content-between">
                       <div class="text-center">
                           <h1 id="day" class="display-4 text-danger">${event.day}</h1>
                            <p id="month" class="text-primary">${event.month}</p>
                       </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-light me-1">
                               <img src="../resourses/wishlist-star.png" width="20" height="20">
                           </button>
                           <button class="btn btn-outline-light">
                               <img src="../resourses/calendar-plus.png" width="20" height="20">
                            </button>
                        </div>
                    </div>
               </div>
                       
               <div class="event-details mt-3">
                    <h4 class="event-title">${event.title}</h4>
                    <h6 class="event-place">${event.place}.</h6>
                    <p class="event-description flex-grow-1">${event.description}</p>
                </div>
           </div>
        </div>
`;

    eventContainer.appendChild(card);
}

// Función para cargar eventos desde el localStorage y crear las tarjetas
function loadEventsFromLocalStorage() {
    const events = JSON.parse(localStorage.getItem('eventos')) || [];
    events.forEach(event => {
        // Adaptar la estructura del evento si es necesario
        const eventData = {
            image: event.image || '../resourses/eventonuevo.png', // Imagen por defecto 
            day: new Date(event.fecha).getDate(), // Obtener el día de la fecha
            month: new Date(event.fecha).toLocaleString('es-ES', { month: 'short' }), // Obtener el mes de la fecha
            title: event.nombre,
            place: `${event.ciudad}, ${event.estado}`,
            description: event.descripcion
        };
        createEventCard(eventData);
    });
}

// Cargar los eventos al cargar la página
loadEventsFromLocalStorage();

// Crear los eventos inicialmente de la const de ejemplos:
//events.forEach(createEventCard);