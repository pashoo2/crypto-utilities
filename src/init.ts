function setGlobalCrypto(globalVariable: any): void {
  globalVariable.crypto = require('isomorphic-webcrypto');
}
// browser
if (window && !window.crypto) {
  setGlobalCrypto(window);
  // worker
} else if (self && !(self as any).crypto) {
  setGlobalCrypto(self);
  // nodejs
} else if (global && !(global as any).crypto) {
  setGlobalCrypto(self);
}

export const crypto = window.crypto || require('isomorphic-webcrypto');

export const cryptoModuleDataSign = crypto.subtle;
