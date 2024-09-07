const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_SERVER,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  }
);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function connectWithRetries(retries, delay) {
  while (retries > 0) {
    try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a la base de datos');
      return;
    } catch (err) {
      console.error(`Error al conectar a la base de datos: ${err.message}`);
      retries -= 1;
      if (retries > 0) {
        console.log(`Reintentando en ${delay / 1000} segundos...`);
        await wait(delay);
      } else {
        console.error(
          'No se pudo conectar a la base de datos después de varios intentos'
        );
      }
    }
  }
}

connectWithRetries(5, 5000);

module.exports = sequelize;
