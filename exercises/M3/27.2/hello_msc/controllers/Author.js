const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (request, response) => {
  const authors = await service.getAll();

  response.status(200).json(authors);
});

const findById = rescue(async (request, response, next) => {
  const { id } = request.params;
  const author = await service.findById(id);
  if(author.error) return next(author.error);
  response.status(200).json(author);
});

module.exports = {
  getAll,
  findById,
}
