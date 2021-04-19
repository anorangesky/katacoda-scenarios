import React from "react";

import App from "./App";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, test, expect, describe } from "@jest/globals";
import mockAxios from "axios";
import { Provider } from "react-redux";
import Store from "./redux/store";

const authRequest = {
  email: "admin@domain.com",
  password: "password",
};

const userResponse = {
  id: 0,
  username: "admin",
  email: "admin@domain.com",
};

describe("app", () => {
  afterEach(cleanup);

  test("mock response", async () => {
    render(
      <Provider store={Store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: userResponse,
      })
    );

    const emailInput = screen
      .getByTestId(/login-email-field/i)
      .querySelector("input");
    userEvent.type(emailInput, authRequest.email);
    const passwordInput = screen
      .getByTestId(/login-password-field/i)
      .querySelector("input");
    userEvent.type(passwordInput, authRequest.password);

    screen.getByTestId(/login-submit-button/i).click();

    expect(mockAxios.post).toHaveBeenCalledWith(
      "localhost:5000/authenticate",
      authRequest
    );

    await waitFor(async () =>
      expect(screen.getByTestId("greeting").innerHTML).toBe(
        `hello ${userResponse.username}!`
      )
    );
  });
});
