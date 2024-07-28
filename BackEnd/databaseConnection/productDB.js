const connectionConfig = require('./connection')

class productDB {

    static getAllProducts(callback) {
        const query = 'SELECT * FROM Product';
        connectionConfig.query(query, (err, results) => {
            callback(err, results);
        });
    }

    static getProduct(id, callback) {
        const query = 'SELECT * FROM Product WHERE PKProductID = ?';
        connectionConfig.query(query, id, (err, results) => {
            callback(err, results[0]);
        });
    }

    static addProduct(barcode, fkCategoryId, productName, stock, price, callback) {
        const query = 'INSERT INTO Product (Barcode, FKCategoryID, ProductName, Stock, Price) VALUES (?, ?, ?, ?, ?)';
        connectionConfig.query(query, [barcode, fkCategoryId, productName, stock, price], (err, results) => {
            callback(err, results);
        });
    }

    static editProduct(id, barcode, fkCategoryId, productName, stock, price, callback) {
        const query = 'UPDATE Product SET Barcode = ?, FKCategoryID = ?, ProductName = ?, Stock = ?, Price = ? WHERE PKProductID = ?';
        connectionConfig.query(query, [barcode, fkCategoryId, productName, stock, price, id], (err, results) => {
            callback(err, results);
        });
    }

    static deleteProduct(id, callback) {
        const query = 'DELETE FROM Product WHERE PKProductID = ?';
        connectionConfig.query(query, id, (err, results) => {
            callback(err, results);
        });

    }

}

module.exports = productDB;