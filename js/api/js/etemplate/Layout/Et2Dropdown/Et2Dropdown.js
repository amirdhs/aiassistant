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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Dropdown = void 0;
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var lit_1 = require("lit");
var Et2Dropdown = /** @class */ (function (_super) {
    __extends(Et2Dropdown, _super);
    function Et2Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2Dropdown, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tmax-width: fit-content;\n\t\t\t\t}\n\n\t\t\t\t.dropdown--open .dropdown__panel {\n\t\t\t\t\tbackground-color: var(--sl-panel-background-color);\n\t\t\t\t\tpadding: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tmax-width: fit-content;\n\t\t\t\t}\n\n\t\t\t\t.dropdown--open .dropdown__panel {\n\t\t\t\t\tbackground-color: var(--sl-panel-background-color);\n\t\t\t\t\tpadding: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Dropdown = __decorate([
        custom_element_js_1.customElement("et2-dropdown")
    ], Et2Dropdown);
    return Et2Dropdown;
}(Et2Widget_1.Et2Widget(shoelace_1.SlDropdown)));
exports.Et2Dropdown = Et2Dropdown;
var templateObject_1;
