(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Course.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Course.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_globals_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/globals/Navbar */ "./resources/js/components/globals/Navbar.vue");
/* harmony import */ var _components_globals_AppFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/globals/AppFooter */ "./resources/js/components/globals/AppFooter.vue");
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
//GLOBALS


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      added: false,
      info: {
        user: this.$page.auth.user.id,
        cours: this.details[0].id_formation,
        prix: this.details[0].prix
      }
    };
  },
  methods: {
    addpanier: function addpanier() {
      this.added = true;
      return this.$inertia.post(route('paniertest', this.info));
    }
  },
  props: ['details', 'formations'],
  components: {
    Navbar: _components_globals_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _components_globals_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-app", [
    _c(
      "div",
      { staticClass: "course-page" },
      [
        _c("Navbar", { attrs: { "{forma}": "" } }),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "course-overview py-5 primary white--text" },
          [
            _c(
              "v-container",
              [
                _c(
                  "v-row",
                  [
                    _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                      _c("h1", { staticClass: "display-1 mb-5" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.details[0].nomF) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "grey--text text--lighten-1" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.details[0].lieuF) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text text--lighten-1" }, [
                        _c("span", { staticClass: "font-weight-bold   mr-4" }, [
                          _vm._v("Public visé :")
                        ]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.details[0].publicvise))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("v-img", {
                          attrs: {
                            height: "150",
                            "aspect-ratio": "1.1",
                            src: "images/slide3.jpg"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-center justify-space-between flex-wrap mt-5"
                  },
                  [
                    _c(
                      "div",
                      {},
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mr-5",
                            attrs: { color: "secondary", outlined: "" }
                          },
                          [
                            _vm._v("\n            contrat "),
                            _c("v-icon", { attrs: { right: "" } }, [
                              _vm._v("mdi-download")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "secondary", disabled: _vm.added },
                            on: { click: _vm.addpanier }
                          },
                          [
                            _vm._v("\n            ajouter au panier "),
                            _c("v-icon", { attrs: { right: "" } }, [
                              _vm._v("mdi-cart-outline")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "display-1 font-weight-bold  " }, [
                      _vm._v(_vm._s(_vm.details[0].prix) + " DZD")
                    ])
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "py-7" },
          [
            _c(
              "v-container",
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "8" } },
                      [
                        _c(
                          "v-card",
                          { attrs: { flat: "", outlined: "" } },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "font-weight-bold   display-1 " },
                              [_vm._v("Description")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              { staticClass: "body-1 black--text" },
                              [
                                _c("p", [
                                  _vm._v(
                                    " \n              " +
                                      _vm._s(_vm.details[0].descriptionF) +
                                      "\n              "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card",
                          {
                            staticClass: "mt-7",
                            attrs: { flat: "", outlined: "" }
                          },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "font-weight-bold   display-1 " },
                              [_vm._v("\n              Pré requis")]
                            ),
                            _vm._v(" "),
                            _vm._l(3, function(i) {
                              return _c(
                                "v-list",
                                { key: i, attrs: { dense: "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-icon",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "secondary" } },
                                            [_vm._v("mdi-check")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-content", [
                                        _vm._v(
                                          _vm._s(_vm.details[0].prerequis) +
                                            "\n                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "4" } })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("AppFooter")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Course.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Course.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course.vue?vue&type=template&id=02121cf8& */ "./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8&");
/* harmony import */ var _Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Course.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Course.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Course.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Course.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Course.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Course.vue?vue&type=template&id=02121cf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Course.vue?vue&type=template&id=02121cf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_02121cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);