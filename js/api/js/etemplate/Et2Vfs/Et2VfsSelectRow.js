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
exports.Et2VfsSelectRow = void 0;
var lit_1 = require("lit");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var shoelace_1 = require("../Styles/shoelace");
var Et2VfsSelectRow_styles_1 = require("./Et2VfsSelectRow.styles");
/**
 * @summary Shows one file in the Et2VfsSelectDialog list
 *
 * @slot prefix - Used to prepend an icon or similar element between the checked icon and the mime icon
 * @slot suffix - Used to append an icon or similar element after the file name
 *
 * @csspart base - The component’s base wrapper.
 * @csspart checked-icon - The checked icon, an <sl-icon> element.
 */
var Et2VfsSelectRow = /** @class */ (function (_super) {
    __extends(Et2VfsSelectRow, _super);
    function Et2VfsSelectRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Draws the file in a disabled state, preventing selection. */
        _this.disabled = false;
        _this.current = false; // the user has keyed into the file, but hasn't selected it yet (shows a highlight)
        _this.selected = false; // the file is selected and has aria-selected="true"
        _this.hasHover = false; // we need this because Safari doesn't honor :hover styles while dragging
        return _this;
    }
    Object.defineProperty(Et2VfsSelectRow, "styles", {
        get: function () {
            return __spreadArrays([
                shoelace_1.default
            ], _super.styles, [
                Et2VfsSelectRow_styles_1.default
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsSelectRow.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.setAttribute('role', 'option');
        this.setAttribute('aria-selected', 'false');
    };
    Object.defineProperty(Et2VfsSelectRow.prototype, "label", {
        get: function () {
            var _a, _b;
            return ((_a = this.value) === null || _a === void 0 ? void 0 : _a.label) || ((_b = this.value) === null || _b === void 0 ? void 0 : _b.name) || "";
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsSelectRow.prototype.handleMouseEnter = function () {
        this.hasHover = true;
        this.requestUpdate("hasHover", false);
    };
    Et2VfsSelectRow.prototype.handleMouseLeave = function () {
        this.hasHover = false;
        this.requestUpdate("hasHover", true);
    };
    Et2VfsSelectRow.prototype.render = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n                    @mouseenter=", "\n                    @mouseleave=", "\n            >\n                <sl-icon part=\"checked-icon\" class=\"file__check\" name=\"check-lg\" aria-hidden=\"true\"></sl-icon>\n                <slot part=\"prefix\" name=\"prefix\" class=\"file__prefix\"></slot>\n                ", "\n                ", "\n                <slot part=\"suffix\" name=\"suffix\" class=\"file__suffix\"></slot>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"base\"\n                    class=",
            "\n                    @mouseenter=", "\n                    @mouseleave=", "\n            >\n                <sl-icon part=\"checked-icon\" class=\"file__check\" name=\"check-lg\" aria-hidden=\"true\"></sl-icon>\n                <slot part=\"prefix\" name=\"prefix\" class=\"file__prefix\"></slot>\n                ",
            "\n                ", "\n                <slot part=\"suffix\" name=\"suffix\" class=\"file__suffix\"></slot>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            file: true,
            'file--current': this.current,
            'file--disabled': this.disabled,
            'file--selected': this.selected,
            'file--hover': this.hasHover
        }), this.handleMouseEnter, this.handleMouseLeave, typeof this.value.icon == "string" ? lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                                         <et2-image src=", "></et2-image>"], ["\n                                                         <et2-image src=", "></et2-image>"])), this.value.icon) : lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                      <et2-vfs-mime .value=", "></et2-vfs-mime>"], ["\n                      <et2-vfs-mime .value=", "></et2-vfs-mime>"])), this.value), this.value.name);
    };
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2VfsSelectRow.prototype, "value", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2VfsSelectRow.prototype, "disabled", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectRow.prototype, "current", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectRow.prototype, "selected", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectRow.prototype, "hasHover", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectRow.prototype, "label", null);
    return Et2VfsSelectRow;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2VfsSelectRow = Et2VfsSelectRow;
customElements.define("et2-vfs-select-row", Et2VfsSelectRow);
var templateObject_1, templateObject_2, templateObject_3;
