const productDB = require('./../databaseConnection/productDB');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  productDB.getAllProducts((err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.get('/:id', (request, response) => {
  const { id } = request.params;
  productDB.getProduct(id, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.post('/', (request, response) => {
  const { barcode, fkCategoryID, productName, stock, price } = request.body;
  productDB.addProduct(barcode, fkCategoryID, productName, stock, price, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.put('/:id', (request, response) => {
  const { id } = request.params;
  const { barcode, fkCategoryID, productName, stock, price } = request.body;
  productDB.editProduct(id, barcode, fkCategoryID, productName, stock, price, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.delete('/:id', (request, response) => {
  const { id } = request.params;
  productDB.deleteProduct(id, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

module.exports = app;