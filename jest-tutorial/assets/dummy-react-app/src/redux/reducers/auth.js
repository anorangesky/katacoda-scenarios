import { AUTHENTICATE } from "../actionTypes";

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};
