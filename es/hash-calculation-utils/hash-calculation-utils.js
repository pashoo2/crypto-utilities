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
exports.calculateHash = exports.calculateHashNative = exports.hashCalculator = void 0;
const serialization_utils_1 = require("@pashoo2/serialization-utils");
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const init_1 = require("../init");
const const_1 = require("../const");
exports.hashCalculator = init_1.cryptoModuleDataSign.digest.bind(init_1.crypto.subtle);
const calculateHashNative = (data, alg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashString = yield exports.hashCalculator(alg, data);
        return hashString;
    }
    catch (err) {
        return err;
    }
});
exports.calculateHashNative = calculateHashNative;
const calculateHash = (data, alg = const_1.HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM) => __awaiter(void 0, void 0, void 0, function* () {
    let dataAsString;
    try {
        dataAsString = serialization_utils_1.stringify(data);
    }
    catch (err) {
        return err;
    }
    const dataAsArrayBuffer = typed_array_utils_1.decodeDOMStringToArrayBuffer(dataAsString);
    if (dataAsArrayBuffer instanceof Error) {
        return dataAsArrayBuffer;
    }
    const hashArrayBuffer = yield exports.calculateHashNative(dataAsArrayBuffer, alg);
    if (hashArrayBuffer instanceof Error) {
        return hashArrayBuffer;
    }
    return typed_array_utils_1.encodeArrayBufferToDOMString(hashArrayBuffer);
});
exports.calculateHash = calculateHash;
//# sourceMappingURL=hash-calculation-utils.js.map