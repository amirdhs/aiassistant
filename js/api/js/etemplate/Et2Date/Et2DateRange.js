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
exports.Et2DateRange = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var shoelace_1 = require("../Styles/shoelace");
var DateStyles_1 = require("./DateStyles");
var Et2Date_1 = require("./Et2Date");
var egw_global_1 = require("../../jsapi/egw_global");
/**
 * Display a time duration (eg: 3 days, 6 hours)
 *
 * If not specified, the time is in assumed to be minutes and will be displayed with a calculated unit
 * but this can be specified with the properties.
 */
var Et2DateRange = /** @class */ (function (_super) {
    __extends(Et2DateRange, _super);
    function Et2DateRange() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Et2DateRange, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default
            ], DateStyles_1.dateStyles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\talign-items: baseline;\n\t\t\t\t}\n\t\t\t"], ["\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\talign-items: baseline;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateRange, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Is the date range relative (this week) or absolute (2016-02-15 - 2016-02-21).  This will affect the value returned.
                 */
                relative: { type: Boolean }, 
                /**
                 * An object with keys 'from' and 'to' for absolute ranges, or a relative range string
                 */
                value: { type: Object } });
        },
        enumerable: false,
        configurable: true
    });
    Et2DateRange.prototype._handleChange = function (event) {
        var _this = this;
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
        });
    };
    Et2DateRange.prototype.render = function () {
        var hasLabel = this.label ? true : false;
        var hasHelpText = this.helpText ? true : false;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div part=\"form-control\" class=", ">\n                <div class=\"form-control__label\" part=\"form-control-label\">\n                    <label\n                            part=\"form-control-label\"\n                            class=\"form-control__label\"\n                            for=\"input\"\n                            aria-hidden=", "\n                    >\n                        <slot name=\"label\">", "</slot>\n                    </label>\n                </div>\n                <div class=\"form-control-input\" part=\"form-control-input\"\n                >\n                    ", "\n                </div>\n\t\t\t\t<slot\n\t\t\t\t\t\tname=\"help-text\"\n\t\t\t\t\t\tpart=\"form-control-help-text\"\n\t\t\t\t\t\tid=\"help-text\"\n\t\t\t\t\t\tclass=\"form-control__help-text\"\n\t\t\t\t\t\taria-hidden=", "\n\t\t\t\t>\n\t\t\t\t\t", "\n\t\t\t\t</slot>\n            </div>\n\t\t"], ["\n            <div part=\"form-control\" class=",
            ">\n                <div class=\"form-control__label\" part=\"form-control-label\">\n                    <label\n                            part=\"form-control-label\"\n                            class=\"form-control__label\"\n                            for=\"input\"\n                            aria-hidden=", "\n                    >\n                        <slot name=\"label\">", "</slot>\n                    </label>\n                </div>\n                <div class=\"form-control-input\" part=\"form-control-input\"\n                >\n                    ", "\n                </div>\n\t\t\t\t<slot\n\t\t\t\t\t\tname=\"help-text\"\n\t\t\t\t\t\tpart=\"form-control-help-text\"\n\t\t\t\t\t\tid=\"help-text\"\n\t\t\t\t\t\tclass=\"form-control__help-text\"\n\t\t\t\t\t\taria-hidden=", "\n\t\t\t\t>\n\t\t\t\t\t", "\n\t\t\t\t</slot>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--has-label': this.label.split("%")[0] || false
        }), hasLabel ? 'false' : 'true', this.label, this._inputGroupTemplate(), hasHelpText ? 'false' : 'true', this.helpText);
    };
    Et2DateRange.prototype._inputGroupTemplate = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t<slot name=\"prefix\" part=\"prefix\" class=\"input__prefix\"></slot>\n\t\t", "\n\t\t<slot name=\"suffix\" part=\"suffix\" class=\"input__suffix\"></slot>\n\t\t"], ["\n\t\t<slot name=\"prefix\" part=\"prefix\" class=\"input__prefix\"></slot>\n\t\t", "\n\t\t<slot name=\"suffix\" part=\"suffix\" class=\"input__suffix\"></slot>\n\t\t"])), this.relative ? this._inputRelativeTemplate() : this._inputAbsoluteTemplate());
    };
    /**
     * We're doing a relative date range, show the relative options
     * @returns {TemplateResult}
     * @protected
     */
    Et2DateRange.prototype._inputRelativeTemplate = function () {
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-select\n                    name=\"relative\"\n                    ?disabled=", "\n                    ?readonly=", "\n                    ?required=", "\n                    placeholder=", "\n                    .emptyLabel=", "\n                    .select_options=", "\n                    @change=", "\n            ></et2-select>"], ["\n            <et2-select\n                    name=\"relative\"\n                    ?disabled=", "\n                    ?readonly=", "\n                    ?required=", "\n                    placeholder=", "\n                    .emptyLabel=", "\n                    .select_options=", "\n                    @change=", "\n            ></et2-select>"])), this.disabled, this.readonly, this.required, if_defined_js_1.ifDefined(this.placeholder), if_defined_js_1.ifDefined(this.emptyLabel), Et2DateRange.relative_dates, this._handleChange);
    };
    /**
     * We're doing an absolute date range, we need start and end dates
     *
     * @returns {TemplateResult}
     * @protected
     */
    Et2DateRange.prototype._inputAbsoluteTemplate = function () {
        var _a, _b;
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t<et2-date\n\t\t\t\tname=\"from\"\n\t\t\t\t?disabled=", "\n\t\t\t\t?readonly=", "\n\t\t\t\t?required=", "\n                placeholder=", "\n\t\t\t\tdefaultDate=", "\n                @change=", "\n            ></et2-date>\n            <et2-date\n                    name=\"to\"\n                    ?disabled=", "\n\t\t\t\t?readonly=", "\n\t\t\t\t?required=", "\n                    placeholder=", "\n\t\t\t\tvalue=", "\n                    @change=", "\n            ></et2-date>\n\t\t"], ["\n\t\t\t<et2-date\n\t\t\t\tname=\"from\"\n\t\t\t\t?disabled=", "\n\t\t\t\t?readonly=", "\n\t\t\t\t?required=", "\n                placeholder=", "\n\t\t\t\tdefaultDate=", "\n                @change=", "\n            ></et2-date>\n            <et2-date\n                    name=\"to\"\n                    ?disabled=", "\n\t\t\t\t?readonly=", "\n\t\t\t\t?required=", "\n                    placeholder=", "\n\t\t\t\tvalue=", "\n                    @change=", "\n            ></et2-date>\n\t\t"])), this.disabled, this.readonly, this.required, if_defined_js_1.ifDefined(this.placeholder || this.egw().lang("From")), if_defined_js_1.ifDefined((_a = this.value) === null || _a === void 0 ? void 0 : _a.from), this._handleChange, this.disabled, this.readonly, this.required, if_defined_js_1.ifDefined(this.placeholder || this.egw().lang("To")), if_defined_js_1.ifDefined((_b = this.value) === null || _b === void 0 ? void 0 : _b.to), this._handleChange);
    };
    Object.defineProperty(Et2DateRange.prototype, "fromElement", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("[name='from']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateRange.prototype, "toElement", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("[name='to']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateRange.prototype, "relativeElement", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("[name='relative']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateRange.prototype, "value", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.relative) {
                return ((_a = this.relativeElement) === null || _a === void 0 ? void 0 : _a.value) || "";
            }
            var val = {
                from: ((_c = (_b = this.fromElement) === null || _b === void 0 ? void 0 : _b.findInputField()) === null || _c === void 0 ? void 0 : _c.value) || null,
                to: ((_d = this.toElement) === null || _d === void 0 ? void 0 : _d.value) || null
            };
            if (val.from)
                val.from = Et2Date_1.formatDate(Et2Date_1.parseDate(val.from), { dateFormat: "Y-m-dT00:00:00Z" });
            if (val.to)
                val.to = Et2Date_1.formatDate(Et2Date_1.parseDate(val.to), { dateFormat: "Y-m-dT00:00:00Z" });
            return (val.from || val.to) ? val : null;
        },
        set: function (new_value) {
            var _this = this;
            var _a, _b, _c, _d;
            if (!this.isConnected) {
                this.updateComplete.then(function () {
                    _this.value = new_value;
                });
                return;
            }
            if (this.relative) {
                this.relativeElement.value = new_value;
            }
            else if (this.fromElement && this.toElement) {
                if (typeof new_value == "string") {
                    // Relative -> absolute
                    new_value = Et2DateRange.relativeToAbsolute(new_value);
                }
                if (((_b = (_a = this.fromElement._instance) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.mode) == "range") {
                    this.fromElement._instance.setDate([new_value === null || new_value === void 0 ? void 0 : new_value.from, new_value === null || new_value === void 0 ? void 0 : new_value.to], true);
                }
                else {
                    this.fromElement.value = ((_c = new_value === null || new_value === void 0 ? void 0 : new_value.from) === null || _c === void 0 ? void 0 : _c.toJSON()) || "";
                    this.toElement.value = ((_d = new_value === null || new_value === void 0 ? void 0 : new_value.to) === null || _d === void 0 ? void 0 : _d.toJSON()) || "";
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2DateRange.relativeToAbsolute = function (date) {
        var absolute = { from: '', to: '' };
        var relative = Et2DateRange.relative_dates.find(function (e) { return e.value.toLowerCase() == date.toLowerCase(); });
        var tempDate = new Date();
        var today = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), 0, -tempDate.getTimezoneOffset(), 0);
        Object.keys(absolute).forEach(function (k) {
            var value = today.toJSON();
            if (relative && typeof relative[k] == "function") {
                absolute[k] = relative[k](new Date(value));
            }
        });
        return absolute;
    };
    // Class Constants
    Et2DateRange.relative_dates = [
        // Start and end are relative offsets, see et2_date.set_min()
        // or Date objects
        {
            value: 'Today',
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang('Today') : 'Today',
            from: function (date) { return date; },
            to: function (date) { return date; }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("Yesterday") : "Yesterday",
            value: 'Yesterday',
            from: function (date) {
                date.setUTCDate(date.getUTCDate() - 1);
                return date;
            },
            to: ''
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("This week") : "This week",
            value: 'This week',
            from: function (date) { return egw_global_1.egw.week_start(date); },
            to: function (date) {
                date.setUTCDate(date.getUTCDate() + 6);
                return date;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("Last week") : "Last week",
            value: 'Last week',
            from: function (date) {
                var d = egw_global_1.egw.week_start(date);
                d.setUTCDate(d.getUTCDate() - 7);
                return d;
            },
            to: function (date) {
                date.setUTCDate(date.getUTCDate() + 6);
                return date;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("This month") : "This month",
            value: 'This month',
            from: function (date) {
                date.setUTCDate(1);
                return date;
            },
            to: function (date) {
                date.setUTCMonth(date.getUTCMonth() + 1);
                date.setUTCDate(0);
                return date;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("Last month") : "Last month",
            value: 'Last month',
            from: function (date) {
                date.setUTCMonth(date.getUTCMonth() - 1);
                date.setUTCDate(1);
                return date;
            },
            to: function (date) {
                date.setUTCMonth(date.getUTCMonth() + 1);
                date.setUTCDate(0);
                return date;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("Last 3 months") : "Last 3 months",
            value: 'Last 3 months',
            from: function (date) {
                date.setUTCMonth(date.getUTCMonth() - 2);
                date.setUTCDate(1);
                return date;
            },
            to: function (date) {
                date.setUTCMonth(date.getUTCMonth() + 3);
                date.setUTCDate(0);
                return date;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("This year") : "This year",
            value: 'This year',
            from: function (d) {
                d.setUTCMonth(0);
                d.setUTCDate(1);
                return d;
            },
            to: function (d) {
                d.setUTCMonth(11);
                d.setUTCDate(31);
                return d;
            }
        },
        {
            label: egw_global_1.egw.lang ? egw_global_1.egw.lang("Last year") : "Last year",
            value: 'Last year',
            from: function (d) {
                d.setUTCMonth(0);
                d.setUTCDate(1);
                d.setUTCYear(d.getUTCYear() - 1);
                return d;
            },
            to: function (d) {
                d.setUTCMonth(11);
                d.setUTCDate(31);
                d.setUTCYear(d.getUTCYear() - 1);
                return d;
            }
        }
    ];
    return Et2DateRange;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2DateRange = Et2DateRange;
customElements.define("et2-date-range", Et2DateRange);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
