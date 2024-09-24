import axios from "axios";
import { GET_MATCH_SUCCESS } from "./actionTypes";

export const ShowData =(obj)=> (dispatch) => {
  axios
    .get("http://localhost:8080/matches",{
      params : obj.params,
    })
    .then(
      (res) => (
        dispatch({ type: GET_MATCH_SUCCESS, payload: res.data })
      )
    )
    .catch((err) => console.log(err));
};
