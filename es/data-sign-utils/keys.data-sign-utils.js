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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSignConvertAndExportKeyAsString = exports.dataSignImportEncryptionKey = exports.dataSignGetKeyOfType = exports.dataSignCheckIfStringIsKeyPair = exports.dataSignImportPrivateKeyFromString = exports.dataSignImportPublicKeyFromString = exports.dataSignImportKeyFromString = exports.dataSignImportKeyPairFromString = exports.dataSignImportKeyPair = exports.dataSignImportPrivateKey = exports.dataSignImportPublicKey = exports.dataSignImportKey = exports.dataSignExportKeyPairAsString = exports.dataSignExportKeyPair = exports.dataSignExportPublicKeyAsString = exports.dataSignExportPublicKey = exports.dataSignExportKeyAsString = exports.dataSignExportKey = exports.dataSignGenerateKeyPair = exports.dataSignIsCryptoKeyPairImported = void 0;
var serialization_utils_1 = require("@pashoo2/serialization-utils");
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var data_sign_utils_const_1 = require("./data-sign-utils.const");
var init_1 = require("../init");
var encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
var salt_utils_1 = require("../encryption-utils/salt-utils");
var encrypt_password_utils_1 = require("../password-utils/encrypt.password-utils");
var decrypt_password_utils_1 = require("../password-utils/decrypt.password-utils");
var data_sign_utils_const_2 = require("./data-sign-utils.const");
var encryption_keys_utils_2 = require("../encryption-keys-utils/encryption-keys-utils");
var dataSignIsCryptoKeyPairImported = function (key, checkPrivateKey) {
    if (checkPrivateKey === void 0) { checkPrivateKey = true; }
    return (typeof key === 'object' &&
        !!key[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] &&
        (!checkPrivateKey || !!key[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]));
};
exports.dataSignIsCryptoKeyPairImported = dataSignIsCryptoKeyPairImported;
var dataSignGenerateKeyPair = function () {
    return init_1.cryptoModuleDataSign.generateKey(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES);
};
exports.dataSignGenerateKeyPair = dataSignGenerateKeyPair;
var dataSignExportKey = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, init_1.cryptoModuleDataSign.exportKey(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, err_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dataSignExportKey = dataSignExportKey;
var dataSignExportKeyAsString = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var keyExported;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.dataSignExportKey(key)];
            case 1:
                keyExported = _a.sent();
                if (keyExported instanceof Error) {
                    return [2 /*return*/, keyExported];
                }
                try {
                    return [2 /*return*/, serialization_utils_1.stringify(keyExported)];
                }
                catch (err) {
                    return [2 /*return*/, err];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.dataSignExportKeyAsString = dataSignExportKeyAsString;
var dataSignExportPublicKey = function (keyPair) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (encryption_keys_utils_1.isCryptoKeyPair(keyPair)) {
            return [2 /*return*/, exports.dataSignExportKey(keyPair.publicKey)];
        }
        return [2 /*return*/, new Error('Argument must be a CryptoKeyPair')];
    });
}); };
exports.dataSignExportPublicKey = dataSignExportPublicKey;
var dataSignExportPublicKeyAsString = function (keyPair) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPublicExported, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.dataSignExportPublicKey(keyPair)];
            case 1:
                keyPublicExported = _a.sent();
                if (keyPublicExported instanceof Error) {
                    return [2 /*return*/, keyPublicExported];
                }
                return [2 /*return*/, serialization_utils_1.stringify(keyPublicExported)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, err_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dataSignExportPublicKeyAsString = dataSignExportPublicKeyAsString;
var dataSignExportKeyPair = function (keyPair, password) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, privateKey, publicKey, result, salt, encryptedPrivateKey, saltStringified, decryptedPrivateKey, err_3;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                if (!encryption_keys_utils_1.isCryptoKeyPair(keyPair, !!password)) return [3 /*break*/, 5];
                return [4 /*yield*/, Promise.all([
                        password || keyPair.privateKey
                            ? exports.dataSignExportKey(keyPair.privateKey)
                            : Promise.resolve(undefined),
                        exports.dataSignExportKey(keyPair.publicKey),
                    ]).catch(function (err) { return [err, err]; })];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 2]), privateKey = _a[0], publicKey = _a[1];
                if (privateKey instanceof Error) {
                    return [2 /*return*/, privateKey];
                }
                if (publicKey instanceof Error) {
                    return [2 /*return*/, publicKey];
                }
                result = (_b = {},
                    _b[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] = publicKey,
                    _b[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = privateKey,
                    _b);
                if (!password) return [3 /*break*/, 4];
                salt = salt_utils_1.generateSalt();
                if (salt instanceof Error) {
                    return [2 /*return*/, new Error('Failed to generate a unique salt value')];
                }
                return [4 /*yield*/, encrypt_password_utils_1.encryptDataWithPassword(password, salt, privateKey)];
            case 2:
                encryptedPrivateKey = _c.sent();
                if (encryptedPrivateKey instanceof Error) {
                    return [2 /*return*/, new Error('Failed to encrypt private key with password provided')];
                }
                saltStringified = void 0;
                try {
                    saltStringified = typed_array_utils_1.typedArrayToString(salt);
                }
                catch (err) {
                    return [2 /*return*/, err];
                }
                return [4 /*yield*/, decrypt_password_utils_1.decryptDataByPassword(password, saltStringified, encryptedPrivateKey)];
            case 3:
                decryptedPrivateKey = _c.sent();
                if (decryptedPrivateKey instanceof Error) {
                    return [2 /*return*/, new Error('Failed to decrypt private key for data encryption')];
                }
                result[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] = saltStringified;
                result[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                    encryptedPrivateKey;
                _c.label = 4;
            case 4: return [2 /*return*/, result];
            case 5: return [2 /*return*/, new Error('Argument given must be a CryptoKeyPair')];
            case 6:
                err_3 = _c.sent();
                return [2 /*return*/, err_3];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.dataSignExportKeyPair = dataSignExportKeyPair;
var dataSignExportKeyPairAsString = function (keyPair, password) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.dataSignExportKeyPair(keyPair, password)];
            case 1:
                res = _a.sent();
                if (res instanceof Error) {
                    return [2 /*return*/, res];
                }
                if (typed_array_utils_1.isTypedArray(res)) {
                    return [2 /*return*/, typed_array_utils_1.typedArrayToString(res)];
                }
                return [2 /*return*/, serialization_utils_1.stringify(res)];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, err_4];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dataSignExportKeyPairAsString = dataSignExportKeyPairAsString;
