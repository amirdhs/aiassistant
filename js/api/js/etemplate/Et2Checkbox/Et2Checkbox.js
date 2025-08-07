"use strict";
/**
 * EGroupware eTemplate2 - Checkbox widget
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Checkbox = void 0;
var lit_1 = require("lit");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
require("../Et2Image/Et2Image");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../Styles/shoelace");
var property_js_1 = require("lit/decorators/property.js");
var Et2Checkbox = /** @class */ (function (_super) {
    __extends(Et2Checkbox, _super);
    function Et2Checkbox() {
        var _this = _super.call(this) || this;
        _this.selectedValue = true;
        _this.unselectedValue = false;
        _this.isSlComponent = true;
        return _this;
    }
    Object.defineProperty(Et2Checkbox, "styles", {
        get: function () {
            return __spreadArrays(shoelace_2.default, _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  :host {\n\t\t\t\t/* Make it line up with the middle of surroundings */\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: baseline;\n\t\t\t  }\n\n\t\t\t  :host([disabled]) {\n\t\t\t\tdisplay: initial;\n\t\t\t  }\n\n\t\t\t  /* Fix positioning */\n\n\t\t\t  .checkbox {\n\t\t\t\tposition: relative;\n\t\t\t  }\n\n\t\t\t  /* Extend hover highlight to label */\n\n\t\t\t  .checkbox:not(.checkbox--disabled):hover {\n\t\t\t\tcolor: var(--sl-input-border-color-hover);\n\t\t\t  }\n\n\t\t\t  /* Use normal color even when required */\n\n\t\t\t  :host([required]) .checkbox__control {\n\t\t\t\tcolor: var(--input-text-color);\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  :host {\n\t\t\t\t/* Make it line up with the middle of surroundings */\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: baseline;\n\t\t\t  }\n\n\t\t\t  :host([disabled]) {\n\t\t\t\tdisplay: initial;\n\t\t\t  }\n\n\t\t\t  /* Fix positioning */\n\n\t\t\t  .checkbox {\n\t\t\t\tposition: relative;\n\t\t\t  }\n\n\t\t\t  /* Extend hover highlight to label */\n\n\t\t\t  .checkbox:not(.checkbox--disabled):hover {\n\t\t\t\tcolor: var(--sl-input-border-color-hover);\n\t\t\t  }\n\n\t\t\t  /* Use normal color even when required */\n\n\t\t\t  :host([required]) .checkbox__control {\n\t\t\t\tcolor: var(--input-text-color);\n\t\t\t  }\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Checkbox.prototype, "label", {
        get: function () {
            var _a;
            return ((_a = this._labelNode) === null || _a === void 0 ? void 0 : _a.textContent) || "";
        },
        set: function (label_text) {
            var _this = this;
            if (this._labelNode) {
                this._labelNode.textContent = label_text;
            }
            else {
                this.updateComplete.then(function () {
                    _this.label = label_text;
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Checkbox.prototype, "value", {
        get: function () {
            return this.indeterminate ? undefined :
                (this.checked ? this.selectedValue : this.unselectedValue);
        },
        set: function (new_value) {
            this.requestUpdate("checked");
            this.indeterminate = false;
            if (typeof new_value === "boolean") {
                this.checked = new_value;
            }
            else if (new_value == this.selectedValue) {
                this.checked = true;
            }
            else if (new_value == this.unselectedValue) {
                this.checked = false;
            }
            // concept of an indeterminate value did not exist in eT2 and set value gets called with all kind of truthy of falsy values
            // therefore we can NOT set everything not matching our (un)selectedValue to indeterminate!
            // For now, we only do that for an explicit Et2Checkbox.INDETERMINATE value
            else if (new_value === Et2Checkbox.INDETERMINATE) {
                this.indeterminate = true;
            }
            else {
                this.checked = !!new_value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Checkbox.prototype, "_labelNode", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Value to set checkbox in (third) indeterminate state
     */
    Et2Checkbox.INDETERMINATE = '***undefined***';
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Checkbox.prototype, "selectedValue", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Checkbox.prototype, "unselectedValue", void 0);
    return Et2Checkbox;
}(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlCheckbox)));
exports.Et2Checkbox = Et2Checkbox;
customElements.define("et2-checkbox", Et2Checkbox);
var templateObject_1;
