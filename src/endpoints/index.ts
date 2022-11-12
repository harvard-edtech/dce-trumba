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
import TrumbaAuth from '../types/TrumbaAuth';
import AttendeeQuery from '../shared/types/AttendeeQuery';
import trumbaCodeMessageMap from '../shared/constants/trumbaCodeMessageMap';
import TrumbaEvent from '../types/TrumbaEvent';
import TrumbaAttendee from '../types/TrumbaAttendee';
import Registration from '../shared/types/Registration';


// Import custom error
import TrumbaError from '../shared/classes/TrumbaError';
import EventFilter from '../shared/types/EventFilter';


/**
 * Initialize Trumba API
 * @ignore
 * @param auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
const initTrumbaAPI = (auth: TrumbaAuth) => {
  /**
   * Lists all events on the calendar that satisfy the provided filters
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method listEvents
   * @param webName unique identifier for the calendar
   * @param {object} filter object containing all arguments
   * @param {number} filter.numEvents number of events to return
   * @param {number[]} filter.eventIds list of event ids to return
   * @param {Date} filter.startDate start date of events to return
   * @param {Date} filter.endDate end date of events to return
   * @param {number} filter.months number of months to return
   * @param {number} filter.weeks number of weeks to return
   * @param {number} filter.days number of days to return
   * @param {number} filter.previousWeeks number of previous weeks to return
   * @param {string} filter.filterView filter view to use
   * @param {string} filter.search search query
   * @param {boolean} filter.html whether to return HTML
   * @param {boolean} filter.customNotes whether to return custom notes
   *   the source course
   * @returns a list of information for each event {@link https://app.swaggerhub.com/apis-docs/Trumba/Published-Events/1S}
   */
  const listEvents = async (webName: string, filter: EventFilter) : Promise<TrumbaEvent[]> => {
    try {
      // destructuring filter
      const { 
        numEvents,
        eventIds,
        startDate,
        endDate,
        months,
        weeks,
        days,
        previousWeeks,
        filterView,
        search,
        html,
        customNotes } = filter;


      const params = {
        events: numEvents,
        eventid: eventIds.length == 1 ? eventIds[0] : undefined,
        eventids: eventIds.length > 1 ? eventIds.join(',') : undefined,
        startdate: startDate.toISOString(),
        enddate: endDate.toISOString(),
        months,
        weeks,
        days,
        previousweeks: previousWeeks,
        filterview: filterView,
        search,
        html,
        customnotes: customNotes,
      }
      const response = await axios.get(`http://www.trumba.com/calendars/${webName}.json`,
      {params}
      );
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

   /**
   * Registers a user for an event on the calendar
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method registerForEvent
   * @param {object} registration object containing registration information such as event id, name, email, and status
   * @param {number} registration.eventId id of the event to register for
   * @param {string} registration.name name of the person registering
   * @param {string} registration.email email of the person registering
   * @param {string} registration.status status of the person registering
   * @param {string} registration.eventTitle title of the event
   * @param {string} registration.startDateTime start date and time of the event
   * @param {string} registration.endDateTime end date and time of the event
   * @param {string} registration.startDateTimeLocal end date and time of the event in local time
   * @param {string} registration.endDateTimeLocal end date and time of the event in local time
   * @param {FormAnswer[]} registration.formAnswers answers to the form questions
   * 
   * 
   * @returns object containing attendee and event information {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/put_attendees}
   */
  const registerForEvent = async (registration: Registration) : Promise<TrumbaAttendee> => {
    const {
      eventId,
      name,
      email,
      status,
      eventTitle,
      formAnswers,
    } = registration;

    const request = {
      eventID: eventId,
      name,
      email,
      status,
      eventTitle,
      formAnswers,
    };

    try {
      const response = await axios.put(
        'https://www.trumba.com/api/v2/attendees', request, { auth },
      );
      const attendee: TrumbaAttendee = {
        eventId: response.data.eventID,
        name: response.data.name,
        email: response.data.email,
        status: response.data.status,
        eventTitle: response.data.eventTitle,
        startDateTime: new Date(response.data.startDateTime),
        endDateTime: new Date(response.data.endDateTime),
        startDateTimeLocal: new Date(response.data.startDateTimeLocal),
        endDateTimeLocal: new Date(response.data.endDateTimeLocal),
        formAnswers: response.data.formAnswers,
      };
      return attendee;
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

  /**
   * Lists all events a user is registered for on the calendar
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method listAttendees
   * @param query object containing query information such as web name and email
   * @returns list of attendee objects {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/listAttendee}
   */
  const listAttendees = async (query: AttendeeQuery): Promise<TrumbaAttendee[]> => {
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
