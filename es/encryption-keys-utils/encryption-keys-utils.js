"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcCryptoKeyPairHash = exports.calcCryptoKeyHash = exports.exportCryptoKeyInFormat = exports.getJWKOrBool = exports.getJWKOrError = exports.getJWK = exports.isJWK = exports.isCryptoKeyPairExportedAsString = exports.isCryptoKeyDataDecryption = exports.isCryptoKeyDataEncryption = exports.isCryptoKeyDataVerify = exports.isCryptoKeyDataSign = exports.isCryptoKeyIncludesUsages = exports.isCryptoKeyPair = exports.isCryptoKey = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const crypto_utils_const_1 = require("../encryption-utils/crypto-utils.const");
const init_1 = require("../init");
const hash_calculation_utils_1 = require("../hash-calculation-utils/hash-calculation-utils");
const const_1 = require("../const");
const encryption_keys_utils_const_1 = require("./encryption-keys-utils.const");
const const_2 = require("../const");
const isCryptoKey = (v) => {
    var _a, _b;
    return typeof v === 'object' &&
        ((_b = (_a = Object.getPrototypeOf(v)) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'CryptoKey';
};
exports.isCryptoKey = isCryptoKey;
const isCryptoKeyPair = (keyPair, checkPrivateKeys = true) => {
    return (typeof keyPair === 'object' &&
        exports.isCryptoKey(keyPair.publicKey) &&
        (!checkPrivateKeys || exports.isCryptoKey(keyPair.privateKey)));
};
exports.isCryptoKeyPair = isCryptoKeyPair;
const isCryptoKeyIncludesUsages = (cryptoKey, expectedUsages) => {
    const { usages } = cryptoKey;
    if (typeof expectedUsages === 'string') {
        return usages.includes(expectedUsages);
    }
    return usages.every(usage => expectedUsages.includes(usage));
};
exports.isCryptoKeyIncludesUsages = isCryptoKeyIncludesUsages;
const isCryptoKeyDataSign = (cryptoKey) => exports.isCryptoKey(cryptoKey) &&
    exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.sign);
exports.isCryptoKeyDataSign = isCryptoKeyDataSign;
const isCryptoKeyDataVerify = (cryptoKey) => exports.isCryptoKey(cryptoKey) &&
    exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.verify);
exports.isCryptoKeyDataVerify = isCryptoKeyDataVerify;
const isCryptoKeyDataEncryption = (cryptoKey) => exports.isCryptoKey(cryptoKey) &&
    exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.encrypt);
exports.isCryptoKeyDataEncryption = isCryptoKeyDataEncryption;
const isCryptoKeyDataDecryption = (cryptoKey) => exports.isCryptoKey(cryptoKey) &&
    exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.decrypt);
exports.isCryptoKeyDataDecryption = isCryptoKeyDataDecryption;
const isCryptoKeyPairExportedAsString = (keyPair) => {
    return typeof keyPair === 'string' && keyPair.length >= encryption_keys_utils_const_1.MIN_JWK_STRING_LENGTH;
};
exports.isCryptoKeyPairExportedAsString = isCryptoKeyPairExportedAsString;
const isJWK = (keyObject, isReturnError = false) => {
    if (keyObject && typeof keyObject === 'object') {
        const options = Object.keys(keyObject);
        const optionsCount = options.length;
        if (optionsCount > encryption_keys_utils_const_1.MIN_JWK_PROPS_COUNT) {
            let idx = 0;
            let optionName;
            for (; idx < optionsCount; idx += 1) {
                optionName = options[idx];
                if (!encryption_keys_utils_const_1.ENCRYPTIONS_KEYS_UTILS_JWK_FORMAT_OBJECT_KEYS.includes(optionName)) {
                    return isReturnError
                        ? new Error(`There is an unknown property ${optionName}`)
                        : false;
                }
            }
            return true;
        }
    }
    return isReturnError ? new Error('There is a wrong format of JWK') : false;
};
exports.isJWK = isJWK;
const getJWK = (key, isReturnError = false) => {
    let keyObject = key;
    if (typeof key === 'string' && key.length > encryption_keys_utils_const_1.MIN_JWK_STRING_LENGTH) {
        try {
            keyObject = JSON.parse(key);
        }
        catch (e) {
            return e;
        }
    }
    const isJWKValid = exports.isJWK(keyObject, isReturnError);
    if (isJWKValid === true) {
        return keyObject;
    }
    return isJWKValid instanceof Error
        ? isJWKValid
        : new Error('There is a wrong format of JWK');
};
exports.getJWK = getJWK;
const getJWKOrError = (key) => exports.getJWK(key, true);
exports.getJWKOrError = getJWKOrError;
const getJWKOrBool = (key) => exports.getJWK(key, false);
exports.getJWKOrBool = getJWKOrBool;
const exportCryptoKeyInFormat = (key, format) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield init_1.crypto.subtle.exportKey(format, key);
        if (result instanceof Error) {
            console.error(result);
            return new Error('exportCryptoKeyInFormat::error returned from the exportKey');
        }
        return result;
    }
    catch (err) {
        console.error(err);
        return new Error('exportCryptoKeyInFormat::An error thrown when export the crypto key');
    }
});
exports.exportCryptoKeyInFormat = exportCryptoKeyInFormat;
/**
 * calculates hash string of the crypto key
 * @param {CryptoKey} key
 */
const calcCryptoKeyHash = (key, alg = const_2.HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM) => __awaiter(void 0, void 0, void 0, function* () {
    if (!exports.isCryptoKey(key)) {
        return new Error('Key os not an instance of CryptoKey');
    }
    if (!key.extractable) {
        return new Error('The crypto key is not extractable');
    }
    let format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.RAW;
    const keyAlgName = key.algorithm.name.toLowerCase();
    if (keyAlgName.includes('rsa-') || keyAlgName.includes('ecdsa')) {
        if (key.type.includes(const_1.CONST_CRYPTO_KEYS_TYPES.PUBLIC)) {
            format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.SPKI;
        }
        else {
            format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.PKCS8;
        }
    }
    const exportedCryptoKey = yield exports.exportCryptoKeyInFormat(key, format);
    if (exportedCryptoKey instanceof Error) {
        console.error(exportedCryptoKey);
        return new Error('Failed to export the crypto key in the RAW format');
    }
    const hashCalcResult = yield hash_calculation_utils_1.calculateHashNative(exportedCryptoKey, alg);
    if (hashCalcResult instanceof Error) {
        console.error(hashCalcResult);
        return new Error('Failed to calculate a hash for the exported crypto key');
    }
    return typed_array_utils_1.encodeArrayBufferToDOMString(hashCalcResult);
});
exports.calcCryptoKeyHash = calcCryptoKeyHash;
// allow to absent for a private keys in a pairs
const calcCryptoKeyPairHash = (cryptoPair) => __awaiter(void 0, void 0, void 0, function* () {
    const pending = [exports.calcCryptoKeyHash(cryptoPair.publicKey)];
    if (cryptoPair.privateKey) {
        pending.push(exports.calcCryptoKeyHash(cryptoPair.privateKey));
    }
    const results = yield Promise.all(pending);
    if (results[0] instanceof Error) {
        return new Error('Failed to calculate hash of the private key');
    }
    if (results[1] instanceof Error) {
        return new Error('Failed to calculate hash of the public key');
    }
    return hash_calculation_utils_1.calculateHash(`${results[0]}___${results[1]}`);
});
exports.calcCryptoKeyPairHash = calcCryptoKeyPairHash;
//# sourceMappingURL=encryption-keys-utils.js.map