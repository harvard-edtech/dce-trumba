"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TrumbaErrorCode_1 = __importDefault(require("../../types/TrumbaErrorCode"));
/**
 * Mapping of trumba error codes to our custom error codes
 * @author Yuen Ler Chow
 */
var TRUMBA_CODE_MESSAGE_MAP = {
    webnamenotfound: TrumbaErrorCode_1.default.WebNameNotFound,
    accessdenied: TrumbaErrorCode_1.default.AccessDenied,
    unauthorized: TrumbaErrorCode_1.default.Unauthorized,
    invalidemail: TrumbaErrorCode_1.default.InvalidEmail,
    invalidphone: TrumbaErrorCode_1.default.InvalidPhone,
    notavailable: TrumbaErrorCode_1.default.NotAvailable,
    notsuppported: TrumbaErrorCode_1.default.NotSupported,
    beforestart: TrumbaErrorCode_1.default.BeforeStart,
    pastdeadline: TrumbaErrorCode_1.default.RegistrationDeadlineHasPassed,
    eventcancelled: TrumbaErrorCode_1.default.EventCancelled,
    eventfull: TrumbaErrorCode_1.default.EventFull,
    eventnotfound: TrumbaErrorCode_1.default.EventNotFound,
    missingidentity: TrumbaErrorCode_1.default.MissingIdentity,
    requiredvalue: TrumbaErrorCode_1.default.RequiredValue,
    invalidvalue: TrumbaErrorCode_1.default.InvalidValue,
    incompatibleforms: TrumbaErrorCode_1.default.IncompatibleForms,
    incompatiblepayments: TrumbaErrorCode_1.default.IncompatiblePayments,
    notregistered: TrumbaErrorCode_1.default.NotRegistered,
    alreadyregistered: TrumbaErrorCode_1.default.AlreadyRegistered,
};
exports.default = TRUMBA_CODE_MESSAGE_MAP;
//# sourceMappingURL=TRUMBA_CODE_MESSAGE_MAP.js.map