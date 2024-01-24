/******/ "use strict";
/******/ var __webpack_modules__ = ({

/***/ "./src/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slackServer: () => (/* binding */ slackServer)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@aws-sdk/client-cloudwatch/dist-es/CloudWatchClient.js");
/* harmony import */ var _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@aws-sdk/client-cloudwatch/dist-es/commands/PutMetricDataCommand.js");


async function slackServer(event) {
  await new _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_0__.CloudWatchClient().send(new _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_1__.PutMetricDataCommand({
    MetricData: [],
    Namespace: 'rspack',
  }));
  console.log(event);
}


/***/ }),

/***/ "buffer":
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // the startup function
/******/ __webpack_require__.x = () => {
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_aws-crypto_crc32_build_aws_crc32_js-node_modules_aws-crypto_crc32_build_-597852","vendors-node_modules_aws-sdk_client-sts_dist-es_defaultRoleAssumers_js","vendors-node_modules_aws-sdk_core_dist-es_client_emitWarningIfUnsupportedVersion_js-node_modu-2be6eb","vendors-node_modules_fast-xml-parser_src_fxp_js","vendors-node_modules_smithy_core_dist-es_index_js-node_modules_smithy_hash-node_dist-es_index-317b1c"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	return __webpack_exports__;
/******/ };
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/chunk loaded */
/******/ (() => {
/******/ 	var deferred = [];
/******/ 	__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 		if(chunkIds) {
/******/ 			priority = priority || 0;
/******/ 			for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 			deferred[i] = [chunkIds, fn, priority];
/******/ 			return;
/******/ 		}
/******/ 		var notFulfilled = Infinity;
/******/ 		for (var i = 0; i < deferred.length; i++) {
/******/ 			var [chunkIds, fn, priority] = deferred[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 0; j < chunkIds.length; j++) {
/******/ 				if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 					chunkIds.splice(j--, 1);
/******/ 				} else {
/******/ 					fulfilled = false;
/******/ 					if(priority < notFulfilled) notFulfilled = priority;
/******/ 				}
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferred.splice(i--, 1)
/******/ 				var r = fn();
/******/ 				if (r !== undefined) result = r;
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/require chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "loaded", otherwise not loaded yet
/******/ 	var installedChunks = {
/******/ 		"main": 1
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 	
/******/ 	var installChunk = (chunk) => {
/******/ 		var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		for(var i = 0; i < chunkIds.length; i++)
/******/ 			installedChunks[chunkIds[i]] = 1;
/******/ 		__webpack_require__.O();
/******/ 	};
/******/ 	
/******/ 	// require() chunk loading for javascript
/******/ 	__webpack_require__.f.require = (chunkId, promises) => {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			if(true) { // all chunks have JS
/******/ 				installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 			} else installedChunks[chunkId] = 1;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	// no external install chunk
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ })();
/******/ 
/******/ /* webpack/runtime/startup chunk dependencies */
/******/ (() => {
/******/ 	var next = __webpack_require__.x;
/******/ 	__webpack_require__.x = () => {
/******/ 		__webpack_require__.e("vendors-node_modules_aws-crypto_crc32_build_aws_crc32_js-node_modules_aws-crypto_crc32_build_-597852");
/******/ 		__webpack_require__.e("vendors-node_modules_aws-sdk_client-sts_dist-es_defaultRoleAssumers_js");
/******/ 		__webpack_require__.e("vendors-node_modules_aws-sdk_core_dist-es_client_emitWarningIfUnsupportedVersion_js-node_modu-2be6eb");
/******/ 		__webpack_require__.e("vendors-node_modules_fast-xml-parser_src_fxp_js");
/******/ 		__webpack_require__.e("vendors-node_modules_smithy_core_dist-es_index_js-node_modules_smithy_hash-node_dist-es_index-317b1c");
/******/ 		return next();
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // run startup
/******/ var __webpack_exports__ = __webpack_require__.x();
/******/ module.exports = __webpack_exports__;
/******/ 
