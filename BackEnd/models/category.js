const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnectionSqlServer/connection');

const Category = sequelize.define('Category', {
  PKCategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Category',
  timestamps: false,
});

module.exports = Category;
