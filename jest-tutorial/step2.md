Ok, so now when you understand the structure of our dummy project and have installed npm - it is time to dive into Jest. But first, short on React Testing library.
 
## React Testing Library

Projects that got created with `create-react-app` have `@testing-library/react` installed by default. It is a set of helpers that let you test React components similar to how one tests other JavaScript code, aka. without having to rely on their implementation details.

The React testing library builds on DOM - nodes, which means that the tests run similarly to how the user would interact with the elements on the page. In this way, it encourages better testing practices as it allows your tests to give you more confidence that your application will work when a real user uses it.

But with just a set of helpers, you don't get far. You still need a runner, and ideally a React assertion and mocking library. This is where Jest comes in handy.

## JavaScript testing framework

Jest is an open-source testing framework that is actively maintained by Facebook. It has gotten very popular in the React world just because Jest makes it very easy to test your code. Here six good reasons why:

1. It is easy to use since it is already included in the package when you create a new react project
2. It has its test runner and its assertion and mocking library (no need to install it additionally!)
3. It allows creating Snapshot tests for components (more on this in the next step)
4. It runs test in parallel which makes it has a high speed of test execution
5. It runs through node using a fake DOM implementation which makes the test less flaky since you don't have to start up a browser to run them
6. It has an active community (you can easily get help when needed)
 
## Install Jest

Jest is already included in `@testing-library` and pre-installed in all `create-react-app` projects. If you want to install jest in an existing project, you can read about it here:

* https://jestjs.io/docs/getting-started
* https://jestjs.io/docs/tutorial-react

## Give it a try

Let's try Jest by writing that simple test we talked about in the introduction. (If the dummy-react-app is still running from the terminal do a `ctrl`+`c` to close it before you proceed)
 
1. Create a file called `addNumbers.js` in `src/` and write the function below. Remember to export it, if you don't we can't write test for it. 

    <pre class="file" data-filename="/root/kataUser/dummy-react-app/src/addNumbers.js" data-target="replace">
        export function addNumbers(x, y, z){
            return (x + y + z);
        }
    </pre>

2. Create file for the test called `addNumbers.test.js` in `src/`and write the test in it:

    <pre class="file" data-filename= "/root/kataUser/dummy-react-app/src/addNumbers.test.js" data-target="replace">
        import {addNumbers} from './addNumbers';

        test('-3.0 plus 0.4 plus -0.1 is close to -2.7', () => {
            let result = addNumbers(-3.0, 0.4, -0.1);
            expect(result).toBeCloseTo(-2.7);
        })
    </pre>

3. Let's run the test by typing `npm test`{{execute}} in the terminal (press `q` to quit after).
4. If everything went well, you just wrote your first Jest test! Woohoo!
5. Check out this [Jest CheatSheet](https://devhints.io/jest) to get a quick overview of what more Jest can do for you.

Next - Let's understand the fuss about Snapshot Tests

