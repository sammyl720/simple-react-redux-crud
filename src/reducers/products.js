export default function(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
}
