const moviesModel = require('../models/movieModel');

const valid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  return true;
}

const create = async ({ title, directedBy, releaseYear }) => {
  if (!valid(title, directedBy, releaseYear)) return false;
  const { id } = await moviesModel.create({ title, directedBy, releaseYear });
  return { id };
}

module.exports = { create };
