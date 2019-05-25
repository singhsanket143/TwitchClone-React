import { combineReducers } from "redux"; // TO combine all the available reducers

import AuthReducers from "./AuthReduers";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: AuthReducers,
  form: formReducer
});
