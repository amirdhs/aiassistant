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
exports.Et2Tab = void 0;
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../../Styles/shoelace");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var Et2Tab = /** @class */ (function (_super) {
    __extends(Et2Tab, _super);
    function Et2Tab() {
        var _this = _super.call(this) || this;
        _this.hidden = false;
        return _this;
    }
    Object.defineProperty(Et2Tab, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, shoelace_2.default, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t.tab {\n\t\t\t\t\tfont-size: var(--sl-size-x-small);\n\t\t\t\t\tgap: var(--sl-spacing-small);\n\t\t\t\t}\n\t\t\t\t.tab.tab--active:not(.tab--disabled) {color:var(--sl-color-gray-800)}\n\t\t\t\t.tab:hover:not(.tab--disabled) {color:var(--sl-color-gray-800)}\t\t\n\t\t\t"], ["\n\t\t\t\t.tab {\n\t\t\t\t\tfont-size: var(--sl-size-x-small);\n\t\t\t\t\tgap: var(--sl-spacing-small);\n\t\t\t\t}\n\t\t\t\t.tab.tab--active:not(.tab--disabled) {color:var(--sl-color-gray-800)}\n\t\t\t\t.tab:hover:not(.tab--disabled) {color:var(--sl-color-gray-800)}\t\t\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Tab.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.ondblclick) {
            this.addEventListener("dblclick", this.ondblclick);
        }
    };
    Et2Tab.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("dblclick", this.ondblclick);
    };
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Tab.prototype, "ondblclick", void 0);
    return Et2Tab;
}(Et2Widget_1.Et2Widget(shoelace_1.SlTab)));
exports.Et2Tab = Et2Tab;
customElements.define("et2-tab", Et2Tab);
var templateObject_1;
