const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Puerto en el que escuchará el servidor

// Configurar el directorio público para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'front', 'public')));

// Rutas para servir las vistas HTML
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'public', 'login.html'));
});

app.get('/registro-lavados', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'public', 'registro-lavados.html'));
});

app.get('/registro-cliente', (req, res) => { 
    res.sendFile(path.join(__dirname, 'front', 'public', 'registro-cliente.html'))
});

app.get('/registro-auto', (req, res) => { 
    res.sendFile(path.join(__dirname, 'front', 'public', 'registro-auto.html'))
});


app.get('/registro-empleado', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'public', 'registro-empleado.html'));
});


app.get('/buscar-vehiculo', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'public', 'buscar-vehiculo.html'));
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
