"use strict";
/**
 * EGroupware eTemplate2 - Switch widget
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
exports.Et2Switch = void 0;
var lit_1 = require("lit");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
require("../Et2Image/Et2Image");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../Styles/shoelace");
/**
 * Switch to turn on or off.  Like a checkbox, but different UI.
 *
 * Add "et2SlideSwitch" class to use an alternate UI with images.  Use CSS to set the images:
 *
 */
var Et2Switch = /** @class */ (function (_super) {
    __extends(Et2Switch, _super);
    function Et2Switch() {
        var _this = _super.call(this) || this;
        _this.isSlComponent = true;
        _this.toggleOn = '';
        _this.toggleOff = '';
        return _this;
    }
    Object.defineProperty(Et2Switch, "styles", {
        get: function () {
            return __spreadArrays(shoelace_2.default, _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  :host {\n\t\t\t\t/* Make it line up with the middle of surroundings */\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: -webkit-baseline-middle;\n\t\t\t  }\n\n\t\t\t  .switch {\n\t\t\t\tposition: relative;\n\t\t\t  }\n\n\t\t\t  .toggle__label {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tflex: 0 0 auto;\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: var(--width);\n\t\t\t\theight: var(--height);\n\t\t\t\tmargin: 0px;\n\t\t\t  }\n\n\t\t\t  .switch__thumb {\n\t\t\t\tz-index: var(--sl-z-index-tooltip);\n\t\t\t  }\n\n\t\t\t  ::slotted(span.label) {\n\t\t\t\twidth: var(--width);\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\theight: var(--height);\n\t\t\t  }\n\n\t\t\t  /* \n\t\t\t  Use two images instead of normal switch by adding et2_image_switch class\n\t\t\t  see etemplate.css for the rest (slotted label)\n\t\t\t   */\n\n\t\t\t  :host(.et2SlideSwitch) .switch {\n\t\t\t\tmin-width: 60px;\n\t\t\t\t--height: var(--sl-input-height-medium);\n\t\t\t\tborder-color: var(--sl-input-border-color);\n\t\t\t\tborder-width: var(--sl-input-border-width);\n\t\t\t\tborder-radius: var(--sl-border-radius-medium);\n\t\t\t\tborder-style: solid;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) .switch__control {\n\t\t\t\tvisibility: hidden;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) .switch__label {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) ::slotted(.label) {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  :host {\n\t\t\t\t/* Make it line up with the middle of surroundings */\n\t\t\t\tmargin: auto 0px;\n\t\t\t\tvertical-align: -webkit-baseline-middle;\n\t\t\t  }\n\n\t\t\t  .switch {\n\t\t\t\tposition: relative;\n\t\t\t  }\n\n\t\t\t  .toggle__label {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tflex: 0 0 auto;\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: var(--width);\n\t\t\t\theight: var(--height);\n\t\t\t\tmargin: 0px;\n\t\t\t  }\n\n\t\t\t  .switch__thumb {\n\t\t\t\tz-index: var(--sl-z-index-tooltip);\n\t\t\t  }\n\n\t\t\t  ::slotted(span.label) {\n\t\t\t\twidth: var(--width);\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\theight: var(--height);\n\t\t\t  }\n\n\t\t\t  /* \n\t\t\t  Use two images instead of normal switch by adding et2_image_switch class\n\t\t\t  see etemplate.css for the rest (slotted label)\n\t\t\t   */\n\n\t\t\t  :host(.et2SlideSwitch) .switch {\n\t\t\t\tmin-width: 60px;\n\t\t\t\t--height: var(--sl-input-height-medium);\n\t\t\t\tborder-color: var(--sl-input-border-color);\n\t\t\t\tborder-width: var(--sl-input-border-width);\n\t\t\t\tborder-radius: var(--sl-border-radius-medium);\n\t\t\t\tborder-style: solid;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) .switch__control {\n\t\t\t\tvisibility: hidden;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) .switch__label {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t  }\n\n\t\t\t  :host(.et2SlideSwitch) ::slotted(.label) {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t  }\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Switch, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /* label to show when the toggle switch is on */
                toggleOn: { type: String }, 
                /* label to show when the toggle switch is off */
                toggleOff: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Switch.prototype.updated = function (changedProperties) {
        lit_1.render(this.labelTemplate(), this);
        if (changedProperties.has("toggleOn") || changedProperties.has("toggleOff") || changedProperties.has("label")) {
            if (!this.toggleOn && !this.toggleOff && this._labelNode) {
                this._labelNode.childNodes.forEach(function (c) { return c.remove(); });
            }
            else {
                if (this._labelNode) {
                    this._labelNode.querySelector('.on').textContent = this.toggleOn;
                    this._labelNode.querySelector('.off').textContent = this.toggleOff;
                }
                this.shadowRoot.querySelector('.switch__label').classList.add('toggle__label');
            }
        }
    };
    Object.defineProperty(Et2Switch.prototype, "value", {
        get: function () {
            return this.checked;
        },
        set: function (new_value) {
            var _a, _b;
            this.requestUpdate("checked");
            if (this.toggleOn || this.toggleOf) {
                if (new_value) {
                    (_a = this._labelNode) === null || _a === void 0 ? void 0 : _a.classList.add('on');
                }
                else {
                    (_b = this._labelNode) === null || _b === void 0 ? void 0 : _b.classList.remove('on');
                }
            }
            this.checked = !!new_value;
            return;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Switch.prototype, "_labelNode", {
        get: function () {
            return this.querySelector(".label");
        },
        enumerable: false,
        configurable: true
    });
    Et2Switch.prototype.labelTemplate = function () {
        var labelClass = this.checked ? "label on" : "label";
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <span class=", " aria-label=\"", "\">\n\t\t\t\t<span class=\"on\">", "</span>\n\t\t\t\t<span class=\"off\">", "</span>\n\t\t\t</span>\n\t\t"], ["\n            <span class=", " aria-label=\"", "\">\n\t\t\t\t<span class=\"on\">", "</span>\n\t\t\t\t<span class=\"off\">", "</span>\n\t\t\t</span>\n\t\t"])), labelClass, this.label, this.toggleOn, this.toggleOff);
    };
    return Et2Switch;
}(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlSwitch)));
exports.Et2Switch = Et2Switch;
customElements.define("et2-switch", Et2Switch);
var templateObject_1, templateObject_2;
