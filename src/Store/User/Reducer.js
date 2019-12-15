import * as types from "./ActionType";

const initialState = {
  usersArray: [],
  userDetail: {},
  userData: {}
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    // create
    case types.CREATE_USER_BEGIN:
      return {
        ...state,
        error: null
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isUserCreated: true,
        isValidationError: false,
        error: null
      };
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        isValidationError: true,
        error: action.payload
      };

    // get
    case types.GET_USER_BEGIN:
      return {
        ...state,
        error: null
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        userData: {},
        error: action.payload
      };
    default:
      return state;
  }
}
