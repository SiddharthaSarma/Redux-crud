export default function BooksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.data];
    default:
      return state;
  }
}
