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
        isValidationError: true,
        error: action.payload
      };

    //update
    case types.UPDATE_USER_BEGIN:
      return {
        ...state,
        isUserUpdated: false,
        error: null
      };

    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload.User,
        isUserUpdated: true,
        isValidationError: false,
        error: null
      };

    case types.UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        userData: {},
        isValidationError: true,
        isUserUpdated: false
      };
    default:
      return state;
  }
}
