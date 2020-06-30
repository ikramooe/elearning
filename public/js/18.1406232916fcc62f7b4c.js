(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get('/forma').then(function (response) {
      _this.formations = response.data.formations;
    });
  },
  data: function data() {
    return {
      formations: {},
      activatedTab: null,
      item: 0,
      items: [{
        text: "Profile",
        icon: "mdi-account-outline",
        path: "details"
      }, {
        text: "Mes Formations",
        icon: "mdi-format-list-bulleted-square",
        path: "cours"
      }, {
        text: "Mes Certaficats",
        icon: "mdi-certificate-outline",
        path: "history"
      }, {
        text: "Historique d'achat",
        icon: "mdi-history",
        path: "history"
      }, {
        text: "Mes Réalisations",
        icon: "mdi-check-circle",
        path: "history"
      }, {
        text: "Paramètres du Compte",
        icon: "mdi-cog-outline",
        path: "parametres"
      }]
    };
  },
  components: {
    Navbar: _components_globals_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _components_globals_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  updated: function updated() {
    if (this.$page.Message.success) {
      this.$toast.open({
        message: "updated successfully",
        type: "success",
        duration: 9000,
        dismissible: true,
        position: "top"
      });
    }
  },
  methods: {
    EditUser: function EditUser() {
      return this.$inertia.post(route("user.edit", this.form));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "profile" },
      [
        _c("Navbar"),
        _vm._v(" "),
        _vm.$page.Message.success
          ? _c("div", { staticClass: "alert alert-success mt-4" }, [
              _vm._v(
                "\n           " + _vm._s(_vm.$page.Message.success) + "\n  "
              )
            ])
          : _vm._e(),
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
                      { attrs: { cols: "12", md: "3" } },
                      [
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { size: "100" } },
                                  [
                                    _c("v-img", {
                                      attrs: {
                                        src:
                                          "/upload/" + _vm.$page.auth.user.image
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
                              "v-list-item",
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c(
                                      "v-list-item-title",
                                      { staticClass: "title" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$page.auth.user.nom) +
                                            " " +
                                            _vm._s(_vm.$page.auth.user.prenom) +
                                            " "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(_vm._s(_vm.$page.auth.user.image))
                                    ])
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
                        _c("v-divider"),
                        _vm._v(" "),
                        _c(
                          "v-tabs",
                          { attrs: { vertical: "" } },
                          [
                            _c("v-tab", [_vm._v("\n        Option\n  ")]),
                            _vm._v(" "),
                            _c("v-tab", [
                              _vm._v("\n    Another Selection\n  ")
                            ]),
                            _vm._v(" "),
                            _c("v-tab", [_vm._v("\n    Items\n  ")]),
                            _vm._v(" "),
                            _c("v-tab", [_vm._v("\n    Another Screen\n  ")])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "9" } },
                      [_c("router-view")],
                      1
                    )
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

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0& */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemTitle"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["VTab"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["VTabs"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=1bdc34e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);