const mysql = require('mysql2')

const connectionConfig = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lapmanagementprueba'
    }
);

connectionConfig.connect((err) => {
    if (err) {
        console.log(`Error al conectar a la base de datos ${err}`);
    } else {
        console.log("Conección exitosa a la base de datos");
    }
});

module.exports = connectionConfig;