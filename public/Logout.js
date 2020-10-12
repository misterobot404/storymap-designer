(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Logout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
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
  name: "Logout",
  data: function data() {
    return {
      logoutProcess: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('auth', {
    username: function username(state) {
      return state.user.name;
    },
    email: function email(state) {
      return state.user.email;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('layout', ['CHANGE_THEME', 'SHOW_FEEDBACK_DIALOG'])), {}, {
    logout: function logout() {
      var _this = this;

      this.logoutProcess = true;
      this.$store.dispatch('auth/logout')["finally"](function () {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('auth/LOGOUT', null, {
          root: true
        });
        _this.logoutProcess = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8& ***!
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
    "v-menu",
    {
      attrs: { "offset-y": "" },
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
                    attrs: {
                      "x-large": "",
                      loading: _vm.logoutProcess,
                      icon: ""
                    }
                  },
                  on
                ),
                [
                  _c("v-icon", { attrs: { "x-large": "" } }, [
                    _vm._v("account_circle")
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
        [
          _c(
            "v-list-item",
            { attrs: { "two-line": "", to: "/user" } },
            [
              _c(
                "v-list-item-action",
                { staticClass: "mr-5" },
                [
                  _c("v-icon", { attrs: { large: "" } }, [
                    _vm._v("account_circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", { staticClass: "subtitle-1" }, [
                    _vm._v(_vm._s(_vm.username))
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [_vm._v(_vm._s(_vm.email))])
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
            "v-list-item",
            { attrs: { to: "/library" } },
            [
              _c(
                "v-list-item-action",
                [_c("v-icon", [_vm._v("local_library")])],
                1
              ),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("Библиотека")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { attrs: { to: "/settings" } },
            [
              _c("v-list-item-action", [_c("v-icon", [_vm._v("settings")])], 1),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("Настройки")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { on: { click: function($event) {} } },
            [
              _c(
                "v-list-item-action",
                [_c("v-icon", [_vm._v("translate")])],
                1
              ),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("Язык: Русский")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.SHOW_FEEDBACK_DIALOG()
                }
              }
            },
            [
              _c("v-list-item-action", [_c("v-icon", [_vm._v("feedback")])], 1),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("Обратная связь")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            [
              _c("v-switch", {
                attrs: {
                  "input-value": this.$vuetify.theme.dark,
                  "prepend-icon": "nights_stay",
                  label: "Dark theme"
                },
                on: {
                  change: function($event) {
                    return _vm.CHANGE_THEME()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list-item",
            { on: { click: _vm.logout } },
            [
              _c(
                "v-list-item-action",
                [_c("v-icon", [_vm._v("exit_to_app")])],
                1
              ),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("Выйти")])
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

/***/ "./resources/js/components/Core/UserPanel.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Core/UserPanel.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPanel.vue?vue&type=template&id=617a85d8& */ "./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8&");
/* harmony import */ var _UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__["VMenu"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__["VSwitch"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Core/UserPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/UserPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPanel.vue?vue&type=template&id=617a85d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/UserPanel.vue?vue&type=template&id=617a85d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_617a85d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);