var dataSignImportKey = function (key, isPublic) {
    if (isPublic === void 0) { isPublic = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (typeof key !== 'object') {
                        return [2 /*return*/, new Error('Unsupported argument type')];
                    }
                    return [4 /*yield*/, init_1.cryptoModuleDataSign.importKey(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEY_DESC, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE, [
                            isPublic
                                ? data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE
                                : data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE,
                        ])];
                case 1:
                    res = _a.sent();
                    if (!encryption_keys_utils_2.isCryptoKey(res)) {
                        return [2 /*return*/, new Error("Can't import the key")];
                    }
                    return [2 /*return*/, res];
                case 2:
                    err_5 = _a.sent();
                    return [2 /*return*/, err_5];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.dataSignImportKey = dataSignImportKey;
var dataSignImportPublicKey = function (key) { return exports.dataSignImportKey(key, true); };
exports.dataSignImportPublicKey = dataSignImportPublicKey;
var dataSignImportPrivateKey = function (key) { return exports.dataSignImportKey(key, false); };
exports.dataSignImportPrivateKey = dataSignImportPrivateKey;
var dataSignImportKeyPair = function (keyPair, checkPrivateKey) {
    if (checkPrivateKey === void 0) { checkPrivateKey = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var privateKeyToImport, importResult, publicKey, privateKey, err_6;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    if (!exports.dataSignIsCryptoKeyPairImported(keyPair, checkPrivateKey)) return [3 /*break*/, 2];
                    privateKeyToImport = keyPair[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME];
                    if (checkPrivateKey && !privateKeyToImport) {
                        return [2 /*return*/, new Error('The private key is empty')];
                    }
                    return [4 /*yield*/, Promise.all([
                            exports.dataSignImportPublicKey(keyPair[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]),
                            checkPrivateKey || privateKeyToImport
                                ? exports.dataSignImportPrivateKey(privateKeyToImport)
                                : Promise.resolve(undefined),
                        ]).catch(function (err) { return [err, err]; })];
                case 1:
                    importResult = _b.sent();
                    publicKey = importResult[0];
                    privateKey = importResult[1];
                    if (publicKey instanceof Error) {
                        return [2 /*return*/, publicKey];
                    }
                    if (privateKey instanceof Error) {
                        if (checkPrivateKey) {
                            return [2 /*return*/, privateKey];
                        }
                        privateKey = undefined;
                    }
                    return [2 /*return*/, (_a = {},
                            _a[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] = publicKey,
                            _a[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = privateKey,
                            _a)];
                case 2: return [2 /*return*/, new Error('The argument must be an instance of CryptoKeyPair')];
                case 3:
                    err_6 = _b.sent();
                    return [2 /*return*/, err_6];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.dataSignImportKeyPair = dataSignImportKeyPair;
var dataSignImportKeyPairFromString = function (keyPairString, password) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPairObject, decryptedPrivateKey, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(typeof keyPairString === 'string')) return [3 /*break*/, 5];
                keyPairObject = JSON.parse(keyPairString);
                if (!(password &&
                    keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME])) return [3 /*break*/, 2];
                if (typeof keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] !==
                    'string') {
                    return [2 /*return*/, new Error('A salt value must be a string')];
                }
                return [4 /*yield*/, decrypt_password_utils_1.decryptDataByPassword(password, keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME], keyPairObject[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME])];
            case 1:
                decryptedPrivateKey = _a.sent();
                if (decryptedPrivateKey instanceof Error) {
                    console.error('Failed to decrypt the data sign private key');
                    return [2 /*return*/, decryptedPrivateKey];
                }
                try {
                    keyPairObject[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                        JSON.parse(decryptedPrivateKey);
                }
                catch (err) {
                    console.error(err);
                    return [2 /*return*/, new Error('Failed to parse datasign Private key from the string decrypted')];
                }
                _a.label = 2;
            case 2:
                if (!exports.dataSignIsCryptoKeyPairImported(keyPairObject, !!password)) return [3 /*break*/, 4];
                return [4 /*yield*/, exports.dataSignImportKeyPair(keyPairObject, !!password)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [2 /*return*/, new Error('There is a wrong format for the imported key pair')];
            case 5: return [2 /*return*/, new Error('The key must be a string')];
            case 6:
                err_7 = _a.sent();
                return [2 /*return*/, err_7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.dataSignImportKeyPairFromString = dataSignImportKeyPairFromString;
var dataSignImportKeyFromString = function (keyString, isPublic) {
    if (isPublic === void 0) { isPublic = true; }
    try {
        if (typeof keyString !== 'string') {
            return new Error('The key must be a string');
        }
        var parsedKey = JSON.parse(keyString);
        return exports.dataSignImportKey(parsedKey, isPublic);
    }
    catch (err) {
        return err;
    }
};
exports.dataSignImportKeyFromString = dataSignImportKeyFromString;
var dataSignImportPublicKeyFromString = function (key) {
    return exports.dataSignImportKeyFromString(key, true);
};
exports.dataSignImportPublicKeyFromString = dataSignImportPublicKeyFromString;
var dataSignImportPrivateKeyFromString = function (key) {
    return exports.dataSignImportKeyFromString(key, false);
};
exports.dataSignImportPrivateKeyFromString = dataSignImportPrivateKeyFromString;
var dataSignCheckIfStringIsKeyPair = function (keyString) {
    return (keyString.includes(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME) &&
        keyString.includes(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME));
};
exports.dataSignCheckIfStringIsKeyPair = dataSignCheckIfStringIsKeyPair;
var dataSignGetKeyOfType = function (key, type) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPair, keyFromString, keys, keyResulted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof key === 'string')) return [3 /*break*/, 4];
                if (!exports.dataSignCheckIfStringIsKeyPair(key)) return [3 /*break*/, 2];
                return [4 /*yield*/, exports.dataSignImportKeyPairFromString(key)];
            case 1:
                keyPair = _a.sent();
                if (keyPair instanceof Error) {
                    return [2 /*return*/, keyPair];
                }
                return [2 /*return*/, exports.dataSignGetKeyOfType(keyPair, type)];
            case 2: return [4 /*yield*/, exports.dataSignImportKeyFromString(key, type === 'public')];
            case 3:
                keyFromString = _a.sent();
                if (keyFromString instanceof Error) {
                    return [2 /*return*/, keyFromString];
                }
                return [2 /*return*/, exports.dataSignGetKeyOfType(keyFromString, type)];
            case 4:
                if (encryption_keys_utils_2.isCryptoKey(key)) {
                    return [2 /*return*/, key.type === type ? key : new Error(data_sign_utils_const_1.KEY_NOT_FOUND_ERROR_MESSAGE)];
                }
                if (typeof key === 'object') {
                    keys = Object.values(key);
                    keyResulted = keys.find(function (k) { return k && k.type && k.type === type; });
                    return [2 /*return*/, keyResulted || new Error(data_sign_utils_const_1.KEY_NOT_FOUND_ERROR_MESSAGE)];
                }
                return [2 /*return*/, new Error('There is an unsupported type of the key given')];
        }
    });
}); };
exports.dataSignGetKeyOfType = dataSignGetKeyOfType;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key in native
 * format
 * @param {} key
 */
