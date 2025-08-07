"use strict";
/**
 * EGroupware eTemplate2 - Duration date widget (WebComponent)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.Et2DateDuration = exports.formatDuration = void 0;
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var egw_action_common_1 = require("../../egw_action/egw_action_common");
var DateStyles_1 = require("./DateStyles");
var shoelace_1 = require("../Styles/shoelace");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var live_js_1 = require("lit/directives/live.js");
/**
 * Format a number as a time duration
 *
 * @param {number} value
 * @param {object} options
 * 	set 'timeFormat': "12" to specify a particular format
 * @returns {value: string, unit: string}
 */
function formatDuration(value, options) {
    // Handle empty / 0 / no value
    if ((value === "" || value == "0" || !value) && !options.emptyNot0) {
        return { value: "", unit: "" };
    }
    // Make sure it's a number now
    value = typeof value == "string" ? parseInt(value) : value;
    if (!options.selectUnit) {
        var vals = [];
        for (var i = 0; i < options.displayFormat.length; ++i) {
            var unit = options.displayFormat[i];
            var val = this._unit_from_value(value, unit, i === 0, options);
            if (unit === 's' || unit === 'm' || unit === 'h' && options.displayFormat[0] === 'd') {
                vals.push(egw_action_common_1.sprintf('%02d', val));
            }
            else {
                vals.push(val);
            }
        }
        return { value: vals.join(':'), unit: '' };
    }
    // Put value into minutes for further processing
    switch (options.dataFormat) {
        case 'd':
            value *= options.hoursPerDay;
        // fall-through
        case 'h':
            value *= 60;
            break;
        case 's': // round to full minutes, unless this would give 0, use 1 digit instead
            value = value < 30 ? Math.round(value / 6.0) / 10.0 : Math.round(value / 60.0);
            break;
    }
    // Figure out the best unit for display
    var _unit = options.displayFormat == "d" ? "d" : "h";
    if (options.displayFormat.indexOf('m') > -1 && value < 60) {
        _unit = 'm';
    }
    else if (options.displayFormat.indexOf('d') > -1 && value >= (60 * options.hoursPerDay)) {
        _unit = 'd';
    }
    var out_value = "" + (_unit == 'm' ? value : (Math.round((value / 60.0 / (_unit == 'd' ? options.hoursPerDay : 1)) * 100) / 100));
    if (out_value === '') {
        _unit = '';
    }
    // use decimal separator from user prefs
    var format = options.number_format || this.egw().preference('number_format');
    var sep = format ? format[0] : '.';
    if (format && sep && sep != '.') {
        out_value = out_value.replace('.', sep);
    }
    return { value: out_value, unit: _unit };
}
exports.formatDuration = formatDuration;
/**
 * Display a time duration (eg: 3 days, 6 hours)
 *
 * If not specified, the time is in assumed to be minutes and will be displayed with a calculated unit
 * but this can be specified with the properties.
 */
