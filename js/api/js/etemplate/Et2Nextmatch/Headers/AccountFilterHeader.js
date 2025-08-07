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
exports.Et2AccountFilterHeader = void 0;
var Et2SelectAccount_1 = require("../../Et2Select/Select/Et2SelectAccount");
var FilterMixin_1 = require("./FilterMixin");
/**
 * Filter by account
 */
var Et2AccountFilterHeader = /** @class */ (function (_super) {
    __extends(Et2AccountFilterHeader, _super);
    function Et2AccountFilterHeader() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.hoist = true;
        _this.clearable = true;
        return _this;
    }
    return Et2AccountFilterHeader;
}(FilterMixin_1.FilterMixin(Et2SelectAccount_1.Et2SelectAccount)));
exports.Et2AccountFilterHeader = Et2AccountFilterHeader;
customElements.define("et2-nextmatch-header-account", Et2AccountFilterHeader);
