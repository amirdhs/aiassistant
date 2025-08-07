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
exports.Et2SelectBitwise = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var Et2SelectBitwise = /** @class */ (function (_super) {
    __extends(Et2SelectBitwise, _super);
    function Et2SelectBitwise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2SelectBitwise;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectBitwise = Et2SelectBitwise;
customElements.define("et2-select-bitwise", Et2SelectBitwise);
