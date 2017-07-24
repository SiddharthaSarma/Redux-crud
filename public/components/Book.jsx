import React from "react";

const Book = props => {
  return (
    <li className="list-group-item" key={props.key}>
      {props.title}
    </li>
  );
};

export default Book;
