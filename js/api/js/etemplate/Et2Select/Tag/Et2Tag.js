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
exports.Et2Tag = void 0;
/**
 * EGroupware eTemplate2 - Tag WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var shoelace_2 = require("../../Styles/shoelace");
var state_js_1 = require("lit/decorators/state.js");
var property_js_1 = require("lit/decorators/property.js");
/**
 * Tag is usually used in a Select with multiple=true, but there's no reason it can't go anywhere
 */
var Et2Tag = /** @class */ (function (_super) {
    __extends(Et2Tag, _super);
    function Et2Tag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.editable = false;
        _this.value = "";
        _this.current = false; // the user has keyed into the tag (focused), but hasn't done anything yet (shows a highlight)
        _this.isEditing = false;
        _this.pill = false;
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Tag, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_2.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t  flex: 1 1 auto;\n\t\t\t}\n\n\t\t\t.tag--pill {\n\t\t\t  overflow: hidden;\n\t\t\t}\n\n\t\t\t::slotted(et2-image) {\n\t\t\t  height: 20px;\n\t\t\t\twidth: var(--icon-width, 20px);\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\n\t\t\t\t::slotted(et2-lavatar) {\n\t\t\t\t\t--size: 2rem;\n\t\t\t\t}\n\n\t\t\t.tag__prefix {\n\t\t\t  line-height: normal;\n\t\t\t}\n\t\t\t.tag__content {\n\t\t\t  padding: 0px 0.2rem;\n\t\t\t  flex: 1 2 auto;\n\t\t\t  overflow: hidden;\n\t\t\t  text-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t.tag__edit {\n\t\t\t  flex: 10 1 auto;\n\t\t\t  min-width: 20ex;\n\t\t\t  width: 60ex;\n\t\t\t}\n\n\t\t\t/* Avoid button getting truncated by right side of button */\n\n\t\t\t.tag__remove {\n\t\t\t  margin-right: 0;\n\t\t\t  margin-left: 0;\n\t\t\t}\n\n\t\t\tet2-button-icon {\n\t\t\t  visibility: hidden;\n\t\t\t}\n\n\t\t\t:host(:hover) et2-button-icon {\n\t\t\t  visibility: visible;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t  flex: 1 1 auto;\n\t\t\t}\n\n\t\t\t.tag--pill {\n\t\t\t  overflow: hidden;\n\t\t\t}\n\n\t\t\t::slotted(et2-image) {\n\t\t\t  height: 20px;\n\t\t\t\twidth: var(--icon-width, 20px);\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\n\t\t\t\t::slotted(et2-lavatar) {\n\t\t\t\t\t--size: 2rem;\n\t\t\t\t}\n\n\t\t\t.tag__prefix {\n\t\t\t  line-height: normal;\n\t\t\t}\n\t\t\t.tag__content {\n\t\t\t  padding: 0px 0.2rem;\n\t\t\t  flex: 1 2 auto;\n\t\t\t  overflow: hidden;\n\t\t\t  text-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t.tag__edit {\n\t\t\t  flex: 10 1 auto;\n\t\t\t  min-width: 20ex;\n\t\t\t  width: 60ex;\n\t\t\t}\n\n\t\t\t/* Avoid button getting truncated by right side of button */\n\n\t\t\t.tag__remove {\n\t\t\t  margin-right: 0;\n\t\t\t  margin-left: 0;\n\t\t\t}\n\n\t\t\tet2-button-icon {\n\t\t\t  visibility: hidden;\n\t\t\t}\n\n\t\t\t:host(:hover) et2-button-icon {\n\t\t\t  visibility: visible;\n\t\t\t}\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Et2Tag.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var more;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        more = _a.sent();
                        if (!this.isEditing) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._editNode.updateComplete];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, more];
                }
            });
        });
    };
    Et2Tag.prototype._styleTemplate = function () {
        return null;
    };
    Et2Tag.prototype.render = function () {
        var content;
        if (this.isEditing) {
            content = lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), this._editTemplate());
        }
        else {
            content = lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", "\n            ", "\n            ", "\n\t\t\t"], ["", "\n            ",
                "\n            ",
                "\n\t\t\t"])), this._contentTemplate(), this.editable ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <et2-button-icon\n                        label=", "\n                        image=\"pencil\"\n                        noSubmit=\"true\"\n                        @click=", "\n                ></et2-button-icon>"], ["\n                <et2-button-icon\n                        label=", "\n                        image=\"pencil\"\n                        noSubmit=\"true\"\n                        @click=", "\n                ></et2-button-icon>"])), this.egw().lang("edit"), this.startEdit) : '', this.removable
                ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        <sl-icon-button\n                                part=\"remove-button\"\n                                exportparts=\"base:remove-button__base\"\n                                name=\"x-lg\"\n                                library=\"system\"\n                                label=", "\n                                class=\"tag__remove\"\n                                @click=", "\n                                tabindex=\"-1\"\n                        ></sl-icon-button>\n                    "], ["\n                        <sl-icon-button\n                                part=\"remove-button\"\n                                exportparts=\"base:remove-button__base\"\n                                name=\"x-lg\"\n                                library=\"system\"\n                                label=", "\n                                class=\"tag__remove\"\n                                @click=", "\n                                tabindex=\"-1\"\n                        ></sl-icon-button>\n                    "])), this.egw().lang('remove'), this.handleRemoveClick) : lit_1.nothing);
        }
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            ", "\n            <span\n                    part=\"base\"\n                    class=", "\n            >\n\t\t\t\t", "\n\t\t\t", "\n      </span>\n\t\t"], ["\n            ", "\n            <span\n                    part=\"base\"\n                    class=",
            "\n            >\n\t\t\t\t", "\n\t\t\t", "\n      </span>\n\t\t"])), this._styleTemplate(), class_map_js_1.classMap({
            tag: true,
            'tag--editable': this.editable,
            'tag--editing': this.isEditing,
            // Types
            'tag--primary': this.variant === 'primary' || this.current,
            'tag--success': this.variant === 'success',
            'tag--neutral': this.variant === 'neutral' && !this.current,
            'tag--warning': this.variant === 'warning',
            'tag--danger': this.variant === 'danger',
            'tag--text': this.variant === 'text',
            // Sizes
            'tag--small': this.size === 'small',
            'tag--medium': this.size === 'medium',
            'tag--large': this.size === 'large',
            // Modifiers
            'tag--pill': this.pill,
            'tag--removable': this.removable
        }), this._prefixTemplate(), content);
    };
    Et2Tag.prototype._contentTemplate = function () {
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <span part=\"content\" class=\"tag__content\">\n          <slot></slot>\n        </span>"], ["\n            <span part=\"content\" class=\"tag__content\">\n          <slot></slot>\n        </span>"])));
    };
    Et2Tag.prototype._editTemplate = function () {
        return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <span part=\"content\" class=\"tag__content tag__edit\">\n\t\t\t\t<et2-textbox value=\"", "\"\n                             @sl-change=", "\n                             @blur=", "\n                             @mousedown=", "\n                             @click=", "\n                             @keydown=", "\n                ></et2-textbox>\n\t\t\t</span>\n\t\t"], ["\n            <span part=\"content\" class=\"tag__content tag__edit\">\n\t\t\t\t<et2-textbox value=\"", "\"\n                             @sl-change=", "\n                             @blur=", "\n                             @mousedown=", "\n                             @click=", "\n                             @keydown=", "\n                ></et2-textbox>\n\t\t\t</span>\n\t\t"])), this.value, this.handleChange, this.stopEdit, function (e) { return e.stopPropagation(); }, function (e) { return e.stopPropagation(); }, this.handleKeyDown);
    };
    Et2Tag.prototype._prefixTemplate = function () {
        return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <span part=\"prefix\" class=\"tag__prefix\">\n\t\t\t\t<slot name=\"prefix\"></slot>\n\t\t</span>"], ["\n            <span part=\"prefix\" class=\"tag__prefix\">\n\t\t\t\t<slot name=\"prefix\"></slot>\n\t\t</span>"])));
    };
    Et2Tag.prototype.startEdit = function (event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        this.getRootNode().host.hide();
        this.isEditing = true;
        this.setAttribute("contenteditable", "true");
        this.requestUpdate();
        this.updateComplete.then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._editNode.updateComplete];
                    case 1:
                        _a.sent();
                        // This stops drag and drop from interfering with mouse edits
                        this._editNode.input.setAttribute("contenteditable", "true");
                        this._editNode.focus();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Et2Tag.prototype.stopEdit = function () {
        var _this = this;
        this.isEditing = false;
        this.removeAttribute("contenteditable");
        var event = new Event("change", {
            bubbles: true
        });
        event.originalValue = this.value;
        this.dataset.original_value = this.value;
        if (!this.editable) {
            return;
        }
        this.value = this.textContent = this._editNode.value.trim();
        this.requestUpdate();
        this.updateComplete.then(function () {
            _this.dispatchEvent(event);
        });
    };
    Object.defineProperty(Et2Tag.prototype, "_editNode", {
        get: function () {
            return this.shadowRoot.querySelector('et2-textbox');
        },
        enumerable: false,
        configurable: true
    });
    Et2Tag.prototype.handleKeyDown = function (event) {
        // Consume event so it doesn't bubble up to select
        event.stopPropagation();
        if (["Tab", "Enter"].indexOf(event.key) !== -1) {
            this._editNode.blur();
        }
        else if (["Escape"].includes(event.key)) {
            this._editNode.value = this.value;
            this.stopEdit();
        }
    };
    Et2Tag.prototype.handleChange = function (event) {
    };
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Tag.prototype, "editable", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2Tag.prototype, "value", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tag.prototype, "current", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tag.prototype, "isEditing", void 0);
    return Et2Tag;
}(Et2Widget_1.Et2Widget(shoelace_1.SlTag)));
exports.Et2Tag = Et2Tag;
customElements.define("et2-tag", Et2Tag);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
