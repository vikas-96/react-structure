import * as types from "./ActionType";
import { createUser } from "../../request/User";

export function createUserData(data) {
  return async dispatch => {
    dispatch({ type: types.CREATE_USER_BEGIN });
    return await createUser(data)
      .then(json => {
        dispatch({ type: types.CREATE_USER_SUCCESS, payload: json });
      })
      .catch(error => {
        dispatch({ type: types.CREATE_USER_FAILURE, payload: error });
      });
  };
}
