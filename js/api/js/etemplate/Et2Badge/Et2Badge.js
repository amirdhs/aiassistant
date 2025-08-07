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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Badge = void 0;
var shoelace_1 = require("@shoelace-style/shoelace");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2Badge = /** @class */ (function (_super) {
    __extends(Et2Badge, _super);
    function Et2Badge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "";
        return _this;
    }
    Object.defineProperty(Et2Badge.prototype, "value", {
        get: function () {
            return this.innerText;
        },
        set: function (new_value) {
            this.innerText = new_value;
        },
        enumerable: false,
        configurable: true
    });
    Et2Badge.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "label", "value", "class", "href", "statustext");
    };
    Et2Badge.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Badge.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Badge.prototype, "label", void 0);
    Et2Badge = __decorate([
        custom_element_js_1.customElement("et2-badge")
    ], Et2Badge);
    return Et2Badge;
}(Et2Widget_1.Et2Widget(shoelace_1.SlBadge)));
exports.Et2Badge = Et2Badge;
