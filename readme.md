# React Boileplate App
This is a boilerplate to help you set up and get your project running as quickly as possible.

This boileplate includes:
 - React, React-DOM, React Router & React Addons Test Utils, all compatible with **ver.15.2.1**
 - Express for the local server
 - Webpack with all the modules set up to bundle up *.jsx and *scss files into a single bundle.js file
 - Babel
 - Karma, Mocha & Expect for tests

## Installation
Simply clone the repo & run:

    npm install

## Starting to develop
If you open up 2 terminal tabs, one for the server to run, the other one for the webpack watcher and after you are ready to do some magic.

To run the server,type:

    node server.js

Your server will be on *http://localhost:3000*

To run webpack, type:

    webpack -w

## Testing
Don't forget to write tests!

To run the test suite, simply type in the terminal:

    npm test

-----

That's all folks!