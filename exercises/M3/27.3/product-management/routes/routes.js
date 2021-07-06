const express = require('express');
const routes = express.Router();
const {
  getAll,
  getById,
  create,
  del,
  update,
} = require('../controllers/productController');

routes.get('/', getAll);

routes.get('/:id', getById);

routes.post('/', create);

routes.delete('/:id', del);

routes.update('/:id', update);

module.exports = routes;
