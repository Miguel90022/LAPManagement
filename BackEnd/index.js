const categoriesRouter = require('./routes/categoriesRoutes');
const productsRouter = require('./routes/productsRoutes');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.get('/', (request, response) => {
  response.status(200).send('Si funca');
});

app.listen(port, () => {
  console.log('=========== SERVER ON ==================');
});