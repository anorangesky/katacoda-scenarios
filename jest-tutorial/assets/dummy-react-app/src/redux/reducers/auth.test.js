import { test, expect } from "@jest/globals";
import reducers from "./index";

test("reducers", () => {
  let state;
  state = reducers(
    { auth: { user: null } },
    { type: "AUTHENTICATE", payload: { user: { username: "adam" } } }
  );
  expect(state).toEqual({ auth: { user: { username: "adam" } } });
});
