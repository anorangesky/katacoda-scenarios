import { test, expect } from "@jest/globals";
import reducers from "./index";

const user = {
  id: 0,
  username: "admin",
  email: "admin@domain.com",
};

test("reducers", () => {
  let state;
  state = reducers(
    { auth: { user: null } },
    { type: "AUTHENTICATE", payload: { user } }
  );
  expect(state).toEqual({ auth: { user } });
});
