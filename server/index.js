// Importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Configurar Express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

// Cargar rutas
app.use('/', routes());

app.listen(3000);
