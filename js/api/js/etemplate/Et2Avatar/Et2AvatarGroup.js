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
exports.Et2AvatarGroup = void 0;
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var repeat_js_1 = require("lit/directives/repeat.js");
var shoelace_1 = require("../Styles/shoelace");
/**
 * Show multiple avatars
 */
var Et2AvatarGroup = /** @class */ (function (_super) {
    __extends(Et2AvatarGroup, _super);
    function Et2AvatarGroup() {
        var _this = _super.call(this) || this;
        _this.value = [];
        return _this;
    }
    Object.defineProperty(Et2AvatarGroup, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default,
                // TODO: More work on sizing needed to better adapt to available space
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\t\t\tet2-avatar {\n\t\t\t\t--size: 1.5rem;\n\t\t\t\tflex: 0 0 auto;\n\t\t\t\tmin-width: 20px;\n\t\t\t\ttransition-duration:0.1s;\n\t\t\t}\n\t\t\tet2-avatar:not(:first-of-type) {\n\t\t\t\tmargin-left: -0.5rem;\n\t\t\t}\n\t\t\tet2-avatar::part(base) {\n\t\t\t\tborder: solid 2px var(--sl-color-neutral-0);\n\t\t\t}\n\t\t\tet2-avatar:hover {\n\t\t\t\t--size: 2.5rem;\n\t\t\t\toverflow: visible;\n\t\t\t\tz-index: 11;\n\t\t\t\ttransition-delay: 1s;\n\t\t\t\ttransition-suration:0.5s\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\t\t\tet2-avatar {\n\t\t\t\t--size: 1.5rem;\n\t\t\t\tflex: 0 0 auto;\n\t\t\t\tmin-width: 20px;\n\t\t\t\ttransition-duration:0.1s;\n\t\t\t}\n\t\t\tet2-avatar:not(:first-of-type) {\n\t\t\t\tmargin-left: -0.5rem;\n\t\t\t}\n\t\t\tet2-avatar::part(base) {\n\t\t\t\tborder: solid 2px var(--sl-color-neutral-0);\n\t\t\t}\n\t\t\tet2-avatar:hover {\n\t\t\t\t--size: 2.5rem;\n\t\t\t\toverflow: visible;\n\t\t\t\tz-index: 11;\n\t\t\t\ttransition-delay: 1s;\n\t\t\t\ttransition-suration:0.5s\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2AvatarGroup, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * List of contact IDs
                 */
                value: {
                    type: Array
                } });
        },
        enumerable: false,
        configurable: true
    });
    Et2AvatarGroup.prototype.set_value = function (new_value) {
        if (typeof new_value !== "object") {
            new_value = new_value.split(",");
        }
        this.value = new_value;
    };
    Et2AvatarGroup.prototype.avatarTemplate = function (contact) {
        if (typeof contact == "string") {
            contact = { id: contact };
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-avatar\n                    .contactId=\"", "\"\n                    .label=\"", "\"\n                    .title=\"", "\"\n                    shape=\"circle\"\n                    size=\"\"\n            ></et2-avatar>"], ["\n            <et2-avatar\n                    .contactId=\"", "\"\n                    .label=\"", "\"\n                    .title=\"", "\"\n                    shape=\"circle\"\n                    size=\"\"\n            ></et2-avatar>"])), contact.id, contact.label, contact.label);
    };
    Et2AvatarGroup.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", ""], ["\n            ", ""])), repeat_js_1.repeat(this.value, function (contact) { return contact.id; }, function (contact) { return _this.avatarTemplate(contact); }));
    };
    return Et2AvatarGroup;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2AvatarGroup = Et2AvatarGroup;
customElements.define("et2-avatar-group", Et2AvatarGroup);
var templateObject_1, templateObject_2, templateObject_3;
