# Integration test will full mocking

The final test we write will test the full login path:

1. Loading the App component, you will be greeted by the login screen. 
2. Enter your information and submit. Send a login request to `localhost:5000/authenticate`.
3. Check that the correct information was sent and save the response data as the current user.
4. Check that you are now greeted by `hello [username]` instead of the login form. 

Since we do not have a backend (and do not want to use the backend in our test anyway). We will create mock the response from the server. How do we do that when we do not have access to the underlying app code in our test? 

Using the `/__mocks__/` folder, jest will replace any imported node package in our code with the file in the folder with the same name. That means if we create the file `/__mocks__/axios.js` the App component will import our fake axios when inside a test, which can return a fake response from a mocked function. We can also spy on that function to see if it has been called and what it has been called with. 

```javascript
// src/__mocks__/axios.js

export default {
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
```

```javascript
const authRequest = {
  email: "admin@domain.com",
  password: "password",
};

const userResponse = {
  id: 0,
  username: "admin",
  email: "admin@domain.com",
};

test("App login test", async () => {
  render(<App />);

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

  // This will make sure that the information from the form is 
  // sent by axios in the correct format
  expect(mockAxios.post).toBeCalledWith(
    "localhost:5000/authenticate",
    authRequest
  );
```

This is the finished test

```javascript
// src/App.test.js

import React from "react";

import App from "./App";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import mockAxios from "axios";

const authRequest = {
  email: "admin@domain.com",
  password: "password",
};

const userResponse = {
  id: 0,
  username: "admin",
  email: "admin@domain.com",
};

test("App login test", async () => {
  render(<App />);

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

  expect(mockAxios.post).toBeCalledWith(
    "localhost:5000/authenticate",
    authRequest
  );

  await waitFor(async () =>
    expect(screen.getByTestId("greeting").innerHTML).toBe(
      `hello ${userResponse.username}!`
    )
  );
});

```