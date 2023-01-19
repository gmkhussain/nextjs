import OtherReducer from "./OtherReducer";
import MainReducer from "./MainReducer";
import { combineReducers } from "redux";

export default combineReducers({
  root: MainReducer,
  other: OtherReducer,
});
