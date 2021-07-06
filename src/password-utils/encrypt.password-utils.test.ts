import {encryptDataWithPassword} from './encrypt.password-utils';
import {generateSalt} from '../encryption-utils';
import {decryptDataByPassword} from './decrypt.password-utils';

describe('Utilities for data encryption', () => {
  describe('encryptDataWithPassword', () => {
    it('Should return data encrypted, which can be decrypted', async () => {
      const passwordString = 'passwordString';
      const salt = generateSalt();
      expect(salt).not.toEqual(expect.any(Error));
      const dataToEncrypt = 'dataToEncrypt';
      const dataEncrypted = await encryptDataWithPassword(
        passwordString,
        salt as Uint8Array,
        dataToEncrypt
      );
      expect(dataEncrypted).not.toEqual(expect.any(Error));
      expect(salt).not.toEqual(expect.any(Error));

      const dataDecrypted = await decryptDataByPassword(
        passwordString,
        salt as Uint8Array,
        dataEncrypted as string
      );
      expect(dataDecrypted).toBe(dataToEncrypt);
    });
  });
});
