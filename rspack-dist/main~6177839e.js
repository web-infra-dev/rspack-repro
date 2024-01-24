var __webpack_modules__ = {
"./src/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  slackServer: function() { return slackServer; }
});
/* harmony import */var _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch */"./node_modules/@aws-sdk/client-cloudwatch/dist-es/CloudWatchClient.js");
/* harmony import */var _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch */"./node_modules/@aws-sdk/client-cloudwatch/dist-es/commands/PutMetricDataCommand.js");

async function slackServer(event) {
    await new _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_0__.CloudWatchClient().send(new _aws_sdk_client_cloudwatch__WEBPACK_IMPORTED_MODULE_1__.PutMetricDataCommand({
        MetricData: [],
        Namespace: 'rspack'
    }));
    console.log(event);
}
}),

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
// expose the modules object (__webpack_modules__)
 __webpack_require__.m = __webpack_modules__;
//  the startup function
            __webpack_require__.x = function(){
              var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_aws-sdk_client-cloudwatch_dist-es_CloudWatch_js-node_modules_aws-sdk_cli-f2eb3f", "main~e3bd594a", "main~9fba86bb", "main~aa788df9", "main~ef121329", "main~325c75ab", "main~ceeb4d2c", "main~05221577", "main~2b09971f", "main~d8e59c9f", "main~ff4bb8f7", "main~26dcccc2", "main~d323e222", "main~940bab3a"] , function() { return __webpack_require__("./src/index.js") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
              return __webpack_exports__;
            };
          // webpack/runtime/startup_chunk_dependencies
!function() {
var next = __webpack_require__.x;
        __webpack_require__.x = function() {
          __webpack_require__.e("vendors-node_modules_aws-sdk_client-cloudwatch_dist-es_CloudWatch_js-node_modules_aws-sdk_cli-f2eb3f");
__webpack_require__.e("main~e3bd594a");
__webpack_require__.e("main~9fba86bb");
__webpack_require__.e("main~aa788df9");
__webpack_require__.e("main~ef121329");
__webpack_require__.e("main~325c75ab");
__webpack_require__.e("main~ceeb4d2c");
__webpack_require__.e("main~05221577");
__webpack_require__.e("main~2b09971f");
__webpack_require__.e("main~d8e59c9f");
__webpack_require__.e("main~ff4bb8f7");
__webpack_require__.e("main~26dcccc2");
__webpack_require__.e("main~d323e222");
__webpack_require__.e("main~940bab3a");
return next();
        };
}();
// webpack/runtime/ensure_chunk
!function() {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

}();
// webpack/runtime/on_chunk_loaded
!function() {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

}();
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

}();
// webpack/runtime/compat_get_default_export
!function() {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




}();
// webpack/runtime/get javascript chunk filename
!function() {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".js";
        };
      
}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

}();
// webpack/runtime/require_chunk_loading
!function() {
var installedChunks = {"main~6177839e": 1,};
__webpack_require__.O.require = function (chunkId) {
	return installedChunks[chunkId];
};
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet

var installChunk = function (chunk) {
	var moreModules = chunk.modules,
		chunkIds = chunk.ids,
		runtime = chunk.runtime;
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			__webpack_require__.m[moduleId] = moreModules[moduleId];
		}
	}
	if (runtime) runtime(__webpack_require__);
	for (var i = 0; i < chunkIds.length; i++) installedChunks[chunkIds[i]] = 1;
	__webpack_require__.O();
};
// require() chunk loading for javascript
__webpack_require__.f.require = function (chunkId, promises) {
	// "1" is the signal for "already loaded"
	if (!installedChunks[chunkId]) {
		if (true) {
			installChunk(require("./" + __webpack_require__.u(chunkId)));
		} else installedChunks[chunkId] = 1;
	}
};

}();
// run startup
var __webpack_exports__ = __webpack_require__.x();module.exports = __webpack_exports__;
