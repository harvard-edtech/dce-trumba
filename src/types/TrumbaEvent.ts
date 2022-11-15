import TrumbaCustomField from './TrumbaCustomField';

/**
 * A single trumba event that users can register for
 * @author Yuen Ler Chow
 */
type TrumbaEvent = {
  // Unique event ID
  eventID: number,
  // The event template for this event
  template: string,
  // Event title
  title: string,
  // Detailed event description
  description: string,
  // Whether the event is in-person, online or both (hybrid)
  locationType: 'In-Person' | 'Online' | 'Hybrid',
  // The event location. For hybrid events, this will include both the in-person and online locations.
  location: string,
  // The link to the event's page on the trumba calendar
  webLink: string,
  // Start date and time of the event in UTC
  startDateTime: string,
  // End date and time of the event in UTC
  endDateTime: string,
  // Nicely formatted date/time range, like "Thursday, June 9, 2022, 12 - 2pm PDT"
  dateTimeFormatted: string,
  // Is the event marked as an all day event
  allDay: boolean,
  // Hour and minute offset from UTC of the startDateTime +-HHMM
  startTimeZoneOffset: string,
  // Hour and minute offset from UTC of the endDateTime +-HHMM
  endTimeZoneOffset: string,
  // Has the event been canceled
  canceled: boolean,
  // Is open signup (registration) enabled for this event
  openSignUp: boolean,
  // Is registration closed because this event is full.
  reservationFull: boolean,
  // Is registration closed because the deadline to register has passed.
  pastDeadline: boolean,
  // Is registration cancellation closed because the deadline to register has passed.
  pastCancelDeadline: boolean,
  // Is a payment required to register for this event
  requiresPayment: boolean,
  // Are refunds on prior payments allowed for this event
  refundsAllowed: boolean,
  // Is a wait list available when the event is full,
  waitingListAvailable: boolean,
  // The web address for the event registration form when open sign up is enabled
  signUpUrl: string,
  // For repeating events, identifies attendees can register for individual occurrences (0), all future occurrences (1) or all occurrences (4)
  repeatingRegistration: 0 | 1 | 4,
  // For repeating events, a text description of the repeating pattern
  repeats: string,
  // The web address to view the published events details for this event
  permaLinkUrl: string,
  customFields: TrumbaCustomField[],
  // The web address to perform event actions on this event
  eventActionUrl: string,
  // The event image normally shown in calendar views
  eventImage: {
    // The web address to the event image
    url: string,
    size: {
      // The width of the event image
      width: number,
      // The height of the event image
      height: number,
    }
  }
  // The detail image normally shown in event detail views. If a separate detail image is not specified, the eventImage will be repeated as the detailImage
  detailImage: {
    // The web address to the event image
    url: string,
    size: {
      // The width of the event image
      width: number,
      // The height of the event image
      height: number,
    }
  },
  // The specific calendar that owns this event
  categoryCalendar: string,
  // the transfer target count for this event
  registrationTransferTargetCount: number,
  // whether registration allows changes
  regAllowChanges: boolean,
};

export default TrumbaEvent;