import {
  decodeDOMStringToArrayBuffer,
  isTypedArray,
} from '@pashoo2/typed-array-utils';

import {importSalt} from '../encryption-utils/salt-utils';
import {TSaltUtilsSaltType} from '../encryption-utils/salt-utils.types';
import {crypto, cryptoModuleDataSign} from '../init';
import {isCryptoKey} from '../encryption-keys-utils/encryption-keys-utils';
import {
  TPasswordEncryptionSupportedPasswordNativeTypes,
  TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat,
  TPasswordEncryptionKeyImportNativeSupportedTypes,
} from './password-utils.types';
import {
  PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_KEY_IMPORTED_FORMAT,
  PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_IS_KEY_EXTRACTABLE,
  PASSWORD_ENCRYPTION_UTILS_KEY_USAGES,
  PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_ALGORITHM,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_BASE_KEY_CONFIG,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT,
  PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IMPORT_FORMAT,
} from './password-utils.const';

export const generatePasswordKey = async (
  password: TPasswordEncryptionSupportedPasswordNativeTypes
): Promise<CryptoKey | Error> => {
  if (!isTypedArray(password)) {
    return new Error('The password must have a TypedArray type');
  }
  try {
    return await cryptoModuleDataSign.importKey(
      PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_KEY_IMPORTED_FORMAT,
      password,
      PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_ALGORITHM,
      PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_IS_KEY_EXTRACTABLE,
      PASSWORD_ENCRYPTION_UTILS_KEY_USAGES as KeyUsage[]
    );
  } catch (err) {
    return err;
  }
};

export const getDerivationNative = async (
  passwordKey: CryptoKey,
  saltValue: Uint8Array
): Promise<Error | CryptoKey> => {
  if (!saltValue) {
    return new Error('The generated random value of salt is empty');
  }
  if (!isTypedArray(saltValue)) {
    return new Error('The password must have a TypedArray type');
  }
  if (!isCryptoKey(passwordKey)) {
    return new Error('A password key must be an instance of a CryptoKey');
  }
  try {
    return await crypto.subtle.deriveKey(
      {
        ...PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_BASE_KEY_CONFIG,
        salt: saltValue,
      },
      passwordKey,
      {
        ...PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG,
      },
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED,
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES as KeyUsage[]
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const generatePasswordKeyByPasswordString = async (
  passwordString: string,
  saltValue: TSaltUtilsSaltType
): Promise<CryptoKey | Error> => {
  const passwordArrayBuffer = decodeDOMStringToArrayBuffer(passwordString);

  if (passwordArrayBuffer instanceof Error) {
    return passwordArrayBuffer;
  }

  const passwordBaseKey = await generatePasswordKey(passwordArrayBuffer);

  if (passwordBaseKey instanceof Error) {
    return passwordBaseKey;
  }

  const saltImported = importSalt(saltValue);

  if (saltImported instanceof Error) {
    return saltImported;
  }
  return getDerivationNative(passwordBaseKey, saltImported);
};

export const exportPasswordKey = (
  passwordKey: CryptoKey
):
  | PromiseLike<TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat>
  | Error => {
  try {
    return cryptoModuleDataSign.exportKey(
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT,
      passwordKey
    );
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const exportPasswordKeyAsString = async (
  passwordKey: CryptoKey
): Promise<string | Error> => {
  try {
    const cryptoKey = await cryptoModuleDataSign.exportKey(
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT,
      passwordKey
    );

    if (cryptoKey instanceof Error) {
      return cryptoKey;
    }
    return JSON.stringify(cryptoKey);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const generatePasswordKeyInExportFormat = async (
  passwordString: string,
  salt: TSaltUtilsSaltType
): Promise<TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat | Error> => {
  const passwordKey = await generatePasswordKeyByPasswordString(
    passwordString,
    salt
  );

  if (passwordKey instanceof Error) {
    return passwordKey;
  }

  return exportPasswordKey(passwordKey);
};

export const generatePasswordKeyAsString = async (
  passwordString: string,
  salt: TSaltUtilsSaltType
): Promise<string | Error> => {
  const passwordKeyExported = await generatePasswordKeyInExportFormat(
    passwordString,
    salt
  );

  if (passwordKeyExported instanceof Error) {
    return passwordKeyExported;
  }

  return JSON.stringify(passwordKeyExported);
};

export const importPasswordKey = async (
  passwordKey: TPasswordEncryptionKeyImportNativeSupportedTypes
): Promise<CryptoKey | Error> => {
  try {
    return await cryptoModuleDataSign.importKey(
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IMPORT_FORMAT,
      passwordKey,
      {
        ...PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG,
      },
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED,
      PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES as KeyUsage[]
    );
  } catch (err) {
    return err;
  }
};

export const importPasswordKeyFromString = async (
  passwordKey: string
): Promise<CryptoKey | Error> => {
  try {
    const keyExportedFormat: TPasswordEncryptionKeyImportNativeSupportedTypes =
      JSON.parse(passwordKey);

    return await importPasswordKey(keyExportedFormat);
  } catch (err) {
    console.error(err);

    return err;
  }
};
