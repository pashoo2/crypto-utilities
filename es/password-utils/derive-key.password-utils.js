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
exports.importPasswordKeyFromString = exports.importPasswordKey = exports.generatePasswordKeyAsString = exports.generatePasswordKeyInExportFormat = exports.exportPasswordKeyAsString = exports.exportPasswordKey = exports.generatePasswordKeyByPasswordString = exports.getDerivationNative = exports.generatePasswordKey = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const salt_utils_1 = require("../encryption-utils/salt-utils");
const init_1 = require("../init");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const password_utils_const_1 = require("./password-utils.const");
const generatePasswordKey = (password) => __awaiter(void 0, void 0, void 0, function* () {
    if (!typed_array_utils_1.isTypedArray(password)) {
        return new Error('The password must have a TypedArray type');
    }
    try {
        return yield init_1.cryptoModuleDataSign.importKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_KEY_IMPORTED_FORMAT, password, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_ALGORITHM, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_GENERATION_IS_KEY_EXTRACTABLE, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_USAGES);
    }
    catch (err) {
        return err;
    }
});
exports.generatePasswordKey = generatePasswordKey;
const getDerivationNative = (passwordKey, saltValue) => __awaiter(void 0, void 0, void 0, function* () {
    if (!saltValue) {
        return new Error('The generated random value of salt is empty');
    }
    if (!typed_array_utils_1.isTypedArray(saltValue)) {
        return new Error('The password must have a TypedArray type');
    }
    if (!encryption_keys_utils_1.isCryptoKey(passwordKey)) {
        return new Error('A password key must be an instance of a CryptoKey');
    }
    try {
        return yield init_1.crypto.subtle.deriveKey(Object.assign(Object.assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_BASE_KEY_CONFIG), { salt: saltValue }), passwordKey, Object.assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG), password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES);
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
exports.getDerivationNative = getDerivationNative;
const generatePasswordKeyByPasswordString = (passwordString, saltValue) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(passwordString);
    if (passwordArrayBuffer instanceof Error) {
        return passwordArrayBuffer;
    }
    const passwordBaseKey = yield exports.generatePasswordKey(passwordArrayBuffer);
    if (passwordBaseKey instanceof Error) {
        return passwordBaseKey;
    }
    const saltImported = salt_utils_1.importSalt(saltValue);
    if (saltImported instanceof Error) {
        return saltImported;
    }
    return exports.getDerivationNative(passwordBaseKey, saltImported);
});
exports.generatePasswordKeyByPasswordString = generatePasswordKeyByPasswordString;
const exportPasswordKey = (passwordKey) => {
    try {
        return init_1.cryptoModuleDataSign.exportKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT, passwordKey);
    }
    catch (err) {
        console.error(err);
        return err;
    }
};
exports.exportPasswordKey = exportPasswordKey;
const exportPasswordKeyAsString = (passwordKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cryptoKey = yield init_1.cryptoModuleDataSign.exportKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_EXPORT_FORMAT, passwordKey);
        if (cryptoKey instanceof Error) {
            return cryptoKey;
        }
        return JSON.stringify(cryptoKey);
    }
    catch (err) {
        console.error(err);
        return err;
    }
});
exports.exportPasswordKeyAsString = exportPasswordKeyAsString;
const generatePasswordKeyInExportFormat = (passwordString, salt) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordKey = yield exports.generatePasswordKeyByPasswordString(passwordString, salt);
    if (passwordKey instanceof Error) {
        return passwordKey;
    }
    return exports.exportPasswordKey(passwordKey);
});
exports.generatePasswordKeyInExportFormat = generatePasswordKeyInExportFormat;
const generatePasswordKeyAsString = (passwordString, salt) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordKeyExported = yield exports.generatePasswordKeyInExportFormat(passwordString, salt);
    if (passwordKeyExported instanceof Error) {
        return passwordKeyExported;
    }
    return JSON.stringify(passwordKeyExported);
});
exports.generatePasswordKeyAsString = generatePasswordKeyAsString;
const importPasswordKey = (passwordKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield init_1.cryptoModuleDataSign.importKey(password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IMPORT_FORMAT, passwordKey, Object.assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_CONFIG), password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_IS_EXPORTED, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_KEY_DERIVED_TARGET_KEY_USAGES);
    }
    catch (err) {
        return err;
    }
});
exports.importPasswordKey = importPasswordKey;
const importPasswordKeyFromString = (passwordKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const keyExportedFormat = JSON.parse(passwordKey);
        return yield exports.importPasswordKey(keyExportedFormat);
    }
    catch (err) {
        console.error(err);
        return err;
    }
});
exports.importPasswordKeyFromString = importPasswordKeyFromString;
//# sourceMappingURL=derive-key.password-utils.js.map