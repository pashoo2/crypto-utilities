import {TSerializableDataTypes, stringify} from '@pashoo2/serialization-utils';
import {
  decodeDOMStringToArrayBuffer,
  encodeArrayBufferToDOMString,
  TTypedArrays,
} from '@pashoo2/typed-array-utils';

import {cryptoModuleDataSign, crypto} from '../init';
import {
  HASH_CALCULATION_UTILS_HASH_ALGORITHM,
  HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM,
} from '../const';

export const hashCalculator = cryptoModuleDataSign.digest.bind(crypto.subtle);

export const calculateHashNative = async (
  data: TTypedArrays,
  alg: HASH_CALCULATION_UTILS_HASH_ALGORITHM
): Promise<ArrayBuffer | Error> => {
  try {
    const hashString = await hashCalculator(alg, data);

    return hashString;
  } catch (err) {
    return err;
  }
};

export const calculateHash = async (
  data: TSerializableDataTypes,
  alg: HASH_CALCULATION_UTILS_HASH_ALGORITHM = HASH_CALCULATION_UTILS_DEFAULT_HASH_ALGORITHM
): Promise<string | Error> => {
  let dataAsString: string;

  try {
    dataAsString = stringify(data);
  } catch (err) {
    return err;
  }

  const dataAsArrayBuffer = decodeDOMStringToArrayBuffer(dataAsString);

  if (dataAsArrayBuffer instanceof Error) {
    return dataAsArrayBuffer;
  }

  const hashArrayBuffer = await calculateHashNative(dataAsArrayBuffer, alg);

  if (hashArrayBuffer instanceof Error) {
    return hashArrayBuffer;
  }
  return encodeArrayBufferToDOMString(hashArrayBuffer);
};
