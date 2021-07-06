import {encodeArrayBufferToDOMString} from '@pashoo2/typed-array-utils';

import {eCRYPTO_UTILS_KEYS_USAGES} from '../encryption-utils/crypto-utils.const';
import {crypto} from '../init';
import {
  calculateHashNative,
  calculateHash,
} from '../hash-calculation-utils/hash-calculation-utils';
import {
  CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS,
  CONST_CRYPTO_KEYS_TYPES,
} from '../const';
import {
  ENCRYPTIONS_KEYS_UTILS_JWK_FORMAT_OBJECT_KEYS,
  MIN_JWK_PROPS_COUNT,
  MIN_JWK_STRING_LENGTH,
} from './encryption-keys-utils.const';
import {
  HASH_CALCULATION_UTILS_HASH_ALGORITHM,
  HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM,
} from '../const';

export const isCryptoKey = (v: any): v is CryptoKey =>
  typeof v === 'object' &&
  Object.getPrototypeOf(v)?.constructor?.name === 'CryptoKey';

export const isCryptoKeyPair = (
  keyPair: any,
  checkPrivateKeys = true
): keyPair is CryptoKeyPair => {
  return (
    typeof keyPair === 'object' &&
    isCryptoKey(keyPair.publicKey) &&
    (!checkPrivateKeys || isCryptoKey(keyPair.privateKey))
  );
};

export const isCryptoKeyIncludesUsages = (
  cryptoKey: CryptoKey,
  expectedUsages: eCRYPTO_UTILS_KEYS_USAGES[] | eCRYPTO_UTILS_KEYS_USAGES
): boolean => {
  const {usages} = cryptoKey;

  if (typeof expectedUsages === 'string') {
    return usages.includes(expectedUsages);
  }
  return usages.every(usage => (expectedUsages as string[]).includes(usage));
};

export const isCryptoKeyDataSign = (cryptoKey: any): cryptoKey is CryptoKey =>
  isCryptoKey(cryptoKey) &&
  isCryptoKeyIncludesUsages(cryptoKey, eCRYPTO_UTILS_KEYS_USAGES.sign);

export const isCryptoKeyDataVerify = (cryptoKey: any): cryptoKey is CryptoKey =>
  isCryptoKey(cryptoKey) &&
  isCryptoKeyIncludesUsages(cryptoKey, eCRYPTO_UTILS_KEYS_USAGES.verify);

export const isCryptoKeyDataEncryption = (
  cryptoKey: any
): cryptoKey is CryptoKey =>
  isCryptoKey(cryptoKey) &&
  isCryptoKeyIncludesUsages(cryptoKey, eCRYPTO_UTILS_KEYS_USAGES.encrypt);

export const isCryptoKeyDataDecryption = (
  cryptoKey: any
): cryptoKey is CryptoKey =>
  isCryptoKey(cryptoKey) &&
  isCryptoKeyIncludesUsages(cryptoKey, eCRYPTO_UTILS_KEYS_USAGES.decrypt);

export const isCryptoKeyPairExportedAsString = (keyPair: any): boolean => {
  return typeof keyPair === 'string' && keyPair.length >= MIN_JWK_STRING_LENGTH;
};

export const isJWK = (
  keyObject: object,
  isReturnError = false
): Error | boolean => {
  if (keyObject && typeof keyObject === 'object') {
    const options = Object.keys(keyObject);
    const optionsCount = options.length;

    if (optionsCount > MIN_JWK_PROPS_COUNT) {
      let idx = 0;
      let optionName: string;

      for (; idx < optionsCount; idx += 1) {
        optionName = options[idx];
        if (
          !ENCRYPTIONS_KEYS_UTILS_JWK_FORMAT_OBJECT_KEYS.includes(optionName)
        ) {
          return isReturnError
            ? new Error(`There is an unknown property ${optionName}`)
            : false;
        }
      }
      return true;
    }
  }
  return isReturnError ? new Error('There is a wrong format of JWK') : false;
};

export const getJWK = (
  key: any,
  isReturnError = false
): JsonWebKey | boolean | Error => {
  let keyObject = key;

  if (typeof key === 'string' && key.length > MIN_JWK_STRING_LENGTH) {
    try {
      keyObject = JSON.parse(key);
    } catch (e) {
      return e;
    }
  }

  const isJWKValid = isJWK(keyObject, isReturnError);

  if (isJWKValid === true) {
    return keyObject as JsonWebKey;
  }
  return isJWKValid instanceof Error
    ? isJWKValid
    : new Error('There is a wrong format of JWK');
};

export const getJWKOrError = (key: any): JsonWebKey | Error =>
  getJWK(key, true) as JsonWebKey | Error;

export const getJWKOrBool = (key: any): JsonWebKey | boolean =>
  getJWK(key, false) as JsonWebKey | boolean;

export const exportCryptoKeyInFormat = async (
  key: CryptoKey,
  format: CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS
): Promise<ArrayBuffer | JsonWebKey | Error> => {
  try {
    const result = await crypto.subtle.exportKey(format, key);

    if (result instanceof Error) {
      console.error(result);
      return new Error(
        'exportCryptoKeyInFormat::error returned from the exportKey'
      );
    }
    return result;
  } catch (err) {
    console.error(err);
    return new Error(
      'exportCryptoKeyInFormat::An error thrown when export the crypto key'
    );
  }
};

/**
 * calculates hash string of the crypto key
 * @param {CryptoKey} key
 */
export const calcCryptoKeyHash = async (
  key: CryptoKey,
  alg: HASH_CALCULATION_UTILS_HASH_ALGORITHM = HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM
): Promise<Error | string> => {
  if (!isCryptoKey(key)) {
    return new Error('Key os not an instance of CryptoKey');
  }
  if (!key.extractable) {
    return new Error('The crypto key is not extractable');
  }

  let format: CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS =
    CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.RAW;
  const keyAlgName = key.algorithm.name.toLowerCase();

  if (keyAlgName.includes('rsa-') || keyAlgName.includes('ecdsa')) {
    if (key.type.includes(CONST_CRYPTO_KEYS_TYPES.PUBLIC)) {
      format = CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.SPKI;
    } else {
      format = CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.PKCS8;
    }
  }

  const exportedCryptoKey = await exportCryptoKeyInFormat(key, format);

  if (exportedCryptoKey instanceof Error) {
    console.error(exportedCryptoKey);
    return new Error('Failed to export the crypto key in the RAW format');
  }

  const hashCalcResult = await calculateHashNative(
    exportedCryptoKey as ArrayBuffer,
    alg
  );

  if (hashCalcResult instanceof Error) {
    console.error(hashCalcResult);
    return new Error('Failed to calculate a hash for the exported crypto key');
  }
  return encodeArrayBufferToDOMString(hashCalcResult);
};

// allow to absent for a private keys in a pairs
export const calcCryptoKeyPairHash = async (
  cryptoPair: CryptoKeyPair
): Promise<Error | string> => {
  const pending = [calcCryptoKeyHash(cryptoPair.publicKey)];

  if (cryptoPair.privateKey) {
    pending.push(calcCryptoKeyHash(cryptoPair.privateKey));
  }

  const results = await Promise.all(pending);

  if (results[0] instanceof Error) {
    return new Error('Failed to calculate hash of the private key');
  }
  if (results[1] instanceof Error) {
    return new Error('Failed to calculate hash of the public key');
  }
  return calculateHash(`${results[0]}___${results[1]}`);
};
