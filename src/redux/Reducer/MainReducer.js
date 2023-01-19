const initialState = {
  user: "admin",
  isMobile: (typeof window !== "undefined") && /iPhone|iPod|Android/i.test(navigator.userAgent),
};

export default function initialStateFunc (state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}