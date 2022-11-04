// import axios from 'axios';

import ErrorCode from './ErrorCode';
import TrumbaError from './TrumbaError';

const axios = require('axios');
// const { default: ErrorCode } = require('./ErrorCode');
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


const trumbaCodeMessageMap: {[index: string]: ErrorCode}  = {
  'webnamenotfound': ErrorCode.WebNameNotFound,
  'accessdenied': ErrorCode.AccessDenied,
  'unauthorized': ErrorCode.Unauthorized,
  'invalidemail': ErrorCode.InvalidEmail,
  'invalidphone': ErrorCode.InvalidPhone,
  'notavailable': ErrorCode.NotAvailable,
  'notsuppported': ErrorCode.NotSupported,
  'beforestart': ErrorCode.BeforeStart,
  'pastdeadline': ErrorCode.RegistrationDeadlineHasPassed,
  'eventcancelled': ErrorCode.EventCancelled,
  'eventfull': ErrorCode.EventFull,
  'eventnotfound': ErrorCode.EventNotFound,
  'missingidentity': ErrorCode.MissingIdentity,
  'requiredvalue': ErrorCode.RequiredValue,
  'invalidvalue': ErrorCode.InvalidValue,
  'incompatibleforms': ErrorCode.IncompatibleForms,
  'incompatiblepayments': ErrorCode.IncompatiblePayments,
  'notregistered': ErrorCode.NotRegistered,
  'alreadyregistered': ErrorCode.AlreadyRegistered,
}


const getEvents = async (webName: string) => {
  try {
  const response = await axios.get(`http://www.trumba.com/calendars/${webName}.json`);
  return response.data;
  } catch (err) {
    // Get response data
    const responseData = (err as any)?.response?.data;
    

    // we do this because for some reason response.data doesn't format properly
    if ((err as any)?.response?.statusText === 'Not Found') {
      throw new TrumbaError({
        message: 'The web name was not found.',
        code: ErrorCode.WebNameNotFound,
      });
    }

    if (!responseData) {
      // No information on the error
      // (this is an unknown error)
      throw new Error('Unknown error');
    }
    throw new TrumbaError({
      message: responseData[responseData.length -1 ].errorMessage,
      code: trumbaCodeMessageMap[responseData[responseData.length -1 ]],
    });
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
      throw new Error('Unknown error');
    }


    throw new TrumbaError({
          message: responseData[responseData.length -1 ].errorMessage,
          code: trumbaCodeMessageMap[responseData[responseData.length -1 ]],
        });
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
      throw new Error('Unknown error');
    }

    throw new TrumbaError({
      message: responseData[responseData.length -1 ].errorMessage,
      code: trumbaCodeMessageMap[responseData[responseData.length -1 ]],
    });
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
})
registerForEvent(registration, auth).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});
getAttendees(query, auth).then(response => {
  console.log(response);
})