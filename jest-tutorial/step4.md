# Create mocked functions and spy on them 

There are situations where components (or code in general) is reliant on different code that is outside the components responsibility. Examples of this are when components call a backend server, uses a package or just is reliant on a piece of code from a different part of the application. Even if the component we want to test is reliant on another service or part of the codebase, we still want to test the component in isolation. How do we do that? 

We can use something jest calls mocks to mimic the return values of external functions, components or entire packages. 

## Introducing `jest.fn()` 

You can create mock functions called "stubs" with `const stub = jest.fn()`. At any point in the test you can evaluate if this function has been invoked using `expect(stub).toHaveBeenCalled()`. We will create a stub and pass it into `<LoginForm>`, in order to make sure that the login function is executed if our credentials passes all validation checks. 

First, in our Login component test at `src/components/loginForm.test.jsx` within the describe block, create a new test that expect the login callback function to not be called when you click the submit button without entering your login credentials. 

<pre class="file"  data-filename="/root/kataUser/dummy-react-app/src/components/loginForm.test.jsx" data-target="append">
test("submit without credentials should not invoke callback", () => {
  const stub = jest.fn();
  render(&lt;LoginForm loginCallback={stub} /&gt;);

  screen.getByTestId(/login-submit-button/i).click();

  expect(stub).not.toHaveBeenCalled();
});
</pre>

The "callback" stub is our login function. That stub function is passed into the login component and is triggered when the login information is entered successfully and the form is submitted. That function should not be invoked if our login credentials are not entered into the email and password field before submitting. 

Now it's time to create a test that actually will (or should) invoke the callback. You can examine the source code further in the assets folder, but the summary is that both the email field and the password field needs to be filled in for the callback to be executed. 

We can create a new tests that tests this case:

<pre class="file"  data-filename="/root/kataUser/dummy-react-app/src/components/loginForm.test.jsx" data-target="append">
test("submit with invalid email credentials should invoke callback", () => {
  const stub = jest.fn(() => Promise((resolve) => resolve()));
  render(&lt;LoginForm loginCallback={stub} /&gt;);

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
</pre>

>>If you look at this test critically, you might notice that `Hello, World!` is obviously not a valid email address, yet the callback is executed and the test passes. Why is that? <<
(*) "The login component does not validate email addresses yet, we have to implement it ourselves"
( ) "We have encountered a bug with jest. We have to write a workaround"
( ) "The test invokes the callback directly instead of the component (which we should not do)"
