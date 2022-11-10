/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */
import TrumbaAuth from '../shared/types/TrumbaAuth';
import TrumbaRegistration from '../shared/types/TrumbaRegistration';
import TrumbaAttendeeQuery from '../shared/types/TrumbaAttendeeQuery';
/**
 * Initialize Trumba API
 * @ignore
 * @param auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
declare const initTrumbaAPI: (auth: TrumbaAuth) => {
    listEvents: (webName: string) => Promise<any>;
    listAttendees: (query: TrumbaAttendeeQuery) => Promise<any>;
    registerForEvent: (registration: TrumbaRegistration) => Promise<any>;
};
export default initTrumbaAPI;
