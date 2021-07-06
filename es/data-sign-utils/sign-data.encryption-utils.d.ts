import { TDataSignUtilSignDataTypes, TDataSignUtilSignDataTypesNative, TDataSignUtilSignKeyTypes } from './data-sign-utils.types';
export declare const signNative: (key: CryptoKey, data: TDataSignUtilSignDataTypesNative) => Promise<ArrayBuffer | Error>;
export declare const signToTypedArray: (key: TDataSignUtilSignKeyTypes, data: TDataSignUtilSignDataTypes) => Promise<ArrayBuffer | Error>;
export declare const signToString: (key: TDataSignUtilSignKeyTypes, data: TDataSignUtilSignDataTypes) => Promise<string | Error>;
