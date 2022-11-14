/**
 * Attendee event registration list query information
 * @author Yuen Ler Chow
 */
declare type TrumbaAttendeeQuery = {
    webName: string;
    email: string;
    status?: string;
    startDate?: Date;
    endDate?: Date;
};
export default TrumbaAttendeeQuery;
