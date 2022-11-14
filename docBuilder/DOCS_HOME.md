# Trumba

First create an auth.json file:

{
  "username": "INSERT_EMAIL_HERE",
  "password": "INSERT_PASSWORD_HERE"
}

First initialize the api:

const auth = require('auth.json');
const trumbaAPI = initTrumbaAPI(auth);

To list events:

const webName = 'INSERT_WEBNAME_HERE'
trumbaAPI.listEvents(webName).then(response => {
  console.log(response);
})


To register a user for an event:

const registration = {
  eventId: 123456789,
  name: "Bob",
  email: "bob@example.com",
  status: "registered",
};

trumbaAPI.registerForEvent(registration).then(response => {
  console.log(response);
})

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