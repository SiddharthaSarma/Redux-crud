import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/RootReducer";
import reduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(RootReducer, initialState, applyMiddleware(reduxThunk));
}