var Et2DateDuration = /** @class */ (function (_super) {
    __extends(Et2DateDuration, _super);
    function Et2DateDuration() {
        var _this = _super.call(this) || this;
        /**
         * Data format
         *
         * Units to read/store the data.  'd' = days (float), 'h' = hours (float), 'm' = minutes (int), 's' = seconds (int).
         */
        _this.dataFormat = "m";
        /**
         * Select unit or input per unit
         *
         * Display a unit-selection for multiple units, or an input field per unit.
         * Default is true
         */
        _this.selectUnit = true;
        /**
         * Percent allowed
         *
         * Allows to enter a percentage instead of numbers
         */
        _this.percentAllowed = false;
        /**
         * Hours per day
         *
         * Number of hours in a day, used for converting between hours and (working) days.
         * Default 8
         */
        _this.hoursPerDay = 8;
        /**
         * 0 or empty
         *
         * Should the widget differ between 0 and empty, which get then returned as NULL
         * Default false, empty is considered as 0
         */
        _this.emptyNot0 = false;
        /**
         * Short labels
         *
         * use d/h/m instead of day/hour/minute
         */
        _this.shortLabels = false;
        /**
         * Step limit
         *
         * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set.
         */
        _this.step = 1;
        _this._display = { value: "", unit: "" };
        // Property defaults
        _this.displayFormat = "dhm";
        _this.formatter = formatDuration;
        return _this;
    }
    Et2DateDuration_1 = Et2DateDuration;
    Object.defineProperty(Et2DateDuration, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default
            ], DateStyles_1.dateStyles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t.form-field__group-two {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\talign-items: baseline;\n\t\t\t\t}\n\n\t\t\t\t.input-group__after {\n\t\t\t\t\tdisplay: contents;\n\t\t\t\t\tmargin-inline-start: var(--sl-input-spacing-medium);\n\t\t\t\t}\n\n\t\t\t\tsl-select {\n\t\t\t\t\tcolor: var(--input-text-color);\n\t\t\t\t\tflex: 2 1 auto;\n\t\t\t\t\tmin-width: min-content;\n\t\t\t\t\twidth: 8em;\n\n\t\t\t\t\t&::part(combobox) {\n\t\t\t\t\t\tborder-left: 1px solid var(--input-border-color);\n\t\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsl-select::part(control) {\n\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t}\n\n\t\t\t\t.duration__input {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\twidth: min-content;\n\t\t\t\t\tmin-width: 5em;\n\t\t\t\t\t/* This is the same as max-width of the number field */\n\t\t\t\t\tmax-width: 7em;\n\t\t\t\t\tmargin-right: -2px;\n\t\t\t\t}\n\n\n\t\t\t\t.duration__input:not(:first-child)::part(base) {\n\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t}\n\n\t\t\t\t.duration__input:not(:last-child)::part(base) {\n\t\t\t\t\tborder-right: none;\n\t\t\t\t\tborder-top-right-radius: 0px;\n\t\t\t\t\tborder-bottom-right-radius: 0px;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t.form-field__group-two {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\talign-items: baseline;\n\t\t\t\t}\n\n\t\t\t\t.input-group__after {\n\t\t\t\t\tdisplay: contents;\n\t\t\t\t\tmargin-inline-start: var(--sl-input-spacing-medium);\n\t\t\t\t}\n\n\t\t\t\tsl-select {\n\t\t\t\t\tcolor: var(--input-text-color);\n\t\t\t\t\tflex: 2 1 auto;\n\t\t\t\t\tmin-width: min-content;\n\t\t\t\t\twidth: 8em;\n\n\t\t\t\t\t&::part(combobox) {\n\t\t\t\t\t\tborder-left: 1px solid var(--input-border-color);\n\t\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsl-select::part(control) {\n\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t}\n\n\t\t\t\t.duration__input {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\twidth: min-content;\n\t\t\t\t\tmin-width: 5em;\n\t\t\t\t\t/* This is the same as max-width of the number field */\n\t\t\t\t\tmax-width: 7em;\n\t\t\t\t\tmargin-right: -2px;\n\t\t\t\t}\n\n\n\t\t\t\t.duration__input:not(:first-child)::part(base) {\n\t\t\t\t\tborder-top-left-radius: 0px;\n\t\t\t\t\tborder-bottom-left-radius: 0px;\n\t\t\t\t}\n\n\t\t\t\t.duration__input:not(:last-child)::part(base) {\n\t\t\t\t\tborder-right: none;\n\t\t\t\t\tborder-top-right-radius: 0px;\n\t\t\t\t\tborder-bottom-right-radius: 0px;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateDuration.prototype, "displayFormat", {
        get: function () {
            return this.__displayFormat;
        },
        /**
         * Display format
         *
         * Permitted units for displaying the data.
         * 'd' = days, 'h' = hours, 'm' = minutes, 's' = seconds.  Use combinations to give a choice.
         * Default is 'dhm' = days or hours with selectbox.
         */
        set: function (value) {
            var _a;
            // Update display if needed
            var current;
            if (value !== this.__displayFormat) {
                var currentValue = (_a = this._oldValue) !== null && _a !== void 0 ? _a : this._display;
                current = this._unit_from_value(currentValue.value, this.dataFormat, true, {
                    dataFormat: currentValue.unit || this.dataFormat,
                    hoursPerDay: this.hoursPerDay
                });
            }
            this.__displayFormat = "";
            if (!value) {
                // Don't allow an empty value, but don't throw a real error
                console.warn("Invalid displayFormat ", value, this);
                value = "dhm";
            }
            // Display format must be in decreasing size order (dhms) or the calculations
            // don't work out nicely
            for (var _i = 0, _b = Object.keys(Et2DateDuration_1.time_formats); _i < _b.length; _i++) {
                var f = _b[_i];
                if (value.indexOf(f) !== -1) {
                    this.__displayFormat += f;
                }
            }
            if (!isNaN(current)) {
                this.value = current;
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2DateDuration.prototype.getUpdateComplete = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _b.sent();
                        // Format select does not start with value, needs an update
                        (_a = this._formatNode) === null || _a === void 0 ? void 0 : _a.requestUpdate("value");
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Et2DateDuration.prototype.transformAttributes = function (attrs) {
        // Clean formats, but avoid things that need to be expanded like $cont[displayFormat]
        var check = new RegExp('[\$\@' + Object.keys(Et2DateDuration_1.time_formats).join('') + ']');
        for (var attr in ["displayFormat", "dataFormat"]) {
            if (typeof attrs[attrs] === 'string' && !check.test(attrs[attr])) {
                console.warn("Invalid format for " + attr + "'" + attrs[attr] + "'", this);
                attrs[attr] = attrs[attr].replace(/[^dhms]/g, '');
            }
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    Object.defineProperty(Et2DateDuration.prototype, "value", {
        get: function () {
            var value = 0;
            if (!this.selectUnit) {
                for (var i = this._durationNode.length; --i >= 0;) {
                    value += this._durationNode[i].valueAsNumber * this._unit2seconds(this._durationNode[i].name);
                }
                if (this.dataFormat !== 's') {
                    value /= this._unit2seconds(this.dataFormat);
                }
                return "" + (this.dataFormat === 'm' ? Math.round(value) : value);
            }
            var val = this._durationNode.length ? this._durationNode[0].valueAsNumber : '';
            if (val === '' || isNaN(val)) {
                return this.emptyNot0 ? '' : "0";
            }
            value = parseFloat(val);
            // Put value into minutes for further processing
            switch (this._formatNode && this._formatNode.value ? this._formatNode.value : this.displayFormat) {
                case 'd':
                    value *= this.hoursPerDay;
                // fall-through
                case 'h':
                    value *= 60;
                    break;
            }
            // Minutes should be an integer.  Floating point math.
            if (this.dataFormat !== 's') {
                value = Math.round(value);
            }
            switch (this.dataFormat) {
                case 'd':
                    value /= this.hoursPerDay;
                // fall-through
                case 'h':
                    value /= 60.0;
                    break;
                case 's':
                    value = Math.round(value * 60.0);
                    break;
            }
            return "" + value;
        },
        set: function (_value) {
            var _this = this;
            this._oldValue = { value: _value, unit: this.dataFormat };
            this._display = this._convert_to_display(this.emptyNot0 && "" + _value === "" ? '' : parseFloat(_value));
            // Update values
            (typeof this._display.value == "string" ? this._display.value.split(":") : [this._display.value])
                .forEach(function (v, index) {
                var _a;
                if (!_this._durationNode[index]) {
                    return;
                }
                var old = (_a = _this._durationNode[index]) === null || _a === void 0 ? void 0 : _a.value;
                _this._durationNode[index].value = v;
                _this._durationNode[index].requestUpdate("value", old);
            });
            this.requestUpdate();
        },
        enumerable: false,
        configurable: true
    });
    Et2DateDuration.prototype.render = function () {
        var _this = this;
        var labelTemplate = this._labelTemplate();
        var helpTemplate = this._helpTextTemplate();
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\" @sl-change=", ">\n                    ", "\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\" @sl-change=",
            ">\n                    ", "\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': labelTemplate !== lit_1.nothing,
            'form-control--has-help-text': helpTemplate !== lit_1.nothing
        }), labelTemplate, function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
        }, this._inputTemplate(), this._formatTemplate(), helpTemplate);
    };
    /**
     * Converts the value in data format into value in display format.
     *
     * @param _value int/float Data in data format
     *
     * @return Object {value: Value in display format, unit: unit for display}
     */
    Et2DateDuration.prototype._convert_to_display = function (_value) {
        if (!this.selectUnit) {
            var vals = [];
            for (var i = 0; i < this.displayFormat.length; ++i) {
                var unit = this.displayFormat[i];
                var val = this._unit_from_value(_value, unit, i === 0, {
                    hoursPerDay: this.hoursPerDay,
                    dataFormat: this.dataFormat
                });
                if (unit === 's' || unit === 'm' || unit === 'h' && this.displayFormat[0] === 'd') {
                    vals.push(egw_action_common_1.sprintf('%02d', val));
                }
                else {
                    vals.push(val);
                }
            }
            return { value: vals.join(':'), unit: '' };
        }
        if (_value) {
            // Put value into minutes for further processing
            switch (this.dataFormat) {
                case 'd':
                    _value *= this.hoursPerDay;
                // fall-through
                case 'h':
                    _value *= 60;
                    break;
                case 's':
                    _value /= 60.0;
                    break;
            }
        }
        // Figure out best unit for display
        var _unit = this.displayFormat == "d" ? "d" : "h";
        if (this.displayFormat.indexOf('m') > -1 && _value && _value < 60) {
            _unit = 'm';
        }
        else if (this.displayFormat.indexOf('d') > -1 && _value >= 60 * this.hoursPerDay) {
            _unit = 'd';
        }
        _value = this.emptyNot0 && _value === '' || !this.emptyNot0 && !_value ? '' :
            (_unit == 'm' ? parseInt(_value) : (Math.round((_value / 60.0 / (_unit == 'd' ? this.hoursPerDay : 1)) * 100) / 100));
        if (_value === '') {
            _unit = '';
        }
        // use decimal separator from user prefs
        var format = this.egw().preference('number_format');
        var sep = format ? format[0] : '.';
        if (typeof _value == 'string' && format && sep && sep != '.') {
            _value = _value.replace('.', sep);
        }
        return { value: _value, unit: _unit };
    };
    Et2DateDuration.prototype._unit2seconds = function (_unit) {
        switch (_unit) {
            case 's':
                return 1;
            case 'm':
                return 60;
            case 'h':
                return 3600;
            case 'd':
                return 3600 * this.hoursPerDay;
        }
    };
    Et2DateDuration.prototype._unit_from_value = function (_value, _unit, _highest, options) {
        _value *= this._unit2seconds(options.dataFormat);
        // get value for given _unit
        switch (_unit) {
            case 's':
                return _highest ? _value : _value % 60;
            case 'm':
                _value = Math.floor(_value / 60);
                return _highest ? _value : _value % 60;
            case 'h':
                _value = Math.floor(_value / 3600);
                return _highest ? _value : _value % options.hoursPerDay;
            case 'd':
                return Math.floor(_value / 3600 / options.hoursPerDay);
        }
    };
    Et2DateDuration.prototype.handleInputChange = function (event) {
        // Rather than error, roll over when possible
        var changed = event.target;
        if (typeof changed.max == "number" && parseInt(changed.value) >= changed.max) {
            var next = changed.previousElementSibling;
            if (next) {
                next.value = next.valueAsNumber + Math.floor(changed.valueAsNumber / changed.max);
                changed.value = changed.valueAsNumber % changed.max;
            }
        }
    };
    /**
     * Render the needed number inputs according to selectUnit & displayFormat properties
     *
     * @returns {any}
     * @protected
     */
    Et2DateDuration.prototype._inputTemplate = function () {
        var _this = this;
        var inputs = [];
        var value = typeof this._display.value === "number" ? this._display.value : (this._display.value.split(":") || []);
        var count = this.selectUnit ? 1 : this.displayFormat.length;
        for (var i = count; i > 0; --i) {
            var input = {
                name: "",
                title: "",
                value: typeof value == "number" ? value : ((this.selectUnit ? value.pop() : value[i]) || ""),
                min: undefined,
                max: undefined,
                precision: count == 1 ? 2 : 0
            };
            if (!this.selectUnit) {
                input.min = 0;
                input.name = this.displayFormat[this.displayFormat.length - i];
                // @ts-ignore - it doesn't like that it may have been an array
                input.value = (value[this.displayFormat.length - i]);
                switch (this.displayFormat[this.displayFormat.length - i]) {
                    case 's':
                        input.max = 60;
                        input.title = this.egw().lang('Seconds');
                        break;
                    case 'm':
                        input.max = 60;
                        input.title = this.egw().lang('Minutes');
                        break;
                    case 'h':
                        input.max = 24;
                        input.title = this.egw().lang('Hours');
                        break;
                    case 'd':
                        input.title = this.egw().lang('Days');
                        break;
                }
            }
            inputs.push(input);
        }
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", "\n\t\t"], ["",
            "\n\t\t"])), inputs.map(function (input) {
            return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    <et2-number part=\"", "\" class=\"duration__input\"\n                                exportparts=\"scroll:scroll,scrollbutton:scrollbutton,base\"\n                                name=", "\n                                min=", "                                \n\t\t\t\t\t\t\t\tmax=", "\n                                step=", "\n\t\t\t\t\t\t\t\tprecision=", " \n\t\t\t\t\t\t\t\ttitle=", "\n                                value=", "\n                                @sl-change=", "\n                    ></et2-number>"], ["\n                    <et2-number part=\"", "\" class=\"duration__input\"\n                                exportparts=\"scroll:scroll,scrollbutton:scrollbutton,base\"\n                                name=", "\n                                min=", "                                \n\t\t\t\t\t\t\t\tmax=", "\n                                step=", "\n\t\t\t\t\t\t\t\tprecision=", " \n\t\t\t\t\t\t\t\ttitle=", "\n                                value=", "\n                                @sl-change=", "\n                    ></et2-number>"])), "duration__" + input.name, input.name, typeof input.min === "number" ? input.min : lit_1.nothing, typeof input.max === "number" ? input.max : lit_1.nothing, _this.step, typeof input.precision === "number" ? input.precision : lit_1.nothing, input.title || lit_1.nothing, live_js_1.live(input.value), _this.handleInputChange);
        }));
    };
    /**
     * Generate the format selector according to the selectUnit and displayFormat properties
     *
     * @returns {any}
     * @protected
     */
    Et2DateDuration.prototype._formatTemplate = function () {
        var _this = this;
        // If no formats or only 1 format, no need for a selector
        if (!this.displayFormat || this.displayFormat.length < 1 ||
            (!this.selectUnit && this.displayFormat.length > 1)) {
            return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
        }
        // Get translations
        this.time_formats = this.time_formats || {
            d: this.shortLabels ? this.egw().lang("d") : this.egw().lang("Days"),
            h: this.shortLabels ? this.egw().lang("h") : this.egw().lang("Hours"),
            m: this.shortLabels ? this.egw().lang("m") : this.egw().lang("Minutes"),
            s: this.shortLabels ? this.egw().lang("s") : this.egw().lang("Seconds")
        };
        // It would be nice to use an et2-select here, but something goes weird with the styling
        var current = this._display.unit || this.displayFormat[0];
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <sl-select exportparts=\"combobox\" value=\"", "\">\n                ", "\n            </sl-select>\n\t\t"], ["\n            <sl-select exportparts=\"combobox\" value=\"", "\">\n                ",
            "\n            </sl-select>\n\t\t"])), current, __spreadArrays(this.displayFormat).map(function (format) {
            return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                            <sl-option\n                                    value=", "\n                                    .selected=", "\n                            >\n                                ", "\n                            </sl-option>"], ["\n                            <sl-option\n                                    value=", "\n                                    .selected=", "\n                            >\n                                ", "\n                            </sl-option>"])), format, (format == current), _this.time_formats[format]);
        }));
    };
    Object.defineProperty(Et2DateDuration.prototype, "_durationNode", {
        /**
         * @returns {HTMLInputElement}
         */
        get: function () {
            return this.shadowRoot ? this.shadowRoot.querySelectorAll(".duration__input") || [] : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateDuration.prototype, "_formatNode", {
        /**
         * @returns {HTMLSelectElement}
         */
        get: function () {
            return this.shadowRoot ? this.shadowRoot.querySelector("sl-select") : null;
        },
        enumerable: false,
        configurable: true
    });
    var Et2DateDuration_1;
    Et2DateDuration.time_formats = { d: "d", h: "h", m: "m", s: "s" };
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2DateDuration.prototype, "dataFormat", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2DateDuration.prototype, "displayFormat", null);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2DateDuration.prototype, "selectUnit", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2DateDuration.prototype, "percentAllowed", void 0);
    __decorate([
        property_js_1.property({ type: Number, reflect: true })
    ], Et2DateDuration.prototype, "hoursPerDay", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2DateDuration.prototype, "emptyNot0", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2DateDuration.prototype, "shortLabels", void 0);
    __decorate([
        property_js_1.property({ type: Number, reflect: true })
    ], Et2DateDuration.prototype, "step", void 0);
    Et2DateDuration = Et2DateDuration_1 = __decorate([
        custom_element_js_1.customElement("et2-date-duration")
    ], Et2DateDuration);
    return Et2DateDuration;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2DateDuration = Et2DateDuration;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
