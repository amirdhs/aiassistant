"use strict";
/**
 * EGroupware eTemplate2 - Colorpicker widget (WebComponent)
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Hadi Nategh
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Colorpicker = void 0;
var lit_1 = require("lit");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../Styles/shoelace");
var Et2Colorpicker = /** @class */ (function (_super) {
    __extends(Et2Colorpicker, _super);
    function Et2Colorpicker() {
        var _this = _super.call(this) || this;
        _this.hoist = true;
        _this.noFormatToggle = true;
        _this.uppercase = true;
        // Bind the handlers
        _this._handleClickClear = _this._handleClickClear.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Colorpicker, "styles", {
        get: function () {
            return __spreadArrays([
                shoelace_2.default
            ], _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.input-group__suffix{\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t}\n\t\t\t.input-group__container {\n\t\t\t\talign-items: center\n\t\t\t}\n\n\t\t\t.color-dropdown__trigger--empty .input__clear {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.input__clear {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tcolor: var(--sl-input-icon-color);\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t\tpadding: 0px;\n\t\t\t\ttransition: var(--sl-transition-fast) color;\n\t\t\t\tcursor: pointer;\n\t\t\t\t\n\t\t\t\t/* Positioning of clear button */\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: var(--sl-input-height-medium);\n\t\t\t\ttop: 0px;\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tbottom: 0px;\n\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.input-group__suffix{\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t}\n\t\t\t.input-group__container {\n\t\t\t\talign-items: center\n\t\t\t}\n\n\t\t\t.color-dropdown__trigger--empty .input__clear {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.input__clear {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tcolor: var(--sl-input-icon-color);\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t\tpadding: 0px;\n\t\t\t\ttransition: var(--sl-transition-fast) color;\n\t\t\t\tcursor: pointer;\n\t\t\t\t\n\t\t\t\t/* Positioning of clear button */\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: var(--sl-input-height-medium);\n\t\t\t\ttop: 0px;\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tbottom: 0px;\n\n\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Colorpicker.prototype.firstUpdated = function (_changedProperties) {
        _super.prototype.firstUpdated.call(this, _changedProperties);
        // Add in clear button - parent has no accessible slots
        lit_1.render(this._clearButtonTemplate(), this._buttonNode);
    };
    Object.defineProperty(Et2Colorpicker.prototype, "_buttonNode", {
        get: function () {
            return this.shadowRoot.querySelector("button[slot='trigger']");
        },
        enumerable: false,
        configurable: true
    });
    Et2Colorpicker.prototype._clearButtonTemplate = function () {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <button part=\"clear-button\" class=\"input__clear\" type=\"button\" tabindex=\"-1\"\n                    aria-label=\"", "\"\n                    @click=", ">\n                <slot name=\"clear-icon\">\n                    <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                </slot>\n            </button>\n\t\t"], ["\n            <button part=\"clear-button\" class=\"input__clear\" type=\"button\" tabindex=\"-1\"\n                    aria-label=\"", "\"\n                    @click=", ">\n                <slot name=\"clear-icon\">\n                    <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                </slot>\n            </button>\n\t\t"])), this.egw().lang("Clear entry"), this._handleClickClear);
    };
    Et2Colorpicker.prototype._handleClickClear = function (e) {
        e.stopImmediatePropagation();
        this.value = "";
    };
    return Et2Colorpicker;
}(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlColorPicker)));
exports.Et2Colorpicker = Et2Colorpicker;
customElements.define('et2-colorpicker', Et2Colorpicker);
var templateObject_1, templateObject_2;
