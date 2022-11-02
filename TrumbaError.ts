/**
 * Custom Trumba error that contains a message and code
 * @author Gabe Abrams
 */
class TrumbaError extends Error {
  public message: string;
  public name: string;
  public code: string;
  public stack: string;
  public isTrumbaError: boolean;

  /**
   * Create a new Trumba error
   * @author Gabe Abrams
   * @param opts object containing all arguments
   * @param [opts.message] error message
   * @param [opts.code] error code
   * @param [opts.stack] stack trace to associate with the error
   */
  constructor(
    opts: {
      message?: string,
      code?: string,
      stack?: string,
    },
  ) {
    super(opts.message);

    this.message = opts.message || 'An unknown error occurred.';
    this.name = 'TrumbaError';
    this.code = String(opts.code || 'NOCODE1').toUpperCase();
    this.stack = opts.stack ?? new Error(this.message).stack ?? 'No Stack';

    this.isTrumbaError = true;
  }
}

export default TrumbaError;