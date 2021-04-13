import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./index";
import { jest, afterEach, test, expect, describe } from "@jest/globals";

describe("Login component", () => {
  afterEach(cleanup);

  test("snapshot", () => {
    render(<LoginForm />);
    const linkElement = screen.getByTestId(/login-form/i);
    expect(linkElement).toMatchSnapshot();
  });

  test("renders login form", () => {
    render(<LoginForm />);
    const linkElement = screen.getByTestId(/login-form/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("test empty login callback", () => {
    const stub = jest.fn().mockResolvedValue(true);
    render(<LoginForm loginCallback={stub} />);

    screen.getByTestId(/login-submit-button/i).click();

    expect(stub).not.toHaveBeenCalled();
  });

  test("test invalid email with password login callback", () => {
    const stub = jest.fn().mockResolvedValue(true);
    render(<LoginForm loginCallback={stub} />);

    const emailInput = screen
      .getByTestId(/login-email-field/i)
      .querySelector("input");
    userEvent.type(emailInput, "Hello, World!");
    const passwordInput = screen
      .getByTestId(/login-password-field/i)
      .querySelector("input");
    userEvent.type(passwordInput, "password");

    screen.getByTestId(/login-submit-button/i).click();

    expect(stub).not.toHaveBeenCalled();
  });

  test("test valid email with password login callback", () => {
    const stub = jest.fn().mockResolvedValue(true);
    render(<LoginForm loginCallback={stub} />);

    const emailInput = screen
      .getByTestId(/login-email-field/i)
      .querySelector("input");
    userEvent.type(emailInput, "adahen@kth.se");
    const passwordInput = screen
      .getByTestId(/login-password-field/i)
      .querySelector("input");
    userEvent.type(passwordInput, "password");

    screen.getByTestId(/login-submit-button/i).click();

    expect(stub).toHaveBeenCalled();
  });

  test("test valid email without password login callback", () => {
    const stub = jest.fn().mockResolvedValue(true);
    render(<LoginForm loginCallback={stub} />);

    const emailInput = screen
      .getByTestId(/login-email-field/i)
      .querySelector("input");
    userEvent.type(emailInput, "adahen@kth.se");

    screen.getByTestId(/login-submit-button/i).click();

    expect(stub).not.toHaveBeenCalled();
  });
});
