import FormAnswer from '../../types/TrumbaFormAnswer';

type TrumbaAttendee = {
  eventId: number;
  name: string;
  email: string;
  status: 'registered' | 'declined';
  eventTitle?: string;
  formAnswers?: FormAnswer[];
};

export default TrumbaAttendee;