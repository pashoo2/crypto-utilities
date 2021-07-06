import { TSaltUtilsSaltType } from './salt-utils.types';
export declare const generateSaltNative: (saltLength: number) => Uint8Array | Error;
export declare const generateSalt: (saltLength?: number) => Uint8Array | Error;
export declare const generateSaltString: (saltLength?: number | undefined) => string | Error;
export declare const isValidSalt: (salt: any) => salt is TSaltUtilsSaltType;
export declare const importSalt: (salt: TSaltUtilsSaltType) => Uint8Array | Error;
