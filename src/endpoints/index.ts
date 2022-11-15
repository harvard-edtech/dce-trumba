/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */

// Import libs
import axios from 'axios';

// Import shared types
import TrumbaErrorCode from '../types/TrumbaErrorCode';
import TrumbaAuth from '../types/TrumbaAuth';
import TrumbaAttendeeQuery from '../types/TrumbaAttendeeQuery';
import TrumbaEvent from '../types/TrumbaEvent';
import TrumbaAttendee from '../types/TrumbaAttendee';
import TrumbaRegistration from '../types/TrumbaRegistration';
import TrumbaEventFilter from '../types/TrumbaEventFilter';

// Import shared constants
import TRUMBA_CODE_MESSAGE_MAP from '../shared/constants/TRUMBA_CODE_MESSAGE_MAP';

// Import custom error
import TrumbaError from '../shared/classes/TrumbaError';


const initTrumbaAPI = (auth: TrumbaAuth) => {
  /**
   * Lists all events on the calendar that satisfy the provided filters
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method listEvents
   * @param {string} webName unique identifier for the calendar
   * @param {TrumbaEventFilter} [filter] EventFilter for narrowing the results
   *   of the list events search {@link https://github.com/harvard-edtech/dce-trumba/blob/main/src/types/TrumbaEventFilter.ts}
   * @returns a list of information for each event {@link https://app.swaggerhub.com/apis-docs/Trumba/Published-Events/1S}
   */
  const listEvents = async (
    webName: string,
    filter?: TrumbaEventFilter,
  ) : Promise<TrumbaEvent[]> => {

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
        customNotes,
      } = (filter ?? {});


      const params = {
        events: numEvents,
        eventid: eventIds && eventIds.length == 1 ? eventIds[0] : undefined,
        eventids: eventIds && eventIds.length > 1 ? eventIds.join(',') : undefined,
        startdate: startDate ? startDate.toISOString() : undefined,
        enddate: endDate ? endDate.toISOString() : undefined,
        months,
        weeks,
        days,
        previousweeks: previousWeeks,
        filterview: filterView,
        search,
        html,
        customnotes: customNotes,
      }

      const {data} = await axios.get(
        `http://www.trumba.com/calendars/${webName}.json`,
        { params },
      );
      return data;
    } catch (err) {
      // Get response data
      const responseData = (err as any)?.response?.data;


      // we do this because for some reason response.data doesn't format properly
      if ((err as any)?.response?.statusText === 'Not Found') {
        throw new TrumbaError({
          message: 'The web name was not found.',
          code: TrumbaErrorCode.WebNameNotFound,
        });
      }

      if (!responseData) {
        // No information on the error
        // (this is an unknown error)
        throw new TrumbaError({
          message: 'An unknown error occurred.',
          code: TrumbaErrorCode.UnknownError,
        });
      }
      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: TRUMBA_CODE_MESSAGE_MAP[responseData[responseData.length - 1]],
      });
    }
  };

   /**
   * Registers a user for an event on the calendar
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method registerForEvent
   * @param {TrumbaRegistration} registration object containing registration
   *   information {@link https://github.com/harvard-edtech/dce-trumba/blob/main/src/types/TrumbaRegistration.ts}
   * @returns object containing attendee and event information {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/put_attendees}
   */
  const registerForEvent = async (
    registration: TrumbaRegistration,
  ): Promise<TrumbaAttendee> => {
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
      status: status === 'declined' ? 'declined' : 'registered',
      eventTitle,
      formAnswers,
    };

    try {
      const {data} = await axios.put(
        'https://www.trumba.com/api/v2/attendees', request, { auth },
      );
      return data;
    } catch (err) {
      // Get response data
      const responseData = (err as any)?.response?.data;
      if (!responseData) {
        // No information on the error
        // (this is an unknown error)
        throw new TrumbaError({
          message: 'An unknown error occurred.',
          code: TrumbaErrorCode.UnknownError,
        });
      }

      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: TRUMBA_CODE_MESSAGE_MAP[responseData[responseData.length - 1]],
      });
    }
  }

  /**
   * Lists all events a user is registered for on the calendar
   * @author Yuen Ler Chow
   * @instance
   * @memberof api
   * @method listAttendees
   * @param {TrumbaAttendeeQuery} query object containing query information such
   *   as web name and email {@link https://github.com/harvard-edtech/dce-trumba/blob/main/src/types/TrumbaAttendeeQuery.ts}
   * @returns list of attendee objects {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/listAttendee}
   */
  const listAttendees = async (
    query: TrumbaAttendeeQuery,
  ): Promise<TrumbaAttendee[]> => {
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
          code: TrumbaErrorCode.UnknownError,
        });
      }

      throw new TrumbaError({
        message: responseData[responseData.length - 1].errorMessage,
        code: TRUMBA_CODE_MESSAGE_MAP[responseData[responseData.length - 1]],
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
