exports.ids = [2,1,5,6];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ae75eace", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("92b527a2", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3cae79b6", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/title.vue?vue&type=template&id=0967faaa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('hgroup',[_vm._ssrNode("<h1"+(_vm._ssrClass(null,[
            _vm.isThin ? 'isThin' : '',
            _vm.isBold ? 'isBold' : '',
            _vm.isGradient ? 'isGradient' : '',
            _vm.titleCenter ? 'titleCenter' : ''
        ]))+" data-v-0967faaa>"+_vm._ssrEscape("   \n        "+_vm._s(_vm.title.title)+"\n    ")+"</h1> "+((_vm.title.subtitle)?("<p class=\"isThin\" data-v-0967faaa>"+_vm._ssrEscape(_vm._s(_vm.title.subtitle))+"</p>"):"<!---->")+" "+((_vm.title.paragraph)?("<p data-v-0967faaa>"+_vm._ssrEscape(" "+_vm._s(_vm.title.paragraph)+" ")+"</p>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/basic/title.vue?vue&type=template&id=0967faaa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var titlevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: Object,
      required: true
    },
    isThin: {
      type: Boolean,
      required: false,
      default: false
    },
    isBold: {
      type: Boolean,
      required: false,
      default: false
    },
    isGradient: {
      type: Boolean,
      required: false,
      default: false
    },
    titleCenter: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/basic/title.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_titlevue_type_script_lang_js_ = (titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/basic/title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basic_titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0967faaa",
  "8cc1cf18"
  
)

/* harmony default export */ var title = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_style_index_0_id_0967faaa_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_style_index_0_id_0967faaa_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_style_index_0_id_0967faaa_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_style_index_0_id_0967faaa_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_style_index_0_id_0967faaa_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-0967faaa]{font-size:24px}@media(min-width:480px){h1[data-v-0967faaa]{font-size:36px}}@media(min-width:723px){p[data-v-0967faaa]{font-size:22px}}hgroup[data-v-0967faaa]{display:flex;flex-direction:column;grid-gap:1rem;gap:1rem}.isBold[data-v-0967faaa]{font-family:\"Poppins Bold\"}.isThin[data-v-0967faaa]{font-family:\"Poppins\"}.isGradient[data-v-0967faaa]{background:linear-gradient(90deg,#667eea,#764ba2);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.titleCenter[data-v-0967faaa]{text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("70a2e18b", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_63bb5c24_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_63bb5c24_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_63bb5c24_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_63bb5c24_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_63bb5c24_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button[data-v-63bb5c24]{text-decoration:none;color:#fff;background:#667eea;padding:.5rem 1rem;border-radius:6px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fce0aa64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fce0aa64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fce0aa64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fce0aa64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fce0aa64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-fce0aa64]{margin:4% auto;width:210px;height:140px;position:relative;perspective:800px}#carousel[data-v-fce0aa64]{width:100%;height:100%;position:absolute;transform-style:preserve-3d;-webkit-animation:rotation-data-v-fce0aa64 25s linear infinite;animation:rotation-data-v-fce0aa64 25s linear infinite}#carousel[data-v-fce0aa64]:hover{-webkit-animation-play-state:paused;animation-play-state:paused}#carousel figure[data-v-fce0aa64]{display:block;position:absolute;width:186px;height:116px;left:10px;top:10px;overflow:hidden;border-radius:0 0 10px 10px}p[data-v-fce0aa64]{position:absolute;top:0}#carousel figure[data-v-fce0aa64]:first-child{transform:rotateY(0deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(2){transform:rotateY(40deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(3){transform:rotateY(80deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(4){transform:rotateY(120deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(5){transform:rotateY(160deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(6){transform:rotateY(200deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(7){transform:rotateY(240deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(8){transform:rotateY(280deg) translateZ(288px)}#carousel figure[data-v-fce0aa64]:nth-child(9){transform:rotateY(320deg) translateZ(288px)}img[data-v-fce0aa64]{cursor:pointer;width:100%;height:100%;transition:all .5s ease}figure article[data-v-fce0aa64]{background:#ededed;height:20px;border-radius:10px 10px 0 0}.circles[data-v-fce0aa64],figure article[data-v-fce0aa64]{display:flex;justify-content:space-between;align-items:center}.circles[data-v-fce0aa64]{width:40px;height:100%;padding:0 .5rem}.circle[data-v-fce0aa64]{width:5px;height:5px;border-radius:50%}.bar[data-v-fce0aa64],.circle[data-v-fce0aa64]{background:#c4cbd3}.bar[data-v-fce0aa64]{width:70px;height:12px;border-radius:2px}@-webkit-keyframes rotation-data-v-fce0aa64{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}@keyframes rotation-data-v-fce0aa64{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/button.vue?vue&type=template&id=63bb5c24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"button",attrs:{"href":_vm.link}},[_vm._ssrNode(_vm._ssrEscape("\n    "+_vm._s(_vm.text)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/basic/button.vue?vue&type=template&id=63bb5c24&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/basic/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/basic/button.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basic_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "63bb5c24",
  "08129c74"
  
)

/* harmony default export */ var basic_button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/carousel/index.vue?vue&type=template&id=fce0aa64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_vm._ssrNode("<article id=\"carousel\" data-v-fce0aa64>"+(_vm._ssrList((_vm.images),function(item,index){return ("<figure data-v-fce0aa64><article data-v-fce0aa64><div class=\"circles\" data-v-fce0aa64><div class=\"circle\" data-v-fce0aa64></div> <div class=\"circle\" data-v-fce0aa64></div> <div class=\"circle\" data-v-fce0aa64></div></div> <div class=\"bar\" data-v-fce0aa64></div> <div class=\"circles\" style=\"opacity: 0;\" data-v-fce0aa64><div class=\"circle\" data-v-fce0aa64></div> <div class=\"circle\" data-v-fce0aa64></div> <div class=\"circle\" data-v-fce0aa64></div></div></article> <img"+(_vm._ssrAttr("src",item))+" data-v-fce0aa64></figure>")}))+"</article>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/carousel/index.vue?vue&type=template&id=fce0aa64&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/carousel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var carouselvue_type_script_lang_js_ = ({
  props: {
    images: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/carousel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/carousel/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fce0aa64",
  "be7bb008"
  
)

/* harmony default export */ var carousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_3e2968d6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_3e2968d6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_3e2968d6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_3e2968d6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_3e2968d6_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-3e2968d6]{padding:1rem;border:1px solid #c4cbd3;box-shadow:0 2px 8px rgba(196,203,211,.25);border-radius:20px;display:flex}.card-info[data-v-3e2968d6]{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;grid-gap:1rem;gap:1rem}@media(min-width:1024px){.card-info[data-v-3e2968d6]{width:60%;padding-right:1rem}}.card-media[data-v-3e2968d6]{display:none}@media(min-width:1024px){.card-media[data-v-3e2968d6]{display:flex;justify-content:center;align-items:center;width:40%;overflow:hidden}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/card.vue?vue&type=template&id=3e2968d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card"},[_vm._ssrNode("<article class=\"card-info\" data-v-3e2968d6>","</article>",[_c('basic-title',{attrs:{"title":{
                title: _vm.text.title,
                paragraph: _vm.text.paragraph
            },"isBold":true}}),_vm._ssrNode(" "),_c('basic-button',{attrs:{"text":_vm.button.text,"link":_vm.button.link}})],2),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"card-media\" data-v-3e2968d6>","</article>",[_c('carousel',{attrs:{"images":_vm.carousel}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/basic/card.vue?vue&type=template&id=3e2968d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/basic/card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: Object,
      required: true
    },
    button: {
      type: Object,
      required: true
    },
    carousel: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/basic/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/basic/card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basic_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e2968d6",
  "1a0df5a4"
  
)

/* harmony default export */ var card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BasicTitle: __webpack_require__(32).default,BasicButton: __webpack_require__(43).default,Carousel: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=basic-card.js.map