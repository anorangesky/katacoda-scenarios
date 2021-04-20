# Integration test will full mocking

The final test we write will test the full login path:

1. Loading the App component, you will be greeted by the login screen. 
2. Enter your information and submit. Send a login request to `localhost:5000/authenticate`.
3. Check that the correct information was sent and save the response data as the current user.
4. Check that you are now greeted by `hello [username]` instead of the login form. 

Since we do not have a backend (and do not want to use the backend in our test anyway) we will mock the response from the server. How do we do that when we do not have access to the underlying app code in our test?

Using the `/__mocks__/` folder, jest will replace any imported node package in our code with the file in the folder with the same name. That means if we create the file `/__mocks__/axios.js` the App component will import our fake axios when inside a test, which can return a fake response from a mocked function. We can also spy on that function to see if it has been called and what it has been called with. 

Open `src/__mocks__/axios.js` and add:

<pre class="file" data-filename= "/kataUser/dummy-react-app/src/__mocks__/axios.js" data-target="replace">
export default {
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
</pre>

now we create the test. Open `src/App.test.jsx` and add this test:

<pre class="file" data-filename= "/root/kataUser/dummy-react-app/src/App.test.jsx" data-target="append">
test("App login test", async () => {
  const authRequest = {
    email: "admin@domain.com",
    password: "password",
  };

  const userResponse = {
    id: 0,
    username: "admin",
    email: "admin@domain.com",
  };

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: userResponse,
    })
  );

  render(&lt;App /&gt;);

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
  
  await waitFor(async () =>
    expect(screen.getByTestId("greeting").innerHTML).toBe(
      `hello ${userResponse.username}!`
    )
  );
});
</pre>

If you run this test `npm test`{{execute}} the test will hopefully pass. We have now made sure that the component sends the input data correctly and changes correctly based on the response of our fake backend. Fantastic!

Since we have our mocked axios that returns anything we want, the app will not have any `NOT FOUND` or `CORS` errors, even though we do not have a backend. Network calls to external resources and APIs are usually one of the slowest parts of an app, so this will keep our tests fast as well, which is a great bonus. 