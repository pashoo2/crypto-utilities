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
exports.encryptToString = exports.encryptToTypedArray = exports.encryptNative = exports.getInitializationVectorFromDataString = exports.getInitializationVectorFromData = exports.concatDataWithInitializationVector = exports.generateInitializationVectorNativeArrayBuffer = exports.generateInitializationVectorNative = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var crypto_utils_const_1 = require("./crypto-utils.const");
var keys_encryption_utils_1 = require("./keys.encryption-utils");
var init_1 = require("../init");
var encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
/**
 * return a random vector, used e.g. for aes-gcm
 * encryption
 * @param vectorLength - length of the vector generated
 */
var generateInitializationVectorNative = function (vectorLength) {
    if (vectorLength === void 0) { vectorLength = crypto_utils_const_1.INITIALIZATION_VECTOR_DEFAULT_LENGTH; }
    try {
        return init_1.crypto.getRandomValues(new Uint8Array(vectorLength));
    }
    catch (err) {
        return err;
    }
};
exports.generateInitializationVectorNative = generateInitializationVectorNative;
var generateInitializationVectorNativeArrayBuffer = function (vectorLength) {
    var iv = exports.generateInitializationVectorNative(vectorLength);
    if (iv instanceof Error) {
        return iv;
    }
    return typed_array_utils_1.arrayBufferFromTypedArray(iv);
};
exports.generateInitializationVectorNativeArrayBuffer = generateInitializationVectorNativeArrayBuffer;
var concatDataWithInitializationVector = function (options) {
    try {
        return typed_array_utils_1.concatArrayBuffers(options.iv, options.data);
    }
    catch (err) {
        return err;
    }
};
exports.concatDataWithInitializationVector = concatDataWithInitializationVector;
var getInitializationVectorFromData = function (arrayBuffer, ivLengthBytes) {
    if (ivLengthBytes === void 0) { ivLengthBytes = crypto_utils_const_1.INITIALIZATION_VECTOR_DEFAULT_LENGTH; }
    try {
        var iv = typed_array_utils_1.getBytesFromArrayBuffer(arrayBuffer, 0, ivLengthBytes);
        if (iv instanceof Error) {
            return iv;
        }
        var data = typed_array_utils_1.getBytesFromArrayBuffer(arrayBuffer, ivLengthBytes);
        if (data instanceof Error) {
            return data;
        }
        return {
            iv: iv,
            data: data,
        };
    }
    catch (err) {
        return err;
    }
};
exports.getInitializationVectorFromData = getInitializationVectorFromData;
var getInitializationVectorFromDataString = function (data, ivLengthBytes) {
    var dataArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(data);
    if (dataArrayBuffer instanceof Error) {
        return dataArrayBuffer;
    }
    return exports.getInitializationVectorFromData(dataArrayBuffer, ivLengthBytes);
};
exports.getInitializationVectorFromDataString = getInitializationVectorFromDataString;
var encryptNative = function (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig) {
    if (cryptoKeyConfig === void 0) { cryptoKeyConfig = crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, init_1.cryptoModuleDataSign.encrypt(cryptoKeyConfig, key, data)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.encryptNative = encryptNative;
var encryptToTypedArray = function (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var k, d;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!encryption_keys_utils_1.isCryptoKey(key)) return [3 /*break*/, 1];
                k = key;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, keys_encryption_utils_1.getKeyOfType(key, crypto_utils_const_1.CRYPTO_UTIL_ENCRYPTION_KEY_TYPE)];
            case 2:
                k = _a.sent();
                _a.label = 3;
            case 3:
                if (k instanceof Error) {
                    return [2 /*return*/, k];
                }
                d = typed_array_utils_1.convertToTypedArray(data);
                if (d instanceof Error) {
                    return [2 /*return*/, d];
                }
                return [2 /*return*/, exports.encryptNative(k, d, cryptoKeyConfig)];
        }
    });
}); };
exports.encryptToTypedArray = encryptToTypedArray;
var encryptToString = function (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var encryptedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.encryptToTypedArray(key, data)];
            case 1:
                encryptedData = _a.sent();
                if (encryptedData instanceof Error) {
                    return [2 /*return*/, encryptedData];
                }
                return [2 /*return*/, typed_array_utils_1.typedArrayToString(encryptedData)];
        }
    });
}); };
exports.encryptToString = encryptToString;
//# sourceMappingURL=encrypt-data.encryption-utils.js.map