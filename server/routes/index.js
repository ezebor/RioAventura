const express = require('express');
const router = express.Router();

module.exports = function() {
  router.get('/', (req, res) => {
    res.send('Hola mundo');
  });

  router.get('/about', (req, res) => {
    res.send('Sobre nosotros');
  });

  return router;
};
