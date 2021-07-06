const productModel = require('../models/productModel');
const OK = 200;
const CREATED = 201;
const UPDATED = 204;


const getAll = async (_request, response) => {
  const products = await productModel.getAll();
  response.status(OK).json(products);
};

const getById = async (request, response) => {
  const product = await productModel.getById(request.params.id);
  response.status(OK).json(product);
};

const create = async (request, response) => {
  const { name, brand } = request.body;
  const newProduct = await productModel.create(name, brand);
  response.status(CREATED).json(newProduct);
};

const del = async (request, response) => {
  const products = await productModel.del(request.params.id);

  response.status(OK).json(products);
};

const update = async (request, response) => {
  const { name, brand } = request.body;

  await productModel.update(request.params.id, name, brand);

  return response.status(UPDATED).send();
};

module.exports = {
  getAll,
  getById,
  create,
  del,
  update,
};
