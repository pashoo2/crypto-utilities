import {isTypedArray, convertToTypedArray} from '@pashoo2/typed-array-utils';
import {stringify} from '@pashoo2/serialization-utils';

import {
  DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE,
  DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS,
} from './data-sign-utils.const';
import {
  TDataSignUtilVerifyDataTypes,
  TDataSignUtilVerifyDataTypesExtended,
  TDataSignUtilVerifyDataTypesNative,
  TDataSignUtilVerifyKeyTypes,
} from './data-sign-utils.types';
import {dataSignGetKeyOfType} from './keys.data-sign-utils';
import {cryptoModuleDataSign} from '../init';

export const verifyNative = async (
  key: CryptoKey,
  data: TDataSignUtilVerifyDataTypesNative,
  signature: TDataSignUtilVerifyDataTypesNative
): Promise<true | Error> => {
  if (key.type !== DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE) {
    return new Error(
      `The type of the key ${key.type} may not be used for data decryption`
    );
  }
  if (!isTypedArray(data)) {
    return new Error('The data type is not supported');
  }
  try {
    const res = await cryptoModuleDataSign.verify(
      {...DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS},
      key,
      signature,
      data
    );

    return res !== true
      ? new Error('The signature for the data is not valid')
      : true;
  } catch (err) {
    return err;
  }
};

export const verifyData = async (
  key: TDataSignUtilVerifyKeyTypes,
  data: TDataSignUtilVerifyDataTypesExtended,
  signature: TDataSignUtilVerifyDataTypes
): Promise<true | Error> => {
  const k = await dataSignGetKeyOfType(
    key,
    DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE
  );

  if (k instanceof Error) {
    return k;
  }

  let d;

  if (isTypedArray(data)) {
    d = data;
  } else if (typeof data === 'object' && !(data instanceof Error)) {
    try {
      d = stringify(data);
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

  const s =
    typeof signature === 'string' ? convertToTypedArray(signature) : signature;

  if (s instanceof Error) {
    return s;
  }
  return verifyNative(k, d, s);
};
