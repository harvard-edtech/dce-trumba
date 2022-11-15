import TrumbaFormAnswer from './TrumbaFormAnswer';
/**
 * Information required to register someone for an event
 * @author Yuen Ler Chow
 */
declare type TrumbaRegistration = {
    eventId: number;
    name: string;
    email: string;
    status?: 'registered' | 'declined';
    eventTitle?: string;
    formAnswers?: TrumbaFormAnswer[];
};
export default TrumbaRegistration;
