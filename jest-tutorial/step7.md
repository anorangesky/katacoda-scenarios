# Create callback functions with stubs 

## Introducing `jest.fn()` 

When you want to test things like a button's `onClick()` function, or when you want to make sure that a function is called when you submit a form, you can create what is called a "stub". A stub is a placeholder function that track if it has been invoked or not.

You can create stubs with `const stub = jest.fn()`. At any point in the test you can evaluate if this function has been invoked using `expect(stub).toHaveBeenCalled()`. We will create a stub and pass it into `<LoginField>`, in order to make sure that the login function is executed if our credentials passes all validation checks. 

First, in our Login component test at `src/components/LoginForm/index.test.jsx`, within the describe block, create a new test like this:

```javascript
test("test empty login should not invoke callback", () => {
  render(<LoginForm />);

});
```

If we pass a mocked function into the component like this: `<LoginField loginCallback={stub}>`. The test will then look like this:

```javascript
test("test empty login should not invoke callback", () => {
  const stub = jest.fn();
  render(<LoginForm loginCallback={stub} />);

});
```

The "callback" stub is our login function. That function should not be invoked if our login credentials are not entered into the email and password field before submitting. The final test will look like this:

```javascript
test("test empty login should not invoke callback", () => {
  const stub = jest.fn();
  render(<LoginForm loginCallback={stub} />);

  screen.getByTestId(/login-submit-button/i).click();

  expect(stub).not.toHaveBeenCalled();
});
```

Now it's time to create a test that actually will (or should) invoke the callback. You can examine the source code further in the assets folder, but the summary is that both the email field and the password field needs to be filled in for the callback to be executed. 

We can create a new tests that tests this case:

```javascript
test("test email with password login callback", () => {
  const stub = jest.fn(() => Promise((resolve) => resolve()));
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

  expect(stub).toHaveBeenCalled();
});
```

>>If you look at this test critically, you might notice that `Hello, World!` is obviously not a valid email address, yet the callback is executed and the test passes. Why is that? <<
(*) "The login component does not validate email addresses"
( ) "The test have not implemented email validation"
( ) "The test invokes the callback directly instead of the component"
