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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FloatMenu\": function() { return /* binding */ FloatMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FloatMenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatMenuContext */ \"./components/atoms/BannerStaff/FloatMenuContext.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n// componente de tipo atomo para el montaje de un menu que consta de las mismas 4 opciones de el nav original del hedeader, este esta abstraido de posicion y oculto sobre la pagina principal\n// mediante un cambio de estado se desplaza de arriba hacia abajo\n// se utiliza un patron de contexto o HOOK useContext, para comunicar la fuente de verdad... en este caso el estado del menu de idiomas\nvar FloatMenu = function() {\n    _s();\n    var ref = (0,_FloatMenuContext__WEBPACK_IMPORTED_MODULE_4__.useMenuFloatContext)(), menu = ref.menu, setMenu = ref.setMenu;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n        className: menu ? \"floatMenu--Container on\" : \"floatMenu--Container off\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"floatMenu__nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"floatMenu--btn\",\n                    onClick: function() {\n                        return setMenu(false);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"floatMenu--image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/arrow-down.png\",\n                            height: 30,\n                            width: 30\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"floatMenu__list\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"floatMenu__item--ancord\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"floatMenu__item--ancord\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"floatMenu__item--ancord\",\n                                    children: \"Destinations\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"floatMenu__list--item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"floatMenu__item--ancord\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenu.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(FloatMenu, \"cwpG5dY7DzxpmkGfBhSRXBM3YAM=\", false, function() {\n    return [\n        _FloatMenuContext__WEBPACK_IMPORTED_MODULE_4__.useMenuFloatContext\n    ];\n});\n_c = FloatMenu;\nvar _c;\n$RefreshReg$(_c, \"FloatMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Jhbm5lclN0YWZmL0Zsb2F0TWVudS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUNLO0FBQ0Y7QUFDMkI7O0FBR3ZELDhMQUE4TDtBQUM5TCxpRUFBaUU7QUFDakUsdUlBQXVJO0FBR2hJLElBQU1JLFNBQVMsR0FBRyxXQUFNOztJQUMzQixJQUF3QkQsR0FBcUIsR0FBckJBLHNFQUFtQixFQUFFLEVBQXRDRSxJQUFJLEdBQWFGLEdBQXFCLENBQXRDRSxJQUFJLEVBQUVDLE9BQU8sR0FBSUgsR0FBcUIsQ0FBaENHLE9BQU87SUFDdEIscUJBQ0UsOERBQUNELE1BQUk7UUFBQ0UsU0FBUyxFQUFHRixJQUFJLEdBQUcseUJBQXlCLEdBQUcsMEJBQTBCO2tCQUMzRSw0RUFBQ0csS0FBRztZQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzs4QkFDL0IsOERBQUNFLFFBQU07b0JBQUNGLFNBQVMsRUFBQyxnQkFBZ0I7b0JBQUNHLE9BQU8sRUFBRTsrQkFBTUosT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFBQTs4QkFDNUQsNEVBQUNLLEtBQUc7d0JBQUNKLFNBQVMsRUFBQyxrQkFBa0I7a0NBQ2pDLDRFQUFDTixtREFBSzs0QkFBRVcsR0FBRyxFQUFFLHdCQUF3Qjs0QkFBRUMsTUFBTSxFQUFFLEVBQUU7NEJBQUVDLEtBQUssRUFBRSxFQUFFOzs7OztpQ0FBRzs7Ozs7NkJBQ3pEOzs7Ozt5QkFDRDs4QkFDTCw4REFBQ0MsSUFBRTtvQkFBQ1IsU0FBUyxFQUFDLGlCQUFpQjs7c0NBQzNCLDhEQUFDUyxJQUFFOzRCQUFDVCxTQUFTLEVBQUMsdUJBQXVCO3NDQUNyQyw0RUFBQ0wsa0RBQUk7Z0NBQUNlLElBQUksRUFBQyxHQUFHOzBDQUNWLDRFQUFDQyxHQUFDO29DQUFDWCxTQUFTLEVBQUMseUJBQXlCOzhDQUFDLE1BQUk7Ozs7O3lDQUFJOzs7OztxQ0FDNUM7Ozs7O2lDQUNFO3NDQUNULDhEQUFDUyxJQUFFOzRCQUFDVCxTQUFTLEVBQUMsdUJBQXVCO3NDQUNyQyw0RUFBQ0wsa0RBQUk7Z0NBQUNlLElBQUksRUFBQyxHQUFHOzBDQUNWLDRFQUFDQyxHQUFDO29DQUFDWCxTQUFTLEVBQUMseUJBQXlCOzhDQUFDLE9BQUs7Ozs7O3lDQUFJOzs7OztxQ0FDN0M7Ozs7O2lDQUNFO3NDQUNULDhEQUFDUyxJQUFFOzRCQUFDVCxTQUFTLEVBQUMsdUJBQXVCO3NDQUNyQyw0RUFBQ0wsa0RBQUk7Z0NBQUNlLElBQUksRUFBQyxHQUFHOzBDQUNWLDRFQUFDQyxHQUFDO29DQUFDWCxTQUFTLEVBQUMseUJBQXlCOzhDQUFDLGNBQVk7Ozs7O3lDQUFJOzs7OztxQ0FDcEQ7Ozs7O2lDQUNFO3NDQUNULDhEQUFDUyxJQUFFOzRCQUFDVCxTQUFTLEVBQUMsdUJBQXVCO3NDQUNyQyw0RUFBQ0wsa0RBQUk7Z0NBQUNlLElBQUksRUFBQyxHQUFHOzBDQUNWLDRFQUFDQyxHQUFDO29DQUFDWCxTQUFTLEVBQUMseUJBQXlCOzhDQUFDLFNBQU87Ozs7O3lDQUFJOzs7OztxQ0FDL0M7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0o7Ozs7OztpQkFDSDs7Ozs7YUFDSCxDQUNSO0NBQ0Y7R0FuQ1lILFNBQVM7O1FBQ01ELGtFQUFtQjs7O0FBRGxDQyxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvQmFubmVyU3RhZmYvRmxvYXRNZW51LmpzeD81MGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTWVudUZsb2F0Q29udGV4dH0gZnJvbSAnLi9GbG9hdE1lbnVDb250ZXh0JyAgICAgXHJcblxyXG5cclxuLy8gY29tcG9uZW50ZSBkZSB0aXBvIGF0b21vIHBhcmEgZWwgbW9udGFqZSBkZSB1biBtZW51IHF1ZSBjb25zdGEgZGUgbGFzIG1pc21hcyA0IG9wY2lvbmVzIGRlIGVsIG5hdiBvcmlnaW5hbCBkZWwgaGVkZWFkZXIsIGVzdGUgZXN0YSBhYnN0cmFpZG8gZGUgcG9zaWNpb24geSBvY3VsdG8gc29icmUgbGEgcGFnaW5hIHByaW5jaXBhbFxyXG4vLyBtZWRpYW50ZSB1biBjYW1iaW8gZGUgZXN0YWRvIHNlIGRlc3BsYXphIGRlIGFycmliYSBoYWNpYSBhYmFqb1xyXG4vLyBzZSB1dGlsaXphIHVuIHBhdHJvbiBkZSBjb250ZXh0byBvIEhPT0sgdXNlQ29udGV4dCwgcGFyYSBjb211bmljYXIgbGEgZnVlbnRlIGRlIHZlcmRhZC4uLiBlbiBlc3RlIGNhc28gZWwgZXN0YWRvIGRlbCBtZW51IGRlIGlkaW9tYXNcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRmxvYXRNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge21lbnUsIHNldE1lbnV9ID0gdXNlTWVudUZsb2F0Q29udGV4dCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWVudSBjbGFzc05hbWU9eyBtZW51PyAoXCJmbG9hdE1lbnUtLUNvbnRhaW5lciBvblwiKTooXCJmbG9hdE1lbnUtLUNvbnRhaW5lciBvZmZcIil9PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19uYXZcIj4gXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdE1lbnUtLWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldE1lbnUoZmFsc2UpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdE1lbnUtLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSAgc3JjPXtcIi9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIn0gaGVpZ2h0PXszMH0gd2lkdGg9ezMwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19saXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdE1lbnVfX2l0ZW0tLWFuY29yZFwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbG9hdE1lbnVfX2xpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdE1lbnVfX2l0ZW0tLWFuY29yZFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19saXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdE1lbnVfX2l0ZW0tLWFuY29yZFwiPkRlc3RpbmF0aW9uczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsb2F0TWVudV9fbGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRNZW51X19pdGVtLS1hbmNvcmRcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvbWVudT5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwidXNlTWVudUZsb2F0Q29udGV4dCIsIkZsb2F0TWVudSIsIm1lbnUiLCJzZXRNZW51IiwiY2xhc3NOYW1lIiwibmF2IiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidWwiLCJsaSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/BannerStaff/FloatMenu.jsx\n"));

/***/ })

});