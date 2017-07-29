export default function BooksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat(action.data);
    case "FETCH_BOOKS":
      console.log([...action.data])
      return action.data;
    case "DELETE_BOOK":
      let books = state.filter((book) => {
        return book._id !== action.data;
      });
      return books;
    default:
      return state;
  }
}
