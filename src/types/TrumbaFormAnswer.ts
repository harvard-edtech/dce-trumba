/**
 * Form answers for a trumba attendee
 * @author Yuen Ler Chow
 */
type TrumbaFormAnswer = {
  // Unique ID for a question.
  fieldID: string;
  // The answer(s) to the question. Multiple values in the array are used when posting to multi-value list of choices fields.
  fieldValue: string;
};

export default TrumbaFormAnswer;