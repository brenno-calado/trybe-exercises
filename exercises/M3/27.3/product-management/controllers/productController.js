const express = require('express');
const productModel = require('../models/productModel');


const getAll = async (request, response, next) => {
  const products = await productModel.getAll();
  response.send(products);
};

const getById = async (request, response, next) => {
  const product = await productModel.getById(request.params.id);
  response.send(product);
};

const create = async (request, response) => {
  const { name, brand } = request.body;
  const newProduct = await productModel.create(name, brand);
  response.send(newProduct);
};

const del = async (request, response) => {
  const products = await productModel.del(request.params.id);

  response.send(products);
};

const update = async (request, response) => {
  const { name, brand } = request.body;

  const products = await productModel.update(request.params.id, name, brand);

  response.send(products);
};

module.exports = {
  getAll,
  getById,
  create,
  del,
  update,
};
