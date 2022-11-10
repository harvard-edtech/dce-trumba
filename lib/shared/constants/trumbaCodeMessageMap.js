"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode_1 = __importDefault(require("../types/ErrorCode"));
var trumbaCodeMessageMap = {
    webnamenotfound: ErrorCode_1.default.WebNameNotFound,
    accessdenied: ErrorCode_1.default.AccessDenied,
    unauthorized: ErrorCode_1.default.Unauthorized,
    invalidemail: ErrorCode_1.default.InvalidEmail,
    invalidphone: ErrorCode_1.default.InvalidPhone,
    notavailable: ErrorCode_1.default.NotAvailable,
    notsuppported: ErrorCode_1.default.NotSupported,
    beforestart: ErrorCode_1.default.BeforeStart,
    pastdeadline: ErrorCode_1.default.RegistrationDeadlineHasPassed,
    eventcancelled: ErrorCode_1.default.EventCancelled,
    eventfull: ErrorCode_1.default.EventFull,
    eventnotfound: ErrorCode_1.default.EventNotFound,
    missingidentity: ErrorCode_1.default.MissingIdentity,
    requiredvalue: ErrorCode_1.default.RequiredValue,
    invalidvalue: ErrorCode_1.default.InvalidValue,
    incompatibleforms: ErrorCode_1.default.IncompatibleForms,
    incompatiblepayments: ErrorCode_1.default.IncompatiblePayments,
    notregistered: ErrorCode_1.default.NotRegistered,
    alreadyregistered: ErrorCode_1.default.AlreadyRegistered,
};
exports.default = trumbaCodeMessageMap;
//# sourceMappingURL=trumbaCodeMessageMap.js.map