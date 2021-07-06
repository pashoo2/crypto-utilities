import { TTypedArrays } from '@pashoo2/typed-array-utils';
import { CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME } from './crypto-utils.const';
import { CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME, CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME } from './crypto-utils.const';
export declare type TCryptoUtilImportKeyTypes = TTypedArrays | ArrayBuffer;
export declare type TCryptoUtilKeyExportFormatType = Object;
export declare type TCryptoUtilKeypairExportFormatType = {
    [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TCryptoUtilImportKeyTypes;
    [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: string | TCryptoUtilImportKeyTypes;
    [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: string | TCryptoUtilImportKeyTypes;
};
export declare type TCryptoUtilKeypairPreImportFormatType = {
    [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TCryptoUtilImportKeyTypes;
    [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: TCryptoUtilImportKeyTypes;
    [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: TCryptoUtilImportKeyTypes;
};
export declare type TCryptoUtilKeypairImportFormatType = {
    [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: CryptoKey;
    [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]?: CryptoKey;
    [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: string;
};
export declare type TCryptoUtilEncryptDataTypesNative = TTypedArrays;
export declare type TCryptoUtilEncryptDataTypes = object | string | number | TCryptoUtilEncryptDataTypesNative;
export declare type TCryptoUtilEncryptKeyTypes = CryptoKey | CryptoKeyPair | string | TCryptoUtilKeypairExportFormatType | TCryptoUtilKeypairImportFormatType;
export declare type TCryptoUtilDecryptKeyTypes = CryptoKey | CryptoKeyPair | string | TCryptoUtilKeypairExportFormatType | TCryptoUtilKeypairImportFormatType;
export declare type TCryptoUtilDecryptDataTypesNative = TTypedArrays;
export declare type TCryptoUtilDecryptDataTypes = string | TTypedArrays;
export declare type TCryptoUtilsEncryptDataKeyConfig = string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams;
export declare type TCryptoUtilsDataWithInitializationVector = {
    iv: ArrayBuffer;
    data: ArrayBuffer;
};
export declare type TCryptoUtilsDecryptDataKeyConfig = string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams;
