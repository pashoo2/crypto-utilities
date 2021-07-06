import {encodeArrayBufferToDOMString} from '@pashoo2/typed-array-utils';

import {TSaltUtilsSaltType} from './../encryption-utils/salt-utils.types';
import {PASSWORD_ENCRYPTION_UTILS_ENCRYPTION_PARAMS} from './password-utils.const';
import {concatDataWithInitializationVector} from '../encryption-utils/encrypt-data.encryption-utils';
import {
  encryptToTypedArray,
  generateInitializationVectorNativeArrayBuffer,
} from '../encryption-utils/encrypt-data.encryption-utils';
import {
  importPasswordKeyFromString,
  generatePasswordKeyByPasswordString,
} from './derive-key.password-utils';
import {TCryptoUtilEncryptDataTypes} from '../encryption-utils';
import {isCryptoKey} from '../encryption-keys-utils/encryption-keys-utils';

export const encryptDataToArrayBuffer = async (
  key: string | CryptoKey,
  data: TCryptoUtilEncryptDataTypes
): Promise<Error | ArrayBuffer> => {
  let cryptoKey;

  if (isCryptoKey(key)) {
    cryptoKey = key;
  } else {
    cryptoKey = await importPasswordKeyFromString(key);
  }
  if (cryptoKey instanceof Error) {
    return cryptoKey;
  }

  const iv = generateInitializationVectorNativeArrayBuffer();

  if (iv instanceof Error) {
    return iv;
  }

  const dataEncrypted = await encryptToTypedArray(cryptoKey, data, {
    ...PASSWORD_ENCRYPTION_UTILS_ENCRYPTION_PARAMS,
    iv,
  });

  if (dataEncrypted instanceof Error) {
    return dataEncrypted;
  }

  return concatDataWithInitializationVector({
    data: dataEncrypted,
    iv,
  });
};

export const encryptDataToString = async (
  key: string | CryptoKey,
  data: TCryptoUtilEncryptDataTypes
): Promise<Error | string> => {
  const encrypted = await encryptDataToArrayBuffer(key, data);

  if (encrypted instanceof Error) {
    return encrypted;
  }
  return encodeArrayBufferToDOMString(encrypted);
};

export const encryptDataToUInt8Array = async (
  key: string | CryptoKey,
  data: TCryptoUtilEncryptDataTypes
): Promise<Error | Uint8Array> => {
  const encrypted = await encryptDataToArrayBuffer(key, data);

  if (encrypted instanceof Error) {
    return encrypted;
  }
  return new Uint8Array(encrypted);
};

export const encryptDataWithPassword = async (
  password: string,
  salt: TSaltUtilsSaltType,
  data: TCryptoUtilEncryptDataTypes
): Promise<Error | string> => {
  const key = await generatePasswordKeyByPasswordString(password, salt);

  if (key instanceof Error) {
    console.error(key);
    return key;
  }

  return encryptDataToString(key, data);
};

export const encryptDataWithPasswordToArrayBuffer = async (
  password: string,
  salt: TSaltUtilsSaltType,
  data: TCryptoUtilEncryptDataTypes
): Promise<Error | ArrayBuffer> => {
  const key = await generatePasswordKeyByPasswordString(password, salt);

  if (key instanceof Error) {
    console.error(key);
    return key;
  }
  return encryptDataToArrayBuffer(key, data);
};
