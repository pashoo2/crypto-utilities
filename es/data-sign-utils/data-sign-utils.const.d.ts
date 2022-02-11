import { eCRYPTO_UTILS_KEYS_USAGES } from '../encryption-utils/crypto-utils.const';
import { HASH_CALCULATION_UTILS_HASH_ALGORITHM } from '../const';
export declare const DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE = true;
export declare const DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM = "ECDSA";
export declare const DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM = HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256;
export declare const DATA_SIGN_CRYPTO_UTIL_KEY_DESC: EcKeyGenParams;
export declare const DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['verify'];
export declare const DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES['sign'];
export declare const DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE = "public";
export declare const DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE = "private";
export declare const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES: eCRYPTO_UTILS_KEYS_USAGES[];
export declare const DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS: EcKeyGenParams;
export declare const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = "jwk";
export declare const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = "publicKey";
export declare const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = "privateKey";
export declare const DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = "salt";
export declare const DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS: {
    name: string;
    hash: {
        name: HASH_CALCULATION_UTILS_HASH_ALGORITHM;
    };
};
export declare const KEY_NOT_FOUND_ERROR_MESSAGE = "A key of the required type was not found";
