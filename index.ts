// import axios from 'axios';

import TrumbaError from './TrumbaError';

const axios = require('axios');
const { default: ErrorCode } = require('./ErrorCode');
const auth = require('./config/auth.json');

type TrumbaAuth = {
  username: string;
  password: string;
};

type FormAnswer = {
  fieldID: string;
  fieldValue: string;
};

type TrumbaRegistration = {
  eventId: number;
  name: string;
  email: string;
  status: string;
  eventTitle?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  startDateTimeLocal?: Date;
  endDateTimeLocal?: Date;
  formAnswers?: FormAnswer[];
}

type TrumbaAttendeeQuery = {
  webName: string;
  email: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
}


const getEvents = async (webName: string) => {
  try {
  const response = await axios.get(`http://www.trumba.com/calendars/${webName}.json`);
  return response.data;
  } catch (err) {
    // Get response data
    const responseData = (err as any)?.response?.data;
    console.log(responseData);
    if (!responseData) {
      // No information on the error
      // (this is an unknown error)
      throw new Error('Unknown error...or something');
    }

    // iterate through the errors
    let message = 'We ran into some errors while registering for the event: ';
    for (let i = 0; i < responseData.length; i += 1) {
      const {errorMessage } = responseData[i];
      message += errorMessage + ', '
    }

    // Throw a TrumbaError
    throw new TrumbaError({message, code: ErrorCode.ManyErrors});
  }

}

const registerForEvent = async (registration: TrumbaRegistration, auth: TrumbaAuth) => {
  const {
    eventId,
    name,
    email,
    status,
    eventTitle,
    startDateTime,
    endDateTime,
    startDateTimeLocal,
    endDateTimeLocal,
    formAnswers,
  } = registration;

  const request = {
    eventID: eventId,
    name,
    email,
    status,
    eventTitle,
    startDateTime: startDateTime?.toISOString(),
    endDateTime: endDateTime?.toISOString(),
    startDateTimeLocal: startDateTimeLocal?.toISOString(),
    endDateTimeLocal: endDateTimeLocal?.toISOString(),
    formAnswers,
  };

  try {
    const response = await axios.put(
      'https://www.trumba.com/api/v2/attendees', request, {auth},
    );
    return response.data;
  } catch (err) {
    // Get response data
    const responseData = (err as any)?.response?.data;
    console.log(responseData);
    if (!responseData) {
      // No information on the error
      // (this is an unknown error)
      throw new Error('Unknown error...or something');
    }


    // iterate through the errors
    let message = 'We ran into some errors while registering for the event: ';
    for (let i = 0; i < responseData.length; i += 1) {
      const {errorMessage } = responseData[i];
      message += errorMessage + ', '
    }

    // Throw a TrumbaError
    throw new TrumbaError({message, code: ErrorCode.ManyErrors});

    // if (
    //   responseData.length === 2
    //   && responseData[1].errorCode === 'pastdeadline'
    // ) {
    //   throw new TrumbaError({
    //     message: 'You can\'t register for this event because the registration deadline has passed.',
    //     code: ErrorCode.RegistrationDeadlineHasPassed,
    //   });
    // }
    
    
  }
}

const getAttendees = async (query: TrumbaAttendeeQuery, auth: TrumbaAuth) => {

  const {
    webName,
    email,
    status,
    startDate,
    endDate,
  } = query;

  const params = {
    webName,
    email,
    status,
    startdate: startDate?.toISOString(),
    enddate: endDate?.toISOString(),
  };


  try {
    const response = await axios.get('https://www.trumba.com/api/v2/attendees', 
    {
      params,
      auth 
    });
    return response.data;
  } catch (err) {
    // Get response data
    const responseData = (err as any)?.response?.data;
    console.log(responseData);
    if (!responseData) {
      // No information on the error
      // (this is an unknown error)
      throw new Error('Unknown error...or something');
    }

    // iterate through the errors
    let message = 'We ran into some errors while registering for the event: ';
    for (let i = 0; i < responseData.length; i += 1) {
      const {errorMessage } = responseData[i];
      message += errorMessage + ', '
    }

    // Throw a TrumbaError
    throw new TrumbaError({message, code: ErrorCode.ManyErrors});
  }
}



const registration: TrumbaRegistration = {
  eventId: 163114184,
  name: "Yenny",
  email: "lerchow@gmail.com",
  status: "registered",
};

const webName = 'test-calendar-8';

const query = {
  webName,
  email: 'lerchow@gmail.com',
  status: 'registered',
}


getEvents(webName).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});
registerForEvent(registration, auth).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});
getAttendees(query, auth).then(response => {
  console.log(response);
})