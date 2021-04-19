You're doing great! The last thing we will do in this tutorial is to learn a bit more about code coverage. 
# Code Coverage
Code coverage is a measure for how much of your written code that is covered by automated tests. The reason is to help analyzing the state, safe zones and flaky areas, of your project code. To check the Code Coverage of our written Jest-test sofar, simply add the `--coverage` flag to our test script in the `package.json` file:

  <pre class="file"  data-filename= "package.json" data-target="insert">
    "scripts": {
        "test": "jest --coverage"
    }
   </pre>


It may seem like the Wizard of Oz, but the codecoverage flag just simply checks the percentage of statements of your code body that has been executed throuh the test run and how many statements that have not. 
 