const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnectionSqlServer/connection');
const Category = require('./category');

const Product = sequelize.define('Product', {
  PKProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Barcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Product',
  timestamps: false,
});

Product.belongsTo(Category, { foreignKey: 'FKCategoryID' });

module.exports = Product;
