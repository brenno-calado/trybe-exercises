const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (request, response, next) => {
  const products = await productModel.getAll();
  response.send(products);
});

router.get('/get-by-id/:id', async (request, response, next) => {
  const product = await productModel.getById(req.params.id);
  response.send(product);
});

router.post('/add-user', async (request, response) => {
  const { name, brand } = request.body;
  const newProduct = await productModel.add(name, brand);
  response.send(newProduct);
});

router.post('/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
