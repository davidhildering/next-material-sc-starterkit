webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animated-burgers */ "./node_modules/react-animated-burgers/lib/index.js");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animated_burgers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scrollchor */ "./node_modules/react-scrollchor/lib/scrollchor.js");
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_10__);











var NavBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NavBar__NavBarContainer",
  componentId: "sc-1hdiovt-0"
})(["background:#ecf5f5;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:end;z-index:999;position:fixed;max-width:1260px;border-bottom:1px solid;@media only screen and (max-width:1060px){background:white;transition:background 150ms ease-in-out;flex-direction:column;width:100%;border-bottom:", ";}"], function (props) {
  return props.isActive ? "1px solid grey" : "none";
});
var HamburgerMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_animated_burgers__WEBPACK_IMPORTED_MODULE_9__["HamburgerSpin"]).withConfig({
  displayName: "NavBar__HamburgerMenu",
  componentId: "sc-1hdiovt-1"
})(["display:none;&:focus{outline:none;}@media only screen and (max-width:1060px){align-self:flex-end;display:initial;cursor:pointer;}"]);
var NavBarItems = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].nav.withConfig({
  displayName: "NavBar__NavBarItems",
  componentId: "sc-1hdiovt-2"
})(["display:flex;font-size:18px;font-family:SFProBold,sans-serif;@media only screen and (max-width:1060px){flex-direction:column;display:", ";padding-left:8px;}"], function (props) {
  return props.isActive ? "flex" : "none";
});
var LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NavBar__LinkTitle",
  componentId: "sc-1hdiovt-3"
})(["padding:16px 24px;color:black;z-index:99999;a{color:black;text-decoration:none;}"]);
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NavBar__LogoContainer",
  componentId: "sc-1hdiovt-4"
})(["flex:auto;img{display:none;width:320px;height:196px;top:-56px;left:8px;position:absolute;@media only screen and (max-width:1200px){left:-32px;}@media only screen and (min-width:1600px){left:152px;}}"]);

var NavBar =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$PureComponent);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isActive: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleButton", function () {
      _this.setState({
        isActive: !_this.state.isActive
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavBarContainer, {
        isActive: this.state.isActive
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HamburgerMenu, {
        isActive: this.state.isActive,
        toggleButton: this.toggleButton
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LogoContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "logo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavBarItems, {
        isActive: this.state.isActive
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        to: "#benefits",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "De voordelen")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        to: "#hoewerkthet",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "Hoe werkt het?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        animate: {
          offset: -100
        },
        to: "#mortgage",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "calculator")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        animate: {
          offset: -100
        },
        to: "#contact",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        to: "#faq",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "Veelgestelde vragen")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkTitle, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scrollchor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        to: "#aboutus",
        afterAnimate: function afterAnimate() {
          return _this2.toggleButton();
        }
      }, "Wie zijn wij")))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.60afa1cdfa79d875acdd.hot-update.js.map