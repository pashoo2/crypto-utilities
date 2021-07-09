"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importSalt = exports.isValidSalt = exports.generateSaltString = exports.generateSalt = exports.generateSaltNative = void 0;
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const init_1 = require("../init");
const salt_utils_const_1 = require("./salt-utils.const");
const generateSaltNative = (saltLength) => {
    try {
        return init_1.crypto.getRandomValues(new Uint8Array(saltLength));
    }
    catch (err) {
        return err;
    }
};
exports.generateSaltNative = generateSaltNative;
const generateSalt = (saltLength = salt_utils_const_1.SALT_GENERATION_UTILS_SALT_LENGTH_BYTES) => {
    if (saltLength < salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES) {
        return new Error(`The length ${saltLength} must not be less than the ${salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES}`);
    }
    if (saltLength > salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES) {
        return new Error(`The length ${saltLength} should not be greater than ${salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES}`);
    }
    return exports.generateSaltNative(saltLength);
};
exports.generateSalt = generateSalt;
const generateSaltString = (saltLength) => {
    const salt = exports.generateSalt(saltLength);
    if (salt instanceof Error) {
        return salt;
    }
    return typed_array_utils_1.typedArrayToString(salt);
};
exports.generateSaltString = generateSaltString;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidSalt = (salt) => {
    if (typed_array_utils_1.isTypedArrayNative(salt) || salt instanceof ArrayBuffer) {
        let strFromTyped;
        try {
            strFromTyped = typed_array_utils_1.typedArrayToString(salt);
        }
        catch (_a) {
            return false;
        }
        const typedFromStr = typed_array_utils_1.convertToTypedArray(strFromTyped);
        if (typedFromStr instanceof Error) {
            return false;
        }
        if (!typed_array_utils_1.isTypedArrayNative(typedFromStr) &&
            !(typedFromStr instanceof ArrayBuffer)) {
            return false;
        }
        if (!typed_array_utils_1.isEqualArrayBufferNative(typedFromStr, salt)) {
            return false;
        }
        return (salt.byteLength >= salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES &&
            salt.byteLength <= salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES);
    }
    if (typeof salt === 'string') {
        const typedFromStr = typed_array_utils_1.convertToTypedArray(salt);
        if (typedFromStr instanceof Error) {
            return false;
        }
        let strFromTyped;
        try {
            strFromTyped = typed_array_utils_1.typedArrayToString(typedFromStr);
        }
        catch (_b) {
            return false;
        }
        if (salt !== strFromTyped) {
            return false;
        }
        return (typedFromStr.byteLength >= salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MIN_LENGTH_BYTES &&
            typedFromStr.byteLength <= salt_utils_const_1.SALT_GENERATION_UTILS_SALT_MAX_LENGTH_BYTES);
    }
    return false;
};
exports.isValidSalt = isValidSalt;
const importSalt = (salt) => {
    if (!exports.isValidSalt(salt)) {
        return new Error('The salt is not valid');
    }
    if (typed_array_utils_1.isTypedArrayNative(salt)) {
        // if a typed array then convert the salt directly
        return new Uint8Array(salt);
    }
    // if a string then convert string to typed array
    const saltImported = typed_array_utils_1.convertToTypedArray(salt);
    if (saltImported instanceof Error) {
        return saltImported;
    }
    if (typed_array_utils_1.isTypedArrayNative(saltImported) || saltImported instanceof ArrayBuffer) {
        return new Uint8Array(saltImported);
    }
    return new Error('An unknown format of the salt imported');
};
exports.importSalt = importSalt;
//# sourceMappingURL=salt-utils.js.map