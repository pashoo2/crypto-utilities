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
exports.INITIALIZATION_VECTOR_DEFAULT_LENGTH = exports.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = exports.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = exports.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = exports.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = exports.CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = exports.CRYPTO_UTIL_KEYPAIR_USAGES = exports.CRYPTO_UTIL_DESCRIPTION_KEY_TYPE = exports.CRYPTO_UTIL_ENCRYPTION_KEY_TYPE = exports.CRYPTO_UTIL_DATA_SIGN_PRIVATE_KEY_USAGE = exports.CRYPTO_UTIL_DATA_SIGN_PUBLIC_KEY_USAGE = exports.CRYPTO_UTIL_PRIVATE_KEY_USAGE = exports.CRYPTO_UTIL_PUBLIC_KEY_USAGE = exports.eCRYPTO_UTILS_KEYS_TYPES = exports.eCRYPTO_UTILS_KEYS_USAGES = exports.CRYPTO_UTIL_KEY_DESC = exports.CRYPTO_UTIL_KEY_ALGORITHM = exports.CRYPTO_UTIL_KEYS_EXTRACTABLE = void 0;
var const_1 = require("../const");
exports.CRYPTO_UTIL_KEYS_EXTRACTABLE = true;
exports.CRYPTO_UTIL_KEY_ALGORITHM = 'RSA-OAEP';
exports.CRYPTO_UTIL_KEY_DESC = {
    name: exports.CRYPTO_UTIL_KEY_ALGORITHM,
    hash: {
        name: const_1.HASH_CALCULATION_UTILS_HASH_ALGORITHM.SHA256,
    },
};
var eCRYPTO_UTILS_KEYS_USAGES;
(function (eCRYPTO_UTILS_KEYS_USAGES) {
    eCRYPTO_UTILS_KEYS_USAGES["encrypt"] = "encrypt";
    eCRYPTO_UTILS_KEYS_USAGES["decrypt"] = "decrypt";
    eCRYPTO_UTILS_KEYS_USAGES["sign"] = "sign";
    eCRYPTO_UTILS_KEYS_USAGES["verify"] = "verify";
    eCRYPTO_UTILS_KEYS_USAGES["deriveKey"] = "deriveKey";
    eCRYPTO_UTILS_KEYS_USAGES["deriveBits"] = "deriveBits";
    eCRYPTO_UTILS_KEYS_USAGES["wrapKey"] = "wrapKey";
    eCRYPTO_UTILS_KEYS_USAGES["unwrapKey"] = "unwrapKey";
})(eCRYPTO_UTILS_KEYS_USAGES = exports.eCRYPTO_UTILS_KEYS_USAGES || (exports.eCRYPTO_UTILS_KEYS_USAGES = {}));
var eCRYPTO_UTILS_KEYS_TYPES;
(function (eCRYPTO_UTILS_KEYS_TYPES) {
    eCRYPTO_UTILS_KEYS_TYPES["public"] = "public";
    eCRYPTO_UTILS_KEYS_TYPES["private"] = "private";
})(eCRYPTO_UTILS_KEYS_TYPES = exports.eCRYPTO_UTILS_KEYS_TYPES || (exports.eCRYPTO_UTILS_KEYS_TYPES = {}));
exports.CRYPTO_UTIL_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.encrypt;
exports.CRYPTO_UTIL_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.decrypt;
exports.CRYPTO_UTIL_DATA_SIGN_PUBLIC_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.verify;
exports.CRYPTO_UTIL_DATA_SIGN_PRIVATE_KEY_USAGE = eCRYPTO_UTILS_KEYS_USAGES.sign;
exports.CRYPTO_UTIL_ENCRYPTION_KEY_TYPE = eCRYPTO_UTILS_KEYS_TYPES.public;
exports.CRYPTO_UTIL_DESCRIPTION_KEY_TYPE = eCRYPTO_UTILS_KEYS_TYPES.private;
exports.CRYPTO_UTIL_KEYPAIR_USAGES = [
    exports.CRYPTO_UTIL_PUBLIC_KEY_USAGE,
    exports.CRYPTO_UTIL_PRIVATE_KEY_USAGE,
];
exports.CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS = __assign(__assign({}, exports.CRYPTO_UTIL_KEY_DESC), { modulusLength: 3072, publicExponent: new Uint8Array([0x01, 0x00, 0x01]) });
exports.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT = 'jwk';
exports.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME = 'publicKey';
exports.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME = 'privateKey';
exports.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME = 'salt';
exports.INITIALIZATION_VECTOR_DEFAULT_LENGTH = 12;
//# sourceMappingURL=crypto-utils.const.js.map