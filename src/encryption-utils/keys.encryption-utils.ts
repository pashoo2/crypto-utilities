import {IKeyValue, stringify} from '@pashoo2/serialization-utils';
import {typedArrayToString} from '@pashoo2/typed-array-utils';

import {
  CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS,
  CRYPTO_UTIL_KEYPAIR_USAGES,
  CRYPTO_UTIL_PUBLIC_KEY_USAGE,
  CRYPTO_UTIL_PRIVATE_KEY_USAGE,
  CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT,
  CRYPTO_UTIL_KEY_DESC,
  CRYPTO_UTIL_KEYS_EXTRACTABLE,
  CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME,
  CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME,
} from './crypto-utils.const';
import {
  TCryptoUtilKeyExportFormatType,
  TCryptoUtilKeypairExportFormatType,
  TCryptoUtilKeypairImportFormatType,
  TCryptoUtilEncryptKeyTypes,
} from './crypto-utils.types';
import {generateSalt} from './salt-utils';
import {CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME} from './crypto-utils.const';
import {encryptDataWithPassword} from '../password-utils/encrypt.password-utils';
import {TCryptoUtilKeypairPreImportFormatType} from './crypto-utils.types';
import {decryptDataByPassword} from '../password-utils/decrypt.password-utils';
import {
  isCryptoKeyPair,
  isCryptoKey,
} from '../encryption-keys-utils/encryption-keys-utils';
import {isTypedArray} from '@pashoo2/typed-array-utils';
import {cryptoModuleDataSign} from '../init';

export const isCryptoKeyPairImported = (
  key: any,
  checkPrivateKey = true
): key is TCryptoUtilKeypairExportFormatType => {
  return (
    typeof key === 'object' &&
    !!key[CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] &&
    (!checkPrivateKey || !!key[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME])
  );
};

export const generateKeyPair = (): PromiseLike<CryptoKeyPair> =>
  cryptoModuleDataSign.generateKey(
    CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS,
    CRYPTO_UTIL_KEYS_EXTRACTABLE,
    CRYPTO_UTIL_KEYPAIR_USAGES
  );

