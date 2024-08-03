const sqlServer = require('./connection');

class productDB {
  static async getAllProducts(callback) {
      try {
          const request = new sqlServer.Request();
          const result = await request.query('SELECT * FROM Product');
          callback(null, result.recordset);
      } catch (err) {
          callback(err, null);
      }
  }

  static async getProduct(id, callback) {
      try {
          const request = new sqlServer.Request();
          request.input('id', sqlServer.Int, id);
          const result = await request.query('SELECT * FROM Product WHERE PKProductID = @id');
          callback(null, result.recordset[0]);
      } catch (err) {
          callback(err, null);
      }
  }

  static async addProduct(barcode, fkCategoryId, detail, stock, price, callback) {
      try {
          const request = new sqlServer.Request();
          request.input('barcode', sqlServer.VarChar, barcode);
          request.input('fkCategoryId', sqlServer.Int, fkCategoryId);
          request.input('detail', sqlServer.VarChar, detail);
          request.input('stock', sqlServer.Int, stock);
          request.input('price', sqlServer.Float, price);
          const result = await request.query('INSERT INTO Product (Barcode, FKCategoryID, Detail, Stock, Price) VALUES (@barcode, @fkCategoryId, @detail, @stock, @price)');
          callback(null, result);
      } catch (err) {
          callback(err, null);
      }
  }

  static async editProduct(id, barcode, fkCategoryId, detail, stock, price, callback) {
      try {
          const request = new sqlServer.Request();
          request.input('id', sqlServer.Int, id);
          request.input('barcode', sqlServer.VarChar, barcode);
          request.input('fkCategoryId', sqlServer.Int, fkCategoryId);
          request.input('detail', sqlServer.VarChar, detail);
          request.input('stock', sqlServer.Int, stock);
          request.input('price', sqlServer.Float, price);
          const result = await request.query('UPDATE Product SET Barcode = @barcode, FKCategoryID = @fkCategoryId, Detail = @detail, Stock = @stock, Price = @price WHERE PKProductID = @id');
          callback(null, result);
      } catch (err) {
          callback(err, null);
      }
  }

  static async deleteProduct(id, callback) {
      try {
          const request = new sqlServer.Request();
          request.input('id', sqlServer.Int, id);
          const result = await request.query('DELETE FROM Product WHERE PKProductID = @id');
          callback(null, result);
      } catch (err) {
          callback(err, null);
      }
  }
}

module.exports = productDB;