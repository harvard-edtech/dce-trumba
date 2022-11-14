import TrumbaFormAnswer from './TrumbaFormAnswer';

/**
 * Information required to register someone for an event
 * @author Yuen Ler Chow
 */
type TrumbaRegistration = {
  // id of the event to register for
  eventId: number;
  // name of the person registering
  name: string;
  // email of the person registering
  email: string;
  // status of the person registering
  status: 'registered' | 'declined';
  // title of the event
  eventTitle?: string;
  // answers to the form questions
  formAnswers?: TrumbaFormAnswer[];
};

export default TrumbaRegistration;