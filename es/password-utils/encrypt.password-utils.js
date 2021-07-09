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
exports.encryptDataWithPasswordToArrayBuffer = exports.encryptDataWithPassword = exports.encryptDataToUInt8Array = exports.encryptDataToString = exports.encryptDataToArrayBuffer = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const password_utils_const_1 = require("./password-utils.const");
const encrypt_data_encryption_utils_1 = require("../encryption-utils/encrypt-data.encryption-utils");
const encrypt_data_encryption_utils_2 = require("../encryption-utils/encrypt-data.encryption-utils");
const derive_key_password_utils_1 = require("./derive-key.password-utils");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const encryptDataToArrayBuffer = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    let cryptoKey;
    if (encryption_keys_utils_1.isCryptoKey(key)) {
        cryptoKey = key;
    }
    else {
        cryptoKey = yield derive_key_password_utils_1.importPasswordKeyFromString(key);
    }
    if (cryptoKey instanceof Error) {
        return cryptoKey;
    }
    const iv = encrypt_data_encryption_utils_2.generateInitializationVectorNativeArrayBuffer();
    if (iv instanceof Error) {
        return iv;
    }
    const dataEncrypted = yield encrypt_data_encryption_utils_2.encryptToTypedArray(cryptoKey, data, Object.assign(Object.assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_ENCRYPTION_PARAMS), { iv }));
    if (dataEncrypted instanceof Error) {
        return dataEncrypted;
    }
    return encrypt_data_encryption_utils_1.concatDataWithInitializationVector({
        data: dataEncrypted,
        iv,
    });
});
exports.encryptDataToArrayBuffer = encryptDataToArrayBuffer;
const encryptDataToString = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    const encrypted = yield exports.encryptDataToArrayBuffer(key, data);
    if (encrypted instanceof Error) {
        return encrypted;
    }
    return typed_array_utils_1.encodeArrayBufferToDOMString(encrypted);
});
exports.encryptDataToString = encryptDataToString;
const encryptDataToUInt8Array = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    const encrypted = yield exports.encryptDataToArrayBuffer(key, data);
    if (encrypted instanceof Error) {
        return encrypted;
    }
    return new Uint8Array(encrypted);
});
exports.encryptDataToUInt8Array = encryptDataToUInt8Array;
const encryptDataWithPassword = (password, salt, data) => __awaiter(void 0, void 0, void 0, function* () {
    const key = yield derive_key_password_utils_1.generatePasswordKeyByPasswordString(password, salt);
    if (key instanceof Error) {
        console.error(key);
        return key;
    }
    return exports.encryptDataToString(key, data);
});
exports.encryptDataWithPassword = encryptDataWithPassword;
const encryptDataWithPasswordToArrayBuffer = (password, salt, data) => __awaiter(void 0, void 0, void 0, function* () {
    const key = yield derive_key_password_utils_1.generatePasswordKeyByPasswordString(password, salt);
    if (key instanceof Error) {
        console.error(key);
        return key;
    }
    return exports.encryptDataToArrayBuffer(key, data);
});
exports.encryptDataWithPasswordToArrayBuffer = encryptDataWithPasswordToArrayBuffer;
//# sourceMappingURL=encrypt.password-utils.js.map