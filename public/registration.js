(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Registration"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Registration",
  data: function data() {
    var _this = this;

    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      dialog: false,
      valid: false,
      nameInputSuccessful: false,
      nameLoading: false,
      nameError: "",
      emailInputSuccessful: false,
      emailLoading: false,
      emailError: "",
      passwordShow: false,
      passwordConfirmShow: false,
      registrationProcess: false,
      rules: {
        name: [function (v) {
          return !v || RegExp('^[A-Za-zА-Яа-я0-9]+( [A-Za-zА-Яа-я0-9]+)*$').test(v) || 'Имя пользователя должно содержать только буквы и цифры.';
        }, function (v) {
          return !v || v.length >= 4 && v.length <= 30 || 'Имя пользователя должно содержать от 4 до 30 символов.';
        }, // workaround for delayed asynchronous data validation
        function (v) {
          _this.nameError = '';
          if (v && RegExp('^[A-Za-zА-Яа-я0-9]+( [A-Za-zА-Яа-я0-9]+)*$').test(v) && v.length >= 4 && v.length <= 30) _this.nameInputSuccessful = true;
          return true;
        }],
        email: [function (v) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !v || pattern.test(v) || 'Введите действующий адрес электронной почты.';
        }, // workaround for delayed asynchronous data validation
        function (v) {
          _this.emailError = '';
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (v && pattern.test(v)) _this.emailInputSuccessful = true;
          return true;
        }],
        password: [function (v) {
          return !v || v.length >= 6 || 'Пароль должен содержать от 6 символов.';
        }],
        passwordConfirm: [function (v) {
          return !v || v === _this.password || 'Пароли не совпадают. Повторите попытку.';
        }]
      }
    };
  },
  computed: {
    filled: function filled() {
      return this.name.length !== 0 && this.email.length !== 0 && this.password.length !== 0 && this.passwordConfirm.length !== 0;
    }
  },
  methods: {
    registration: function registration() {
      var _this2 = this;

      var payload = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.registrationProcess = true;
      this.$store.dispatch('auth/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      }).then(function () {
        _this2.$store.dispatch('auth/login', {
          email: payload.email,
          password: payload.password
        }).then(function (_ref) {
          var data = _ref.data;
          var payload = {
            user: data.data.user,
            token: data.data.token
          };
          _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit("auth/LOGIN", payload, {
            root: true
          });
          _this2.dialog = false;
        })["finally"](function () {
          _this2.registrationProcess = false;
        });
      })["catch"](function () {
        _this2.registrationProcess = false;
      });
    },
    // waiting for user input to finish
    inputName: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (v) {
      var _this3 = this;

      // if the input was successful this.nameLoading will be TRUE
      if (this.nameInputSuccessful) {
        this.nameLoading = true; // Checking name for repetition via api

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/users/' + v + '/check-available')["catch"](function () {
          if (v === _this3.name) _this3.nameError = 'Это имя пользователя недоступно.';
        })["finally"](function () {
          _this3.nameLoading = false;
        });
        this.nameInputSuccessful = false;
      }
    }, 400),
    inputEmail: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (v) {
      var _this4 = this;

      // if the input was successful this.nameLoading will be TRUE
      if (this.emailInputSuccessful) {
        this.emailLoading = true; // Checking name for repetition via api

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/users/' + v + '/check-available')["catch"](function () {
          if (v === _this4.email) _this4.emailError = 'Эта почта уже используется.';
        })["finally"](function () {
          _this4.emailLoading = false;
        });
        this.emailInputSuccessful = false;
      }
    }, 400) // time to last input

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registration.vue?vue&type=template&id=70725824&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Registration.vue?vue&type=template&id=70725824& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "400px" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-btn",
                _vm._g({ attrs: { text: "", color: "primary" } }, on),
                [_vm._v("\n            Регистрация\n        ")]
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "primary", dark: "", flat: "" } },
            [_c("v-card-title", [_vm._v("Зарегистрироваться")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "pt-2 pb-0" },
            [
              _c(
                "v-form",
                {
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.nameError,
                              loading: _vm.nameLoading,
                              rules: _vm.rules.name,
                              label: "Имя пользователя",
                              autocomplete: "name",
                              "prepend-icon": "person",
                              hint:
                                "Под этим именем вас будут знать другие пользователи MapDesigner.",
                              required: ""
                            },
                            on: { input: _vm.inputName },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.emailError,
                              loading: _vm.emailLoading,
                              rules: _vm.rules.email,
                              label: "Эл. почта",
                              autocomplete: "email",
                              "prepend-icon": "mail",
                              hint:
                                "Вам нужно будет подтвердить, что этот адрес электронной почты принадлежит вам.",
                              required: ""
                            },
                            on: { input: _vm.inputEmail },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Пароль",
                              type: _vm.passwordShow ? "text" : "password",
                              "append-icon": _vm.passwordShow
                                ? "visibility_off"
                                : "visibility",
                              autocomplete: "new-password",
                              "prepend-icon": "lock",
                              rules: _vm.rules.password,
                              hint:
                                "Пароль должен содержать не менее 6 символов.",
                              required: ""
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.passwordShow = !_vm.passwordShow
                              }
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Подтвердите пароль",
                              type: _vm.passwordConfirmShow
                                ? "text"
                                : "password",
                              "append-icon": _vm.passwordConfirmShow
                                ? "visibility_off"
                                : "visibility",
                              "prepend-icon": "lock",
                              rules: _vm.rules.passwordConfirm,
                              required: ""
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.passwordConfirmShow = !_vm.passwordConfirmShow
                              }
                            },
                            model: {
                              value: _vm.passwordConfirm,
                              callback: function($$v) {
                                _vm.passwordConfirm = $$v
                              },
                              expression: "passwordConfirm"
                            }
                          })
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
            "v-card-actions",
            { staticClass: "px-6 pb-6" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    block: "",
                    loading: _vm.registrationProcess,
                    disabled:
                      !_vm.valid ||
                      !_vm.filled ||
                      _vm.nameLoading ||
                      _vm.nameInputSuccessful ||
                      _vm.emailLoading ||
                      _vm.emailInputSuccessful
                  },
                  on: {
                    click: function($event) {
                      return _vm.registration()
                    }
                  }
                },
                [_vm._v("Зарегистироваться\n            ")]
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

/***/ "./resources/js/components/Registration.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Registration.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=70725824& */ "./resources/js/components/Registration.vue?vue&type=template&id=70725824&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Registration.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Registration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Registration.vue?vue&type=template&id=70725824&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Registration.vue?vue&type=template&id=70725824& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=70725824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Registration.vue?vue&type=template&id=70725824&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_70725824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);