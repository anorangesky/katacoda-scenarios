# Short on testing
Before we start with the real deal it is important to have some fundamental understanding of tests in general. To be able to open up this Jest-crash course you must pass the quiz at the end of this page. Good luck, and happy learning! 

## What is a meaningful test?
A meaningful test is one that generates results that is repeatable and unlikely to be caused by chance. The test should work as documentation for your project. Reading your test will tell what is expected behavior and what is not. Reading your test will tell what the different features do and how they are expected to be used.
>> Four checks to know if your test is meaningful:
1. It runs fast. (If the test runs slow there is a greater risk that you won’t run them and then it is no need to write the test in the first place)
2. The test is stable. (If the test is flaky will tend to not trust the tests)
3. The test is easy to read. (If only you can understand what the test does, the risk is greater that no one else can fix it if it breaks and delete it instead)
4. The test(s) catches bugs. (Bugs rarely appear in isolated components. You need to combine multiple tests to catch real-life issues. If you only have isolated unit tests it might seem like your code is working because all components work individually, but together they may crash)

## What are some test strategies?
There are different types of automated tests to write. The three most common are shown in the testing pyramid. 
![test pyramid](jest-tutorial/img/testPyramid.png)
A Test Strategy is a plan for defining an approach to how, when, and by whom, these different tests should be implemented. There are multiple test strategies available that fit differently well to different projects. Like TDD, STEP, and CTP. What is typical for the majority of strategies is that the automated tests follow a structure of:
1. Setup initial state
2. Dispatch an action
3. Expect data to change

# Quiz
>>Q1: You have written a test for a function that takes three numbers and returns the addition of them. Your want test that the function works for both floats and integers as well as positive and negative values. Yout test looks like this: 
```
    test('the name of your test', () => {
        let result = addNumbers(-3, 0.4, -0.1);
        expect(result).toBeCloseTo(-2.7);
    })
```
What would be a good name for your test?<<
() "test addition"
(*) “-3.0 plus 0.4 plus -0.1 is close to -2.7”
() “adding positive and negative floating points works”

>>Q2: What is the correct flow for a general unit test? (Answer as the corresponding letter order, eg. "a, b, c, d")<<
=== d, b, a, c

- A. Define what to expect as the output
- B. Set up the initial state
- C. Evaluate the results
- D. Select a UI critical function

>>Q3: Which of the following defines a good test? (mark all that applies)<<
[*] It is easy to read no matter technical background
[] Each test has independent blobs of code instead of shared test utilities
[*] Runs fast 
[] Runs only in isolation
[*] Test is clean 





