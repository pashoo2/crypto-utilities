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
exports.decryptDataByPassword = exports.decryptDataArrayOrStringWithKeyToUInt8Array = exports.decryptDataWithKeyFromUint8Array = exports.decryptDataWithKey = exports.decryptDataWithKeyNative = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var derive_key_password_utils_1 = require("./derive-key.password-utils");
var encrypt_data_encryption_utils_1 = require("../encryption-utils/encrypt-data.encryption-utils");
var decrypt_data_encryption_utils_1 = require("../encryption-utils/decrypt-data.encryption-utils");
var password_utils_const_1 = require("./password-utils.const");
var encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
var decryptDataWithKeyNative = function (key, dataWithIv) { return __awaiter(void 0, void 0, void 0, function () {
    var cryptoKey, dataWithIvStructure, iv, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!encryption_keys_utils_1.isCryptoKey(key)) return [3 /*break*/, 1];
                cryptoKey = key;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, derive_key_password_utils_1.importPasswordKeyFromString(key)];
            case 2:
                cryptoKey = _a.sent();
                _a.label = 3;
            case 3:
                if (cryptoKey instanceof Error) {
                    return [2 /*return*/, cryptoKey];
                }
                dataWithIvStructure = encrypt_data_encryption_utils_1.getInitializationVectorFromData(dataWithIv);
                if (dataWithIvStructure instanceof Error) {
                    return [2 /*return*/, dataWithIvStructure];
                }
                iv = dataWithIvStructure.iv, data = dataWithIvStructure.data;
                return [2 /*return*/, decrypt_data_encryption_utils_1.decryptDataFromString(cryptoKey, data, __assign(__assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_DECRYPTION_PARAMS), { iv: iv }))];
        }
    });
}); };
exports.decryptDataWithKeyNative = decryptDataWithKeyNative;
var decryptDataWithKey = function (key, dataWithIv) { return __awaiter(void 0, void 0, void 0, function () {
    var dataWithIvArrayBuffer, decryptedArrayBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataWithIvArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(dataWithIv);
                if (dataWithIvArrayBuffer instanceof Error) {
                    return [2 /*return*/, dataWithIvArrayBuffer];
                }
                return [4 /*yield*/, exports.decryptDataWithKeyNative(key, dataWithIvArrayBuffer)];
            case 1:
                decryptedArrayBuffer = _a.sent();
                if (decryptedArrayBuffer instanceof Error) {
                    return [2 /*return*/, decryptedArrayBuffer];
                }
                return [2 /*return*/, typed_array_utils_1.encodeArrayBufferToDOMString(decryptedArrayBuffer)];
        }
    });
}); };
exports.decryptDataWithKey = decryptDataWithKey;
var decryptDataWithKeyFromUint8Array = function (key, dataWithIv) { return __awaiter(void 0, void 0, void 0, function () {
    var decryptedArrayBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.decryptDataWithKeyNative(key, dataWithIv)];
            case 1:
                decryptedArrayBuffer = _a.sent();
                if (decryptedArrayBuffer instanceof Error) {
                    return [2 /*return*/, decryptedArrayBuffer];
                }
                return [2 /*return*/, typed_array_utils_1.encodeArrayBufferToDOMString(decryptedArrayBuffer)];
        }
    });
}); };
exports.decryptDataWithKeyFromUint8Array = decryptDataWithKeyFromUint8Array;
var decryptDataArrayOrStringWithKeyToUInt8Array = function (key, dataWithIv) { return __awaiter(void 0, void 0, void 0, function () {
    var dataWithIvArrayBuffer, decryptedArrayBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataWithIvArrayBuffer = typeof dataWithIv === 'string'
                    ? typed_array_utils_1.decodeDOMStringToArrayBuffer(dataWithIv)
                    : dataWithIv.buffer;
                if (dataWithIvArrayBuffer instanceof Error) {
                    return [2 /*return*/, dataWithIvArrayBuffer];
                }
                return [4 /*yield*/, exports.decryptDataWithKeyNative(key, dataWithIvArrayBuffer)];
            case 1:
                decryptedArrayBuffer = _a.sent();
                if (decryptedArrayBuffer instanceof Error) {
                    return [2 /*return*/, decryptedArrayBuffer];
                }
                return [2 /*return*/, new Uint8Array(decryptedArrayBuffer)];
        }
    });
}); };
exports.decryptDataArrayOrStringWithKeyToUInt8Array = decryptDataArrayOrStringWithKeyToUInt8Array;
var decryptDataByPassword = function (password, salt, dataWithIv) { return __awaiter(void 0, void 0, void 0, function () {
    var key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, derive_key_password_utils_1.generatePasswordKeyByPasswordString(password, salt)];
            case 1:
                key = _a.sent();
                if (key instanceof Error) {
                    console.error(key);
                    return [2 /*return*/, key];
                }
                return [2 /*return*/, exports.decryptDataWithKey(key, dataWithIv)];
        }
    });
}); };
exports.decryptDataByPassword = decryptDataByPassword;
//# sourceMappingURL=decrypt.password-utils.js.map