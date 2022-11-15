/**
 * Authorization credentials for Trumba (must be an active Trumba user)
 * @author Yuen Ler Chow
 */
type TrumbaAuth = {
  // Username/email address for the account
  username: string,
  // The password associated with the username
  password: string,
};

export default TrumbaAuth;