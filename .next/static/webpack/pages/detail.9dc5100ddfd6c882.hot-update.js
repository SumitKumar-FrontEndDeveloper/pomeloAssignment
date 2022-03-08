"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./components/detail.js":
/*!******************************!*\
  !*** ./components/detail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./components/header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Detail(props) {\n  _s();\n\n  var _newsData$headline;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      newsData = _useState2[0],\n      setNewsData = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    var _state$news;\n\n    return {\n      news: state === null || state === void 0 ? void 0 : (_state$news = state.news) === null || _state$news === void 0 ? void 0 : _state$news.response\n    };\n  }),\n      news = _useSelector.news;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setNewsData(news);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"main\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"max-w-sm rounded overflow-hidden  pt-20\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    \"class\": \"w-full\",\n    src: newsData !== null && newsData !== void 0 && newsData.multimedia ? newsData.multimedia.length > 0 ? \"https://static01.nyt.com/\".concat(newsData.multimedia[0].url) : \"/noImage.png\" : \"/noImage.png\",\n    alt: \"Sunset in the mountains\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"px-6 py-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"font-bold text-xl mb-2\"\n  }, newsData === null || newsData === void 0 ? void 0 : (_newsData$headline = newsData.headline) === null || _newsData$headline === void 0 ? void 0 : _newsData$headline.main), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    \"class\": \"text-gray-700 text-base\"\n  }, newsData === null || newsData === void 0 ? void 0 : newsData[\"abstract\"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"px-6 pt-4 pb-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    \"class\": \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\"\n  }, \"#\", newsData === null || newsData === void 0 ? void 0 : newsData.section_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    \"class\": \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\"\n  }, \"#\", newsData === null || newsData === void 0 ? void 0 : newsData.news_desk), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    \"class\": \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\"\n  }, \"#\", newsData === null || newsData === void 0 ? void 0 : newsData.type_of_material)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"Lead paragraph\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, (newsData === null || newsData === void 0 ? void 0 : newsData.lead_paragraph) || 'N/A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"Publish Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, forMatDate(newsData === null || newsData === void 0 ? void 0 : newsData.pub_date)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"News desk\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, newsData === null || newsData === void 0 ? void 0 : newsData.news_desk))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"Document type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, (newsData === null || newsData === void 0 ? void 0 : newsData.document_type) || 'N/A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"Subsection name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, (newsData === null || newsData === void 0 ? void 0 : newsData.subsection_name) || 'N/A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().newsInfo),\n    \"class\": \"flex flex-col font-sans border-b-stone-300 border-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),\n    \"class\": \"\"\n  }, \"Type Of material\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),\n    \"class\": \"\"\n  }, (newsData === null || newsData === void 0 ? void 0 : newsData.type_of_material) || 'N/A'))));\n}\n\n_s(Detail, \"X1D9R+agEEDjlgj6QmpOanlPFBQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixhQUFNO0FBQXBDLEtBQ0MsQ0FBQUssUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVjLGdCQUFWLEtBQThCLEtBRC9CLENBSkosQ0FERixDQXJGSixDQURGO0FBa0dEOztHQWpIUWhCO1VBRVFELG9EQUNFSDs7O0tBSFZJO0FBbUhULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGV0YWlsLmpzPzg0OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuZnVuY3Rpb24gRGV0YWlsKHByb3BzKSB7XG4gIGNvbnN0IFtuZXdzRGF0YSwgc2V0TmV3c0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgbmV3cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld3M6IHN0YXRlPy5uZXdzPy5yZXNwb25zZSxcbiAgICB9O1xuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROZXdzRGF0YShuZXdzKTtcbiAgfSwgW10pO1xuXG4gIFxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiAgcHQtMjBcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiXG4gICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICBuZXdzRGF0YT8ubXVsdGltZWRpYVxuICAgICAgICAgICAgICAgID8gbmV3c0RhdGEubXVsdGltZWRpYS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IGBodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtuZXdzRGF0YS5tdWx0aW1lZGlhWzBdLnVybH1gXG4gICAgICAgICAgICAgICAgICA6IFwiL25vSW1hZ2UucG5nXCJcbiAgICAgICAgICAgICAgICA6IFwiL25vSW1hZ2UucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsdD1cIlN1bnNldCBpbiB0aGUgbW91bnRhaW5zXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e25ld3NEYXRhPy5oZWFkbGluZT8ubWFpbn08L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj57bmV3c0RhdGE/LmFic3RyYWN0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNiBwdC00IHBiLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAje25ld3NEYXRhPy5zZWN0aW9uX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAje25ld3NEYXRhPy5uZXdzX2Rlc2t9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAje25ld3NEYXRhPy50eXBlX29mX21hdGVyaWFsfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NJbmZvfSBjbGFzcz1cImZsZXggZmxleC1jb2wgZm9udC1zYW5zIGJvcmRlci1iLXN0b25lLTMwMCBib3JkZXItMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC01IHB4LTYgcHQtNCBwYi00IFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIExlYWQgcGFyYWdyYXBoXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7bmV3c0RhdGE/LmxlYWRfcGFyYWdyYXBoIHx8ICdOL0EnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NJbmZvfSBjbGFzcz1cImZsZXggZmxleC1jb2wgZm9udC1zYW5zIGJvcmRlci1iLXN0b25lLTMwMCBib3JkZXItMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC01IHB4LTYgcHQtNCBwYi00IFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIFB1Ymxpc2ggRGF0ZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAge2Zvck1hdERhdGUobmV3c0RhdGE/LnB1Yl9kYXRlKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NJbmZvfSBjbGFzcz1cImZsZXggZmxleC1jb2wgZm9udC1zYW5zIGJvcmRlci1iLXN0b25lLTMwMCBib3JkZXItMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC01IHB4LTYgcHQtNCBwYi00IFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIE5ld3MgZGVza1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAge25ld3NEYXRhPy5uZXdzX2Rlc2t9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzSW5mb30gY2xhc3M9XCJmbGV4IGZsZXgtY29sIGZvbnQtc2FucyBib3JkZXItYi1zdG9uZS0zMDAgYm9yZGVyLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWluLWgtNSBweC02IHB0LTQgcGItNCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICBEb2N1bWVudCB0eXBlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7bmV3c0RhdGE/LmRvY3VtZW50X3R5cGUgfHwgJ04vQSd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzSW5mb30gY2xhc3M9XCJmbGV4IGZsZXgtY29sIGZvbnQtc2FucyBib3JkZXItYi1zdG9uZS0zMDAgYm9yZGVyLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWluLWgtNSBweC02IHB0LTQgcGItNCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICBTdWJzZWN0aW9uIG5hbWVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIHtuZXdzRGF0YT8uc3Vic2VjdGlvbl9uYW1lIHx8ICdOL0EnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NJbmZvfSBjbGFzcz1cImZsZXggZmxleC1jb2wgZm9udC1zYW5zIGJvcmRlci1iLXN0b25lLTMwMCBib3JkZXItMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtaW4taC01IHB4LTYgcHQtNCBwYi00IFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIFR5cGUgT2YgbWF0ZXJpYWxcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIHtuZXdzRGF0YT8udHlwZV9vZl9tYXRlcmlhbCB8fCAnTi9BJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3R5bGVzIiwiSGVhZGVyIiwidXNlUm91dGVyIiwiRGV0YWlsIiwicHJvcHMiLCJuZXdzRGF0YSIsInNldE5ld3NEYXRhIiwicm91dGVyIiwic3RhdGUiLCJuZXdzIiwicmVzcG9uc2UiLCJjb250YWluZXIiLCJtYWluIiwibXVsdGltZWRpYSIsImxlbmd0aCIsInVybCIsImhlYWRsaW5lIiwic2VjdGlvbl9uYW1lIiwibmV3c19kZXNrIiwidHlwZV9vZl9tYXRlcmlhbCIsIm5ld3NJbmZvIiwibGVmdCIsInJpZ2h0IiwibGVhZF9wYXJhZ3JhcGgiLCJmb3JNYXREYXRlIiwicHViX2RhdGUiLCJkb2N1bWVudF90eXBlIiwic3Vic2VjdGlvbl9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/detail.js\n");

/***/ })

});