import { TSaltUtilsSaltType } from '../encryption-utils/salt-utils.types';
import { TPasswordEncryptionSupportedPasswordNativeTypes, TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat, TPasswordEncryptionKeyImportNativeSupportedTypes } from './password-utils.types';
export declare const generatePasswordKey: (password: TPasswordEncryptionSupportedPasswordNativeTypes) => Promise<CryptoKey | Error>;
export declare const getDerivationNative: (passwordKey: CryptoKey, saltValue: Uint8Array) => Promise<Error | CryptoKey>;
export declare const generatePasswordKeyByPasswordString: (passwordString: string, saltValue: TSaltUtilsSaltType) => Promise<CryptoKey | Error>;
export declare const exportPasswordKey: (passwordKey: CryptoKey) => PromiseLike<TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat> | Error;
export declare const exportPasswordKeyAsString: (passwordKey: CryptoKey) => Promise<string | Error>;
export declare const generatePasswordKeyInExportFormat: (passwordString: string, salt: TSaltUtilsSaltType) => Promise<TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat | Error>;
export declare const generatePasswordKeyAsString: (passwordString: string, salt: TSaltUtilsSaltType) => Promise<string | Error>;
export declare const importPasswordKey: (passwordKey: TPasswordEncryptionKeyImportNativeSupportedTypes) => Promise<CryptoKey | Error>;
export declare const importPasswordKeyFromString: (passwordKey: string) => Promise<CryptoKey | Error>;
