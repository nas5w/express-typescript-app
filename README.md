# Express Typescript App

This application accompanies the blog post, [Your First Node Express App with Typescript](https://typeofnan.dev/your-first-node-express-app-with-typescript).

## Setup

To set up the application, first clone the repo. Then, install the dependencies by running yarn:

```bash
yarn
```

## Starting the Server

To start the server, run:

```bash
yarn run start
```

The server should now be running on port 3000.

## Making Requests

The server only has a few endpoints:

- `GET /`&mdash;Returns "hello world"
- `POST /users`&mdash;Adds a username/password pair to an in-memory user store
- `POST /login`&mdash;Validates a username/password agains the in-memory user store

The GET endpoint can be viewed simply by navigating to `http://localhost:3000`. You should see "Hello world".

You can use curl to send requests to the two POST endpoints. Here are some examples:

### Register user

To create a new user with username `foo` and password `bar`:

```bash
curl -d "username=foo&password=bar" -X POST http://localhost:3000/users
# User created
```

To see the response of a malformed user registration request:

```bash
curl -d "username=foo&password= " -X POST http://localhost:3000/users
# Bad username or password
```

### Log in

To log in with our previously-created user `foo`:

```bash
curl -d "username=foo&password=bar" -X POST http://localhost:3000/login
# Success
```

To see the response of a failed login request:

```bash
curl -d "username=foo&password=wrong" -X POST http://localhost:3000/users
# Login failed
```
