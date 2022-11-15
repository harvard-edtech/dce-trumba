import TrumbaFormAnswer from './TrumbaFormAnswer';
/**
 * A single event attendee
 * @author Yuen Ler Chow
 */
declare type TrumbaAttendee = {
    eventId: number;
    name: string;
    email: string;
    status: 'registered' | 'declined';
    eventTitle?: string;
    startDateTime?: string;
    endDateTime?: string;
    startDateTimeLocal?: string;
    endDateTimeLocal?: string;
    formAnswers?: TrumbaFormAnswer[];
};
export default TrumbaAttendee;
