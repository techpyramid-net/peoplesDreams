import { combineReducers } from "redux";
import { UserReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;
