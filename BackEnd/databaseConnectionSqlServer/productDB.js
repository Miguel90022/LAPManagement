const Product = require('../models/product');

class productDB {
  static async getAllProducts() {
    try {
      return await Product.findAll();
    } catch (err) {
      throw err;
    }
  }

  static async getProduct(id) {
    try {
      return await Product.findByPk(id);
    } catch (err) {
      throw err;
    }
  }

  static async addProduct(barcode, fkCategoryId, detail, stock, price) {
    try {
      return await Product.create({ Barcode: barcode, FKCategoryID: fkCategoryId, Detail: detail, Stock: stock, Price: price });
    } catch (err) {
      throw err;
    }
  }

  static async editProduct(id, barcode, fkCategoryId, detail, stock, price) {
    try {
      return await Product.update({ Barcode: barcode, FKCategoryID: fkCategoryId, Detail: detail, Stock: stock, Price: price }, { where: { PKProductID: id } });
    } catch (err) {
      throw err;
    }
  }

  static async deleteProduct(id) {
    try {
      return await Product.destroy({ where: { PKProductID: id } });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = productDB;
