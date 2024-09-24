import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialstate = {
  Loading: false,
  token: null,
  error: false,
};
export const reducer = (state = initialstate, action) => {
  // complete the reducer
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        Loading: true,
        token: null,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        Loading: false,
        token: action.payload,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        Loading: false,
        token: null,
        error: true,
      };
    default:
      return state;
  }
};
