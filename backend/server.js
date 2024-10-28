const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simulación de una base de datos en memoria
let citas = [];
let usuarios = []; // Arreglo para almacenar usuarios

// Ruta para crear una cita
app.post('/api/citas/crear', (req, res) => {
    const { nombreCliente, fecha, hora, email } = req.body;

    // Validar la entrada
    if (!nombreCliente || !fecha || !hora || !email) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Crear una nueva cita
    const nuevaCita = { nombreCliente, fecha, hora, email };
    citas.push(nuevaCita);

    console.log('Cita creada:', nuevaCita);
    res.json({ message: 'Cita creada con éxito', cita: nuevaCita });
});

// Ruta para obtener todas las citas
app.get('/api/citas', (req, res) => {
    res.json(citas);
});

// Ruta para registrar un usuario
app.post('/api/usuarios/registrar', (req, res) => {
    const { username, password } = req.body;

    // Validar la entrada
    if (!username || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = usuarios.find(usuario => usuario.username === username);
    if (usuarioExistente) {
        return res.status(409).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const nuevoUsuario = { username, password }; // Aquí deberías hashear la contraseña en un entorno real
    usuarios.push(nuevoUsuario);

    console.log('Usuario registrado:', nuevoUsuario);
    res.json({ message: 'Usuario registrado con éxito', usuario: nuevoUsuario });
});

// Arrancar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});









