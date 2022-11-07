/**
 * List of custom Trumba error codes
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 */

// Highest error is TRB2

enum ErrorCode {
  // Registration errors
  WebNameNotFound = 'TRB1',
  AccessDenied = 'TRB2',
  Unauthorized = 'TRB3',
  InvalidEmail = 'TRB4',
  InvalidPhone = 'TRB5',
  NotAvailable = 'TRB6',
  NotSupported = 'TRB7',
  BeforeStart = 'TRB8',
  RegistrationDeadlineHasPassed = 'TRB9',
  EventCancelled = 'TRB10',
  EventFull = 'TRB11',
  EventNotFound = 'TRB12',
  MissingIdentity = 'TRB13',
  RequiredValue = 'TRB14',
  InvalidValue = 'TRB15',
  IncompatibleForms = 'TRB16',
  IncompatiblePayments = 'TRB17',
  NotRegistered = 'TRB18',
  AlreadyRegistered = 'TRB19',
}

export default ErrorCode;
