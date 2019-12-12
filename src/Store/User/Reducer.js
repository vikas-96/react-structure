import * as types from "./ActionType";

const initialState = {
  usersArray: [],
  userDetail: {},
  userData: {}
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CREATE_USER_BEGIN:
      return {
        ...state,
        error: null
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload.user,
        isValidationError: false,
        error: null
      };
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        userData: {},
        isValidationError: true,
        error: action.payload.error
      };
    default:
      return state;
  }
}