export const exportKey = (
  key: CryptoKey
): PromiseLike<TCryptoUtilKeyExportFormatType | Error> => {
  try {
    return cryptoModuleDataSign.exportKey(
      CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT,
      key
    );
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const exportKeyAsString = async (
  key: CryptoKey
): Promise<Error | string> => {
  return stringify((await exportKey(key)) as IKeyValue);
};

export const exportPublicKey = async (keyPair: CryptoKeyPair) => {
  return await exportKey(keyPair.publicKey);
};

export const exportPublicKeyAsString = async (keyPair: CryptoKeyPair) => {
  const publicKey = await exportPublicKey(keyPair);

  if (publicKey instanceof Error) {
    return publicKey;
  }
  return stringify(publicKey as IKeyValue);
};

export const exportKeyPair = async (
  keyPair: CryptoKeyPair,
  password?: string
): Promise<TCryptoUtilKeypairExportFormatType | Error> => {
  try {
    if (isCryptoKeyPair(keyPair, !!password)) {
      // do it in parallel
      const [privateKey, publicKey] = await Promise.all([
        password || keyPair.privateKey
          ? exportKey(keyPair.privateKey)
          : Promise.resolve(undefined),
        exportKey(keyPair.publicKey),
      ]).catch(err => [err, err]);

      if (privateKey instanceof Error) {
        return privateKey;
      }
      if (publicKey instanceof Error) {
        return publicKey;
      }

      const result: TCryptoUtilKeypairExportFormatType = {
        [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
        [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
      };

      if (password) {
        const salt = generateSalt();

        if (salt instanceof Error) {
          return new Error('Failed to generate a unique salt value');
        }

        const encryptedPrivateKey = await encryptDataWithPassword(
          password,
          salt,
          privateKey
        );

        if (encryptedPrivateKey instanceof Error) {
          return new Error(
            'Failed to encrypt private key with password provided'
          );
        }

        const saltStringified = typedArrayToString(salt);

        const decryptedPrivateKey = await decryptDataByPassword(
          password,
          saltStringified,
          encryptedPrivateKey
        );

        if (decryptedPrivateKey instanceof Error) {
          return new Error('Failed to decrypt private key for data encryption');
        }
        result[CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] = saltStringified;
        result[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = encryptedPrivateKey;
      }
      return result;
    }
    return new Error('Argument given must be a CryptoKeyPair');
  } catch (err) {
    return err;
  }
};

export const exportKeyPairAsString = async (
  keyPair: CryptoKeyPair,
  password?: string
): Promise<string | Error> => {
  const exportedKeyPair = await exportKeyPair(keyPair, password);

  if (exportedKeyPair instanceof Error) {
    return exportedKeyPair;
  }
  if (isTypedArray(exportedKeyPair)) {
    return typedArrayToString(exportedKeyPair);
  }
  try {
    return stringify(exportedKeyPair as JsonWebKey as IKeyValue);
  } catch (err) {
    return err;
  }
};

export const importKey = (
  key: object,
  isPublic = true
): PromiseLike<CryptoKey> => {
  return cryptoModuleDataSign.importKey(
    CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT,
    key,
    CRYPTO_UTIL_KEY_DESC,
    CRYPTO_UTIL_KEYS_EXTRACTABLE,
    [isPublic ? CRYPTO_UTIL_PUBLIC_KEY_USAGE : CRYPTO_UTIL_PRIVATE_KEY_USAGE]
  );
};

export const importPublicKey = (key: object): PromiseLike<CryptoKey> =>
  importKey(key, true);

export const importPrivateKey = (key: object): PromiseLike<CryptoKey> =>
  importKey(key, false);

export const importKeyPair = async (
  keyPair: TCryptoUtilKeypairPreImportFormatType,
  checkPrivateKey = true
): Promise<TCryptoUtilKeypairImportFormatType | Error> => {
  try {
    if (isCryptoKeyPairImported(keyPair, checkPrivateKey)) {
      const importResult = await Promise.all([
        (async () => {
          try {
            return await importPublicKey(
              keyPair[CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]
            );
          } catch (err) {
            return err;
          }
        })(),
        (async () => {
          try {
            if (
              checkPrivateKey ||
              keyPair[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]
            ) {
              return await importPrivateKey(
                keyPair[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]
              );
            }
          } catch (err) {
            return err;
          }
        })(),
      ]);
      const publicKey = importResult[0];
      let privateKey = importResult[1];

      if (publicKey instanceof Error) {
        return publicKey;
      }
      if (privateKey instanceof Error) {
        if (checkPrivateKey) {
          return privateKey;
        }
        privateKey = undefined;
      }
      return {
        [CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
        [CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
      };
    }
    return new Error('The argument must be an instance of CryptoKeyPair');
  } catch (err) {
    return err;
  }
};

export const importKeyPairFromString = async (
  keyPairString: string,
  password?: string
): Promise<TCryptoUtilKeypairImportFormatType | Error> => {
  try {
    if (typeof keyPairString === 'string') {
      const keyPairObject = JSON.parse(keyPairString);

      if (password && keyPairObject[CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]) {
        if (
          typeof keyPairObject[CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] !== 'string'
        ) {
          return new Error('A salt value must be a string');
        }

        const decryptedPrivateKey = await decryptDataByPassword(
          password,
          keyPairObject[CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME],
          keyPairObject[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]
        );

        if (decryptedPrivateKey instanceof Error) {
          console.error('Failed to decrypt the data encryption private key');
          return decryptedPrivateKey;
        }
        try {
          keyPairObject[CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
            JSON.parse(decryptedPrivateKey);
        } catch (err) {
          console.error(err);
          return new Error(
            'Failed to parse dataencryption Private key from the string decrypted'
          );
        }
      }
      return await importKeyPair(keyPairObject, !!password);
    }
    return new Error('A key pair must be a string');
  } catch (err) {
    return err;
  }
};

export const importKeyFromString = (
  keyString: string,
  isPublic = true
): PromiseLike<CryptoKey> | Error => {
  try {
    return importKey(JSON.parse(keyString), isPublic);
  } catch (err) {
    return err;
  }
};

export const importPublicKeyFromString = (
  key: string
): PromiseLike<CryptoKey> | Error => importKeyFromString(key, true);

export const importPrivateKeyFromString = (
  key: string
): PromiseLike<CryptoKey> | Error => importKeyFromString(key, false);

export const checkIfStringIsKeyPair = (keyString: string): boolean => {
  return (
    keyString.includes(CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME) &&
    keyString.includes(CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME)
  );
};

const KEY_NOT_FOUND_ERROR_MESSAGE = 'A key of the required type was not found';

export const getKeyOfType = async (
  key: TCryptoUtilEncryptKeyTypes,
  type: KeyType
): Promise<CryptoKey | Error> => {
  if (typeof key === 'string') {
    if (checkIfStringIsKeyPair(key)) {
      const keyPair = await importKeyPairFromString(key);

      if (keyPair instanceof Error) {
        return keyPair;
      }
      return getKeyOfType(keyPair, type);
    } else {
      const keyFromString = await importKeyFromString(key, type === 'public');

      if (keyFromString instanceof Error) {
        return keyFromString;
      }
      return getKeyOfType(keyFromString, type);
    }
  }
  if (isCryptoKey(key)) {
    return key.type === type ? key : new Error(KEY_NOT_FOUND_ERROR_MESSAGE);
  }
  if (typeof key === 'object') {
    const keys = Object.values(key);
    const keyResulted = keys.find(
      (k: CryptoKey) => k && k.type && k.type === type
    );

    return keyResulted || new Error(KEY_NOT_FOUND_ERROR_MESSAGE);
  }
  return new Error('There is an unsupported type of the key given');
};
