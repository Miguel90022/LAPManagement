const Category = require('../models/category');

class categoryDB {
  static async getAllCategories() {
    try {
      return await Category.findAll();
    } catch (err) {
      throw err;
    }
  }

  static async getCategory(id) {
    try {
      return await Category.findByPk(id);
    } catch (err) {
      throw err;
    }
  }

  static async addCategory(detail) {
    try {
      return await Category.create({ Detail: detail });
    } catch (err) {
      throw err;
    }
  }

  static async editCategory(id, detail) {
    try {
      return await Category.update({ Detail: detail }, { where: { PKCategoryID: id } });
    } catch (err) {
      throw err;
    }
  }

  static async deleteCategory(id) {
    try {
      return await Category.destroy({ where: { PKCategoryID: id } });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = categoryDB;
