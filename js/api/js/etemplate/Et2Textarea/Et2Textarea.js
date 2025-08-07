"use strict";
/**
 * EGroupware eTemplate2 - Textbox widget (WebComponent)
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
exports.Et2Textarea = void 0;
var lit_1 = require("lit");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../Styles/shoelace");
var Et2Textarea = /** @class */ (function (_super) {
    __extends(Et2Textarea, _super);
    function Et2Textarea() {
        var _this = _super.call(this) || this;
        _this.rows = "";
        return _this;
    }
    Object.defineProperty(Et2Textarea, "styles", {
        get: function () {
            return __spreadArrays(shoelace_2.default, _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.textarea--resize-vertical {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t:host::part(form-control) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\talign-items: stretch !important;\n\t\t\t\t}\n\n\t\t\t\t:host::part(form-control-input), :host::part(textarea) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input .textarea--standard.textarea--focused:not(.textarea--disabled){\n\t\t\t\t\twidth: calc(100% - (2 * var(--sl-focus-ring-width)));\n\t\t\t\t\tmargin-left: var(--sl-focus-ring-width);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.textarea--resize-vertical {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t:host::part(form-control) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\talign-items: stretch !important;\n\t\t\t\t}\n\n\t\t\t\t:host::part(form-control-input), :host::part(textarea) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input .textarea--standard.textarea--focused:not(.textarea--disabled){\n\t\t\t\t\twidth: calc(100% - (2 * var(--sl-focus-ring-width)));\n\t\t\t\t\tmargin-left: var(--sl-focus-ring-width);\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Textarea, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Specify the width of the text area.
                 * If not set, it will expand to fill the space available.
                 */
                width: { type: String }, 
                /**
                 * Specify the height of the text area.
                 * If not set, it will expand to fill the space available.
                 */
                height: { type: String }, onkeypress: Function });
        },
        enumerable: false,
        configurable: true
    });
    Et2Textarea.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.__width) {
            this.style.width = this.__width;
        }
        if (this.__height) {
            this.style.height = this.__height;
        }
    };
    Object.defineProperty(Et2Textarea.prototype, "width", {
        /**
         * Use width and height attributes to affect style
         * It would be better to deprecate these and just use CSS
         *
         * @param value
         */
        set: function (value) {
            var oldValue = this.__width;
            this.__width = value;
            this.requestUpdate("width", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Textarea.prototype, "height", {
        set: function (value) {
            var oldValue = this.__height;
            this.__height = value;
            this.requestUpdate("height", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    /** Override some parent stuff to get sizing how we like it **/
    Et2Textarea.prototype.setTextareaMaxHeight = function () {
        this._inputNode.style.maxHeight = 'inherit';
    };
    Object.defineProperty(Et2Textarea.prototype, "_inputNode", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("textarea");
        },
        enumerable: false,
        configurable: true
    });
    return Et2Textarea;
}(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlTextarea)));
exports.Et2Textarea = Et2Textarea;
customElements.define("et2-textarea", Et2Textarea);
var templateObject_1;
