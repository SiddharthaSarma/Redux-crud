import React, { Component } from "react";

class NewBook extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(event) {
    event.preventDefault();
    console.log('I am logged');
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
                className="form-control"
                id="txtAuthor"
                name="author"
                placeholder="Author"
                required
              />
            </div>
            <div className="form-group">
              <select className="form-control" id="ddlLanguage">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
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

export default NewBook;
