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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_ServicePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/ServicePopup */ \"./src/components/popup/ServicePopup.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/victoria/Work/orido/src/components/Services.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar serviceData = [{\n  name: \"История ниспослания и собирания Корана\",\n  img: \"img/book_1.png\",\n  description: [\"Данное пособие представляет собой конспекты лекций, раскрывающих основные вопросы, связанные с историей ниспослания Священного Корана. Пособие основано на достоверных хадисах и высказываниях ученых. Адресовано преподавателям и студентам духовных учебных заведений. Рекомендовано для преподавания в медресе и онлайн школах.\"]\n}, {\n  name: \"Акыда\",\n  img: \"img/service/2.jpg\",\n  description: [\"Акыда (вероучение). Есть занятия для начинающих\"]\n}, {\n  name: \"Хадис\",\n  img: \"img/service/4.jpg\",\n  description: [\"Хадис. Есть занятия для начинающих\"]\n}];\n\nvar Services = function Services() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      current = _useState[0],\n      setCurrent = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      activeData = _useState2[0],\n      setActiveData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState3[0],\n      setOpen = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.Servicehashtag)();\n  }, [current]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_popup_ServicePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      open: open,\n      close: function close() {\n        return setOpen(false);\n      },\n      data: activeData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"orido_tm_section\",\n      id: \"service\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"orido_tm_service\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"orido_tm_main_title\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                children: \"\\u041C\\u043E\\u0438 \\u043A\\u043D\\u0438\\u0433\\u0438\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"service_list\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n              children: serviceData.map(function (service, i) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n                  className: current == i ? \"current\" : \"\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                    className: \"list_inner\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                      className: \"left\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"number\",\n                        children: \"0\".concat(i + 1)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 55,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n                        className: \"title\",\n                        children: service.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 56,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 54,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                      className: \"right\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n                          children: [service.description[0].substring(0, 105), \"...\"]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 60,\n                          columnNumber: 27\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 59,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                        className: \"arrow\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                          className: \"svg\",\n                          src: \"img/svg/top-arrow.svg\",\n                          alt: \"\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 63,\n                          columnNumber: 27\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 62,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 58,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                      className: \"orido_tm_full_link c-pointer\",\n                      onClick: function onClick() {\n                        setActiveData(service);\n                        setOpen(true);\n                        setCurrent(i);\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 70,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                      className: \"popup_service_image\",\n                      src: \"img/service/1.jpg\",\n                      alt: \"\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 79,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 53,\n                    columnNumber: 21\n                  }, _this)\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"ccc\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Services, \"ZrZIAJ7iJz0Sw7d7NAUE6TA5utk=\");\n\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxTQUFTLEVBQUMsT0FBZjt3QkFBQSx1QkFDRTswQkFDRSxTQUFTLEVBQUMsS0FEWjswQkFFRSxHQUFHLEVBQUMsdUJBRk47MEJBR0UsR0FBRyxFQUFDO3dCQUhOOzBCQUFBOzBCQUFBOzBCQUFBO3dCQUFBO3NCQURGO3dCQUFBO3dCQUFBO3dCQUFBO3NCQUFBLFNBSkY7b0JBQUE7c0JBQUE7c0JBQUE7c0JBQUE7b0JBQUEsU0FMRixlQWlCRTtzQkFDRSxTQUFTLEVBQUMsOEJBRFo7c0JBRUUsT0FBTyxFQUFFLG1CQUFNO3dCQUNiTixhQUFhLENBQUNJLE9BQUQsQ0FBYjt3QkFDQUYsT0FBTyxDQUFDLElBQUQsQ0FBUDt3QkFDQUosVUFBVSxDQUFDTyxDQUFELENBQVY7c0JBQ0Q7b0JBTkg7c0JBQUE7c0JBQUE7c0JBQUE7b0JBQUEsU0FqQkYsZUEwQkU7c0JBQ0UsU0FBUyxFQUFDLHFCQURaO3NCQUVFLEdBQUcsRUFBQyxtQkFGTjtzQkFHRSxHQUFHLEVBQUM7b0JBSE47c0JBQUE7c0JBQUE7c0JBQUE7b0JBQUEsU0ExQkY7a0JBQUE7b0JBQUE7b0JBQUE7b0JBQUE7a0JBQUE7Z0JBREYsR0FBbURBLENBQW5EO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBLFNBRGU7Y0FBQSxDQUFoQjtZQURIO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FERixlQXVDRTtjQUFNLFNBQVMsRUFBQztZQUFoQjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBdkNGO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQU5GO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUE2REQsQ0FyRUQ7O0dBQU1UOztLQUFBQTtBQXNFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlcy5qcz80YWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlcnZpY2VoYXNodGFnIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuaW1wb3J0IFNlcnZpY2VQb3B1cCBmcm9tIFwiLi9wb3B1cC9TZXJ2aWNlUG9wdXBcIjtcclxuXHJcbmNvbnN0IHNlcnZpY2VEYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwi0JjRgdGC0L7RgNC40Y8g0L3QuNGB0L/QvtGB0LvQsNC90LjRjyDQuCDRgdC+0LHQuNGA0LDQvdC40Y8g0JrQvtGA0LDQvdCwXCIsXHJcbiAgICBpbWc6IFwiaW1nL2Jvb2tfMS5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgIFwi0JTQsNC90L3QvtC1INC/0L7RgdC+0LHQuNC1INC/0YDQtdC00YHRgtCw0LLQu9GP0LXRgiDRgdC+0LHQvtC5INC60L7QvdGB0L/QtdC60YLRiyDQu9C10LrRhtC40LksINGA0LDRgdC60YDRi9Cy0LDRjtGJ0LjRhSDQvtGB0L3QvtCy0L3Ri9C1INCy0L7Qv9GA0L7RgdGLLCDRgdCy0Y/Qt9Cw0L3QvdGL0LUg0YEg0LjRgdGC0L7RgNC40LXQuSDQvdC40YHQv9C+0YHQu9Cw0L3QuNGPINCh0LLRj9GJ0LXQvdC90L7Qs9C+INCa0L7RgNCw0L3QsC4g0J/QvtGB0L7QsdC40LUg0L7RgdC90L7QstCw0L3QviDQvdCwINC00L7RgdGC0L7QstC10YDQvdGL0YUg0YXQsNC00LjRgdCw0YUg0Lgg0LLRi9GB0LrQsNC30YvQstCw0L3QuNGP0YUg0YPRh9C10L3Ri9GFLiDQkNC00YDQtdGB0L7QstCw0L3QviDQv9GA0LXQv9C+0LTQsNCy0LDRgtC10LvRj9C8INC4INGB0YLRg9C00LXQvdGC0LDQvCDQtNGD0YXQvtCy0L3Ri9GFINGD0YfQtdCx0L3Ri9GFINC30LDQstC10LTQtdC90LjQuS4g0KDQtdC60L7QvNC10L3QtNC+0LLQsNC90L4g0LTQu9GPINC/0YDQtdC/0L7QtNCw0LLQsNC90LjRjyDQsiDQvNC10LTRgNC10YHQtSDQuCDQvtC90LvQsNC50L0g0YjQutC+0LvQsNGFLlwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0JDQutGL0LTQsFwiLFxyXG4gICAgaW1nOiBcImltZy9zZXJ2aWNlLzIuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogW1wi0JDQutGL0LTQsCAo0LLQtdGA0L7Rg9GH0LXQvdC40LUpLiDQldGB0YLRjCDQt9Cw0L3Rj9GC0LjRjyDQtNC70Y8g0L3QsNGH0LjQvdCw0Y7RidC40YVcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCLQpdCw0LTQuNGBXCIsXHJcbiAgICBpbWc6IFwiaW1nL3NlcnZpY2UvNC5qcGdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBbXCLQpdCw0LTQuNGBLiDQldGB0YLRjCDQt9Cw0L3Rj9GC0LjRjyDQtNC70Y8g0L3QsNGH0LjQvdCw0Y7RidC40YVcIl0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVEYXRhLCBzZXRBY3RpdmVEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFNlcnZpY2VoYXNodGFnKCk7XHJcbiAgfSwgW2N1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFNlcnZpY2VQb3B1cFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGRhdGE9e2FjdGl2ZURhdGF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZG9fdG1fc2VjdGlvblwiIGlkPVwic2VydmljZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZG9fdG1fc2VydmljZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmlkb190bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+0JzQvtC4INC60L3QuNCz0Lg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9saXN0XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VEYXRhLm1hcCgoc2VydmljZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjdXJyZW50ID09IGkgPyBcImN1cnJlbnRcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+e2AwJHtpICsgMX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NlcnZpY2UubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlLmRlc2NyaXB0aW9uWzBdLnN1YnN0cmluZygwLCAxMDUpfS4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1nL3N2Zy90b3AtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yaWRvX3RtX2Z1bGxfbGluayBjLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0YShzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE1vZGFsYm94IEluZm8gU3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwX3NlcnZpY2VfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc2VydmljZS8xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjY2NcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VydmljZWhhc2h0YWciLCJTZXJ2aWNlUG9wdXAiLCJzZXJ2aWNlRGF0YSIsIm5hbWUiLCJpbWciLCJkZXNjcmlwdGlvbiIsIlNlcnZpY2VzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJhY3RpdmVEYXRhIiwic2V0QWN0aXZlRGF0YSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwIiwic2VydmljZSIsImkiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Services.js\n"));

/***/ })

});