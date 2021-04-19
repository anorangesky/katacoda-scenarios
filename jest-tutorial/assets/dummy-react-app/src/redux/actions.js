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

export const authenticate = (email, password) => {
  return (dispatch) => {
    axios
      .post("localhost:5000/authenticate", {email, password})
      .then((res) => {
        dispatch(authenticateAction(res.data));
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
