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
exports.Et2SelectDayOfWeek = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var Et2SelectDayOfWeek = /** @class */ (function (_super) {
    __extends(Et2SelectDayOfWeek, _super);
    function Et2SelectDayOfWeek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectDayOfWeek.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Wait for connected instead of constructor because attributes make a difference in
        // which options are offered
        this.fetchComplete = StaticOptions_1.StaticOptions.dow(this, { other: this.other || [] }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    Object.defineProperty(Et2SelectDayOfWeek.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (new_value) {
            var _this = this;
            var expanded_value = typeof new_value == "object" ? new_value : [];
            if (new_value && (typeof new_value == "string" || typeof new_value == "number")) {
                var int_value_1 = parseInt(new_value);
                this.updateComplete.then(function () {
                    _this.fetchComplete.then(function () {
                        var options = _this.select_options;
                        for (var index in options) {
                            var right = parseInt(options[index].value);
                            if ((int_value_1 & right) == right) {
                                expanded_value.push("" + right);
                            }
                        }
                        _super.prototype.value = expanded_value;
                    });
                });
                return;
            }
            _super.prototype.value = expanded_value;
        },
        enumerable: false,
        configurable: true
    });
    return Et2SelectDayOfWeek;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectDayOfWeek = Et2SelectDayOfWeek;
customElements.define("et2-select-dow", Et2SelectDayOfWeek);
