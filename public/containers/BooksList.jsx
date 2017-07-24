import React, { Component } from "react";
import Book from "../components/Book";
import { connect } from "react-redux";
import * as bookActions from '../actions/BooksAction';

class BooksList extends Component {
  componentDidMount() {
    this.props.dispatch(bookActions.getBooks());
  }
  bindBooks(book, index) {
    return <Book key={index} {...book} />;
  }
  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.books.map(this.bindBooks)}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
export default connect(mapStateToProps)(BooksList);
