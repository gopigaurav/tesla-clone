import { createStore, applyMiddleware, combineReducers} from "redux";
import user from "../reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(user, composedEnhancer);
export default store;
