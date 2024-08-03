const categoriesController = require('../controllers/categoriesController')
const express = require('express');
const categoriesRouter = express.Router();

categoriesRouter.get('/', categoriesController.getAllCategories);

categoriesRouter.get('/:id', categoriesController.getCategory);

categoriesRouter.post('/', categoriesController.addCategory);

categoriesRouter.put('/:id', categoriesController.editCategory);

categoriesRouter.delete('/:id', categoriesController.deleteCategory);

module.exports = categoriesRouter;