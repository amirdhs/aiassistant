"use strict";
/**
 * EGroupware eTemplate2 - Date widget (WebComponent)
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Date = exports.formatDateTime = exports.formatTime = exports.formatDate = exports.parseDateTime = exports.parseTime = exports.parseDate = void 0;
var lit_1 = require("lit");
require("lit-flatpickr");
var DateStyles_1 = require("./DateStyles");
var scrollPlugin_js_1 = require("flatpickr/dist/plugins/scrollPlugin.js");
var shortcut_buttons_flatpickr_js_1 = require("shortcut-buttons-flatpickr/dist/shortcut-buttons-flatpickr.js");
var flatpickr_1 = require("flatpickr");
var egw_global_1 = require("../../jsapi/egw_global");
var lit_flatpickr_1 = require("lit-flatpickr");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var shoelace_1 = require("../Styles/shoelace");
var class_map_js_1 = require("lit/directives/class-map.js");
// list of existing localizations from node_modules/flatpicker/dist/l10n directory:
var l10n = [
    'ar', 'at', 'az', 'be', 'bg', 'bn', 'bs', 'cat', 'cs', 'cy', 'da', 'de', 'eo', 'es', 'et', 'fa', 'fi', 'fo',
    'fr', 'ga', 'gr', 'he', 'hi', 'hr', 'hu', 'id', 'index', 'is', 'it', 'ja', 'ka', 'km', 'ko', 'kz', 'lt', 'lv', 'mk',
    'mn', 'ms', 'my', 'nl', 'no', 'pa', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr-cyr', 'sr', 'sv', 'th', 'tr',
    'uk', 'uz', 'uz_latn', 'vn', 'zh-tw', 'zh',
];
var lang = egw_global_1.egw && egw_global_1.egw.preference ? egw_global_1.egw.preference('lang') || "" : "";
// only load localization, if we have one
if (l10n.indexOf(lang) >= 0) {
    Promise.resolve().then(function () { return require(egw_global_1.egw.webserverUrl + "/node_modules/flatpickr/dist/l10n/" + lang + ".js"); }).then(function () {
        // @ts-ignore
        flatpickr_1.default.localize(flatpickr_1.default.l10ns[lang]);
    });
}
/**
 * Parse a date string into a Date object
 * Time will be 00:00:00 UTC
 *
 * @param {string} dateString
 * @returns {Date | undefined}
 */
function parseDate(dateString, formatString) {
    // First try the server format
    if (dateString.substr(-1) === "Z") {
        try {
            var date_1 = new Date(dateString);
            if (date_1 instanceof Date) {
                return date_1;
            }
        }
        catch (e) {
            // Nope, that didn't parse directly
        }
    }
    formatString = formatString || (window.egw.preference("dateformat") || 'Y-m-d');
    //@ts-ignore replaceAll() does not exist
    formatString = formatString.replaceAll(new RegExp('[-/\.]', 'ig'), '-');
    var parsedString = "";
    switch (formatString) {
        case 'd-m-Y':
            parsedString = dateString.slice(6, 10) + "/" + dateString.slice(3, 5) + "/" + dateString.slice(0, 2);
            break;
        case 'm-d-Y':
            parsedString = dateString.slice(6, 10) + "/" + dateString.slice(0, 2) + "/" + dateString.slice(3, 5);
            break;
        case 'Y-m-d':
            parsedString = dateString.slice(0, 4) + "/" + dateString.slice(5, 7) + "/" + dateString.slice(8, 10);
            break;
        case 'Y-d-m':
            parsedString = dateString.slice(0, 4) + "/" + dateString.slice(8, 10) + "/" + dateString.slice(5, 7);
            break;
        case 'd-M-Y':
            parsedString = dateString.slice(6, 10) + "/" + dateString.slice(3, 5) + "/" + dateString.slice(0, 2);
            break;
        case 'Ymd':
            // Not a preference option, but used by some dates
            parsedString = dateString.slice(0, 4) + "/" + dateString.slice(4, 6) + "/" + dateString.slice(6, 8);
            break;
        default:
            parsedString = '0000/00/00';
    }
    var _a = parsedString.split('/').map(Number), year = _a[0], month = _a[1], day = _a[2];
    var parsedDate = new Date(year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day) + "T00:00:00Z");
    // Check if parsedDate is not `Invalid Date` or that the date has changed (e.g. the not existing 31.02.2020)
    if (year > 0 &&
        month > 0 &&
        day > 0 &&
        parsedDate.getUTCDate() === day &&
        parsedDate.getUTCMonth() === month - 1) {
        return parsedDate;
    }
    return undefined;
}
exports.parseDate = parseDate;
/**
 * To parse a time into a Date object
 * Date will be 1970-01-01, time is in UTC to avoid browser issues
 *
 * @param {string} timeString
 * @returns {Date | undefined}
 */
