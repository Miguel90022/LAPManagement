const categoryEndPoints = require('./categoryEndPoints');
const productEndPoints = require('./productEndPoints');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/categories', categoryEndPoints);
app.use('/products', productEndPoints);

app.get('/', (request, response) => {
  response.status(200).send('Si funca');
});

app.listen(port, () => {
  console.log('=========== SERVER ON ==================');
});