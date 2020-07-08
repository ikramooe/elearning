(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dash.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/dash.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dashboard_AdminStats_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dashboard/AdminStats.vue */ "./resources/js/components/dashboard/AdminStats.vue");
/* harmony import */ var _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/Stats.vue */ "./resources/js/components/dashboard/Stats.vue");
/* harmony import */ var _components_dashboard_AdminCourses_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/AdminCourses.vue */ "./resources/js/components/dashboard/AdminCourses.vue");
/* harmony import */ var _components_dashboard_Students_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/Students.vue */ "./resources/js/components/dashboard/Students.vue");
/* harmony import */ var _components_dashboard_AddCourse_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashboard/AddCourse.vue */ "./resources/js/components/dashboard/AddCourse.vue");
/* harmony import */ var _components_dashboard_AdminCourse_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/AdminCourse.vue */ "./resources/js/components/dashboard/AdminCourse.vue");
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
//Dashboard sub components






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['formations'],
  data: function data() {
    return {
      window: 2,
      drawer: true,
      activatedTab: null,
      item: 0,
      items: [{
        text: "Dashboard",
        icon: "mdi-view-dashboard-outline",
        components: _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        path: "ede"
      }, {
        text: "Ajouter une formation",
        icon: "mdi-format-list-bulleted-square",
        path: "courses"
      }, {
        text: "Mes formations",
        icon: "mdi-format-list-bulleted-square",
        path: "couffffrses"
      }, {
        text: "Les élèves",
        icon: "mdi-account-details-outline",
        path: "students"
      }, {
        text: "Mes Statistiques",
        icon: "mdi-chart-arc",
        path: "stats"
      }],
      right: null
    };
  },
  components: {
    AdminStats: _components_dashboard_AdminStats_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Stats: _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminCourses: _components_dashboard_AdminCourses_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Students: _components_dashboard_Students_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddCourse: _components_dashboard_AddCourse_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dash.vue?vue&type=template&id=26562cca&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/dash.vue?vue&type=template&id=26562cca& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c(
        "nav",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-app-bar-nav-icon", {
                staticClass: "grey--text",
                on: {
                  click: function($event) {
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "grey--text" }, [
                _vm._v("Dashboard")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "" } },
                [
                  _c("v-icon", { attrs: { color: "black", size: "30" } }, [
                    _vm._v("mdi-bell-outline")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: { "offset-y": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                {
                                  staticClass: "hidden-md-and-down",
                                  attrs: { color: "grey", icon: "", text: "" }
                                },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-avatar", { attrs: { size: "35" } }, [
                                _c("img", {
                                  attrs: {
                                    src: "/upload/" + _vm.$page.auth.user.image,
                                    alt: "John"
                                  }
                                })
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { staticClass: "py-0", attrs: { width: "300" } },
                    [
                      _c(
                        "v-list-item",
                        { staticClass: "grey lighten-3 py-5" },
                        [
                          _c(
                            "v-row",
                            { attrs: { "no-gutters": "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("v-avatar", { attrs: { size: "70" } }, [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          "/upload/" +
                                          _vm.$page.auth.user.image,
                                        alt: "John"
                                      }
                                    })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "8" } }, [
                                _c("div", { staticClass: "subheading" }, [
                                  _vm._v(
                                    _vm._s(_vm.$page.auth.user.nom) +
                                      " " +
                                      _vm._s(_vm.$page.auth.user.prenom)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "subtitle-2" }, [
                                  _vm._v(_vm._s(_vm.$page.auth.user.email))
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { attrs: { router: "", to: "/profile" } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-account")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-capitalize" },
                            [_vm._v("profile")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { attrs: { router: "", to: "#" } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-cart")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-capitalize" },
                            [_vm._v("panierrrrrrrrrrrrrrrrrrrrrrrrrrr")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { attrs: { router: "", to: "/profile/courses" } },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", [
                                _vm._v("mdi-format-list-bulleted-square")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-capitalize" },
                            [_vm._v("mes foramtions")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { attrs: { router: "", to: "#" } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-logout")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-capitalize" },
                            [_vm._v("déconnecter")]
                          )
                        ],
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
          _c(
            "v-navigation-drawer",
            {
              attrs: { right: "", app: "" },
              model: {
                value: _vm.drawer,
                callback: function($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer"
              }
            },
            [
              _c(
                "v-list-item",
                {
                  staticClass: "secondary py-7",
                  attrs: { "two-line": "", dark: "" }
                },
                [
                  _c("v-list-item-avatar", [
                    _c("img", {
                      attrs: {
                        src: "https://randomuser.me/api/portraits/men/81.jpg"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(
                          _vm._s(_vm.$page.auth.user.nom) +
                            " " +
                            _vm._s(_vm.$page.auth.user.prenom)
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("Admin")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("Stats")
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/dash.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/dash.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash.vue?vue&type=template&id=26562cca& */ "./resources/js/Pages/dash.vue?vue&type=template&id=26562cca&");
/* harmony import */ var _dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__["VMenu"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_12__["VNavigationDrawer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/dash.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/dash.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/dash.vue?vue&type=template&id=26562cca&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/dash.vue?vue&type=template&id=26562cca& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dash.vue?vue&type=template&id=26562cca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dash.vue?vue&type=template&id=26562cca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dash_vue_vue_type_template_id_26562cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);