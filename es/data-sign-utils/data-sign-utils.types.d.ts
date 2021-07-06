import { TTypedArrays } from '@pashoo2/typed-array-utils';
import { DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME } from './data-sign-utils.const';
import { DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME, DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME } from './data-sign-utils.const';
export declare type TDataSignUtilKeyExportFormatType = JsonWebKey;
export declare type TDataSignUtilKeypairImportFormatType = {
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: CryptoKey;
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]?: CryptoKey;
};
export declare type TDataSignUtilSignDataTypesNative = TTypedArrays;
export declare type TDataSignUtilSignDataTypes = object | string | number | TDataSignUtilSignDataTypesNative;
export declare type TDataSignUtilSignKeyTypes = CryptoKey | CryptoKeyPair | string | TDataSignUtilKeypairExportFormatType | TDataSignUtilKeypairImportFormatType;
export declare type TDataSignUtilVerifyKeyTypes = CryptoKey | CryptoKeyPair | string | TDataSignUtilKeypairExportFormatType | TDataSignUtilKeypairImportFormatType;
export declare type TDataSignUtilImportKeyTypes = JsonWebKey | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
export declare type TDataSignUtilVerifyDataTypesNative = TTypedArrays;
export declare type TDataSignUtilVerifyDataTypes = string | TTypedArrays;
export declare type TDataSignUtilVerifyDataTypesExtended = TDataSignUtilVerifyDataTypes | {};
export declare type TDataSignUtilKeypairExportFormatType = {
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TDataSignUtilImportKeyTypes;
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]?: string | TDataSignUtilImportKeyTypes;
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: string | TDataSignUtilImportKeyTypes;
};
export declare type TDataSignUtilKeypairImportType = {
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TDataSignUtilImportKeyTypes;
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]?: TDataSignUtilImportKeyTypes;
    [DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: TDataSignUtilImportKeyTypes;
};
