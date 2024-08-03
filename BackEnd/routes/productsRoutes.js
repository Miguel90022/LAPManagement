const productController = require('../controllers/productsController');
const express = require('express');
const app = express();

app.get('/', productController.getAllProducts);

app.get('/:id', productController.getAllProducts);

app.post('/', productController.addProduct);

app.put('/:id', productController.editProduct);

app.delete('/:id', productController.deleteProduct);

module.exports = app;