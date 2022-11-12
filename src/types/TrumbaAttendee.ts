import FormAnswer from './TrumbaFormAnswer';

type TrumbaAttendee = {
  eventId: number;
  name: string;
  email: string;
  status: 'registered' | 'declined';
  eventTitle?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  startDateTimeLocal?: Date;
  endDateTimeLocal?: Date;
  formAnswers?: FormAnswer[];
};

export default TrumbaAttendee;