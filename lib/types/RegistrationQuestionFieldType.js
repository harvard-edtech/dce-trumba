"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type for a specific registration question field
 * @author Yuen Ler Chow
 */
var RegistrationQuestionFieldType;
(function (RegistrationQuestionFieldType) {
    // Single line of text
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["ShortAnswer"] = 0] = "ShortAnswer";
    // Multiple lines of text
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["Multiline"] = 1] = "Multiline";
    // Number
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["Number"] = 2] = "Number";
    // True/false
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["Boolean"] = 3] = "Boolean";
    // Money
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["Currency"] = 4] = "Currency";
    // Choose one from a list of choices
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["ListOfChoices"] = 5] = "ListOfChoices";
    // Standard URL
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["URL"] = 6] = "URL";
    // Standard email
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["Email"] = 11] = "Email";
    // Standard US phone number
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["PhoneUS"] = 12] = "PhoneUS";
    // International phone number
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["PhoneInternational"] = 13] = "PhoneInternational";
    // Standard US phone number that does not have an extension
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["PhoneUSNoExtension"] = 14] = "PhoneUSNoExtension";
    // Standard US phone number that might have an extension
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["PhoneUSOptionalExtension"] = 15] = "PhoneUSOptionalExtension";
    // Block of instructional text (not to be filled out)
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["InstructionalText"] = 18] = "InstructionalText";
    // Heading (not to be filled out)
    RegistrationQuestionFieldType[RegistrationQuestionFieldType["SectionHeading"] = 19] = "SectionHeading";
})(RegistrationQuestionFieldType || (RegistrationQuestionFieldType = {}));
exports.default = RegistrationQuestionFieldType;
//# sourceMappingURL=RegistrationQuestionFieldType.js.map