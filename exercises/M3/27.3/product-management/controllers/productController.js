const express = require('express');
const productModel = require('../models/productModel');


const getAll = async (request, response, next) => {
  const products = await productModel.getAll();
  response.send(products);
};

const getById = async (request, response, next) => {
  const product = await productModel.getById(req.params.id);
  response.send(product);
};

const create = async (request, response) => {
  const { name, brand } = request.body;
  const newProduct = await productModel.create(name, brand);
  response.send(newProduct);
};

const del = async (req, res) => {
  const products = await ProductModel.del(req.params.id);

  res.send(products);
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
};

module.exports = {
  getAll,
  getById,
  create,
  del,
  update,
};
