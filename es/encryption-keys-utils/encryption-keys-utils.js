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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcCryptoKeyPairHash = exports.calcCryptoKeyHash = exports.exportCryptoKeyInFormat = exports.getJWKOrBool = exports.getJWKOrError = exports.getJWK = exports.isJWK = exports.isCryptoKeyPairExportedAsString = exports.isCryptoKeyDataDecryption = exports.isCryptoKeyDataEncryption = exports.isCryptoKeyDataVerify = exports.isCryptoKeyDataSign = exports.isCryptoKeyIncludesUsages = exports.isCryptoKeyPair = exports.isCryptoKey = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var crypto_utils_const_1 = require("../encryption-utils/crypto-utils.const");
var init_1 = require("../init");
var hash_calculation_utils_1 = require("../hash-calculation-utils/hash-calculation-utils");
var const_1 = require("../const");
var encryption_keys_utils_const_1 = require("./encryption-keys-utils.const");
var const_2 = require("../const");
var isCryptoKey = function (v) {
    var _a, _b;
    return typeof v === 'object' &&
        ((_b = (_a = Object.getPrototypeOf(v)) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'CryptoKey';
};
exports.isCryptoKey = isCryptoKey;
var isCryptoKeyPair = function (keyPair, checkPrivateKeys) {
    if (checkPrivateKeys === void 0) { checkPrivateKeys = true; }
    return (typeof keyPair === 'object' &&
        exports.isCryptoKey(keyPair.publicKey) &&
        (!checkPrivateKeys || exports.isCryptoKey(keyPair.privateKey)));
};
exports.isCryptoKeyPair = isCryptoKeyPair;
var isCryptoKeyIncludesUsages = function (cryptoKey, expectedUsages) {
    var usages = cryptoKey.usages;
    if (typeof expectedUsages === 'string') {
        return usages.includes(expectedUsages);
    }
    return usages.every(function (usage) { return expectedUsages.includes(usage); });
};
exports.isCryptoKeyIncludesUsages = isCryptoKeyIncludesUsages;
var isCryptoKeyDataSign = function (cryptoKey) {
    return exports.isCryptoKey(cryptoKey) &&
        exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.sign);
};
exports.isCryptoKeyDataSign = isCryptoKeyDataSign;
var isCryptoKeyDataVerify = function (cryptoKey) {
    return exports.isCryptoKey(cryptoKey) &&
        exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.verify);
};
exports.isCryptoKeyDataVerify = isCryptoKeyDataVerify;
var isCryptoKeyDataEncryption = function (cryptoKey) {
    return exports.isCryptoKey(cryptoKey) &&
        exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.encrypt);
};
exports.isCryptoKeyDataEncryption = isCryptoKeyDataEncryption;
var isCryptoKeyDataDecryption = function (cryptoKey) {
    return exports.isCryptoKey(cryptoKey) &&
        exports.isCryptoKeyIncludesUsages(cryptoKey, crypto_utils_const_1.eCRYPTO_UTILS_KEYS_USAGES.decrypt);
};
exports.isCryptoKeyDataDecryption = isCryptoKeyDataDecryption;
var isCryptoKeyPairExportedAsString = function (keyPair) {
    return typeof keyPair === 'string' && keyPair.length >= encryption_keys_utils_const_1.MIN_JWK_STRING_LENGTH;
};
exports.isCryptoKeyPairExportedAsString = isCryptoKeyPairExportedAsString;
var isJWK = function (keyObject, isReturnError) {
    if (isReturnError === void 0) { isReturnError = false; }
    if (keyObject && typeof keyObject === 'object') {
        var options = Object.keys(keyObject);
        var optionsCount = options.length;
        if (optionsCount > encryption_keys_utils_const_1.MIN_JWK_PROPS_COUNT) {
            var idx = 0;
            var optionName = void 0;
            for (; idx < optionsCount; idx += 1) {
                optionName = options[idx];
                if (!encryption_keys_utils_const_1.ENCRYPTIONS_KEYS_UTILS_JWK_FORMAT_OBJECT_KEYS.includes(optionName)) {
                    return isReturnError
                        ? new Error("There is an unknown property " + optionName)
                        : false;
                }
            }
            return true;
        }
    }
    return isReturnError ? new Error('There is a wrong format of JWK') : false;
};
exports.isJWK = isJWK;
var getJWK = function (key, isReturnError) {
    if (isReturnError === void 0) { isReturnError = false; }
    var keyObject = key;
    if (typeof key === 'string' && key.length > encryption_keys_utils_const_1.MIN_JWK_STRING_LENGTH) {
        try {
            keyObject = JSON.parse(key);
        }
        catch (e) {
            return e;
        }
    }
    var isJWKValid = exports.isJWK(keyObject, isReturnError);
    if (isJWKValid === true) {
        return keyObject;
    }
    return isJWKValid instanceof Error
        ? isJWKValid
        : new Error('There is a wrong format of JWK');
};
exports.getJWK = getJWK;
var getJWKOrError = function (key) {
    return exports.getJWK(key, true);
};
exports.getJWKOrError = getJWKOrError;
var getJWKOrBool = function (key) {
    return exports.getJWK(key, false);
};
exports.getJWKOrBool = getJWKOrBool;
var exportCryptoKeyInFormat = function (key, format) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, init_1.crypto.subtle.exportKey(format, key)];
            case 1:
                result = _a.sent();
                if (result instanceof Error) {
                    console.error(result);
                    return [2 /*return*/, new Error('exportCryptoKeyInFormat::error returned from the exportKey')];
                }
                return [2 /*return*/, result];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [2 /*return*/, new Error('exportCryptoKeyInFormat::An error thrown when export the crypto key')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.exportCryptoKeyInFormat = exportCryptoKeyInFormat;
/**
 * calculates hash string of the crypto key
 * @param {CryptoKey} key
 */
var calcCryptoKeyHash = function (key, alg) {
    if (alg === void 0) { alg = const_2.HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM; }
    return __awaiter(void 0, void 0, void 0, function () {
        var format, keyAlgName, exportedCryptoKey, hashCalcResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.isCryptoKey(key)) {
                        return [2 /*return*/, new Error('Key os not an instance of CryptoKey')];
                    }
                    if (!key.extractable) {
                        return [2 /*return*/, new Error('The crypto key is not extractable')];
                    }
                    format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.RAW;
                    keyAlgName = key.algorithm.name.toLowerCase();
                    if (keyAlgName.includes('rsa-') || keyAlgName.includes('ecdsa')) {
                        if (key.type.includes(const_1.CONST_CRYPTO_KEYS_TYPES.PUBLIC)) {
                            format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.SPKI;
                        }
                        else {
                            format = const_1.CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS.PKCS8;
                        }
                    }
                    return [4 /*yield*/, exports.exportCryptoKeyInFormat(key, format)];
                case 1:
                    exportedCryptoKey = _a.sent();
                    if (exportedCryptoKey instanceof Error) {
                        console.error(exportedCryptoKey);
                        return [2 /*return*/, new Error('Failed to export the crypto key in the RAW format')];
                    }
                    return [4 /*yield*/, hash_calculation_utils_1.calculateHashNative(exportedCryptoKey, alg)];
                case 2:
                    hashCalcResult = _a.sent();
                    if (hashCalcResult instanceof Error) {
                        console.error(hashCalcResult);
                        return [2 /*return*/, new Error('Failed to calculate a hash for the exported crypto key')];
                    }
                    return [2 /*return*/, typed_array_utils_1.encodeArrayBufferToDOMString(hashCalcResult)];
            }
        });
    });
};
exports.calcCryptoKeyHash = calcCryptoKeyHash;
// allow to absent for a private keys in a pairs
var calcCryptoKeyPairHash = function (cryptoPair) { return __awaiter(void 0, void 0, void 0, function () {
    var pending, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pending = [exports.calcCryptoKeyHash(cryptoPair.publicKey)];
                if (cryptoPair.privateKey) {
                    pending.push(exports.calcCryptoKeyHash(cryptoPair.privateKey));
                }
                return [4 /*yield*/, Promise.all(pending)];
            case 1:
                results = _a.sent();
                if (results[0] instanceof Error) {
                    return [2 /*return*/, new Error('Failed to calculate hash of the private key')];
                }
                if (results[1] instanceof Error) {
                    return [2 /*return*/, new Error('Failed to calculate hash of the public key')];
                }
                return [2 /*return*/, hash_calculation_utils_1.calculateHash(results[0] + "___" + results[1])];
        }
    });
}); };
exports.calcCryptoKeyPairHash = calcCryptoKeyPairHash;
//# sourceMappingURL=encryption-keys-utils.js.map