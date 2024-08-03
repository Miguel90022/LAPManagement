const productDB = require('../databaseConnection/productDB');

class productsController {

    static getAllProducts(request, response) {
        productDB.getAllProducts((err, results) => {
          if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
        });
      }

      static getProduct(request, response) {
        const { id } = request.params;
        productDB.getProduct(id, (err, results) => {
          if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
        });
      }

      static addProduct(request, response) {
        const { barcode, fkCategoryID, productName, stock, price } = request.body;
        productDB.addProduct(barcode, fkCategoryID, productName, stock, price, (err, results) => {
          if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
        });
      }

      static editProduct(request, response) {
        const { id } = request.params;
        const { barcode, fkCategoryID, productName, stock, price } = request.body;
        productDB.editProduct(id, barcode, fkCategoryID, productName, stock, price, (err, results) => {
          if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
        });
      }

      static deleteProduct(request, response) {
        const { id } = request.params;
        productDB.deleteProduct(id, (err, results) => {
          if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
        });
      }
}

module.exports = productsController;