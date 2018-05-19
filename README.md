# Project NewYorkTimes Feeds

Fetch the feed data from NYT by query

## Instalation

To get prerequisite packages:

```
yarn install
```
## Build for Production

```
yarn run build
```

## Running

On development mode on port #8080

```
yarn run dev
```

On production mode on port #2018

```
yarn run start
```

## Running the tests before dploying on production

To run thru the test cases via #jest

```
yarn run jest
```

## Built With

I already knew that this app is just a simple app in term of functionality, it may not need a bunch of frameworks, 
But for scalability, mantainability and applying the principles of modern web-app and it best practices.
I decided to use the following technologies for Project NewYorkTimes Feeds.
Each framework or lib plays their important part and tightly connected to each other.

* [Yarn](https://yarnpkg.com/lang/en/) 
- Faster than NPM!!
* [Node](https://nodejs.org/en/) 
- The famous Javascript run-time that was built on top of Google V8 Engine, for microservices deployment - This technology is the core of the app
* [React](https://reactjs.org/)
- React lib is in charge of the View, emphasis on components ( help to modulize the app into small component )
- One-way data flow - data stream from parent to child components - easier to manage and debug 
- Virtual DOM - allows calculation the different between each changes and make make minimal changes into the HTML document. 
* [Redux](https://redux.js.org/)
- A React partner
- Redux helps manage the global state of the app, so the React components can communicate with each other more easier
- Redux appreciates the use of Immutability data object, provides one-way data flow - that's why React-redux can work well together
* [Webpack](https://webpack.js.org/)
- A module bundler
- A task runner
* [Babel](https://babeljs.io/) 
- Used to transpile ES6 to Vanilla JS for browser to understand
- Leverage the modern ECMA Script features
* [Jest](https://facebook.github.io/jest/) 
- Used to test JS and React Components By FaceBook
- In conjunction with Ezyme as assertion framework


## Author

* **Nguyen Le** - https://github.com/TheBlackJet

