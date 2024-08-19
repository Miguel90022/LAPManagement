const categoriesRouter = require('./routes/categoriesRoutes');
const productsRouter = require('./routes/productsRoutes');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.json());
app.use(cors());
//{origin: 'http://localhost:5173'}
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.get('/', (request, response) => {
  response.status(200).send('Si funca');
});

app.listen(port, () => {
  console.log('=========== SERVER ON ==================');
});