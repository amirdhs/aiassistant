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
exports.Et2SelectState = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var Et2SelectState = /** @class */ (function (_super) {
    __extends(Et2SelectState, _super);
    function Et2SelectState() {
        var _this = _super.call(this) || this;
        _this.countryCode = 'DE';
        return _this;
    }
    Object.defineProperty(Et2SelectState, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { countryCode: String });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SelectState.prototype, "countryCode", {
        get: function () {
            return this.__countryCode;
        },
        set: function (code) {
            var _this = this;
            this.__countryCode = code;
            this.fetchComplete = StaticOptions_1.StaticOptions.state(this, { country_code: code }).then(function (options) {
                _this._static_options = FindSelectOptions_1.cleanSelectOptions(options);
                _this.requestUpdate();
            });
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectState.prototype.set_country_code = function (code) {
        this.countryCode = code;
    };
    return Et2SelectState;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectState = Et2SelectState;
customElements.define("et2-select-state", Et2SelectState);
