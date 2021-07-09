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
exports.encryptToString = exports.encryptToTypedArray = exports.encryptNative = exports.getInitializationVectorFromDataString = exports.getInitializationVectorFromData = exports.concatDataWithInitializationVector = exports.generateInitializationVectorNativeArrayBuffer = exports.generateInitializationVectorNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const crypto_utils_const_1 = require("./crypto-utils.const");
const keys_encryption_utils_1 = require("./keys.encryption-utils");
const init_1 = require("../init");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
/**
 * return a random vector, used e.g. for aes-gcm
 * encryption
 * @param vectorLength - length of the vector generated
 */
const generateInitializationVectorNative = (vectorLength = crypto_utils_const_1.INITIALIZATION_VECTOR_DEFAULT_LENGTH) => {
    try {
        return init_1.crypto.getRandomValues(new Uint8Array(vectorLength));
    }
    catch (err) {
        return err;
    }
};
exports.generateInitializationVectorNative = generateInitializationVectorNative;
const generateInitializationVectorNativeArrayBuffer = (vectorLength) => {
    const iv = exports.generateInitializationVectorNative(vectorLength);
    if (iv instanceof Error) {
        return iv;
    }
    return typed_array_utils_1.arrayBufferFromTypedArray(iv);
};
exports.generateInitializationVectorNativeArrayBuffer = generateInitializationVectorNativeArrayBuffer;
const concatDataWithInitializationVector = (options) => {
    try {
        return typed_array_utils_1.concatArrayBuffers(options.iv, options.data);
    }
    catch (err) {
        return err;
    }
};
exports.concatDataWithInitializationVector = concatDataWithInitializationVector;
const getInitializationVectorFromData = (arrayBuffer, ivLengthBytes = crypto_utils_const_1.INITIALIZATION_VECTOR_DEFAULT_LENGTH) => {
    try {
        const iv = typed_array_utils_1.getBytesFromArrayBuffer(arrayBuffer, 0, ivLengthBytes);
        if (iv instanceof Error) {
            return iv;
        }
        const data = typed_array_utils_1.getBytesFromArrayBuffer(arrayBuffer, ivLengthBytes);
        if (data instanceof Error) {
            return data;
        }
        return {
            iv,
            data,
        };
    }
    catch (err) {
        return err;
    }
};
exports.getInitializationVectorFromData = getInitializationVectorFromData;
const getInitializationVectorFromDataString = (data, ivLengthBytes) => {
    const dataArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(data);
    if (dataArrayBuffer instanceof Error) {
        return dataArrayBuffer;
    }
    return exports.getInitializationVectorFromData(dataArrayBuffer, ivLengthBytes);
};
exports.getInitializationVectorFromDataString = getInitializationVectorFromDataString;
const encryptNative = (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig = crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield init_1.cryptoModuleDataSign.encrypt(cryptoKeyConfig, key, data);
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.encryptNative = encryptNative;
const encryptToTypedArray = (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig) => __awaiter(void 0, void 0, void 0, function* () {
    let k;
    if (encryption_keys_utils_1.isCryptoKey(key)) {
        k = key;
    }
    else {
        k = yield keys_encryption_utils_1.getKeyOfType(key, crypto_utils_const_1.CRYPTO_UTIL_ENCRYPTION_KEY_TYPE);
    }
    if (k instanceof Error) {
        return k;
    }
    const d = typed_array_utils_1.convertToTypedArray(data);
    if (d instanceof Error) {
        return d;
    }
    return exports.encryptNative(k, d, cryptoKeyConfig);
});
exports.encryptToTypedArray = encryptToTypedArray;
const encryptToString = (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data, 
//an optional params for the encryption method
cryptoKeyConfig) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedData = yield exports.encryptToTypedArray(key, data);
    if (encryptedData instanceof Error) {
        return encryptedData;
    }
    return typed_array_utils_1.typedArrayToString(encryptedData);
});
exports.encryptToString = encryptToString;
//# sourceMappingURL=encrypt-data.encryption-utils.js.map