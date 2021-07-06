"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoModuleDataSign = exports.crypto = void 0;
function setGlobalCrypto(globalVariable) {
    globalVariable.crypto = require('isomorphic-webcrypto');
}
// browser
if (window && !window.crypto) {
    setGlobalCrypto(window);
    // worker
}
else if (self && !self.crypto) {
    setGlobalCrypto(self);
    // nodejs
}
else if (global && !global.crypto) {
    setGlobalCrypto(self);
}
exports.crypto = window.crypto || require('isomorphic-webcrypto');
exports.cryptoModuleDataSign = exports.crypto.subtle;
//# sourceMappingURL=init.js.map