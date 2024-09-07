const categoryDB = require('../databaseConnectionSqlServer/categoryDB');

class CategoriesController {
  static async getAllCategories(request, response) {
    try {
      const categories = await categoryDB.getAllCategories();
      if (categories.length > 0) {
        response.status(200).json(categories);  
      } else {
        response.status(404).send("No se encontraron categorías.");
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async getCategory(request, response) {
    try {
      const { id } = request.params;
      const category = await categoryDB.getCategory(id);
      if (category) {
        response.status(200).json(category);  
      } else {
        response.status(404).send("Categoría no encontrada");
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async addCategory(request, response) {
    try {
      const { detail } = request.body;
      const newCategory = await categoryDB.addCategory(detail);
      response.status(201).json(newCategory);  
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    }
  }

  static async editCategory(request, response) {
    try {
      const { id } = request.params;
      const { detail } = request.body;
      const updatedCategory = await categoryDB.editCategory(id, detail);
      if (updatedCategory[0] > 0) {  
        response.status(200).send('Categoría actualizada con éxito');
      } else {
        response.status(404).send('Categoría no encontrada');
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    }
  }

  static async deleteCategory(request, response) {
    try {
      const { id } = request.params;
      const deletedCategory = await categoryDB.deleteCategory(id);
      if (deletedCategory > 0) {  
        response.status(200).send('Categoría eliminada con éxito');
      } else {
        response.status(404).send('Categoría no encontrada');
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    }
  }
}

module.exports = CategoriesController;
