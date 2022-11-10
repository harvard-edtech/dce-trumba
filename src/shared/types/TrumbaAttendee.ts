import FormAnswer from './FormAnswer';

type TrumbaAttendee = {
  eventID: number;
  name: string;
  email: string;
  status: 'registered' | 'declined';
  eventTitle?: string;
  startDateTime?: string;
  endDateTime?: string;
  startDateTimeLocal?: string;
  endDateTimeLocal?: string;
  formAnswers?: FormAnswer[];
};

export default TrumbaAttendee;