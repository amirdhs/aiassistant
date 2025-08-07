"use strict";
/**
 * EGroupware eTemplate2 - Number widget (WebComponent)
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Ralf Becker
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = exports.Et2Number = void 0;
var Et2Textbox_1 = require("./Et2Textbox");
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
/**
 * @summary Enter a numeric value.  Number formatting comes from preferences by default
 * @since 23.1
 *
 * @dependency sl-input
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Like prefix, but after
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the control's value changes.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 */
var Et2Number = /** @class */ (function (_super) {
    __extends(Et2Number, _super);
    function Et2Number() {
        var _this = _super.call(this) || this;
        /**
         * Text placed before the value
         * @type {string}
         */
        _this.prefix = "";
        /**
         * Text placed after the value
         * @type {string}
         */
        _this.suffix = "";
        _this.inputMode = "numeric";
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Number, "styles", {
        get: function () {
            return __spreadArrays((_super.styles ? (Array.isArray(_super.styles) ? _super.styles : [_super.styles]) : []), [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  /* Scroll buttons */\n\n\t\t\t\t:host(:hover) .input--medium .input__suffix ::slotted(et2-button-scroll) {\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\n\t\t\t\t.input--medium .input__suffix ::slotted(et2-button-scroll) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tmargin-left: var(--sl-spacing-small);\n\t\t\t\t\tmargin-inline-end: var(--sl-spacing-x-small);\n\t\t\t\t}\n\n\t\t\t\t:host([step]) .input--medium .input__control {\n\t\t\t\t\tpadding-right: 0px;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tmin-width: var(--width, 4em);\n\t\t\t\t\tmax-width: var(--width, 7em);\n\t\t\t\t}\n\n\t\t\t\t.input__control {\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t"], ["\n\t\t\t  /* Scroll buttons */\n\n\t\t\t\t:host(:hover) .input--medium .input__suffix ::slotted(et2-button-scroll) {\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\n\t\t\t\t.input--medium .input__suffix ::slotted(et2-button-scroll) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tmargin-left: var(--sl-spacing-small);\n\t\t\t\t\tmargin-inline-end: var(--sl-spacing-x-small);\n\t\t\t\t}\n\n\t\t\t\t:host([step]) .input--medium .input__control {\n\t\t\t\t\tpadding-right: 0px;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tmin-width: var(--width, 4em);\n\t\t\t\t\tmax-width: var(--width, 7em);\n\t\t\t\t}\n\n\t\t\t\t.input__control {\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Number.prototype, "_inputNode", {
        get: function () { return this.shadowRoot.querySelector("input"); },
        enumerable: false,
        configurable: true
    });
    Et2Number.prototype.connectedCallback = function () {
        var _a;
        _super.prototype.connectedCallback.call(this);
        var numberFormat = ".";
        if (this.egw() && this.egw().preference) {
            numberFormat = (_a = this.egw().preference("number_format", "common")) !== null && _a !== void 0 ? _a : ".";
        }
        var decimal = numberFormat ? numberFormat[0] : '.';
        var thousands = numberFormat ? numberFormat[1] : '';
        this.decimalSeparator = this.decimalSeparator || decimal || ".";
        this.thousandsSeparator = this.thousandsSeparator || thousands || "";
        // Add spinners
        lit_1.render(this._incrementButtonTemplate(), this);
        if (this.value) {
            this.value = formatNumber(this.value, this.decimalSeparator, this.thousandsSeparator, this.precision);
        }
    };
    Et2Number.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        while (this.lastChild)
            this.lastChild.remove();
    };
    Et2Number.prototype.firstUpdated = function () {
        var _this = this;
        _super.prototype.firstUpdated.call(this);
        // Add content to slots
        ["prefix", "suffix"].forEach(function (slot) {
            if (!_this[slot]) {
                return;
            }
            _this.append(Object.assign(document.createElement("span"), {
                slot: slot,
                textContent: _this[slot]
            }));
        });
    };
    Et2Number.prototype.willUpdate = function (changedProperties) {
        if (this._mask && Object.keys(this.maskOptions).filter(function (v) { return changedProperties.has(v); }).length > 0) {
            this._mask.updateOptions(this.maskOptions);
        }
    };
    Et2Number.prototype.transformAttributes = function (attrs) {
        if (attrs.precision === 0 && typeof attrs.step === 'undefined') {
            attrs.step = 1;
        }
        if (typeof attrs.validator === 'undefined') {
            attrs.validator = attrs.precision === 0 ? '/^-?[0-9]*$/' : '/^-?[0-9]*[,.]?[0-9]*$/';
        }
        if (typeof attrs.width != "undefined") {
            this.style.setProperty("--width", attrs.width);
            delete attrs.width;
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    Object.defineProperty(Et2Number.prototype, "validator", {
        get: function () {
            return _super.prototype.validator;
        },
        /**
         * Somehow the setter is not inherited from the parent, not defining it here leaves the validator a string!
         *
         * @param regexp
         */
        set: function (regexp) {
            _super.prototype.validator = regexp;
        },
        enumerable: false,
        configurable: true
    });
    Et2Number.prototype.handleInput = function () {
        // Do nothing
    };
    Object.defineProperty(Et2Number.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (val) {
            var old = this.value;
            if ("" + val !== "") {
                // Remove separator so parseFloat works
                if (typeof val === 'string') {
                    // Special exception if someone is entering a decimal using . even though their preference is , (N.A. number in Europe)
                    // Only 1 ".", no thousands separator and if precision is set decimal places must match
                    if (this.decimalSeparator != "." && val.indexOf(".") == val.lastIndexOf(".") && !val.includes(",") && (
                    // Starts with .
                    val.indexOf(".") == 0 ||
                        // No precision, and it's not in a thousands place
                        (typeof this.precision == "undefined" && (val.length - val.indexOf(".") - 1 != 3 || val.indexOf(".") > 4)) ||
                        // Precision, and it's got the right number of decimals
                        typeof this.precision != "undefined" && this.precision == val.length - val.indexOf(".") - 1)) {
                        // Leave it
                    }
                    else {
                        val = val.replaceAll(this.thousandsSeparator, "").replace(",", '.');
                    }
                }
                if (typeof this.precision !== 'undefined') {
                    val = parseFloat(val).toFixed(this.precision);
                }
                else {
                    val = parseFloat(val);
                }
            }
            if (val == "" || isNaN(val)) {
                _super.prototype.value = val;
                this.requestUpdate("value", old);
                return;
            }
            if (this.max && val > this.max) {
                val = this.max;
            }
            if (this.min && val < this.min) {
                val = this.min;
            }
            _super.prototype.value = formatNumber(val, this.decimalSeparator, this.thousandsSeparator, this.precision);
            this.requestUpdate("value", old);
        },
        enumerable: false,
        configurable: true
    });
    Et2Number.prototype.updateMaskValue = function () { };
    /**
     * Value returned to server is always no thousands separator, "." decimal separator
     * @returns {any}
     */
    Et2Number.prototype.getValue = function () {
        if (this.value == "" || typeof this.value == "undefined") {
            return "";
        }
        // Needs to be string to pass validator
        return "" + this.valueAsNumber;
    };
    Object.defineProperty(Et2Number.prototype, "valueAsNumber", {
        get: function () {
            var formattedValue = "" + this.stripFormat(this.value);
            if (formattedValue == "") {
                return 0;
            }
            if (typeof this.precision !== 'undefined') {
                formattedValue = parseFloat(parseFloat(formattedValue).toFixed(this.precision));
            }
            else {
                formattedValue = parseFloat(formattedValue);
            }
            return formattedValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove special formatting from a string to get just a number value
     * @param {string | number} formattedValue
     * @returns {number}
     */
    Et2Number.prototype.stripFormat = function (formattedValue) {
        if ("" + formattedValue !== "") {
            // remove thousands separator
            if (typeof formattedValue === "string" && this.thousandsSeparator) {
                formattedValue = formattedValue.replaceAll(this.thousandsSeparator, "");
            }
            // remove decimal separator
            if (typeof formattedValue === 'string' && this.decimalSeparator !== '.') {
                formattedValue = formattedValue.replace(this.decimalSeparator, '.');
            }
            if (typeof this.precision !== 'undefined') {
                formattedValue = parseFloat(parseFloat(formattedValue).toFixed(this.precision));
            }
            else {
                formattedValue = parseFloat(formattedValue);
            }
        }
        return formattedValue;
    };
    Object.defineProperty(Et2Number.prototype, "maskOptions", {
        /**
         * Get the options for masking.
         * Overridden to use number-only masking
         *
         * @see https://imask.js.org/guide.html#masked-number
         */
        get: function () {
            var options = __assign(__assign({}, _super.prototype.maskOptions), { skipInvalid: true, scale: 5, 
                // The initial options need to match an actual number
                radix: this.decimalSeparator, thousandsSeparator: this.thousandsSeparator, 
                //		mask: this.mask ?? Number,
                lazy: false, padFractionalZeros: (typeof this.precision !== "undefined"), definitions: {
                    '#': {
                        mask: RegExp("[-\\d\\" + this.thousandsSeparator + "\\" + this.decimalSeparator + "]")
                        //RegExp("-?[\\d\\" + this.thousandsSeparator + "]+" + (this.precision ? "\\" + this.decimalSeparator + "\\d{" + this.precision + "}" : ''))
                    }
                } });
            if (typeof this.precision != "undefined") {
                options.scale = this.precision;
            }
            if (typeof this.min != "undefined") {
                options.min = this.min;
            }
            if (typeof this.max != "undefined") {
                options.max = this.max;
            }
            return options;
        },
        enumerable: false,
        configurable: true
    });
    Et2Number.prototype.handleScroll = function (e) {
        var _a, _b;
        if (this.disabled)
            return;
        var old_value = this.value;
        var min = parseFloat((_a = this.min) !== null && _a !== void 0 ? _a : Number.MIN_SAFE_INTEGER);
        if (Number.isNaN(min)) {
            min = Number.MIN_SAFE_INTEGER;
        }
        var max = parseFloat((_b = this.max) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER);
        if (Number.isNaN(max)) {
            max = Number.MAX_SAFE_INTEGER;
        }
        this.value = formatNumber(Math.min(Math.max((isNaN(this.valueAsNumber) ? 0 : this.valueAsNumber) + e.detail * (parseFloat(this.step) || 1), min), max), this.decimalSeparator, this.thousandsSeparator, this.precision);
        this.dispatchEvent(new CustomEvent("sl-change", { bubbles: true }));
        this.requestUpdate("value", old_value);
    };
    Et2Number.prototype._incrementButtonTemplate = function () {
        // No increment buttons on mobile
        if (typeof egwIsMobile == "function" && egwIsMobile()) {
            return lit_1.nothing;
        }
        // Other reasons for no buttons
        if (this.disabled || this.readonly || !this.step) {
            return lit_1.nothing;
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-button-scroll class=\"et2-number__scrollbuttons\" slot=\"suffix\"\n                               part=\"scroll\"\n                               @et2-scroll=", "></et2-button-scroll>"], ["\n            <et2-button-scroll class=\"et2-number__scrollbuttons\" slot=\"suffix\"\n                               part=\"scroll\"\n                               @et2-scroll=", "></et2-button-scroll>"])), this.handleScroll);
    };
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Number.prototype, "min", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Number.prototype, "max", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Number.prototype, "step", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Number.prototype, "precision", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Number.prototype, "thousandsSeparator", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Number.prototype, "decimalSeparator", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Number.prototype, "prefix", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Number.prototype, "suffix", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Number.prototype, "value", null);
    Et2Number = __decorate([
        custom_element_js_1.customElement("et2-number")
    ], Et2Number);
    return Et2Number;
}(Et2Textbox_1.Et2Textbox));
exports.Et2Number = Et2Number;
/**
 * Format a number according to user preferences
 * @param {number} value
 * @returns {string}
 */
function formatNumber(value, decimalSeparator, thousandsSeparator, decimalPlaces) {
    var _a;
    if (decimalSeparator === void 0) { decimalSeparator = "."; }
    if (thousandsSeparator === void 0) { thousandsSeparator = ""; }
    if (decimalPlaces === void 0) { decimalPlaces = undefined; }
    // Split by . because value is a number, so . is decimal separator
    var parts = ("" + value).split(".");
    parts[0] = parts[0].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, thousandsSeparator) || "0";
    if (typeof decimalPlaces != "undefined" && decimalPlaces != 0) {
        parts[1] = ((_a = parts[1]) !== null && _a !== void 0 ? _a : "").padEnd(decimalPlaces, "0").substr(0, decimalPlaces);
    }
    return parts.join(decimalSeparator);
}
exports.formatNumber = formatNumber;
var templateObject_1, templateObject_2;
