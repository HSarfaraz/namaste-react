## Lecture 1:

#### Running Notes

##### Extension used

1. better comment
2. Bracket pair colorization
3. Gitlens
4. ES7 + REACT
5. Prettier
6. vscode-icons
7. Pretify JSON
8. Tabnine AI
9. Tailwind css intellisense
10. Live server
11. HTML, CSS Support
12. ESLint

<b>Notes:</b>

- React is just piece of javascript code
- React is the core library and react dom is the browser version of react.
- ReactDOM says how we modify the dom
- React was created with the intention to write html, css inside javascript
- production cdn will be minimized files
- React is a global variable which comes from injected react files.
- React element is an object at the end of the day.
- render will modify the dom.

###### Homework Questions:

- <b>What is Emmet?</b>

  - Emmet is a toolkit for web developers that helps speed up HTML and CSS coding by using abbreviations. It allows you to write short snippets and expand them into full code.

- <b>Difference between a Library and Framework?</b>

  - A library provides reusable functions that developers can call, while a framework dictates the structure of your application and controls the flow. In essence, you call a library, but a framework calls your code.

- <b>What is CDN? Why do we use it?</b>

  - CDN stands for Content Delivery Network. It's a network of distributed servers that deliver web content to users based on their geographic location. CDNs enhance website performance by reducing latency and server load.

- <b>Why is React known as React?</b>

  - React is named for its ability to "react" to changes in a user interface. It efficiently updates and renders components when there is a change in the application state.

- <b>What is crossorigin in the script tag?</b>

  - The crossorigin attribute in the script tag is used for loading scripts from a different domain. It allows the browser to make cross-origin requests for the script while enforcing security policies.

- <b>Difference between React and ReactDOM?</b>

  - React is the library for building user interfaces, while ReactDOM is a package for web-specific DOM manipulations. React handles the logic, and ReactDOM takes care of rendering components in the browser.

- <b>Difference between react.development.js and react.production.js files via CDN?</b>

  - react.development.js is the development version with helpful warnings and debugging features, while react.production.js is the production version optimized for performance, without warnings and with smaller file size.

- <b>What is async and defer?</b>

  - async and defer are attributes used with the script tag. async loads and executes the script asynchronously, allowing the HTML parsing to continue. defer loads the script after HTML parsing, but executes it in order, ensuring scripts are executed in the order they appear in the document.

## Lecture 2:

### Running Notes

- npm : it manages packages with us.
- Setup using: npm init
- npm install -D parcel, here -D means, install the dependency on the development env not on production. or we can do --save-dev
- package-lock.json will keep exact version as in production, we are using
- Package-lock.json has sufficient information, which we can recreate node modules, so we are not pushing node modules to the git. It will keep the track of all versions in node modules.
- we will be using packages instead of CDN, as if new version came, then we need to replace new cdn link.
- To install react in system:
  - npm install react
  - here we will remove cdn link
- To install react dom:
  - npm install react-dom
- npx : execute using npm
- To execute the parcel
  - npx parcel index.html --> it will create the build and hosted on the server.
  - Here parcel has given server to us
  - need to install npm i parcel-bundler
  - parcel will keep track of all the file which we updated, which is called hot reloading
- dist folder: It will keep the minified files for us
- parcel is a bundler which minify the files

- Few points related to parcel

  - HMR - Hot Module Reloading
  - File Watcher algorithm - C++
  - Bundling
  - Minify
  - Cleaning out Code
  - Dev and Production build
  - Super fast build algorithm
  - Image Optimization
  - Caching while development
  - Compression
  - Compatible with older version of browser (Add polyfills)
  - port Number
  - Consistent Hashing Algorithm

- browserlist is the npm package responsible for making compatible with older browsers.
-
- Homework questions:

1. **What is `NPM`?**

   - NPM (Node Package Manager) is a package manager for Node.js packages. It helps manage project dependencies and facilitates the installation of third-party libraries.

2. **What is `Parcel/Webpack`? Why do we need it?**

   - Parcel and Webpack are module bundlers. They take your code and assets, such as styles and images, and bundle them into optimized files for the web. This simplifies deployment and improves performance.

3. **What is `.parcel-cache`?**

   - The `.parcel-cache` directory is used by Parcel to store cached data for faster rebuilds. It helps speed up the build process by reusing previously processed information.

