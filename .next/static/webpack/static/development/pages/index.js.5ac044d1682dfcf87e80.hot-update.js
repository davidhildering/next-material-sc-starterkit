webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TopBanner/index.js":
/*!***************************************!*\
  !*** ./components/TopBanner/index.js ***!
  \***************************************/
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Slider */ "./node_modules/@material-ui/lab/Slider/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Typography */ "./components/Typography/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_13__);














var BannerContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__BannerContainer",
  componentId: "sc-1axod3j-0"
})(["padding:0;background:#ffffff;"]);
var Banner = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__Banner",
  componentId: "sc-1axod3j-1"
})(["position:relative;background:#a8dadc;margin:0 auto;left:0;right:0;height:832px;overflow:hidden;max-width:100%;img{max-width:100%;position:absolute;height:auto;bottom:-60px;}@media only screen and (min-width:1300px){img{bottom:-100px;}}@media only screen and (min-width:550px) and (max-width:768px){img{bottom:-25px;}}"]);
var BannerInfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__BannerInfoBlock",
  componentId: "sc-1axod3j-2"
})(["position:absolute;margin-left:auto;margin-right:auto;left:48px;top:144px;overflow:hidden;max-width:480px;height:400px;@media (min-width:768px) and (max-width:1200px){left:0;}@media only screen and (max-width:768px){position:relative;left:8px;top:80px;}"]);
var BannerWidget = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__BannerWidget",
  componentId: "sc-1axod3j-3"
})(["border:1px solid white;border-radius:8px;width:400px;background:white;position:absolute;margin-left:auto;margin-right:auto;right:80px;top:150px;overflow:hidden;max-width:480px;height:488px;@media (min-width:768px) and (max-width:1200px){right:-25px;}@media only screen and (max-width:330px){max-width:280px;}@media only screen and (max-width:768px){position:relative;left:0;top:-100px;max-width:344px;}"]);
var BannerInfoBlockTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_12__["Header1"]).withConfig({
  displayName: "TopBanner__BannerInfoBlockTitle",
  componentId: "sc-1axod3j-4"
})(["color:black;"]);
var BannerInfoBlockSubTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_12__["Header2"]).withConfig({
  displayName: "TopBanner__BannerInfoBlockSubTitle",
  componentId: "sc-1axod3j-5"
})(["color:black;max-width:350px;"]);
var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__SliderContainer",
  componentId: "sc-1axod3j-6"
})(["display:inline-block;margin:45px 10px 0 10px;height:50px;width:60%;padding:10px;"]);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__ButtonContainer",
  componentId: "sc-1axod3j-7"
})(["width:100%;max-width:200px;position:absolute;bottom:25px;left:25%;"]);

var styles = function styles() {
  return {
    thumb: {
      backgroundColor: "#FFFFFF",
      border: "1px solid",
      width: "20px",
      height: "20px"
    }
  };
};

var OutCome = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "TopBanner__OutCome",
  componentId: "sc-1axod3j-8"
})(["text-align:right;padding-right:62px;padding-top:10px;font-weight:600;font-size:18px;"]);

var TopBanner =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TopBanner, _React$PureComponent);

  function TopBanner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopBanner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TopBanner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      housePrice: 300000,
      mortgage: 200000,
      rentPrice: 1500
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (name) {
      return function (e, value) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopBanner, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          housePrice = _this$state.housePrice,
          mortgage = _this$state.mortgage,
          rentPrice = _this$state.rentPrice;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BannerContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Banner, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://via.placeholder.com/2800x2000/a8dadc"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_13__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BannerInfoBlock, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BannerInfoBlockTitle, null, "Lorum Ipsumk"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BannerInfoBlockSubTitle, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit,")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BannerWidget, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SliderContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorum 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        classes: {
          thumb: classes.thumb
        },
        value: housePrice,
        min: 150000,
        max: 400000,
        step: 20000,
        onChange: this.handleChange("housePrice")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.housePrice), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SliderContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorum 2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        classes: {
          thumb: classes.thumb
        },
        value: mortgage,
        min: 100000,
        max: 350000,
        step: 20000,
        onChange: this.handleChange("mortgage")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.mortgage), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SliderContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorum 3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        classes: {
          thumb: classes.thumb
        },
        value: rentPrice,
        min: 500,
        max: 2500,
        step: 200,
        onChange: this.handleChange("rentPrice")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.rentPrice), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(OutCome, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonContainer, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "CTA make appointment"
      })))))));
    }
  }]);

  return TopBanner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles)(TopBanner));

/***/ })

})
//# sourceMappingURL=index.js.5ac044d1682dfcf87e80.hot-update.js.map