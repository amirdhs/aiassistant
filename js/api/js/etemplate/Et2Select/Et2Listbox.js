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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Listbox = void 0;
var Et2WidgetWithSelectMixin_1 = require("./Et2WidgetWithSelectMixin");
var RowLimitedMixin_1 = require("../Layout/RowLimitedMixin");
var shoelace_1 = require("../Styles/shoelace");
var lit_1 = require("lit");
var repeat_js_1 = require("lit/directives/repeat.js");
var property_js_1 = require("lit/decorators/property.js");
/**
 * A selectbox that shows more than one row at a time
 *
 * Set rows attribute to adjust how many rows are visible at once
 *
 * Use Et2Selectbox in most cases, it's better.
 */
var Et2Listbox = /** @class */ (function (_super) {
    __extends(Et2Listbox, _super);
    function Et2Listbox() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.multiple = false;
        _this.handleSelect = _this.handleSelect.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Listbox, "styles", {
        get: function () {
            return [
                // Parent (SlMenu) returns a single cssResult, not an array
                shoelace_1.default,
                _super.styles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\tflex: 1 0 auto;\n\t\t\t\t--icon-width: 20px;\n\t\t\t}\n\t\t\t\n\t\t\t::slotted(img), img {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t\t\n\t\t\t.menu {\n\t\t\t\t/* Get rid of padding before/after options */\n\t\t\t\tpadding: 0px;\n\t\t\t\n\t\t\t\t/* No horizontal scrollbar, even if options are long */\n\t\t\t\toverflow-x: clip;\n\t\t\t}\n\t\t\t/* Ellipsis when too small */\n\n\t\t\t  sl-option.option__label {\n\t\t\t\tdisplay: block;\n    \t\t\ttext-overflow: ellipsis;\n    \t\t\t/* This is usually not used due to flex, but is the basis for ellipsis calculation */\n    \t\t\twidth: 10ex;\n\t\t\t}\n\n\t\t\t  :host([rows]) .menu {\n\t\t\t\theight: calc(var(--rows, 5) * 1.9rem);\n\t\t\t\toverflow-y: auto;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\tflex: 1 0 auto;\n\t\t\t\t--icon-width: 20px;\n\t\t\t}\n\t\t\t\n\t\t\t::slotted(img), img {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t\t\n\t\t\t.menu {\n\t\t\t\t/* Get rid of padding before/after options */\n\t\t\t\tpadding: 0px;\n\t\t\t\n\t\t\t\t/* No horizontal scrollbar, even if options are long */\n\t\t\t\toverflow-x: clip;\n\t\t\t}\n\t\t\t/* Ellipsis when too small */\n\n\t\t\t  sl-option.option__label {\n\t\t\t\tdisplay: block;\n    \t\t\ttext-overflow: ellipsis;\n    \t\t\t/* This is usually not used due to flex, but is the basis for ellipsis calculation */\n    \t\t\twidth: 10ex;\n\t\t\t}\n\n\t\t\t  :host([rows]) .menu {\n\t\t\t\theight: calc(var(--rows, 5) * 1.9rem);\n\t\t\t\toverflow-y: auto;\n\t\t\t}\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Et2Listbox.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.addEventListener("sl-select", this.handleSelect);
        this.updateComplete.then(function () {
            _this.addEventListener("sl-change", _this._triggerChange);
        });
    };
    Et2Listbox.prototype.getAllItems = function () {
        var _a, _b;
        return (_b = Array.from((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('sl-menu-item'))) !== null && _b !== void 0 ? _b : [];
    };
    /**
     * Handle an item was selected
     *
     * Toggle the checkmark and fire the changed event
     *
     * @param {MouseEvent} event
     */
    Et2Listbox.prototype.handleSelect = function (event) {
        var _a;
        var item = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.item;
        if (!item) {
            return;
        }
        if (!this.multiple) {
            this.getAllItems().forEach(function (i) { return i.checked = false; });
            item.checked = true;
        }
        this.dispatchEvent(new Event("change"));
    };
    Object.defineProperty(Et2Listbox.prototype, "value", {
        get: function () {
            var _a;
            var value = this.hasUpdated ? this.getAllItems()
                .filter(function (item) { return item.checked; })
                .map(function (item) { return item.value; }) : (_a = this.__value) !== null && _a !== void 0 ? _a : [];
            return this.multiple ? value : value.pop();
        },
        set: function (new_value) {
            var oldValue = this.value;
            if (typeof new_value == "string") {
                new_value = [new_value];
            }
            this.__value = new_value;
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Et2Listbox.prototype._optionTemplate = function (option) {
        var icon = option.icon ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-image slot=\"prefix\" part=\"icon\" style=\"width: var(--icon-width)\"\n                       src=\"", "\"></et2-image>"], ["\n            <et2-image slot=\"prefix\" part=\"icon\" style=\"width: var(--icon-width)\"\n                       src=\"", "\"></et2-image>"])), option.icon) : "";
        var checked = this.__value == null ?
            option.value === this.value || this.multiple && this.value.indexOf(option.value) >= 0 :
            this.__value.indexOf(option.value) >= 0;
        // Tag used must match this.optionTag, but you can't use the variable directly.
        // Pass option along so SearchMixin can grab it if needed
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <sl-menu-item\n                    value=\"", "\"\n                    title=\"", "\"\n                    class=\"", "\" .option=", "\n                    type=\"checkbox\"\n                    ?checked=", "\n            >\n                ", "\n                ", "\n            </sl-menu-item>"], ["\n            <sl-menu-item\n                    value=\"", "\"\n                    title=\"", "\"\n                    class=\"", "\" .option=", "\n                    type=\"checkbox\"\n                    ?checked=", "\n            >\n                ", "\n                ", "\n            </sl-menu-item>"])), option.value, !option.title || this.noLang ? option.title : this.egw().lang(option.title), option.class, option, checked, icon, this.noLang ? option.label : this.egw().lang(option.label));
    };
    Et2Listbox.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <sl-menu class=\"menu\">\n                ", "\n            </sl-menu>\n\t\t"], ["\n            <sl-menu class=\"menu\">\n                ", "\n            </sl-menu>\n\t\t"])), repeat_js_1.repeat(this.select_options, function (o) { return o.value; }, function (option) { return _this._optionTemplate(option); }));
    };
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Listbox.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Listbox.prototype, "value", null);
    return Et2Listbox;
}(RowLimitedMixin_1.RowLimitedMixin(Et2WidgetWithSelectMixin_1.Et2WidgetWithSelectMixin(lit_1.LitElement))));
exports.Et2Listbox = Et2Listbox;
customElements.define("et2-listbox", Et2Listbox);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
