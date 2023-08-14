import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducers";
import firestoreReducer from "./auth/firestoreReducer";

const middleware = [thunk];
const rootReducer = combineReducers({
  auth: authReducer,
  fire: firestoreReducer,
});
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
