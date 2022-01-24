import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducers/index";

const middleware = [thunk];
// const initialState = [];
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
