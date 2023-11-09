(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./src/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/* ./render.css */"./src/render.css");

 function render() {
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';
}
}),
"./src/render.css": (function (module, exports, __webpack_require__) {
"use strict";
}),

}]);