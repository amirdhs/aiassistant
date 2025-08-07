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
exports.Et2SelectTab = void 0;
var Et2SelectApp_1 = require("./Et2SelectApp");
var Et2SelectTab = /** @class */ (function (_super) {
    __extends(Et2SelectTab, _super);
    function Et2SelectTab() {
        var _this = _super.call(this) || this;
        _this.allowFreeEntries = true;
        return _this;
    }
    Object.defineProperty(Et2SelectTab.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (new_value) {
            var _this = this;
            if (!new_value) {
                _super.prototype.value = new_value;
                return;
            }
            var values = Array.isArray(new_value) ? new_value : [new_value];
            var options = this.select_options;
            values.forEach(function (value) {
                if (!options.filter(function (option) { return option.value == value; }).length) {
                    var matches_1 = value.match(/^([a-z0-9]+)\-/i);
                    var option = { value: value, label: value };
                    if (matches_1) {
                        option = options.filter(function (option) { return option.value == matches_1[1]; })[0] || {
                            value: value,
                            label: _this.egw().lang(matches_1[1])
                        };
                        option.value = value;
                        option.label += ' ' + _this.egw().lang('Tab');
                    }
                    try {
                        var app = opener === null || opener === void 0 ? void 0 : opener.framework.getApplicationByName(value);
                        if (app && app.displayName) {
                            option.label = app.displayName;
                        }
                    }
                    catch (e) {
                        // ignore security exception, if opener is not accessible
                    }
                    _this.select_options.concat(option);
                }
            });
            _super.prototype.value = new_value;
        },
        enumerable: false,
        configurable: true
    });
    return Et2SelectTab;
}(Et2SelectApp_1.Et2SelectApp));
exports.Et2SelectTab = Et2SelectTab;
customElements.define("et2-select-tab", Et2SelectTab);
