import { combineReducers } from "redux";
import books from "./BooksReducer";

const RootReducer = combineReducers({
  books
});
export default RootReducer;
