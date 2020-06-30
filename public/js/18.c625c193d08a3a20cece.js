(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_stripe_elements_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-stripe-elements-plus */ "./node_modules/vue-stripe-elements-plus/dist/index.js");
/* harmony import */ var vue_stripe_elements_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_stripe_elements_plus__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      csrf: document.head.querySelector('meta[name="csrf-token"]').content,
      name_on_card: ''
    };
  },
  methods: {
    pay: function pay() {
      var _this = this;

      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      var options = {
        name: this.name_on_card
      };
      Object(vue_stripe_elements_plus__WEBPACK_IMPORTED_MODULE_0__["createToken"])(options).then(function (result) {
        // var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', result.token.id);

        _this.$el.appendChild(hiddenInput); // Submit the form


        _this.$el.submit();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      attrs: { method: "POST", id: "payment-form" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.pay()
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "name_on_card" } }, [
          _vm._v("Name on Card")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name_on_card,
              expression: "name_on_card"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", id: "name_on_card", name: "name_on_card" },
          domProps: { value: _vm.name_on_card },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name_on_card = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "card-element" } }, [
            _vm._v("Credit Card")
          ]),
          _vm._v(" "),
          _c("cardElement"),
          _vm._v(" "),
          _c("router-view")
        ],
        1
      ),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "_token" },
        domProps: { value: _vm.csrf }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "spacer" }),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Submit Payment")]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Email Address")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "email", id: "email" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/PaymentForm.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/PaymentForm.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentForm.vue?vue&type=template&id=370013d1& */ "./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1&");
/* harmony import */ var _PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/PaymentForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PaymentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentForm.vue?vue&type=template&id=370013d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PaymentForm.vue?vue&type=template&id=370013d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_370013d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);