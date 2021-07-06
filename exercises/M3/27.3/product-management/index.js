const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/products', require('./controllers/productController'));

const PORT = 3000;

app.listen(PORT);

