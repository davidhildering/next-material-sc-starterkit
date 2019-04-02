webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var ButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Button__ButtonLink",
  componentId: "sc-12q9o1o-0"
})(["text-decoration:none;"]);
var ButtonLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Button__ButtonLayout",
  componentId: "sc-12q9o1o-1"
})(["padding:10px 8px;font-family:SFProBold,sans-serif;font-size:16px;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;color:#ffffff;background-color:yellowgreen;max-width:", ";border-radius:4px;"], function (props) {
  return props.maxWidth ? props.maxWidth : "200px";
});

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.href ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonLink, {
    to: props.href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonLayout, {
    maxWidth: props.maxWidth
  }, props.title)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonLayout, {
    maxWidth: props.maxWidth
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.f61896ddb814b04ba2bd.hot-update.js.map