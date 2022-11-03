/**
 * List of custom Trumba error codes
 * @author Gabe Abrams
 */

// Highest error is TRB2

enum ErrorCode {
  // Registration errors

  RegistrationDeadlineHasPassed = 'TRB1',
  ManyErrors = 'TRB2',

}

export default ErrorCode;
