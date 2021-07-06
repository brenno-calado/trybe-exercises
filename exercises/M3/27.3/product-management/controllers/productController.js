const productModel = require('../models/productModel');
const OK = 200;
const CREATED = 201;
const UPDATED = 204;
const ERROR = 500;
const NOT_FOUND = 404;


const getAll = async (_request, response) => {
  try {
    const products = await productModel.getAll();
    return response.status(OK).json(products);
  } catch (err) {
    return response.status(ERROR).json({ message: 'Erro interno'});
  }
};

const getById = async (request, response) => {
  const product = await productModel.getById(request.params.id);
  if (!product) return response.status(NOT_FOUND).json({ message: 'produto não encontrado'});
  return response.status(OK).json(product);
};

const create = async (request, response) => {
  const { name, brand } = request.body;
  try {
    const newProduct = await productModel.create(name, brand);
  } catch (err) {
    return response.status(ERROR).json({ message: 'Erro interno'});
  }
  return response.status(CREATED).json(newProduct);
};

const del = async (request, response) => {
  try {
    const products = await productModel.del(request.params.id);
  } catch (err) {
    return response.status(ERROR).json({ message: 'Erro interno'});
  }
  return response.status(OK).json(products);
};

const update = async (request, response) => {
  const { name, brand } = request.body;
  try {
    await productModel.update(request.params.id, name, brand);
  } catch (err) {
    return response.status(ERROR).json({ message: 'Erro interno' })
  }
  return response.status(UPDATED).send();
};

module.exports = {
  getAll,
  getById,
  create,
  del,
  update,
};
