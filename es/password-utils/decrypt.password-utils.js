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
exports.decryptDataByPassword = exports.decryptDataArrayOrStringWithKeyToUInt8Array = exports.decryptDataWithKeyFromUint8Array = exports.decryptDataWithKey = exports.decryptDataWithKeyNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const derive_key_password_utils_1 = require("./derive-key.password-utils");
const encrypt_data_encryption_utils_1 = require("../encryption-utils/encrypt-data.encryption-utils");
const decrypt_data_encryption_utils_1 = require("../encryption-utils/decrypt-data.encryption-utils");
const password_utils_const_1 = require("./password-utils.const");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const decryptDataWithKeyNative = (key, dataWithIv) => __awaiter(void 0, void 0, void 0, function* () {
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
    const dataWithIvStructure = encrypt_data_encryption_utils_1.getInitializationVectorFromData(dataWithIv);
    if (dataWithIvStructure instanceof Error) {
        return dataWithIvStructure;
    }
    const { iv, data } = dataWithIvStructure;
    return decrypt_data_encryption_utils_1.decryptDataFromString(cryptoKey, data, Object.assign(Object.assign({}, password_utils_const_1.PASSWORD_ENCRYPTION_UTILS_DECRYPTION_PARAMS), { iv }));
});
exports.decryptDataWithKeyNative = decryptDataWithKeyNative;
const decryptDataWithKey = (key, dataWithIv) => __awaiter(void 0, void 0, void 0, function* () {
    const dataWithIvArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(dataWithIv);
    if (dataWithIvArrayBuffer instanceof Error) {
        return dataWithIvArrayBuffer;
    }
    const decryptedArrayBuffer = yield exports.decryptDataWithKeyNative(key, dataWithIvArrayBuffer);
    if (decryptedArrayBuffer instanceof Error) {
        return decryptedArrayBuffer;
    }
    return typed_array_utils_1.encodeArrayBufferToDOMString(decryptedArrayBuffer);
});
exports.decryptDataWithKey = decryptDataWithKey;
const decryptDataWithKeyFromUint8Array = (key, dataWithIv) => __awaiter(void 0, void 0, void 0, function* () {
    const decryptedArrayBuffer = yield exports.decryptDataWithKeyNative(key, dataWithIv);
    if (decryptedArrayBuffer instanceof Error) {
        return decryptedArrayBuffer;
    }
    return typed_array_utils_1.encodeArrayBufferToDOMString(decryptedArrayBuffer);
});
exports.decryptDataWithKeyFromUint8Array = decryptDataWithKeyFromUint8Array;
const decryptDataArrayOrStringWithKeyToUInt8Array = (key, dataWithIv) => __awaiter(void 0, void 0, void 0, function* () {
    const dataWithIvArrayBuffer = typeof dataWithIv === 'string'
        ? typed_array_utils_1.decodeDOMStringToArrayBuffer(dataWithIv)
        : dataWithIv.buffer;
    if (dataWithIvArrayBuffer instanceof Error) {
        return dataWithIvArrayBuffer;
    }
    const decryptedArrayBuffer = yield exports.decryptDataWithKeyNative(key, dataWithIvArrayBuffer);
    if (decryptedArrayBuffer instanceof Error) {
        return decryptedArrayBuffer;
    }
    return new Uint8Array(decryptedArrayBuffer);
});
exports.decryptDataArrayOrStringWithKeyToUInt8Array = decryptDataArrayOrStringWithKeyToUInt8Array;
const decryptDataByPassword = (password, salt, dataWithIv) => __awaiter(void 0, void 0, void 0, function* () {
    const key = yield derive_key_password_utils_1.generatePasswordKeyByPasswordString(password, salt);
    if (key instanceof Error) {
        console.error(key);
        return key;
    }
    return exports.decryptDataWithKey(key, dataWithIv);
});
exports.decryptDataByPassword = decryptDataByPassword;
//# sourceMappingURL=decrypt.password-utils.js.map