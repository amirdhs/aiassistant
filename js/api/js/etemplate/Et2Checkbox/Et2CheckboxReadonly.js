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
exports.Et2CheckboxReadonly = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var shoelace_1 = require("../Styles/shoelace");
/**
 * et2_checkbox_ro is the dummy readonly implementation of the checkbox
 * @augments et2_checkbox
 */
var Et2CheckboxReadonly = /** @class */ (function (_super) {
    __extends(Et2CheckboxReadonly, _super);
    function Et2CheckboxReadonly() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Et2CheckboxReadonly, "styles", {
        get: function () {
            return __spreadArrays(shoelace_1.default, _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: -webkit-baseline-middle;\n\t\t\t}\n            "], ["\n\t\t\t:host {\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: -webkit-baseline-middle;\n\t\t\t}\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2CheckboxReadonly, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 *  Checkbox is checked
                 */
                checked: { type: Boolean }, 
                /**
                 * The checkbox's value attribute
                 */
                value: { type: String }, 
                /* Value when checked */
                selectedValue: { type: String }, 
                /**
                 * What should be displayed when readonly and selected
                 */
                roTrue: { type: String }, 
                /**
                 * What should be displayed when readonly and not selected
                 */
                roFalse: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2CheckboxReadonly.prototype.render = function () {
        var isChecked = this.checked ||
            // selectedValue is set, so only a value matching that counts as checked
            typeof this.selectedValue == "string" && this.value == this.selectedValue ||
            // selectedValue is not set, any truthy value counts as checked
            typeof this.selectedValue === "undefined" && this.value;
        var check = "";
        if (isChecked && this.roTrue) {
            check = this.roTrue;
        }
        else if (isChecked) {
            check = lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <sl-icon name=\"check\"></sl-icon>"], ["\n                <sl-icon name=\"check\"></sl-icon>"])));
        }
        else if (!isChecked && this.roFalse) {
            check = this.roFalse;
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <label part=\"base\" class=", "\n            >\n                <span part=\"control\" class=\"checkbox__control\">", "</span>\n                <span part=\"label\" class=\"checkbox__label\">\n\t\t\t\t  <slot>", "</slot>\n\t\t\t\t</span>\n            </label>\n\t\t"], ["\n            <label part=\"base\" class=",
            "\n            >\n                <span part=\"control\" class=\"checkbox__control\">", "</span>\n                <span part=\"label\" class=\"checkbox__label\">\n\t\t\t\t  <slot>", "</slot>\n\t\t\t\t</span>\n            </label>\n\t\t"])), class_map_js_1.classMap({
            checkbox: true,
            'checkbox--checked': this.checked,
            'checkbox--disabled': this.disabled,
            'checkbox--focused': this.hasFocus,
            'checkbox--indeterminate': this.indeterminate
        }), check, this.label);
    };
    Et2CheckboxReadonly.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("value", "class", "statustext");
    };
    Et2CheckboxReadonly.prototype.getDetachedNodes = function () {
        return [];
    };
    Et2CheckboxReadonly.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    return Et2CheckboxReadonly;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2CheckboxReadonly = Et2CheckboxReadonly;
customElements.define("et2-checkbox_ro", Et2CheckboxReadonly);
var templateObject_1, templateObject_2, templateObject_3;
