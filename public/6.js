(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Feedback",
  data: function data() {
    return {
      dialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Core_Feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Core/Feedback */ "./resources/js/components/Core/Feedback.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Home",
  components: {
    Feedback: _components_Core_Feedback__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      features: [{
        title: 'Экономьте своё время и деньги',
        subtitle: 'Лучшая производительность',
        text: 'Конструктор позволяет быстро создать гибкий электронный атлас на нужную тему абсолютно бесплатно. Существует удобная возможность командной разработки.',
        callout: '01'
      }, {
        title: 'Применяйте в различных областях',
        subtitle: 'Большая гибкость',
        text: 'Эл. атласы рекомендуется применять в областях, где требуется увеличить доступность, наглядность и эфективность восприятия информации, например, обучение, туризм и маркетинг.',
        callout: '02'
      }, {
        title: 'Распостраняйте ресурс в интернете',
        subtitle: 'Удобное использование',
        text: 'Эл. атлас можно встраивать на любые веб-ресурсы, информационные стенды и т.д. Созданным эл. атласом можно поделиться с любым пользователем сервиса.',
        callout: '03'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('maps', ['examples'])), {}, {
    minHeight: function minHeight() {
      var height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh';
      return "calc(".concat(height, " - ").concat(this.$vuetify.application.top, "px)");
    }
  }),
  methods: {
    goToFutures: function goToFutures() {
      var slide = document.getElementById("futures"); // Определение расстояния от начала страницы до нужного элемента

      var top = window.scrollY + slide.getBoundingClientRect().y;
      this.$vuetify.goTo(top);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-center" },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-fab-transition",
                    [
                      _c(
                        "v-btn",
                        _vm._g(
                          {
                            staticStyle: { bottom: "34px", right: "34px" },
                            attrs: {
                              fab: "",
                              dark: "",
                              large: "",
                              fixed: "",
                              bottom: "",
                              right: "",
                              color: "primary"
                            }
                          },
                          on
                        ),
                        [_c("v-icon", [_vm._v("feedback")])],
                        1
                      )
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
              _c("v-card-title", { staticClass: "headline grey lighten-2" }, [
                _vm._v("\n                Privacy Policy\n            ")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n                anim id est laborum.\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    I accept\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-img",
        {
          staticClass: "white--text",
          attrs: {
            src: __webpack_require__(/*! @/assets/images/home_art.jpg */ "./resources/js/assets/images/home_art.jpg"),
            gradient: "to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)",
            "min-height": _vm.minHeight
          }
        },
        [
          _c(
            "v-container",
            {
              staticClass: "fill-height px-4",
              class: [_vm.$vuetify.breakpoint.mdAndUp ? "" : "py-6"]
            },
            [
              _c(
                "v-responsive",
                {
                  staticClass: "d-flex align-center",
                  attrs: { height: "100%", "max-width": "680", width: "100%" }
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "display-2 font-weight-black mb-4 text-left white--text",
                      style: ["padding-top: 48px"]
                    },
                    [
                      _vm._v(
                        "\n                    Есть вещи, которые нельзя изобразить"
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                    Для всего остального есть MapDesigner\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "grey--text text--lighten-1 text-left mb-10"
                    },
                    [
                      _vm._v(
                        "\n                    MapDesigner - это бесплатный сервис, который поможет вам рассказать истории в Интернете, освещающие места, события или предметы."
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                    Конструктор позволяет быстро создавать гибкие иформационно-развлекательные ресурсы для использования их в сфере обучения, туризма и\n                    маркетинга.\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-wrap",
                      class: _vm.$vuetify.breakpoint.smAndDown
                        ? "flex-column align-start"
                        : "align-center"
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { "min-width": "164px" },
                          attrs: {
                            color: "blue",
                            "x-large": "",
                            dark: "",
                            tile: "",
                            depressed: ""
                          },
                          on: { click: _vm.goToFutures }
                        },
                        [
                          _vm._v(
                            "\n                        Узнать больше\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold ml-6 mr-2 my-4" },
                        [_vm._v(" или ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "blue",
                            large: "",
                            text: "",
                            to: "/constructor/example"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Попробовать сейчас\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
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
        "div",
        {
          staticClass: "text-center",
          staticStyle: { "padding-top": "96px" },
          attrs: { id: "futures" }
        },
        [
          _c(
            "h1",
            {
              staticClass:
                "text-uppercase headline font-weight-bold mb-2 text-center"
            },
            [_vm._v("\n            Возможности\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-responsive",
            {
              staticClass: "grey lighten-2 mx-auto mb-8",
              attrs: { "max-width": "28" }
            },
            [
              _c("v-divider", {
                staticStyle: { "border-width": "2px 0 0 0!important" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                _vm._l(_vm.features, function(card) {
                  return _c(
                    "v-col",
                    { key: card.title, attrs: { cols: "12", md: "4" } },
                    [
                      _c("div", { staticClass: "container pa-0" }, [
                        _c(
                          "div",
                          {
                            staticClass: "row no-gutters ",
                            class: [
                              _vm.$vuetify.breakpoint.mdAndUp
                                ? "justify-start"
                                : "justify-center"
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col col-9" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "body-2 font-weight-regular mb-1 text-left grey--text"
                                  },
                                  [_vm._v(" " + _vm._s(card.subtitle))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-uppercase title font-weight-bold mb-1 text-left"
                                  },
                                  [_vm._v(" " + _vm._s(card.title) + " ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-responsive",
                                  {
                                    staticClass: "primary mr-auto mb-6",
                                    attrs: { "max-width": "28" }
                                  },
                                  [
                                    _c("v-divider", {
                                      staticStyle: {
                                        "border-width": "2px 0 0 0!important"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "base-body body-1 grey--text text--darken-1 text-left mb-6"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(card.text) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col col-2" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "display-3 grey--text text--lighten-4 font-weight-bold pr-8"
                                },
                                [_vm._v(_vm._s(card.callout))]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                }),
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
        "div",
        {
          staticClass: "text-center",
          staticStyle: { "padding-top": "48px" },
          attrs: { id: "examples" }
        },
        [
          _c(
            "h1",
            {
              staticClass:
                "text-uppercase headline font-weight-bold mb-2 text-center"
            },
            [_vm._v("\n            Примеры\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-responsive",
            {
              staticClass: "grey lighten-2 mx-auto mb-11",
              attrs: { "max-width": "28" }
            },
            [
              _c("v-divider", {
                staticStyle: { "border-width": "2px 0 0 0!important" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { dense: "", justify: "center" } },
                _vm._l(_vm.examples, function(card) {
                  return _c(
                    "v-col",
                    {
                      key: card.title,
                      staticClass: "mx-2 mb-4",
                      attrs: {
                        cols: _vm.$vuetify.breakpoint.mdAndUp ? "3" : "12"
                      }
                    },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto",
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        "max-width": _vm.$vuetify.breakpoint
                                          .mdAndUp
                                          ? "450"
                                          : "360",
                                        raised: "",
                                        height: "100%"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push({
                                            path: "/viewer/example/" + card.id
                                          })
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-img",
                                        { attrs: { src: card.img } },
                                        [
                                          _c("v-expand-transition", [
                                            hover
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex blue darken-2 v-card--reveal display-3 white--text",
                                                    staticStyle: {
                                                      height: "100%"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                        OPEN\n                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: { "text-align": "start" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticStyle: {
                                                "word-break": "keep-all",
                                                "line-height": "1.8rem"
                                              }
                                            },
                                            [_vm._v(" " + _vm._s(card.name))]
                                          ),
                                          _vm._v(" "),
                                          _c("v-card-subtitle", [
                                            _vm._v(" " + _vm._s(card.subtitle))
                                          ]),
                                          _vm._v(" "),
                                          _c("v-card-text", [
                                            _vm._v(
                                              " " + _vm._s(card.description)
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Feedback")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/home_art.jpg":
/*!*************************************************!*\
  !*** ./resources/js/assets/images/home_art.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home_art.jpg?de9fdd5b056a045f2b9d99413c381b06";

/***/ }),

/***/ "./resources/js/components/Core/Feedback.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Core/Feedback.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=7dcc2d3a& */ "./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a&");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js& */ "./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VFabTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_8__["VFabTransition"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Core/Feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=template&id=7dcc2d3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Core/Feedback.vue?vue&type=template&id=7dcc2d3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_7dcc2d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VHover */ "./node_modules/vuetify/lib/components/VHover/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_8__["VExpandTransition"],VHover: vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_9__["VHover"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);