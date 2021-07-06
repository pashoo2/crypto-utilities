import {eCRYPTO_UTILS_KEYS_USAGES} from '../encryption-utils/crypto-utils.const';
import {HASH_CALCULATION_UTILS_HASH_ALGORITHM} from '../const';
export const DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE = true;

export const DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM = 'ECDSA';

export const DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM =
  HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256;

export const DATA_SIGN_CRYPTO_UTIL_KEY_DESC = {
  name: DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM,
  namedCurve: 'P-256',
};

export const DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE =
  eCRYPTO_UTILS_KEYS_USAGES.verify;

export const DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE =
  eCRYPTO_UTILS_KEYS_USAGES.sign;

export const DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE = 'public';

export const DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE = 'private';

export const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES = [
  DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE,
  DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE,
];

export const DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = {
  ...DATA_SIGN_CRYPTO_UTIL_KEY_DESC,
};

export const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = 'jwk';

export const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = 'publicKey';

export const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = 'privateKey';

export const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = 'salt';

export const DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS = {
  name: DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM,
  hash: {name: DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM},
};

export const KEY_NOT_FOUND_ERROR_MESSAGE =
  'A key of the required type was not found';