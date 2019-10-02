import { combineReducers } from "redux";
import userReducer from "./users";
import productReducer from "./products";

export default combineReducers({
  users: userReducer,
  products: productReducer
});
