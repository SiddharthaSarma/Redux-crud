const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController');

router.route('/')
  .get(booksController.getBooks)
  .post(booksController.createBook);

router.route('/:bookId')
    .get(booksController.getBook)
    .put(booksController.updateBook)
    .delete(booksController.deleteBook);

module.exports = router;