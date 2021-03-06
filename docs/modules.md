[@pashoo2/crypto-utilities](README.md) / Exports

# @pashoo2/crypto-utilities

## Table of contents

### Enumerations

- [CONST\_CRYPTO\_KEYS\_TYPES](enums/const_crypto_keys_types.md)
- [CONST\_CRYPTO\_KEYS\_TYPES\_EXPORT\_FORMATS](enums/const_crypto_keys_types_export_formats.md)
- [HASH\_CALCULATION\_UTILS\_HASH\_ALGORITHM](enums/hash_calculation_utils_hash_algorithm.md)
- [eCRYPTO\_UTILS\_KEYS\_TYPES](enums/ecrypto_utils_keys_types.md)
- [eCRYPTO\_UTILS\_KEYS\_USAGES](enums/ecrypto_utils_keys_usages.md)

### Type aliases

- [TCryptoUtilDecryptDataTypes](modules.md#tcryptoutildecryptdatatypes)
- [TCryptoUtilDecryptDataTypesNative](modules.md#tcryptoutildecryptdatatypesnative)
- [TCryptoUtilDecryptKeyTypes](modules.md#tcryptoutildecryptkeytypes)
- [TCryptoUtilEncryptDataTypes](modules.md#tcryptoutilencryptdatatypes)
- [TCryptoUtilEncryptDataTypesNative](modules.md#tcryptoutilencryptdatatypesnative)
- [TCryptoUtilEncryptKeyTypes](modules.md#tcryptoutilencryptkeytypes)
- [TCryptoUtilImportKeyTypes](modules.md#tcryptoutilimportkeytypes)
- [TCryptoUtilKeyExportFormatType](modules.md#tcryptoutilkeyexportformattype)
- [TCryptoUtilKeypairExportFormatType](modules.md#tcryptoutilkeypairexportformattype)
- [TCryptoUtilKeypairImportFormatType](modules.md#tcryptoutilkeypairimportformattype)
- [TCryptoUtilKeypairPreImportFormatType](modules.md#tcryptoutilkeypairpreimportformattype)
- [TCryptoUtilsDataWithInitializationVector](modules.md#tcryptoutilsdatawithinitializationvector)
- [TCryptoUtilsDecryptDataKeyConfig](modules.md#tcryptoutilsdecryptdatakeyconfig)
- [TCryptoUtilsEncryptDataKeyConfig](modules.md#tcryptoutilsencryptdatakeyconfig)
- [TDataSignUtilImportKeyTypes](modules.md#tdatasignutilimportkeytypes)
- [TDataSignUtilKeyExportFormatType](modules.md#tdatasignutilkeyexportformattype)
- [TDataSignUtilKeypairExportFormatType](modules.md#tdatasignutilkeypairexportformattype)
- [TDataSignUtilKeypairImportFormatType](modules.md#tdatasignutilkeypairimportformattype)
- [TDataSignUtilKeypairImportType](modules.md#tdatasignutilkeypairimporttype)
- [TDataSignUtilSignDataTypes](modules.md#tdatasignutilsigndatatypes)
- [TDataSignUtilSignDataTypesNative](modules.md#tdatasignutilsigndatatypesnative)
- [TDataSignUtilSignKeyTypes](modules.md#tdatasignutilsignkeytypes)
- [TDataSignUtilVerifyDataTypes](modules.md#tdatasignutilverifydatatypes)
- [TDataSignUtilVerifyDataTypesExtended](modules.md#tdatasignutilverifydatatypesextended)
- [TDataSignUtilVerifyDataTypesNative](modules.md#tdatasignutilverifydatatypesnative)
- [TDataSignUtilVerifyKeyTypes](modules.md#tdatasignutilverifykeytypes)
- [TEncryptionKeyStoreFormatType](modules.md#tencryptionkeystoreformattype)
- [TPasswordEncryptionKeyImportNativeSupportedTypes](modules.md#tpasswordencryptionkeyimportnativesupportedtypes)
- [TPasswordEncryptionSupportedPasswordNativeTypes](modules.md#tpasswordencryptionsupportedpasswordnativetypes)
- [TPasswordEncryptionSupportesSaltNativeTypes](modules.md#tpasswordencryptionsupportessaltnativetypes)
- [TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat](modules.md#tpasswordenryptionutilskeyderivedtargetkeyexportformat)
- [TSaltUtilsSaltType](modules.md#tsaltutilssalttype)

### Variables

- [CRYPTO\_UTIL\_DATA\_SIGN\_PRIVATE\_KEY\_USAGE](modules.md#crypto_util_data_sign_private_key_usage)
- [CRYPTO\_UTIL\_DATA\_SIGN\_PUBLIC\_KEY\_USAGE](modules.md#crypto_util_data_sign_public_key_usage)
- [CRYPTO\_UTIL\_DESCRIPTION\_KEY\_TYPE](modules.md#crypto_util_description_key_type)
- [CRYPTO\_UTIL\_ENCRYPTION\_KEY\_TYPE](modules.md#crypto_util_encryption_key_type)
- [CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS](modules.md#crypto_util_generate_keypair_options)
- [CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT](modules.md#crypto_util_keypair_export_format)
- [CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME](modules.md#crypto_util_keypair_private_key_name)
- [CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME](modules.md#crypto_util_keypair_public_key_name)
- [CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME](modules.md#crypto_util_keypair_salt_key_name)
- [CRYPTO\_UTIL\_KEYPAIR\_USAGES](modules.md#crypto_util_keypair_usages)
- [CRYPTO\_UTIL\_KEYS\_EXTRACTABLE](modules.md#crypto_util_keys_extractable)
- [CRYPTO\_UTIL\_KEY\_ALGORITHM](modules.md#crypto_util_key_algorithm)
- [CRYPTO\_UTIL\_KEY\_DESC](modules.md#crypto_util_key_desc)
- [CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE](modules.md#crypto_util_private_key_usage)
- [CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE](modules.md#crypto_util_public_key_usage)
- [DATA\_SIGN\_CRYPTO\_UTIL\_DATA\_SIGN\_AND\_VERIFY\_PARAMS](modules.md#data_sign_crypto_util_data_sign_and_verify_params)
- [DATA\_SIGN\_CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS](modules.md#data_sign_crypto_util_generate_keypair_options)
- [DATA\_SIGN\_CRYPTO\_UTIL\_HASH\_ALGORITHM](modules.md#data_sign_crypto_util_hash_algorithm)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT](modules.md#data_sign_crypto_util_keypair_export_format)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME](modules.md#data_sign_crypto_util_keypair_private_key_name)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME](modules.md#data_sign_crypto_util_keypair_public_key_name)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME](modules.md#data_sign_crypto_util_keypair_salt_key_name)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_USAGES](modules.md#data_sign_crypto_util_keypair_usages)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEYS\_EXTRACTABLE](modules.md#data_sign_crypto_util_keys_extractable)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_ALGORITHM](modules.md#data_sign_crypto_util_key_algorithm)
- [DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_DESC](modules.md#data_sign_crypto_util_key_desc)
- [DATA\_SIGN\_CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE](modules.md#data_sign_crypto_util_private_key_usage)
- [DATA\_SIGN\_CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE](modules.md#data_sign_crypto_util_public_key_usage)
- [DATA\_SIGN\_CRYPTO\_UTIL\_SIGN\_KEY\_TYPE](modules.md#data_sign_crypto_util_sign_key_type)
- [DATA\_SIGN\_CRYPTO\_UTIL\_VERIFY\_KEY\_TYPE](modules.md#data_sign_crypto_util_verify_key_type)
- [ENCRYPTIONS\_KEYS\_UTILS\_JWK\_FORMAT\_OBJECT\_KEYS](modules.md#encryptions_keys_utils_jwk_format_object_keys)
- [HASH\_CALCULATION\_UTILS\_DEFAULT\_HASH\_ALGORITHM](modules.md#hash_calculation_utils_default_hash_algorithm)
- [HASH\_CALCULATION\_UTILS\_HASH\_ALGORITHM\_OUTPUT\_STRING\_LENGTH](modules.md#hash_calculation_utils_hash_algorithm_output_string_length)
- [INITIALIZATION\_VECTOR\_DEFAULT\_LENGTH](modules.md#initialization_vector_default_length)
- [KEY\_NOT\_FOUND\_ERROR\_MESSAGE](modules.md#key_not_found_error_message)
- [MIN\_JWK\_PROPS\_COUNT](modules.md#min_jwk_props_count)
- [MIN\_JWK\_STRING\_LENGTH](modules.md#min_jwk_string_length)
- [PASSWORD\_ENCRYPTION\_UTILS\_DECRYPTION\_PARAMS](modules.md#password_encryption_utils_decryption_params)
- [PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_INITIALIZATION\_VECTOR\_LENGTH](modules.md#password_encryption_utils_encryption_initialization_vector_length)
- [PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_PARAMS](modules.md#password_encryption_utils_encryption_params)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BASE\_KEY\_CONFIG](modules.md#password_encryption_utils_key_derived_base_key_config)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_ITERATIONS](modules.md#password_encryption_utils_key_derived_bits_iterations)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_KEY\_LENGTH\_BYTES](modules.md#password_encryption_utils_key_derived_bits_key_length_bytes)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_ALGORITHM](modules.md#password_encryption_utils_key_derived_target_key_algorithm)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_CONFIG](modules.md#password_encryption_utils_key_derived_target_key_config)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_EXPORT\_FORMAT](modules.md#password_encryption_utils_key_derived_target_key_export_format)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IMPORT\_FORMAT](modules.md#password_encryption_utils_key_derived_target_key_import_format)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IS\_EXPORTED](modules.md#password_encryption_utils_key_derived_target_key_is_exported)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_LENGTH](modules.md#password_encryption_utils_key_derived_target_key_length)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_USAGES](modules.md#password_encryption_utils_key_derived_target_key_usages)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_ALGORITHM](modules.md#password_encryption_utils_key_generation_algorithm)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_IS\_KEY\_EXTRACTABLE](modules.md#password_encryption_utils_key_generation_is_key_extractable)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_IMPORTED\_FORMAT](modules.md#password_encryption_utils_key_generation_key_imported_format)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_SALT\_GENERATED\_LENGTH](modules.md#password_encryption_utils_key_generation_key_salt_generated_length)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_HASH\_ALGORITHM](modules.md#password_encryption_utils_key_hash_algorithm)
- [PASSWORD\_ENCRYPTION\_UTILS\_KEY\_USAGES](modules.md#password_encryption_utils_key_usages)
- [SALT\_GENERATION\_UTILS\_SALT\_LENGTH\_BYTES](modules.md#salt_generation_utils_salt_length_bytes)
- [SALT\_GENERATION\_UTILS\_SALT\_MAX\_LENGTH\_BYTES](modules.md#salt_generation_utils_salt_max_length_bytes)
- [SALT\_GENERATION\_UTILS\_SALT\_MIN\_LENGTH\_BYTES](modules.md#salt_generation_utils_salt_min_length_bytes)

### Functions

- [calcCryptoKeyHash](modules.md#calccryptokeyhash)
- [calcCryptoKeyPairHash](modules.md#calccryptokeypairhash)
- [calculateHash](modules.md#calculatehash)
- [calculateHashNative](modules.md#calculatehashnative)
- [checkIfStringIsKeyPair](modules.md#checkifstringiskeypair)
- [concatDataWithInitializationVector](modules.md#concatdatawithinitializationvector)
- [dataSignCheckIfStringIsKeyPair](modules.md#datasigncheckifstringiskeypair)
- [dataSignConvertAndExportKeyAsString](modules.md#datasignconvertandexportkeyasstring)
- [dataSignExportKey](modules.md#datasignexportkey)
- [dataSignExportKeyAsString](modules.md#datasignexportkeyasstring)
- [dataSignExportKeyPair](modules.md#datasignexportkeypair)
- [dataSignExportKeyPairAsString](modules.md#datasignexportkeypairasstring)
- [dataSignExportPublicKey](modules.md#datasignexportpublickey)
- [dataSignExportPublicKeyAsString](modules.md#datasignexportpublickeyasstring)
- [dataSignGenerateKeyPair](modules.md#datasigngeneratekeypair)
- [dataSignGetKeyOfType](modules.md#datasigngetkeyoftype)
- [dataSignImportEncryptionKey](modules.md#datasignimportencryptionkey)
- [dataSignImportKey](modules.md#datasignimportkey)
- [dataSignImportKeyFromString](modules.md#datasignimportkeyfromstring)
- [dataSignImportKeyPair](modules.md#datasignimportkeypair)
- [dataSignImportKeyPairFromString](modules.md#datasignimportkeypairfromstring)
- [dataSignImportPrivateKey](modules.md#datasignimportprivatekey)
- [dataSignImportPrivateKeyFromString](modules.md#datasignimportprivatekeyfromstring)
- [dataSignImportPublicKey](modules.md#datasignimportpublickey)
- [dataSignImportPublicKeyFromString](modules.md#datasignimportpublickeyfromstring)
- [dataSignIsCryptoKeyPairImported](modules.md#datasigniscryptokeypairimported)
- [decryptData](modules.md#decryptdata)
- [decryptDataArrayOrStringWithKeyToUInt8Array](modules.md#decryptdataarrayorstringwithkeytouint8array)
- [decryptDataByPassword](modules.md#decryptdatabypassword)
- [decryptDataFromString](modules.md#decryptdatafromstring)
- [decryptDataWithKey](modules.md#decryptdatawithkey)
- [decryptDataWithKeyFromUint8Array](modules.md#decryptdatawithkeyfromuint8array)
- [decryptDataWithKeyNative](modules.md#decryptdatawithkeynative)
- [decryptNative](modules.md#decryptnative)
- [encryptDataToArrayBuffer](modules.md#encryptdatatoarraybuffer)
- [encryptDataToString](modules.md#encryptdatatostring)
- [encryptDataToUInt8Array](modules.md#encryptdatatouint8array)
- [encryptDataWithPassword](modules.md#encryptdatawithpassword)
- [encryptDataWithPasswordToArrayBuffer](modules.md#encryptdatawithpasswordtoarraybuffer)
- [encryptNative](modules.md#encryptnative)
- [encryptToString](modules.md#encrypttostring)
- [encryptToTypedArray](modules.md#encrypttotypedarray)
- [exportCryptoKeyInFormat](modules.md#exportcryptokeyinformat)
- [exportKey](modules.md#exportkey)
- [exportKeyAsString](modules.md#exportkeyasstring)
- [exportKeyPair](modules.md#exportkeypair)
- [exportKeyPairAsString](modules.md#exportkeypairasstring)
- [exportPasswordKey](modules.md#exportpasswordkey)
- [exportPasswordKeyAsString](modules.md#exportpasswordkeyasstring)
- [exportPublicKey](modules.md#exportpublickey)
- [exportPublicKeyAsString](modules.md#exportpublickeyasstring)
- [generateInitializationVectorNative](modules.md#generateinitializationvectornative)
- [generateInitializationVectorNativeArrayBuffer](modules.md#generateinitializationvectornativearraybuffer)
- [generateKeyPair](modules.md#generatekeypair)
- [generatePasswordKey](modules.md#generatepasswordkey)
- [generatePasswordKeyAsString](modules.md#generatepasswordkeyasstring)
- [generatePasswordKeyByPasswordString](modules.md#generatepasswordkeybypasswordstring)
- [generatePasswordKeyInExportFormat](modules.md#generatepasswordkeyinexportformat)
- [generateSalt](modules.md#generatesalt)
- [generateSaltNative](modules.md#generatesaltnative)
- [generateSaltString](modules.md#generatesaltstring)
- [getDerivationNative](modules.md#getderivationnative)
- [getInitializationVectorFromData](modules.md#getinitializationvectorfromdata)
- [getInitializationVectorFromDataString](modules.md#getinitializationvectorfromdatastring)
- [getJWK](modules.md#getjwk)
- [getJWKOrBool](modules.md#getjwkorbool)
- [getJWKOrError](modules.md#getjwkorerror)
- [getKeyOfType](modules.md#getkeyoftype)
- [hashCalculator](modules.md#hashcalculator)
- [importKey](modules.md#importkey)
- [importKeyFromString](modules.md#importkeyfromstring)
- [importKeyPair](modules.md#importkeypair)
- [importKeyPairFromString](modules.md#importkeypairfromstring)
- [importPasswordKey](modules.md#importpasswordkey)
- [importPasswordKeyFromString](modules.md#importpasswordkeyfromstring)
- [importPrivateKey](modules.md#importprivatekey)
- [importPrivateKeyFromString](modules.md#importprivatekeyfromstring)
- [importPublicKey](modules.md#importpublickey)
- [importPublicKeyFromString](modules.md#importpublickeyfromstring)
- [importSalt](modules.md#importsalt)
- [isCryptoKey](modules.md#iscryptokey)
- [isCryptoKeyDataDecryption](modules.md#iscryptokeydatadecryption)
- [isCryptoKeyDataEncryption](modules.md#iscryptokeydataencryption)
- [isCryptoKeyDataSign](modules.md#iscryptokeydatasign)
- [isCryptoKeyDataVerify](modules.md#iscryptokeydataverify)
- [isCryptoKeyIncludesUsages](modules.md#iscryptokeyincludesusages)
- [isCryptoKeyPair](modules.md#iscryptokeypair)
- [isCryptoKeyPairExportedAsString](modules.md#iscryptokeypairexportedasstring)
- [isCryptoKeyPairImported](modules.md#iscryptokeypairimported)
- [isJWK](modules.md#isjwk)
- [isValidSalt](modules.md#isvalidsalt)
- [signNative](modules.md#signnative)
- [signToString](modules.md#signtostring)
- [signToTypedArray](modules.md#signtotypedarray)
- [verifyData](modules.md#verifydata)
- [verifyNative](modules.md#verifynative)

## Type aliases

### TCryptoUtilDecryptDataTypes

?? **TCryptoUtilDecryptDataTypes**: `string` \| `TTypedArrays`

#### Defined in

[encryption-utils/crypto-utils.types.ts:55](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L55)

___

### TCryptoUtilDecryptDataTypesNative

?? **TCryptoUtilDecryptDataTypesNative**: `TTypedArrays`

#### Defined in

[encryption-utils/crypto-utils.types.ts:53](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L53)

___

### TCryptoUtilDecryptKeyTypes

?? **TCryptoUtilDecryptKeyTypes**: `CryptoKey` \| `CryptoKeyPair` \| `string` \| [`TCryptoUtilKeypairExportFormatType`](modules.md#tcryptoutilkeypairexportformattype) \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)

#### Defined in

[encryption-utils/crypto-utils.types.ts:46](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L46)

___

### TCryptoUtilEncryptDataTypes

?? **TCryptoUtilEncryptDataTypes**: `object` \| `string` \| `number` \| [`TCryptoUtilEncryptDataTypesNative`](modules.md#tcryptoutilencryptdatatypesnative)

#### Defined in

[encryption-utils/crypto-utils.types.ts:33](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L33)

___

### TCryptoUtilEncryptDataTypesNative

?? **TCryptoUtilEncryptDataTypesNative**: `TTypedArrays`

#### Defined in

[encryption-utils/crypto-utils.types.ts:31](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L31)

___

### TCryptoUtilEncryptKeyTypes

?? **TCryptoUtilEncryptKeyTypes**: `CryptoKey` \| `CryptoKeyPair` \| `string` \| [`TCryptoUtilKeypairExportFormatType`](modules.md#tcryptoutilkeypairexportformattype) \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)

#### Defined in

[encryption-utils/crypto-utils.types.ts:39](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L39)

___

### TCryptoUtilImportKeyTypes

?? **TCryptoUtilImportKeyTypes**: `TTypedArrays` \| `ArrayBuffer`

#### Defined in

[encryption-utils/crypto-utils.types.ts:9](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L9)

___

### TCryptoUtilKeyExportFormatType

?? **TCryptoUtilKeyExportFormatType**: `Object`

#### Defined in

[encryption-utils/crypto-utils.types.ts:11](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L11)

___

### TCryptoUtilKeypairExportFormatType

?? **TCryptoUtilKeypairExportFormatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |
| `publicKey` | [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |
| `salt?` | `string` \| [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |

#### Defined in

[encryption-utils/crypto-utils.types.ts:13](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L13)

___

### TCryptoUtilKeypairImportFormatType

?? **TCryptoUtilKeypairImportFormatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey?` | `CryptoKey` |
| `publicKey` | `CryptoKey` |
| `salt?` | `string` |

#### Defined in

[encryption-utils/crypto-utils.types.ts:25](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L25)

___

### TCryptoUtilKeypairPreImportFormatType

?? **TCryptoUtilKeypairPreImportFormatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey` | [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |
| `publicKey` | [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |
| `salt?` | [`TCryptoUtilImportKeyTypes`](modules.md#tcryptoutilimportkeytypes) |

#### Defined in

[encryption-utils/crypto-utils.types.ts:19](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L19)

___

### TCryptoUtilsDataWithInitializationVector

?? **TCryptoUtilsDataWithInitializationVector**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |
| `iv` | `ArrayBuffer` |

#### Defined in

[encryption-utils/crypto-utils.types.ts:66](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L66)

___

### TCryptoUtilsDecryptDataKeyConfig

?? **TCryptoUtilsDecryptDataKeyConfig**: `string` \| `RsaOaepParams` \| `AesCtrParams` \| `AesCbcParams` \| `AesCmacParams` \| `AesGcmParams` \| `AesCfbParams`

#### Defined in

[encryption-utils/crypto-utils.types.ts:71](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L71)

___

### TCryptoUtilsEncryptDataKeyConfig

?? **TCryptoUtilsEncryptDataKeyConfig**: `string` \| `RsaOaepParams` \| `AesCtrParams` \| `AesCbcParams` \| `AesCmacParams` \| `AesGcmParams` \| `AesCfbParams`

#### Defined in

[encryption-utils/crypto-utils.types.ts:57](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.types.ts#L57)

___

### TDataSignUtilImportKeyTypes

?? **TDataSignUtilImportKeyTypes**: `JsonWebKey` \| `Int8Array` \| `Int16Array` \| `Int32Array` \| `Uint8Array` \| `Uint16Array` \| `Uint32Array` \| `Uint8ClampedArray` \| `Float32Array` \| `Float64Array` \| `DataView` \| `ArrayBuffer`

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:37](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L37)

___

### TDataSignUtilKeyExportFormatType

?? **TDataSignUtilKeyExportFormatType**: `JsonWebKey`

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:8](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L8)

___

### TDataSignUtilKeypairExportFormatType

?? **TDataSignUtilKeypairExportFormatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey?` | `string` \| [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |
| `publicKey` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |
| `salt?` | `string` \| [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:59](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L59)

___

### TDataSignUtilKeypairImportFormatType

?? **TDataSignUtilKeypairImportFormatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey?` | `CryptoKey` |
| `publicKey` | `CryptoKey` |

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:10](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L10)

___

### TDataSignUtilKeypairImportType

?? **TDataSignUtilKeypairImportType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `privateKey?` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |
| `publicKey` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |
| `salt?` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:69](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L69)

___

### TDataSignUtilSignDataTypes

?? **TDataSignUtilSignDataTypes**: `object` \| `string` \| `number` \| [`TDataSignUtilSignDataTypesNative`](modules.md#tdatasignutilsigndatatypesnative)

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:17](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L17)

___

### TDataSignUtilSignDataTypesNative

?? **TDataSignUtilSignDataTypesNative**: `TTypedArrays`

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:15](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L15)

___

### TDataSignUtilSignKeyTypes

?? **TDataSignUtilSignKeyTypes**: `CryptoKey` \| `CryptoKeyPair` \| `string` \| [`TDataSignUtilKeypairExportFormatType`](modules.md#tdatasignutilkeypairexportformattype) \| [`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype)

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:23](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L23)

___

### TDataSignUtilVerifyDataTypes

?? **TDataSignUtilVerifyDataTypes**: `string` \| `TTypedArrays`

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:53](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L53)

___

### TDataSignUtilVerifyDataTypesExtended

?? **TDataSignUtilVerifyDataTypesExtended**: [`TDataSignUtilVerifyDataTypes`](modules.md#tdatasignutilverifydatatypes) \| {}

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:55](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L55)

___

### TDataSignUtilVerifyDataTypesNative

?? **TDataSignUtilVerifyDataTypesNative**: `TTypedArrays`

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:51](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L51)

___

### TDataSignUtilVerifyKeyTypes

?? **TDataSignUtilVerifyKeyTypes**: `CryptoKey` \| `CryptoKeyPair` \| `string` \| [`TDataSignUtilKeypairExportFormatType`](modules.md#tdatasignutilkeypairexportformattype) \| [`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype)

#### Defined in

[data-sign-utils/data-sign-utils.types.ts:30](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.types.ts#L30)

___

### TEncryptionKeyStoreFormatType

?? **TEncryptionKeyStoreFormatType**: `string` \| `ArrayBuffer` \| `JsonWebKey` \| `TTypedArrays`

#### Defined in

[types.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/types.ts#L3)

___

### TPasswordEncryptionKeyImportNativeSupportedTypes

?? **TPasswordEncryptionKeyImportNativeSupportedTypes**: [`TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat`](modules.md#tpasswordenryptionutilskeyderivedtargetkeyexportformat)

#### Defined in

[password-utils/password-utils.types.ts:13](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.types.ts#L13)

___

### TPasswordEncryptionSupportedPasswordNativeTypes

?? **TPasswordEncryptionSupportedPasswordNativeTypes**: `TTypedArrays` \| `ArrayBuffer`

#### Defined in

[password-utils/password-utils.types.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.types.ts#L3)

___

### TPasswordEncryptionSupportesSaltNativeTypes

?? **TPasswordEncryptionSupportesSaltNativeTypes**: `TTypedArrays` \| `ArrayBuffer`

#### Defined in

[password-utils/password-utils.types.ts:7](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.types.ts#L7)

___

### TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat

?? **TPasswordEnryptionUtilsKeyDerivedTargetKeyExportFormat**: `JsonWebKey`

#### Defined in

[password-utils/password-utils.types.ts:11](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.types.ts#L11)

___

### TSaltUtilsSaltType

?? **TSaltUtilsSaltType**: `string` \| `TTypedArraysNative` \| `ArrayBuffer`

#### Defined in

[encryption-utils/salt-utils.types.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.types.ts#L3)

## Variables

### CRYPTO\_UTIL\_DATA\_SIGN\_PRIVATE\_KEY\_USAGE

??? `Const` **CRYPTO\_UTIL\_DATA\_SIGN\_PRIVATE\_KEY\_USAGE**: [`sign`](enums/ecrypto_utils_keys_usages.md#sign)

#### Defined in

[encryption-utils/crypto-utils.const.ts:37](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L37)

___

### CRYPTO\_UTIL\_DATA\_SIGN\_PUBLIC\_KEY\_USAGE

??? `Const` **CRYPTO\_UTIL\_DATA\_SIGN\_PUBLIC\_KEY\_USAGE**: [`verify`](enums/ecrypto_utils_keys_usages.md#verify)

#### Defined in

[encryption-utils/crypto-utils.const.ts:34](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L34)

___

### CRYPTO\_UTIL\_DESCRIPTION\_KEY\_TYPE

??? `Const` **CRYPTO\_UTIL\_DESCRIPTION\_KEY\_TYPE**: [`private`](enums/ecrypto_utils_keys_types.md#private)

#### Defined in

[encryption-utils/crypto-utils.const.ts:42](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L42)

___

### CRYPTO\_UTIL\_ENCRYPTION\_KEY\_TYPE

??? `Const` **CRYPTO\_UTIL\_ENCRYPTION\_KEY\_TYPE**: [`public`](enums/ecrypto_utils_keys_types.md#public)

#### Defined in

[encryption-utils/crypto-utils.const.ts:40](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L40)

___

### CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS

??? `Const` **CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `Object` |
| `hash.name` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |
| `modulusLength` | `number` |
| `name` | `string` |
| `publicExponent` | `Uint8Array` |

#### Defined in

[encryption-utils/crypto-utils.const.ts:50](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L50)

___

### CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT

??? `Const` **CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT**: ``"jwk"``

#### Defined in

[encryption-utils/crypto-utils.const.ts:56](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L56)

___

### CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME

??? `Const` **CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME**: ``"privateKey"``

#### Defined in

[encryption-utils/crypto-utils.const.ts:60](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L60)

___

### CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME

??? `Const` **CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME**: ``"publicKey"``

#### Defined in

[encryption-utils/crypto-utils.const.ts:58](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L58)

___

### CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME

??? `Const` **CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME**: ``"salt"``

#### Defined in

[encryption-utils/crypto-utils.const.ts:62](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L62)

___

### CRYPTO\_UTIL\_KEYPAIR\_USAGES

??? `Const` **CRYPTO\_UTIL\_KEYPAIR\_USAGES**: [`eCRYPTO_UTILS_KEYS_USAGES`](enums/ecrypto_utils_keys_usages.md)[]

#### Defined in

[encryption-utils/crypto-utils.const.ts:45](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L45)

___

### CRYPTO\_UTIL\_KEYS\_EXTRACTABLE

??? `Const` **CRYPTO\_UTIL\_KEYS\_EXTRACTABLE**: ``true``

#### Defined in

[encryption-utils/crypto-utils.const.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L3)

___

### CRYPTO\_UTIL\_KEY\_ALGORITHM

??? `Const` **CRYPTO\_UTIL\_KEY\_ALGORITHM**: ``"RSA-OAEP"``

#### Defined in

[encryption-utils/crypto-utils.const.ts:5](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L5)

___

### CRYPTO\_UTIL\_KEY\_DESC

??? `Const` **CRYPTO\_UTIL\_KEY\_DESC**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `Object` |
| `hash.name` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |
| `name` | `string` |

#### Defined in

[encryption-utils/crypto-utils.const.ts:7](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L7)

___

### CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE

??? `Const` **CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE**: [`decrypt`](enums/ecrypto_utils_keys_usages.md#decrypt)

#### Defined in

[encryption-utils/crypto-utils.const.ts:32](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L32)

___

### CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE

??? `Const` **CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE**: [`encrypt`](enums/ecrypto_utils_keys_usages.md#encrypt)

#### Defined in

[encryption-utils/crypto-utils.const.ts:30](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L30)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_DATA\_SIGN\_AND\_VERIFY\_PARAMS

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_DATA\_SIGN\_AND\_VERIFY\_PARAMS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `Object` |
| `hash.name` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |
| `name` | `string` |

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:42](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L42)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_GENERATE\_KEYPAIR\_OPTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `namedCurve` | `string` |

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:30](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L30)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_HASH\_ALGORITHM

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_HASH\_ALGORITHM**: [`SHA256`](enums/hash_calculation_utils_hash_algorithm.md#sha256)

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:7](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L7)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_EXPORT\_FORMAT**: ``"jwk"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:34](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L34)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PRIVATE\_KEY\_NAME**: ``"privateKey"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:38](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L38)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_PUBLIC\_KEY\_NAME**: ``"publicKey"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:36](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L36)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_SALT\_KEY\_NAME**: ``"salt"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:40](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L40)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_USAGES

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYPAIR\_USAGES**: [`eCRYPTO_UTILS_KEYS_USAGES`](enums/ecrypto_utils_keys_usages.md)[]

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:25](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L25)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEYS\_EXTRACTABLE

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEYS\_EXTRACTABLE**: ``true``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L3)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_ALGORITHM

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_ALGORITHM**: ``"ECDSA"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:5](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L5)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_DESC

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_KEY\_DESC**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `namedCurve` | `string` |

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:10](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L10)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_PRIVATE\_KEY\_USAGE**: [`sign`](enums/ecrypto_utils_keys_usages.md#sign)

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:18](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L18)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_PUBLIC\_KEY\_USAGE**: [`verify`](enums/ecrypto_utils_keys_usages.md#verify)

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:15](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L15)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_SIGN\_KEY\_TYPE

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_SIGN\_KEY\_TYPE**: ``"private"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:23](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L23)

___

### DATA\_SIGN\_CRYPTO\_UTIL\_VERIFY\_KEY\_TYPE

??? `Const` **DATA\_SIGN\_CRYPTO\_UTIL\_VERIFY\_KEY\_TYPE**: ``"public"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:21](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L21)

___

### ENCRYPTIONS\_KEYS\_UTILS\_JWK\_FORMAT\_OBJECT\_KEYS

??? `Const` **ENCRYPTIONS\_KEYS\_UTILS\_JWK\_FORMAT\_OBJECT\_KEYS**: `string`[]

#### Defined in

[encryption-keys-utils/encryption-keys-utils.const.ts:1](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.const.ts#L1)

___

### HASH\_CALCULATION\_UTILS\_DEFAULT\_HASH\_ALGORITHM

??? `Const` **HASH\_CALCULATION\_UTILS\_DEFAULT\_HASH\_ALGORITHM**: [`SHA256`](enums/hash_calculation_utils_hash_algorithm.md#sha256)

#### Defined in

[const.ts:15](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/const.ts#L15)

___

### HASH\_CALCULATION\_UTILS\_HASH\_ALGORITHM\_OUTPUT\_STRING\_LENGTH

??? `Const` **HASH\_CALCULATION\_UTILS\_HASH\_ALGORITHM\_OUTPUT\_STRING\_LENGTH**: { [key in HASH\_CALCULATION\_UTILS\_HASH\_ALGORITHM]: number}

#### Defined in

[const.ts:7](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/const.ts#L7)

___

### INITIALIZATION\_VECTOR\_DEFAULT\_LENGTH

??? `Const` **INITIALIZATION\_VECTOR\_DEFAULT\_LENGTH**: ``12``

#### Defined in

[encryption-utils/crypto-utils.const.ts:64](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/crypto-utils.const.ts#L64)

___

### KEY\_NOT\_FOUND\_ERROR\_MESSAGE

??? `Const` **KEY\_NOT\_FOUND\_ERROR\_MESSAGE**: ``"A key of the required type was not found"``

#### Defined in

[data-sign-utils/data-sign-utils.const.ts:47](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/data-sign-utils.const.ts#L47)

___

### MIN\_JWK\_PROPS\_COUNT

??? `Const` **MIN\_JWK\_PROPS\_COUNT**: ``3``

#### Defined in

[encryption-keys-utils/encryption-keys-utils.const.ts:23](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.const.ts#L23)

___

### MIN\_JWK\_STRING\_LENGTH

??? `Const` **MIN\_JWK\_STRING\_LENGTH**: ``40``

#### Defined in

[encryption-keys-utils/encryption-keys-utils.const.ts:21](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.const.ts#L21)

___

### PASSWORD\_ENCRYPTION\_UTILS\_DECRYPTION\_PARAMS

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_DECRYPTION\_PARAMS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iv` | ``null`` |
| `name` | `string` |

#### Defined in

[password-utils/password-utils.const.ts:60](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L60)

___

### PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_INITIALIZATION\_VECTOR\_LENGTH

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_INITIALIZATION\_VECTOR\_LENGTH**: ``15``

#### Defined in

[password-utils/password-utils.const.ts:53](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L53)

___

### PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_PARAMS

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_ENCRYPTION\_PARAMS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iv` | ``null`` |
| `name` | `string` |

#### Defined in

[password-utils/password-utils.const.ts:55](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L55)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BASE\_KEY\_CONFIG

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BASE\_KEY\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |
| `iterations` | `number` |
| `name` | `string` |
| `salt` | ``null`` |

#### Defined in

[password-utils/password-utils.const.ts:22](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L22)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_ITERATIONS

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_ITERATIONS**: ``100000``

#### Defined in

[password-utils/password-utils.const.ts:18](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L18)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_KEY\_LENGTH\_BYTES

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_BITS\_KEY\_LENGTH\_BYTES**: ``16``

#### Defined in

[password-utils/password-utils.const.ts:20](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L20)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_ALGORITHM

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_ALGORITHM**: ``"AES-GCM"``

#### Defined in

[password-utils/password-utils.const.ts:29](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L29)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_CONFIG

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `name` | `string` |

#### Defined in

[password-utils/password-utils.const.ts:34](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L34)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_EXPORT\_FORMAT

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_EXPORT\_FORMAT**: ``"jwk"``

#### Defined in

[password-utils/password-utils.const.ts:47](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L47)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IMPORT\_FORMAT

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IMPORT\_FORMAT**: ``"jwk"``

#### Defined in

[password-utils/password-utils.const.ts:50](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L50)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IS\_EXPORTED

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_IS\_EXPORTED**: ``true``

#### Defined in

[password-utils/password-utils.const.ts:39](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L39)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_LENGTH

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_LENGTH**: ``128``

#### Defined in

[password-utils/password-utils.const.ts:32](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L32)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_USAGES

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_DERIVED\_TARGET\_KEY\_USAGES**: `string`[]

#### Defined in

[password-utils/password-utils.const.ts:42](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L42)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_ALGORITHM

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_ALGORITHM**: ``"PBKDF2"``

#### Defined in

[password-utils/password-utils.const.ts:8](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L8)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_IS\_KEY\_EXTRACTABLE

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_IS\_KEY\_EXTRACTABLE**: ``false``

#### Defined in

[password-utils/password-utils.const.ts:10](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L10)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_IMPORTED\_FORMAT

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_IMPORTED\_FORMAT**: ``"raw"``

#### Defined in

[password-utils/password-utils.const.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L3)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_SALT\_GENERATED\_LENGTH

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_GENERATION\_KEY\_SALT\_GENERATED\_LENGTH**: ``12``

#### Defined in

[password-utils/password-utils.const.ts:6](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L6)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_HASH\_ALGORITHM

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_HASH\_ALGORITHM**: [`SHA256`](enums/hash_calculation_utils_hash_algorithm.md#sha256)

#### Defined in

[password-utils/password-utils.const.ts:15](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L15)

___

### PASSWORD\_ENCRYPTION\_UTILS\_KEY\_USAGES

??? `Const` **PASSWORD\_ENCRYPTION\_UTILS\_KEY\_USAGES**: `string`[]

#### Defined in

[password-utils/password-utils.const.ts:13](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/password-utils.const.ts#L13)

___

### SALT\_GENERATION\_UTILS\_SALT\_LENGTH\_BYTES

??? `Const` **SALT\_GENERATION\_UTILS\_SALT\_LENGTH\_BYTES**: ``32``

#### Defined in

[encryption-utils/salt-utils.const.ts:1](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.const.ts#L1)

___

### SALT\_GENERATION\_UTILS\_SALT\_MAX\_LENGTH\_BYTES

??? `Const` **SALT\_GENERATION\_UTILS\_SALT\_MAX\_LENGTH\_BYTES**: ``64``

#### Defined in

[encryption-utils/salt-utils.const.ts:5](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.const.ts#L5)

___

### SALT\_GENERATION\_UTILS\_SALT\_MIN\_LENGTH\_BYTES

??? `Const` **SALT\_GENERATION\_UTILS\_SALT\_MIN\_LENGTH\_BYTES**: ``4``

#### Defined in

[encryption-utils/salt-utils.const.ts:3](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.const.ts#L3)

## Functions

### calcCryptoKeyHash

??? `Const` **calcCryptoKeyHash**(`key`, `alg?`): `Promise`<`string` \| `Error`\>

calculates hash string of the crypto key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `alg` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:158](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L158)

___

### calcCryptoKeyPairHash

??? `Const` **calcCryptoKeyPairHash**(`cryptoPair`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoPair` | `CryptoKeyPair` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:201](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L201)

___

### calculateHash

??? `Const` **calculateHash**(`data`, `alg?`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TSerializableDataTypes` |
| `alg` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[hash-calculation-utils/hash-calculation-utils.ts:29](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/hash-calculation-utils/hash-calculation-utils.ts#L29)

___

### calculateHashNative

??? `Const` **calculateHashNative**(`data`, `alg`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TTypedArrays` |
| `alg` | [`HASH_CALCULATION_UTILS_HASH_ALGORITHM`](enums/hash_calculation_utils_hash_algorithm.md) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[hash-calculation-utils/hash-calculation-utils.ts:16](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/hash-calculation-utils/hash-calculation-utils.ts#L16)

___

### checkIfStringIsKeyPair

??? `Const` **checkIfStringIsKeyPair**(`keyString`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyString` | `string` |

#### Returns

`boolean`

#### Defined in

[encryption-utils/keys.encryption-utils.ts:305](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L305)

___

### concatDataWithInitializationVector

??? `Const` **concatDataWithInitializationVector**(`options`): `ArrayBuffer` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TCryptoUtilsDataWithInitializationVector`](modules.md#tcryptoutilsdatawithinitializationvector) |

#### Returns

`ArrayBuffer` \| `Error`

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:53](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L53)

___

### dataSignCheckIfStringIsKeyPair

??? `Const` **dataSignCheckIfStringIsKeyPair**(`keyString`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyString` | `string` |

#### Returns

`boolean`

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:358](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L358)

___

### dataSignConvertAndExportKeyAsString

??? `Const` **dataSignConvertAndExportKeyAsString**(`key`): `Promise`<`string` \| `Error`\>

import an encryption key from a
supported format of an exported key
and returns a crypto key as a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TEncryptionKeyStoreFormatType`](modules.md#tencryptionkeystoreformattype) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:433](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L433)

___

### dataSignExportKey

??? `Const` **dataSignExportKey**(`key`): `Promise`<`JsonWebKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |

#### Returns

`Promise`<`JsonWebKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:54](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L54)

___

### dataSignExportKeyAsString

??? `Const` **dataSignExportKeyAsString**(`key`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:67](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L67)

___

### dataSignExportKeyPair

??? `Const` **dataSignExportKeyPair**(`keyPair`, `password?`): `Promise`<[`TDataSignUtilKeypairExportFormatType`](modules.md#tdatasignutilkeypairexportformattype) \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |
| `password?` | `string` |

#### Returns

`Promise`<[`TDataSignUtilKeypairExportFormatType`](modules.md#tdatasignutilkeypairexportformattype) \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:106](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L106)

___

### dataSignExportKeyPairAsString

??? `Const` **dataSignExportKeyPairAsString**(`keyPair`, `password?`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |
| `password?` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:180](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L180)

___

### dataSignExportPublicKey

??? `Const` **dataSignExportPublicKey**(`keyPair`): `Promise`<`JsonWebKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |

#### Returns

`Promise`<`JsonWebKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:82](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L82)

___

### dataSignExportPublicKeyAsString

??? `Const` **dataSignExportPublicKeyAsString**(`keyPair`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:91](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L91)

___

### dataSignGenerateKeyPair

??? `Const` **dataSignGenerateKeyPair**(): `PromiseLike`<`CryptoKeyPair`\>

#### Returns

`PromiseLike`<`CryptoKeyPair`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:47](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L47)

___

### dataSignGetKeyOfType

??? `Const` **dataSignGetKeyOfType**(`key`, `type`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilSignKeyTypes`](modules.md#tdatasignutilsignkeytypes) |
| `type` | `KeyType` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:365](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L365)

___

### dataSignImportEncryptionKey

??? `Const` **dataSignImportEncryptionKey**(`key`): `Promise`<`CryptoKey` \| `Error`\>

import an encryption key from a
supported format of an exported key
and returns a crypto key in native
format

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TEncryptionKeyStoreFormatType`](modules.md#tencryptionkeystoreformattype) |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:410](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L410)

___

### dataSignImportKey

??? `Const` **dataSignImportKey**(`key`, `isPublic?`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) | `undefined` |
| `isPublic` | `boolean` | `true` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:199](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L199)

___

### dataSignImportKeyFromString

??? `Const` **dataSignImportKeyFromString**(`keyString`, `isPublic?`): `Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyString` | `string` | `undefined` |
| `isPublic` | `boolean` | `true` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:331](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L331)

___

### dataSignImportKeyPair

??? `Const` **dataSignImportKeyPair**(`keyPair`, `checkPrivateKey?`): `Promise`<[`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype) \| `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPair` | [`TDataSignUtilKeypairImportType`](modules.md#tdatasignutilkeypairimporttype) | `undefined` |
| `checkPrivateKey` | `boolean` | `true` |

#### Returns

`Promise`<[`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype) \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:236](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L236)

___

### dataSignImportKeyPairFromString

??? `Const` **dataSignImportKeyPairFromString**(`keyPairString`, `password?`): `Promise`<[`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype) \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPairString` | `string` |
| `password?` | `string` |

#### Returns

`Promise`<[`TDataSignUtilKeypairImportFormatType`](modules.md#tdatasignutilkeypairimportformattype) \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:278](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L278)

___

### dataSignImportPrivateKey

??? `Const` **dataSignImportPrivateKey**(`key`): `PromiseLike`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |

#### Returns

`PromiseLike`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:232](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L232)

___

### dataSignImportPrivateKeyFromString

??? `Const` **dataSignImportPrivateKeyFromString**(`key`): `Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:353](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L353)

___

### dataSignImportPublicKey

??? `Const` **dataSignImportPublicKey**(`key`): `PromiseLike`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilImportKeyTypes`](modules.md#tdatasignutilimportkeytypes) |

#### Returns

`PromiseLike`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:228](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L228)

___

### dataSignImportPublicKeyFromString

??? `Const` **dataSignImportPublicKeyFromString**(`key`): `Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey` \| `Error`\>

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:348](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L348)

___

### dataSignIsCryptoKeyPairImported

??? `Const` **dataSignIsCryptoKeyPairImported**(`key`, `checkPrivateKey?`): key is TDataSignUtilKeypairExportFormatType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `checkPrivateKey` | `boolean` | `true` |

#### Returns

key is TDataSignUtilKeypairExportFormatType

#### Defined in

[data-sign-utils/keys.data-sign-utils.ts:36](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/keys.data-sign-utils.ts#L36)

___

### decryptData

??? `Const` **decryptData**(`key`, `data`, `decryptKeyParams?`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TCryptoUtilDecryptKeyTypes`](modules.md#tcryptoutildecryptkeytypes) |
| `data` | [`TCryptoUtilDecryptDataTypes`](modules.md#tcryptoutildecryptdatatypes) |
| `decryptKeyParams?` | [`TCryptoUtilsDecryptDataKeyConfig`](modules.md#tcryptoutilsdecryptdatakeyconfig) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-utils/decrypt-data.encryption-utils.ts:77](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/decrypt-data.encryption-utils.ts#L77)

___

### decryptDataArrayOrStringWithKeyToUInt8Array

??? `Const` **decryptDataArrayOrStringWithKeyToUInt8Array**(`key`, `dataWithIv`): `Promise`<`Uint8Array` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `dataWithIv` | `string` \| `Uint8Array` |

#### Returns

`Promise`<`Uint8Array` \| `Error`\>

#### Defined in

[password-utils/decrypt.password-utils.ts:80](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/decrypt.password-utils.ts#L80)

___

### decryptDataByPassword

??? `Const` **decryptDataByPassword**(`password`, `salt`, `dataWithIv`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |
| `dataWithIv` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/decrypt.password-utils.ts:105](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/decrypt.password-utils.ts#L105)

___

### decryptDataFromString

??? `Const` **decryptDataFromString**(`key`, `data`, `decryptKeyParams?`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TCryptoUtilDecryptKeyTypes`](modules.md#tcryptoutildecryptkeytypes) |
| `data` | `object` \| [`TCryptoUtilDecryptDataTypes`](modules.md#tcryptoutildecryptdatatypes) |
| `decryptKeyParams?` | [`TCryptoUtilsDecryptDataKeyConfig`](modules.md#tcryptoutilsdecryptdatakeyconfig) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[encryption-utils/decrypt-data.encryption-utils.ts:39](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/decrypt-data.encryption-utils.ts#L39)

___

### decryptDataWithKey

??? `Const` **decryptDataWithKey**(`key`, `dataWithIv`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `dataWithIv` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/decrypt.password-utils.ts:45](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/decrypt.password-utils.ts#L45)

___

### decryptDataWithKeyFromUint8Array

??? `Const` **decryptDataWithKeyFromUint8Array**(`key`, `dataWithIv`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `dataWithIv` | `Uint8Array` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/decrypt.password-utils.ts:67](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/decrypt.password-utils.ts#L67)

___

### decryptDataWithKeyNative

??? `Const` **decryptDataWithKeyNative**(`key`, `dataWithIv`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `dataWithIv` | `ArrayBuffer` |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[password-utils/decrypt.password-utils.ts:16](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/decrypt.password-utils.ts#L16)

___

### decryptNative

??? `Const` **decryptNative**(`key`, `data`, `decryptKeyParams?`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `data` | `TTypedArrays` |
| `decryptKeyParams` | [`TCryptoUtilsDecryptDataKeyConfig`](modules.md#tcryptoutilsdecryptdatakeyconfig) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[encryption-utils/decrypt-data.encryption-utils.ts:22](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/decrypt-data.encryption-utils.ts#L22)

___

### encryptDataToArrayBuffer

??? `Const` **encryptDataToArrayBuffer**(`key`, `data`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[password-utils/encrypt.password-utils.ts:17](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/encrypt.password-utils.ts#L17)

___

### encryptDataToString

??? `Const` **encryptDataToString**(`key`, `data`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/encrypt.password-utils.ts:53](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/encrypt.password-utils.ts#L53)

___

### encryptDataToUInt8Array

??? `Const` **encryptDataToUInt8Array**(`key`, `data`): `Promise`<`Uint8Array` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `CryptoKey` |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |

#### Returns

`Promise`<`Uint8Array` \| `Error`\>

#### Defined in

[password-utils/encrypt.password-utils.ts:65](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/encrypt.password-utils.ts#L65)

___

### encryptDataWithPassword

??? `Const` **encryptDataWithPassword**(`password`, `salt`, `data`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/encrypt.password-utils.ts:77](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/encrypt.password-utils.ts#L77)

___

### encryptDataWithPasswordToArrayBuffer

??? `Const` **encryptDataWithPasswordToArrayBuffer**(`password`, `salt`, `data`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[password-utils/encrypt.password-utils.ts:92](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/encrypt.password-utils.ts#L92)

___

### encryptNative

??? `Const` **encryptNative**(`key`, `data`, `cryptoKeyConfig?`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `data` | `TTypedArrays` |
| `cryptoKeyConfig` | [`TCryptoUtilsEncryptDataKeyConfig`](modules.md#tcryptoutilsencryptdatakeyconfig) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:100](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L100)

___

### encryptToString

??? `Const` **encryptToString**(`key`, `data`, `cryptoKeyConfig?`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TCryptoUtilEncryptKeyTypes`](modules.md#tcryptoutilencryptkeytypes) |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |
| `cryptoKeyConfig?` | [`TCryptoUtilsEncryptDataKeyConfig`](modules.md#tcryptoutilsencryptdatakeyconfig) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:145](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L145)

___

### encryptToTypedArray

??? `Const` **encryptToTypedArray**(`key`, `data`, `cryptoKeyConfig?`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TCryptoUtilEncryptKeyTypes`](modules.md#tcryptoutilencryptkeytypes) |
| `data` | [`TCryptoUtilEncryptDataTypes`](modules.md#tcryptoutilencryptdatatypes) |
| `cryptoKeyConfig?` | [`TCryptoUtilsEncryptDataKeyConfig`](modules.md#tcryptoutilsencryptdatakeyconfig) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:117](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L117)

___

### exportCryptoKeyInFormat

??? `Const` **exportCryptoKeyInFormat**(`key`, `format`): `Promise`<`ArrayBuffer` \| `JsonWebKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `format` | [`CONST_CRYPTO_KEYS_TYPES_EXPORT_FORMATS`](enums/const_crypto_keys_types_export_formats.md) |

#### Returns

`Promise`<`ArrayBuffer` \| `JsonWebKey` \| `Error`\>

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:132](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L132)

___

### exportKey

??? `Const` **exportKey**(`key`): `PromiseLike`<`Object` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |

#### Returns

`PromiseLike`<`Object` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:51](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L51)

___

### exportKeyAsString

??? `Const` **exportKeyAsString**(`key`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:65](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L65)

___

### exportKeyPair

??? `Const` **exportKeyPair**(`keyPair`, `password?`): `Promise`<`Error` \| [`TCryptoUtilKeypairExportFormatType`](modules.md#tcryptoutilkeypairexportformattype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |
| `password?` | `string` |

#### Returns

`Promise`<`Error` \| [`TCryptoUtilKeypairExportFormatType`](modules.md#tcryptoutilkeypairexportformattype)\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:84](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L84)

___

### exportKeyPairAsString

??? `Const` **exportKeyPairAsString**(`keyPair`, `password?`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |
| `password?` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:151](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L151)

___

### exportPasswordKey

??? `Const` **exportPasswordKey**(`passwordKey`): `Error` \| `PromiseLike`<`JsonWebKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordKey` | `CryptoKey` |

#### Returns

`Error` \| `PromiseLike`<`JsonWebKey`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:103](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L103)

___

### exportPasswordKeyAsString

??? `Const` **exportPasswordKeyAsString**(`passwordKey`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordKey` | `CryptoKey` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:119](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L119)

___

### exportPublicKey

??? `Const` **exportPublicKey**(`keyPair`): `Promise`<`Object` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |

#### Returns

`Promise`<`Object` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:71](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L71)

___

### exportPublicKeyAsString

??? `Const` **exportPublicKeyAsString**(`keyPair`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `CryptoKeyPair` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:75](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L75)

___

### generateInitializationVectorNative

??? `Const` **generateInitializationVectorNative**(`vectorLength?`): `Uint8Array` \| `Error`

return a random vector, used e.g. for aes-gcm
encryption

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vectorLength` | `number` | length of the vector generated |

#### Returns

`Uint8Array` \| `Error`

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:32](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L32)

___

### generateInitializationVectorNativeArrayBuffer

??? `Const` **generateInitializationVectorNativeArrayBuffer**(`vectorLength?`): `ArrayBuffer` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vectorLength?` | `number` |

#### Returns

`ArrayBuffer` \| `Error`

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:42](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L42)

___

### generateKeyPair

??? `Const` **generateKeyPair**(): `PromiseLike`<`CryptoKeyPair`\>

#### Returns

`PromiseLike`<`CryptoKeyPair`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:44](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L44)

___

### generatePasswordKey

??? `Const` **generatePasswordKey**(`password`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`TPasswordEncryptionSupportedPasswordNativeTypes`](modules.md#tpasswordencryptionsupportedpasswordnativetypes) |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:28](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L28)

___

### generatePasswordKeyAsString

??? `Const` **generatePasswordKeyAsString**(`passwordString`, `salt`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordString` | `string` |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:154](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L154)

___

### generatePasswordKeyByPasswordString

??? `Const` **generatePasswordKeyByPasswordString**(`passwordString`, `saltValue`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordString` | `string` |
| `saltValue` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:79](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L79)

___

### generatePasswordKeyInExportFormat

??? `Const` **generatePasswordKeyInExportFormat**(`passwordString`, `salt`): `Promise`<`JsonWebKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordString` | `string` |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |

#### Returns

`Promise`<`JsonWebKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:138](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L138)

___

### generateSalt

??? `Const` **generateSalt**(`saltLength?`): `Uint8Array` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `saltLength` | `number` |

#### Returns

`Uint8Array` \| `Error`

#### Defined in

[encryption-utils/salt-utils.ts:24](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.ts#L24)

___

### generateSaltNative

??? `Const` **generateSaltNative**(`saltLength`): `Uint8Array` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `saltLength` | `number` |

#### Returns

`Uint8Array` \| `Error`

#### Defined in

[encryption-utils/salt-utils.ts:16](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.ts#L16)

___

### generateSaltString

??? `Const` **generateSaltString**(`saltLength?`): `string` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `saltLength?` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

[encryption-utils/salt-utils.ts:40](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.ts#L40)

___

### getDerivationNative

??? `Const` **getDerivationNative**(`passwordKey`, `saltValue`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordKey` | `CryptoKey` |
| `saltValue` | `Uint8Array` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:47](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L47)

___

### getInitializationVectorFromData

??? `Const` **getInitializationVectorFromData**(`arrayBuffer`, `ivLengthBytes?`): `Error` \| [`TCryptoUtilsDataWithInitializationVector`](modules.md#tcryptoutilsdatawithinitializationvector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayBuffer` | `ArrayBuffer` |
| `ivLengthBytes` | `number` |

#### Returns

`Error` \| [`TCryptoUtilsDataWithInitializationVector`](modules.md#tcryptoutilsdatawithinitializationvector)

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:63](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L63)

___

### getInitializationVectorFromDataString

??? `Const` **getInitializationVectorFromDataString**(`data`, `ivLengthBytes?`): `Error` \| [`TCryptoUtilsDataWithInitializationVector`](modules.md#tcryptoutilsdatawithinitializationvector)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `ivLengthBytes?` | `number` |

#### Returns

`Error` \| [`TCryptoUtilsDataWithInitializationVector`](modules.md#tcryptoutilsdatawithinitializationvector)

#### Defined in

[encryption-utils/encrypt-data.encryption-utils.ts:88](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/encrypt-data.encryption-utils.ts#L88)

___

### getJWK

??? `Const` **getJWK**(`key`, `isReturnError?`): `boolean` \| `JsonWebKey` \| `Error`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `isReturnError` | `boolean` | `false` |

#### Returns

`boolean` \| `JsonWebKey` \| `Error`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:102](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L102)

___

### getJWKOrBool

??? `Const` **getJWKOrBool**(`key`): `boolean` \| `JsonWebKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean` \| `JsonWebKey`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:129](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L129)

___

### getJWKOrError

??? `Const` **getJWKOrError**(`key`): `JsonWebKey` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`JsonWebKey` \| `Error`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:126](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L126)

___

### getKeyOfType

??? `Const` **getKeyOfType**(`key`, `type`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TCryptoUtilEncryptKeyTypes`](modules.md#tcryptoutilencryptkeytypes) |
| `type` | `KeyType` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:314](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L314)

___

### hashCalculator

??? `Const` **hashCalculator**(`algorithm`, `data`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `AlgorithmIdentifier` |
| `data` | `ArrayBuffer` \| `Int8Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `DataView` |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[hash-calculation-utils/hash-calculation-utils.ts:14](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/hash-calculation-utils/hash-calculation-utils.ts#L14)

___

### importKey

??? `Const` **importKey**(`key`, `isPublic?`): `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `object` | `undefined` |
| `isPublic` | `boolean` | `true` |

#### Returns

`PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:170](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L170)

___

### importKeyFromString

??? `Const` **importKeyFromString**(`keyString`, `isPublic?`): `Error` \| `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyString` | `string` | `undefined` |
| `isPublic` | `boolean` | `true` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:286](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L286)

___

### importKeyPair

??? `Const` **importKeyPair**(`keyPair`, `checkPrivateKey?`): `Promise`<`Error` \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPair` | [`TCryptoUtilKeypairPreImportFormatType`](modules.md#tcryptoutilkeypairpreimportformattype) | `undefined` |
| `checkPrivateKey` | `boolean` | `true` |

#### Returns

`Promise`<`Error` \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:189](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L189)

___

### importKeyPairFromString

??? `Const` **importKeyPairFromString**(`keyPairString`, `password?`): `Promise`<`Error` \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPairString` | `string` |
| `password?` | `string` |

#### Returns

`Promise`<`Error` \| [`TCryptoUtilKeypairImportFormatType`](modules.md#tcryptoutilkeypairimportformattype)\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:243](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L243)

___

### importPasswordKey

??? `Const` **importPasswordKey**(`passwordKey`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordKey` | `JsonWebKey` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:170](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L170)

___

### importPasswordKeyFromString

??? `Const` **importPasswordKeyFromString**(`passwordKey`): `Promise`<`CryptoKey` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `passwordKey` | `string` |

#### Returns

`Promise`<`CryptoKey` \| `Error`\>

#### Defined in

[password-utils/derive-key.password-utils.ts:188](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/password-utils/derive-key.password-utils.ts#L188)

___

### importPrivateKey

??? `Const` **importPrivateKey**(`key`): `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `object` |

#### Returns

`PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:186](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L186)

___

### importPrivateKeyFromString

??? `Const` **importPrivateKeyFromString**(`key`): `Error` \| `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:301](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L301)

___

### importPublicKey

??? `Const` **importPublicKey**(`key`): `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `object` |

#### Returns

`PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:183](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L183)

___

### importPublicKeyFromString

??? `Const` **importPublicKeyFromString**(`key`): `Error` \| `PromiseLike`<`CryptoKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Error` \| `PromiseLike`<`CryptoKey`\>

#### Defined in

[encryption-utils/keys.encryption-utils.ts:297](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L297)

___

### importSalt

??? `Const` **importSalt**(`salt`): `Uint8Array` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `salt` | [`TSaltUtilsSaltType`](modules.md#tsaltutilssalttype) |

#### Returns

`Uint8Array` \| `Error`

#### Defined in

[encryption-utils/salt-utils.ts:103](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.ts#L103)

___

### isCryptoKey

??? `Const` **isCryptoKey**(`v`): v is CryptoKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is CryptoKey

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:23](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L23)

___

### isCryptoKeyDataDecryption

??? `Const` **isCryptoKeyDataDecryption**(`cryptoKey`): cryptoKey is CryptoKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoKey` | `any` |

#### Returns

cryptoKey is CryptoKey

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:64](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L64)

___

### isCryptoKeyDataEncryption

??? `Const` **isCryptoKeyDataEncryption**(`cryptoKey`): cryptoKey is CryptoKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoKey` | `any` |

#### Returns

cryptoKey is CryptoKey

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:58](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L58)

___

### isCryptoKeyDataSign

??? `Const` **isCryptoKeyDataSign**(`cryptoKey`): cryptoKey is CryptoKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoKey` | `any` |

#### Returns

cryptoKey is CryptoKey

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:50](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L50)

___

### isCryptoKeyDataVerify

??? `Const` **isCryptoKeyDataVerify**(`cryptoKey`): cryptoKey is CryptoKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoKey` | `any` |

#### Returns

cryptoKey is CryptoKey

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:54](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L54)

___

### isCryptoKeyIncludesUsages

??? `Const` **isCryptoKeyIncludesUsages**(`cryptoKey`, `expectedUsages`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cryptoKey` | `CryptoKey` |
| `expectedUsages` | [`eCRYPTO_UTILS_KEYS_USAGES`](enums/ecrypto_utils_keys_usages.md) \| [`eCRYPTO_UTILS_KEYS_USAGES`](enums/ecrypto_utils_keys_usages.md)[] |

#### Returns

`boolean`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:38](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L38)

___

### isCryptoKeyPair

??? `Const` **isCryptoKeyPair**(`keyPair`, `checkPrivateKeys?`): keyPair is CryptoKeyPair

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPair` | `any` | `undefined` |
| `checkPrivateKeys` | `boolean` | `true` |

#### Returns

keyPair is CryptoKeyPair

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:27](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L27)

___

### isCryptoKeyPairExportedAsString

??? `Const` **isCryptoKeyPairExportedAsString**(`keyPair`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `any` |

#### Returns

`boolean`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:70](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L70)

___

### isCryptoKeyPairImported

??? `Const` **isCryptoKeyPairImported**(`key`, `checkPrivateKey?`): key is TCryptoUtilKeypairExportFormatType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `checkPrivateKey` | `boolean` | `true` |

#### Returns

key is TCryptoUtilKeypairExportFormatType

#### Defined in

[encryption-utils/keys.encryption-utils.ts:33](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/keys.encryption-utils.ts#L33)

___

### isJWK

??? `Const` **isJWK**(`keyObject`, `isReturnError?`): `boolean` \| `Error`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyObject` | `object` | `undefined` |
| `isReturnError` | `boolean` | `false` |

#### Returns

`boolean` \| `Error`

#### Defined in

[encryption-keys-utils/encryption-keys-utils.ts:74](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-keys-utils/encryption-keys-utils.ts#L74)

___

### isValidSalt

??? `Const` **isValidSalt**(`salt`): salt is TSaltUtilsSaltType

#### Parameters

| Name | Type |
| :------ | :------ |
| `salt` | `any` |

#### Returns

salt is TSaltUtilsSaltType

#### Defined in

[encryption-utils/salt-utils.ts:50](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/encryption-utils/salt-utils.ts#L50)

___

### signNative

??? `Const` **signNative**(`key`, `data`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `data` | `TTypedArrays` |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[data-sign-utils/sign-data.encryption-utils.ts:19](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/sign-data.encryption-utils.ts#L19)

___

### signToString

??? `Const` **signToString**(`key`, `data`): `Promise`<`string` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilSignKeyTypes`](modules.md#tdatasignutilsignkeytypes) |
| `data` | [`TDataSignUtilSignDataTypes`](modules.md#tdatasignutilsigndatatypes) |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[data-sign-utils/sign-data.encryption-utils.ts:65](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/sign-data.encryption-utils.ts#L65)

___

### signToTypedArray

??? `Const` **signToTypedArray**(`key`, `data`): `Promise`<`ArrayBuffer` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilSignKeyTypes`](modules.md#tdatasignutilsignkeytypes) |
| `data` | [`TDataSignUtilSignDataTypes`](modules.md#tdatasignutilsigndatatypes) |

#### Returns

`Promise`<`ArrayBuffer` \| `Error`\>

#### Defined in

[data-sign-utils/sign-data.encryption-utils.ts:41](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/sign-data.encryption-utils.ts#L41)

___

### verifyData

??? `Const` **verifyData**(`key`, `data`, `signature`): `Promise`<``true`` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`TDataSignUtilVerifyKeyTypes`](modules.md#tdatasignutilverifykeytypes) |
| `data` | [`TDataSignUtilVerifyDataTypesExtended`](modules.md#tdatasignutilverifydatatypesextended) |
| `signature` | [`TDataSignUtilVerifyDataTypes`](modules.md#tdatasignutilverifydatatypes) |

#### Returns

`Promise`<``true`` \| `Error`\>

#### Defined in

[data-sign-utils/verify-data.encryption-utils.ts:46](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/verify-data.encryption-utils.ts#L46)

___

### verifyNative

??? `Const` **verifyNative**(`key`, `data`, `signature`): `Promise`<``true`` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `CryptoKey` |
| `data` | `TTypedArrays` |
| `signature` | `TTypedArrays` |

#### Returns

`Promise`<``true`` \| `Error`\>

#### Defined in

[data-sign-utils/verify-data.encryption-utils.ts:17](https://github.com/pashoo2/crypto-utilities/blob/ebd3673/src/data-sign-utils/verify-data.encryption-utils.ts#L17)