4. **What is `npx`?**

   - `npx` is a package runner tool that comes with NPM. It allows you to execute packages directly from the NPM registry, avoiding the need to install them globally.

5. **Difference between `dependencies` vs `devDependencies`**

   - `dependencies` are packages required for the application to run, while `devDependencies` are packages needed during development, such as testing libraries or build tools.

6. **What is Tree Shaking?**

   - Tree shaking is a technique used by bundlers to eliminate dead code (unused modules) from the final bundle, reducing its size and improving performance.

7. **What is Hot Module Replacement?**

   - Hot Module Replacement (HMR) is a feature in module bundlers like Webpack that allows developers to update modules in real-time while the application is running, without a full page reload.

8. **Favorite 5 superpowers of Parcel and describe 3 of them:**

   - Parcel's superpowers include zero-config setup, automatic asset optimization, and blazing-fast performance. Zero-config simplifies the build process, automatic optimization improves asset delivery, and speed ensures quick development.

9. **What is `.gitignore`? What should we add and not add into it?**

   - `.gitignore` specifies files and directories that Git should ignore. It should include files like `node_modules` and build artifacts, but not essential configuration files or the `.gitignore` itself.

10. **Difference between `package.json` and `package-lock.json`**

    - `package.json` contains project metadata and dependencies, while `package-lock.json` ensures consistent dependency versions by providing a snapshot of the dependency tree.

11. **Why should I not modify `package-lock.json`?**

    - `package-lock.json` is automatically generated and updated by NPM. Modifying it directly can lead to inconsistencies and conflicts in the dependency tree.

12. **What is `node_modules`? Is it a good idea to push that on git?**

    - `node_modules` contains project dependencies. It's not recommended to push it to Git due to its large size; instead, dependencies should be listed in `package.json`, and others can install them using `npm install`.

13. **What is the `dist` folder?**

    - The `dist` (distribution) folder contains the final optimized and bundled code that is ready for deployment. It typically includes the output of the build process.

14. **What is `browserlist`?**

    - `browserlist` is a configuration file that defines which browsers your project supports. It's used by tools like Babel and Autoprefixer to generate code compatible with specified browser versions.

15. **Different bundlers: Vite, Webpack, Parcel**

    - Vite, Webpack, and Parcel are all module bundlers, but they differ in configuration, performance, and features. Vite is known for its speed and simplicity, Webpack is highly configurable and widely used, while Parcel offers a zero-config setup.

16. **Difference in `package.json`: ^ - caret and ~ - tilde**

    - In `package.json`, ^ (caret) allows minor version updates, while ~ (tilde) allows only patch updates. For example, ^1.2.3 allows updates up to version 1.9.9, while ~1.2.3 allows only updates like 1.2.x.

17. **How to write Script types in HTML (MDN Docs)**
    - According to MDN Docs, the `<script>` tag's `type` attribute is not required in HTML5. If included, it should be set to `"text/javascript"`, but it's often omitted as browsers assume JavaScript by default.

## Lecture 3 & 4:

- babel uses browserlist which convert the code ro compatible with older version
- git init will create .gitignore file and initialise the folder to git.
- Tree shaking means removing unwanted code.
- npx is equal to npm run, it is meant to run the execution without installing from outside.

npm install babel-plugin-transform-remove-console --save-dev

Give keys, passing as a prop.

- Babel converts the jsx into javascript code.
- JSX --> Converts to React.createElement --> convert to Object --> convert to HTML Element
- Functional component is a javascript function in React.js, that return some piece of react element.
- functional component will be rendered like root.render(<HeadingComponent />) where is react element will render like root.render(heading)
- In jsx, we can write any js code inside {}
-
- Home work questions:
- Why keys are used in react
- how to create image tags in jsx?

<div id="articleHtml" style="font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif"><h1>Topics</h1>

<ul>
	<li>JSX</li>
	<li>React.createElement vs JSX</li>
	<li>Benefits of JSX</li>
	<li>Behind the Scenes of JSX</li>
	<li>Babel &amp; parcel role in JSX</li>
	<li>Components</li>
	<li>Functional Components
	<ul>
		<li>Composing Components</li>
	</ul>
	</li>
</ul>

<h1>Assignment</h1>

<ul>
	<li>What is JSX?</li>
	<li>Superpowers of JSX</li>
	<li>Role of <code>type</code> attribute in script tag? What options can I use there?</li>
	<li><code>{TitleComponent}</code> vs <code>{&lt;TitleComponent/&gt;}</code> vs <code>{&lt;TitleComponent&gt;&lt;/TitleComponent&gt;}</code> in JSX</li>
