import { combineReducers } from "redux";
import auth from "./auth";
import vendor from "./vendor";
export default combineReducers({
  auth: auth,
  vendor:vendor
});
