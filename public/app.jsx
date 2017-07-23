import React, { Component } from "react";
import ReactDOM from "react-dom";

// Imports
import NewBook from "./containers/NewBook";
import BooksList from "./containers/BooksList";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <div className="container">
      <NewBook />
      <BooksList />
    </div>
  </Provider>;

ReactDOM.render(<App />, document.getElementById("app"));
