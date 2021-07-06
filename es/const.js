"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS = exports.CONST_CRYPTO_KEYS_TYPES = exports.HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM = exports.HASH_CALCULATION_UTILS_HASH_ALGORITHM_OUTPUT_STRING_LENGTH = exports.HASH_CALCULATION_UTILS_HASH_ALGORITHM = void 0;
var HASH_CALCULATION_UTILS_HASH_ALGORITHM;
(function (HASH_CALCULATION_UTILS_HASH_ALGORITHM) {
    HASH_CALCULATION_UTILS_HASH_ALGORITHM["SHA256"] = "SHA-256";
    HASH_CALCULATION_UTILS_HASH_ALGORITHM["SHA384"] = "SHA-384";
    HASH_CALCULATION_UTILS_HASH_ALGORITHM["SHA512"] = "SHA-512";
})(HASH_CALCULATION_UTILS_HASH_ALGORITHM = exports.HASH_CALCULATION_UTILS_HASH_ALGORITHM || (exports.HASH_CALCULATION_UTILS_HASH_ALGORITHM = {}));
exports.HASH_CALCULATION_UTILS_HASH_ALGORITHM_OUTPUT_STRING_LENGTH = (_a = {},
    _a[HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256] = 64,
    _a[HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA384] = 96,
    _a[HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA512] = 128,
    _a);
exports.HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM = HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256;
var CONST_CRYPTO_KEYS_TYPES;
(function (CONST_CRYPTO_KEYS_TYPES) {
    CONST_CRYPTO_KEYS_TYPES["PUBLIC"] = "public";
    CONST_CRYPTO_KEYS_TYPES["PRIVATE"] = "private";
})(CONST_CRYPTO_KEYS_TYPES = exports.CONST_CRYPTO_KEYS_TYPES || (exports.CONST_CRYPTO_KEYS_TYPES = {}));
var CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS;
(function (CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS) {
    CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS["RAW"] = "raw";
    CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS["PKCS8"] = "pkcs8";
    CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS["SPKI"] = "spki";
    CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS["JWK"] = "jwk";
})(CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS = exports.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS || (exports.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS = {}));
//# sourceMappingURL=const.js.map