var dataSignImportEncryptionKey = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var jwk;
    return __generator(this, function (_a) {
        if (typed_array_utils_1.isTypedArray(key)) {
            return [2 /*return*/, exports.dataSignImportKey(key)];
        }
        else {
            jwk = encryption_keys_utils_1.getJWKOrBool(key);
            if (typeof jwk === 'object') {
                return [2 /*return*/, exports.dataSignImportKey(jwk)];
            }
            else if (typeof key === 'string') {
                return [2 /*return*/, exports.dataSignImportKeyFromString(key)];
            }
        }
        return [2 /*return*/, new Error('There is an unknown key format')];
    });
}); };
exports.dataSignImportEncryptionKey = dataSignImportEncryptionKey;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key as a string
 * @param {} key
 */
var dataSignConvertAndExportKeyAsString = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var cryptoKeyImported;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.dataSignImportEncryptionKey(key)];
            case 1:
                cryptoKeyImported = _a.sent();
                if (cryptoKeyImported instanceof Error) {
                    return [2 /*return*/, cryptoKeyImported];
                }
                return [2 /*return*/, exports.dataSignExportKeyAsString(cryptoKeyImported)];
        }
    });
}); };
exports.dataSignConvertAndExportKeyAsString = dataSignConvertAndExportKeyAsString;
//# sourceMappingURL=keys.data-sign-utils.js.map