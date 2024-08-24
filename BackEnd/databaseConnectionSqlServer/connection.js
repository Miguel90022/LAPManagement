const sqlServer = require('mssql');

const connectionConfig = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  server: process.env.DATABASE_SERVER,
  database: process.env.DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

sqlServer.connect(connectionConfig, err => {
  if (err) console.error(`Error al conectar a la base de datos: ${err}`);
  else console.log(`Conexión exitosa a la base de datos`);
});

module.exports = sqlServer;