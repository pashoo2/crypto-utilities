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
exports.getKeyOfType = exports.checkIfStringIsKeyPair = exports.importPrivateKeyFromString = exports.importPublicKeyFromString = exports.importKeyFromString = exports.importKeyPairFromString = exports.importKeyPair = exports.importPrivateKey = exports.importPublicKey = exports.importKey = exports.exportKeyPairAsString = exports.exportKeyPair = exports.exportPublicKeyAsString = exports.exportPublicKey = exports.exportKeyAsString = exports.exportKey = exports.generateKeyPair = exports.isCryptoKeyPairImported = void 0;
var serialization_utils_1 = require("@pashoo2/serialization-utils");
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var crypto_utils_const_1 = require("./crypto-utils.const");
var salt_utils_1 = require("./salt-utils");
var crypto_utils_const_2 = require("./crypto-utils.const");
var encrypt_password_utils_1 = require("../password-utils/encrypt.password-utils");
var decrypt_password_utils_1 = require("../password-utils/decrypt.password-utils");
var encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
var typed_array_utils_2 = require("@pashoo2/typed-array-utils");
var init_1 = require("../init");
var isCryptoKeyPairImported = function (key, checkPrivateKey) {
    if (checkPrivateKey === void 0) { checkPrivateKey = true; }
    return (typeof key === 'object' &&
        !!key[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] &&
        (!checkPrivateKey || !!key[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]));
};
exports.isCryptoKeyPairImported = isCryptoKeyPairImported;
var generateKeyPair = function () {
    return init_1.cryptoModuleDataSign.generateKey(crypto_utils_const_1.CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS, crypto_utils_const_1.CRYPTO_UTIL_KEYS_EXTRACTABLE, crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_USAGES);
};
exports.generateKeyPair = generateKeyPair;
var exportKey = function (key) {
    try {
        return init_1.cryptoModuleDataSign.exportKey(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key);
    }
    catch (err) {
        console.error(err);
        return err;
    }
};
exports.exportKey = exportKey;
var exportKeyAsString = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = serialization_utils_1.stringify;
                return [4 /*yield*/, exports.exportKey(key)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent())])];
        }
    });
}); };
exports.exportKeyAsString = exportKeyAsString;
var exportPublicKey = function (keyPair) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.exportKey(keyPair.publicKey)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.exportPublicKey = exportPublicKey;
var exportPublicKeyAsString = function (keyPair) { return __awaiter(void 0, void 0, void 0, function () {
    var publicKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.exportPublicKey(keyPair)];
            case 1:
                publicKey = _a.sent();
                if (publicKey instanceof Error) {
                    return [2 /*return*/, publicKey];
                }
                return [2 /*return*/, serialization_utils_1.stringify(publicKey)];
        }
    });
}); };
exports.exportPublicKeyAsString = exportPublicKeyAsString;
var exportKeyPair = function (keyPair, password) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, privateKey, publicKey, result, salt, encryptedPrivateKey, saltStringified, decryptedPrivateKey, err_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                if (!encryption_keys_utils_1.isCryptoKeyPair(keyPair, !!password)) return [3 /*break*/, 5];
                return [4 /*yield*/, Promise.all([
                        password || keyPair.privateKey
                            ? exports.exportKey(keyPair.privateKey)
                            : Promise.resolve(undefined),
                        exports.exportKey(keyPair.publicKey),
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
                    _b[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] = publicKey,
                    _b[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = privateKey,
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
                saltStringified = typed_array_utils_1.typedArrayToString(salt);
                return [4 /*yield*/, decrypt_password_utils_1.decryptDataByPassword(password, saltStringified, encryptedPrivateKey)];
            case 3:
                decryptedPrivateKey = _c.sent();
                if (decryptedPrivateKey instanceof Error) {
                    return [2 /*return*/, new Error('Failed to decrypt private key for data encryption')];
                }
                result[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] = saltStringified;
                result[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = encryptedPrivateKey;
                _c.label = 4;
            case 4: return [2 /*return*/, result];
            case 5: return [2 /*return*/, new Error('Argument given must be a CryptoKeyPair')];
            case 6:
                err_1 = _c.sent();
                return [2 /*return*/, err_1];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.exportKeyPair = exportKeyPair;
var exportKeyPairAsString = function (keyPair, password) { return __awaiter(void 0, void 0, void 0, function () {
    var exportedKeyPair;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.exportKeyPair(keyPair, password)];
            case 1:
                exportedKeyPair = _a.sent();
                if (exportedKeyPair instanceof Error) {
                    return [2 /*return*/, exportedKeyPair];
                }
                if (typed_array_utils_2.isTypedArray(exportedKeyPair)) {
                    return [2 /*return*/, typed_array_utils_1.typedArrayToString(exportedKeyPair)];
                }
                try {
                    return [2 /*return*/, serialization_utils_1.stringify(exportedKeyPair)];
                }
                catch (err) {
                    return [2 /*return*/, err];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.exportKeyPairAsString = exportKeyPairAsString;
var importKey = function (key, isPublic) {
    if (isPublic === void 0) { isPublic = true; }
    return init_1.cryptoModuleDataSign.importKey(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key, crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC, crypto_utils_const_1.CRYPTO_UTIL_KEYS_EXTRACTABLE, [isPublic ? crypto_utils_const_1.CRYPTO_UTIL_PUBLIC_KEY_USAGE : crypto_utils_const_1.CRYPTO_UTIL_PRIVATE_KEY_USAGE]);
};
exports.importKey = importKey;
var importPublicKey = function (key) {
    return exports.importKey(key, true);
};
exports.importPublicKey = importPublicKey;
var importPrivateKey = function (key) {
    return exports.importKey(key, false);
};
exports.importPrivateKey = importPrivateKey;
var importKeyPair = function (keyPair, checkPrivateKey) {
    if (checkPrivateKey === void 0) { checkPrivateKey = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var importResult, publicKey, privateKey, err_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    if (!exports.isCryptoKeyPairImported(keyPair, checkPrivateKey)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all([
                            (function () { return __awaiter(void 0, void 0, void 0, function () {
                                var err_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, exports.importPublicKey(keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME])];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2:
                                            err_3 = _a.sent();
                                            return [2 /*return*/, err_3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })(),
                            (function () { return __awaiter(void 0, void 0, void 0, function () {
                                var err_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 3, , 4]);
                                            if (!(checkPrivateKey ||
                                                keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME])) return [3 /*break*/, 2];
                                            return [4 /*yield*/, exports.importPrivateKey(keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME])];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2: return [3 /*break*/, 4];
                                        case 3:
                                            err_4 = _a.sent();
                                            return [2 /*return*/, err_4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })(),
                        ])];
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
                            _a[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] = publicKey,
                            _a[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = privateKey,
                            _a)];
                case 2: return [2 /*return*/, new Error('The argument must be an instance of CryptoKeyPair')];
                case 3:
                    err_2 = _b.sent();
                    return [2 /*return*/, err_2];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.importKeyPair = importKeyPair;
var importKeyPairFromString = function (keyPairString, password) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPairObject, decryptedPrivateKey, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                if (!(typeof keyPairString === 'string')) return [3 /*break*/, 4];
                keyPairObject = JSON.parse(keyPairString);
                if (!(password && keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME])) return [3 /*break*/, 2];
                if (typeof keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] !== 'string') {
                    return [2 /*return*/, new Error('A salt value must be a string')];
                }
                return [4 /*yield*/, decrypt_password_utils_1.decryptDataByPassword(password, keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME], keyPairObject[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME])];
            case 1:
                decryptedPrivateKey = _a.sent();
                if (decryptedPrivateKey instanceof Error) {
                    console.error('Failed to decrypt the data encryption private key');
                    return [2 /*return*/, decryptedPrivateKey];
                }
                try {
                    keyPairObject[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                        JSON.parse(decryptedPrivateKey);
                }
                catch (err) {
                    console.error(err);
                    return [2 /*return*/, new Error('Failed to parse dataencryption Private key from the string decrypted')];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, exports.importKeyPair(keyPairObject, !!password)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [2 /*return*/, new Error('A key pair must be a string')];
            case 5:
                err_5 = _a.sent();
                return [2 /*return*/, err_5];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.importKeyPairFromString = importKeyPairFromString;
var importKeyFromString = function (keyString, isPublic) {
    if (isPublic === void 0) { isPublic = true; }
    try {
        return exports.importKey(JSON.parse(keyString), isPublic);
    }
    catch (err) {
        return err;
    }
};
exports.importKeyFromString = importKeyFromString;
var importPublicKeyFromString = function (key) { return exports.importKeyFromString(key, true); };
exports.importPublicKeyFromString = importPublicKeyFromString;
var importPrivateKeyFromString = function (key) { return exports.importKeyFromString(key, false); };
exports.importPrivateKeyFromString = importPrivateKeyFromString;
var checkIfStringIsKeyPair = function (keyString) {
    return (keyString.includes(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME) &&
        keyString.includes(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME));
};
exports.checkIfStringIsKeyPair = checkIfStringIsKeyPair;
var KEY_NOT_FOUND_ERROR_MESSAGE = 'A key of the required type was not found';
var getKeyOfType = function (key, type) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPair, keyFromString, keys, keyResulted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof key === 'string')) return [3 /*break*/, 4];
                if (!exports.checkIfStringIsKeyPair(key)) return [3 /*break*/, 2];
                return [4 /*yield*/, exports.importKeyPairFromString(key)];
            case 1:
                keyPair = _a.sent();
                if (keyPair instanceof Error) {
                    return [2 /*return*/, keyPair];
                }
                return [2 /*return*/, exports.getKeyOfType(keyPair, type)];
            case 2: return [4 /*yield*/, exports.importKeyFromString(key, type === 'public')];
            case 3:
                keyFromString = _a.sent();
                if (keyFromString instanceof Error) {
                    return [2 /*return*/, keyFromString];
                }
                return [2 /*return*/, exports.getKeyOfType(keyFromString, type)];
            case 4:
                if (encryption_keys_utils_1.isCryptoKey(key)) {
                    return [2 /*return*/, key.type === type ? key : new Error(KEY_NOT_FOUND_ERROR_MESSAGE)];
                }
                if (typeof key === 'object') {
                    keys = Object.values(key);
                    keyResulted = keys.find(function (k) { return k && k.type && k.type === type; });
                    return [2 /*return*/, keyResulted || new Error(KEY_NOT_FOUND_ERROR_MESSAGE)];
                }
                return [2 /*return*/, new Error('There is an unsupported type of the key given')];
        }
    });
}); };
exports.getKeyOfType = getKeyOfType;
//# sourceMappingURL=keys.encryption-utils.js.map