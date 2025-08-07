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
exports.Et2SelectBool = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var Et2SelectBool = /** @class */ (function (_super) {
    __extends(Et2SelectBool, _super);
    function Et2SelectBool() {
        var _this = _super.call(this) || this;
        _this._static_options = StaticOptions_1.StaticOptions.bool(_this);
        return _this;
    }
    Object.defineProperty(Et2SelectBool.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        /**
         * Boolean option values are "0" and "1", so change boolean to those
         * @param {string | string[]} new_value
         */
        set: function (new_value) {
            _super.prototype.value = new_value ? "1" : "0";
        },
        enumerable: false,
        configurable: true
    });
    return Et2SelectBool;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectBool = Et2SelectBool;
customElements.define("et2-select-bool", Et2SelectBool);
