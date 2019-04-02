webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MortgageCalculator/index.js":
/*!************************************************!*\
  !*** ./components/MortgageCalculator/index.js ***!
  \************************************************/
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
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Wrapper */ "./components/Wrapper/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Typography */ "./components/Typography/index.js");
/* harmony import */ var _static_incomeQuote_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/incomeQuote.json */ "./static/incomeQuote.json");
var _static_incomeQuote_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/incomeQuote.json */ "./static/incomeQuote.json", 1);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__);














var Benefit = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "MortgageCalculator__Benefit",
  componentId: "nygd7e-0"
})(["width:100%;margin:24px 0;background:#ffffff;padding:40px;text-align:center;display:flex;justify-content:space-between;flex-direction:column;height:400px;border-radius:16px;box-sizing:border-box;img{padding:16px 0;width:80px;}"]);

var MortgageCalculator =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MortgageCalculator, _React$PureComponent);

  function MortgageCalculator() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MortgageCalculator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MortgageCalculator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      income: "",
      maxMortgage: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        income: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculateMaxMortgage", function () {
      var income = Math.round(_this.state.income / 1000 * 2) / 2;
      var quoteObject = {};
      var obj = _static_incomeQuote_json__WEBPACK_IMPORTED_MODULE_12__.find(function (o) {
        return o.income === income;
      });

      if (!obj && income > 110) {
        quoteObject = {
          income: income,
          quote: 0.25
        };
      } else if (!obj && income < 21) {
        quoteObject = {
          income: income,
          quote: 0.13
        };
      } else if (!obj) {
        income = income + 0.5;
        quoteObject = _static_incomeQuote_json__WEBPACK_IMPORTED_MODULE_12__.find(function (o) {
          return o.income === income;
        });
      } else {
        quoteObject = obj;
      }

      var maxMortgage = quoteObject.income * 1000 * quoteObject.quote * 15;

      _this.setMaxMortgage(maxMortgage);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setMaxMortgage", function (maxMortgage) {
      _this.setState({
        maxMortgage: maxMortgage
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MortgageCalculator, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
        id: "mortgage",
        color: "#ecf5f5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_11__["Header4"], null, "Lorum Calculator"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_11__["Header5"], null, "Calculate max outcome"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Benefit, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "standard-textarea",
        label: "enter income",
        placeholder: "70000",
        margin: "normal",
        type: "number",
        value: this.state.income,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.calculateMaxMortgage
      }, "calculate"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Benefit, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_11__["Paragraph"], null, "outcome"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_11__["Paragraph"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, this.state.maxMortgage)))))));
    }
  }]);

  return MortgageCalculator;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (MortgageCalculator);

/***/ })

})
//# sourceMappingURL=index.js.3c97100a238ae259a195.hot-update.js.map