const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  const nineteenFortySeven = books.find((value) => value.author.birthYear === 1947);
  return nineteenFortySeven.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
  let nameBook;

  const findSmallest = (value) => {
    if (nameBook === undefined || value.name.length <= nameBook.length) {
      nameBook = value.name;
    }
  }
  
  books.forEach(findSmallest);

  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

function getNamedBook(size) {
  // find first book name with x characters
  const bookNameSizeMatch = books.find((value) => value.name.length === size)
  return bookNameSizeMatch.name;
}

assert.deepStrictEqual(getNamedBook(26), 'As Crônicas de Gelo e Fogo');

function booksOrderedByReleaseYearDesc() {
  // sort by releaseYear
  // Used explanation here https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ to sort by a property inside an object

  const orderedBooks = books.sort((a, b) => (a.releaseYear > b.releaseYear) ? -1 : 1);
  return orderedBooks;
}

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

function everyoneWasBornOnSecXX() {
  return Object.values(books).every((values) => values.author.birthYear < 2000 && values.author.birthYear > 1899);
};

assert.strictEqual(everyoneWasBornOnSecXX(), false);

function someBookWasReleaseOnThe80s() {
  return Object.values(books).some((values) => values.releaseYear < 1990 && values.releaseYear > 1979);
};

assert.strictEqual(someBookWasReleaseOnThe80s(), true);

function authorUnique() {
  // gabarito para refletir abaixo
  return books.every((book)=> !books.some((bookSome)=> (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());

assert.strictEqual(authorUnique(), false);
