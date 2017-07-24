const faker = require('faker');
const _ = require('lodash');
const BooksDB  = require('../models/bookModel');

const books = [];
_.times(1, () => {
  books.push({
      title: 'Your Safari Dragons: In Search of the Real Komodo Dragon',
      author: 'White, Daniel',
      publisher: 'Safari',
      genre: 'fantasy'
  });
});

BooksDB.insert(books, (err, docs) => {
  console.log('Database created successfully');
});