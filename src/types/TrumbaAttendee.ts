import TrumbaFormAnswer from './TrumbaFormAnswer';

/**
 * A single event attendee
 * @author Yuen Ler Chow
 */
type TrumbaAttendee = {
  // TODO: describe this item (maybe you can copy this out of the docs?)
  eventId: number;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  name: string;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  email: string;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  status: 'registered' | 'declined';
  // TODO: describe this item (maybe you can copy this out of the docs?)
  eventTitle?: string;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  startDateTime?: Date;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  endDateTime?: Date;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  startDateTimeLocal?: Date;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  endDateTimeLocal?: Date;
  // TODO: describe this item (maybe you can copy this out of the docs?)
  formAnswers?: TrumbaFormAnswer[];
};

export default TrumbaAttendee;