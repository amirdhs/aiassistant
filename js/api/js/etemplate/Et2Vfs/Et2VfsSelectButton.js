"use strict";
/**
 * EGroupware eTemplate2 - Button to open a vfs select dialog
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
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
exports.Et2VfsSelectButton = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var slot_1 = require("../Et2Widget/slot");
var property_js_1 = require("lit/decorators/property.js");
var event_1 = require("../Et2Widget/event");
/**
 * @summary Button to open a file selection dialog, and either return the selected path(s) as a value or take immediate
 * action with them using the `method` property.
 * @since 23.1
 *
 * @dependency et2-vfs-select-dialog
 * @dependency et2-button
 *
 * @slot footer - Buttons are added to the dialog footer.  Control their position with CSS `order` property.
 *
 * @event change - Emitted when the control's value changes.
 *
 * @csspart button - The button control
 * @csspart dialog - The et2-vfs-select-dialog
 */
var Et2VfsSelectButton = /** @class */ (function (_super) {
    __extends(Et2VfsSelectButton, _super);
    function Et2VfsSelectButton() {
        var _this = _super.call(this) || this;
        /** Currently selected files */
        _this.value = [];
        /**
         * The dialog’s label as displayed in the header.
         * You should always include a relevant label, as it is required for proper accessibility.
         */
        _this.title = "Select";
        /** Button label */
        _this.buttonLabel = "Select";
        /** Provide a suggested filename for saving */
        _this.filename = "";
        /** Allow selecting multiple files */
        _this.multiple = false;
        /** Start path in VFS.  Leave unset to use the last used path. */
        _this.path = "";
        /** Limit display to the given mime-type */
        _this.mime = "";
        /** Server side callback to process selected value(s) in
         *	app.class.method or class::method format.  The first parameter will
         *	be Method ID, the second the file list. 'download' is reserved and it
         *	means it should use download_baseUrl instead of path in value (no method
         * will be actually executed).
         */
        _this.method = "";
        _this.hasSlotController = new slot_1.HasSlotController(_this, '');
        _this.processingPromise = null;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2VfsSelectButton.prototype, "_dialog", {
        get: function () {
            var _a;
            return this.hasSlotController.test("[default]") ? this.querySelector("*") : (_a = this.shadowRoot.querySelector("et2-vfs-select-dialog")) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /** Programmatically trigger the dialog */
    Et2VfsSelectButton.prototype.click = function () {
        var _this = this;
        this.updateComplete.then(function () {
            _this.handleClick(new Event("click"));
        });
    };
    Et2VfsSelectButton.prototype.handleClick = function (event) {
        var _this = this;
        if (this._dialog && typeof this._dialog.show == "function") {
            this._dialog.show();
            // Avoids dialog showing old value if reused
            this._dialog.requestUpdate("value");
            // This is were we bind to get informed when user closes the dialog
            event_1.waitForEvent(this._dialog, "sl-after-show").then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.processDialogComplete;
                            return [4 /*yield*/, this._dialog.getComplete()];
                        case 1:
                            _a.apply(this, [_b.sent()]);
                            this.dispatchEvent(new Event("close", { bubbles: true }));
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    /**
     * The select dialog has been closed, now deal with the provided paths
     *
     * @param {string | number} button
     * @param {string[]} paths
     * @protected
     */
    Et2VfsSelectButton.prototype.processDialogComplete = function (_a) {
        var _this = this;
        var button = _a[0], paths = _a[1];
        // Cancel or close do nothing
        if (typeof button !== "undefined" && !button) {
            return;
        }
        var oldValue = this.value;
        this.value = paths !== null && paths !== void 0 ? paths : [];
        this.requestUpdate("value", oldValue);
        if (this.method && this.method == "download") {
            // download
            this.value.forEach(function (path) {
                var _a;
                _this.egw().open_link((_a = _this._dialog.fileInfo(path)) === null || _a === void 0 ? void 0 : _a.downloadUrl, "blank", "view", 'download');
            });
        }
        else if (this.method) {
            this.sendFiles(button);
        }
        var wait = [this.updateComplete];
        if (this.processingPromise !== null) {
            wait.push(this.processingPromise);
        }
        Promise.all(wait).then(function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
            // Reset value after processing
            if (_this.method) {
                _this.value = [];
                _this.requestUpdate("value");
            }
        });
    };
    Et2VfsSelectButton.prototype.sendFiles = function (button) {
        var _this = this;
        // Some destinations expect only a single value when multiple=false
        var value = this.value;
        if (!this.multiple && this.value.length > 0) {
            // @ts-ignore This is the typecheck, no need to warn about it
            value = (typeof this.value[0].path != "undefined") ? this.value[0].path : this.value[0];
        }
        // Send to server
        this.processingPromise = this.egw().request(this.method, [this.methodId, value, button /*, savemode*/]).then(function (data) {
            if (Array.isArray(data) && data.length > 0) {
                // Server has something different for us
                _this.value = data;
            }
            _this.processingPromise = null;
            // UI update now that we're done
            _this.requestUpdate();
            return { success: true };
        });
        // UI update, we're busy
        this.requestUpdate();
    };
    Et2VfsSelectButton.prototype.dialogTemplate = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <et2-vfs-select-dialog\n                    part=\"dialog\"\n                    .title=", "\n                    .value=", "\n                    .mode=", "\n                    .multiple=", "\n                    .path=", "\n                    .filename=", "\n                    .mime=", "\n                    .buttonLabel=", "\n            >\n                <slot name=\"footer\" slot=\"footer\"></slot>\n            </et2-vfs-select-dialog>\n\t\t"], ["\n            <et2-vfs-select-dialog\n                    part=\"dialog\"\n                    .title=", "\n                    .value=", "\n                    .mode=", "\n                    .multiple=", "\n                    .path=", "\n                    .filename=", "\n                    .mime=", "\n                    .buttonLabel=", "\n            >\n                <slot name=\"footer\" slot=\"footer\"></slot>\n            </et2-vfs-select-dialog>\n\t\t"])), (_a = this.title) !== null && _a !== void 0 ? _a : lit_1.nothing, this.value && typeof this.value == "object" ? this.value : lit_1.nothing, (_b = this.mode) !== null && _b !== void 0 ? _b : lit_1.nothing, (_c = this.multiple) !== null && _c !== void 0 ? _c : lit_1.nothing, (_d = this.path) !== null && _d !== void 0 ? _d : lit_1.nothing, (_e = this.filename) !== null && _e !== void 0 ? _e : lit_1.nothing, (_f = this.mime) !== null && _f !== void 0 ? _f : lit_1.nothing, (_g = this.buttonLabel) !== null && _g !== void 0 ? _g : lit_1.nothing);
    };
    Et2VfsSelectButton.prototype.render = function () {
        var hasUserDialog = this.hasSlotController.test("[default]");
        var processing = this.processingPromise !== null;
        var image = processing ? "" : (this.image || "filemanager/navbar");
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-button part=\"button\"\n                        exportparts=\"base\"\n                        image=", "\n                        title=", "\n                        helptext=", "\n                        ?disabled=", "\n                        ?readonly=", "\n                        .noSubmit=", "\n                        @click=", "\n            >\n                ", "\n            </et2-button>\n            ", "\n\t\t"], ["\n            <et2-button part=\"button\"\n                        exportparts=\"base\"\n                        image=", "\n                        title=", "\n                        helptext=", "\n                        ?disabled=", "\n                        ?readonly=", "\n                        .noSubmit=", "\n                        @click=", "\n            >\n                ",
            "\n            </et2-button>\n            ",
            "\n\t\t"])), image, this.title, this.helptext, this.disabled, this.readonly || processing, true, this.handleClick, processing ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    <sl-spinner></sl-spinner>"], ["\n                    <sl-spinner></sl-spinner>"]))) : lit_1.nothing, hasUserDialog ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <slot></slot>"], ["\n                <slot></slot>"]))) : this.dialogTemplate());
    };
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "image", void 0);
    __decorate([
        property_js_1.property({
            type: Array,
            converter: {
                fromAttribute: function (value, type) {
                    return value.split(",");
                }
            }
        })
    ], Et2VfsSelectButton.prototype, "value", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "title", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsSelectButton.prototype, "mode", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsSelectButton.prototype, "buttonLabel", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "filename", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2VfsSelectButton.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "path", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "mime", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectButton.prototype, "method", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true, attribute: "method-id" })
    ], Et2VfsSelectButton.prototype, "methodId", void 0);
    return Et2VfsSelectButton;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2VfsSelectButton = Et2VfsSelectButton;
customElements.define("et2-vfs-select", Et2VfsSelectButton);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