</ul>

<p>Coding Assignment:</p>

<ul>
	<li>Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
	<ul>
		<li>Create the same element using JSX</li>
		<li>Create a functional component of the same with JSX</li>
		<li>Pass attributes into the tag in JSX</li>
		<li>Composition of Component(Add a component inside another)</li>
		<li><code>{TitleComponent}</code> vs <code>{&lt;TitleComponent/&gt;}</code> vs <code>{&lt;TitleComponent&gt;&lt;/TitleComponent&gt;}</code> in JSX</li>
	</ul>
	</li>
	<li>Create a Header Component from scratch using Functional Components with JSX
	<ul>
		<li>Add a Logo on left</li>
		<li>Add a search bar in middle</li>
		<li>Add User icon on right</li>
		<li>Add CSS to make it look nice</li>
	</ul>
	</li>
</ul>

<h1>References</h1>

<ul>
	<li>Babel: <a href="https://babeljs.io/" target="_blank">https://babeljs.io/</a></li>
	<li>Attribute Type: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type" target="_blank">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type</a></li>
	<li>JS Modules: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules</a></li>
	<li>Babel Playground: <a href="https://babeljs.io/repl#" target="_blank">https://babeljs.io/repl#</a></li>
	<li>React without JSX: <a href="https://reactjs.org/docs/react-without-jsx.html" target="_blank">https://reactjs.org/docs/react-without-jsx.html</a></li>
</ul>
</div>

## Lecture 5:

- in default import we dont keep {} curly paranthesis
- When imported using {}, it is called named import
- we can rename the default import name
- local variables are prefered in react, but we need to use useState hook

## Lecture 6:

- in default import we dont keep {} curly paranthesis
- When imported using {}, it is called named import
- we can rename the default import name
- local variables are prefered in react, but we need to use useState hook

- cors chrome extenstion is used to handle the issues related to cors. Ans enable it.

## Lecture 7 & 8:

- in default import we dont keep {} curly paranthesis
- When imported using {}, it is called named import
- we can rename the default import name
- local variables are prefered in react, but we need to use useState hook

- cors chrome extenstion is used to handle the issues related to cors. Ans enable it.
- Lecture 7 is all about routers: npm i react-router-dom
- We will be creating header menu components like, about us, home, contact us etc.

https://playcode.io/1750284

- Outlet is a component which acts like a container.
- When I click santosh dhaba, I am getting the below url
- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=731585&catalog_qa=undefined&submitAction=ENTER

- In react, we render the component then we update it.

## Lecture 9:

- in default import we dont keep {} curly paranthesis
- When imported using {}, it is called named import
- we can rename the default import name
- local variables are prefered in react, but we need to use useState hook

- cors chrome extenstion is used to handle the issues related to cors. Ans enable it.
- Lecture 7 is all about routers: npm i react-router-dom
- We will be creating header menu components like, about us, home, contact us etc.

https://playcode.io/1750284

- Outlet is a component which acts like a container.
- When I click santosh dhaba, I am getting the below url
- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=731585&catalog_qa=undefined&submitAction=ENTER

- In react, we render the component then we update it.
- custom hooks doesn't return the jsx but return the js value.

Code splitting is also called as

- chunking
- Dynamic bundling
- lazy loading
- on demand loading
- dynamic import

lecture 9 is all about lazy and suspense
lecture 10 is all about css, 1hr goes in basics of css then tailwind css starts.

## Lecture 10: Tailwindcss

### Installation steps for tailwind

npm install -D tailwindcss postcss
npx tailwindcss init

postcss is used to transform the css with javascript
when we use classes in tailwind, it converts to css.

.postcss is used for compilation purpose.

- Extension: Tailwind CSS IntelliSense by Tailwind labs
  Pros of tailwindcss
- easy to debug
- much customisable
- lot more control
- newer way of writing css

cons of tailwindcss:

- too much of css
- initial learning curve

## Lecture 11: Redux

### Installation steps for Redux

redux core library:
npm i @reduxjs/toolkit

bridge betn react and redux:
npm i react-redux

## Lecture 12: Testing

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

![alt landingPage](screenshots-swiggy/1-landing-page.png)

![alt detailsPage](screenshots-swiggy/2-details.png)
