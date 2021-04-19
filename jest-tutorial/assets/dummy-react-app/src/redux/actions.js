import { AUTHENTICATE } from "./actionTypes";
import axios from "axios";

const authenticateAction = (user) => {
  return {
    type: AUTHENTICATE,
    payload: {
      user,
    },
  };
};

export const authenticate = (payload) => {
  return (dispatch) => {
    axios
      .post("localhost:5000/authenticate", payload)
      .then((res) => {
        dispatch(authenticateAction(res.data));
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
