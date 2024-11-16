"use strict";
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 3020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);
/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_0__, _sliderProps__WEBPACK_IMPORTED_MODULE_1__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_0__, _sliderProps__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const partnersLogo = {
  light: ["img/partners/1.png", "img/partners/2.png", "img/partners/3.png", "img/partners/4.png", "img/partners/5.png", "img/partners/6.png", "img/partners/7.png", "img/partners/8.png"],
  dark: ["img/partners/light/1.png", "img/partners/light/2.png", "img/partners/light/3.png", "img/partners/light/4.png", "img/partners/light/5.png", "img/partners/light/6.png", "img/partners/light/7.png", "img/partners/light/8.png"]
};

const Partners = ({
  dark
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "orido_tm_section",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "orido_tm_partners",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "partners_list",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, _objectSpread(_objectSpread({}, _sliderProps__WEBPACK_IMPORTED_MODULE_1__/* .partnersSliderProps */ .r), {}, {
            className: "owl-carousel",
            children: partnersLogo[dark ? "dark" : "light"].map((partnersLogo, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
              className: "item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "#",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                  src: partnersLogo,
                  alt: ""
                })
              })
            }, i))
          }))
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;