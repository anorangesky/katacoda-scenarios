Well done - Let's get started!

# Dummy project
We have created a dummy project that you will use throughout this tutorial. It is a React project describing a basic log-in flow, and you will be responsible for writing tests for it. The file structure for the project is as following:
- `Dockerfile`  You can ignore this file, it contains Docker specific code
- `README.md`   File describing the dummy project
- `docker-compose.yml`  You can ignore this file too, it contains Docker specific code
- `package.json`    A JSON file that hold metadata relevant to the dummy project, such as dependencies, script, version, etc
- `public/`     A folder that the web server deal with in the end. You can ignore this for now
- `src/`    This folder contains the files that we will work with in this tutorial
    - `App.css` Contains styling 
    - `App.jsx` Contains our main React component, imports the LoginForm displayed in it
    - `App.test.jsx` File where tests for App.js will be (the file is empty in this state)
    - `_mocks_/` A folder containing mock files (more on this in step 5)
    - `components/` A folder to store the different react components. This project only contains the `loginForm` component and a file where its test should be stored (`loginform.test.jsx`)
    - `index.js` This file access the root element in our DOM. It is used to render the React application (`App.jsx`) using the `render` method

# Setup
The first thing we need to do is install the necessary packages needed.
1. By default you are in the 'root' directory. To redirect to the dummy project, type:
 - `cd ~/kataUser/dummy-react-app/src/`{{execute}}
2. To be able to run the react project we need to install npm and its necessary packages.
 - `npm install`{{execute}}
3. This may take a while... in the meantime, take a look at this easter egg: ![easteregg](./assets/easterEgg.png) And when you have looked at it check out the file structure of the react project we have created for you. 
4. When the npm installation is done, let's see how it looks like in production! To see it on your localhost type `npm start`{{execute}} and the website will be hosted on port 3000.
 - [Click here to open your localhost](https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/)

Let's continue to dive deeper into the Jest testing framework in the next step!






