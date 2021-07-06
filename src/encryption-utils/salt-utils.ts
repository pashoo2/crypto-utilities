import {
  typedArrayToString,
  convertToTypedArray,
  isTypedArrayNative,
  isEqualArrayBufferNative,
} from '@pashoo2/typed-array-utils';

import {TSaltUtilsSaltType} from './salt-utils.types';
import {crypto} from '../init';
import {
  SALT_GENERATION_UTILS_SALT_LENGTH_BYTES,
  SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES,
  SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES,
} from './salt-utils.const';

export const generateSaltNative = (saltLength: number): Uint8Array | Error => {
  try {
    return crypto.getRandomValues(new Uint8Array(saltLength));
  } catch (err) {
    return err;
  }
};

export const generateSalt = (
  saltLength: number = SALT_GENERATION_UTILS_SALT_LENGTH_BYTES
): Uint8Array | Error => {
  if (saltLength < SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES) {
    return new Error(
      `The length ${saltLength} must not be less than the ${SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES}`
    );
  }
  if (saltLength > SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES) {
    return new Error(
      `The length ${saltLength} should not be greater than ${SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES}`
    );
  }
  return generateSaltNative(saltLength);
};

export const generateSaltString = (saltLength?: number): string | Error => {
  const salt = generateSalt(saltLength);

  if (salt instanceof Error) {
    return salt;
  }
  return typedArrayToString(salt);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidSalt = (salt: any): salt is TSaltUtilsSaltType => {
  if (isTypedArrayNative(salt) || salt instanceof ArrayBuffer) {
    let strFromTyped;
    try {
      strFromTyped = typedArrayToString(salt);
    } catch {
      return false;
    }

    const typedFromStr = convertToTypedArray(strFromTyped);

    if (typedFromStr instanceof Error) {
      return false;
    }
    if (
      !isTypedArrayNative(typedFromStr) &&
      !(typedFromStr instanceof ArrayBuffer)
    ) {
      return false;
    }
    if (!isEqualArrayBufferNative(typedFromStr, salt)) {
      return false;
    }
    return (
      salt.byteLength >= SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES &&
      salt.byteLength <= SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES
    );
  }
  if (typeof salt === 'string') {
    const typedFromStr = convertToTypedArray(salt);

    if (typedFromStr instanceof Error) {
      return false;
    }

    let strFromTyped: string;
    try {
      strFromTyped = typedArrayToString(typedFromStr);
    } catch {
      return false;
    }

    if (salt !== strFromTyped) {
      return false;
    }
    return (
      typedFromStr.byteLength >= SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES &&
      typedFromStr.byteLength <= SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES
    );
  }
  return false;
};

export const importSalt = (salt: TSaltUtilsSaltType): Uint8Array | Error => {
  if (!isValidSalt(salt)) {
    return new Error('The salt is not valid');
  }

  if (isTypedArrayNative(salt)) {
    // if a typed array then convert the salt directly
    return new Uint8Array(salt);
  }
  // if a string then convert string to typed array
  const saltImported = convertToTypedArray(salt);

  if (saltImported instanceof Error) {
    return saltImported;
  }
  if (isTypedArrayNative(saltImported)) {
    return new Uint8Array(saltImported);
  }
  return new Error('An unknown format of the salt imported');
};
