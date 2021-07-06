const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/products', require('./routes/routes'));

app.listen(process.env.PORT || PORT);
