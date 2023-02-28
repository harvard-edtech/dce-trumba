/**
 * Trumba registration question for when registering for an event
 * @author Yuen Ler Chow
 */
type TrumbaRegistrationQuestion = {
  fieldID: number,
  question: string,
  fieldType: number,
  required: boolean,
  defaultValue: string[],
  allowedValues: string[],
  allowsMultipleValues: boolean,
  validationRegex: string,
  conditionalFieldID: number,
  conditionalValues: string[],
}

export default TrumbaRegistrationQuestion;