function parseTime(timeString) {
    // First try the server format
    if (timeString.substr(-1) === "Z") {
        try {
            var date_2 = new Date(timeString);
            if (date_2 instanceof Date) {
                return date_2;
            }
        }
        catch (e) {
            // Nope, that didn't parse directly
        }
    }
    var am_pm = timeString.endsWith("pm") || timeString.endsWith("PM") ? 12 : 0;
    var strippedString = timeString.replaceAll(/[^0-9:]/gi, '');
    if (timeString.startsWith("12") && strippedString != timeString) {
        // 12:xx am -> 0:xx, 12:xx pm -> 12:xx
        am_pm -= 12;
    }
    var _a = strippedString.split(':').map(Number), hour = _a[0], minute = _a[1];
    var parsedDate = new Date("1970-01-01T00:00:00Z");
    parsedDate.setUTCHours(hour + am_pm);
    parsedDate.setUTCMinutes(minute);
    // Check if parsedDate is not `Invalid Date` or that the time has changed
    if (parsedDate.getUTCHours() === hour + am_pm &&
        parsedDate.getUTCMinutes() === minute) {
        return parsedDate;
    }
    return undefined;
}
exports.parseTime = parseTime;
/**
 * To parse a date+time into an object
 * Time is in UTC to avoid browser issues
 *
 * @param {string} dateTimeString
 * @returns {Date | undefined}
 */
function parseDateTime(dateTimeString) {
    // First try some common invalid values
    if (dateTimeString === "" || dateTimeString === "0" || dateTimeString === 0) {
        return undefined;
    }
    // Next try server format
    if (typeof dateTimeString === "string" && dateTimeString.substr(-1) === "Z" || !isNaN(dateTimeString)) {
        if (!isNaN(dateTimeString) && parseInt(dateTimeString) == dateTimeString) {
            console.warn("Invalid date/time string: " + dateTimeString);
            dateTimeString *= 1000;
        }
        try {
            var date_3 = new Date(dateTimeString);
            if (date_3 instanceof Date) {
                return date_3;
            }
        }
        catch (e) {
            // Nope, that didn't parse directly
        }
    }
    var date = parseDate(dateTimeString);
    var explody = dateTimeString.split(" ");
    explody.shift();
    var time = parseTime(explody.join(" "));
    if (typeof date === "undefined" || typeof time === "undefined") {
        return undefined;
    }
    date.setUTCHours(time.getUTCHours());
    date.setUTCMinutes(time.getUTCMinutes());
    date.setUTCSeconds(time.getUTCSeconds());
    return date;
}
exports.parseDateTime = parseDateTime;
/**
 * Format dates according to user preference
 *
 * @param {Date} date
 * @param [options] Intl options are available
 * 	set 'dateFormat': "Y-m-d" to specify a particular format
 * @returns {string}
 */
function formatDate(date, options) {
    if (options === void 0) { options = { dateFormat: "" }; }
    if (!date || !(date instanceof Date)) {
        return "";
    }
    var _value = '';
    var dateformat = options.dateFormat || window.egw.preference("dateformat") || 'Y-m-d';
    var replace_map = {
        d: (date.getUTCDate() < 10 ? "0" : "") + date.getUTCDate(),
        m: (date.getUTCMonth() < 9 ? "0" : "") + (date.getUTCMonth() + 1),
        Y: "" + date.getUTCFullYear(),
        H: ("0" + date.getUTCHours()).slice(-2),
        i: ("0" + date.getUTCMinutes()).slice(-2)
    };
    if (dateformat.indexOf("M") != -1) {
        replace_map["M"] = flatpickr_1.default.formatDate(date, "M");
    }
    var re = new RegExp(Object.keys(replace_map).join("|"), "g");
    _value = dateformat.replace(re, function (matched) {
        return replace_map[matched];
    });
    return _value;
}
exports.formatDate = formatDate;
/**
 * Format dates according to user preference
 *
 * @param {Date} date
 * @param  [options] Intl options are available
 * 	set 'timeFormat': "12" to specify a particular format
 * @returns {string}
 */
