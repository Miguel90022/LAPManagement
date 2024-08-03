const sqlServer = require('./connection');

class categoryDB {
  static async getAllCategories(callback) {
    try {
      const request = new sqlServer.Request();
      const result = await request.query('SELECT * FROM Category');
      callback(null, result.recordset);
    } catch (err) {
      callback(err, null);
    }
  }

  static async getCategory(id, callback) {
    try {
      const request = new sqlServer.Request();
      request.input('id', sqlServer.Int, id);
      const result = await request.query('SELECT * FROM Category WHERE PKCategoryID = @id');
      callback(null, result.recordset[0]);
    } catch (err) {
      callback(err, null);
    }
  }

  static async addCategory(detail, callback) {
    try {
      const request = new sqlServer.Request();
      request.input('detail', sqlServer.VarChar, detail);
      const result = await request.query('INSERT INTO Category (Detail) VALUES (@Detail)');
      callback(null, result);
    } catch (err) {
      callback(err, null);
    }
  }

  static async editCategory(id, detail, callback) {
    try {
      const request = new sqlServer.Request();
      request.input('id', sqlServer.Int, id);
      request.input('detail', sqlServer.VarChar, detail);
      const result = await request.query('UPDATE Category SET Detail = @detail WHERE PKCategoryID = @id');
      callback(null, result);
    } catch(err) {
      callback(err, null);
    }
  }

  static async deleteCategory(id, callback) {
    try {
      const request = new sqlServer.Request();
      request.input('id', sqlServer.Int, id);
      const result = await request.query('DELETE FROM Category WHERE PKCategoryID = @id');
      callback(null, result);
    } catch (err) {
      callback(err, null);
    }
  }
}

module.exports = categoryDB;