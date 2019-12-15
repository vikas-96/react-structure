import * as types from "./ActionType";
import { createUser, getUser } from "../../request/User";

export function createUserData(data) {
  return async dispatch => {
    dispatch({ type: types.CREATE_USER_BEGIN });
    return await createUser(data)
      .then(json => {
        dispatch({ type: types.CREATE_USER_SUCCESS, payload: json });
      })
      .catch(error => {
        dispatch({
          type: types.CREATE_USER_FAILURE,
          payload: error
        });
      });
  };
}

export function getUserData(id) {
  return async dispatch => {
    dispatch({ type: types.GET_USER_BEGIN });
    return await getUser(id)
      .then(json => {
        dispatch({ type: types.GET_USER_SUCCESS, payload: json });
      })
      .catch(error => {
        dispatch({ type: types.GET_USER_FAILURE, payload: error });
      });
  };
}
