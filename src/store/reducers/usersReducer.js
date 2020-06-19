import { GET_USERS } from "../actions/actionCreators";

function users_reducer(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
export default users_reducer;
