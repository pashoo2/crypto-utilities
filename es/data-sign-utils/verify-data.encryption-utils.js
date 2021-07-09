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
exports.verifyData = exports.verifyNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const serialization_utils_1 = require("@pashoo2/serialization-utils");
const data_sign_utils_const_1 = require("./data-sign-utils.const");
const keys_data_sign_utils_1 = require("./keys.data-sign-utils");
const init_1 = require("../init");
const verifyNative = (key, data, signature) => __awaiter(void 0, void 0, void 0, function* () {
    if (key.type !== data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE) {
        return new Error(`The type of the key ${key.type} may not be used for data decryption`);
    }
    if (!typed_array_utils_1.isTypedArray(data)) {
        return new Error('The data type is not supported');
    }
    try {
        const res = yield init_1.cryptoModuleDataSign.verify(Object.assign({}, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS), key, signature, data);
        return res !== true
            ? new Error('The signature for the data is not valid')
            : true;
    }
    catch (err) {
        return err;
    }
});
exports.verifyNative = verifyNative;
const verifyData = (key, data, signature) => __awaiter(void 0, void 0, void 0, function* () {
    const k = yield keys_data_sign_utils_1.dataSignGetKeyOfType(key, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_VERIFY_KEY_TYPE);
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
    const s = typeof signature === 'string' ? typed_array_utils_1.convertToTypedArray(signature) : signature;
    if (s instanceof Error) {
        return s;
    }
    return exports.verifyNative(k, d, s);
});
exports.verifyData = verifyData;
//# sourceMappingURL=verify-data.encryption-utils.js.map