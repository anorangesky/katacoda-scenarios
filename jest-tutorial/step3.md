# Snapshot testing
Snapshot tests work a bit differently than classic assertion-based tests. Instead of having us defining what the expected behavior of a test should be, Jest does it for us. Or kinda. The first time a Snapshot test runs, Jest stores the Dom-tree returning from the test in a file and uses it as the assertion value for future test's runs.
 
## When to use Snapshot tests
Since it is so fast and easy to use Snapshot tests, it is a great asset to use when monitoring changes in the UI and ensure that unwanted changes aren’t unwillingly introduced. The Snapshot file is effortless to update and Jest prints a diff each time a test doesn't pass which makes it great for testing UI components (and let's be honest, they tend to change in style a bit too often)

## The component to test
In the src folder, we have created another folder for you that is called `components`. In it, there is a file called `loginForm.jsx`. `./root/kataUser/dummy-react-app/src/components/LoginForm/loginForm.jsx`{{open}}

The code renders the react components used to create the Login form and is called from `app.jsx`. If you want to view the login form again:
`npm start`{{execute}}
[Open your localhost](https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/)

## Write the Snapshot test
In the `component` folder create a file called `loginForm.test.jsx` `cd cd kataUser/dummy-react-app/src/components/`{{execute}} `touch loginForm.test.jsx`{{execute}} . In it, you currently see some imports. Snapshot tests use a `renderer` to generate a value for the react tree (instead of a UI component like a normal assertion-test would do), hence we need to install it:
`npm install react-test-renderer`{{execute}}

Let’s write our first snapshot test that checks that the login form renders correctly when the user is not logged in: 
 
<pre class="file"  data-filename= "loginForm.test.jsx" data-target="insert"  data-marker="#TODO-insert-1">
it("loginform renders correctly when the user is not logged in", () => {
  const tree = renderer
    .create(<LoginForm/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
 });
</pre>

## Run the test
To run the test type `npm test`{{execute}}. 
Hopefully, everything went smooth and your console will say `PASS  src/components/loginForm.test.jsx  › 1 snapshot written. `

Open the snapshot folder to look at your test: `./root/kataUser/dummy-react-app/src/components/__snapshots__/loginForm.test.jsx.snap`{{open}}

As you can see the snap-file looks like the DOM tree of our login component. 

## Update the component
Now, let’s update the component and watch our snapshot test fail! There are two main reasons for a test to fail:
   - There is an unexpected change in the component that needs to be addressed (a bug!)
   - The snapshot file is outdated and needs to be updated

In assets/dummy-react-app/src/components/loginForm.jsx `./root/kataUser/dummy-react-app/src/components/loginForm.jsx`{{open}} change the title of our Login form from `Login form` to just `Login`.

Do a `npm test`{{execute}} again. Now our snapshot test will fail. As you can see Jest gives us a diff-log so we can tell exactly what difference between our code and the snap-test. ![diff log](./assets/diff.png)

## Update the test
We think the extra “form” in the title is unnecessary, so let’s update the snapshot to match our current code instead. At the end of the terminal message, you see some ways to move forward. ![watch usage](./assets/diffUsage.png) As you can see, updating the snapshot test is as simple as `u`{{execute}}. And BOOOM - the test passed! 

You can also directly update your tests after updating your components by typing `jest --updateSnapshot`{{execute}} in the terminal. 

## TODO:

5. Hooks
   - before / after
   - setup/ cleanup
 





