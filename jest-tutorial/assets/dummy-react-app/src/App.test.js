import React from "react";

import App from "./App";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, test, expect, describe } from "@jest/globals";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const authRequest = {
  email: "adahen@kth.se",
  password: "admin",
};

const authHeader = {
  Authorization: "token",
};

const userResponse = {
  id: 0,
  username: "adahen",
  email: "adahen@kth.se",
};

mock.onGet("localhost:5000/me", undefined, authHeader).reply(200, userResponse);
mock.onGet("localhost:5000/me").reply(200, null);

mock
  .onPost("localhost:5000/authenticate", authRequest)
  .reply(200, userResponse, authHeader);
mock.onPost("localhost:5000/authenticate").reply(401, {
  error: "AuthorizationError",
  message: "Invalid login credentials",
});

describe("app", () => {
  afterEach(cleanup);

  test("mock response", async () => {
    render(<App />);

    const emailInput = screen
      .getByTestId(/login-email-field/i)
      .querySelector("input");
    userEvent.type(emailInput, "adahen@kth.se");
    const passwordInput = screen
      .getByTestId(/login-password-field/i)
      .querySelector("input");
    userEvent.type(passwordInput, "admin");

    screen.getByTestId(/login-submit-button/i).click();

    await waitFor(async () =>
      expect(screen.getByTestId("greeting").innerHTML).toBe("hello adahen!")
    );
  });
});
