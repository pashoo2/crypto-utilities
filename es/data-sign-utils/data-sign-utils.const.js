"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_NOT_FOUND_ERROR_MESSAGE = exports.DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS = exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = exports.DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES = exports.DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE = exports.DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE = exports.DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE = exports.DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE = exports.DATA_SIGN_CRYPTO_UTIL_KEY_DESC = exports.DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM = exports.DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM = exports.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE = void 0;
var crypto_utils_const_1 = require("../encryption-utils/crypto-utils.const");
var const_1 = require("../const");
exports.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE = true;
exports.DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM = 'ECDSA';
exports.DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM = const_1.HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256;
exports.DATA_SIGN_CRYPTO_UTIL_KEY_DESC = {
    name: exports.DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM,
    namedCurve: 'P-256',
};
exports.DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE = crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.verify;
exports.DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE = crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.sign;
exports.DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE = 'public';
exports.DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE = 'private';
exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES = [
    exports.DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE,
    exports.DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE,
];
exports.DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = __assign({}, exports.DATA_SIGN_CRYPTO_UTIL_KEY_DESC);
exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = 'jwk';
exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = 'publicKey';
exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = 'privateKey';
exports.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = 'salt';
exports.DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS = {
    name: exports.DATA_SIGN_CRYPTO_UTIL_KEY_ALGORITHM,
    hash: { name: exports.DATA_SIGN_CRYPTO_UTIL_HASH_ALGORITHM },
};
exports.KEY_NOT_FOUND_ERROR_MESSAGE = 'A key of the required type was not found';
//# sourceMappingURL=data-sign-utils.const.js.map