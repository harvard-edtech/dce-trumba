/**
 * Type for a specific registration question field
 * @author Yuen Ler Chow
 */
enum RegistrationQuestionFieldType {
  // Single line of text
  ShortAnswer = 0,
  // Multiple lines of text
  Multiline = 1,
  // Number
  Number = 2,
  // True/false
  Boolean = 3,
  // Money
  Currency = 4,
  // Choose one from a list of choices
  ListOfChoices = 5,
  // Standard URL
  URL = 6,
  // Standard email
  Email = 11,
  // Standard US phone number
  PhoneUS = 12,
  // International phone number
  PhoneInternational = 13,
  // Standard US phone number that does not have an extension
  PhoneUSNoExtension = 14,
  // Standard US phone number that might have an extension
  PhoneUSOptionalExtension = 15,
  // Block of instructional text (not to be filled out)
  InstructionalText = 18,
  // Heading (not to be filled out)
  SectionHeading = 19,
}

export default RegistrationQuestionFieldType;
