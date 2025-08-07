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
exports.Et2MenuItem = void 0;
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var shoelace_1 = require("@shoelace-style/shoelace");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var Et2MenuItem = /** @class */ (function (_super) {
    __extends(Et2MenuItem, _super);
    function Et2MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2MenuItem.prototype.getValue = function () {
        return this.value;
    };
    Et2MenuItem.prototype.isDirty = function () {
        return false;
    };
    Et2MenuItem.prototype.resetDirty = function () { };
    Et2MenuItem.prototype.isValid = function () { return true; };
    Et2MenuItem = __decorate([
        custom_element_js_1.customElement('et2-menu-item')
    ], Et2MenuItem);
    return Et2MenuItem;
}(Et2Widget_1.Et2Widget(shoelace_1.SlMenuItem)));
exports.Et2MenuItem = Et2MenuItem;
