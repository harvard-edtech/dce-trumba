"use strict";
/**
 * List of custom Trumba error codes
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Highest error is TRB2
var ErrorCode;
(function (ErrorCode) {
    // Registration errors
    ErrorCode["UnknownError"] = "TRB0";
    ErrorCode["WebNameNotFound"] = "TRB1";
    ErrorCode["AccessDenied"] = "TRB2";
    ErrorCode["Unauthorized"] = "TRB3";
    ErrorCode["InvalidEmail"] = "TRB4";
    ErrorCode["InvalidPhone"] = "TRB5";
    ErrorCode["NotAvailable"] = "TRB6";
    ErrorCode["NotSupported"] = "TRB7";
    ErrorCode["BeforeStart"] = "TRB8";
    ErrorCode["RegistrationDeadlineHasPassed"] = "TRB9";
    ErrorCode["EventCancelled"] = "TRB10";
    ErrorCode["EventFull"] = "TRB11";
    ErrorCode["EventNotFound"] = "TRB12";
    ErrorCode["MissingIdentity"] = "TRB13";
    ErrorCode["RequiredValue"] = "TRB14";
    ErrorCode["InvalidValue"] = "TRB15";
    ErrorCode["IncompatibleForms"] = "TRB16";
    ErrorCode["IncompatiblePayments"] = "TRB17";
    ErrorCode["NotRegistered"] = "TRB18";
    ErrorCode["AlreadyRegistered"] = "TRB19";
})(ErrorCode || (ErrorCode = {}));
exports.default = ErrorCode;
//# sourceMappingURL=ErrorCode.js.map