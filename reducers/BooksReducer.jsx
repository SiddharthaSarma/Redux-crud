export default function BooksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, Object.assign({}, action.data)];
    default:
      return state;
  }
}
