---
 layout: '../../layouts/BlogPost.astro'
 title: 'How I test Sails API applications'
 description: 'In this article, I show a realistic way of testing APIs built using the Node.js MVC framework Sails'
 pubDate: 'August 2, 2020'
---

Lately I have been both writing and maintaining a couple of NodeJS web services written with the [Sails](https://sailsjs.com/) framework. In this article, I want to show my approach in setting up and writing API tests for a Sails powered web service or API.

## The tools 🛠️

I know that there are a lot of testing libraries out there for JavaScript but I personally like using [Jest]. Also I would be using [Supertest](https://github.com/visionmedia/supertest#readme) for HTTP assertions - what this means is, Supertest would allow me visit my endpoints and assert if the different endpoints in the Sails API fulfill their requirements.

## The Setup ⚙️

First things first, I would be pulling out good 'ol npm and installing both Jest and Supertest as development dependencies in the Sails application. So I would quickly run:

```sh
npm i jest supertest --save-dev
```

After that is done, I would edit `package.json` and replaced the test script with the one below:

```json
"test": "jest"
```

The above will allow me to run `npm test` to fire up Jest. So the way jest works is that it would look for one of the following to know where tests are:

- test folder
- `__test__` folder
- a file ending with .test.js or
- a file ending with .spec.js

So I decided to go with the structure of having a test folder in the root of the Sails application and writing all my API tests in there as .test.js files.

## A Test Case 🧪

Assuming I want to test if the home route `/` of the Sails app returns a 200 OK HTTP status code. I would create a test file `home.test.js` and begin fleshing out the tests. But first...

### Lifting Sails ⛵

Traditionally to start up the sails development server, you would run `sails lift` in the terminal. Sails also provide the ability to lift it's server programmatically by calling(not surprisingly) `sails.lift()`. Sails also provide the `lower()` method on instances to shutdown the server.

With the above knowledge, I would first set up a jest lifecycle to both start sails before running my tests and shut sails down after ll tests are run. To do this, at the top of `home.test.js`, I would import both Sails and Supertest:

```js
var sails = require("sails");
const request = require("supertest");
```

Then I would setup the jest `beforeAll` and `afterAll` life cycles methods/hooks.

```js
// Global before hook
beforeAll(function (done) {
  sails.lift(
    {
      // Your Sails app's configuration files will be loaded automatically,
      // but you can also specify any other special overrides here for testing purposes.

      // For example, we might want to skip the Grunt hook,
      // and disable all logs except errors and warnings:
      hooks: { grunt: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }

      // here you can load fixtures, etc.
      // (for example, you might want to create some records in the database)

      return done();
    }
  );
});

// Global after hook
afterAll(function (done) {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)
  sails.lower(done);
});
```

So far `home.test.js` would look like this:

```js
var sails = require("sails");
const request = require("supertest");

// Global before hook
beforeAll(function (done) {
  sails.lift(
    {
      // Your Sails app's configuration files will be loaded automatically,
      // but you can also specify any other special overrides here for testing purposes.

      // For example, we might want to skip the Grunt hook,
      // and disable all logs except errors and warnings:
      hooks: { grunt: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }

      // here you can load fixtures, etc.
      // (for example, you might want to create some records in the database)

      return done();
    }
  );
});

// Global after hook
afterAll(function (done) {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)
  sails.lower(done);
});
```

## Now unto test!

So the first test is really nothing fancy. So what we would do is call supertest which we are referring with the `request` variable, pass in the sail app and then make a GET request to the home route and see if it responds with a 200 OK. Fair enough? Let's write it:

```js
describe("Home", () => {
  it("/ - returns 200", (done) => {
    request(sails.hooks.http.app).get("/").expect(200, done);
  });
});
```

Hopefully if we run our test via `npm test`, it will pass. I hope you noticed `sails.hooks.http.app` being passed to the call to `request`. That gave us the sails app instance currently running.

Also worthy of note is the `done` callback. It's required since API requests are asynchronous. Passing the `done` callback tells Jest we are done otherwise Jest will wait for the done callback and will just wait in there for as long as possible until it times out or it sees a call to `done()`.

## A real world test case 😎

Let's say I have a sign up feature in my Sails application located at `user/signup` and signs up a new user and returns back a JSON payload with the keys: `userInfo` and `token` for the new user info and a JWT token respectively. Let's write a test for this. So assuming everything is setup properly as described above, I would write:

```js
it("Signs up new user", (done) => {
  const newUser = {
    fullName: "Kelvin Omereshone",
    emailAddress: "kelvinoemreshone@gmail.com",
    password: "holamundo",
  };
  request(sails.hooks.http.app)
    .post("/user/signup")
    .send(newUser)
    .expect(201)
    .then((res) => {
      expect(res.body.userInfo).not.toBeUndefined();
      expect(res.body.token).not.toBeUndefined();
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
});
```

## Conclusion

Learning to write automated tests would allow you more confidence in the code you write. I hope this setup would help you on your journey in testing Sails applications.

As always, you can [tweet](https://twitter.com/dominus_kelvin) at me on Twitter your thoughts on this article.

Code expressively 🎨, <br /> Kelvin
