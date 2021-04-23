# TDD - Test driven development

Before we implement input validation for the email field in our code, we can first change our test to match how the component should function. Firstly, change the name name of the test:

* from: `submit with invalid email credentials should invoke callback` 
* to: `submit with invalid email credentials should not invoke callback`

Then, in the same test, change the expect method call:

* from: `expect(stub).toHaveBeenCalled()`
* to: `expect(stub).not.toHaveBeenCalled()`

if you think "Wait, this test will fail now", you are correct. Will will first change the way the test works before changing the component itself to match our test. 

We will also add a test to match how the component should function with validation on a correct email address. Add this test to `src/components/loginForm.test.jsx`:

<pre class="file"  data-filename="/root/kataUser/dummy-react-app/src/components/loginForm.test.jsx" data-target="append">
test("submit with valid credentials should invoke callback", () => {
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

Now we start adding an email validation feature in the component. Open `src/components/loginForm.jsx` and look at line 21: `if (!email)`. The current email validation behaviour amounts to "is the email string truthy (aka. not empty)". 

To check if the string is an email address, we can add a simple regular expression. Change this if-statement to: `if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))`.

NOTE: There are dedicated libraries for matching email addresses which should be used in production environments in order to avoid edge-cases, but this works as a proof of concept.

Now we should have basic email validation that works in most cases. Run test tests again. If implemented correctly then all tests should pass. 

>>Why is test-driven development useful in a professional environment? <<
( ) "You will write more testable code, which generally is a sign of code quality"
( ) "It provides you with clear development goals, which keeps you focused on the task"
( ) "It ensures there is always documentation of what the code does and if it works"
(*) "All of the above"