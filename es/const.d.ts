export declare enum HASH_CALCULATION_UTILS_HASH_ALGORITHM {
    SHA256 = "SHA-256",
    SHA384 = "SHA-384",
    SHA512 = "SHA-512"
}
export declare const HASH_CALCULATION_UTILS_HASH_ALGORITHM_OUTPUT_STRING_LENGTH: {
    [key in HASH_CALCULATION_UTILS_HASH_ALGORITHM]: number;
};
export declare const HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM = HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256;
export declare enum CONST_CRYPTO_KEYS_TYPES {
    PUBLIC = "public",
    PRIVATE = "private"
}
export declare enum CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS {
    RAW = "raw",
    PKCS8 = "pkcs8",
    SPKI = "spki",
    JWK = "jwk"
}