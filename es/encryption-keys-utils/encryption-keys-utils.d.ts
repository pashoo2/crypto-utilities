import { eCRYPTO_UTILS_KEYS_USAGES } from '../encryption-utils/crypto-utils.const';
import { CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS } from '../const';
import { HASH_CALCULATION_UTILS_HASH_ALGORITHM } from '../const';
export declare const isCryptoKey: (v: any) => v is CryptoKey;
export declare const isCryptoKeyPair: (keyPair: any, checkPrivateKeys?: boolean) => keyPair is CryptoKeyPair;
export declare const isCryptoKeyIncludesUsages: (cryptoKey: CryptoKey, expectedUsages: eCRYPTO_UTILS_KEYS_USAGES[] | eCRYPTO_UTILS_KEYS_USAGES) => boolean;
export declare const isCryptoKeyDataSign: (cryptoKey: any) => cryptoKey is CryptoKey;
export declare const isCryptoKeyDataVerify: (cryptoKey: any) => cryptoKey is CryptoKey;
export declare const isCryptoKeyDataEncryption: (cryptoKey: any) => cryptoKey is CryptoKey;
export declare const isCryptoKeyDataDecryption: (cryptoKey: any) => cryptoKey is CryptoKey;
export declare const isCryptoKeyPairExportedAsString: (keyPair: any) => boolean;
export declare const isJWK: (keyObject: object, isReturnError?: boolean) => Error | boolean;
export declare const getJWK: (key: any, isReturnError?: boolean) => JsonWebKey | boolean | Error;
export declare const getJWKOrError: (key: any) => JsonWebKey | Error;
export declare const getJWKOrBool: (key: any) => JsonWebKey | boolean;
export declare const exportCryptoKeyInFormat: (key: CryptoKey, format: CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS) => Promise<ArrayBuffer | JsonWebKey | Error>;
/**
 * calculates hash string of the crypto key
 * @param {CryptoKey} key
 */
export declare const calcCryptoKeyHash: (key: CryptoKey, alg?: HASH_CALCULATION_UTILS_HASH_ALGORITHM) => Promise<Error | string>;
export declare const calcCryptoKeyPairHash: (cryptoPair: CryptoKeyPair) => Promise<Error | string>;
