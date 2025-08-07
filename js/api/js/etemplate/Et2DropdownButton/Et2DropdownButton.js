"use strict";
/**
 * EGroupware eTemplate2 - Dropdown Button widget
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
exports.Et2DropdownButton = void 0;
var lit_1 = require("lit");
var Et2WidgetWithSelectMixin_1 = require("../Et2Select/Et2WidgetWithSelectMixin");
var shoelace_1 = require("../Styles/shoelace");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var property_js_1 = require("lit/decorators/property.js");
/**
 * A split button - a button with a dropdown list
 *
 * There are several parts to the button UI:
 * - Container: This is what is percieved as the dropdown button, the whole package together
 *   - Button: The part on the left that can be clicked
 *   - Arrow: The button to display the choices
 *   - Menu: The list of choices
 *
 * Menu options are passed via the select_options.  They are normally the same
 * as for a select box, but the title can also be full HTML if needed.
 *
 */
var Et2DropdownButton = /** @class */ (function (_super) {
    __extends(Et2DropdownButton, _super);
    function Et2DropdownButton() {
        var _this = _super.call(this) || this;
        _this.placement = "bottom-end";
        // Bind handlers - parent already got click
        _this._handleSelect = _this._handleSelect.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2DropdownButton, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            :host {\n            \t/* Avoid unwanted style overlap from button */\n            \tborder: none;\n            \tbackground-color: none;\n            }\n            :host, sl-menu {\n                /**\n                Adapt shoelace color variables to what we want \n                Maybe some logical variables from etemplate2.css here? \n                */\n\t\t\t\t--sl-color-primary-50: rgb(244, 246, 247);\n\t\t\t\t--sl-color-primary-100: var(--gray-10);\n\t\t\t\t--sl-color-primary-300: var(--input-border-color);\n\t\t\t\t--sl-color-primary-400: var(--input-border-color);\n\t\t\t\t--sl-color-primary-600: var(--primary-background-color);\n\t\t\t\t--sl-color-primary-700: #505050;\n            }\n            :host(:active), :host([active]) {\n            \tbackground-color: initial;\n            }\n            sl-button-group {\n            \tdisplay: initial;\n            }\n            #main {\n            \tflex: 1 1 auto;\n            }\n\n\t\t\t\tet2-image {\n\t\t\t\t\twidth: 1em;\n\t\t\t\t}\n            "], ["\n            :host {\n            \t/* Avoid unwanted style overlap from button */\n            \tborder: none;\n            \tbackground-color: none;\n            }\n            :host, sl-menu {\n                /**\n                Adapt shoelace color variables to what we want \n                Maybe some logical variables from etemplate2.css here? \n                */\n\t\t\t\t--sl-color-primary-50: rgb(244, 246, 247);\n\t\t\t\t--sl-color-primary-100: var(--gray-10);\n\t\t\t\t--sl-color-primary-300: var(--input-border-color);\n\t\t\t\t--sl-color-primary-400: var(--input-border-color);\n\t\t\t\t--sl-color-primary-600: var(--primary-background-color);\n\t\t\t\t--sl-color-primary-700: #505050;\n            }\n            :host(:active), :host([active]) {\n            \tbackground-color: initial;\n            }\n            sl-button-group {\n            \tdisplay: initial;\n            }\n            #main {\n            \tflex: 1 1 auto;\n            }\n\n\t\t\t\tet2-image {\n\t\t\t\t\twidth: 1em;\n\t\t\t\t}\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DropdownButton, "properties", {
        get: function () {
            return __assign({}, _super.properties);
        },
        enumerable: false,
        configurable: true
    });
    Et2DropdownButton.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        // Rebind click to just the main button, not the whole thing
        this.removeEventListener("click", this._handleClick);
    };
    Et2DropdownButton.prototype._renderOptions = function () {
        // We have our own render, so we can handle it internally
    };
    Et2DropdownButton.prototype.render = function () {
        var _this = this;
        if (this.readonly) {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <sl-button-group>\n                <sl-button size=\"", "\" id=\"main\" part=\"main\"\n                           ?disabled=", "\n                           @click=", "\n                >\n                    ", "\n                </sl-button>\n                <sl-dropdown placement=", " hoist part=\"dropdown\">\n                    <slot name=\"trigger\" slot=\"trigger\">\n                        <sl-button part=\"trigger\" size=\"", "\" slot=\"trigger\" caret\n                               ?disabled=", "></sl-button>\n                    </slot>\n                    <sl-menu @sl-select=", " part=\"menu\">\n                        ", "\n                        <slot></slot>\n                    </sl-menu>\n                </sl-dropdown>\n            </sl-button-group>\n\t\t"], ["\n            <sl-button-group>\n                <sl-button size=\"", "\" id=\"main\" part=\"main\"\n                           ?disabled=", "\n                           @click=", "\n                >\n                    ", "\n                </sl-button>\n                <sl-dropdown placement=", " hoist part=\"dropdown\">\n                    <slot name=\"trigger\" slot=\"trigger\">\n                        <sl-button part=\"trigger\" size=\"", "\" slot=\"trigger\" caret\n                               ?disabled=", "></sl-button>\n                    </slot>\n                    <sl-menu @sl-select=", " part=\"menu\">\n                        ", "\n                        <slot></slot>\n                    </sl-menu>\n                </sl-dropdown>\n            </sl-button-group>\n\t\t"])), egwIsMobile() ? "large" : "medium", this.disabled, this._handleClick, this.label, this.placement, egwIsMobile() ? "large" : "medium", this.disabled, this._handleSelect, (this.select_options || []).map(function (option) { return _this._optionTemplate(option); }));
    };
    Et2DropdownButton.prototype._optionTemplate = function (option) {
        var icon = option.icon ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-image slot=\"prefix\" src=", " icon></et2-image>"], ["\n            <et2-image slot=\"prefix\" src=", " icon></et2-image>"])), option.icon) : '';
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <sl-menu-item\n                    value=\"", "\"\n                    type=\"", "checkbox\"\n                    ?checked=", "\n\t\t\t\t\ttitle=\"", "\"\n            >\n                ", "\n                ", "\n            </sl-menu-item>"], ["\n            <sl-menu-item\n                    value=\"", "\"\n                    type=\"", "checkbox\"\n                    ?checked=", "\n\t\t\t\t\ttitle=\"", "\"\n            >\n                ", "\n                ", "\n            </sl-menu-item>"])), option.value, if_defined_js_1.ifDefined(option.checkbox), option.checked, !option.title || this.noLang ? option.title : this.egw().lang(option.title), icon, this.noLang ? option.label : this.egw().lang(option.label));
    };
    Et2DropdownButton.prototype._handleSelect = function (ev) {
        this._value = ev.detail.item.value;
        // Trigger a change event
        this.dispatchEvent(new Event("change"));
        // Let it bubble, if anyone else is interested
    };
    Object.defineProperty(Et2DropdownButton.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (new_value) {
            var oldValue = this.value;
            this._value = new_value;
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DropdownButton.prototype, "_optionTargetNode", {
        get: function () {
            return this.shadowRoot.querySelector("sl-menu");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DropdownButton.prototype, "buttonNode", {
        get: function () {
            return this.shadowRoot.querySelector("#main");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DropdownButton.prototype, "triggerButtonNode", {
        get: function () {
            return this.shadowRoot.querySelector("[slot='trigger']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DropdownButton.prototype, "dropdownNode", {
        get: function () {
            return this.shadowRoot.querySelector("sl-dropdown");
        },
        enumerable: false,
        configurable: true
    });
    Et2DropdownButton.prototype.blur = function () {
        var _a;
        (_a = this.shadowRoot.querySelector("sl-button-group")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event('blur'));
    };
    Et2DropdownButton.prototype.focus = function () {
        var _a;
        (_a = this.shadowRoot.querySelector("sl-button-group")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event('focus'));
    };
    __decorate([
        property_js_1.property()
    ], Et2DropdownButton.prototype, "placement", void 0);
    return Et2DropdownButton;
}(Et2WidgetWithSelectMixin_1.Et2WidgetWithSelectMixin(lit_1.LitElement)));
exports.Et2DropdownButton = Et2DropdownButton;
// @ts-ignore TypeScript is not recognizing that Et2Button is a LitElement
customElements.define("et2-dropdown-button", Et2DropdownButton);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
