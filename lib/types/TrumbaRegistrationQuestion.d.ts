import RegistrationQuestionFieldType from "./RegistrationQuestionFieldType";
/**
 * Trumba registration question for when registering for an event
 * @author Yuen Ler Chow
 */
declare type TrumbaRegistrationQuestion = {
    fieldID: number;
    question: string;
    fieldType: RegistrationQuestionFieldType;
    required: boolean;
    defaultValue: string[];
    allowedValues: string[];
    allowsMultipleValues: boolean;
    validationRegex: string;
    conditionalFieldID: number;
    conditionalValues: string[];
};
export default TrumbaRegistrationQuestion;
