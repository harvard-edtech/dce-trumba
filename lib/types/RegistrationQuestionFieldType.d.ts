/**
 * Type for a specific registration question field
 * @author Yuen Ler Chow
 */
declare enum RegistrationQuestionFieldType {
    ShortAnswer = 0,
    Multiline = 1,
    Number = 2,
    Boolean = 3,
    Currency = 4,
    ListOfChoices = 5,
    URL = 6,
    Email = 11,
    PhoneUS = 12,
    PhoneInternational = 13,
    PhoneUSNoExtension = 14,
    PhoneUSOptionalExtension = 15,
    InstructionalText = 18,
    SectionHeading = 19
}
export default RegistrationQuestionFieldType;
