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

/***/ "./components/atoms/BannerStaff/FloatMenu.jsx":
/*!****************************************************!*\
  !*** ./components/atoms/BannerStaff/FloatMenu.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FloatMenu\": function() { return /* binding */ FloatMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FloatMenuContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatMenuContext */ \"./components/atoms/BannerStaff/FloatMenuContext.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n// componente de tipo atomo para el montaje de un menu que consta de las mismas 4 opciones de el nav original del hedeader, este esta abstraido de posicion y oculto sobre la pagina principal\n// mediante un cambio de estado se desplaza de arriba hacia abajo\n// se utiliza un patron de contexto o HOOK useContext, para comunicar la fuente de verdad... en este caso el estado del menu de idiomas\nvar FloatMenu = function() {\n    _s();\n    var ref = (0,_FloatMenuContext__WEBPACK_IMPORTED_MODULE_3__.useMenuFloatContext)(), menu = ref.menu, setMenu = ref.setMenu;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n        className: menu ? \"floatMenu--Container on\" : \"floatMenu--Container off\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"floatMenu__nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"floatMenu--btn\",\n                    onClick: function() {\n                        return setMenu(false);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"floatMenu--image\",\n                        src: \"images/arrow-down.png\",\n                        alt: \"arrowBack\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"floatMenu__list\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"https://www.newshore.es/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"https://www.newshore.es/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"https://www.newshore.es/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Destinations\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"https://www.newshore.es/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(FloatMenu, \"cwpG5dY7DzxpmkGfBhSRXBM3YAM=\", false, function() {\n    return [\n        _FloatMenuContext__WEBPACK_IMPORTED_MODULE_3__.useMenuFloatContext\n    ];\n});\n_c = FloatMenu;\nvar _c;\n$RefreshReg$(_c, \"FloatMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Jhbm5lclN0YWZmL0Zsb2F0TWVudS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDRztBQUMyQjs7QUFHdkQsOExBQThMO0FBQzlMLGlFQUFpRTtBQUNqRSx1SUFBdUk7QUFHaEksSUFBTUcsU0FBUyxHQUFHLFdBQU07O0lBQzNCLElBQXdCRCxHQUFxQixHQUFyQkEsc0VBQW1CLEVBQUUsRUFBdENFLElBQUksR0FBYUYsR0FBcUIsQ0FBdENFLElBQUksRUFBRUMsT0FBTyxHQUFJSCxHQUFxQixDQUFoQ0csT0FBTztJQUN0QixxQkFDRSw4REFBQ0QsTUFBSTtRQUFDRSxTQUFTLEVBQUdGLElBQUksR0FBRyx5QkFBeUIsR0FBRywwQkFBMEI7a0JBQzNFLDRFQUFDRyxLQUFHO1lBQUNELFNBQVMsRUFBQyxnQkFBZ0I7OzhCQUMvQiw4REFBQ0UsUUFBTTtvQkFBQ0YsU0FBUyxFQUFDLGdCQUFnQjtvQkFBQ0csT0FBTyxFQUFFOytCQUFNSixPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUFBOzhCQUM1RCw0RUFBQ0ssS0FBRzt3QkFBQ0osU0FBUyxFQUFDLGtCQUFrQjt3QkFBQ0ssR0FBRyxFQUFDLHVCQUF1Qjt3QkFBQ0MsR0FBRyxFQUFDLFdBQVc7Ozs7OzZCQUFFOzs7Ozt5QkFDMUU7OEJBQ0wsOERBQUNDLElBQUU7b0JBQUNQLFNBQVMsRUFBQyxpQkFBaUI7O3NDQUMzQiw4REFBQ1EsSUFBRTs0QkFBQ1IsU0FBUyxFQUFDLHVCQUF1QjtzQ0FDckMsNEVBQUNMLGtEQUFJO2dDQUFDYyxJQUFJLEVBQUMsMEJBQTBCOzBDQUNqQyw0RUFBQ0MsR0FBQzs4Q0FBQyxNQUFJOzs7Ozt5Q0FBSTs7Ozs7cUNBQ1I7Ozs7O2lDQUNFO3NDQUNULDhEQUFDRixJQUFFOzRCQUFDUixTQUFTLEVBQUMsdUJBQXVCO3NDQUNyQyw0RUFBQ0wsa0RBQUk7Z0NBQUNjLElBQUksRUFBQywwQkFBMEI7MENBQ2pDLDRFQUFDQyxHQUFDOzhDQUFDLE9BQUs7Ozs7O3lDQUFJOzs7OztxQ0FDVDs7Ozs7aUNBQ0U7c0NBQ1QsOERBQUNGLElBQUU7NEJBQUNSLFNBQVMsRUFBQyx1QkFBdUI7c0NBQ3JDLDRFQUFDTCxrREFBSTtnQ0FBQ2MsSUFBSSxFQUFDLDBCQUEwQjswQ0FDakMsNEVBQUNDLEdBQUM7OENBQUMsY0FBWTs7Ozs7eUNBQUk7Ozs7O3FDQUNoQjs7Ozs7aUNBQ0U7c0NBQ1QsOERBQUNGLElBQUU7NEJBQUNSLFNBQVMsRUFBQyx1QkFBdUI7c0NBQ3JDLDRFQUFDTCxrREFBSTtnQ0FBQ2MsSUFBSSxFQUFDLDBCQUEwQjswQ0FDakMsNEVBQUNDLEdBQUM7OENBQUMsU0FBTzs7Ozs7eUNBQUk7Ozs7O3FDQUNYOzs7OztpQ0FDRjs7Ozs7O3lCQUNKOzs7Ozs7aUJBQ0g7Ozs7O2FBQ0gsQ0FDUjtDQUNGO0dBakNZYixTQUFTOztRQUNNRCxrRUFBbUI7OztBQURsQ0MsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL0Jhbm5lclN0YWZmL0Zsb2F0TWVudS5qc3g/NTBjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTWVudUZsb2F0Q29udGV4dH0gZnJvbSAnLi9GbG9hdE1lbnVDb250ZXh0J1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudGUgZGUgdGlwbyBhdG9tbyBwYXJhIGVsIG1vbnRhamUgZGUgdW4gbWVudSBxdWUgY29uc3RhIGRlIGxhcyBtaXNtYXMgNCBvcGNpb25lcyBkZSBlbCBuYXYgb3JpZ2luYWwgZGVsIGhlZGVhZGVyLCBlc3RlIGVzdGEgYWJzdHJhaWRvIGRlIHBvc2ljaW9uIHkgb2N1bHRvIHNvYnJlIGxhIHBhZ2luYSBwcmluY2lwYWxcclxuLy8gbWVkaWFudGUgdW4gY2FtYmlvIGRlIGVzdGFkbyBzZSBkZXNwbGF6YSBkZSBhcnJpYmEgaGFjaWEgYWJham9cclxuLy8gc2UgdXRpbGl6YSB1biBwYXRyb24gZGUgY29udGV4dG8gbyBIT09LIHVzZUNvbnRleHQsIHBhcmEgY29tdW5pY2FyIGxhIGZ1ZW50ZSBkZSB2ZXJkYWQuLi4gZW4gZXN0ZSBjYXNvIGVsIGVzdGFkbyBkZWwgbWVudSBkZSBpZGlvbWFzXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZsb2F0TWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHttZW51LCBzZXRNZW51fSA9IHVzZU1lbnVGbG9hdENvbnRleHQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG1lbnUgY2xhc3NOYW1lPXsgbWVudT8gKFwiZmxvYXRNZW51LS1Db250YWluZXIgb25cIik6KFwiZmxvYXRNZW51LS1Db250YWluZXIgb2ZmXCIpfT5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsb2F0TWVudV9fbmF2XCI+IFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXRNZW51LS1idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51KGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXRNZW51LS1pbWFnZVwiIHNyYz1cImltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIGFsdD1cImFycm93QmFja1wiLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsb2F0TWVudV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsb2F0TWVudV9fbGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm5ld3Nob3JlLmVzL1wiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19saXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubmV3c2hvcmUuZXMvXCI+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsb2F0TWVudV9fbGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm5ld3Nob3JlLmVzL1wiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YT5EZXN0aW5hdGlvbnM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbG9hdE1lbnVfX2xpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5uZXdzaG9yZS5lcy9cIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICA8L21lbnU+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VNZW51RmxvYXRDb250ZXh0IiwiRmxvYXRNZW51IiwibWVudSIsInNldE1lbnUiLCJjbGFzc05hbWUiLCJuYXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJsaSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/BannerStaff/FloatMenu.jsx\n"));

/***/ })

});