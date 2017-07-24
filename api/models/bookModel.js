const Datastore = require("nedb");
const books = new Datastore({
  filename: "./database/books.db",
  autoload: true,
  timestampData: true
});

module.exports = books;
