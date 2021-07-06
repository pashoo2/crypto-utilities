import {TTypedArrays} from '@pashoo2/typed-array-utils';

export type TPasswordEncryptionSupportedPasswordNativeTypes =
  | TTypedArrays
  | ArrayBuffer;

export type TPasswordEncryptionSupportesSaltNativeTypes =
  | TTypedArrays
  | ArrayBuffer;

export type TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat = JsonWebKey;

export type TPasswordEncryptionKeyImportNativeSupportedTypes =
  TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat;
