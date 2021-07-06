import {
  convertToTypedArray,
  typedArrayToString,
  arrayBufferFromTypedArray,
  concatArrayBuffers,
  decodeDOMStringToArrayBuffer,
  getBytesFromArrayBuffer,
} from '@pashoo2/typed-array-utils';

import {
  CRYPTO_UTIL_KEY_DESC,
  CRYPTO_UTIL_ENCRYPTION_KEY_TYPE,
  INITIALIZATION_VECTOR_DEFAULT_LENGTH,
} from './crypto-utils.const';
import {
  TCryptoUtilEncryptDataTypes,
  TCryptoUtilEncryptDataTypesNative,
  TCryptoUtilEncryptKeyTypes,
  TCryptoUtilsEncryptDataKeyConfig,
  TCryptoUtilsDataWithInitializationVector,
} from './crypto-utils.types';
import {getKeyOfType} from './keys.encryption-utils';
import {IKeyValue} from '@pashoo2/serialization-utils';
import {cryptoModuleDataSign, crypto} from '../init';
import {isCryptoKey} from '../encryption-keys-utils/encryption-keys-utils';

/**
 * return a random vector, used e.g. for aes-gcm
 * encryption
 * @param vectorLength - length of the vector generated
 */
export const generateInitializationVectorNative = (
  vectorLength: number = INITIALIZATION_VECTOR_DEFAULT_LENGTH
): Uint8Array | Error => {
  try {
    return crypto.getRandomValues(new Uint8Array(vectorLength));
  } catch (err) {
    return err;
  }
};

export const generateInitializationVectorNativeArrayBuffer = (
  vectorLength?: number
): ArrayBuffer | Error => {
  const iv = generateInitializationVectorNative(vectorLength);

  if (iv instanceof Error) {
    return iv;
  }
  return arrayBufferFromTypedArray(iv);
};

export const concatDataWithInitializationVector = (
  options: TCryptoUtilsDataWithInitializationVector
): ArrayBuffer | Error => {
  try {
    return concatArrayBuffers(options.iv, options.data);
  } catch (err) {
    return err;
  }
};

export const getInitializationVectorFromData = (
  arrayBuffer: ArrayBuffer,
  ivLengthBytes: number = INITIALIZATION_VECTOR_DEFAULT_LENGTH
): TCryptoUtilsDataWithInitializationVector | Error => {
  try {
    const iv = getBytesFromArrayBuffer(arrayBuffer, 0, ivLengthBytes);

    if (iv instanceof Error) {
      return iv;
    }

    const data = getBytesFromArrayBuffer(arrayBuffer, ivLengthBytes);

    if (data instanceof Error) {
      return data;
    }
    return {
      iv,
      data,
    };
  } catch (err) {
    return err;
  }
};

export const getInitializationVectorFromDataString = (
  data: string,
  ivLengthBytes?: number
): TCryptoUtilsDataWithInitializationVector | Error => {
  const dataArrayBuffer = decodeDOMStringToArrayBuffer(data);

  if (dataArrayBuffer instanceof Error) {
    return dataArrayBuffer;
  }
  return getInitializationVectorFromData(dataArrayBuffer, ivLengthBytes);
};

export const encryptNative = async (
  // crypto key using for data encryption
  // a public key of the user in the current implementation
  key: CryptoKey,
  data: TCryptoUtilEncryptDataTypesNative,
  //an optional params for the encryption method
  cryptoKeyConfig: TCryptoUtilsEncryptDataKeyConfig = CRYPTO_UTIL_KEY_DESC
): Promise<ArrayBuffer | Error> => {
  try {
    const res = await cryptoModuleDataSign.encrypt(cryptoKeyConfig, key, data);

    return res;
  } catch (err) {
    return err;
  }
};

export const encryptToTypedArray = async (
  // crypto key using for data encryption
  // a public key of the user in the current implementation
  key: TCryptoUtilEncryptKeyTypes,
  data: TCryptoUtilEncryptDataTypes,
  //an optional params for the encryption method
  cryptoKeyConfig?: TCryptoUtilsEncryptDataKeyConfig
): Promise<ArrayBuffer | Error> => {
  let k;

  if (isCryptoKey(key)) {
    k = key;
  } else {
    k = await getKeyOfType(key, CRYPTO_UTIL_ENCRYPTION_KEY_TYPE);
  }
  if (k instanceof Error) {
    return k;
  }

  const d = convertToTypedArray(data as IKeyValue);

  if (d instanceof Error) {
    return d;
  }

  return encryptNative(k, d, cryptoKeyConfig);
};

export const encryptToString = async (
  // crypto key using for data encryption
  // a public key of the user in the current implementation
  key: TCryptoUtilEncryptKeyTypes,
  data: TCryptoUtilEncryptDataTypes,
  //an optional params for the encryption method
  cryptoKeyConfig?: TCryptoUtilsEncryptDataKeyConfig
): Promise<string | Error> => {
  const encryptedData = await encryptToTypedArray(key, data);

  if (encryptedData instanceof Error) {
    return encryptedData;
  }

  return typedArrayToString(encryptedData);
};
