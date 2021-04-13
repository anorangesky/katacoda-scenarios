# Create stubs using `jest.fn()` 

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