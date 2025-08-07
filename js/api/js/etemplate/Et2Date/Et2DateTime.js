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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2DateTime = void 0;
var lit_1 = require("lit");
var Et2Date_1 = require("./Et2Date");
var shortcut_buttons_flatpickr_1 = require("shortcut-buttons-flatpickr/dist/shortcut-buttons-flatpickr");
var Et2DateTime = /** @class */ (function (_super) {
    __extends(Et2DateTime, _super);
    function Et2DateTime() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Et2DateTime, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  :host([focused]) ::slotted(button), :host(:hover) ::slotted(button) {\n\t\t\t\tdisplay: inline-block;\n\t\t\t  }\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tet2-textbox {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tmin-width: 19ex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t  ::slotted(.calendar_button) {\n\t\t\t\tborder: none;\n\t\t\t\tbackground: transparent;\n\t\t\t\tmargin-left: -20px;\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  :host([focused]) ::slotted(button), :host(:hover) ::slotted(button) {\n\t\t\t\tdisplay: inline-block;\n\t\t\t  }\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tet2-textbox {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tmin-width: 19ex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t  ::slotted(.calendar_button) {\n\t\t\t\tborder: none;\n\t\t\t\tbackground: transparent;\n\t\t\t\tmargin-left: -20px;\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateTime, "properties", {
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
    Et2DateTime.prototype.getOptions = function () {
        var _a, _b, _c;
        var options = _super.prototype.getOptions.call(this);
        var dateFormat = (((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.preference("dateformat")) || "Y-m-d");
        var timeFormat = ((((_b = this.egw()) === null || _b === void 0 ? void 0 : _b.preference("timeformat")) || "24") == "24" ? "H:i" : "h:i K");
        options.altFormat = dateFormat + " " + timeFormat;
        options.enableTime = true;
        options.time_24hr = ((_c = this.egw()) === null || _c === void 0 ? void 0 : _c.preference("timeformat", "common")) == "24";
        options.dateFormat = "Y-m-dTH:i:00\\Z";
        options.defaultHour = new Date().getHours();
        return options;
    };
    /**
     * Change handler setting modelValue for validation
     *
     * @returns
     * @param selectedDates
     * @param dateStr
     * @param instance
     */
    Et2DateTime.prototype._updateValueOnChange = function (selectedDates, dateStr, instance) {
        _super.prototype._updateValueOnChange.call(this, selectedDates, dateStr, instance);
        if (!this.freeMinuteEntry && dateStr && instance && instance.config.minuteIncrement > 1) {
            var i = instance.latestSelectedDateObj;
            var d = i ? i : new Date();
            var original = d.getMinutes();
            var bound = Math.round(original / instance.config.minuteIncrement) * instance.config.minuteIncrement;
            if (bound != original) {
                d.setMinutes(bound);
                instance.setDate(d, false);
            }
        }
    };
    /**
     * For mobile, we use a plain input of the proper type
     * @returns {string}
     */
    Et2DateTime.prototype._mobileInputType = function () {
        return "datetime-local";
    };
    Object.defineProperty(Et2DateTime.prototype, "format", {
        get: function () {
            // Mobile is specific about the date format
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
                // Use formatDate() for full control, formatDateTime() will add a space
                return function (date) { return Et2Date_1.formatDate(date, { dateFormat: "Y-m-dTH:i" }); };
            }
            return Et2Date_1.formatDateTime;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add "today" button below calendar
     * @protected
     */
    Et2DateTime.prototype._buttonPlugin = function () {
        return shortcut_buttons_flatpickr_1.default({
            button: [
                { label: this.egw().lang("ok") },
                { label: this.egw().lang("Now") }
            ],
            onClick: this._handleShortcutButtonClick
        });
    };
    /**
     * Handle clicks on scroll buttons
     *
     * @param e
     */
    Et2DateTime.prototype.handleScroll = function (e) {
        if (e.target && !e.target.dataset.direction) {
            return;
        }
        e.stopPropagation();
        var direction = parseInt(e.target.dataset.direction, 10) || 1;
        this.increment(direction * this.getOptions().minuteIncrement, "minute", true);
    };
    return Et2DateTime;
}(Et2Date_1.Et2Date));
exports.Et2DateTime = Et2DateTime;
// @ts-ignore TypeScript is not recognizing that Et2DateTime is a LitElement
customElements.define("et2-date-time", Et2DateTime);
var templateObject_1;
