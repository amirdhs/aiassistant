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
exports.Et2SelectTimezone = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var Et2SelectTimezone = /** @class */ (function (_super) {
    __extends(Et2SelectTimezone, _super);
    function Et2SelectTimezone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectTimezone.prototype.connectedCallback = function () {
        var _this = this;
        var _a;
        _super.prototype.connectedCallback.call(this);
        this.fetchComplete = StaticOptions_1.StaticOptions.timezone(this, { other: (_a = this.other) !== null && _a !== void 0 ? _a : [] }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    return Et2SelectTimezone;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectTimezone = Et2SelectTimezone;
customElements.define("et2-select-timezone", Et2SelectTimezone);
