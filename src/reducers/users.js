const initialState = {
  list: [
    {
      name: "Sam",
      email: "sam@gmail.com",
      isStaff: true,
      id: 1
    }
  ],
  current: {
    name: "Sam",
    email: "sam@gmail.com",
    isStaff: true,
    id: 1
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case "EDIT_USER":
      return {
        current: null,
        list: state.list.map(user =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    case "DELETE_USER":
      return {
        ...state,
        list: state.list.filter(user => user.id !== action.payload)
      };
    case "GET_USER":
      return {
        ...state,
        current: state.list.find(user => user.id === action.payload)
      };
    default:
      return state;
  }
}
