import { TSaltUtilsSaltType } from './../encryption-utils/salt-utils.types';
import { TCryptoUtilEncryptDataTypes } from '../encryption-utils';
export declare const encryptDataToArrayBuffer: (key: string | CryptoKey, data: TCryptoUtilEncryptDataTypes) => Promise<Error | ArrayBuffer>;
export declare const encryptDataToString: (key: string | CryptoKey, data: TCryptoUtilEncryptDataTypes) => Promise<Error | string>;
export declare const encryptDataToUInt8Array: (key: string | CryptoKey, data: TCryptoUtilEncryptDataTypes) => Promise<Error | Uint8Array>;
export declare const encryptDataWithPassword: (password: string, salt: TSaltUtilsSaltType, data: TCryptoUtilEncryptDataTypes) => Promise<Error | string>;
export declare const encryptDataWithPasswordToArrayBuffer: (password: string, salt: TSaltUtilsSaltType, data: TCryptoUtilEncryptDataTypes) => Promise<Error | ArrayBuffer>;
