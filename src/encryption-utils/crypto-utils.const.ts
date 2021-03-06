import {HASH_CALCULATION_UTILS_HASH_ALGORITHM} from '../const';

export const CRYPTO_UTIL_KEYS_EXTRACTABLE = true;

export const CRYPTO_UTIL_KEY_ALGORITHM = 'RSA-OAEP';

export const CRYPTO_UTIL_KEY_DESC = {
  name: CRYPTO_UTIL_KEY_ALGORITHM,
  hash: {
    name: HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256,
  },
};

export enum eCRYPTO_UTILS_KEYS_USAGES {
  'encrypt' = 'encrypt',
  'decrypt' = 'decrypt',
  'sign' = 'sign',
  'verify' = 'verify',
  'deriveKey' = 'deriveKey',
  'deriveBits' = 'deriveBits',
  'wrapKey' = 'wrapKey',
  'unwrapKey' = 'unwrapKey',
}

export enum eCRYPTO_UTILS_KEYS_TYPES {
  public = 'public',
  private = 'private',
}

export const CRYPTO_UTIL_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.encrypt;

export const CRYPTO_UTIL_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.decrypt;

export const CRYPTO_UTIL_DATA_SIGN_PUBLIC_KEY_USAGE =
  eCRYPTO_UTILS_KEYS_USAGES.verify;

export const CRYPTO_UTIL_DATA_SIGN_PRIVATE_KEY_USAGE =
  eCRYPTO_UTILS_KEYS_USAGES.sign;

export const CRYPTO_UTIL_ENCRYPTION_KEY_TYPE = eCRYPTO_UTILS_KEYS_TYPES.public;

export const CRYPTO_UTIL_DESCRIPTION_KEY_TYPE =
  eCRYPTO_UTILS_KEYS_TYPES.private;

export const CRYPTO_UTIL_KEYPAIR_USAGES = [
  CRYPTO_UTIL_PUBLIC_KEY_USAGE,
  CRYPTO_UTIL_PRIVATE_KEY_USAGE,
];

export const CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = {
  ...CRYPTO_UTIL_KEY_DESC,
  modulusLength: 3072,
  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
};

export const CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = 'jwk';

export const CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = 'publicKey';

export const CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = 'privateKey';

export const CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = 'salt';

export const INITIALIZATION_VECTOR_DEFAULT_LENGTH = 12;
