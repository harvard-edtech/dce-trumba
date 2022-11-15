import TrumbaFormAnswer from './TrumbaFormAnswer';

/**
 * A single event attendee
 * @author Yuen Ler Chow
 */
type TrumbaAttendee = {
  // Unique ID for an event
  eventId: number,
  // The name of the attendee
  name: string,
  // The email address of the attendee
  email: string,
  // The registration status of the attendee
  status: 'registered' | 'declined',
  // The title of the event
  eventTitle?: string,
  // Start date and time of the event in UTC
  startDateTime?: string,
  // End date and time of the event in UTC
  endDateTime?: string,
  // Start date and time of the event in local time
  startDateTimeLocal?: string,
  // End date and time of the event in local time
  endDateTimeLocal?: string,
  // The attendee's answers to the event's form
  formAnswers?: TrumbaFormAnswer[],
};

export default TrumbaAttendee;