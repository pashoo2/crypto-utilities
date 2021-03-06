import {
  decodeDOMStringToArrayBuffer,
  encodeArrayBufferToDOMString,
} from '@pashoo2/typed-array-utils';

import {
  importPasswordKeyFromString,
  generatePasswordKeyByPasswordString,
} from './derive-key.password-utils';
import {getInitializationVectorFromData} from '../encryption-utils/encrypt-data.encryption-utils';
import {decryptDataFromString} from '../encryption-utils/decrypt-data.encryption-utils';
import {PASSWORD_ENCRYPTION_UTILS_DECRYPTION_PARAMS} from './password-utils.const';
import {TSaltUtilsSaltType} from '../encryption-utils/salt-utils.types';
import {isCryptoKey} from '../encryption-keys-utils/encryption-keys-utils';

export const decryptDataWithKeyNative = async (
  key: string | CryptoKey,
  dataWithIv: ArrayBuffer
): Promise<ArrayBuffer | Error> => {
  let cryptoKey;

  if (isCryptoKey(key)) {
    cryptoKey = key;
  } else {
    cryptoKey = await importPasswordKeyFromString(key);
  }
  if (cryptoKey instanceof Error) {
    return cryptoKey;
  }

  const dataWithIvStructure = getInitializationVectorFromData(dataWithIv);

  if (dataWithIvStructure instanceof Error) {
    return dataWithIvStructure;
  }

  const {iv, data} = dataWithIvStructure;

  return decryptDataFromString(cryptoKey, data, {
    ...PASSWORD_ENCRYPTION_UTILS_DECRYPTION_PARAMS,
    iv,
  });
};

export const decryptDataWithKey = async (
  key: string | CryptoKey,
  dataWithIv: string
): Promise<string | Error> => {
  const dataWithIvArrayBuffer = decodeDOMStringToArrayBuffer(dataWithIv);

  if (dataWithIvArrayBuffer instanceof Error) {
    return dataWithIvArrayBuffer;
  }

  const decryptedArrayBuffer = await decryptDataWithKeyNative(
    key,
    dataWithIvArrayBuffer
  );

  if (decryptedArrayBuffer instanceof Error) {
    return decryptedArrayBuffer;
  }

  return encodeArrayBufferToDOMString(decryptedArrayBuffer);
};

export const decryptDataWithKeyFromUint8Array = async (
  key: string | CryptoKey,
  dataWithIv: Uint8Array
): Promise<string | Error> => {
  const decryptedArrayBuffer = await decryptDataWithKeyNative(key, dataWithIv);

  if (decryptedArrayBuffer instanceof Error) {
    return decryptedArrayBuffer;
  }

  return encodeArrayBufferToDOMString(decryptedArrayBuffer);
};

export const decryptDataArrayOrStringWithKeyToUInt8Array = async (
  key: string | CryptoKey,
  dataWithIv: Uint8Array | string
): Promise<Uint8Array | Error> => {
  const dataWithIvArrayBuffer: ArrayBuffer | Error =
    typeof dataWithIv === 'string'
      ? decodeDOMStringToArrayBuffer(dataWithIv)
      : dataWithIv.buffer;

  if (dataWithIvArrayBuffer instanceof Error) {
    return dataWithIvArrayBuffer;
  }

  const decryptedArrayBuffer = await decryptDataWithKeyNative(
    key,
    dataWithIvArrayBuffer
  );

  if (decryptedArrayBuffer instanceof Error) {
    return decryptedArrayBuffer;
  }

  return new Uint8Array(decryptedArrayBuffer);
};

export const decryptDataByPassword = async (
  password: string,
  salt: TSaltUtilsSaltType,
  dataWithIv: string
): Promise<string | Error> => {
  const key = await generatePasswordKeyByPasswordString(password, salt);

  if (key instanceof Error) {
    console.error(key);
    return key;
  }
  return decryptDataWithKey(key, dataWithIv);
};
