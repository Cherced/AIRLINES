/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/atoms/BannerStaff/FloatMenuContext.js":
/*!**********************************************************!*\
  !*** ./components/atoms/BannerStaff/FloatMenuContext.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuFloatContextProvider\": () => (/* binding */ MenuFloatContextProvider),\n/* harmony export */   \"useMenuFloatContext\": () => (/* binding */ useMenuFloatContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// este es un hook de fuente de verdad para comunicar un estado de manera global en la aplicacion y establecer comunicaicon simultanea\nconst MenuFloatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction MenuFloatContextProvider({ children  }) {\n    const [menu, setMenu] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuFloatContext.Provider, {\n        value: {\n            menu,\n            setMenu\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\components\\\\atoms\\\\BannerStaff\\\\FloatMenuContext.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\nfunction useMenuFloatContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MenuFloatContext);\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Jhbm5lclN0YWZmL0Zsb2F0TWVudUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUU7QUFFakUsc0lBQXNJO0FBRXRJLE1BQU1JLGdCQUFnQixpQkFBR0Ysb0RBQWEsQ0FBQyxFQUFFLENBQUM7QUFHbkMsU0FBU0csd0JBQXdCLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEVBQUM7SUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHUixxREFBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxxQkFDSSw4REFBQ0ksZ0JBQWdCLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQzlCSCxJQUFJO1lBQUVDLE9BQU87U0FDaEI7a0JBRUFGLFFBQVE7Ozs7O1lBQ21CLENBQzNCO0NBQ1I7QUFFTSxTQUFTSyxtQkFBbUIsR0FBRTtJQUNqQyxNQUFNQyxPQUFPLEdBQUdULGlEQUFVLENBQUNDLGdCQUFnQixDQUFDO0lBQzVDLE9BQU9RLE9BQU87Q0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJsaW5lLy4vY29tcG9uZW50cy9hdG9tcy9CYW5uZXJTdGFmZi9GbG9hdE1lbnVDb250ZXh0LmpzPzQ3MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGVzdGUgZXMgdW4gaG9vayBkZSBmdWVudGUgZGUgdmVyZGFkIHBhcmEgY29tdW5pY2FyIHVuIGVzdGFkbyBkZSBtYW5lcmEgZ2xvYmFsIGVuIGxhIGFwbGljYWNpb24geSBlc3RhYmxlY2VyIGNvbXVuaWNhaWNvbiBzaW11bHRhbmVhXHJcblxyXG5jb25zdCBNZW51RmxvYXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVGbG9hdENvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KXtcclxuICAgIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudUZsb2F0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICBtZW51LCBzZXRNZW51XHJcbiAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICA8L01lbnVGbG9hdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVudUZsb2F0Q29udGV4dCgpe1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTWVudUZsb2F0Q29udGV4dClcclxuICAgIHJldHVybiBjb250ZXh0XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVudUZsb2F0Q29udGV4dCIsIk1lbnVGbG9hdENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibWVudSIsInNldE1lbnUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlTWVudUZsb2F0Q29udGV4dCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/BannerStaff/FloatMenuContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/global.scss */ \"./sass/global.scss\");\n/* harmony import */ var _sass_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_atoms_BannerStaff_FloatMenuContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/atoms/BannerStaff/FloatMenuContext */ \"./components/atoms/BannerStaff/FloatMenuContext.js\");\n\n\n\n// componente app, desde donde se instancian los demas componentes, infuenciado por un contexto de manejo de estado o fuente de verdad de el menu de idiomas\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_BannerStaff_FloatMenuContext__WEBPACK_IMPORTED_MODULE_2__.MenuFloatContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\AIRLINE\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 11\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQzZEO0FBRXpGLDRKQUE0SjtBQUU1SixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFBTSw4REFBQ0gsb0dBQXdCO2tCQUN2Qiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNIO0NBQ3BDO0FBRUMsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJsaW5lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Fzcy9nbG9iYWwuc2NzcydcclxuaW1wb3J0IHtNZW51RmxvYXRDb250ZXh0UHJvdmlkZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL2F0b21zL0Jhbm5lclN0YWZmL0Zsb2F0TWVudUNvbnRleHRcIlxyXG5cclxuLy8gY29tcG9uZW50ZSBhcHAsIGRlc2RlIGRvbmRlIHNlIGluc3RhbmNpYW4gbG9zIGRlbWFzIGNvbXBvbmVudGVzLCBpbmZ1ZW5jaWFkbyBwb3IgdW4gY29udGV4dG8gZGUgbWFuZWpvIGRlIGVzdGFkbyBvIGZ1ZW50ZSBkZSB2ZXJkYWQgZGUgZWwgbWVudSBkZSBpZGlvbWFzXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybjxNZW51RmxvYXRDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4gXHJcbiAgICAgICAgICA8L01lbnVGbG9hdENvbnRleHRQcm92aWRlcj4gIFxyXG59XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiTWVudUZsb2F0Q29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./sass/global.scss":
/*!**************************!*\
  !*** ./sass/global.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();