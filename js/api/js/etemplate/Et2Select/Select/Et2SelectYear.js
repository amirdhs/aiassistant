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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectYear = void 0;
var Et2SelectNumber_1 = require("./Et2SelectNumber");
var StaticOptions_1 = require("../StaticOptions");
var Et2SelectYear = /** @class */ (function (_super) {
    __extends(Et2SelectYear, _super);
    function Et2SelectYear() {
        var _this = _super.call(this) || this;
        _this.min = -3;
        _this.max = 2;
        return _this;
    }
    Et2SelectYear.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has('min') || changedProperties.has('max') || changedProperties.has('interval') || changedProperties.has('suffix')) {
            this._static_options = StaticOptions_1.StaticOptions.year(this);
        }
    };
    return Et2SelectYear;
}(Et2SelectNumber_1.Et2SelectNumber));
exports.Et2SelectYear = Et2SelectYear;
customElements.define("et2-select-year", Et2SelectYear);
