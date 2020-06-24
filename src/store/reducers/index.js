import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import loginReducer from "./loginReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  loading: loadingReducer,
  authedUser: loginReducer,
});
