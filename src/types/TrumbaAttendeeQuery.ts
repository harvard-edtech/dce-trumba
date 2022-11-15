/**
 * Attendee event registration list query information
 * @author Yuen Ler Chow
 */
type TrumbaAttendeeQuery = {
  // Unique identifier for the trumba calendar
  webName: string,
  // The email address of the attendee
  email: string,
  // The registration status of the attendee
  status?: 'registered' | 'declined',
  // Only return callbacks that start after the specified date in calendar timezone. Default value when not specified is the current date.
  startDate?: Date,
  // Only return callbacks that end before the specified date in calendar timezone. Default value when not specified is all future.
  endDate?: Date,
};

export default TrumbaAttendeeQuery;