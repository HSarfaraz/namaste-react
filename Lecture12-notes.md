unit testing is test small part of app.

### Installation steps for React testing library

1. Install React Testing Library
2. Install Jest
3. Configure Jest
4. Installed jest-environment-jsdom
5. Create my first test --> create a folder '**test**'
6. Configure babel
7. Wrote expect sum test
8. gitignore coverage report

### React testing library:

npm i --save-dev @testing-library/react

### install jest

npm i -D jest

### Configure jext

npx jest --init
It will help to setup the jest initial setup

N
jsdom
y
babel
y

### Install jest env dom

npm i -D jest-environment-jsdom

### Configure babel

npm install --save-dev babel-jest @babel/core @babel/preset-env

configure .babelrc

### Notes:

in testing, render function will create a small container for you in a browser

make a code compatible with react:
@babel/preset-react

in jest.config.js:
take all my png image from dummy image
moduleNameMapper:{
"\\.png": "../mocks/images"
}

npm install --save-dev @babel/preset-react

npm run watch-test, the test case will keep running

to install testing library jest dom
npm install --save-dev @testing-library/jest-dom
