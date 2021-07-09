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
exports.decryptData = exports.decryptDataFromString = exports.decryptNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const serialization_utils_1 = require("@pashoo2/serialization-utils");
const crypto_utils_const_1 = require("./crypto-utils.const");
const keys_encryption_utils_1 = require("./keys.encryption-utils");
const init_1 = require("../init");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const decryptNative = (key, data, decryptKeyParams = crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC) => __awaiter(void 0, void 0, void 0, function* () {
    if (!typed_array_utils_1.isTypedArray(data)) {
        return new Error('The data type is not supported');
    }
    try {
        const res = yield init_1.cryptoModuleDataSign.decrypt(decryptKeyParams, key, data);
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.decryptNative = decryptNative;
const decryptDataFromString = (key, data, decryptKeyParams) => __awaiter(void 0, void 0, void 0, function* () {
    let k;
    if (encryption_keys_utils_1.isCryptoKey(key)) {
        k = key;
    }
    else {
        k = yield keys_encryption_utils_1.getKeyOfType(key, crypto_utils_const_1.CRYPTO_UTIL_DESCRIPTION_KEY_TYPE);
    }
    if (k instanceof Error) {
        return k;
    }
    let d;
    if (typed_array_utils_1.isTypedArray(data)) {
        d = data;
    }
    else if (typeof data === 'object' && !(data instanceof Error)) {
        try {
            d = serialization_utils_1.stringify(data);
        }
        catch (err) {
            return err;
        }
        d = typed_array_utils_1.convertToTypedArray(d);
    }
    else if (typeof data === 'string') {
        d = typed_array_utils_1.convertToTypedArray(data);
    }
    else {
        return new Error('Unsupported data type');
    }
    if (d instanceof Error) {
        return d;
    }
    return exports.decryptNative(k, d, decryptKeyParams);
});
exports.decryptDataFromString = decryptDataFromString;
const decryptData = (key, data, decryptKeyParams) => __awaiter(void 0, void 0, void 0, function* () {
    const decryptedData = yield exports.decryptDataFromString(key, data, decryptKeyParams);
    if (decryptedData instanceof Error) {
        return decryptedData;
    }
    return typed_array_utils_1.typedArrayToString(decryptedData);
});
exports.decryptData = decryptData;
//# sourceMappingURL=decrypt-data.encryption-utils.js.map