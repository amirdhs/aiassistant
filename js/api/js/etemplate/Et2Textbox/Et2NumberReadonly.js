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
exports.Et2NumberReadonly = void 0;
var Et2TextboxReadonly_1 = require("./Et2TextboxReadonly");
var Et2Number_1 = require("./Et2Number");
var property_js_1 = require("lit/decorators/property.js");
var lit_1 = require("lit");
var Et2NumberReadonly = /** @class */ (function (_super) {
    __extends(Et2NumberReadonly, _super);
    function Et2NumberReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2NumberReadonly, "styles", {
        get: function () {
            return __spreadArrays((_super.styles ? (Array.isArray(_super.styles) ? _super.styles : [_super.styles]) : []), [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted(*) {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\tpadding-right: var(--sl-spacing-small);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted(*) {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\tpadding-right: var(--sl-spacing-small);\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2NumberReadonly.prototype.set_value = function (val) {
        var _a;
        if (val === null) {
            val = "";
        }
        else if ("" + val !== "") {
            // use decimal separator from user prefs
            var format = (_a = this.egw().preference('number_format')) !== null && _a !== void 0 ? _a : ".";
            val = Et2Number_1.formatNumber(parseFloat(val), format[0], format[1], this.precision);
        }
        // can not call super.set_value(), as it does not call the setter for value
        _super.prototype.value = val;
    };
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2NumberReadonly.prototype, "precision", void 0);
    return Et2NumberReadonly;
}(Et2TextboxReadonly_1.Et2TextboxReadonly));
exports.Et2NumberReadonly = Et2NumberReadonly;
// @ts-ignore TypeScript is not recognizing that Et2Textbox is a LitElement
customElements.define("et2-number_ro", Et2NumberReadonly);
var templateObject_1;
