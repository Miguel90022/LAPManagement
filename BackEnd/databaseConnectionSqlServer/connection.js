const sqlServer = require('mssql');

const connectionConfig = {
  user: 'sa',
  password: 'SqlServer123',
  server: 'localhost',
  database: 'LapManagement',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

sqlServer.connect(connectionConfig, err => {
  if (err) console.log(`Error al conectar a la base de datos: ${err}`);
  else console.log(`Conexión exitosa a la base de datos`);
});

module.exports = sqlServer;