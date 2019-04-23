import { createStore, combineReducers } from "redux";
import literals from "./literals.js";

const rootReducer = combineReducers({
  literals,
  // other reducers...
});

export default createStore(rootReducer);
