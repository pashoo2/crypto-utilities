import {TTypedArrays} from '@pashoo2/typed-array-utils';

export type TEncryptionKeyStoreFormatType =
  | string
  | ArrayBuffer
  | JsonWebKey
  | TTypedArrays;
