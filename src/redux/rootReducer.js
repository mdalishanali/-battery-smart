import { authReducer } from "./auth/reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  userState: authReducer,
});

export default RootReducer;
