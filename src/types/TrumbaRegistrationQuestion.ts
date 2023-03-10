/**
 * Trumba registration question for when registering for an event
 * @author Yuen Ler Chow
 */
type TrumbaRegistrationQuestion = {
  // Unique ID for a question.
  fieldID: number,
  // The question to present to the user.
  question: string,
  // The Type of Question. 0 - Single line of text, 1 - Multiple lines of text, 5 - List of choices
  fieldType: number,
  // If true, the question is required.
  required: boolean,
  // The default answer(s) to the question. Multiple values in the array are used when setting the default on a multi-value list of choices fields.
  defaultValue: string[],
  // The list of choices that a user may select.
  allowedValues: string[],
  // For list of choices questions this specifies whether multiple values can be selected.
  allowsMultipleValues: boolean,
  // The regular expression that should be used to validate the answer.
  validationRegex: string,
  // When specified, the current questions should only be shown when the conditionalFieldID question is answered with one or more of the values in conditionalValues.
  conditionalFieldID: number,
  // The values to check when determining whether to show the current question.
  conditionalValues: string[],
}

export default TrumbaRegistrationQuestion;