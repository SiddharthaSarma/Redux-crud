import React, { Component } from "react";
import ReactDOM from "react-dom";

// Imports
import NewBook from "../components/NewBook";

const App = () =>
  <div>
    <NewBook />
  </div>;

ReactDOM.render(<App />, document.getElementById("app"));
