# TDD - Test driven development

Before we implement input validation for the email field in our code, we can first change our test to match how the component should function. 

Change the `test email with password login callback` test to:

```javascript
test("test invalid email with password login callback", () => {
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

  expect(stub).not.toHaveBeenCalled();  // <-- This is the part that needs to be changed. Add .not.
```

And add this test:

<pre class="file"  data-filename="/root/kataUser/dummy-react-app/src/components/loginForm.test.jsx" data-target="append">
test("test valid email with password login callback", () => {
  const stub = jest.fn(() => Promise((resolve) => resolve()));
  render(&lt;LoginForm loginCallback={stub} /&gt;);

  const emailInput = screen
    .getByTestId(/login-email-field/i)
    .querySelector("input");
  userEvent.type(emailInput, "user@domain.com");
  const passwordInput = screen
    .getByTestId(/login-password-field/i)
    .querySelector("input");
  userEvent.type(passwordInput, "password");

  screen.getByTestId(/login-submit-button/i).click();

  expect(stub).toHaveBeenCalled();
});
</pre>

If you run the test suite, one test will now fail. But after the changes you can expect both these tests to pass if implemented correctly.

Now we start adding an email validation feature in the component. Open `~/kataUser/dummy-react-app/src/components/loginForm.jsx`{{open}} and look at line 21: `if (!email)`. The current email validation behaviour amounts to "is the email string truthy (aka. not empty)". 

To check if the string is an email address, we can add a simple regular expression. Change this if statement to: `if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))`.

NOTE: There are dedicated libraries for matching email addresses which should be used in production environments in order to avoid edge-cases, but this works as a proof of concept.

Now we should have basic email validation that works in most cases. Run test tests again. If implemented correctly then all tests should pass. 