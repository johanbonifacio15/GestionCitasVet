// appointments.js
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Mostrar citas al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointments.forEach(appointment => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Cita para ${appointment.petName} el ${appointment.date} a las ${appointment.time}`;
        appointmentsList.appendChild(li);
    });
});

// Manejar la creación de citas
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const petName = document.getElementById('petName').value;

    const newAppointment = { date, time, petName };
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Actualizar la lista de citas
    const appointmentsList = document.getElementById('appointmentsList');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `Cita para ${petName} el ${date} a las ${time}`;
    appointmentsList.appendChild(li);

    // Limpiar el formulario
    document.getElementById('appointmentForm').reset();
});
