import { combineReducers } from "redux";
import auth from "./auth";
import vendor from "./vendor";
import customer from "./customer";
export default combineReducers({
  auth: auth,
  vendor:vendor,
  customer:customer
});
