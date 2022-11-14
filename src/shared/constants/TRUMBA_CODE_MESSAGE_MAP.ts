import TrumbaErrorCode from '../../types/TrumbaErrorCode';

/**
 * Mapping of trumba error codes to our custom error codes
 * @author Yuen Ler Chow
 */
const TRUMBA_CODE_MESSAGE_MAP: {
  [trumbaAPIErrorCode: string]: TrumbaErrorCode
} = {
  webnamenotfound: TrumbaErrorCode.WebNameNotFound,
  accessdenied: TrumbaErrorCode.AccessDenied,
  unauthorized: TrumbaErrorCode.Unauthorized,
  invalidemail: TrumbaErrorCode.InvalidEmail,
  invalidphone: TrumbaErrorCode.InvalidPhone,
  notavailable: TrumbaErrorCode.NotAvailable,
  notsuppported: TrumbaErrorCode.NotSupported,
  beforestart: TrumbaErrorCode.BeforeStart,
  pastdeadline: TrumbaErrorCode.RegistrationDeadlineHasPassed,
  eventcancelled: TrumbaErrorCode.EventCancelled,
  eventfull: TrumbaErrorCode.EventFull,
  eventnotfound: TrumbaErrorCode.EventNotFound,
  missingidentity: TrumbaErrorCode.MissingIdentity,
  requiredvalue: TrumbaErrorCode.RequiredValue,
  invalidvalue: TrumbaErrorCode.InvalidValue,
  incompatibleforms: TrumbaErrorCode.IncompatibleForms,
  incompatiblepayments: TrumbaErrorCode.IncompatiblePayments,
  notregistered: TrumbaErrorCode.NotRegistered,
  alreadyregistered: TrumbaErrorCode.AlreadyRegistered,
};

export default TRUMBA_CODE_MESSAGE_MAP;