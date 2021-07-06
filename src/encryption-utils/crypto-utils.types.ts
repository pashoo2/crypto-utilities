import {TTypedArrays} from '@pashoo2/typed-array-utils';

import {CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME} from './crypto-utils.const';
import {
  CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME,
  CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME,
} from './crypto-utils.const';

export type TCryptoUtilImportKeyTypes = TTypedArrays | ArrayBuffer;

export type TCryptoUtilKeyExportFormatType = Object;

export type TCryptoUtilKeypairExportFormatType = {
  [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TCryptoUtilImportKeyTypes;
  [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: string | TCryptoUtilImportKeyTypes;
  [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: string | TCryptoUtilImportKeyTypes;
};

export type TCryptoUtilKeypairPreImportFormatType = {
  [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: TCryptoUtilImportKeyTypes;
  [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: TCryptoUtilImportKeyTypes;
  [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: TCryptoUtilImportKeyTypes;
};

export type TCryptoUtilKeypairImportFormatType = {
  [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: CryptoKey;
  [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]?: CryptoKey;
  [CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]?: string;
};

export type TCryptoUtilEncryptDataTypesNative = TTypedArrays;

export type TCryptoUtilEncryptDataTypes =
  | object
  | string
  | number
  | TCryptoUtilEncryptDataTypesNative;

export type TCryptoUtilEncryptKeyTypes =
  | CryptoKey
  | CryptoKeyPair
  | string
  | TCryptoUtilKeypairExportFormatType
  | TCryptoUtilKeypairImportFormatType;

export type TCryptoUtilDecryptKeyTypes =
  | CryptoKey
  | CryptoKeyPair
  | string
  | TCryptoUtilKeypairExportFormatType
  | TCryptoUtilKeypairImportFormatType;

export type TCryptoUtilDecryptDataTypesNative = TTypedArrays;

export type TCryptoUtilDecryptDataTypes = string | TTypedArrays;

export type TCryptoUtilsEncryptDataKeyConfig =
  | string
  | RsaOaepParams
  | AesCtrParams
  | AesCbcParams
  | AesCmacParams
  | AesGcmParams
  | AesCfbParams;

export type TCryptoUtilsDataWithInitializationVector = {
  iv: ArrayBuffer;
  data: ArrayBuffer;
};

export type TCryptoUtilsDecryptDataKeyConfig =
  | string
  | RsaOaepParams
  | AesCtrParams
  | AesCbcParams
  | AesCmacParams
  | AesGcmParams
  | AesCfbParams;
