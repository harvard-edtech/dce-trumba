import FormAnswer from './FormAnswer';

type TrumbaRegistration = {
  eventId: number;
  name: string;
  email: string;
  status: string;
  eventTitle?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  startDateTimeLocal?: Date;
  endDateTimeLocal?: Date;
  formAnswers?: FormAnswer[];
}

export default TrumbaRegistration;

