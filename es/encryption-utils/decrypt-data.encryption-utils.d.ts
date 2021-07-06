import { TCryptoUtilDecryptDataTypes, TCryptoUtilDecryptDataTypesNative, TCryptoUtilDecryptKeyTypes, TCryptoUtilsDecryptDataKeyConfig } from './crypto-utils.types';
export declare const decryptNative: (key: CryptoKey, data: TCryptoUtilDecryptDataTypesNative, decryptKeyParams?: TCryptoUtilsDecryptDataKeyConfig) => Promise<ArrayBuffer | Error>;
export declare const decryptDataFromString: (key: TCryptoUtilDecryptKeyTypes, data: TCryptoUtilDecryptDataTypes | object, decryptKeyParams?: TCryptoUtilsDecryptDataKeyConfig | undefined) => Promise<ArrayBuffer | Error>;
export declare const decryptData: (key: TCryptoUtilDecryptKeyTypes, data: TCryptoUtilDecryptDataTypes, decryptKeyParams?: TCryptoUtilsDecryptDataKeyConfig | undefined) => Promise<string | Error>;
