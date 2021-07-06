import { TDataSignUtilVerifyDataTypes, TDataSignUtilVerifyDataTypesExtended, TDataSignUtilVerifyDataTypesNative, TDataSignUtilVerifyKeyTypes } from './data-sign-utils.types';
export declare const verifyNative: (key: CryptoKey, data: TDataSignUtilVerifyDataTypesNative, signature: TDataSignUtilVerifyDataTypesNative) => Promise<true | Error>;
export declare const verifyData: (key: TDataSignUtilVerifyKeyTypes, data: TDataSignUtilVerifyDataTypesExtended, signature: TDataSignUtilVerifyDataTypes) => Promise<true | Error>;
