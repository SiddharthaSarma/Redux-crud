import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/BooksAction";

class NewBook extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(event) {
    event.preventDefault();
    let data = {
      title: this.refs.title.value,
      author: this.refs.author.value,
      publisher: this.refs.publisher.value,
      genre: this.refs.genre.value
    };
    this.props.dispatch(actions.addBook(data));
  }
  render() {
    const styles = {
      heading: {
        textAlign: "center",
        marginBottom: "25px"
      }
    };
    return (
      <div className="col-md-5">
        <div className="form-area">
          <form role="form" onSubmit={this.submitForm}>
            <h3 style={styles.heading}>New Book</h3>
            <div className="form-group">
              <input
                type="text"
                ref="title"
                className="form-control"
                id="txtTitle"
                name="title"
                placeholder="Title"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                ref="author"
                className="form-control"
                id="txtAuthor"
                name="author"
                placeholder="Author"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                ref="publisher"
                className="form-control"
                id="txtPublisher"
                name="publisher"
                placeholder="Book publisher"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                ref="genre"
                className="form-control"
                id="txtGenre"
                name="genre"
                placeholder="Book genre"
                required
              />
            </div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="btn btn-primary pull-right"
            >
              Add book
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewBook);
