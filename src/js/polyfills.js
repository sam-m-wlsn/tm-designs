'use strict';

(function() {
  cssScrollSnapPolyfill();

  if (typeof NodeList.prototype.forEach === 'undefined') NodeList.prototype.forEach = Array.prototype.forEach;
})();