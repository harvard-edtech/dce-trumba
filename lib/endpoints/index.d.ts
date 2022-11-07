/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */
declare type TrumbaAuth = {
    username: string;
    password: string;
};
declare type FormAnswer = {
    fieldID: string;
    fieldValue: string;
};
declare type TrumbaRegistration = {
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
};
declare type TrumbaAttendeeQuery = {
    webName: string;
    email: string;
    status?: string;
    startDate?: Date;
    endDate?: Date;
};
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
