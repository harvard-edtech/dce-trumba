/**
 * Attendee event registration list query information
 * @author Yuen Ler Chow
 */
type TrumbaAttendeeQuery = {
  // TODO: describe each item
  webName: string;
  email: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
}

export default TrumbaAttendeeQuery;