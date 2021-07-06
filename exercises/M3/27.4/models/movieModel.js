const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const movieCollection = await connection()
    .then((db) => db.collection('movies'));
  const { inserterdId: id } = await movieCollection
    .insertOne({ title, directedBy, releaseYear });
  return { id };
}

module.exports = create;
