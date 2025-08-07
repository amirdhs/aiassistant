"use strict";
/**
 * EGroupware eTemplate2 - Readonly time since WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Et2DateSince = void 0;
var lit_1 = require("lit");
var Et2Date_1 = require("./Et2Date");
var Et2DateReadonly_1 = require("./Et2DateReadonly");
/**
 * Formatter for time since widget.
 *
 * @param {Date} date
 * @returns {string}
 */
var formatDate = function (date, options) {
    if (options === void 0) { options = { units: "YmdHis" }; }
    var unit2label = {
        'Y': 'years',
        'm': 'month',
        'd': 'days',
        'H': 'hours',
        'i': 'minutes',
        's': 'seconds'
    };
    var unit2s = {
        'Y': 31536000,
        'm': 2628000,
        'd': 86400,
        'H': 3600,
        'i': 60,
        's': 1
    };
    var d = new Date();
    var diff = Math.round(d.valueOf() / 1000) - Math.round(date.valueOf() / 1000 + egw.getTimezoneOffset() * 60);
    var display = '';
    // limit units used to display
    var smallest = 's';
    if (options.units) {
        var valid = Object.entries(unit2s).filter(function (e) { return options.units.includes(e[0]); });
        unit2s = Object.fromEntries(valid);
        smallest = (valid.pop() || [])[0];
    }
    for (var unit in unit2s) {
        var unit_s = unit2s[unit];
        if (diff >= unit_s || unit === smallest) {
            display = Math.round(diff / unit_s) + ' ' + this.egw().lang(unit2label[unit]);
            break;
        }
    }
    return display;
};
/**
 * Displays the elapsed time since the given date
 *
 * The time units (years, months, days, etc) will be calculated automatically to best match the
 * time scale being dealt with, unless the units property is set.
 *
 * This is a stripped-down read-only widget used in nextmatch
 */
var Et2DateSince = /** @class */ (function (_super) {
    __extends(Et2DateSince, _super);
    function Et2DateSince() {
        var _this = _super.call(this) || this;
        _this.parser = Et2Date_1.parseDateTime;
        _this.formatter = formatDate;
        return _this;
    }
    Object.defineProperty(Et2DateSince, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Allowed display units, default 'YmdHis', e.g. 'd' to display a value only in days"
                 */
                units: { type: String, reflect: true } });
        },
        enumerable: false,
        configurable: true
    });
    Et2DateSince.prototype.set_value = function (value) {
        this.value = value;
    };
    Et2DateSince.prototype.render = function () {
        var parsed = this.value ? this.parser(this.value) : false;
        // Be more forgiving if time is missing
        if (!parsed && this.value) {
            parsed = Et2Date_1.parseDate(this.value) || false;
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <span ", "\n                  datetime=\"", "\">\n                ", "\n            </span>\n\t\t"], ["\n            <span ", "\n                  datetime=\"", "\">\n                ", "\n            </span>\n\t\t"])), this.id ? lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["id=\"", "\""], ["id=\"", "\""])), this._dom_id) : '', parsed ? parsed.toJSON() : "", this.value ? this.formatter(parsed, { units: this.units }) : '');
    };
    Et2DateSince.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "value", "class");
    };
    Et2DateSince.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2DateSince.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        // Do nothing, since we can't actually stop being a DOM node...
    };
    return Et2DateSince;
}(Et2DateReadonly_1.Et2DateReadonly));
exports.Et2DateSince = Et2DateSince;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-date-since", Et2DateSince);
var templateObject_1, templateObject_2;
