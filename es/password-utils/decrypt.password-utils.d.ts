import { TSaltUtilsSaltType } from '../encryption-utils/salt-utils.types';
export declare const decryptDataWithKeyNative: (key: string | CryptoKey, dataWithIv: ArrayBuffer) => Promise<ArrayBuffer | Error>;
export declare const decryptDataWithKey: (key: string | CryptoKey, dataWithIv: string) => Promise<string | Error>;
export declare const decryptDataWithKeyFromUint8Array: (key: string | CryptoKey, dataWithIv: Uint8Array) => Promise<string | Error>;
export declare const decryptDataArrayOrStringWithKeyToUInt8Array: (key: string | CryptoKey, dataWithIv: Uint8Array | string) => Promise<Uint8Array | Error>;
export declare const decryptDataByPassword: (password: string, salt: TSaltUtilsSaltType, dataWithIv: string) => Promise<string | Error>;
