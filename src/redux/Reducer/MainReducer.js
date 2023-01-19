const initialState = {
  user: "admin",
};

export default function initialStateFunc (state = initialState, action) {
  switch (action.type) {    
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}