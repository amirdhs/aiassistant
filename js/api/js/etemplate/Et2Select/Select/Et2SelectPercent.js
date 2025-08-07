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
exports.Et2SelectPercent = void 0;
var Et2SelectNumber_1 = require("./Et2SelectNumber");
var Et2SelectPercent = /** @class */ (function (_super) {
    __extends(Et2SelectPercent, _super);
    function Et2SelectPercent() {
        var _this = _super.call(this) || this;
        _this.min = 0;
        _this.max = 100;
        _this.interval = 10;
        _this.suffix = "%%";
        return _this;
    }
    return Et2SelectPercent;
}(Et2SelectNumber_1.Et2SelectNumber));
exports.Et2SelectPercent = Et2SelectPercent;
customElements.define("et2-select-percent", Et2SelectPercent);
