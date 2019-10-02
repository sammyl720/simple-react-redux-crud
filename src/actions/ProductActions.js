import { v4 } from "uuid";

// add a product to state
export const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      ...product,
      id: v4()
    }
  };
};

// edit a user
export const editProduct = product => {
  return {
    type: "EDIT_PRODUCT",
    payload: product
  };
};

// delete a user
export const deleteProduct = id => {
  console.log(`Call to delete product with id: ${id}`);
  return {
    type: "DELETE_PRODUCT",
    payload: id
  };
};
