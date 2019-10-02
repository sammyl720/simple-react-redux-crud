import { createStore } from "redux";
import rootReducer from "./reducers";
const initialState = {
  users: {
    list: [
      {
        name: "Sam",
        email: "sam@gmail.com",
        isStaff: true,
        id: 1
      }
    ],
    current: null
  },
  products: [
    {
      name: "Iphone 8x",
      price: 899,
      id: 342
    }
  ]
};
export default createStore(rootReducer, initialState);
