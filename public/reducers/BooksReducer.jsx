export default function BooksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat(action.data);
    case "FETCH_BOOKS":
      console.log([...action.data])
      return action.data;
    default:
      return state;
  }
}
