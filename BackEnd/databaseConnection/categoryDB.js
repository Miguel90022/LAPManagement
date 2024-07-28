const connectionConfig = require('./connection')

class categoryDB {

    static getAllCategories(callback) {
        const query = 'SELECT * FROM Category';
        connectionConfig.query(query, (err, results) => {
            callback(err, results);
        });
    }

    static getCategory(id, callback) {
        const query = 'SELECT * FROM Category WHERE PkCategoryID = ?';
        connectionConfig.query(query, id, (err, results) => {
            callback(err, results[0]);
        });
    }

    static addCategory(description, callback) {
        const query = 'INSERT INTO Category (Description) VALUES (?)';
        connectionConfig.query(query, description, (err, results) => {
            callback(err, results);
        });
    }

    static editCategory(id, description, callback) {
        const query = 'UPDATE Category SET Description = ? WHERE PKCategoryID = ?';
        connectionConfig.query(query, [description, id], (err, results) => {
            callback(err, results);
        });
    }

    static deleteCategory(id, callback) {
        const query = 'DELETE FROM Category WHERE PKCategoryID = ?';
        connectionConfig.query(query, id, (err, results) => {
            callback(err, results);
        });

    }

}

module.exports = categoryDB;