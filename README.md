**A variety of utilities for simplification work with data encryption.**
These utilities written in Typescript and can be used both with NodeJS or a browser.
It uses WebCrypto API under the hood.

**Utilities alow you to do such stuff like:**

- generate/import/export of a crypto key,
- sign data by crypto key and than verify it,
- encrypt/decrypt some meaningful data by a crypto key or a password,
- generate a crypto key for a password,
- calculate a hash for data verification.

With these utilities you can easily protect data on a client side and send it a safe way to anyone. You can just verify whether data was created by a certain user. Or just for storing data in a browser's LocalStorage in a safe way by protecting it with a password. You can data sharing p2p with a certain amount of confidence it wont be read by anyone without a permission to do that, like it does in a blockchain.

[See docs](/docs/modules.md)
