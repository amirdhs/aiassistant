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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SwitchIcon = void 0;
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var live_js_1 = require("lit/directives/live.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var et2_core_common_1 = require("../et2_core_common");
/**
 * @summary Switch to allow choosing between two options, displayed with two images
 *
 * @slot on - Content shown when the switch is on
 * @slot off - Content shown when the switch is off
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @cssproperty --height - The height of the switch.
 * @cssproperty --width - The width of the switch.
 * @cssproperty --indicator-color - The color of the selected image
 *
 * @csspart form-control-label The label's wrapper
 * @csspart control The control's wrapper
 * @csspart switch-label The internal control's wrapper (sometimes needed for positioning)
 */
var Et2SwitchIcon = /** @class */ (function (_super) {
    __extends(Et2SwitchIcon, _super);
    function Et2SwitchIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Name of the icon displayed when the switch is on
         * @type {string}
         */
        _this.onIcon = "check";
        /**
         * Name of the icon displayed when the switch is off
         * @type {string}
         */
        _this.offIcon = "x";
        return _this;
    }
    Object.defineProperty(Et2SwitchIcon, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\t--indicator-color: var(--sl-color-primary-600);\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\t--height: 1em;\n\t\t\t\t}\n\n\t\t\t\t::part(control) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t::part(label) {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.label {\n\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tfont-size: var(--height);\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\n\t\t\t\tet2-image, ::slotted(:scope > *) {\n\t\t\t\t\tflex: 1 1 50%;\n\t\t\t\t\tfont-size: var(--width);\n\t\t\t\t}\n\n\t\t\t\tslot {\n\t\t\t\t\tcolor: var(--sl-input-placeholder-color);\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\tsl-switch[checked] slot[name=\"on\"], sl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tcolor: var(--indicator-color, inherit);\n\t\t\t\t}\n\n\t\t\t\tsl-switch::part(label), sl-switch::part(form-control) {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tmargin-inline-start: 0px;\n\t\t\t\t}\n\n\t\t\t\t.label:hover {\n\t\t\t\t\tbackground-color: var(--sl-input-background-color-hover);\n\t\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\t--indicator-color: var(--sl-color-primary-600);\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\t--height: 1em;\n\t\t\t\t}\n\n\t\t\t\t::part(control) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t::part(label) {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t.label {\n\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tfont-size: var(--height);\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\n\t\t\t\tet2-image, ::slotted(:scope > *) {\n\t\t\t\t\tflex: 1 1 50%;\n\t\t\t\t\tfont-size: var(--width);\n\t\t\t\t}\n\n\t\t\t\tslot {\n\t\t\t\t\tcolor: var(--sl-input-placeholder-color);\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\tsl-switch[checked] slot[name=\"on\"], sl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tcolor: var(--indicator-color, inherit);\n\t\t\t\t}\n\n\t\t\t\tsl-switch::part(label), sl-switch::part(form-control) {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tmargin-inline-start: 0px;\n\t\t\t\t}\n\n\t\t\t\t.label:hover {\n\t\t\t\t\tbackground-color: var(--sl-input-background-color-hover);\n\t\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SwitchIcon.prototype, "switch", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("sl-switch"); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Et2SwitchIcon.prototype, "input", {
        get: function () { return this.switch.shadowRoot.querySelector("input"); },
        enumerable: false,
        configurable: true
    });
    Et2SwitchIcon.prototype.getUpdateComplete = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _b.sent();
                        return [4 /*yield*/, ((_a = this.switch) === null || _a === void 0 ? void 0 : _a.updateComplete)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Object.defineProperty(Et2SwitchIcon.prototype, "value", {
        get: function () {
            var _a;
            return (_a = this.switch) === null || _a === void 0 ? void 0 : _a.checked;
        },
        set: function (new_value) {
            var _this = this;
            if (typeof new_value !== "boolean") {
                new_value = et2_core_common_1.et2_evalBool(new_value);
            }
            if (this.switch) {
                this.switch.checked = !!new_value;
            }
            else {
                this.updateComplete.then(function () { return _this.value = new_value; });
            }
        },
        enumerable: false,
        configurable: true
    });
    /** Overridden from parent because something in there clears / resets the check value */
    Et2SwitchIcon.prototype.validate = function (skipManual) {
        if (skipManual === void 0) { skipManual = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Et2SwitchIcon.prototype.labelTemplate = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", "\n            <span\n                    part=\"control\"\n                    class=", "\n                    aria-label=\"", "\"\n            >\n\t\t\t\t<slot name=\"on\">\n\t\t\t\t\t<et2-image class=\"image on\" src=", " title=\"", "\"></et2-image>\n\t\t\t\t</slot>\n\t\t\t\t<slot name=\"off\">\n\t\t\t\t\t<et2-image class=\"image off\" src=", " title=\"", "\"></et2-image>\n\t\t\t\t</slot>\n\t\t\t</span>\n\t\t"], ["\n            ",
            "\n            <span\n                    part=\"control\"\n                    class=",
            "\n                    aria-label=\"", "\"\n            >\n\t\t\t\t<slot name=\"on\">\n\t\t\t\t\t<et2-image class=\"image on\" src=", " title=\"", "\"></et2-image>\n\t\t\t\t</slot>\n\t\t\t\t<slot name=\"off\">\n\t\t\t\t\t<et2-image class=\"image off\" src=", " title=\"", "\"></et2-image>\n\t\t\t\t</slot>\n\t\t\t</span>\n\t\t"])), this.label ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<span\n                    part=\"form-control-label\"\n                    class=\"form-control__label\">", "\n\t\t\t</span>"], ["<span\n                    part=\"form-control-label\"\n                    class=\"form-control__label\">", "\n\t\t\t</span>"])), this.label) : lit_1.nothing, class_map_js_1.classMap({
            "label": true,
            "on": this.checked,
        }), this.label, this.onIcon, this.toggleOn, this.offIcon, this.toggleOff);
    };
    Et2SwitchIcon.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <sl-switch\n                    part=\"switch\"\n                    exportparts=\"base:switch-label control\"\n                    .label=", "\n                    .value=", "\n                    .checked=", "\n                    .disabled=", "\n                    .required=", "\n                    .helpText=", "\n                    @sl-change=", "\n            >\n                ", "\n            </sl-switch>\n\t\t"], ["\n            <sl-switch\n                    part=\"switch\"\n                    exportparts=\"base:switch-label control\"\n                    .label=", "\n                    .value=", "\n                    .checked=", "\n                    .disabled=", "\n                    .required=", "\n                    .helpText=", "\n                    @sl-change=",
            "\n            >\n                ", "\n            </sl-switch>\n\t\t"])), this.label, live_js_1.live(this.value), live_js_1.live(this.checked), live_js_1.live(this.disabled), this.required, this.helpText, function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.dispatchEvent(new Event("change", { bubbles: true }));
                        return [2 /*return*/];
                }
            });
        }); }, this.labelTemplate());
    };
    __decorate([
        property_js_1.property()
    ], Et2SwitchIcon.prototype, "onIcon", void 0);
    __decorate([
        property_js_1.property()
    ], Et2SwitchIcon.prototype, "offIcon", void 0);
    Et2SwitchIcon = __decorate([
        custom_element_js_1.customElement("et2-switch-icon")
    ], Et2SwitchIcon);
    return Et2SwitchIcon;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2SwitchIcon = Et2SwitchIcon;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
