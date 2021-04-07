## What will I learn after finishing this tutorial?
- You will learn how to set up a test-environment for React-Redux projects using Jest. Jest is a testing library for JavaScript code. With it, you can create, run, and structure tests. It will be installed using npm. 
- By following this tutorial you will learn how to write unit and integration tests and integrate them with a GitHub repository. As a bonus, you will get a better understanding of why it is important and relevant to have good test coverage.

## Do I have to have some basic understanding of JavaScript to follow this tutorial?
- Yes. 
- We expect you to also know how the React and Redux frameworks work, but the tutorial is possible to follow even if you don't. 

## What is "Jest"?
- “Jest is a  testing library for JavaScript code. With it, you can create, run, and structure tests.”
- “Aims to be zero config”, “snapshots”, “isolation of tests to maximize performance”, “entire toolkit in one place”, etc. 

## How do I know what to test?
- “Whenever you write new functions - test it”
- The most fundamental parts to cover in your code are:
  - UI elements
  - The loading of all pages of the app
  - The different functions and modules(small as big) 

## What is a typical test-flow?
1. Choose a function to test (test as small pieces of code as possible in one go)
2. Give it an input
3. Define what to expect as the output
4. Evaluate the results 