function formatTime(date, options) {
    if (options === void 0) { options = { timeFormat: "" }; }
    if (!date || !(date instanceof Date)) {
        return "";
    }
    var _value = '';
    var timeformat = options.timeFormat || window.egw.preference("timeformat") || "24";
    var hours = (timeformat == "12" && date.getUTCHours() > 12) ? (date.getUTCHours() - 12) : date.getUTCHours();
    if (timeformat == "12" && hours == 0) {
        // 00:00 is 12:00 am
        hours = 12;
    }
    _value = (timeformat == "24" && hours < 10 ? "0" : "") + hours + ":" +
        (date.getUTCMinutes() < 10 ? "0" : "") + (date.getUTCMinutes()) +
        (timeformat == "24" ? "" : (date.getUTCHours() < 12 ? " am" : " pm"));
    return _value;
}
exports.formatTime = formatTime;
/**
 * Format date+time according to user preference
 *
 * @param {Date} date
 * @param {import('@lion/localize/types/LocalizeMixinTypes').FormatDateOptions} [options] Intl options are available
 * 	set 'dateFormat': "Y-m-d", 'timeFormat': "12" to specify a particular format
 * @returns {string}
 */
function formatDateTime(date, options) {
    if (options === void 0) { options = { dateFormat: "", timeFormat: "" }; }
    if (!date || !(date instanceof Date)) {
        return "";
    }
    return formatDate(date, options) + " " + formatTime(date, options);
}
exports.formatDateTime = formatDateTime;
var Et2Date = /** @class */ (function (_super) {
    __extends(Et2Date, _super);
    function Et2Date() {
        var _this = _super.call(this) || this;
        _this._boundTooltipElements = [];
        // By default, 5 minute resolution (see minuteIncrement to change resolution)
        _this.freeMinuteEntry = false;
        _this._onDayCreate = _this._onDayCreate.bind(_this);
        _this._handleInputChange = _this._handleInputChange.bind(_this);
        _this._onReady = _this._onReady.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Date, "styles", {
        get: function () {
            return __spreadArrays((_super.styles ? (Array.isArray(_super.styles) ? _super.styles : [_super.styles]) : []), [
                shoelace_1.default,
                DateStyles_1.dateStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  :host {\n\t\t\t\twidth: auto;\n\t\t\t  }\n\n\t\t\t\t/* Scroll buttons */\n\t\t\t\t.form-control-input {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tdisplay: flex;\n\n\t\t\t\t\tet2-textbox {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tmin-width: 14ex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.form-control-input:hover .et2-date-time__scrollbuttons {\n\t\t\t\tdisplay: flex;\n\t\t\t  }\n\n\t\t\t  .et2-date-time__scrollbuttons {\n\t\t\t\tdisplay: none;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: calc(var(--sl-input-height-medium) / 2);\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 0px;\n\t\t\t\t  margin-inline-end: 0px;\n\t\t\t  }\n\n\t\t\t  .et2-date-time__scrollbuttons > * {\n\t\t\t\tfont-size: var(--sl-font-size-2x-small);\n\t\t\t\theight: calc(var(--sl-input-height-medium) / 2);\n\t\t\t  }\n\t\t\t.et2-date-time__scrollbuttons > *::part(base) {\n\t\t\t\tpadding: 3px;\n\t\t\t}\n            "], ["\n\t\t\t  :host {\n\t\t\t\twidth: auto;\n\t\t\t  }\n\n\t\t\t\t/* Scroll buttons */\n\t\t\t\t.form-control-input {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tdisplay: flex;\n\n\t\t\t\t\tet2-textbox {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tmin-width: 14ex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.form-control-input:hover .et2-date-time__scrollbuttons {\n\t\t\t\tdisplay: flex;\n\t\t\t  }\n\n\t\t\t  .et2-date-time__scrollbuttons {\n\t\t\t\tdisplay: none;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: calc(var(--sl-input-height-medium) / 2);\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 0px;\n\t\t\t\t  margin-inline-end: 0px;\n\t\t\t  }\n\n\t\t\t  .et2-date-time__scrollbuttons > * {\n\t\t\t\tfont-size: var(--sl-font-size-2x-small);\n\t\t\t\theight: calc(var(--sl-input-height-medium) / 2);\n\t\t\t  }\n\t\t\t.et2-date-time__scrollbuttons > *::part(base) {\n\t\t\t\tpadding: 3px;\n\t\t\t}\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Date, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Display the calendar inline instead of revealed as needed
                 */
                inline: { type: Boolean }, 
                /**
                 * Placeholder text for input
                 */
                placeholder: { type: String }, 
                /**
                 * Allow value that is not a multiple of minuteIncrement
                 *
                 * eg: 11:23 with default 5 minuteIncrement = 11:25
                 * 16:47 with 30 minuteIncrement = 17:00
                 * If false (default), it is impossible to have a time that is not a multiple of minuteIncrement.
                 * Does not affect scroll, which always goes to nearest multiple.
                 */
                freeMinuteEntry: { type: Boolean }, 
                /**
                 * The preferred placement of the calendar popup can be set with the placement attribute.  The default
                 * is "auto".  Note that the actual position may vary to ensure the calendar remains in the viewport.
                 * Valid placements are "top", "bottom" or "auto".
                 */
                placement: { type: String, noAccessor: true } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Date.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this._updateValueOnChange = this._updateValueOnChange.bind(this);
        this._handleShortcutButtonClick = this._handleShortcutButtonClick.bind(this);
        this.updateComplete.then(function () {
            _this.init();
        });
    };
    Et2Date.prototype.disconnectedCallback = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        _super.prototype.disconnectedCallback.call(this);
        (_a = this._inputNode) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', this._onChange);
        (_b = this._inputElement) === null || _b === void 0 ? true : delete _b.flatpickr;
        (_c = this.findInputField()) === null || _c === void 0 ? void 0 : _c.removeEventListener("input", this._handleInputChange);
        this._boundTooltipElements.forEach(function (tooltipped) {
            _this.egw().tooltipUnbind(tooltipped);
        });
        this._boundTooltipElements.splice(0, this._boundTooltipElements.length);
        ((_d = this._instance) === null || _d === void 0 ? void 0 : _d.destroy) && this._instance.destroy();
        if (this._instance) {
            (_e = this._inputNode) === null || _e === void 0 ? true : delete _e._flatpickr;
            this._instance = undefined;
        }
    };
    Et2Date.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var more;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        more = _a.sent();
                        if (!this.getOptions().allowInput) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._inputNode.updateComplete];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, more];
                }
            });
        });
    };
    Et2Date.prototype.update = function (changedProperties) {
        var _this = this;
        var _a;
        _super.prototype.update.call(this, changedProperties);
        // Flatpickr puts some inputs we don't have direct control over
        if (changedProperties.has("disabled") && this._inputNode) {
            this._inputNode.disabled = this.disabled;
            if (typeof this._inputNode.requestUpdate == "function") {
                (_a = this._inputNode) === null || _a === void 0 ? void 0 : _a.requestUpdate("disabled");
                this._inputNode.shadowRoot.querySelectorAll("input").forEach(function (i) { return i.disabled = _this.disabled; });
            }
        }
    };
    /**
     * Override parent to skip call to CDN
     * @returns {Promise<void>}
     */
    Et2Date.prototype.init = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var input;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Plain input for mobile
                        if (typeof egwIsMobile == "function" && egwIsMobile()) {
                            return [2 /*return*/];
                        }
                        if (this.locale) {
                            //	await loadLocale(this.locale);
                        }
                        if (!(typeof this._instance === "undefined")) return [3 /*break*/, 4];
                        if (!this.getOptions().allowInput) return [3 /*break*/, 3];
                        // Change this so it uses findInputField() to get the input
                        this._hasSlottedElement = true;
                        // Wait for everything to be there before we start flatpickr
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        // Wait for everything to be there before we start flatpickr
                        _c.sent();
                        (typeof this._inputNode.requestUpdate == "function") && this._inputNode.requestUpdate();
                        return [4 /*yield*/, this._inputNode.updateComplete];
                    case 2:
                        _c.sent();
                        // Set flag attribute on _internal_ input - flatpickr needs an <input>
                        if (((_b = (_a = this._inputNode) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll("input[type='text']").length) == 1) {
                            this.findInputField().setAttribute("data-input", "");
                        }
                        if (this.defaultDate && this._inputNode) {
                            this._inputNode.value = flatpickr_1.default.formatDate(this.defaultDate, this.getOptions().dateFormat);
                        }
                        _c.label = 3;
                    case 3:
                        this.initializeComponent();
                        // This has to go in init() rather than connectedCallback() because flatpickr creates its nodes in
                        // initializeComponent() so this._inputNode is not available before this
                        this.findInputField().addEventListener('change', this._updateValueOnChange);
                        this.findInputField().addEventListener("input", this._handleInputChange);
                        input = this.getInputNode();
                        if (input) {
                            input.ariaLabel = this.ariaLabel || this.placeholder;
                            input.ariaDescription = this.ariaDescription || this.statustext ||
                                this.egw().lang('Format') + ' ' + this.getOptions().altFormat.split('').map(function (c) {
                                    switch (c) {
                                        case 'Y': return _this.egw().lang('Year');
                                        case 'm': return _this.egw().lang('Month');
                                        case 'd': return _this.egw().lang('Day');
                                        case 'h':
                                        case 'H': return _this.egw().lang('Hour');
                                        case 'i': return _this.egw().lang('Minute');
                                        default: return c;
                                    }
                                }).join(' ');
                        }
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Override some flatpickr defaults to get things how we like it
     *
     * @see https://flatpickr.js.org/options/
     * @returns {any}
     */
    Et2Date.prototype.getOptions = function () {
        var _this = this;
        var _a;
        var options = _super.prototype.getOptions.call(this);
        options.altFormat = ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.preference("dateformat")) || "Y-m-d";
        options.altInput = true;
        options.allowInput = true;
        options.dateFormat = "Y-m-dT00:00:00\\Z";
        options.weekNumbers = true;
        // Wrap needs to be false because flatpickr can't look inside et2-textbox and find the <input> it wants
        // We provide it directly through findInputField()
        options.wrap = false;
        options.onDayCreate = this._onDayCreate;
        this._localize(options);
        if (this.inline) {
            options.inline = this.inline;
        }
        if (this.placement) {
            options.position = this._convert_placement(this.placement);
        }
        options.plugins = [
            // Turn on scroll wheel support
            // @ts-ignore TypeScript can't find scrollPlugin, but rollup does
            new scrollPlugin_js_1.default()
        ];
        // Add "Ok" and "today" buttons
        var buttons = this._buttonPlugin();
        if (buttons) {
            options.plugins.push(buttons);
        }
        // Listen for flatpickr change so we can update internal value, needed for validation
        options.onChange = this._updateValueOnChange;
        options.onReady = this._onReady;
        // Remove inert attribute so we can work in Et2Dialog
        options.onOpen = [function () {
                var _a;
                (_a = _this._instance.calendarContainer) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
            }];
        return options;
    };
    /**
     * Handle click on shortcut button(s) like "Today"
     *
     * @param button_index
     * @param fp Flatpickr instance
     */
    Et2Date.prototype._handleShortcutButtonClick = function (button_index, fp) {
        switch (button_index) {
            case 0: // OK
                fp.close();
                break;
            default:
                fp.setDate(new Date());
        }
    };
    /**
     * Set localize options & translations
     * @param options
     * @protected
     */
    Et2Date.prototype._localize = function (options) {
        var _a;
        var first_dow = ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.preference('weekdaystarts', 'calendar')) || 'Monday';
        var DOW_MAP = { Monday: 1, Sunday: 0, Saturday: 6 };
        options.locale = {
            firstDayOfWeek: DOW_MAP[first_dow]
        };
    };
    /**
     * For mobile, we use a plain input of the proper type
     * @returns {string}
     */
    Et2Date.prototype._mobileInputType = function () {
        return "date";
    };
    /**
     * Add "today" button below calendar
     * @protected
     */
    Et2Date.prototype._buttonPlugin = function () {
        // @ts-ignore TypeScript can't find ShortcutButtonsPlugin, but rollup does
        return shortcut_buttons_flatpickr_js_1.default({
            button: [
                { label: this.egw().lang("ok") },
                { label: this.egw().lang("Today") }
            ],
            onClick: this._handleShortcutButtonClick
        });
    };
    Object.defineProperty(Et2Date.prototype, "value", {
        get: function () {
            var _a, _b, _c;
            if (!this._inputElement) {
                if (this.defaultDate) {
                    return flatpickr_1.default.formatDate(this.defaultDate, this.getOptions().dateFormat);
                }
                if (typeof egwIsMobile == "function" && egwIsMobile() && ((_a = this._inputNode) === null || _a === void 0 ? void 0 : _a.value)) {
                    return ((_b = this._inputNode) === null || _b === void 0 ? void 0 : _b.value) + "Z";
                }
                return ((_c = this._inputNode) === null || _c === void 0 ? void 0 : _c.value) || '';
            }
            var value = this._inputElement.value;
            // Empty field, return ''
            if (!value) {
                return '';
            }
            return value;
        },
        set: function (value) {
            var _this = this;
            if (!value || value == 0 || value == "0") {
                value = "";
                this.clear();
                if (typeof egwIsMobile == "function" && egwIsMobile() && this._inputNode) {
                    this._inputNode.value = '';
                }
                return;
            }
            var date;
            // handle relative time (eg. "+3600" or "-3600") used in calendar
            if (typeof value === 'string' && (value[0] === '+' || value[0] === '-')) {
                date = new Date(this.getValue());
                date.setSeconds(date.getSeconds() + parseInt(value));
            }
            else {
                date = new Date(value);
            }
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
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
            var formatDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
            if (!this._instance) {
                this.defaultDate = formatDate;
            }
            else {
                this.setDate(formatDate);
            }
            this.requestUpdate("value", this._oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Date.prototype, "parse", {
        get: function () {
            return parseDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Date.prototype, "format", {
        get: function () {
            // Mobile is specific about the date format, no time allowed
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
                return function (date) { return formatDate(date, { dateFormat: "Y-m-d" }); };
            }
            return formatDate;
        },
        set: function (_format) {
            // ignored, trying to fix TypeError opening a new contact
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Inline calendars need a slot
     *
     * @return {TemplateResult}
     * @protected
     */
    // eslint-disable-next-line class-methods-use-this
    Et2Date.prototype._inputGroupAfterTemplate = function () {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"input-group__after\">\n                <slot name=\"after\"></slot>\n                <slot/>\n            </div>\n\t\t"], ["\n            <div class=\"input-group__after\">\n                <slot name=\"after\"></slot>\n                <slot/>\n            </div>\n\t\t"])));
    };
    /**
     * Update the calendar when the input value changes
     * Otherwise, user's change will be overwritten by calendar popup when the input loses focus
     *
     * @param e
     */
    Et2Date.prototype._handleInputChange = function (e) {
        if (this.disabled || this.getOptions().inline) {
            return;
        }
        // Update
        var value = this.findInputField().value;
        if (value === "" && this._instance.selectedDates.length > 0) {
            // Update the et2-textbox so it will fail a required validation check
            this._inputNode.value = '';
            this._instance.clear();
            this.dispatchEvent(new Event("change", { bubbles: true }));
        }
        var parsedDate = null;
        try {
            parsedDate = this._instance.parseDate(value, this.getOptions().altFormat);
        }
        catch (e) {
            // Invalid date string
        }
        // If they typed a valid date/time, try to update flatpickr
        if (parsedDate) {
            var formattedDate = flatpickr_1.default.formatDate(parsedDate, this.getOptions().altFormat);
            if (value === formattedDate &&
                // Avoid infinite loop of setting the same value back triggering another change
                this._instance.input.value !== flatpickr_1.default.formatDate(parsedDate, this.getOptions().dateFormat)) {
                try {
                    // Can error for time-only due to missing calendar
                    this._instance.setDate(value, true, this._instance.config.altFormat);
                }
                catch (e) {
                    // Just do it again, it works the second time
                    this._instance.setDate(value, true, this._instance.config.altFormat);
                }
            }
            // Update the et2-textbox so it has current value for any (required) validation
            this._inputNode.value = formattedDate;
            // @ts-ignore
            this._inputNode.validate && this._inputNode.validate();
        }
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };
    /**
     * Change handler setting modelValue for validation
     *
     * @param _ev
     * @returns
     */
    Et2Date.prototype._updateValueOnChange = function (selectedDates, dateStr, instance) {
        this.modelValue = this.getValue();
    };
    Et2Date.prototype._onReady = function (selectedDates, dateStr, instance) {
        var _a;
        this._updateValueOnChange(selectedDates, dateStr, instance);
        // Add any classes we have to the instance
        (_a = instance.calendarContainer.classList).add.apply(_a, this.classList.values());
    };
    /**
     * Customise date rendering
     *
     * @see https://flatpickr.js.org/events/
     *
     * @param {Date} dates Currently selected date(s)
     * @param dStr a string representation of the latest selected Date object by the user. The string is formatted as per the dateFormat option.
     * @param inst flatpickr instance
     * @param dayElement
     * @protected
     */
    Et2Date.prototype._onDayCreate = function (dates, dStr, inst, dayElement) {
        var _this = this;
        //@ts-ignore flatpickr adds dateObj to days
        var date = new Date(dayElement.dateObj);
        var f_date = new Date(date.valueOf() - date.getTimezoneOffset() * 60 * 1000);
        if (!f_date) {
            return;
        }
        this.egw().holidays(f_date.getFullYear()).then(function (h) { return _this.set_holiday(f_date, h, dayElement); });
    };
    Et2Date.prototype.set_holiday = function (f_date, holidays, element) {
        var day_holidays = holidays[formatDate(f_date, { dateFormat: "Ymd" })];
        var tooltip = '';
        if (typeof day_holidays !== 'undefined' && day_holidays.length) {
            for (var i = 0; i < day_holidays.length; i++) {
                if (typeof day_holidays[i]['birthyear'] !== 'undefined') {
                    element.classList.add('calBirthday');
                }
                else {
                    element.classList.add('calHoliday');
                }
                tooltip += day_holidays[i]['name'] + "\n";
            }
        }
        if (tooltip) {
            this.egw().tooltipBind(element, tooltip);
            this._boundTooltipElements.push(element);
        }
    };
    /**
     * Set the minimum allowed date
     * @param {string | Date} min
     */
    Et2Date.prototype.set_min = function (min) {
        this.minDate = min;
    };
    Object.defineProperty(Et2Date.prototype, "minDate", {
        set: function (min) {
            if (this._instance) {
                if (min) {
                    // Handle timezone offset, flatpickr uses local time
                    var date_4 = new Date(min);
                    var formatDate_1 = new Date(date_4.valueOf() + date_4.getTimezoneOffset() * 60 * 1000);
                    this._instance.set("minDate", formatDate_1);
                }
                else {
                    this._instance.set("minDate", "");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the minimum allowed date
     * @param {string | Date} max
     */
    Et2Date.prototype.set_max = function (max) {
        this.maxDate = max;
    };
    Object.defineProperty(Et2Date.prototype, "maxDate", {
        set: function (max) {
            if (this._instance) {
                if (max) {
                    // Handle timezone offset, flatpickr uses local time
                    var date_5 = new Date(max);
                    var formatDate_2 = new Date(date_5.valueOf() + date_5.getTimezoneOffset() * 60 * 1000);
                    this._instance.set("maxDate", formatDate_2);
                }
                else {
                    this._instance.set("maxDate", "");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Date.prototype._convert_placement = function (position) {
        var placement = "auto";
        switch (position) {
            case "top":
                placement = "above";
                break;
            case "bottom":
                placement = "below";
                break;
        }
        return placement;
    };
    Object.defineProperty(Et2Date.prototype, "placement", {
        get: function () {
            return this.__placement;
        },
        set: function (new_placement) {
            if (this._instance) {
                this._instance.set("position", this._convert_placement(new_placement));
            }
            this.__placement = new_placement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Override from flatpickr - This is the node we tell flatpickr to use
     * It must be an <input>, flatpickr doesn't understand anything else
     * @returns {any}
     */
    Et2Date.prototype.findInputField = function () {
        var _a, _b;
        return (_b = (_a = this._inputNode) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input:not([type="hidden"])');
    };
    Et2Date.prototype.getInputNode = function () {
        if (typeof egwIsMobile == "function" && egwIsMobile()) {
            return _super.prototype.getInputNode.call(this);
        }
        return this.findInputField();
    };
    Et2Date.prototype.focus = function () {
        var _a;
        if (!(typeof egwIsMobile == "function" && egwIsMobile())) {
            this.open();
        }
        (_a = this.getInputNode()) === null || _a === void 0 ? void 0 : _a.focus();
    };
    Object.defineProperty(Et2Date.prototype, "_inputNode", {
        /**
         * The interactive (form) element.
         * This is an et2-textbox, which causes some problems with flatpickr
         * @protected
         */
        get: function () {
            var _a, _b;
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
                return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("input[type='" + this._mobileInputType() + "']");
            }
            else {
                return (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('et2-textbox');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Date.prototype, "_valueNode", {
        /**
         * The holder of value for flatpickr
         */
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('et2-textbox');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle clicks on scroll buttons
     *
     * @param e
     */
    Et2Date.prototype.handleScroll = function (e) {
        if (e.target && !e.target.dataset.direction) {
            return;
        }
        e.stopPropagation();
        var direction = parseInt(e.target.dataset.direction, 10) || 1;
        this.increment(direction, "day", true);
    };
    /**
     * Increment the current value
     *
     * @param {number} delta Amount of change, positive or negative
     * @param {"day" | "hour" | "minute"} field
     * @param {boolean} roundToDelta Round the current value to a multiple of delta before incrementing
     * 	Useful for keeping things to a multiple of 5, for example.
     */
    Et2Date.prototype.increment = function (delta, field, roundToDelta) {
        if (roundToDelta === void 0) { roundToDelta = true; }
        var date;
        if (this._inputElement.value) {
            date = new Date(this._inputElement.value);
            // Handle timezone offset, flatpickr uses local time
            date = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
        }
        else {
            // No current value - start with "now", but don't increment at all
            date = new Date();
            delta = 0;
        }
        var fieldMap = { day: "UTCDate", hour: "UTCHours", minute: "UTCMinutes" };
        var original = date["get" + fieldMap[field]]();
        // Avoid divide by 0 in case we have no current value, or delta of 0 passed in
        var roundResolution = delta || {
            day: 1,
            hour: this.getOptions().hourIncrement,
            minute: this.getOptions().minuteIncrement
        }[field];
        var bound = roundToDelta ? (Math.round(original / roundResolution) * roundResolution) : original;
        date["set" + fieldMap[field]](bound + delta);
        this.setDate(date, false, null);
    };
    Et2Date.prototype._inputTemplate = function () {
        if (typeof egwIsMobile == "function" && egwIsMobile()) {
            // Plain input for mobile
            return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<input type=", " ?disabled=", "></input>"], ["<input type=", " ?disabled=", "></input>"])), this._mobileInputType(), this.disabled);
        }
        // This element gets hidden and used for value, but copied by flatpickr and used for input
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <slot name=\"prefix\"></slot>\n            <et2-textbox exportparts=\"base\" type=\"text\" placeholder=", "\n                         ?required=", "\n                         ?disabled=", "\n            >\n                ", "\n            </et2-textbox>\n            <slot name=\"suffix\"></slot>\n\t\t"], ["\n            <slot name=\"prefix\"></slot>\n            <et2-textbox exportparts=\"base\" type=\"text\" placeholder=", "\n                         ?required=", "\n                         ?disabled=", "\n            >\n                ", "\n            </et2-textbox>\n            <slot name=\"suffix\"></slot>\n\t\t"])), this.placeholder, this.required, this.disabled, this._incrementButtonTemplate());
    };
    Et2Date.prototype._incrementButtonTemplate = function () {
        // No increment buttons on mobile
        if (typeof egwIsMobile == "function" && egwIsMobile() || this.disabled) {
            return lit_1.nothing;
        }
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <div slot=\"suffix\" class=\"et2-date-time__scrollbuttons\" part=\"scrollbuttons\" @click=", ">\n                <et2-button-icon\n                        noSubmit\n                        image=\"chevron-up\"\n                        data-direction=\"1\"\n                >\u2191\n                </et2-button-icon>\n                <et2-button-icon\n                        noSubmit\n                        image=\"chevron-down\"\n                        data-direction=\"-1\"\n                >\u2193\n                </et2-button-icon>\n            </div>"], ["\n            <div slot=\"suffix\" class=\"et2-date-time__scrollbuttons\" part=\"scrollbuttons\" @click=", ">\n                <et2-button-icon\n                        noSubmit\n                        image=\"chevron-up\"\n                        data-direction=\"1\"\n                >\u2191\n                </et2-button-icon>\n                <et2-button-icon\n                        noSubmit\n                        image=\"chevron-down\"\n                        data-direction=\"-1\"\n                >\u2193\n                </et2-button-icon>\n            </div>"])), this.handleScroll);
    };
    Et2Date.prototype.render = function () {
        var labelTemplate = this._labelTemplate();
        var helpTemplate = this._helpTextTemplate();
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            ", "\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            ", "\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"])), (typeof egwIsMobile != "function" || !egwIsMobile()) ? _super.prototype.render.call(this) : lit_1.nothing, class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': labelTemplate !== lit_1.nothing,
            'form-control--has-help-text': helpTemplate !== lit_1.nothing
        }), labelTemplate, this._inputTemplate(), helpTemplate);
    };
    return Et2Date;
}(Et2InputWidget_1.Et2InputWidget(lit_flatpickr_1.LitFlatpickr)));
exports.Et2Date = Et2Date;
// @ts-ignore TypeScript is not recognizing that Et2Date is a LitElement
customElements.define("et2-date", Et2Date);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
