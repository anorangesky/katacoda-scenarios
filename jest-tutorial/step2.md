Ok, so now when you understand react components, the structure of our dummy project, and have installed npm - it is time to dive into Jest.

## But first - React Testing Library
Projects that got created with `Create React App` have by default support for React Testing Library. It is a set of helpers that let you test React components similar to how one tests other JavaScript code, aka. without having to rely on their implementation details.

The React testing library builds on DOM - nodes, which means that the tests run similarly to how the user would interact with the elements on the page. In this way, it encourages better testing practices as it allows your tests to give you more confidence that your application will work when a real user uses it.

## Arrange, Act, Assert
Examples of helpers in the typical test flow:
  1. Arrange: The `render` helper arranges a React element into the DOM.
      - `render(<MyComponent />) `
  2. Act: The `fireEvent` helper fires events to simulate user actions.
      - `fireEvent.click(screen.getByText('Load Greeting'))`
  3. Assert: The `expect` helper evaluates the results from the act and what the expected behavior
      - `expect(screen.getByRole('button')).not.toHaveAttribute('disabled')`

But with just a set of helpers, you don't get far. You still need a runner, and ideally a React assertion and mocking library. This is where Jest comes in handy.

## JavaScript testing framework
Jest is an open-source testing framework that is actively maintained by Facebook. It has gotten very popular in the React world just because Jest makes it very easy to test your code. Here are reasons why:
- It is easy to use since it is already included in the package when you create a new react project
- It has its test runner and its assertion and mocking library (no need to install it additionally!)
- It allows creating Snapshot tests for components (more on this in the next step)
- It runs test in parallel which makes it has a high speed of test execution
- It has an active community (you can easily get help when needed)

## Install Jest
To install Jest type `npm install --save-dev jest`{{execute}} in the react project folder in the terminal. (if you still have your localhost running close it with `^C`{{execute}} before)
 
Then add the following section to your `package.json`{{open}} file:

<pre class="file"  data-filename= "package.json" data-target="insert" data-marker="#TODO-insert">
      "scripts": {
           "test": "jest"
       }
</pre>
 
 
## Give it a try
Let's try Jest by writing that simple test we talked about in the introduction.

1. Create a file called addNumbers.js and open it:
   - `touch addNumbers.js`{{execute}}
   -  `addNumbers.js`{{open}}
3. Write the function for addNumbers:
   <pre class="file"  data-filename= "addNumbers.js" data-target="replace">
       function addNumbers(x, y, z){
           return (x + y + z);
       }
       module.exports = addNumbers;
   </pre>
4. Create and open a file for the test called addNumbers.test.js:
   - `touch addNumbers.test.js`{{execute}}
   -  `addNumbers.test.js`{{open}}
5. Open the test file and write the test in it:
   <pre class="file"  data-filename= "addNumbers.test.js" data-target="replace">
       const addNumbers = require('./addNumbers');
 
       test('-3.0 plus 0.4 plus -0.1 is close to -2.7', () => {
           let result = addNumbers(-3.0, 0.4, -0.1);
           expect(result).toBeCloseTo(-2.7);
       })
   </pre>
6. Let's run the test by typing `npm test`{{execute}} in the terminal
7. If everything went well, you just wrote your first Jest test! Woohoo!
 
Next - Let's understand the fuss about Snapshot Tests

