import React, { Component } from "react";
import Book from "../components/Book";

class BooksList extends Component {
  bindBooks(book, index) {
    return <Book key={index} value={book} />;
  }
  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.books.map(this.bindBooks)}
      </ul>
    );
  }
}
export default BooksList;
