# Trumba


First, create an auth object:
```ts
const auth = {
  username: 'your trumba username',
  password: 'your trumba password',
};
```

Then, initialize the api:

```ts
const trumbaAPI = initTrumbaAPI(auth);
```

To list events:

```ts
const webName = 'the calendar webname';
const events = await trumbaAPI.listEvents(webName);
```


To register a user for an event:

```ts
const response = await trumbaAPI.registerForEvent({
  eventId: 123456789,
  name: "Bob",
  email: "bob@example.com",
});
```

To list all events a user is registered for:

```ts
const response = await trumbaAPI.listAttendees({
  webName: 'the calendar webname',
  email: 'bob@example.com',
})
```


## Special Thanks

This project would not be possible without the enormous amount of development work by [Yuen Ler Chow](https://github.com/yuenler).