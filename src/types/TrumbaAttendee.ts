import TrumbaFormAnswer from './TrumbaFormAnswer';

/**
 * A single event attendee
 * @author Yuen Ler Chow
 */
type TrumbaAttendee = {
  // Unique ID for an event
  eventId: number;
  // The name of the attendee
  name: string;
  // The email address of the attendee
  email: string;
  // The registration status of the attendee
  status: 'registered' | 'declined';
  // The title of the event
  eventTitle?: string;
  // Start date and time of the event in UTC
  startDateTime?: Date;
  // End date and time of the event in UTC
  endDateTime?: Date;
  // Start date and time of the event in local time
  startDateTimeLocal?: Date;
  // End date and time of the event in local time
  endDateTimeLocal?: Date;
  // The attendee's answers to the event's form
  formAnswers?: TrumbaFormAnswer[];
};

export default TrumbaAttendee;