const express = require('express');
const Author = require('./models/Author');

const OK = 200;

const app = express();

app.get('/authors', async (_request, response) => {
  const authors = await Author.getAll();
  response.status(OK).json(authors);
});

app.get('/authors/:id', async (request, response) => {
  const { id } = request.params;
  const author = await Author.findById(id);
  if (!author) return response.status(404).json({ message: 'Not found' });
  return response.status(200).json(author);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Ouvindo porta ${PORT}`)});

