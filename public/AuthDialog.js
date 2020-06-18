(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AuthDialog"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Authorization",
  data: function data() {
    return {
      email: "",
      password: "",
      showError: false,
      passwordShow: false,
      valid: false,
      authProcess: false,
      rules: {
        email: [function (v) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !v || pattern.test(v) || 'Введите корректный адрес электронной почты.';
        }]
      }
    };
  },
  computed: {
    filled: function filled() {
      return this.email.length !== 0 && this.password.length !== 0;
    }
  },
  methods: {
    auth: function auth() {
      var _this = this;

      this.showError = false;
      this.authProcess = true;
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      }).then(function (_ref) {
        var data = _ref.data;
        var payload = {
          token: data.data.token,
          user: data.data.user
        };
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit("auth/LOGIN", payload, {
          root: true
        });

        _this.$emit('done');

        _this.$router.push('/library');
      })["catch"](function () {
        _this.showError = true;
      })["finally"](function () {
        _this.authProcess = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Auth_Authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Auth/Authorization */ "./resources/js/components/Auth/Authorization.vue");
/* harmony import */ var _components_Auth_Registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth/Registration */ "./resources/js/components/Auth/Registration.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dialog",
  components: {
    Authorization: _components_Auth_Authorization__WEBPACK_IMPORTED_MODULE_0__["default"],
    Registration: _components_Auth_Registration__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      currentTabIndex: 0,
      dialog: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('layout', {
    appName: function appName(state) {
      return state.appName;
    },
    appLogo: function appLogo(state) {
      return state.appLogo;
    }
  }), {
    currentTabName: function currentTabName() {
      if (this.currentTabIndex === 0) return "Authorization";else return "Registration";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Registration",
  data: function data() {
    var _this = this;

    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
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
          }); // Close dialog

          _this2.$emit('done');

          _this2.$router.push('/library');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-card-text",
        { staticClass: "pt-2 px-6 pb-0" },
        [
          _c(
            "v-alert",
            {
              staticClass: "my-4",
              attrs: {
                value: _vm.showError,
                border: "left",
                transition: "scale-transition",
                "colored-border": "",
                type: "error",
                elevation: "2"
              }
            },
            [
              _c("h4", [_vm._v("Не удаётся войти.")]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  "Пожалуйста, проверьте правильность написания логина и пароля."
                )
              ])
            ]
          ),
          _vm._v(" "),
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
                          rules: _vm.rules.email,
                          label: "Эл. почта",
                          autocomplete: "email",
                          "prepend-icon": "mail",
                          required: ""
                        },
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
                          autocomplete: "current-password",
                          "prepend-icon": "lock",
                          hint: "Пароль должен содержать не менее 6 символов.",
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
        { staticClass: "pb-6 justify-center" },
        [
          _c(
            "v-btn",
            {
              staticClass: "px-5",
              attrs: {
                color: "primary",
                outlined: "",
                loading: _vm.authProcess,
                disabled: !_vm.valid || !_vm.filled
              },
              on: {
                click: function($event) {
                  return _vm.auth()
                }
              }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [_vm._v("exit_to_app")]),
              _vm._v("\n            Войти\n        ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { "max-width": "420px" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-btn",
                _vm._g(
                  {
                    staticClass: "ml-4 px-5",
                    attrs: { color: "primary", outlined: "" }
                  },
                  on
                ),
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("exit_to_app")
                  ]),
                  _vm._v("\n            Войти\n        ")
                ],
                1
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
            {
              attrs: { height: "88", extended: "", flat: "" },
              scopedSlots: _vm._u([
                {
                  key: "extension",
                  fn: function() {
                    return [
                      _c(
                        "v-tabs",
                        {
                          attrs: { "fixed-tabs": "" },
                          model: {
                            value: _vm.currentTabIndex,
                            callback: function($$v) {
                              _vm.currentTabIndex = $$v
                            },
                            expression: "currentTabIndex"
                          }
                        },
                        [
                          _c("v-tab", [_vm._v("Войти")]),
                          _vm._v(" "),
                          _c("v-tab", [_vm._v("Создать аккаунт")])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "v-container",
                { staticClass: "mt-4", attrs: { "fill-height": "" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-img", {
                    attrs: {
                      src: _vm.appLogo,
                      contain: "",
                      height: "48",
                      width: "48",
                      "max-width": "48"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "title ml-2" }, [
                    _vm._v(_vm._s(_vm.appName))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer")
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
            "v-expand-transition",
            [
              _c(_vm.currentTabName, {
                tag: "component",
                on: {
                  done: function($event) {
                    _vm.dialog = false
                  }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-card-text",
        { staticClass: "pt-2 px-6 pb-0" },
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
                          hint: "Пароль должен содержать не менее 6 символов.",
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
                          type: _vm.passwordConfirmShow ? "text" : "password",
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
        { staticClass: "px-6 pb-6 justify-center" },
        [
          _c(
            "v-btn",
            {
              staticClass: "px-5",
              attrs: {
                color: "primary",
                outlined: "",
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
            [_vm._v("Зарегистироваться\n        ")]
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

/***/ "./resources/js/components/Auth/Authorization.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Auth/Authorization.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authorization.vue?vue&type=template&id=0bd72646& */ "./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646&");
/* harmony import */ var _Authorization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authorization.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Authorization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Authorization.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authorization.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Authorization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authorization.vue?vue&type=template&id=0bd72646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Authorization.vue?vue&type=template&id=0bd72646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorization_vue_vue_type_template_id_0bd72646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Auth/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Auth/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink& */ "./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_9__["VExpandTransition"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__["VImg"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTab"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabs"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Auth/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Index.vue?vue&type=template&id=3cc0ecb6&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cc0ecb6_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2Fxlink___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=3583df05& */ "./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=3583df05& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);