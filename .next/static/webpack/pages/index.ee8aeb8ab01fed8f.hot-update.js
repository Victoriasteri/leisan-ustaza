"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Services.js":
/*!************************************!*\
  !*** ./src/components/Services.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_ServicePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/ServicePopup */ \"./src/components/popup/ServicePopup.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/victoria/Work/orido/src/components/Services.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar serviceData = [{\n  name: \"Тафсир\",\n  img: \"img/service/1.jpg\",\n  description: [\"Тафсир (толкование Корана с размышлением). Есть занятия для начинающих\"]\n}, {\n  name: \"Акыда\",\n  img: \"img/service/2.jpg\",\n  description: [\"Акыда (вероучение). Есть занятия для начинающих\"]\n}, {\n  name: \"Хадис\",\n  img: \"img/service/4.jpg\",\n  description: [\"Хадис. Есть занятия для начинающих\"]\n}];\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      current = _useState[0],\n      setCurrent = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      activeData = _useState2[0],\n      setActiveData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState3[0],\n      setOpen = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.Servicehashtag)();\n  }, [current]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_popup_ServicePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      open: open,\n      close: function close() {\n        return setOpen(false);\n      },\n      data: activeData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"orido_tm_section\",\n      id: \"service\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"orido_tm_service\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"orido_tm_main_title\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                children: [\"\\u0427\\u0442\\u043E \\u044F\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, _this), \"\\u041F\\u0440\\u0435\\u0434\\u043B\\u0430\\u0433\\u0430\\u044E\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"service_list\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n              children: serviceData.map(function (service, i) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n                  className: current == i ? \"current\" : \"\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                    className: \"list_inner\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                      className: \"left\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"number\",\n                        children: \"0\".concat(i + 1)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 59,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n                        className: \"title\",\n                        children: service.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 60,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 58,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                      className: \"right\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n                          children: [service.description[0].substring(0, 105), \"...\"]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 64,\n                          columnNumber: 27\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 63,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                        className: \"arrow\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                          className: \"svg\",\n                          src: \"img/svg/top-arrow.svg\",\n                          alt: \"\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 67,\n                          columnNumber: 27\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 66,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 62,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                      className: \"orido_tm_full_link c-pointer\",\n                      onClick: function onClick() {\n                        setActiveData(service);\n                        setOpen(true);\n                        setCurrent(i);\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 74,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                      className: \"popup_service_image\",\n                      src: \"img/service/1.jpg\",\n                      alt: \"\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 57,\n                    columnNumber: 21\n                  }, _this)\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"ccc\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"ZrZIAJ7iJz0Sw7d7NAUE6TA5utk=\");\n\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U2VydmljZXMuanM/NGFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlaGFzaHRhZyB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcbmltcG9ydCBTZXJ2aWNlUG9wdXAgZnJvbSBcIi4vcG9wdXAvU2VydmljZVBvcHVwXCI7XHJcblxyXG5jb25zdCBzZXJ2aWNlRGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcItCi0LDRhNGB0LjRgFwiLFxyXG4gICAgaW1nOiBcImltZy9zZXJ2aWNlLzEuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICBcItCi0LDRhNGB0LjRgCAo0YLQvtC70LrQvtCy0LDQvdC40LUg0JrQvtGA0LDQvdCwINGBINGA0LDQt9C80YvRiNC70LXQvdC40LXQvCkuINCV0YHRgtGMINC30LDQvdGP0YLQuNGPINC00LvRjyDQvdCw0YfQuNC90LDRjtGJ0LjRhVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0JDQutGL0LTQsFwiLFxyXG4gICAgaW1nOiBcImltZy9zZXJ2aWNlLzIuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogW1wi0JDQutGL0LTQsCAo0LLQtdGA0L7Rg9GH0LXQvdC40LUpLiDQldGB0YLRjCDQt9Cw0L3Rj9GC0LjRjyDQtNC70Y8g0L3QsNGH0LjQvdCw0Y7RidC40YVcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCLQpdCw0LTQuNGBXCIsXHJcbiAgICBpbWc6IFwiaW1nL3NlcnZpY2UvNC5qcGdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBbXCLQpdCw0LTQuNGBLiDQldGB0YLRjCDQt9Cw0L3Rj9GC0LjRjyDQtNC70Y8g0L3QsNGH0LjQvdCw0Y7RidC40YVcIl0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVEYXRhLCBzZXRBY3RpdmVEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFNlcnZpY2VoYXNodGFnKCk7XHJcbiAgfSwgW2N1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFNlcnZpY2VQb3B1cFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGRhdGE9e2FjdGl2ZURhdGF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZG9fdG1fc2VjdGlvblwiIGlkPVwic2VydmljZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZG9fdG1fc2VydmljZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmlkb190bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgINCn0YLQviDRj1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg0J/RgNC10LTQu9Cw0LPQsNGOXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9saXN0XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VEYXRhLm1hcCgoc2VydmljZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjdXJyZW50ID09IGkgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+e2AwJHtpICsgMX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NlcnZpY2UubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlLmRlc2NyaXB0aW9uWzBdLnN1YnN0cmluZygwLCAxMDUpfS4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1nL3N2Zy90b3AtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yaWRvX3RtX2Z1bGxfbGluayBjLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0YShzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE1vZGFsYm94IEluZm8gU3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwX3NlcnZpY2VfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc2VydmljZS8xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjY2NcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VydmljZWhhc2h0YWciLCJTZXJ2aWNlUG9wdXAiLCJzZXJ2aWNlRGF0YSIsIm5hbWUiLCJpbWciLCJkZXNjcmlwdGlvbiIsIlNlcnZpY2VzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJhY3RpdmVEYXRhIiwic2V0QWN0aXZlRGF0YSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwIiwic2VydmljZSIsImkiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Services.js\n"));

/***/ })

});