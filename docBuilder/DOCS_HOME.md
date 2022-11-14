# Trumba

// TODO: instead, describe this without a `.json` file because that's not required (someone is instead just creating an object)
First create an auth object:
// TODO: always use ```ts code ``` syntax
```ts
const auth = {
  username: 'your trumba username',
  password: 'your trumba password',
};
```

First initialize the api:

// TODO: change these to es6 imports (`import ... from ... `)
const auth = require('auth.json');
const trumbaAPI = initTrumbaAPI(auth);

To list events:

const webName = 'INSERT_WEBNAME_HERE';
// TODO: document using async/await `const events = await trumbaAPI.listEvents(webName);`
trumbaAPI.listEvents(webName).then(response => {
  console.log(response);
})


To register a user for an event:

// TODO: simplify and put in one line:
```ts
const response = await trumbaAPI.registerForEvent({
  eventId: 123456789,
  name: "Bob",
  email: "bob@example.com",
  status: "registered",
});
```
// TODO: always set 'status' to registered and don't require the user to pass that in

To list all events a user is registered for:

const query = {
  webName: 'INSERT_WEBNAME_HERE
  email: 'bob@example.com',
}

trumbaAPI.listAttendees(query).then(response => {
  console.log(response);
})

## Special Thanks

This project would not be possible without the enormous amount of development work by [Yuen Ler Chow](https://github.com/yuenler).