import React, { Component } from "react";
import { connect } from "react-redux";
import * as bookActions from "../actions/BooksAction";
class Book extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
  }
  deleteBook() {
    this.props.dispatch(bookActions.deleteBook(this.props._id));
    console.log(this.props);
  }
  render() {
    return (
      <li className="list-group-item" key={this.props.key}>
        {this.props.title}
        <button
          onClick={this.deleteBook}
          className="btn btn-xs btn-danger pull-right"
        >
          <span className="glyphicon glyphicon-trash" />
        </button>
      </li>
    );
  }
}

export default connect()(Book);
