import axios from "axios";

export function addBook(data) {
  const request = axios.post("http://localhost:3000/api/books", data);
  return dispatch => {
    request.then(response => {
      dispatch({
        type: "ADD_BOOK",
        data
      });
    });
  };
}
export function getBooks() {
  const request = axios.get("http://localhost:3000/api/books");
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: "FETCH_BOOKS", data: data });
    });
  };
}

export function deleteBook(id) {
  console.log(id);
  const request = axios.delete(`http://localhost:3000/api/books/${id}`);
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: "DELETE_BOOK", data: id });
    });
  };
}
