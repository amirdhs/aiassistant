"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectNumber = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var Et2SelectNumber = /** @class */ (function (_super) {
    __extends(Et2SelectNumber, _super);
    function Et2SelectNumber() {
        var _this = _super.call(this) || this;
        _this.min = 1;
        _this.max = 10;
        _this.interval = 1;
        _this.leading_zero = "";
        _this.suffix = "";
        return _this;
    }
    Object.defineProperty(Et2SelectNumber, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Step between numbers
                 */
                interval: { type: Number }, min: { type: Number }, max: { type: Number }, 
                /**
                 * Add one or more leading zeros
                 * Set to how many zeros you want (000)
                 */
                leading_zero: { type: String }, 
                /**
                 * Appended after every number
                 */
                suffix: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectNumber.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has('min') || changedProperties.has('max') || changedProperties.has('interval') || changedProperties.has('suffix')) {
            this._static_options = StaticOptions_1.StaticOptions.number(this);
            this.requestUpdate("select_options");
        }
    };
    return Et2SelectNumber;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectNumber = Et2SelectNumber;
customElements.define("et2-select-number", Et2SelectNumber);
