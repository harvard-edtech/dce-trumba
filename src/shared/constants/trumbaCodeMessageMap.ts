import ErrorCode from '../types/ErrorCode';

const trumbaCodeMessageMap: {
  [index: string]: ErrorCode
} = {
  webnamenotfound: ErrorCode.WebNameNotFound,
  accessdenied: ErrorCode.AccessDenied,
  unauthorized: ErrorCode.Unauthorized,
  invalidemail: ErrorCode.InvalidEmail,
  invalidphone: ErrorCode.InvalidPhone,
  notavailable: ErrorCode.NotAvailable,
  notsuppported: ErrorCode.NotSupported,
  beforestart: ErrorCode.BeforeStart,
  pastdeadline: ErrorCode.RegistrationDeadlineHasPassed,
  eventcancelled: ErrorCode.EventCancelled,
  eventfull: ErrorCode.EventFull,
  eventnotfound: ErrorCode.EventNotFound,
  missingidentity: ErrorCode.MissingIdentity,
  requiredvalue: ErrorCode.RequiredValue,
  invalidvalue: ErrorCode.InvalidValue,
  incompatibleforms: ErrorCode.IncompatibleForms,
  incompatiblepayments: ErrorCode.IncompatiblePayments,
  notregistered: ErrorCode.NotRegistered,
  alreadyregistered: ErrorCode.AlreadyRegistered,
};

export default trumbaCodeMessageMap;