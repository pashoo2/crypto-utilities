import { TSerializableDataTypes } from '@pashoo2/serialization-utils';
import { TTypedArrays } from '@pashoo2/typed-array-utils';
import { HASH_CALCULATION_UTILS_HASH_ALGORITHM } from '../const';
export declare const hashCalculator: (algorithm: AlgorithmIdentifier, data: ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array) => Promise<ArrayBuffer>;
export declare const calculateHashNative: (data: TTypedArrays, alg: HASH_CALCULATION_UTILS_HASH_ALGORITHM) => Promise<ArrayBuffer | Error>;
export declare const calculateHash: (data: TSerializableDataTypes, alg?: HASH_CALCULATION_UTILS_HASH_ALGORITHM) => Promise<string | Error>;
