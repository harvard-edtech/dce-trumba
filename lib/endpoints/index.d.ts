/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */
import TrumbaAuth from '../types/TrumbaAuth';
import TrumbaAttendeeQuery from '../types/TrumbaAttendeeQuery';
import TrumbaEvent from '../types/TrumbaEvent';
import TrumbaAttendee from '../types/TrumbaAttendee';
import TrumbaRegistration from '../types/TrumbaRegistration';
import TrumbaEventFilter from '../types/TrumbaEventFilter';
/**
 * Initialize Trumba API
 * @ignore
 * @param {TrumbaAuth} auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
declare const initTrumbaAPI: (auth: TrumbaAuth) => {
    listEvents: (webName: string, filter?: TrumbaEventFilter) => Promise<TrumbaEvent[]>;
    listAttendees: (query: TrumbaAttendeeQuery) => Promise<TrumbaAttendee[]>;
    registerForEvent: (registration: TrumbaRegistration) => Promise<TrumbaAttendee>;
};
export default initTrumbaAPI;
