const productDB = require('./../databaseConnectionSqlServer/productDB');

class ProductsController {

  static async getAllProducts(request, response) {
    try {
      const products = await productDB.getAllProducts();
      if (products.length > 0) {
        response.status(200).json(products);  
      } else {
        response.status(404).send("No se encontraron productos.");
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async getProduct(request, response) {
    try {
      const { id } = request.params;
      const product = await productDB.getProduct(id);
      if (product) {
        response.status(200).json(product);  
      } else {
        response.status(404).send("Producto no encontrado");
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async addProduct(request, response) {
    try {
      const { barcode, fkCategoryID, detail, stock, price } = request.body;
      const newProduct = await productDB.addProduct(barcode, fkCategoryID, detail, stock, price);
      response.status(201).json(newProduct);  
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async editProduct(request, response) {
    try {
      const { id } = request.params;
      const { barcode, fkCategoryID, detail, stock, price } = request.body;
      const updatedProduct = await productDB.editProduct(id, barcode, fkCategoryID, detail, stock, price);
      if (updatedProduct[0] > 0) {  
        response.status(200).send('Producto actualizado con éxito');
      } else {
        response.status(404).send('Producto no encontrado');
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }

  static async deleteProduct(request, response) {
    try {
      const { id } = request.params;
      const deletedProduct = await productDB.deleteProduct(id);
      if (deletedProduct > 0) {  
        response.status(200).send('Producto eliminado con éxito');
      } else {
        response.status(404).send('Producto no encontrado');
      }
    } catch (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send("Error en el servidor");
    }
  }
}

module.exports = ProductsController;
