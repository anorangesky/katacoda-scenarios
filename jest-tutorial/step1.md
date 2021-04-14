 
Well done - Let’s get started!
# Setup React project with Jest
We have created a dummy project that you will use throughout this tutorial. It is covering a basic log-in flow, and you will be responsible for writing tests for it. The first thing we need to do is install the necessary packages needed.
1. By default you are in the ‘root’ directory. Redirect to a safer space by directing to your own user place. Eg:
`mkdir user`{{execute}}
`cd user/`{{execute}}
`mkdir yourName`{{execute}}
`cd yourName/`{{execute}}
2. Your directory is currently empty. We have created a dummy project for you to work with in this tutorial. It is a react project describing a login flow. To access it type:
`git clone https://github.com/Adamih/jest-tutorial-project.git`{{execute}} from your own directory
3. If the cloning was successful, you will see the file structure looking something like this: ![file structure](./assets/fileStructure.png)
4. To be able to run the project we need to install npm and it’s necessary packages.`cd jest-tutorial-project/`{{execute}}
`npm install`{{execute}}
5. This may take a while.. in the meantime, let's check out the folder structure!
   1. App.js `./src/app.js`{{open}}
   2. Index.js `.src/index.js`{{open}}
6. When the installation is done, let's see how the login form looks like. To see it on your local host type `npm start`{{execute}} and the website will be hosted on the port 3000
7. To open port 3000 in Katacoda: ![open port](./assets/openPort.png)
  1.  click on the + next to 'terminal.
  2. 'select port to view host 1'
  3. Type 3000
  4. Voilà!
8. Now, let's explore the dummy project.
   1. #TODO Explain the files containing react components. React components are testable with component tests and this is where Jest comes in. `cd src/components/LoginForm/`{{execute}}
   `ls`{{execute}}
       - Talk about the different files
 
Let's continue to deep into Jest testing framework
 






