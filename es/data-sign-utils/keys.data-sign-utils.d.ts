import { TDataSignUtilKeyExportFormatType, TDataSignUtilKeypairExportFormatType, TDataSignUtilKeypairImportFormatType, TDataSignUtilSignKeyTypes, TDataSignUtilImportKeyTypes } from './data-sign-utils.types';
import { TDataSignUtilKeypairImportType } from './data-sign-utils.types';
import { TEncryptionKeyStoreFormatType } from '../types';
export declare const dataSignIsCryptoKeyPairImported: (key: any, checkPrivateKey?: boolean) => key is TDataSignUtilKeypairExportFormatType;
export declare const dataSignGenerateKeyPair: () => PromiseLike<CryptoKeyPair>;
export declare const dataSignExportKey: (key: CryptoKey) => Promise<TDataSignUtilKeyExportFormatType | Error>;
export declare const dataSignExportKeyAsString: (key: CryptoKey) => Promise<string | Error>;
export declare const dataSignExportPublicKey: (keyPair: CryptoKeyPair) => Promise<TDataSignUtilKeyExportFormatType | Error>;
export declare const dataSignExportPublicKeyAsString: (keyPair: CryptoKeyPair) => Promise<Error | string>;
export declare const dataSignExportKeyPair: (keyPair: CryptoKeyPair, password?: string | undefined) => Promise<TDataSignUtilKeypairExportFormatType | Error>;
export declare const dataSignExportKeyPairAsString: (keyPair: CryptoKeyPair, password?: string | undefined) => Promise<string | Error>;
export declare const dataSignImportKey: (key: TDataSignUtilImportKeyTypes, isPublic?: boolean) => Promise<CryptoKey | Error>;
export declare const dataSignImportPublicKey: (key: TDataSignUtilImportKeyTypes) => PromiseLike<CryptoKey | Error>;
export declare const dataSignImportPrivateKey: (key: TDataSignUtilImportKeyTypes) => PromiseLike<CryptoKey | Error>;
export declare const dataSignImportKeyPair: (keyPair: TDataSignUtilKeypairImportType, checkPrivateKey?: boolean) => Promise<TDataSignUtilKeypairImportFormatType | Error>;
export declare const dataSignImportKeyPairFromString: (keyPairString: string, password?: string | undefined) => Promise<TDataSignUtilKeypairImportFormatType | Error>;
export declare const dataSignImportKeyFromString: (keyString: string, isPublic?: boolean) => PromiseLike<CryptoKey | Error> | Error;
export declare const dataSignImportPublicKeyFromString: (key: string) => PromiseLike<CryptoKey | Error> | Error;
export declare const dataSignImportPrivateKeyFromString: (key: string) => PromiseLike<CryptoKey | Error> | Error;
export declare const dataSignCheckIfStringIsKeyPair: (keyString: string) => boolean;
export declare const dataSignGetKeyOfType: (key: TDataSignUtilSignKeyTypes, type: KeyType) => Promise<CryptoKey | Error>;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key in native
 * format
 * @param {} key
 */
export declare const dataSignImportEncryptionKey: (key: TEncryptionKeyStoreFormatType) => Promise<CryptoKey | Error>;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key as a string
 * @param {} key
 */
export declare const dataSignConvertAndExportKeyAsString: (key: TEncryptionKeyStoreFormatType) => Promise<string | Error>;
