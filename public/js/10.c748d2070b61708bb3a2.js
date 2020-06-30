(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/stripepay.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.includeStripe('js.stripe.com/v3/', function () {
      this.configureStripe();
    }.bind(this));
  },
  data: function data() {
    return {
      stripeAPIToken: 'pk_test_51GxHgjITAqKCLKS0TWaQQRMl5I3Y7z0wTNQ3iJbpGVjsXvYCucKvyOkPCHO6n9wrgEWh4NzBAJnoUrehpaOaronY001j85Xp42',
      stripe: '',
      elements: '',
      card: ''
    };
  },
  methods: {
    /*
        Includes Stripe.js dynamically
    */
    configureStripe: function configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken);
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card');
      this.card.mount('#card-element');
    },
    includeStripe: function includeStripe(URL, callback) {
      var documentTag = document,
          tag = 'script',
          object = documentTag.createElement(tag),
          scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = '//' + URL;

      if (callback) {
        object.addEventListener('load', function (e) {
          callback(null, e);
        }, false);
      }

      scriptTag.parentNode.insertBefore(object, scriptTag);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.example3 {\n  background-color: #525f7f;\n}\n.example.example3 * {\n  font-family: Quicksand, Open Sans, Segoe UI, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n}\n.example.example3 .fieldset {\n  margin: 0 15px 30px;\n  padding: 0;\n  border-style: none;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n.example.example3 .field {\n  padding: 10px 20px 11px;\n  background-color: #7488aa;\n  border-radius: 20px;\n  width: 100%;\n}\n.example.example3 .field.half-width {\n  width: calc(50% - (5px / 2));\n}\n.example.example3 .field.third-width {\n  width: calc(33% - (5px / 3));\n}\n.example.example3 .field + .field {\n  margin-top: 6px;\n}\n.example.example3 .field.focus,\n.example.example3 .field:focus {\n  color: #424770;\n  background-color: #f6f9fc;\n}\n.example.example3 .field.invalid {\n  background-color: #fa755a;\n}\n.example.example3 .field.invalid.focus {\n  background-color: #f6f9fc;\n}\n.example.example3 .field.focus::-webkit-input-placeholder,\n.example.example3 .field:focus::-webkit-input-placeholder {\n  color: #cfd7df;\n}\n.example.example3 .field.focus::-moz-placeholder,\n.example.example3 .field:focus::-moz-placeholder {\n  color: #cfd7df;\n}\n.example.example3 .field.focus:-ms-input-placeholder,\n.example.example3 .field:focus:-ms-input-placeholder {\n  color: #cfd7df;\n}\n.example.example3 input, .example.example3 button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  border-style: none;\n}\n.example.example3 input {\n  color: #fff;\n}\n.example.example3 input::-webkit-input-placeholder {\n  color: #9bacc8;\n}\n.example.example3 input::-moz-placeholder {\n  color: #9bacc8;\n}\n.example.example3 input:-ms-input-placeholder {\n  color: #9bacc8;\n}\n.example.example3 button {\n  display: block;\n  width: calc(100% - 30px);\n  height: 40px;\n  margin: 0 15px;\n  background-color: #fcd669;\n  border-radius: 20px;\n  color: #525f7f;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.example.example3 button:active {\n  background-color: #f5be58;\n}\n.example.example3 .error svg .base {\n  fill: #fa755a;\n}\n.example.example3 .error svg .glyph {\n  fill: #fff;\n}\n.example.example3 .error .message {\n  color: #fff;\n}\n.example.example3 .success .icon .border {\n  stroke: #fcd669;\n}\n.example.example3 .success .icon .checkmark {\n  stroke: #fff;\n}\n.example.example3 .success .title {\n  color: #fff;\n}\n.example.example3 .success .message {\n  color: #9cabc8;\n}\n.example.example3 .success .reset path {\n  fill: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./stripepay.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("label", { attrs: { for: "card-element" } }, [
        _vm._v("\r\n      Credit or debit card\r\n    ")
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "card-element" } }),
      _vm._v(" "),
      _c("button", [_vm._v("Submit Payment")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/stripepay.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/stripepay.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripepay.vue?vue&type=template&id=6099a6fc& */ "./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc&");
/* harmony import */ var _stripepay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripepay.vue?vue&type=script&lang=js& */ "./resources/js/Pages/stripepay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripepay.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stripepay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/stripepay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/stripepay.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/stripepay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./stripepay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./stripepay.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./stripepay.vue?vue&type=template&id=6099a6fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/stripepay.vue?vue&type=template&id=6099a6fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stripepay_vue_vue_type_template_id_6099a6fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);