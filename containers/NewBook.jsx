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
    this.props.dispatch(actions.addBook(this.refs.title.value));
    console.log(this.refs.author.value);
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
              <select ref="language" className="form-control" id="ddlLanguage">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                ref="bookLink"
                className="form-control"
                id="txtBookLink"
                name="bookLink"
                placeholder="Book link"
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
