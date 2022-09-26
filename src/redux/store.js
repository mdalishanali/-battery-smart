import { authReducer } from "./auth/reducer";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./rootReducer";

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
