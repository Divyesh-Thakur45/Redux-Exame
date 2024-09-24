import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

const initialstate = {
  isLoading: false,
  data: [],
  isError: false,
};
export const reducer = (state = initialstate, action) => {
  // Complete the logic
  switch (action.type) {
    case GET_MATCH_REQUEST:
      return { data: false, isError: false, isLoading: true };
    case GET_MATCH_SUCCESS:
      return { isError: false, isLoading: false, data: action.payload };
    case GET_MATCH_FAILURE:
      return { data: false, isLoading: false, isError: true };
    default:
      return state;
  }
};
