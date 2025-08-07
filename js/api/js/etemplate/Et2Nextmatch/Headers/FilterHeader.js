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
exports.Et2FilterHeader = void 0;
var Et2Select_1 = require("../../Et2Select/Et2Select");
var FilterMixin_1 = require("./FilterMixin");
/**
 * Filter from a provided list of options
 */
var Et2FilterHeader = /** @class */ (function (_super) {
    __extends(Et2FilterHeader, _super);
    function Et2FilterHeader() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.hoist = true;
        _this.clearable = true;
        return _this;
    }
    return Et2FilterHeader;
}(FilterMixin_1.FilterMixin(Et2Select_1.Et2Select)));
exports.Et2FilterHeader = Et2FilterHeader;
customElements.define("et2-nextmatch-header-filter", Et2FilterHeader);
