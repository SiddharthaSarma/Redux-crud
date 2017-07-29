const _ = require("lodash");
const BooksDB = require("../models/bookModel");

// Get all users details
const getBooks = (req, res, next) => {
  BooksDB.find(
    {},
    {
      updatedAt: 0,
      createdAt: 0
    }
  )
    .sort({ createdAt: 1 })
    .exec((err, books) => {
      res.status(200).json(books);
    });
};

// Get a single user details
const getBook = (req, res, next) => {
  BooksDB.find(
    {
      _id: req.params.bookId
    },
    {
      updatedAt: 0,
      createdAt: 0
    },
    (err, book) => {
      res.status(200).json(book);
    }
  );
};

// Create a new user
const createBook = (req, res, next) => {
  let book = ({ title, author, publisher, genre } = req.body);

  BooksDB.insert(book, (err, newBook) => {
    let result = _.omit(newBook, ["updatedAt", "createdAt"]);
    res.status(200).json(result);
  });
};

// Update user's details.
const updateBook = (req, res, next) => {
  let id = req.params.bookId;
  let book = ({ title, author, publisher, genre } = req.body);

  BooksDB.update(
    {
      _id: id
    },
    {
      $set: book
    },
    (err, newBook) => {
      res.status(200).json({
        success: true
      });
    }
  );
};

// Delete user
const deleteBook = (req, res, next) => {
  let id = req.params.bookId;
  BooksDB.remove(
    {
      _id: id
    },
    {},
    (err, numRemoved) => {
      res.status(200).json({
        success: true
      });
    }
  );
};

module.exports = {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook
};
