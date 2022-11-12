/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */
import TrumbaAuth from '../types/TrumbaAuth';
import AttendeeQuery from '../shared/types/AttendeeQuery';
import TrumbaEvent from '../types/TrumbaEvent';
import TrumbaAttendee from '../types/TrumbaAttendee';
import Registration from '../shared/types/Registration';
import EventFilter from '../shared/types/EventFilter';
/**
 * Initialize Trumba API
 * @ignore
 * @param auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
declare const initTrumbaAPI: (auth: TrumbaAuth) => {
    listEvents: (webName: string, filter: EventFilter) => Promise<TrumbaEvent[]>;
    listAttendees: (query: AttendeeQuery) => Promise<TrumbaAttendee[]>;
    registerForEvent: (registration: Registration) => Promise<TrumbaAttendee>;
};
export default initTrumbaAPI;
