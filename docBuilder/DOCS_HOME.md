# Trumba

## Quickstart

First, put your trumba credentials into an object:

```ts
const auth = {
  username: 'your trumba username',
  password: 'your trumba password',
};
```

Then, initialize the api:

```ts
import initTrumbaAPI from 'dce-trumba';

...

const trumbaAPI = initTrumbaAPI(auth);
```

Then, you can use `trumbaAPI` to access the Trumba API. See the examples below:

```ts
// List events
const events = await trumbaAPI.listEvents('my-calendar');

// Register a user for an event:
const response = await trumbaAPI.registerForEvent({
  eventId: 123456789,
  name: "Bob",
  email: "bob@example.com",
});
```

## Special Thanks

This project would not be possible without the enormous amount of development work by [Yuen Ler Chow](https://github.com/yuenler).
