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
exports.decryptData = exports.decryptDataFromString = exports.decryptNative = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var serialization_utils_1 = require("@pashoo2/serialization-utils");
var crypto_utils_const_1 = require("./crypto-utils.const");
var keys_encryption_utils_1 = require("./keys.encryption-utils");
var init_1 = require("../init");
var encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
var decryptNative = function (key, data, decryptKeyParams) {
    if (decryptKeyParams === void 0) { decryptKeyParams = crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!typed_array_utils_1.isTypedArray(data)) {
                        return [2 /*return*/, new Error('The data type is not supported')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, init_1.cryptoModuleDataSign.decrypt(decryptKeyParams, key, data)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.decryptNative = decryptNative;
var decryptDataFromString = function (key, data, decryptKeyParams) { return __awaiter(void 0, void 0, void 0, function () {
    var k, d;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!encryption_keys_utils_1.isCryptoKey(key)) return [3 /*break*/, 1];
                k = key;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, keys_encryption_utils_1.getKeyOfType(key, crypto_utils_const_1.CRYPTO_UTIL_DESCRIPTION_KEY_TYPE)];
            case 2:
                k = _a.sent();
                _a.label = 3;
            case 3:
                if (k instanceof Error) {
                    return [2 /*return*/, k];
                }
                if (typed_array_utils_1.isTypedArray(data)) {
                    d = data;
                }
                else if (typeof data === 'object' && !(data instanceof Error)) {
                    try {
                        d = serialization_utils_1.stringify(data);
                    }
                    catch (err) {
                        return [2 /*return*/, err];
                    }
                    d = typed_array_utils_1.convertToTypedArray(d);
                }
                else if (typeof data === 'string') {
                    d = typed_array_utils_1.convertToTypedArray(data);
                }
                else {
                    return [2 /*return*/, new Error('Unsupported data type')];
                }
                if (d instanceof Error) {
                    return [2 /*return*/, d];
                }
                return [2 /*return*/, exports.decryptNative(k, d, decryptKeyParams)];
        }
    });
}); };
exports.decryptDataFromString = decryptDataFromString;
var decryptData = function (key, data, decryptKeyParams) { return __awaiter(void 0, void 0, void 0, function () {
    var decryptedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.decryptDataFromString(key, data, decryptKeyParams)];
            case 1:
                decryptedData = _a.sent();
                if (decryptedData instanceof Error) {
                    return [2 /*return*/, decryptedData];
                }
                return [2 /*return*/, typed_array_utils_1.typedArrayToString(decryptedData)];
        }
    });
}); };
exports.decryptData = decryptData;
//# sourceMappingURL=decrypt-data.encryption-utils.js.map