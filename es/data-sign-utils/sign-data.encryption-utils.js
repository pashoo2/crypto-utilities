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
exports.signToString = exports.signToTypedArray = exports.signNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const data_sign_utils_const_1 = require("./data-sign-utils.const");
const keys_data_sign_utils_1 = require("./keys.data-sign-utils");
const init_1 = require("../init");
const signNative = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (key.type !== data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE) {
        return new Error(`The type of the key ${key.type} may not be used for data signing`);
    }
    try {
        const res = yield init_1.cryptoModuleDataSign.sign(Object.assign({}, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_DATA_SIGN_AND_VERIFY_PARAMS), key, data);
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.signNative = signNative;
const signToTypedArray = (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data) => __awaiter(void 0, void 0, void 0, function* () {
    const k = yield keys_data_sign_utils_1.dataSignGetKeyOfType(key, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_SIGN_KEY_TYPE);
    if (k instanceof Error) {
        return k;
    }
    const d = typed_array_utils_1.convertToTypedArray(data);
    if (d instanceof Error) {
        return d;
    }
    return exports.signNative(k, d);
});
exports.signToTypedArray = signToTypedArray;
const signToString = (
// crypto key using for data encryption
// a public key of the user in the current implementation
key, data) => __awaiter(void 0, void 0, void 0, function* () {
    const signedHashData = yield exports.signToTypedArray(key, data);
    if (signedHashData instanceof Error) {
        return signedHashData;
    }
    return typed_array_utils_1.typedArrayToString(signedHashData);
});
exports.signToString = signToString;
//# sourceMappingURL=sign-data.encryption-utils.js.map