const categoryDB = require('./../databaseConnection/categoryDB');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send('Si funca');
});

app.get('/categories', (request, response) => {
  categoryDB.getAllCategories((err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.get('/categories/:id', (request, response) => {
  const { id } = request.params;
  categoryDB.getCategory(id, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.post('/categories', (request, response) => {
  const { description } = request.body;
  categoryDB.addCategory(description, (err, results) => {
    if (err) {
      console.error(`Error al ejecutar la consulta ${err}`);
      response.status(500).send('Error en el servidor');
    } else response.status(200).send(results);
  });
});

app.put('/categories/:id', (request, response) => {
    const { id } = request.params;
    const { description } = request.body;
    categoryDB.editCategory(id, description, (err, results) => {
        if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
    });
});

app.delete('/categories/:id', (request, response) => {
    const { id } = request.params;
    categoryDB.deleteCategory(id, (err, results) => {
        if (err) {
            console.error(`Error al ejecutar la consulta ${err}`);
            response.status(500).send('Error en el servidor');
          } else response.status(200).send(results);
    });
});

app.listen(port, () => {
  console.log('=========== SERVER ON ==================');
});
