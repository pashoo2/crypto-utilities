import {
  convertToTypedArray,
  typedArrayToString,
} from '@pashoo2/typed-array-utils';

import {
  DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS,
  DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE,
} from './data-sign-utils.const';
import {
  TDataSignUtilSignDataTypes,
  TDataSignUtilSignDataTypesNative,
  TDataSignUtilSignKeyTypes,
} from './data-sign-utils.types';
import {dataSignGetKeyOfType} from './keys.data-sign-utils';
import {cryptoModuleDataSign} from '../init';
import {IKeyValue} from '@pashoo2/serialization-utils';

export const signNative = async (
  key: CryptoKey,
  data: TDataSignUtilSignDataTypesNative
): Promise<ArrayBuffer | Error> => {
  if (key.type !== DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE) {
    return new Error(
      `The type of the key ${key.type} may not be used for data signing`
    );
  }
  try {
    const res = await cryptoModuleDataSign.sign(
      {...DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS},
      key,
      data
    );

    return res;
  } catch (err) {
    return err;
  }
};

export const signToTypedArray = async (
  // crypto key using for data encryption
  // a public key of the user in the current implementation
  key: TDataSignUtilSignKeyTypes,
  data: TDataSignUtilSignDataTypes
): Promise<ArrayBuffer | Error> => {
  const k = await dataSignGetKeyOfType(
    key,
    DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE
  );

  if (k instanceof Error) {
    return k;
  }

  const d = convertToTypedArray(data as IKeyValue);

  if (d instanceof Error) {
    return d;
  }

  return signNative(k, d);
};

export const signToString = async (
  // crypto key using for data encryption
  // a public key of the user in the current implementation
  key: TDataSignUtilSignKeyTypes,
  data: TDataSignUtilSignDataTypes
): Promise<string | Error> => {
  const signedHashData = await signToTypedArray(key, data);

  if (signedHashData instanceof Error) {
    return signedHashData;
  }

  return typedArrayToString(signedHashData);
};
