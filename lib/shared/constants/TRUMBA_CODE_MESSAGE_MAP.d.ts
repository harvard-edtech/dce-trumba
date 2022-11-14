import TrumbaErrorCode from '../../types/TrumbaErrorCode';
/**
 * Mapping of trumba error codes to our custom error codes
 * @author Yuen Ler Chow
 */
declare const TRUMBA_CODE_MESSAGE_MAP: {
    [trumbaAPIErrorCode: string]: TrumbaErrorCode;
};
export default TRUMBA_CODE_MESSAGE_MAP;
