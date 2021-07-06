import { HASH_CALCULATION_UTILS_HASH_ALGORITHM } from '../const';
export declare const CRYPTO_UTIL_KEYS_EXTRACTABLE = true;
export declare const CRYPTO_UTIL_KEY_ALGORITHM = "RSA-OAEP";
export declare const CRYPTO_UTIL_KEY_DESC: {
    name: string;
    hash: {
        name: HASH_CALCULATION_UTILS_HASH_ALGORITHM;
    };
};
export declare enum eCRYPTO_UTILS_KEYS_USAGES {
    'encrypt' = "encrypt",
    'decrypt' = "decrypt",
    'sign' = "sign",
    'verify' = "verify",
    'deriveKey' = "deriveKey",
    'deriveBits' = "deriveBits",
    'wrapKey' = "wrapKey",
    'unwrapKey' = "unwrapKey"
}
export declare enum eCRYPTO_UTILS_KEYS_TYPES {
    public = "public",
    private = "private"
}
export declare const CRYPTO_UTIL_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['encrypt'];
export declare const CRYPTO_UTIL_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['decrypt'];
export declare const CRYPTO_UTIL_DATA_SIGN_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['verify'];
export declare const CRYPTO_UTIL_DATA_SIGN_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['sign'];
export declare const CRYPTO_UTIL_ENCRYPTION_KEY_TYPE = eCRYPTO_UTILS_KEYS_TYPES.public;
export declare const CRYPTO_UTIL_DESCRIPTION_KEY_TYPE = eCRYPTO_UTILS_KEYS_TYPES.private;
export declare const CRYPTO_UTIL_KEYPAIR_USAGES: eCRYPTO_UTILS_KEYS_USAGES[];
export declare const CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS: {
    modulusLength: number;
    publicExponent: Uint8Array;
    name: string;
    hash: {
        name: HASH_CALCULATION_UTILS_HASH_ALGORITHM;
    };
};
export declare const CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = "jwk";
export declare const CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = "publicKey";
export declare const CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = "privateKey";
export declare const CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = "salt";
export declare const INITIALIZATION_VECTOR_DEFAULT_LENGTH = 12;
