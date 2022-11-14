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
    startDateTime?: Date;
    endDateTime?: Date;
    startDateTimeLocal?: Date;
    endDateTimeLocal?: Date;
    formAnswers?: TrumbaFormAnswer[];
};
export default TrumbaAttendee;
