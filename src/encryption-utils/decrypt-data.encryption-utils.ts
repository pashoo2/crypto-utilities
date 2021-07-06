import {
  isTypedArray,
  convertToTypedArray,
  typedArrayToString,
} from '@pashoo2/typed-array-utils';
import {IKeyValue, stringify} from '@pashoo2/serialization-utils';

import {
  CRYPTO_UTIL_DESCRIPTION_KEY_TYPE,
  CRYPTO_UTIL_KEY_DESC,
} from './crypto-utils.const';
import {
  TCryptoUtilDecryptDataTypes,
  TCryptoUtilDecryptDataTypesNative,
  TCryptoUtilDecryptKeyTypes,
  TCryptoUtilsDecryptDataKeyConfig,
} from './crypto-utils.types';
import {getKeyOfType} from './keys.encryption-utils';
import {cryptoModuleDataSign} from '../init';
import {isCryptoKey} from '../encryption-keys-utils/encryption-keys-utils';

export const decryptNative = async (
  key: CryptoKey,
  data: TCryptoUtilDecryptDataTypesNative,
  decryptKeyParams: TCryptoUtilsDecryptDataKeyConfig = CRYPTO_UTIL_KEY_DESC
): Promise<ArrayBuffer | Error> => {
  if (!isTypedArray(data)) {
    return new Error('The data type is not supported');
  }
  try {
    const res = await cryptoModuleDataSign.decrypt(decryptKeyParams, key, data);

    return res;
  } catch (err) {
    return err;
  }
};

export const decryptDataFromString = async (
  key: TCryptoUtilDecryptKeyTypes,
  data: TCryptoUtilDecryptDataTypes | object,
  decryptKeyParams?: TCryptoUtilsDecryptDataKeyConfig
): Promise<ArrayBuffer | Error> => {
  let k;

  if (isCryptoKey(key)) {
    k = key;
  } else {
    k = await getKeyOfType(key, CRYPTO_UTIL_DESCRIPTION_KEY_TYPE);
  }
  if (k instanceof Error) {
    return k;
  }

  let d;

  if (isTypedArray(data)) {
    d = data;
  } else if (typeof data === 'object' && !(data instanceof Error)) {
    try {
      d = stringify(data as IKeyValue);
    } catch (err) {
      return err;
    }
    d = convertToTypedArray(d);
  } else if (typeof data === 'string') {
    d = convertToTypedArray(data);
  } else {
    return new Error('Unsupported data type');
  }
  if (d instanceof Error) {
    return d;
  }
  return decryptNative(k, d, decryptKeyParams);
};

export const decryptData = async (
  key: TCryptoUtilDecryptKeyTypes,
  data: TCryptoUtilDecryptDataTypes,
  decryptKeyParams?: TCryptoUtilsDecryptDataKeyConfig
): Promise<string | Error> => {
  const decryptedData = await decryptDataFromString(
    key,
    data,
    decryptKeyParams
  );

  if (decryptedData instanceof Error) {
    return decryptedData;
  }
  return typedArrayToString(decryptedData);
};
