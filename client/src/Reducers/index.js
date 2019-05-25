import { combineReducers } from "redux"; // TO combine all the available reducers

import AuthReducers from "./AuthReduers";

export default combineReducers({
  auth: AuthReducers
});
