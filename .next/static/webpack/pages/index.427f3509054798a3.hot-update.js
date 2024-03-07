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

/***/ "./components/TokenBalance.js":
/*!************************************!*\
  !*** ./components/TokenBalance.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n//INTERNAL IMPORT\n\n\nvar TokenBalance = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref3[0], setTxPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var bal, fBal;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_utils_context__WEBPACK_IMPORTED_MODULE_4__.getTokenBalance)(name, walletAddress)\n                        ];\n                    case 1:\n                        bal = _state.sent();\n                        console.log(bal);\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString());\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var address;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_utils_context__WEBPACK_IMPORTED_MODULE_4__.getTokenAddress)(name)\n                        ];\n                    case 1:\n                        address = _state.sent();\n                        setTokenAddress(address);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-zinc-900 text-zinc300 w-fit p-2 px-3 rounded-l-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100\",\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer\",\n                    onClick: function() {\n                        navigator.clipboard.writeText(tokenAddress);\n                        setCopyIcon({\n                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ClipboardCheckIcon\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TransactionStatus, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                lineNumber: 66,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\G15-5511\\\\Desktop\\\\Uniswap 2.0\\\\components\\\\TokenBalance.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(TokenBalance, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = TokenBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenBalance);\nvar _c;\n$RefreshReg$(_c, \"TokenBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rva2VuQmFsYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMkQ7QUFDM0I7QUFDaUI7QUFLZjtBQUVsQyxpQkFBaUI7QUFDMkI7QUFLbEI7QUFFMUIsSUFBTWMsWUFBWSxHQUFHLGdCQUE2QjtRQUExQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGFBQWEsU0FBYkEsYUFBYTs7SUFDekMsSUFBOEJkLEdBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBcENlLE9BQU8sR0FBZ0JmLEdBQWEsR0FBN0IsRUFBRWdCLFVBQVUsR0FBSWhCLEdBQWEsR0FBakI7SUFDMUIsSUFBd0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ2lCLFlBQVksR0FBcUJqQixJQUFVLEdBQS9CLEVBQUVrQixlQUFlLEdBQUlsQixJQUFVLEdBQWQ7SUFFcEMsSUFBZ0NBLElBQWlDLEdBQWpDQSwrQ0FBUSxDQUFDO1FBQUVtQixJQUFJLEVBQUVkLG1FQUFhO0tBQUUsQ0FBQyxFQUExRGUsUUFBUSxHQUFpQnBCLElBQWlDLEdBQWxELEVBQUVxQixXQUFXLEdBQUlyQixJQUFpQyxHQUFyQztJQUU1QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ3NCLFNBQVMsR0FBa0J0QixJQUFlLEdBQWpDLEVBQUV1QixZQUFZLEdBQUl2QixJQUFlLEdBQW5CO0lBRTlCLElBQU13QixXQUFXLEdBQUcsU0FBQ0MsR0FBRztlQUFLdEIsNkRBQVcsQ0FBQ3NCLEdBQUcsRUFBRTtZQUFFRSxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FBQTtJQUNqRSxJQUFNQyxhQUFhLEdBQUc7ZUFBTXpCLCtEQUFhLENBQUMsd0JBQXdCLENBQUM7S0FBQTtJQUVuRUosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWMsSUFBSSxJQUFJQyxhQUFhLEVBQUU7WUFDekJnQixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RCLE9BQU9mLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDLEVBQUU7UUFBQ0gsSUFBSTtRQUFFQyxhQUFhO0tBQUMsQ0FBQyxDQUFDO2FBRVhnQixpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLCtGQUFtQztnQkFDM0JFLEdBQUcsRUFFSEMsSUFBSTs7Ozt3QkFGRTs7NEJBQU12QiwrREFBZSxDQUFDRyxJQUFJLEVBQUVDLGFBQWEsQ0FBQzswQkFBQTs7d0JBQWhEa0IsR0FBRyxHQUFHLGFBQTBDO3dCQUN0REUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO3dCQUNYQyxJQUFJLEdBQUcvQiw0REFBd0IsQ0FBQzhCLEdBQUcsQ0FBQ00sUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQzFEdEIsVUFBVSxDQUFDaUIsSUFBSSxDQUFDSyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7UUFDOUIsQ0FBQztlQUxjUixrQkFBaUI7O2FBT2pCQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLCtGQUFtQztnQkFDM0JRLE9BQU87Ozs7d0JBQUc7OzRCQUFNOUIsK0RBQWUsQ0FBQ0ksSUFBSSxDQUFDOzBCQUFBOzt3QkFBckMwQixPQUFPLEdBQUcsYUFBMkI7d0JBQzNDckIsZUFBZSxDQUFDcUIsT0FBTyxDQUFDLENBQUM7Ozs7OztRQUMzQixDQUFDO2VBSGNSLGtCQUFpQjs7SUFLaEMscUJBQ0UsOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdFQUFnRTs7MEJBQzdFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0VBQXdFOztrQ0FDckYsOERBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyxTQUFTO2tDQUFFNUIsSUFBSTs7Ozs7NkJBQUs7a0NBQ2pDLDhEQUFDNkIsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLHNEQUFzRDtrQ0FBRTFCLE9BQU87Ozs7OzZCQUFLOzs7Ozs7cUJBQzdFOzBCQUdOLDhEQUFDeUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNEQUFzRDswQkFDbkUsNEVBQUNyQixRQUFRLENBQUNELElBQUk7b0JBQ1pzQixTQUFTLEVBQUMsb0JBQW9CO29CQUM5QkUsT0FBTyxFQUFFLFdBQU07d0JBQ2JDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUM3QixZQUFZLENBQUMsQ0FBQzt3QkFDNUNJLFdBQVcsQ0FBQzs0QkFBRUYsSUFBSSxFQUFFYix3RUFBa0I7eUJBQUUsQ0FBQyxDQUFDO29CQUM1QyxDQUFDOzs7Ozt5QkFDRDs7Ozs7cUJBQ0U7WUFFTGdCLFNBQVMsa0JBQUksOERBQUNkLHFEQUFpQjs7OztxQkFBRzswQkFFbkMsOERBQUNKLG9EQUFPOzs7O3FCQUFHOzs7Ozs7YUFDUCxDQUNOO0FBRUosQ0FBQztHQXRES1EsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBd0RsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9rZW5CYWxhbmNlLmpzPzIwYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQge1xyXG4gIENsaXBib2FyZEljb24sXHJcbiAgQ2xpcGJvYXJkQ2hlY2tJY29uLFxyXG4gIFBsdXNJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbi8vSU5URVJOQUwgSU1QT1JUXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRUb2tlbkFkZHJlc3MsXHJcbiAgZ2V0VG9rZW5CYWxhbmNlLFxyXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBUb2tlbkJhbGFuY2UgPSAoeyBuYW1lLCB3YWxsZXRBZGRyZXNzIH0pID0+IHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIi1cIik7XHJcbiAgY29uc3QgW3Rva2VuQWRkcmVzcywgc2V0VG9rZW5BZGRyZXNzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Q29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG5cclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIENvbXBsZXRlZC5cIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5CYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0QmFsYW5jZShcIi1cIik7XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWwgPSBhd2FpdCBnZXRUb2tlbkJhbGFuY2UobmFtZSwgd2FsbGV0QWRkcmVzcyk7XHJcbiAgICBjb25zb2xlLmxvZyhiYWwpO1xyXG4gICAgY29uc3QgZkJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWwudG9TdHJpbmcoKSwgMTgpO1xyXG4gICAgc2V0QmFsYW5jZShmQmFsLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgc2V0VG9rZW5BZGRyZXNzKGFkZHJlc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC0yIGJvcmRlci1bMXB4XSByb3VuZGVkLWwgcm91bmRlZC1yLWxnIGJvcmRlci1bIzc3NjVGM11cIiA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctemluYy05MDAgdGV4dC16aW5jMzAwIHctZml0IHAtMiBweC0zIHJvdW5kZWQtbC1sZ1wiID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHAtMC41IHB4LTMgbWwtMyByb3VuZGVkLWxnIHRleHQtemluYy0xMDBcIj57YmFsYW5jZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBweC0yIGJnLVsjNzc2NUYzXSByb3VuZGVkLXItbGdcIj5cclxuICAgICAgICA8Y29weUljb24uaWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC02IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodG9rZW5BZGRyZXNzKTtcclxuICAgICAgICAgICAgc2V0Q29weUljb24oeyBpY29uOiBDbGlwYm9hcmRDaGVja0ljb24gfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3R4UGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XHJcblxyXG4gICAgICA8VG9hc3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkJhbGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZXRoZXJzIiwidG9hc3QiLCJUb2FzdGVyIiwiQ2xpcGJvYXJkSWNvbiIsIkNsaXBib2FyZENoZWNrSWNvbiIsIlBsdXNJY29uIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsIlRva2VuQmFsYW5jZSIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJhbGFuY2UiLCJmZXRjaFRva2VuQWRkcmVzcyIsImJhbCIsImZCYWwiLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiYWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TokenBalance.js\n"));

/***/ })

});