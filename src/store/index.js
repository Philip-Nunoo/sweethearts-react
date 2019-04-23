import { createStore, combineReducers } from "redux";
import literals from "./literals.js";

const rootReducer = combineReducers({
  literals,
});

export default createStore(rootReducer);
