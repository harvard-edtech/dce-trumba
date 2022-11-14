import TrumbaCustomField from './TrumbaCustomField';
/**
 * A single trumba event that users can register for
 * @author Yuen Ler Chow
 */
declare type TrumbaEvent = {
    eventID: number;
    template: string;
    title: string;
    description: string;
    locationType: 'In-Person' | 'Online' | 'Hybrid';
    location: string;
    webLink: string;
    startDateTime: string;
    endDateTime: string;
    dateTimeFormatted: string;
    allDay: boolean;
    startTimeZoneOffset: string;
    endTimeZoneOffset: string;
    canceled: boolean;
    openSignUp: boolean;
    reservationFull: boolean;
    pastDeadline: boolean;
    pastCancelDeadline: boolean;
    requiresPayment: boolean;
    refundsAllowed: boolean;
    waitingListAvailable: boolean;
    signUpUrl: string;
    customFields: TrumbaCustomField[];
    permaLinkUrl: string;
    eventActionUrl: string;
    categoryCalendar: string;
    registrationTransferTargetCount: number;
    regAllowChanges: boolean;
};
export default TrumbaEvent;
