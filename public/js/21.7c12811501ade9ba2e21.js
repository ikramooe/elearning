(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      thumbnail: '',
      formData: new FormData(),
      form: {
        idformateur: this.$page.auth.user.id,
        description: "",
        prix: "350",
        reference: "",
        nomF: "",
        type: "",
        publicvise: "",
        objped: "",
        dates: "",
        lieu: ""
      },
      e1: 1,
      items: ["presentielle", "en ligne"]
    };
  },
  methods: {
    addformation: function addformation() {
      this.formData.set('form', JSON.stringify(this.form));
      this.formData.append('file', this.file);
      this.$inertia.post(route('formation.add'), this.formData);
    },
    newAvatar: function newAvatar(event) {
      console.log(document.getElementById('loadpicture').files[0]);
      this.file = document.getElementById('loadpicture').files[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-container",
        [
          _c("h2", { staticClass: "grey--text font-weight-medium mb-7" }, [
            _vm._v("Ajouter une formation")
          ]),
          _vm._v(" "),
          _c(
            "v-form",
            [
              _c(
                "v-stepper",
                {
                  model: {
                    value: _vm.e1,
                    callback: function($$v) {
                      _vm.e1 = $$v
                    },
                    expression: "e1"
                  }
                },
                [
                  _c(
                    "v-stepper-header",
                    [
                      _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.e1 > 1, step: "1" } },
                        [_vm._v("Des informations générales")]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.e1 > 2, step: "2" } },
                        [_vm._v("les détails")]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-stepper-step", { attrs: { step: "3" } }, [
                        _vm._v("Média")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-items",
                    [
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "1" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Titre de formation",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.nomF,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "nomF", $$v)
                              },
                              expression: "form.nomF"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "pole", outlined: "" },
                            model: {
                              value: _vm.form.idpl,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "idpl", $$v)
                              },
                              expression: "form.idpl"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              items: _vm.items,
                              outlined: "",
                              label: "Catégorie"
                            },
                            model: {
                              value: _vm.form.type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "type", $$v)
                              },
                              expression: "form.type"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "formateur",
                              outlined: "",
                              value:
                                this.$page.auth.user.nom +
                                " " +
                                this.$page.auth.user.prenom,
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Ref", outlined: "" },
                            model: {
                              value: _vm.form.reference,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reference", $$v)
                              },
                              expression: "form.reference"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.e1 = 2
                                }
                              }
                            },
                            [_vm._v("\n              Continue\n            ")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("annuler")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "2" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Description", outlined: "" },
                            model: {
                              value: _vm.form.description,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "description", $$v)
                              },
                              expression: "form.description"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "public vise", outlined: "" },
                            model: {
                              value: _vm.form.publicvise,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "publicvise", $$v)
                              },
                              expression: "form.publicvise"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "objectifs pedagogiques",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.objped,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "objped", $$v)
                              },
                              expression: "form.objped"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Temps de travail estimé",
                              outlined: ""
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.type == "presentielle"
                            ? _c(
                                "div",
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Lieu", outlined: "" },
                                    model: {
                                      value: _vm.form.lieu,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "lieu", $$v)
                                      },
                                      expression: "form.lieu"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: { label: "dates", outlined: "" },
                                    model: {
                                      value: _vm.form.dates,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "dates", $$v)
                                      },
                                      expression: "form.dates"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Prix", outlined: "" },
                            model: {
                              value: _vm.form.prix,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "prix", $$v)
                              },
                              expression: "form.prix"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.e1 = 3
                                }
                              }
                            },
                            [_vm._v("\n              Continue\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.e1 = 1
                                }
                              }
                            },
                            [_vm._v("\n              back\n            ")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("annuler")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "3" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              type: "file",
                              id: "loadpicture",
                              label: "Thumbnail de formation"
                            },
                            on: {
                              change: function($event) {
                                return _vm.newAvatar()
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.e1 = 2
                                }
                              }
                            },
                            [_vm._v("\n              back\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.addformation()
                                }
                              }
                            },
                            [_vm._v("\n              Crée\n            ")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("annuler")
                          ])
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
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/dashboard/AddCourse.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/dashboard/AddCourse.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCourse.vue?vue&type=template&id=e9593070& */ "./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070&");
/* harmony import */ var _AddCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCourse.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VStepper */ "./node_modules/vuetify/lib/components/VStepper/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VStepper: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__["VStepper"],VStepperContent: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__["VStepperContent"],VStepperHeader: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__["VStepperHeader"],VStepperItems: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__["VStepperItems"],VStepperStep: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_11__["VStepperStep"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dashboard/AddCourse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCourse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCourse.vue?vue&type=template&id=e9593070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/dashboard/AddCourse.vue?vue&type=template&id=e9593070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCourse_vue_vue_type_template_id_e9593070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);