You're doing great! The last thing we will do in this tutorial is to learn a bit more about code coverage.
# Code Coverage
Code coverage is a measure of how much of your written code is covered by automated tests. The reason is to help to analyze the state, safe zones, and flaky areas, of your project code. To check the Code Coverage of our written Jest test so far, simply
1. add the `--coverage` flag to our test script in the `package.json` file:
   <pre class="file"  data-filename= "package.json" data-target="insert">
       "scripts": {
           "test": "jest --coverage"
       }
   </pre>
2. then execute `npm run test`{{execute}}. Now you will see the code coverage in the terminal.
 
It may seem like the Wizard of Oz, but the code coverage flag just simply checks the percentage of statements of your code body that have been executed through the test run and how many statements have not.

You will probably encounter a lot of discussions about "what is a good test coverage ratio?" and like the agile world, it all depends on who you are and what you are building. Even though Google says 70-80% is good, you should always aim for 100%. Yes, we believe that everything is testable. If you follow TDD you will automatically reach a higher percentage. The takeaway we want you to remember when you get into this discussion is however quite simple: `“Each Sprint, the coverage should not go down.”`.

# That's it!
Now you can write Jest-test for your React projects.
Happy testing, and remember to update your resume with your new smoking hot skill ;)
