(function() {
var __webpack_modules__ = {
"./src/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _a_scss__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./a.scss */"./src/a.scss");

},
"./src/a.scss": function (module, exports, __webpack_require__) {
},
"?2e69": function (__unused_webpack_module, exports, __webpack_require__) {
throw new Error("Failed to resolve ./c.css in /Users/yangjian/project/rspack-repro/src");
},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/make_namespace_object
(function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
var __webpack_exports__ = __webpack_require__("./src/index.js");
})()
