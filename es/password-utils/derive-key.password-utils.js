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
exports.importPasswordKeyFromString = exports.importPasswordKey = exports.generatePasswordKeyAsString = exports.generatePasswordKeyInExportFormat = exports.exportPasswordKeyAsString = exports.exportPasswordKey = exports.generatePasswordKeyByPasswordString = exports.getDerivationNative = exports.generatePasswordKey = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
var salt_utils_1 = require("../encryption-utils/salt-utils");
var init_1 = require("../init");
var password_utils_const_1 = require("./password-utils.const");
var encryption_keys_utils_1 = require("@root/encryption-keys-utils");
var generatePasswordKey = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!typed_array_utils_1.isTypedArray(password)) {
                    return [2 /*return*/, new Error('The password must have a TypedArray type')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, init_1.cryptoModuleDataSign.importKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_KEY_IMPORTED_FORMAT, password, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_ALGORITHM, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_IS_KEY_EXTRACTABLE, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_USAGES)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, err_1];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.generatePasswordKey = generatePasswordKey;
var getDerivationNative = function (passwordKey, saltValue) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!saltValue) {
                    return [2 /*return*/, new Error('The generated random value of salt is empty')];
                }
                if (!typed_array_utils_1.isTypedArray(saltValue)) {
                    return [2 /*return*/, new Error('The password must have a TypedArray type')];
                }
                if (!encryption_keys_utils_1.isCryptoKey(passwordKey)) {
                    return [2 /*return*/, new Error('A password key must be an instance of a CryptoKey')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, init_1.crypto.subtle.deriveKey(__assign(__assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_BASE_KEY_CONFIG), { salt: saltValue }), passwordKey, __assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG), password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES)];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, err_2];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getDerivationNative = getDerivationNative;
var generatePasswordKeyByPasswordString = function (passwordString, saltValue) { return __awaiter(void 0, void 0, void 0, function () {
    var passwordArrayBuffer, passwordBaseKey, saltImported;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                passwordArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(passwordString);
                if (passwordArrayBuffer instanceof Error) {
                    return [2 /*return*/, passwordArrayBuffer];
                }
                return [4 /*yield*/, exports.generatePasswordKey(passwordArrayBuffer)];
            case 1:
                passwordBaseKey = _a.sent();
                if (passwordBaseKey instanceof Error) {
                    return [2 /*return*/, passwordBaseKey];
                }
                saltImported = salt_utils_1.importSalt(saltValue);
                if (saltImported instanceof Error) {
                    return [2 /*return*/, saltImported];
                }
                return [2 /*return*/, exports.getDerivationNative(passwordBaseKey, saltImported)];
        }
    });
}); };
exports.generatePasswordKeyByPasswordString = generatePasswordKeyByPasswordString;
var exportPasswordKey = function (passwordKey) {
    try {
        return init_1.cryptoModuleDataSign.exportKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT, passwordKey);
    }
    catch (err) {
        console.error(err);
        return err;
    }
};
exports.exportPasswordKey = exportPasswordKey;
var exportPasswordKeyAsString = function (passwordKey) { return __awaiter(void 0, void 0, void 0, function () {
    var cryptoKey, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, init_1.cryptoModuleDataSign.exportKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT, passwordKey)];
            case 1:
                cryptoKey = _a.sent();
                if (cryptoKey instanceof Error) {
                    return [2 /*return*/, cryptoKey];
                }
                return [2 /*return*/, JSON.stringify(cryptoKey)];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [2 /*return*/, err_3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.exportPasswordKeyAsString = exportPasswordKeyAsString;
var generatePasswordKeyInExportFormat = function (passwordString, salt) { return __awaiter(void 0, void 0, void 0, function () {
    var passwordKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.generatePasswordKeyByPasswordString(passwordString, salt)];
            case 1:
                passwordKey = _a.sent();
                if (passwordKey instanceof Error) {
                    return [2 /*return*/, passwordKey];
                }
                return [2 /*return*/, exports.exportPasswordKey(passwordKey)];
        }
    });
}); };
exports.generatePasswordKeyInExportFormat = generatePasswordKeyInExportFormat;
var generatePasswordKeyAsString = function (passwordString, salt) { return __awaiter(void 0, void 0, void 0, function () {
    var passwordKeyExported;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.generatePasswordKeyInExportFormat(passwordString, salt)];
            case 1:
                passwordKeyExported = _a.sent();
                if (passwordKeyExported instanceof Error) {
                    return [2 /*return*/, passwordKeyExported];
                }
                return [2 /*return*/, JSON.stringify(passwordKeyExported)];
        }
    });
}); };
exports.generatePasswordKeyAsString = generatePasswordKeyAsString;
var importPasswordKey = function (passwordKey) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, init_1.cryptoModuleDataSign.importKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IMPORT_FORMAT, passwordKey, __assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG), password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, err_4];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.importPasswordKey = importPasswordKey;
var importPasswordKeyFromString = function (passwordKey) { return __awaiter(void 0, void 0, void 0, function () {
    var keyExportedFormat, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                keyExportedFormat = JSON.parse(passwordKey);
                return [4 /*yield*/, exports.importPasswordKey(keyExportedFormat)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                err_5 = _a.sent();
                console.error(err_5);
                return [2 /*return*/, err_5];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.importPasswordKeyFromString = importPasswordKeyFromString;
//# sourceMappingURL=derive-key.password-utils.js.map