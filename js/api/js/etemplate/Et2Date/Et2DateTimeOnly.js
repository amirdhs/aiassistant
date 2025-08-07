"use strict";
/**
 * EGroupware eTemplate2 - Date+Time widget (WebComponent)
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2DateTimeOnly = void 0;
var Et2DateTime_1 = require("./Et2DateTime");
var Et2Date_1 = require("./Et2Date");
var Et2DateTimeOnly = /** @class */ (function (_super) {
    __extends(Et2DateTimeOnly, _super);
    function Et2DateTimeOnly() {
        return _super.call(this) || this;
        // Configure flatpickr
    }
    Object.defineProperty(Et2DateTimeOnly, "styles", {
        get: function () {
            return __spreadArrays(_super.styles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateTimeOnly, "properties", {
        get: function () {
            return __assign({}, _super.properties);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Override some flatpickr defaults to get things how we like it
     *
     * @see https://flatpickr.js.org/options/
     * @returns {any}
     */
    Et2DateTimeOnly.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        var timeFormat = ((window.egw.preference("timeformat") || "24") == "24" ? "H:i" : "h:i K");
        options.altFormat = timeFormat;
        options.noCalendar = true;
        options.dateFormat = "1970-01-01TH:i:00\\Z";
        // Time only does not have year & month, which scrollPlugin blindly tries to use
        // This causes an error and interrupts the initialization
        options.plugins.push(function (instance) {
            return {
                onReady: function () {
                    this.yearElements = [];
                    this.monthElements = [];
                }
            };
        });
        return options;
    };
    /**
     * For mobile, we use a plain input of the proper type
     * @returns {string}
     */
    Et2DateTimeOnly.prototype._mobileInputType = function () {
        return "time";
    };
    Object.defineProperty(Et2DateTimeOnly.prototype, "format", {
        get: function () {
            // Mobile is specific about the date format
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
                return function (date) { return Et2Date_1.formatDate(date, { dateFormat: "H:i" }); };
            }
            return _super.prototype.format;
        },
        enumerable: false,
        configurable: true
    });
    Et2DateTimeOnly.prototype.set_value = function (value) {
        var _this = this;
        var adjustedValue = '';
        if (!value || value == 0 || value == "0") {
            value = '';
        }
        var date = new Date(value);
        if (typeof egwIsMobile == "function" && egwIsMobile()) {
            date = new Date(value);
            if (this._inputNode) {
                this._inputNode.value = isNaN(date) ? "" : this.format(date);
            }
            else {
                this.updateComplete.then(function () {
                    _this._inputNode.value = isNaN(date) ? "" : _this.format(date);
                });
            }
            return;
        }
        // Handle timezone offset, flatpickr uses local time
        if (value) {
            adjustedValue = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
            adjustedValue.setDate(1);
            adjustedValue.setMonth(0);
            adjustedValue.setFullYear(1970);
        }
        if (!this._instance) {
            this.defaultDate = adjustedValue;
        }
        else {
            this.setDate(adjustedValue);
        }
    };
    return Et2DateTimeOnly;
}(Et2DateTime_1.Et2DateTime));
exports.Et2DateTimeOnly = Et2DateTimeOnly;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-date-timeonly", Et2DateTimeOnly);
