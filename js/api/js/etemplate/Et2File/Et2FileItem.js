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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2FileItem = void 0;
var shoelace_1 = require("../Styles/shoelace");
var Et2FileItem_styles_1 = require("./Et2FileItem.styles");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var slot_1 = require("../Et2Widget/slot");
var property_js_1 = require("lit/decorators/property.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var event_1 = require("../Et2Widget/event");
var if_defined_js_1 = require("lit/directives/if-defined.js");
/**
 * @summary Displays a single (uploaded) file with file information, upload status, etc.
 *
 *
 * @dependency sl-format-bytes
 * @dependency sl-progress-bar
 * @dependency sl-icon
 *
 * @slot - File name
 * @slot image - The file's image (mimetype icon, status icon, etc)
 * @slot close-button - Close button
 * @event load - Emitted when file is loaded
 *
 * @csspart base - Component internal wrapper
 */
var Et2FileItem = /** @class */ (function (_super) {
    __extends(Et2FileItem, _super);
    function Et2FileItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Draws the item in a loading state. */
        _this.loading = false;
        /** The item's theme variant. */
        _this.variant = "default";
        /** Different ways of displaying the item.  Large for a few files, small is like a tag, list is for several files */
        _this.display = "large";
        /** Makes the item closable (removable). */
        _this.closable = false;
        /** A unique value to store in the item. This can be used as a way to identify items. */
        _this.value = "";
        /** The file's thumbnail image */
        _this.image = "";
        /** Indicates whether the file item is hidden. */
        _this.hidden = false;
        _this.hasSlotController = new slot_1.HasSlotController(_this, "image", "suffix");
        return _this;
    }
    Object.defineProperty(Et2FileItem, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2FileItem_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2FileItem.prototype, "base", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[part~="base"]'); },
        enumerable: false,
        configurable: true
    });
    Et2FileItem.prototype.updated = function (changedProperties) {
        if (changedProperties.has('hidden')) {
            this.handleHiddenChange();
        }
    };
    /* Hides the file item */
    Et2FileItem.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.hidden) {
                    return [2 /*return*/, undefined];
                }
                this.hidden = true;
                this.requestUpdate("hidden");
                return [2 /*return*/, event_1.waitForEvent(this, 'sl-after-hide')];
            });
        });
    };
    Et2FileItem.prototype.error = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.variant = "danger";
                this.loading = false;
                if (message) {
                    this.innerHTML += "<br />" + message;
                }
                this.requestUpdate("variant");
                return [2 /*return*/];
            });
        });
    };
    Et2FileItem.prototype.handleCloseClick = function (e) {
        e.stopPropagation();
        this.hide();
    };
    Et2FileItem.prototype.handleHiddenChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.hidden) {
                    // Show
                    this.dispatchEvent(new Event('sl-show', { bubbles: true }));
                    // TODO: Animation?
                    this.base.hidden = false;
                    this.dispatchEvent(new Event('sl-after-show', { bubbles: true }));
                }
                else {
                    // Hide
                    this.dispatchEvent(new Event('sl-hide', { bubbles: true }));
                    // TODO: Animation?
                    this.base.hidden = true;
                    this.dispatchEvent(new Event('sl-after-hide', { bubbles: true }));
                }
                return [2 /*return*/];
            });
        });
    };
    Et2FileItem.prototype.handleTriggerKeyUp = function (event) {
        // Prevent space from triggering a click event in Firefox
        if (event.key === "\xA0 ") {
            event.preventDefault();
        }
    };
    Et2FileItem.prototype.render = function () {
        var _a;
        var progressBar = lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["",
            ""])), this.loading ? lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <sl-progress-bar\n                    class=\"file-item__progress-bar\"\n                    ?indeterminate=", "\n                    value=", "\n            ></sl-progress-bar>"], ["\n            <sl-progress-bar\n                    class=\"file-item__progress-bar\"\n                    ?indeterminate=", "\n                    value=", "\n            ></sl-progress-bar>"])), this.progress === undefined, if_defined_js_1.ifDefined(this.progress)) : lit_1.nothing);
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n            >\n        <span class=\"file-item__content\">\n          <span part=\"image\" class=\"file-item__image\">\n            <slot name=\"image\">", "</slot>\n          </span>\n          <span part=\"label\" class=\"file-item__label\">\n            <slot></slot>\n\t\t\t  ", "\n            ", "\n\t\t  </span>\n          ", "\n\t\t</span>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"base\"\n                    class=",
            "\n            >\n        <span class=\"file-item__content\">\n          <span part=\"image\" class=\"file-item__image\">\n            <slot name=\"image\">",
            "</slot>\n          </span>\n          <span part=\"label\" class=\"file-item__label\">\n            <slot></slot>\n\t\t\t  ", "\n            ",
            "\n\t\t  </span>\n          ",
            "\n\t\t</span>\n                ",
            "\n            </div>\n\t\t"])), class_map_js_1.classMap({
            "file-item": true,
            'file-item--default': this.variant === 'default',
            'file-item--primary': this.variant === 'primary',
            'file-item--success': this.variant === 'success',
            'file-item--neutral': this.variant === 'neutral',
            'file-item--warning': this.variant === 'warning',
            'file-item--danger': this.variant === 'danger',
            'file-item--large': this.display === "large" || !this.display,
            'file-item--small': this.display === "small",
            'file-item--list': this.display === "list",
            //@ts-ignore disabled comes from Et2Widget
            "file-item--disabled": this.disabled,
            "file-item--hidden": this.hidden,
            "file-item--closable": this.closable,
            "file-item--has-size": this.size,
            "file-item--is-loading": this.loading,
            "file-item--has-image": (this.hasSlotController.test("image") || this.image != ""),
        }), this.image ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <et2-image src=\"", "\"></et2-image>"], ["\n                <et2-image src=\"", "\"></et2-image>"])), this.image) : lit_1.nothing, this.display == "large" ? progressBar : lit_1.nothing, this.size
            ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        <sl-format-bytes\n                                value=\"", "\"\n                                class=\"file-item__label__size\"\n                                lang=", ">\n                        </sl-format-bytes>"], ["\n                        <sl-format-bytes\n                                value=\"", "\"\n                                class=\"file-item__label__size\"\n                                lang=", ">\n                        </sl-format-bytes>"])), this.size, (_a = this.egw().preference("lang", "common")) !== null && _a !== void 0 ? _a : "en") : "", this.display != "large" ? lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<span\n                  class=\"file-item__progress-bar__container\">", "</span>"], ["<span\n                  class=\"file-item__progress-bar__container\">", "</span>"])), progressBar) : lit_1.nothing, this.closable
            ? lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                            <span\n                                    class=\"file-item__close-button\"\n                                    @click=", "\n                                    @keyup=", "\n                            >\n\t\t\t\t\t\t<slot name=\"close-button\">\n\t\t\t\t\t\t  <sl-icon-button part=\"close-button\"\n                                          name=\"x\"\n                                          exportparts=\"base:close-button__base\"\n                          ></sl-icon-button>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t  </span>"], ["\n                            <span\n                                    class=\"file-item__close-button\"\n                                    @click=", "\n                                    @keyup=", "\n                            >\n\t\t\t\t\t\t<slot name=\"close-button\">\n\t\t\t\t\t\t  <sl-icon-button part=\"close-button\"\n                                          name=\"x\"\n                                          exportparts=\"base:close-button__base\"\n                          ></sl-icon-button>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t  </span>"])), this.handleCloseClick, this.handleTriggerKeyUp) : "");
    };
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2FileItem.prototype, "loading", void 0);
    __decorate([
        property_js_1.property({ type: Number, reflect: true })
    ], Et2FileItem.prototype, "progress", void 0);
    __decorate([
        property_js_1.property({ reflect: true })
    ], Et2FileItem.prototype, "variant", void 0);
    __decorate([
        property_js_1.property({ reflect: true })
    ], Et2FileItem.prototype, "display", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2FileItem.prototype, "closable", void 0);
    __decorate([
        property_js_1.property()
    ], Et2FileItem.prototype, "value", void 0);
    __decorate([
        property_js_1.property({ type: Number, reflect: true })
    ], Et2FileItem.prototype, "size", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2FileItem.prototype, "image", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2FileItem.prototype, "hidden", void 0);
    Et2FileItem = __decorate([
        custom_element_js_1.customElement("et2-file-item")
    ], Et2FileItem);
    return Et2FileItem;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2FileItem = Et2FileItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
