"use strict";
/**
 * List of custom Trumba error codes
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Highest error is TRB2
var TrumbaErrorCode;
(function (TrumbaErrorCode) {
    // Registration errors
    TrumbaErrorCode["UnknownError"] = "TRB0";
    TrumbaErrorCode["WebNameNotFound"] = "TRB1";
    TrumbaErrorCode["AccessDenied"] = "TRB2";
    TrumbaErrorCode["Unauthorized"] = "TRB3";
    TrumbaErrorCode["InvalidEmail"] = "TRB4";
    TrumbaErrorCode["InvalidPhone"] = "TRB5";
    TrumbaErrorCode["NotAvailable"] = "TRB6";
    TrumbaErrorCode["NotSupported"] = "TRB7";
    TrumbaErrorCode["BeforeStart"] = "TRB8";
    TrumbaErrorCode["RegistrationDeadlineHasPassed"] = "TRB9";
    TrumbaErrorCode["EventCancelled"] = "TRB10";
    TrumbaErrorCode["EventFull"] = "TRB11";
    TrumbaErrorCode["EventNotFound"] = "TRB12";
    TrumbaErrorCode["MissingIdentity"] = "TRB13";
    TrumbaErrorCode["RequiredValue"] = "TRB14";
    TrumbaErrorCode["InvalidValue"] = "TRB15";
    TrumbaErrorCode["IncompatibleForms"] = "TRB16";
    TrumbaErrorCode["IncompatiblePayments"] = "TRB17";
    TrumbaErrorCode["NotRegistered"] = "TRB18";
    TrumbaErrorCode["AlreadyRegistered"] = "TRB19";
})(TrumbaErrorCode || (TrumbaErrorCode = {}));
exports.default = TrumbaErrorCode;
//# sourceMappingURL=TrumbaErrorCode.js.map