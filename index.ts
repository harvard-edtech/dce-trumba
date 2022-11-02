// import axios from 'axios';

import TrumbaError from './TrumbaError';

const axios = require('axios');
const { default: ErrorCode } = require('./ErrorCode');
const auth = require('./config/auth.json');

// TODO: get this function to work the same way as registerForEvent
// const getEvents = async (webName) => {
//   await axios.get(`http://www.trumba.com/calendars/${webName}.json`).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     throw error;
//   }
//   )
// }

const registerForEvent = async (request: any, auth: any) => {
  try {
    const response = await axios.put('https://www.trumba.com/api/v2/attendees', request, { auth });
    // TODO: Parse the response and just return useful information
  } catch (err) {
    // Get response data
    const responseData = (err as any)?.response?.data;
    console.log(responseData);
    if (!responseData) {
      // No information on the error
      // (this is an unknown error)
      throw new Error('Unknown error...or something');
    }

    // TODO: Parse error and throw an error that's known, with an error code and all
    
    if (
      responseData.length === 2
      && responseData[1].errorCode === 'pastdeadline'
    ) {
      throw new TrumbaError({
        message: 'You can\'t register for this event because the registration deadline has passed.',
        code: ErrorCode.RegistrationDeadlineHasPassed,
      });
    }

    // TODO: parse the rest of the error types
  }
  // console.log(response.response);
}

// TODO: get this function to work the same way as registerForEvent
// const getAttendees = async (webName, email, status, auth) => {
//   await axios.get('https://www.trumba.com/api/v2/attendees', {
//     params: {
//       webName,
//       email,
//       status
//     }
//   },
//     { auth }).then(response => {
//       console.log(response.data)
//     }
//     ).catch(error => {
//       throw error;
//     }
//     )
// }

const registration = {
  "eventID": 163063534,
  "name": "Bobby Joe BJ",
  "email": "bjbjbjbjbj@test.com",
  "status": "registered",
};

const webName = 'test-calendar-8';

// TODO: add types to the arguments for each of these functions above

// getEvents(webName);
registerForEvent(registration, auth);
// getAttendees(webName, "yuenlerchow@college.harvard.edu", "registered", auth);