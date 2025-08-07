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
exports.Et2ButtonToggle = void 0;
var Et2SwitchIcon_1 = require("../Et2Switch/Et2SwitchIcon");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
/**
 * @summary A button to allow turning something on or off, displayed with two images instead of the normal button UI
 *
 * @slot - Add an image directly instead of setting the `icon` property
 * @slot help-text - Text that describes how to use the button. Alternatively, you can use the `help-text` attribute.
 *
 * @cssproperty --indicator-color - The color of the selected image
 */
var Et2ButtonToggle = /** @class */ (function (_super) {
    __extends(Et2ButtonToggle, _super);
    function Et2ButtonToggle() {
        var _this = _super.call(this) || this;
        /**
         * Name of the icon used.
         * Alternatively, you can add an `et2-image` as a child
         * @type {string}
         */
        _this.icon = "check";
        /**
         * Specify the icon used when the toggle is off.  Defaults to `icon` but dimmed.
         * @type {string}
         */
        _this.offIcon = "";
        /**
         *
         * @type {string}
         */
        _this.variant = "neutral";
        _this.handleIconChanged = _this.handleIconChanged.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2ButtonToggle, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\tslot[name] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\twidth: 1em;\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tfont-size: inherit;\n\t\t\t\t}\n\n\t\t\t\tsl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tcolor: var(--sl-color-neutral-400);\n\n\t\t\t\t\timg {\n\t\t\t\t\t\tfilter: brightness(0) contrast(.3) opacity(.7);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsl-switch[checked] slot[name=\"on\"], sl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\t.label {\n\t\t\t\t\tborder: var(--sl-input-border-width) solid var(--sl-input-border-color);\n\t\t\t\t\tborder-radius: var(--sl-input-border-radius-medium);\n\t\t\t\t\tbackground-color: var(--sl-input-background-color);\n\t\t\t\t\twidth: var(--sl-input-height-medium);\n\t\t\t\t\theight: var(--sl-input-height-medium);\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t:host .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-input-background-color-hover);\n\t\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\t}\n\n\t\t\t\t/* Success */\n\n\t\t\t\t:host([variant=success]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-success-600);\n\t\t\t\t\tborder-color: var(--sl-color-success-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=success]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-success-500);\n\t\t\t\t\tborder-color: var(--sl-color-success-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Neutral */\n\n\t\t\t\t:host([variant=neutral]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-600);\n\t\t\t\t\tborder-color: var(--sl-color-neutral-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=neutral]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-500);\n\t\t\t\t\tborder-color: var(--sl-color-neutral-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Warning */\n\n\t\t\t\t:host([variant=warning]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-warning-600);\n\t\t\t\t\tborder-color: var(--sl-color-warning-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=warning]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-warning-500);\n\t\t\t\t\tborder-color: var(--sl-color-warning-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Danger */\n\n\t\t\t\t:host([variant=danger]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-danger-600);\n\t\t\t\t\tborder-color: var(--sl-color-danger-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=danger]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-danger-500);\n\t\t\t\t\tborder-color: var(--sl-color-danger-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t"], ["\n\t\t\t\tslot[name] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\twidth: 1em;\n\t\t\t\t}\n\n\t\t\t\tsl-switch {\n\t\t\t\t\tfont-size: inherit;\n\t\t\t\t}\n\n\t\t\t\tsl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tcolor: var(--sl-color-neutral-400);\n\n\t\t\t\t\timg {\n\t\t\t\t\t\tfilter: brightness(0) contrast(.3) opacity(.7);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsl-switch[checked] slot[name=\"on\"], sl-switch:not([checked]) slot[name=\"off\"] {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\t.label {\n\t\t\t\t\tborder: var(--sl-input-border-width) solid var(--sl-input-border-color);\n\t\t\t\t\tborder-radius: var(--sl-input-border-radius-medium);\n\t\t\t\t\tbackground-color: var(--sl-input-background-color);\n\t\t\t\t\twidth: var(--sl-input-height-medium);\n\t\t\t\t\theight: var(--sl-input-height-medium);\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t:host .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-input-background-color-hover);\n\t\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\t}\n\n\t\t\t\t/* Success */\n\n\t\t\t\t:host([variant=success]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-success-600);\n\t\t\t\t\tborder-color: var(--sl-color-success-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=success]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-success-500);\n\t\t\t\t\tborder-color: var(--sl-color-success-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Neutral */\n\n\t\t\t\t:host([variant=neutral]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-600);\n\t\t\t\t\tborder-color: var(--sl-color-neutral-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=neutral]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-500);\n\t\t\t\t\tborder-color: var(--sl-color-neutral-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Warning */\n\n\t\t\t\t:host([variant=warning]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-warning-600);\n\t\t\t\t\tborder-color: var(--sl-color-warning-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=warning]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-warning-500);\n\t\t\t\t\tborder-color: var(--sl-color-warning-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t/* Danger */\n\n\t\t\t\t:host([variant=danger]) .label {\n\t\t\t\t\tbackground-color: var(--sl-color-danger-600);\n\t\t\t\t\tborder-color: var(--sl-color-danger-600);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([variant=danger]) .label:hover {\n\t\t\t\t\tbackground-color: var(--sl-color-danger-500);\n\t\t\t\t\tborder-color: var(--sl-color-danger-500);\n\t\t\t\t\t--indicator-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2ButtonToggle.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        // If a child was added as part of loading, set up 1 child into both on/off slots
                        if (this.children && this.childElementCount == 1 && !this.children[0].hasAttribute("slot")) {
                            this.adoptIcon(this.children[0]);
                        }
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.mutationObserver = new MutationObserver(this.handleIconChanged);
                        this.mutationObserver.observe(this, { subtree: true, childList: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    Et2ButtonToggle.prototype.willUpdate = function (changedProperties) {
        if (changedProperties.has("icon") || this.icon && (!this.onIcon || this.onIcon == "check")) {
            this.onIcon = this.icon;
            this.offIcon = this.offIcon || this.icon;
        }
    };
    // Take a single element and give it the needed slots so it works
    Et2ButtonToggle.prototype.adoptIcon = function (icon) {
        var off = icon.cloneNode();
        icon.setAttribute("slot", "on");
        off.setAttribute("slot", "off");
        this.append(off);
    };
    // Listen for added icon and adopt it (needs to not have a slot)
    Et2ButtonToggle.prototype.handleIconChanged = function (mutations) {
        var _this = this;
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            mutation.addedNodes.forEach(function (n) {
                if (typeof n.hasAttribute == "function" && !n.hasAttribute("slot")) {
                    _this.adoptIcon(n);
                }
            });
        }
    };
    __decorate([
        property_js_1.property()
    ], Et2ButtonToggle.prototype, "icon", void 0);
    __decorate([
        property_js_1.property()
    ], Et2ButtonToggle.prototype, "offIcon", void 0);
    __decorate([
        property_js_1.property()
    ], Et2ButtonToggle.prototype, "variant", void 0);
    Et2ButtonToggle = __decorate([
        custom_element_js_1.customElement("et2-button-toggle")
    ], Et2ButtonToggle);
    return Et2ButtonToggle;
}(Et2SwitchIcon_1.Et2SwitchIcon));
exports.Et2ButtonToggle = Et2ButtonToggle;
var templateObject_1;
