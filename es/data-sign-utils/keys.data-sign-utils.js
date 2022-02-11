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
exports.dataSignConvertAndExportKeyAsString = exports.dataSignImportEncryptionKey = exports.dataSignGetKeyOfType = exports.dataSignCheckIfStringIsKeyPair = exports.dataSignImportPrivateKeyFromString = exports.dataSignImportPublicKeyFromString = exports.dataSignImportKeyFromString = exports.dataSignImportKeyPairFromString = exports.dataSignImportKeyPair = exports.dataSignImportPrivateKey = exports.dataSignImportPublicKey = exports.dataSignImportKey = exports.dataSignExportKeyPairAsString = exports.dataSignExportKeyPair = exports.dataSignExportPublicKeyAsString = exports.dataSignExportPublicKey = exports.dataSignExportKeyAsString = exports.dataSignExportKey = exports.dataSignGenerateKeyPair = exports.dataSignIsCryptoKeyPairImported = void 0;
const serialization_utils_1 = require("@pashoo2/serialization-utils");
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const data_sign_utils_const_1 = require("./data-sign-utils.const");
const init_1 = require("../init");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const salt_utils_1 = require("../encryption-utils/salt-utils");
const encrypt_password_utils_1 = require("../password-utils/encrypt.password-utils");
const decrypt_password_utils_1 = require("../password-utils/decrypt.password-utils");
const data_sign_utils_const_2 = require("./data-sign-utils.const");
const encryption_keys_utils_2 = require("../encryption-keys-utils/encryption-keys-utils");
const dataSignIsCryptoKeyPairImported = (key, checkPrivateKey = true) => {
    return (typeof key === 'object' &&
        !!key[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] &&
        (!checkPrivateKey || !!key[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]));
};
exports.dataSignIsCryptoKeyPairImported = dataSignIsCryptoKeyPairImported;
const dataSignGenerateKeyPair = (keyPairOptions = data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS) => init_1.cryptoModuleDataSign.generateKey(keyPairOptions, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_USAGES);
exports.dataSignGenerateKeyPair = dataSignGenerateKeyPair;
const dataSignExportKey = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield init_1.cryptoModuleDataSign.exportKey(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key);
    }
    catch (err) {
        return err;
    }
});
exports.dataSignExportKey = dataSignExportKey;
const dataSignExportKeyAsString = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const keyExported = yield exports.dataSignExportKey(key);
    if (keyExported instanceof Error) {
        return keyExported;
    }
    try {
        return serialization_utils_1.stringify(keyExported);
    }
    catch (err) {
        return err;
    }
});
exports.dataSignExportKeyAsString = dataSignExportKeyAsString;
const dataSignExportPublicKey = (keyPair) => __awaiter(void 0, void 0, void 0, function* () {
    if (encryption_keys_utils_1.isCryptoKeyPair(keyPair)) {
        return exports.dataSignExportKey(keyPair.publicKey);
    }
    return new Error('Argument must be a CryptoKeyPair');
});
exports.dataSignExportPublicKey = dataSignExportPublicKey;
const dataSignExportPublicKeyAsString = (keyPair) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const keyPublicExported = yield exports.dataSignExportPublicKey(keyPair);
        if (keyPublicExported instanceof Error) {
            return keyPublicExported;
        }
        return serialization_utils_1.stringify(keyPublicExported);
    }
    catch (err) {
        return err;
    }
});
exports.dataSignExportPublicKeyAsString = dataSignExportPublicKeyAsString;
const dataSignExportKeyPair = (keyPair, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (encryption_keys_utils_1.isCryptoKeyPair(keyPair, !!password)) {
            // do it in parallel
            const [privateKey, publicKey] = yield Promise.all([
                password || keyPair.privateKey
                    ? exports.dataSignExportKey(keyPair.privateKey)
                    : Promise.resolve(undefined),
                exports.dataSignExportKey(keyPair.publicKey),
            ]).catch(err => [err, err]);
            if (privateKey instanceof Error) {
                return privateKey;
            }
            if (publicKey instanceof Error) {
                return publicKey;
            }
            const result = {
                [data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
                [data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
            };
            if (password) {
                const salt = salt_utils_1.generateSalt();
                if (salt instanceof Error) {
                    return new Error('Failed to generate a unique salt value');
                }
                const encryptedPrivateKey = yield encrypt_password_utils_1.encryptDataWithPassword(password, salt, privateKey);
                if (encryptedPrivateKey instanceof Error) {
                    return new Error('Failed to encrypt private key with password provided');
                }
                let saltStringified;
                try {
                    saltStringified = typed_array_utils_1.typedArrayToString(salt);
                }
                catch (err) {
                    return err;
                }
                const decryptedPrivateKey = yield decrypt_password_utils_1.decryptDataByPassword(password, saltStringified, encryptedPrivateKey);
                if (decryptedPrivateKey instanceof Error) {
                    return new Error('Failed to decrypt private key for data encryption');
                }
                result[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] = saltStringified;
                result[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                    encryptedPrivateKey;
            }
            return result;
        }
        return new Error('Argument given must be a CryptoKeyPair');
    }
    catch (err) {
        return err;
    }
});
exports.dataSignExportKeyPair = dataSignExportKeyPair;
const dataSignExportKeyPairAsString = (keyPair, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield exports.dataSignExportKeyPair(keyPair, password);
        if (res instanceof Error) {
            return res;
        }
        if (typed_array_utils_1.isTypedArray(res)) {
            return typed_array_utils_1.typedArrayToString(res);
        }
        return serialization_utils_1.stringify(res);
    }
    catch (err) {
        return err;
    }
});
exports.dataSignExportKeyPairAsString = dataSignExportKeyPairAsString;
const dataSignImportKey = (key, isPublic = true) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof key !== 'object') {
            return new Error('Unsupported argument type');
        }
        const res = yield init_1.cryptoModuleDataSign.importKey(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEY_DESC, data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYS_EXTRACTABLE, [
            isPublic
                ? data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_PUBLIC_KEY_USAGE
                : data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_PRIVATE_KEY_USAGE,
        ]);
        if (!encryption_keys_utils_2.isCryptoKey(res)) {
            return new Error("Can't import the key");
        }
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.dataSignImportKey = dataSignImportKey;
const dataSignImportPublicKey = (key) => exports.dataSignImportKey(key, true);
exports.dataSignImportPublicKey = dataSignImportPublicKey;
const dataSignImportPrivateKey = (key) => exports.dataSignImportKey(key, false);
exports.dataSignImportPrivateKey = dataSignImportPrivateKey;
const dataSignImportKeyPair = (keyPair, checkPrivateKey = true) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (exports.dataSignIsCryptoKeyPairImported(keyPair, checkPrivateKey)) {
            const privateKeyToImport = keyPair[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME];
            if (checkPrivateKey && !privateKeyToImport) {
                return new Error('The private key is empty');
            }
            const importResult = yield Promise.all([
                exports.dataSignImportPublicKey(keyPair[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]),
                checkPrivateKey || privateKeyToImport
                    ? exports.dataSignImportPrivateKey(privateKeyToImport)
                    : Promise.resolve(undefined),
            ]).catch(err => [err, err]);
            const publicKey = importResult[0];
            let privateKey = importResult[1];
            if (publicKey instanceof Error) {
                return publicKey;
            }
            if (privateKey instanceof Error) {
                if (checkPrivateKey) {
                    return privateKey;
                }
                privateKey = undefined;
            }
            return {
                [data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
                [data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
            };
        }
        return new Error('The argument must be an instance of CryptoKeyPair');
    }
    catch (err) {
        return err;
    }
});
exports.dataSignImportKeyPair = dataSignImportKeyPair;
const dataSignImportKeyPairFromString = (keyPairString, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof keyPairString === 'string') {
            const keyPairObject = JSON.parse(keyPairString);
            if (password &&
                keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]) {
                if (typeof keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] !==
                    'string') {
                    return new Error('A salt value must be a string');
                }
                const decryptedPrivateKey = yield decrypt_password_utils_1.decryptDataByPassword(password, keyPairObject[data_sign_utils_const_2.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME], keyPairObject[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]);
                if (decryptedPrivateKey instanceof Error) {
                    console.error('Failed to decrypt the data sign private key');
                    return decryptedPrivateKey;
                }
                try {
                    keyPairObject[data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                        JSON.parse(decryptedPrivateKey);
                }
                catch (err) {
                    console.error(err);
                    return new Error('Failed to parse datasign Private key from the string decrypted');
                }
            }
            if (exports.dataSignIsCryptoKeyPairImported(keyPairObject, !!password)) {
                return yield exports.dataSignImportKeyPair(keyPairObject, !!password);
            }
            return new Error('There is a wrong format for the imported key pair');
        }
        return new Error('The key must be a string');
    }
    catch (err) {
        return err;
    }
});
exports.dataSignImportKeyPairFromString = dataSignImportKeyPairFromString;
const dataSignImportKeyFromString = (keyString, isPublic = true) => {
    try {
        if (typeof keyString !== 'string') {
            return new Error('The key must be a string');
        }
        const parsedKey = JSON.parse(keyString);
        return exports.dataSignImportKey(parsedKey, isPublic);
    }
    catch (err) {
        return err;
    }
};
exports.dataSignImportKeyFromString = dataSignImportKeyFromString;
const dataSignImportPublicKeyFromString = (key) => exports.dataSignImportKeyFromString(key, true);
exports.dataSignImportPublicKeyFromString = dataSignImportPublicKeyFromString;
const dataSignImportPrivateKeyFromString = (key) => exports.dataSignImportKeyFromString(key, false);
exports.dataSignImportPrivateKeyFromString = dataSignImportPrivateKeyFromString;
const dataSignCheckIfStringIsKeyPair = (keyString) => {
    return (keyString.includes(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME) &&
        keyString.includes(data_sign_utils_const_1.DATA_SIGN_CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME));
};
exports.dataSignCheckIfStringIsKeyPair = dataSignCheckIfStringIsKeyPair;
const dataSignGetKeyOfType = (key, type) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof key === 'string') {
        if (exports.dataSignCheckIfStringIsKeyPair(key)) {
            const keyPair = yield exports.dataSignImportKeyPairFromString(key);
            if (keyPair instanceof Error) {
                return keyPair;
            }
            return exports.dataSignGetKeyOfType(keyPair, type);
        }
        else {
            const keyFromString = yield exports.dataSignImportKeyFromString(key, type === 'public');
            if (keyFromString instanceof Error) {
                return keyFromString;
            }
            return exports.dataSignGetKeyOfType(keyFromString, type);
        }
    }
    if (encryption_keys_utils_2.isCryptoKey(key)) {
        return key.type === type ? key : new Error(data_sign_utils_const_1.KEY_NOT_FOUND_ERROR_MESSAGE);
    }
    if (typeof key === 'object') {
        const keys = Object.values(key);
        const keyResulted = keys.find((k) => k && k.type && k.type === type);
        return keyResulted || new Error(data_sign_utils_const_1.KEY_NOT_FOUND_ERROR_MESSAGE);
    }
    return new Error('There is an unsupported type of the key given');
});
exports.dataSignGetKeyOfType = dataSignGetKeyOfType;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key in native
 * format
 * @param {} key
 */
const dataSignImportEncryptionKey = (key) => __awaiter(void 0, void 0, void 0, function* () {
    if (typed_array_utils_1.isTypedArray(key)) {
        return exports.dataSignImportKey(key);
    }
    else {
        const jwk = encryption_keys_utils_1.getJWKOrBool(key);
        if (typeof jwk === 'object') {
            return exports.dataSignImportKey(jwk);
        }
        else if (typeof key === 'string') {
            return exports.dataSignImportKeyFromString(key);
        }
    }
    return new Error('There is an unknown key format');
});
exports.dataSignImportEncryptionKey = dataSignImportEncryptionKey;
/**
 * import an encryption key from a
 * supported format of an exported key
 * and returns a crypto key as a string
 * @param {} key
 */
const dataSignConvertAndExportKeyAsString = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const cryptoKeyImported = yield exports.dataSignImportEncryptionKey(key);
    if (cryptoKeyImported instanceof Error) {
        return cryptoKeyImported;
    }
    return exports.dataSignExportKeyAsString(cryptoKeyImported);
});
exports.dataSignConvertAndExportKeyAsString = dataSignConvertAndExportKeyAsString;
//# sourceMappingURL=keys.data-sign-utils.js.map