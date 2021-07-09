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
exports.getKeyOfType = exports.checkIfStringIsKeyPair = exports.importPrivateKeyFromString = exports.importPublicKeyFromString = exports.importKeyFromString = exports.importKeyPairFromString = exports.importKeyPair = exports.importPrivateKey = exports.importPublicKey = exports.importKey = exports.exportKeyPairAsString = exports.exportKeyPair = exports.exportPublicKeyAsString = exports.exportPublicKey = exports.exportKeyAsString = exports.exportKey = exports.generateKeyPair = exports.isCryptoKeyPairImported = void 0;
const serialization_utils_1 = require("@pashoo2/serialization-utils");
const typed_array_utils_1 = require("@pashoo2/typed-array-utils");
const crypto_utils_const_1 = require("./crypto-utils.const");
const salt_utils_1 = require("./salt-utils");
const crypto_utils_const_2 = require("./crypto-utils.const");
const encrypt_password_utils_1 = require("../password-utils/encrypt.password-utils");
const decrypt_password_utils_1 = require("../password-utils/decrypt.password-utils");
const encryption_keys_utils_1 = require("../encryption-keys-utils/encryption-keys-utils");
const typed_array_utils_2 = require("@pashoo2/typed-array-utils");
const init_1 = require("../init");
const isCryptoKeyPairImported = (key, checkPrivateKey = true) => {
    return (typeof key === 'object' &&
        !!key[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME] &&
        (!checkPrivateKey || !!key[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]));
};
exports.isCryptoKeyPairImported = isCryptoKeyPairImported;
const generateKeyPair = () => init_1.cryptoModuleDataSign.generateKey(crypto_utils_const_1.CRYPTO_UTIL_GENERATE_KEYPAIR_OPTIONS, crypto_utils_const_1.CRYPTO_UTIL_KEYS_EXTRACTABLE, crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_USAGES);
exports.generateKeyPair = generateKeyPair;
const exportKey = (key) => {
    try {
        return init_1.cryptoModuleDataSign.exportKey(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key);
    }
    catch (err) {
        console.error(err);
        return err;
    }
};
exports.exportKey = exportKey;
const exportKeyAsString = (key) => __awaiter(void 0, void 0, void 0, function* () {
    return serialization_utils_1.stringify((yield exports.exportKey(key)));
});
exports.exportKeyAsString = exportKeyAsString;
const exportPublicKey = (keyPair) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.exportKey(keyPair.publicKey);
});
exports.exportPublicKey = exportPublicKey;
const exportPublicKeyAsString = (keyPair) => __awaiter(void 0, void 0, void 0, function* () {
    const publicKey = yield exports.exportPublicKey(keyPair);
    if (publicKey instanceof Error) {
        return publicKey;
    }
    return serialization_utils_1.stringify(publicKey);
});
exports.exportPublicKeyAsString = exportPublicKeyAsString;
const exportKeyPair = (keyPair, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (encryption_keys_utils_1.isCryptoKeyPair(keyPair, !!password)) {
            // do it in parallel
            const [privateKey, publicKey] = yield Promise.all([
                password || keyPair.privateKey
                    ? exports.exportKey(keyPair.privateKey)
                    : Promise.resolve(undefined),
                exports.exportKey(keyPair.publicKey),
            ]).catch(err => [err, err]);
            if (privateKey instanceof Error) {
                return privateKey;
            }
            if (publicKey instanceof Error) {
                return publicKey;
            }
            const result = {
                [crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
                [crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
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
                const saltStringified = typed_array_utils_1.typedArrayToString(salt);
                const decryptedPrivateKey = yield decrypt_password_utils_1.decryptDataByPassword(password, saltStringified, encryptedPrivateKey);
                if (decryptedPrivateKey instanceof Error) {
                    return new Error('Failed to decrypt private key for data encryption');
                }
                result[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] = saltStringified;
                result[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] = encryptedPrivateKey;
            }
            return result;
        }
        return new Error('Argument given must be a CryptoKeyPair');
    }
    catch (err) {
        return err;
    }
});
exports.exportKeyPair = exportKeyPair;
const exportKeyPairAsString = (keyPair, password) => __awaiter(void 0, void 0, void 0, function* () {
    const exportedKeyPair = yield exports.exportKeyPair(keyPair, password);
    if (exportedKeyPair instanceof Error) {
        return exportedKeyPair;
    }
    if (typed_array_utils_2.isTypedArray(exportedKeyPair)) {
        return typed_array_utils_1.typedArrayToString(exportedKeyPair);
    }
    try {
        return serialization_utils_1.stringify(exportedKeyPair);
    }
    catch (err) {
        return err;
    }
});
exports.exportKeyPairAsString = exportKeyPairAsString;
const importKey = (key, isPublic = true) => {
    return init_1.cryptoModuleDataSign.importKey(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_EXPORT_FORMAT, key, crypto_utils_const_1.CRYPTO_UTIL_KEY_DESC, crypto_utils_const_1.CRYPTO_UTIL_KEYS_EXTRACTABLE, [isPublic ? crypto_utils_const_1.CRYPTO_UTIL_PUBLIC_KEY_USAGE : crypto_utils_const_1.CRYPTO_UTIL_PRIVATE_KEY_USAGE]);
};
exports.importKey = importKey;
const importPublicKey = (key) => exports.importKey(key, true);
exports.importPublicKey = importPublicKey;
const importPrivateKey = (key) => exports.importKey(key, false);
exports.importPrivateKey = importPrivateKey;
const importKeyPair = (keyPair, checkPrivateKey = true) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (exports.isCryptoKeyPairImported(keyPair, checkPrivateKey)) {
            const importResult = yield Promise.all([
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        return yield exports.importPublicKey(keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]);
                    }
                    catch (err) {
                        return err;
                    }
                }))(),
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (checkPrivateKey ||
                            keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]) {
                            return yield exports.importPrivateKey(keyPair[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]);
                        }
                    }
                    catch (err) {
                        return err;
                    }
                }))(),
            ]);
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
                [crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME]: publicKey,
                [crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]: privateKey,
            };
        }
        return new Error('The argument must be an instance of CryptoKeyPair');
    }
    catch (err) {
        return err;
    }
});
exports.importKeyPair = importKeyPair;
const importKeyPairFromString = (keyPairString, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof keyPairString === 'string') {
            const keyPairObject = JSON.parse(keyPairString);
            if (password && keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME]) {
                if (typeof keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME] !== 'string') {
                    return new Error('A salt value must be a string');
                }
                const decryptedPrivateKey = yield decrypt_password_utils_1.decryptDataByPassword(password, keyPairObject[crypto_utils_const_2.CRYPTO_UTIL_KEYPAIR_SALT_KEY_NAME], keyPairObject[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME]);
                if (decryptedPrivateKey instanceof Error) {
                    console.error('Failed to decrypt the data encryption private key');
                    return decryptedPrivateKey;
                }
                try {
                    keyPairObject[crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME] =
                        JSON.parse(decryptedPrivateKey);
                }
                catch (err) {
                    console.error(err);
                    return new Error('Failed to parse dataencryption Private key from the string decrypted');
                }
            }
            return yield exports.importKeyPair(keyPairObject, !!password);
        }
        return new Error('A key pair must be a string');
    }
    catch (err) {
        return err;
    }
});
exports.importKeyPairFromString = importKeyPairFromString;
const importKeyFromString = (keyString, isPublic = true) => {
    try {
        return exports.importKey(JSON.parse(keyString), isPublic);
    }
    catch (err) {
        return err;
    }
};
exports.importKeyFromString = importKeyFromString;
const importPublicKeyFromString = (key) => exports.importKeyFromString(key, true);
exports.importPublicKeyFromString = importPublicKeyFromString;
const importPrivateKeyFromString = (key) => exports.importKeyFromString(key, false);
exports.importPrivateKeyFromString = importPrivateKeyFromString;
const checkIfStringIsKeyPair = (keyString) => {
    return (keyString.includes(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PRIVATE_KEY_NAME) &&
        keyString.includes(crypto_utils_const_1.CRYPTO_UTIL_KEYPAIR_PUBLIC_KEY_NAME));
};
exports.checkIfStringIsKeyPair = checkIfStringIsKeyPair;
const KEY_NOT_FOUND_ERROR_MESSAGE = 'A key of the required type was not found';
const getKeyOfType = (key, type) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof key === 'string') {
        if (exports.checkIfStringIsKeyPair(key)) {
            const keyPair = yield exports.importKeyPairFromString(key);
            if (keyPair instanceof Error) {
                return keyPair;
            }
            return exports.getKeyOfType(keyPair, type);
        }
        else {
            const keyFromString = yield exports.importKeyFromString(key, type === 'public');
            if (keyFromString instanceof Error) {
                return keyFromString;
            }
            return exports.getKeyOfType(keyFromString, type);
        }
    }
    if (encryption_keys_utils_1.isCryptoKey(key)) {
        return key.type === type ? key : new Error(KEY_NOT_FOUND_ERROR_MESSAGE);
    }
    if (typeof key === 'object') {
        const keys = Object.values(key);
        const keyResulted = keys.find((k) => k && k.type && k.type === type);
        return keyResulted || new Error(KEY_NOT_FOUND_ERROR_MESSAGE);
    }
    return new Error('There is an unsupported type of the key given');
});
exports.getKeyOfType = getKeyOfType;
//# sourceMappingURL=keys.encryption-utils.js.map