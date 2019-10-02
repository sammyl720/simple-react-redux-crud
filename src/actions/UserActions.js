import { v4 } from "uuid";

// add a user to state
export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: {
      ...user,
      id: v4()
    }
  };
};

// edit a user
export const getUser = id => {
  return {
    type: "GET_USER",
    payload: id
  };
};

// edit a user
export const editUser = user => {
  console.log(`User: ${JSON.stringify(user)}`);
  return {
    type: "EDIT_USER",
    payload: user
  };
};

// delete a user
export const deleteUser = id => {
  console.log(`Call to delete user with id: ${id}`);
  return {
    type: "DELETE_USER",
    payload: id
  };
};
