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

/***/ "./network/createQuery.ts":
/*!********************************!*\
  !*** ./network/createQuery.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({\n    defaultOptions: {\n        queries: {\n            staleTime: Infinity,\n            retry: 2,\n            refetchOnWindowFocus: true,\n            useErrorBoundary: false\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXR3b3JrL2NyZWF0ZVF1ZXJ5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUVuQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUQsb0RBQVcsQ0FBQztJQUN6Q0UsY0FBYyxFQUFFO1FBQ2RDLE9BQU8sRUFBRTtZQUNQQyxTQUFTLEVBQUVDLFFBQVE7WUFDbkJDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLG9CQUFvQixFQUFFLElBQUk7WUFDMUJDLGdCQUFnQixFQUFFLEtBQUs7U0FDeEI7S0FDRjtDQVdGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL25ldHdvcmsvY3JlYXRlUXVlcnkudHM/YTEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5leHBvcnQgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICBkZWZhdWx0T3B0aW9uczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHN0YWxlVGltZTogSW5maW5pdHksIC8vIFN0YWxlIHRpbWUgdG8gMTBzXG4gICAgICByZXRyeTogMixcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiB0cnVlLFxuICAgICAgdXNlRXJyb3JCb3VuZGFyeTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgLy8gcXVlcnlDYWNoZTogbmV3IFF1ZXJ5Q2FjaGUoe1xuICAvLyAgIG9uRXJyb3I6IChlcnJvciwgcXVlcnkpID0+IHtcbiAgLy8gICAgIC8vIPCfjokgb25seSBzaG93IGVycm9yIHRvYXN0cyBpZiB3ZSBhbHJlYWR5IGhhdmUgZGF0YSBpbiB0aGUgY2FjaGVcbiAgLy8gICAgIC8vIHdoaWNoIGluZGljYXRlcyBhIGZhaWxlZCBiYWNrZ3JvdW5kIHVwZGF0ZVxuICAvLyAgICAgLy8gaHR0cHM6Ly90a2RvZG8uZXUvYmxvZy9yZWFjdC1xdWVyeS1lcnJvci1oYW5kbGluZ1xuICAvLyAgICAgLy8gIXF1ZXJ5LnN0YXRlLmRhdGEgJiZcbiAgLy8gICAgIGFsZXJ0KFwiNTU1NVwiKTtcblxuICAvLyAgIH0sXG4gIC8vIH0pLFxufSk7XG5cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwic3RhbGVUaW1lIiwiSW5maW5pdHkiLCJyZXRyeSIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwidXNlRXJyb3JCb3VuZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./network/createQuery.ts\n");

/***/ }),

/***/ "./network/index.ts":
/*!**************************!*\
  !*** ./network/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createQuery */ \"./network/createQuery.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _createQuery__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _createQuery__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXR3b3JrL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vbmV0d29yay9pbmRleC50cz9lZDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlUXVlcnknOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./network/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network */ \"./network/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/providers */ \"@ethersproject/providers\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst getLibrary = (provider)=>new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__.Web3Provider(provider)\n;\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: _network__WEBPACK_IMPORTED_MODULE_3__.queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.Web3ReactProvider, {\n            getLibrary: getLibrary,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/Drogo/person/next-demo/packages/web/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Drogo/person/next-demo/packages/web/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Drogo/person/next-demo/packages/web/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Drogo/person/next-demo/packages/web/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRW1CO0FBQ1Q7QUFDUztBQUNHO0FBQ0c7QUFFeEQsTUFBTUssVUFBVSxHQUFHLENBQUNDLFFBQWEsR0FBbUIsSUFBSUYsa0VBQVksQ0FBQ0UsUUFBUSxDQUFDO0FBQUM7QUFFL0UsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNULDREQUFtQjtRQUFDVSxNQUFNLEVBQUVULGlEQUFXO2tCQUN0Qyw0RUFBQ0UsK0RBQWlCO1lBQUNFLFVBQVUsRUFBRUEsVUFBVTtzQkFDdkMsNEVBQUNILDREQUFjOzBCQUNiLDRFQUFDTSxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDYjs7Ozs7Z0JBQ0M7Ozs7O1lBQ0EsQ0FDdEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgcXVlcnlDbGllbnQgfSBmcm9tIFwiLi4vbmV0d29ya1wiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiO1xuXG5jb25zdCBnZXRMaWJyYXJ5ID0gKHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIgPT4gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudFByb3ZpZGVyIiwicXVlcnlDbGllbnQiLCJDaGFrcmFQcm92aWRlciIsIldlYjNSZWFjdFByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();