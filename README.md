# Codename Project-Catnip-Tree (no final name for app yet)

A small and easy-to-use messageboard aimed at children/pre-school classes to post, what they interesting thing they have learned that day.

**Work-in-progress alpha version**

Very very early in development. Still lots of placeholder and temporary solutions.

## Motivation

A friend of mine who is a pre-school teacher had the idea to use a very simple messageboard in class that can run their own server (Raspberry Pi preferred).

So i started a small learning-project with the following goals:

1.  Build my first Fullstack App utilizing the MERN-Stack (MongoDB, Express, React/Redux, NodeJS)
2.  Deepen my knowledge of React and try out Redux.
3.  Learn how to deploy a Fullstack WebApp
4.  Learn about authentification and protected routes
5.  Create a simple to use UI/UX for young children

## Live Version

Live version online at:

```
https://project-catnip-tree.herokuapp.com/
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1.  Clone the repo

2.  Install dependencies

```
npm install
npm run client-install
```

3.  Setup environment variables

```
PORT = {specify express server port on your pc}
MONGO_URI = {URI to local or remote MongoDB database}
GOOGLE_CLIENT_ID = {specify google client id for the google oauth 2.0 flow}
GOOGLE_CLIENT_SECRET = {specify google client secret for the google oauth 2.0 flow}
COOKIE_KEY = {specify a cookie key}
```

### Development environment

In root folder run:

```
npm run dev
```

## Built With

- [React](https://github.com/facebook/react) - The web framework used
- [Redux](https://redux.js.org/) - State management for react
- [Semantic UI](https://react.semantic-ui.com/) - CSS Framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [NodeJS](https://nodejs.org/) - Backend

## Author

- **Patrick Schülke** - [PatrickS83](https://github.com/PatrickS83)

## License

This project is licensed under the MIT License
