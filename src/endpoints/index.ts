/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */

// Import libs
import axios from 'axios';

// Import shared types
import ErrorCode from '../shared/types/ErrorCode';
import TrumbaAuth from '../shared/types/TrumbaAuth';
import TrumbaRegistration from '../shared/types/TrumbaRegistration';
import TrumbaAttendeeQuery from '../shared/types/TrumbaAttendeeQuery';
import trumbaCodeMessageMap from '../shared/constants/trumbaCodeMessageMap';
import TrumbaEvent from '../shared/types/TrumbaEvent';

// Import custom error
import TrumbaError from '../shared/classes/TrumbaError';


/**
 * Initialize Trumba API
 * @ignore
 * @param auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
const initTrumbaAPI = (auth: TrumbaAuth) => {
  // TODO: finish this jsdoc:
  /**
   * Describe the function here
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method listEvents
   * @param webName describe what this param is
   * @returns describe the return value {@link PUT_LINK_TO_TRUMBA_DOCS}
   */
  const listEvents = async (webName: string) : Promise<TrumbaEvent[]> => {
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
        throw new TrumbaError({
          message: 'An unknown error occurred.',
          code: ErrorCode.UnknownError,
        });
      }
      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: trumbaCodeMessageMap[responseData[responseData.length - 1]],
      });
    }
  };

  // TODO: add JSDoc
  const registerForEvent = async (registration: TrumbaRegistration) => {
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
        'https://www.trumba.com/api/v2/attendees', request, { auth },
      );
      return response.data;
    } catch (err) {
      // Get response data
      const responseData = (err as any)?.response?.data;
      if (!responseData) {
        // No information on the error
        // (this is an unknown error)
        throw new TrumbaError({
          message: 'An unknown error occurred.',
          code: ErrorCode.UnknownError,
        });
      }

      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: trumbaCodeMessageMap[responseData[responseData.length - 1]],
      });
    }
  }

  // TODO: add JSDoc
  const listAttendees = async (query: TrumbaAttendeeQuery): Promise<TrumbaAttendee[]> => {
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
      const { data } = await axios.get('https://www.trumba.com/api/v2/attendees',
        {
          params,
          auth
        });
      return data;
    } catch (err) {
      // Get response data
      const responseData = (err as any)?.response?.data;
      if (!responseData) {
        // No information on the error
        // (this is an unknown error)
        throw new TrumbaError({
          message: 'An unknown error occurred.',
          code: ErrorCode.UnknownError,
        });
      }

      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: trumbaCodeMessageMap[responseData[responseData.length - 1]],
      });
    }
  };

  // Return api instance
  const trumbaAPI = {
    listEvents,
    listAttendees,
    registerForEvent,
  };

  return trumbaAPI;
};

export default initTrumbaAPI;
