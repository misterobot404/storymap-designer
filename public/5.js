(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Map",
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"],
    LTooltip: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTooltip"],
    LIcon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LIcon"],
    LPolyline: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPolyline"],
    LImageOverlay: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LImageOverlay"]
  },
  data: function data() {
    return {
      //// l-map config
      maxBoundsViscosity: 0.9,
      //// l-polyline config
      polylineOpacity: 0.6,
      polylineDashArray: "6"
    };
  },
  watch: {
    'config.selectedEventId': function configSelectedEventId() {
      this.$refs.map.mapObject.flyTo(this.selectedEvent.marker.position);
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('map', ['tile', 'config', 'events', 'tileCenter'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('map', ['selectedEvent', 'indexSelectedEvent', 'arrayMarker'])), {}, {
    sync_center: {
      get: function get() {
        return this.tileCenter;
      },
      set: function set(value) {
        this.SET_TILE_CENTER(value);
      }
    },
    noIframe: function noIframe() {
      return window === window.parent;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('map', ['saveEmptyExampleMap'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('map', ["SET_TILE_CENTER", "SET_SELECTED_EVENT_ID", "SET_EVENT_MARKER_POSITION", "SET_TILE_BOUNDS", "SET_MIN_TILE_ZOOM", "SET_MAX_TILE_ZOOM"])), {}, {
    prevEvent: function prevEvent() {
      if (this.indexSelectedEvent === 0) this.SET_SELECTED_EVENT_ID(this.events[this.events.length - 1].id);else if (this.indexSelectedEvent !== 0) this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent - 1].id);
    },
    nextEvent: function nextEvent() {
      if (this.indexSelectedEvent === this.events.length - 1) this.SET_SELECTED_EVENT_ID(this.events[0].id);else if (this.indexSelectedEvent !== this.events.length - 1) this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent + 1].id);
    },
    keyDownEvent: function keyDownEvent(e) {
      if (e.keyCode === 37) {
        this.prevEvent();
      } else if (e.keyCode === 39) {
        this.nextEvent();
      }
    }
  }),
  beforeMount: function beforeMount() {
    var _this = this;

    // add keydown event
    window.addEventListener("keydown", function (e) {
      return _this.keyDownEvent(e);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    // remove keydown event
    window.removeEventListener("keydown", function (e) {
      return _this2.keyDownEvent(e);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Viewer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Viewer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Viewer_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Viewer/Map */ "./resources/js/components/Viewer/Map.vue");
/* harmony import */ var _components_MediaContentForEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MediaContentForEvent */ "./resources/js/components/MediaContentForEvent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Viewer",
  components: {
    Map: _components_Viewer_Map__WEBPACK_IMPORTED_MODULE_3__["default"],
    MediaContent: _components_MediaContentForEvent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('map', ['selectedEvent', 'wasChanges'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])('map', ['SET_SELECTED_EVENT_ID', 'SET_TILE_CENTER'])), {}, {
    // Вызов подтверждения при закрытии конструктора с несохраненными изменениями
    preventNav: function preventNav(event) {
      if (!this.wasChanges) return;
      event.preventDefault(); // Chrome requires returnValue to be set.

      event.returnValue = "";
    }
  }),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!to.params.id) {
                _context.next = 8;
                break;
              }

              if (!(from.name !== "constructor" && to.params.id !== from.params.id)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('map/getMap', to.params.id, {
                root: true
              });

            case 4:
              // set seo header
              document.title = _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.map.name + " - MapDesigner";
              document.description = _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.map.description;
              _context.next = 13;
              break;

            case 8:
              if (!(_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.map.id !== 'test')) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("map/setEmptyExampleMap", null, {
                root: true
              });

            case 11:
              // set seo header
              document.title = "Пробное использование конструктора карт и атласов - MapDesigner";
              document.description = "Попробуйте возможности для онлайн создания карт и электронных атласов в конструкторе MapDesigner бесплатно.";

            case 13:
              next(function (vm) {
                // add method called before the tab is closed
                if (to.name !== "example" && to.params.id) window.addEventListener("beforeunload", vm.preventNav);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // если были сделаны изменения в реальной карте и если мы не переходим между конструктором и вьюером
    if (from.name !== "example" && this.wasChanges && from.params.id && to.name !== "constructor" && !window.confirm("Изменения атласа не будут сохранены. Продолжить?")) {
      next(false);
    } else {
      // remove method called before the tab is closed
      window.removeEventListener("beforeunload", this.preventNav);
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map[data-v-6c3bce2c] {\n  width: 100%;\n  margin: auto;\n  border: 1px solid #4d565661;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    "l-map",
    {
      ref: "map",
      staticClass: "map",
      attrs: {
        minZoom: _vm.tile.minZoom,
        maxZoom: _vm.tile.maxZoom,
        center: _vm.sync_center,
        maxBoundsViscosity: _vm.maxBoundsViscosity,
        options: { zoomControl: false }
      },
      on: {
        "update:center": function($event) {
          _vm.sync_center = $event
        }
      }
    },
    [
      _vm.tile.url.indexOf("{z}") === -1 ||
      _vm.tile.url.indexOf("{x}") === -1 ||
      _vm.tile.url.indexOf("{y}") === -1
        ? _c("l-image-overlay", { attrs: { url: _vm.tile.url } })
        : _c("l-tile-layer", {
            attrs: {
              url: _vm.tile.url,
              noWrap: "",
              attribution: _vm.tile.attribution
            }
          }),
      _vm._v(" "),
      _vm._l(_vm.events, function(event, index) {
        return _c(
          "l-marker",
          {
            key: event.id,
            attrs: { "lat-lng": event.marker.position },
            on: {
              click: function($event) {
                return _vm.SET_SELECTED_EVENT_ID(event.id)
              }
            }
          },
          [
            _c("l-tooltip", [
              _vm._v("\n            " + _vm._s(event.title) + "\n        ")
            ]),
            _vm._v(" "),
            _vm.indexSelectedEvent !== index
              ? _c("l-icon", {
                  attrs: {
                    "icon-size": event.marker.size,
                    "icon-url": _vm.events[index].marker.url
                  }
                })
              : _c("l-icon", {
                  attrs: {
                    "icon-size": [
                      event.marker.size[0] * 2,
                      event.marker.size[1] * 2
                    ],
                    "icon-url": _vm.events[index].marker.url
                  }
                })
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm.tile.showPolyline
        ? [
            _c("l-polyline", {
              attrs: {
                "lat-lngs": _vm.arrayMarker,
                opacity: _vm.polylineOpacity,
                dashArray: _vm.polylineDashArray,
                weight:
                  _vm.tile.polylineWeight !== undefined
                    ? _vm.tile.polylineWeight
                    : 2
              }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "v-btn--active",
          staticStyle: { bottom: "50%", left: "16px", "z-index": "401" },
          attrs: {
            fab: "",
            dark: "",
            text: "",
            "x-large": "",
            absolute: "",
            color: "primary"
          },
          on: {
            dblclick: function($event) {
              $event.stopPropagation()
            },
            click: _vm.prevEvent
          }
        },
        [
          _c("v-icon", { attrs: { "x-large": "" } }, [
            _vm._v("keyboard_arrow_left")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "v-btn--active",
          staticStyle: { bottom: "50%", right: "16px", "z-index": "401" },
          attrs: {
            fab: "",
            dark: "",
            absolute: "",
            "x-large": "",
            text: "",
            color: "primary"
          },
          on: {
            dblclick: function($event) {
              $event.stopPropagation()
            },
            click: _vm.nextEvent
          }
        },
        [
          _c("v-icon", { attrs: { "x-large": "" } }, [
            _vm._v("keyboard_arrow_right")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tooltip",
        {
          attrs: { bottom: "" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                return [
                  _vm.noIframe
                    ? _c(
                        "v-btn",
                        _vm._g(
                          {
                            staticClass: "v-btn--active",
                            staticStyle: {
                              top: "16px",
                              left: "16px",
                              "z-index": "401"
                            },
                            attrs: {
                              absolute: "",
                              text: "",
                              rounded: "",
                              "x-large": ""
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.$router.back()
                              }
                            }
                          },
                          on
                        ),
                        [
                          _c("v-icon", { attrs: { large: "" } }, [
                            _vm._v("first_page")
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        },
        [_vm._v(" "), _c("span", [_vm._v("Назад")])]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb& ***!
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
  return _c(
    "div",
    {
      staticStyle: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh"
      }
    },
    [
      _c("Map", { staticStyle: { position: "absolute", "z-index": "0" } }),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.mdAndUp
        ? _c(
            "div",
            {
              staticClass: "d-flex flex-column justify-center",
              staticStyle: {
                position: "absolute",
                right: "100px",
                height: "100vh",
                width: "34vw",
                "z-index": "1",
                "pointer-events": "none"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "pa-4 d-flex flex-column text-center rounded",
                  staticStyle: {
                    "max-height": "90vh",
                    "background-color": "rgba(225, 225, 225, 0.7)",
                    "pointer-events": "all",
                    overflow: "hidden"
                  }
                },
                [
                  _vm.selectedEvent.mediaUrl.length > 0
                    ? _c("MediaContent", {
                        staticStyle: { "flex-shrink": "0" },
                        attrs: { height: "38vh" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "display-1 mx-6 mt-6" }, [
                    _vm._v(_vm._s(_vm.selectedEvent.title))
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mx-6 mt-4",
                    staticStyle: { "overflow-y": "auto" },
                    domProps: {
                      innerHTML: _vm._s(_vm.selectedEvent.description)
                    }
                  })
                ],
                1
              )
            ]
          )
        : _c(
            "div",
            {
              staticClass: "d-flex flex-row justify-center",
              staticStyle: {
                position: "absolute",
                bottom: "20px",
                "max-height": "40vh",
                width: "100vw",
                "z-index": "1",
                "pointer-events": "none"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "pa-4 d-flex flex-column align-center text-center rounded",
                  staticStyle: {
                    "max-width": "94vw",
                    "background-color": "rgba(225, 225, 225, 0.7)",
                    "pointer-events": "all",
                    "overflow-y": "auto"
                  }
                },
                [
                  _c("div", { staticClass: "headline mt-2" }, [
                    _vm._v(_vm._s(_vm.selectedEvent.title))
                  ]),
                  _vm._v(" "),
                  _vm.selectedEvent.mediaUrl.length > 0
                    ? _c("MediaContent", {
                        staticClass: "mx-4 mt-3",
                        staticStyle: {
                          "flex-shrink": "0",
                          "max-width": "38vh"
                        },
                        attrs: { height: "22vh" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mx-2 mt-3",
                    domProps: {
                      innerHTML: _vm._s(_vm.selectedEvent.description)
                    }
                  })
                ],
                1
              )
            ]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Viewer/Map.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Viewer/Map.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=6c3bce2c&scoped=true& */ "./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true&");
/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ "./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& */ "./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c3bce2c",
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_7__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Viewer/Map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=style&index=0&id=6c3bce2c&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_6c3bce2c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=template&id=6c3bce2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Viewer/Map.vue?vue&type=template&id=6c3bce2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_6c3bce2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Viewer.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Viewer.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Viewer.vue?vue&type=template&id=4c4b2bdb& */ "./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb&");
/* harmony import */ var _Viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Viewer.vue?vue&type=script&lang=js& */ "./resources/js/pages/Viewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Viewer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Viewer.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Viewer.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Viewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Viewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--10-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Viewer.vue?vue&type=template&id=4c4b2bdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Viewer.vue?vue&type=template&id=4c4b2bdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewer_vue_vue_type_template_id_4c4b2bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);