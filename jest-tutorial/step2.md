Ok, so now when you understand react components, the structure of our dummy project, and have installed npm - it is time to dive into Jest.

## But first - React Testing Library
Projects that got created with `Create React App` have by default support for React Testing Library. It is a set of helpers that let you test React components similar to how one test other JavaScript code, aka. without having to rely on their implementation details. Helpers such as:
    - Finding form elements, links and buttons from their text or lable (or using the `data-testid` to find elemts whose label or context doesn't make sense)

The testing library builds on the DOM - nodes, which means that the tests runs in a similar fashion as how the user would interact with the elements on the page. In this way, it encourage better testing practices as it allows your tests to give you more confidence that your application will work when a real user uses it. 

### Arrange, Act, Assert
Examples of helpers in the typical test flow:
    1. Arrange: The `render` helper arranges a React element into the DOM. 
        - `render(<MyComponent />) `
    2. Act: The `fireEvent` helper fires events to simulate user actions.
        - `fireEvent.click(screen.getByText('Load Greeting'))`
    3. Assert: The `expect` helper evaluates the results from the act and what the expected behaviour 
        - `expect(screen.getByRole('button')).not.toHaveAttribute('disabled')`

But with just a set of helpers you don't get far. You still need a runner, and ideally a React assrtion and mocking library. This is where Jest comes handy. 

## JavaScript testing framework
Jest is an open-source testing framework that is actively maintained by Facebook. It has gotten very popular in the React world just because Jest makes it very easy to test your code. Here are reasons why:
- It is easy to use since it is already included in the package when you create a new react project
- It has its own test runner and its own assertion and mocking library (no need to install it additionally!)
- It allows creating Snapshot tests for components (more on this in the next step)
- It runs test in parallel which makes it has a high speed of test execution
- It has an active community (you can easily get help when needed)

## React Testing Library




## Install Jest

## Give it a try
