import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* reexport */ external_react_namespaceObject["default"])
});

;// CONCATENATED MODULE: external "react"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_react_namespaceObject = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_react__["default"] });
;// CONCATENATED MODULE: ./src/index.js

console.log({React: external_react_namespaceObject["default"]});

var __webpack_exports__React = __webpack_exports__._;
export { __webpack_exports__React as React };
