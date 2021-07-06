import { TCryptoUtilEncryptDataTypes, TCryptoUtilEncryptDataTypesNative, TCryptoUtilEncryptKeyTypes, TCryptoUtilsEncryptDataKeyConfig, TCryptoUtilsDataWithInitializationVector } from './crypto-utils.types';
/**
 * return a random vector, used e.g. for aes-gcm
 * encryption
 * @param vectorLength - length of the vector generated
 */
export declare const generateInitializationVectorNative: (vectorLength?: number) => Uint8Array | Error;
export declare const generateInitializationVectorNativeArrayBuffer: (vectorLength?: number | undefined) => ArrayBuffer | Error;
export declare const concatDataWithInitializationVector: (options: TCryptoUtilsDataWithInitializationVector) => ArrayBuffer | Error;
export declare const getInitializationVectorFromData: (arrayBuffer: ArrayBuffer, ivLengthBytes?: number) => TCryptoUtilsDataWithInitializationVector | Error;
export declare const getInitializationVectorFromDataString: (data: string, ivLengthBytes?: number | undefined) => TCryptoUtilsDataWithInitializationVector | Error;
export declare const encryptNative: (key: CryptoKey, data: TCryptoUtilEncryptDataTypesNative, cryptoKeyConfig?: TCryptoUtilsEncryptDataKeyConfig) => Promise<ArrayBuffer | Error>;
export declare const encryptToTypedArray: (key: TCryptoUtilEncryptKeyTypes, data: TCryptoUtilEncryptDataTypes, cryptoKeyConfig?: TCryptoUtilsEncryptDataKeyConfig | undefined) => Promise<ArrayBuffer | Error>;
export declare const encryptToString: (key: TCryptoUtilEncryptKeyTypes, data: TCryptoUtilEncryptDataTypes, cryptoKeyConfig?: TCryptoUtilsEncryptDataKeyConfig | undefined) => Promise<string | Error>;
