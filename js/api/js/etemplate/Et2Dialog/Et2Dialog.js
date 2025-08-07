"use strict";
/**
 * EGroupware eTemplate2 - Box widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
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
exports.Et2Dialog = void 0;
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var style_map_js_1 = require("lit/directives/style-map.js");
var egw_global_1 = require("../../jsapi/egw_global");
var interactjs_1 = require("@interactjs/interactjs");
var Et2Button_1 = require("../Et2Button/Et2Button");
var shoelace_1 = require("../Styles/shoelace");
var shoelace_2 = require("@shoelace-style/shoelace");
var egw_action_common_1 = require("../../egw_action/egw_action_common");
var event_1 = require("../Et2Widget/event");
var property_js_1 = require("lit/decorators/property.js");
/**
 * A common dialog widget that makes it easy to inform users or prompt for information.
 *
 * @slot - The dialog's main content
 * @slot label - The dialog's title.  Alternatively, you can use the title attribute.
 * @slot header-actions - Optional actions to add to the header. Works best with <et2-button-icon>
 * @slot footer - The dialog's footer, where we put the buttons.
 *
 * @event open - Emitted when the dialog opens
 * @event close - Emitted when the dialog closes
 * @event before-load - Emitted before the dialog opens
 */
var Et2Dialog = /** @class */ (function (_super) {
    __extends(Et2Dialog, _super);
    function Et2Dialog(parent_egw) {
        var _this = _super.call(this) || this;
        _this._buttons = [
            /*
            Pre-defined Button combos
            */
            //BUTTONS_OK: 0,
            [{ "button_id": Et2Dialog.OK_BUTTON, label: 'ok', id: 'dialog[ok]', image: 'check', "default": true }],
            //BUTTONS_OK_CANCEL: 1,
            [
                { "button_id": Et2Dialog.OK_BUTTON, label: 'ok', id: 'dialog[ok]', image: 'check', "default": true },
                {
                    "button_id": Et2Dialog.CANCEL_BUTTON,
                    label: 'cancel',
                    id: 'dialog[cancel]',
                    image: 'cancel',
                    align: "right"
                }
            ],
            //BUTTONS_YES_NO: 2,
            [
                { "button_id": Et2Dialog.YES_BUTTON, label: 'yes', id: 'dialog[yes]', image: 'check', "default": true },
                { "button_id": Et2Dialog.NO_BUTTON, label: 'no', id: 'dialog[no]', image: 'cancel' }
            ],
            //BUTTONS_YES_NO_CANCEL: 3,
            [
                { "button_id": Et2Dialog.YES_BUTTON, label: 'yes', id: 'dialog[yes]', image: 'check', "default": true },
                { "button_id": Et2Dialog.NO_BUTTON, label: 'no', id: 'dialog[no]', image: 'cancelled' },
                {
                    "button_id": Et2Dialog.CANCEL_BUTTON,
                    label: 'cancel',
                    id: 'dialog[cancel]',
                    image: 'cancel',
                    align: "right"
                }
            ]
        ];
        if (parent_egw) {
            _this._setApiInstance(parent_egw);
        }
        _this.isModal = false;
        _this.dialog_type = Et2Dialog.PLAIN_MESSAGE;
        _this.destroyOnClose = true;
        _this.hideOnEscape = _this.hideOnEscape === false ? false : true;
        _this.__value = {};
        _this.open = true;
        _this.handleOpen = _this.handleOpen.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this._onClick = _this._onClick.bind(_this);
        _this._onButtonClick = _this._onButtonClick.bind(_this);
        _this._onMoveResize = _this._onMoveResize.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this._adoptTemplateButtons = _this._adoptTemplateButtons.bind(_this);
        // Don't leave it undefined, it's easier to deal with if it's just already resolved.
        // It will be re-set if a template is loaded
        _this._template_promise = Promise.resolve(false);
        // Create this here so we have something, otherwise the creator might continue with undefined while we
        // wait for the dialog to complete & open
        _this._complete_promise = new Promise(function (resolve) {
            _this._completeResolver = function (value) { return resolve(value); };
        });
        return _this;
    }
    Object.defineProperty(Et2Dialog, "styles", {
        get: function () {
            return __spreadArrays(shoelace_1.default, (_super.styles || []), [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\t--header-spacing: var(--sl-spacing-medium);\n\t\t\t\t\t--body-spacing: var(--sl-spacing-medium);\n\t\t\t\t    --width: auto;\n\t\t\t\t}\n\t\t\t\t.dialog__panel {\n\t\t\t\t\tborder: 1px solid silver;\n\t\t\t\t\tbox-shadow: -2px 1px 9px 3px var(--sl-color-gray-400);\n\t\t\t\t\tmin-width: 250px;\n\t\t\t\t\ttouch-action: none;\n\t\t\t\t}\n\t\t\t\t.dialog__header {\n\t\t\t\t\tdisplay: flex;\n          \t\t\tborder-bottom: 1px inset;\n\t\t\t\t}\n\t\t\t\t.dialog__title {\n\t\t\t\t\tfont-size: var(--sl-font-size-medium);\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t\t.dialog__close {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\torder: 99;\n\t\t\t\t\tborder-top-right-radius: calc(var(--sl-border-radius-medium) * .5);\n\t\t\t\t}\n\t\t\t\t.dialog__footer\t{\n\t\t\t\t\t--footer-spacing: 5px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\talign-items: stretch;\n\t\t\t\t\tgap: 5px;\n\t\t\t\t\tborder-top: 1px solid var(--sl-color-gray-400);\n\t\t\t\t\tmargin-top: 0.5em;\n\t\t\t\t}\n\n\t\t\t  .dialog_content {\n\t\t\t\theight: var(--height, auto);\n\t\t\t  }\n\n\t\t\t  /* Non-modal dialogs don't have an overlay */\n\n\t\t\t  :host(:not([ismodal])) .dialog, :host(:not([isModal])) .dialog__overlay {\n\t\t\t\tpointer-events: none;\n\t\t\t\tbackground: transparent;\n\t\t\t  }\n\n\t\t\t  :host(:not([ismodal])) .dialog__panel {\n\t\t\t\tpointer-events: auto;\n\t\t\t  }\n\n\t\t\t  /* Hide close button when set */\n\n\t\t\t  :host([noclosebutton]) .dialog__close {\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\n\t\t\t  /* Button alignments */\n\n\t\t\t  ::slotted([align=\"left\"]) {\n\t\t\t\tmargin-right: auto;\n\t\t\t\torder: -1;\n\t\t\t  }\n\n\t\t\t  ::slotted([align=\"right\"]) {\n\t\t\t\tmargin-left: auto;\n\t\t\t\torder: 1;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\t--header-spacing: var(--sl-spacing-medium);\n\t\t\t\t\t--body-spacing: var(--sl-spacing-medium);\n\t\t\t\t    --width: auto;\n\t\t\t\t}\n\t\t\t\t.dialog__panel {\n\t\t\t\t\tborder: 1px solid silver;\n\t\t\t\t\tbox-shadow: -2px 1px 9px 3px var(--sl-color-gray-400);\n\t\t\t\t\tmin-width: 250px;\n\t\t\t\t\ttouch-action: none;\n\t\t\t\t}\n\t\t\t\t.dialog__header {\n\t\t\t\t\tdisplay: flex;\n          \t\t\tborder-bottom: 1px inset;\n\t\t\t\t}\n\t\t\t\t.dialog__title {\n\t\t\t\t\tfont-size: var(--sl-font-size-medium);\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t\t.dialog__close {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\torder: 99;\n\t\t\t\t\tborder-top-right-radius: calc(var(--sl-border-radius-medium) * .5);\n\t\t\t\t}\n\t\t\t\t.dialog__footer\t{\n\t\t\t\t\t--footer-spacing: 5px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\talign-items: stretch;\n\t\t\t\t\tgap: 5px;\n\t\t\t\t\tborder-top: 1px solid var(--sl-color-gray-400);\n\t\t\t\t\tmargin-top: 0.5em;\n\t\t\t\t}\n\n\t\t\t  .dialog_content {\n\t\t\t\theight: var(--height, auto);\n\t\t\t  }\n\n\t\t\t  /* Non-modal dialogs don't have an overlay */\n\n\t\t\t  :host(:not([ismodal])) .dialog, :host(:not([isModal])) .dialog__overlay {\n\t\t\t\tpointer-events: none;\n\t\t\t\tbackground: transparent;\n\t\t\t  }\n\n\t\t\t  :host(:not([ismodal])) .dialog__panel {\n\t\t\t\tpointer-events: auto;\n\t\t\t  }\n\n\t\t\t  /* Hide close button when set */\n\n\t\t\t  :host([noclosebutton]) .dialog__close {\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\n\t\t\t  /* Button alignments */\n\n\t\t\t  ::slotted([align=\"left\"]) {\n\t\t\t\tmargin-right: auto;\n\t\t\t\torder: -1;\n\t\t\t  }\n\n\t\t\t  ::slotted([align=\"right\"]) {\n\t\t\t\tmargin-left: auto;\n\t\t\t\torder: 1;\n\t\t\t  }\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Dialog, "translate", {
        /*
        * List of properties that get translated
        * Done separately to not interfere with properties - if we re-define label property,
        * labels go missing.
        */
        get: function () {
            return __assign(__assign({}, _super.translate), { title: true, message: true });
        },
        enumerable: false,
        configurable: true
    });
    Et2Dialog.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.addEventListener("keyup", this.handleKeyUp);
        // Prevent close if they click the overlay when the dialog is modal
        this.addEventListener('sl-request-close', function (event) {
            // Prevent close on clicking somewhere else
            if (_this.isModal && event.detail.source === 'overlay') {
                event.preventDefault();
                return;
            }
            // Prevent close on escape
            if (!_this.hideOnEscape && event.detail.source === 'keyboard') {
                event.preventDefault();
                return;
            }
        });
        this.addEventListener("sl-after-show", this.handleOpen);
        this.addEventListener('sl-hide', this.handleClose);
    };
    Et2Dialog.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("keyup", this.handleKeyUp);
        this.removeEventListener("sl-hide", this.handleClose);
        this.removeEventListener("sl-after-show", this.handleOpen);
    };
    Et2Dialog.prototype.destroy = function () {
        if (this._template_widget) {
            this._template_widget.clear(true);
        }
        this.remove();
    };
    /**
     * Hide the dialog.
     * Depending on destroyOnClose, it may be removed as well
     *
     * N.B. We can't have open() because it conflicts with SlDialog.  Use show() instead.
     */
    Et2Dialog.prototype.close = function () {
        return this.hide();
    };
    Et2Dialog.prototype.addOpenListeners = function () {
        _super.prototype.addOpenListeners.call(this);
        // Bind on the ancestor, not the buttons, so their click handler gets a chance to run
        this.addEventListener("click", this._onButtonClick);
        this.addEventListener("keydown", this.handleKeyDown);
    };
    Et2Dialog.prototype.removeOpenListeners = function () {
        _super.prototype.removeOpenListeners.call(this);
        this.removeEventListener("click", this._onButtonClick);
        this.removeEventListener("keydown", this.handleKeyDown);
    };
    Et2Dialog.prototype.handleKeyUp = function (event) {
        // Trigger the "primary" or first button
        if (this.open && event.key === 'Enter') {
            var button = this.querySelectorAll("[varient='primary']");
            if (button.length == 0) {
                // Nothing explicitly marked, check for buttons in the footer
                button = this.querySelectorAll("et2-button[slot='footer']");
            }
            if (button && button[0]) {
                event.stopPropagation();
                button[0].dispatchEvent(new CustomEvent('click', { bubbles: true }));
            }
        }
    };
    Et2Dialog.prototype.firstUpdated = function (changedProperties) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProperties);
        lit_1.render(this._contentTemplate(), this);
        // Rendering content will change some things, SlDialog needs to update
        this.requestUpdate();
        // If we start open, fire handler to get setup done
        if (this.open) {
            this.handleOpenChange();
        }
        this.updateComplete.then(function () { return _this._setDefaultAutofocus(); });
    };
    // Need to wait for Overlay
    Et2Dialog.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _a.sent();
                        // Wait for template to finish loading
                        return [4 /*yield*/, this._template_promise];
                    case 2:
                        // Wait for template to finish loading
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Et2Dialog.prototype.getComplete = function () {
        return this._complete_promise;
    };
    Et2Dialog.prototype.handleOpen = function (event) {
        var _this = this;
        if (event.target !== this) {
            return;
        }
        this.addOpenListeners();
        this._button_id = null;
        this._complete_promise = this._complete_promise || new Promise(function (resolve) {
            _this._completeResolver = function (value) { return resolve(value); };
        });
        // Now consumers can listen for "open" event, though getUpdateComplete().then(...) also works
        this.dispatchEvent(new Event('open', { bubbles: true }));
        Promise.all([this._template_promise, this.updateComplete])
            .then(function () { return _this._setupMoveResize(); });
    };
    Et2Dialog.prototype.handleClose = function (ev) {
        var _this = this;
        var _a, _b;
        // Avoid closing if a selectbox is closed
        if (ev.target !== this) {
            return;
        }
        if (typeof ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur) == "function") {
            (_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.blur();
        }
        this.removeOpenListeners();
        this._completeResolver([this._button_id, this.value]);
        interactjs_1.default(this.panel).unset();
        this.dispatchEvent(new Event('close', { bubbles: true }));
        event_1.waitForEvent(this, 'sl-after-hide').then(function () {
            _this._button_id = null;
            _this._complete_promise = undefined;
            if (_this.destroyOnClose) {
                if (_this._template_widget) {
                    _this._template_widget.clear();
                }
                _this.remove();
            }
        });
    };
    /**
     * Only internally do our onClick on buttons in the footer
     * This calls _onClose() when the dialog is closed
     *
     * @param {MouseEvent} ev
     * @returns {boolean}
     */
    Et2Dialog.prototype._onButtonClick = function (ev) {
        if (ev.target instanceof Et2Button_1.Et2Button && ev.target.slot == 'footer') {
            return this._onClick(ev);
        }
    };
    Et2Dialog.prototype._onClick = function (ev) {
        var _a, _b, _c, _d, _e;
        // @ts-ignore
        this._button_id = ((_a = ev.target) === null || _a === void 0 ? void 0 : _a.getAttribute("button_id")) ? parseInt((_b = ev.target) === null || _b === void 0 ? void 0 : _b.getAttribute("button_id")) : (((_c = ev.target) === null || _c === void 0 ? void 0 : _c.getAttribute("id")) || null);
        // we need to consider still buttons used in dialogs that may actually submit and have server-side interactions(eg.vfsSelect)
        if (!((_e = (_d = ev.target) === null || _d === void 0 ? void 0 : _d.getInstanceManager()) === null || _e === void 0 ? void 0 : _e._etemplate_exec_id)) {
            // we always need to stop the event as otherwise the result would be submitted to server-side eT2 handler
            // which does not know what to do with it, as the dialog was initiated from client-side (no eT2 request)
            ev.preventDefault();
            ev.stopPropagation();
        }
        // Handle anything bound via et2 onclick property
        try {
            var et2_widget_result = _super.prototype._handleClick.call(this, ev);
            if (et2_widget_result === false) {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
        // Callback expects (button_id, value)
        try {
            var callback_result = this.callback ? this.callback(this._button_id, this.value, ev) : true;
            if (callback_result === false) {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
        this.hide();
    };
    /**
     * Handle moving and resizing
     *
     * @param event
     */
    Et2Dialog.prototype._onMoveResize = function (event) {
        var target = event.target;
        var x = (parseFloat(target.getAttribute('data-x')) || 0);
        var y = (parseFloat(target.getAttribute('data-y')) || 0);
        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
        // translate when resizing from top or left edges
        if (event.type == "resizemove") {
            x += event.deltaRect.left;
            y += event.deltaRect.top;
        }
        else {
            x += event.delta.x;
            y += event.delta.y;
        }
        target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };
    Object.defineProperty(Et2Dialog.prototype, "value", {
        /**
         * Returns the values of any widgets in the dialog.  This does not include
         * the buttons, which are only supplied for the callback.
         */
        get: function () {
            var value = this.__value;
            if (this._template_widget && this._template_widget.widgetContainer) {
                value = this._template_widget.getValues(this._template_widget.widgetContainer);
            }
            return value;
        },
        set: function (new_value) {
            this.__value = new_value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @deprecated
     * @returns {Object}
     */
    Et2Dialog.prototype.get_value = function () {
        console.warn("Deprecated get_value() called");
        return this.value;
    };
    Object.defineProperty(Et2Dialog.prototype, "template", {
        /**
         * Getter for template name.
         *
         * Historically this returned the etemplate2 widget, but this was incorrect and has been fixed.
         * Use `eTemplate` instead of `template` to access the etemplate2 widget.
         *
         * @returns {string}
         */
        get: function () {
            // Can't return undefined or requestUpdate() will not notice a change
            return this.__template || null;
        },
        /**
         * Instead of a simple message, show this template file instead
         */
        set: function (new_template_name) {
            var _this = this;
            var old_template = this.__template;
            this.__template = new_template_name;
            // Create the new promise here so we can wait for it immediately, not in update
            this._template_promise = new Promise(function (resolve) {
                _this._templateResolver = function (value) { return resolve(value); };
            });
            if (!this.__template) {
                this._templateResolver(true);
            }
            this.requestUpdate("template", old_template);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Dialog.prototype, "eTemplate", {
        /**
         * The loaded etemplate2 object.
         *
         * Only available if `template` is set
         *
         * @returns {etemplate2}
         */
        get: function () {
            return this._template_widget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Dialog.prototype, "title", {
        get: function () { return this.label; },
        /**
         * Title for the dialog, goes in the header
         */
        set: function (new_title) {
            this.label = new_title;
        },
        enumerable: false,
        configurable: true
    });
    Et2Dialog.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("template")) {
            // Wait until update is finished to avoid an error in Safari
            _super.prototype.getUpdateComplete.call(this).then(function () { return _this._loadTemplate(); });
        }
        if (changedProperties.has("buttons")) {
            //render(this._buttonsTemplate(), this);
            this.requestUpdate();
        }
        if (changedProperties.has("width")) {
            this.style.setProperty("--width", this.width ? this.width + "px" : "initial");
        }
    };
    Et2Dialog.prototype._loadTemplate = function () {
        var _this = this;
        if (this._template_widget) {
            this._template_widget.clear();
        }
        this._contentNode.replaceChildren();
        // Etemplate wants a content
        if (typeof this.__value.content === "undefined") {
            this.__value.content = {};
        }
        this._template_widget = new etemplate2(this._contentNode);
        // Fire an event so consumers can do their thing - etemplate will fire its own load event when it's done
        if (!this.dispatchEvent(new CustomEvent("before-load", {
            bubbles: true,
            cancelable: true,
            detail: this._template_widget
        }))) {
            return;
        }
        this._template_widget.load(this.__template, '', this.__value || {}, 
        // true: do NOT call et2_ready, as it would overwrite this.et2 in app.js
        undefined, undefined, true)
            .then(function () {
            _this._templateResolver(true);
            // Don't let dialog closing destroy the parent session
            if (_this._template_widget.etemplate_exec_id) {
                for (var _i = 0, _a = etemplate2.getByEtemplateExecId(_this._template_widget.etemplate_exec_id); _i < _a.length; _i++) {
                    var et = _a[_i];
                    if (et !== _this._template_widget) {
                        // Found another template using that exec_id, don't destroy when dialog closes.
                        _this._template_widget.unbind_unload();
                        break;
                    }
                }
            }
        });
        // set template-name as id, to allow to style dialogs
        this._template_widget.DOMContainer.setAttribute('id', this.__template.replace(/^(.*\/)?([^/]+?)(\.xet)?(\?.*)?$/, '$2').replace(/\./g, '-'));
        // Look for buttons after load
        this._template_promise.then(function () { _this._adoptTemplateButtons(); });
        // Default autofocus to first input if autofocus is not set
        this._template_promise.then(function () { _this._setDefaultAutofocus(); });
        // Need to update to pick up changes
        this.requestUpdate();
    };
    Et2Dialog.prototype._contentTemplate = function () {
        /**
         * Classes for dialog type options
         */
        var _dialogTypes = [
            //PLAIN_MESSAGE: 0
            "",
            //INFORMATION_MESSAGE: 1,
            "dialog_info",
            //QUESTION_MESSAGE: 2,
            "dialog_help",
            //WARNING_MESSAGE: 3,
            "dialog_warning",
            //ERROR_MESSAGE: 4,
            "dialog_error"
        ];
        var icon = this.icon || this.egw().image(_dialogTypes[this.dialogType] || "") || "";
        var type = _dialogTypes[this.dialogType];
        var classes = {
            dialog_content: true,
            "dialog--has_message": this.message,
            "dialog--has_template": this.__template
        };
        if (type) {
            classes[type] = true;
        }
        // Add in styles set via property
        var styles = {};
        if (this.width) {
            styles["--width"] = this.width;
        }
        if (this.height) {
            styles["--height"] = this.height;
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <div class=", " style=\"", "\">\n                ", "\n\n            </div>", ""], ["\n            <div class=", " style=\"", "\">\n                ",
            "\n\n            </div>", ""])), class_map_js_1.classMap(classes), style_map_js_1.styleMap(styles), this.__template ? "" : lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([" <img class=\"dialog_icon\" src=", "/>\n                  <slot>", "</slot>"], [" <img class=\"dialog_icon\" src=", "/>\n                  <slot>", "</slot>"])), icon, this.message), this._buttonsTemplate());
    };
    Et2Dialog.prototype._buttonsTemplate = function () {
        var _this = this;
        // No buttons set, but careful with BUTTONS_OK
        if (!this.buttons && this.buttons !== Et2Dialog.BUTTONS_OK) {
            return;
        }
        var buttons = this._getButtons();
        var hasDefault = false;
        buttons.forEach(function (button) {
            if (button.default) {
                hasDefault = true;
            }
        });
        // Set button._parent here, otherwise button will have trouble finding our egw()
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ""], ["",
            ""])), repeat_js_1.repeat(buttons, function (button) { return button.id; }, function (button, index) {
            var isDefault = hasDefault && button.default || !hasDefault && index == 0;
            return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                <et2-button ._parent=", " id=", " button_id=", "\n                            label=", "\n                            slot=\"footer\"\n                            .image=", "\n                            .noSubmit=", "\n                            ?disabled=", "\n                            variant=", "\n                            align=", ">\n                </et2-button>\n\t\t\t"], ["\n                <et2-button ._parent=", " id=", " button_id=", "\n                            label=", "\n                            slot=\"footer\"\n                            .image=", "\n                            .noSubmit=", "\n                            ?disabled=", "\n                            variant=", "\n                            align=", ">\n                </et2-button>\n\t\t\t"])), _this, button.id, button.button_id, button.label, if_defined_js_1.ifDefined(button.image), true, button.disabled, isDefault ? "primary" : "default", if_defined_js_1.ifDefined(button.align));
        }));
    };
    Et2Dialog.prototype._getButtons = function () {
        var _this = this;
        if (Number.isInteger(this.buttons)) {
            // Translate as needed, since we're not calling transformAttributes() on the buttons
            // when we create them in a render()
            return this._buttons[this.buttons].map(function (but) {
                but.label = _this.egw().lang(but.label);
                return but;
            });
        }
        else if (Array.isArray(this.buttons)) {
            return this.buttons;
        }
    };
    /**
     * Search for buttons in the template, and try to slot them
     *
     * We don't want to just grab them all, as there may be other buttons.
     */
    Et2Dialog.prototype._adoptTemplateButtons = function () {
        var _this = this;
        var _a, _b, _c, _d;
        // Check for something with buttons slot set
        var search_in = ((_b = (_a = this._template_widget) === null || _a === void 0 ? void 0 : _a.DOMContainer) !== null && _b !== void 0 ? _b : this._contentNode);
        if (!search_in) {
            return;
        }
        var template_buttons = __spreadArrays(search_in.querySelectorAll('[slot="footer"],[slot="buttons"]'), search_in.querySelectorAll(".dialogFooterToolbar et2-button"), search_in.querySelectorAll(":scope > et2-button, :scope > * > et2-button"));
        if (template_buttons) {
            if ((_c = template_buttons[0]) === null || _c === void 0 ? void 0 : _c.instanceOf(Et2Button_1.Et2Button)) {
                template_buttons[0].variant = "primary";
            }
            template_buttons.forEach(function (button) {
                button.setAttribute("slot", "footer");
                _this.appendChild(button);
            });
            this.requestUpdate();
        }
        // do NOT submit dialog, if it has no etemplate_exec_id, it only gives and error on server-side
        if (this._template_widget && !this._template_widget.widgetContainer.getInstanceManager().etemplate_exec_id) {
            (_d = this._template_widget) === null || _d === void 0 ? void 0 : _d.DOMContainer.querySelectorAll('et2-button').forEach(function (button) {
                button.noSubmit = true;
            });
        }
        return template_buttons;
    };
    /**
     * Set autofocus on first input element if nothing has autofocus
     */
    Et2Dialog.prototype._setDefaultAutofocus = function () {
        var autofocused = this.querySelector("[autofocus]");
        if (autofocused) {
            return;
        }
        if (this._template_widget && typeof this._template_widget.focusOnFirstInput == "function") {
            this._template_widget.focusOnFirstInput();
        }
        else {
            // Not a template, but maybe something?
            var input_1 = Array.from(this.querySelectorAll('input,et2-textbox,et2-select-email')).filter(function (element) {
                // Skip invisible
                if (!element.checkVisibility()) {
                    return false;
                }
                // Date fields open the calendar popup on focus
                if (element.classList.contains("et2_date")) {
                    return false;
                }
                // Skip inputs that are out of tab ordering
                return !element.hasAttribute('tabindex') || parseInt(element.getAttribute('tabIndex')) >= 0;
            }).pop();
            // mobile device, focus only if the field is empty (usually means new entry)
            // should focus always for non-mobile one
            if (input_1 && (egw_action_common_1.egwIsMobile() && typeof input_1.getValue == "function" && input_1.getValue() == "" || !egw_action_common_1.egwIsMobile())) {
                input_1.updateComplete.then(function () { input_1.focus(); });
            }
        }
    };
    Object.defineProperty(Et2Dialog.prototype, "_contentNode", {
        get: function () {
            return this.querySelector('.dialog_content');
        },
        enumerable: false,
        configurable: true
    });
    Et2Dialog.prototype._setupMoveResize = function () {
        // Quick calculation of min size - dialog is made up of header, content & buttons
        var minHeight = 0;
        for (var _i = 0, _a = this.panel.children; _i < _a.length; _i++) {
            var e = _a[_i];
            minHeight += e.getBoundingClientRect().height + parseFloat(getComputedStyle(e).marginTop) + parseFloat(getComputedStyle(e).marginBottom);
        }
        interactjs_1.default(this.panel)
            .resizable({
            edges: { bottom: true, right: true },
            listeners: {
                move: this._onMoveResize
            },
            modifiers: [
                // keep the edges inside the parent
                interactjs_1.default.modifiers.restrictEdges({
                    outer: 'parent'
                }),
                // minimum size
                interactjs_1.default.modifiers.restrictSize({
                    min: { width: 100, height: minHeight }
                })
            ]
        })
            .draggable({
            allowFrom: ".dialog__header",
            ignoreFrom: ".dialog__close",
            listeners: {
                move: this._onMoveResize
            },
            modifiers: (this.isModal ? [] : [
                interactjs_1.default.modifiers.restrict({
                    restriction: 'parent',
                    endOnly: true
                })
            ])
        });
    };
    /**
     * Inject application specific egw object with loaded translations into the dialog
     *
     * @param {string|egw} _egw_or_appname egw object with already loaded translations or application name to load translations for
     */
    Et2Dialog.prototype._setApiInstance = function (_egw_or_appname) {
        if (typeof _egw_or_appname == 'undefined') {
            // @ts-ignore
            _egw_or_appname = egw_appName;
        }
        // if egw object is passed in because called from et2, just use it
        if (typeof _egw_or_appname != 'string') {
            this.__egw = _egw_or_appname;
        }
        // otherwise use given appname to create app-specific egw instance and load default translations
        else {
            this.__egw = egw_global_1.egw(_egw_or_appname);
            this.egw().langRequireApp(this.egw().window, _egw_or_appname);
        }
    };
    Et2Dialog.prototype.egw = function () {
        if (this.__egw) {
            return this.__egw;
        }
        else {
            return _super.prototype.egw.call(this);
        }
    };
    /**
     * Show a confirmation dialog
     *
     * @param {function} _callback Function called when the user clicks a button.  The context will be the Et2Dialog widget, and the button constant is passed in.
     * @param {string} _message Message to be place in the dialog.
     * @param {string} _title Text in the top bar of the dialog.
     * @param _value passed unchanged to callback as 2. parameter
     * @param {integer|array} _buttons One of the BUTTONS_ constants defining the set of buttons at the bottom of the box
     * @param {integer} _type One of the message constants.  This defines the style of the message.
     * @param {string} _icon URL of an icon to display.  If not provided, a type-specific icon will be used.
     * @param {string|egw} _egw_or_appname egw object with already laoded translations or application name to load translations for
     *
     * @return {Et2Dialog} You can use dialog.getComplete().then(...) to wait for the dialog to close.
     */
    Et2Dialog.show_dialog = function (_callback, _message, _title, _value, _buttons, _type, _icon, _egw_or_appname) {
        var document = !_egw_or_appname || typeof _egw_or_appname === 'string' ? window.document : _egw_or_appname.window.document;
        // Just pass them along, widget handles defaults & missing
        var dialog = document.createElement('et2-dialog');
        dialog._setApiInstance(_egw_or_appname);
        dialog.transformAttributes({
            callback: _callback || function () { },
            message: _message,
            title: _title || dialog.egw().lang('Confirmation required'),
            buttons: typeof _buttons != 'undefined' ? _buttons : Et2Dialog.BUTTONS_YES_NO,
            isModal: true,
            dialog_type: typeof _type != 'undefined' ? _type : Et2Dialog.QUESTION_MESSAGE,
            icon: _icon,
            value: _value
        });
        document.body.appendChild(dialog);
        return dialog;
    };
    ;
    /**
     * Show an alert message with OK button
     *
     * @param {string} _message Message to be place in the dialog.
     * @param {string} _title Text in the top bar of the dialog.
     * @param {integer} _type One of the message constants.  This defines the style of the message.
     *
     * @return Promise<[ button_id : number, value : Object ]> will resolve when the dialog closes
     */
    Et2Dialog.alert = function (_message, _title, _type) {
        var dialog = document.createElement('et2-dialog');
        dialog._setApiInstance();
        dialog.transformAttributes({
            callback: function () { },
            message: _message,
            title: _title,
            buttons: Et2Dialog.BUTTONS_OK,
            isModal: true,
            dialog_type: _type || Et2Dialog.INFORMATION_MESSAGE
        });
        document.body.appendChild(dialog);
        return dialog.getComplete();
    };
    /**
     * Show a prompt dialog
     *
     * @param {function} _callback Function called when the user clicks a button.  The button constant is passed in along with the value.
     * @param {string} _message Message to be place in the dialog.
     * @param {string} _title Text in the top bar of the dialog.
     * @param {string} _value for prompt, passed to callback as 2. parameter
     * @param {integer|array} _buttons One of the BUTTONS_ constants defining the set of buttons at the bottom of the box
     * @param {string|egw} _egw_or_appname egw object with already laoded translations or application name to load translations for
     *
     * @return {Et2Dialog} You can use dialog.getComplete().then(...) to wait for the dialog to close.
     */
    Et2Dialog.show_prompt = function (_callback, _message, _title, _value, _buttons, _egw_or_appname) {
        var document = !_egw_or_appname || typeof _egw_or_appname === 'string' ? window.document : _egw_or_appname.window.document;
        var dialog = document.createElement('et2-dialog');
        dialog._setApiInstance();
        dialog.transformAttributes({
            // Wrap callback to _only_ return _value.value, not the whole object like we normally would
            callback: function (_button_id, _value) {
                if (typeof _callback == "function") {
                    _callback.call(this, _button_id, _value.value);
                }
            },
            title: _title || 'Input required',
            buttons: _buttons || Et2Dialog.BUTTONS_OK_CANCEL,
            isModal: true,
            value: {
                content: {
                    value: _value,
                    message: _message
                }
            },
            template: egw_global_1.egw.webserverUrl + '/api/etemplate.php/api/templates/default/prompt.xet',
            class: "et2_prompt"
        });
        document.body.appendChild(dialog);
        return dialog;
    };
    /**
     * Method to build a confirmation dialog only with
     * YES OR NO buttons and submit content back to server
     *
     * @param {widget} _senders widget that has been clicked
     * @param {string} _dialogMsg message shows in dialog box
     * @param {string} _titleMsg message shows as a title of the dialog box
     * @param {boolean} _postSubmit true: use postSubmit instead of submit
     *
     * @description submit the form contents including the button that has been pressed
     */
    Et2Dialog.confirm = function (_senders, _dialogMsg, _titleMsg, _postSubmit) {
        var senders = _senders;
        var button = _senders;
        var dialogMsg = (typeof _dialogMsg != "undefined") ? _dialogMsg : '';
        var titleMsg = (typeof _titleMsg != "undefined") ? _titleMsg : '';
        var egw = _senders === null || _senders === void 0 ? void 0 : _senders.egw();
        var callbackDialog = function (button_id) {
            if (button_id == Et2Dialog.YES_BUTTON) {
                if (_postSubmit) {
                    senders.getRoot().getInstanceManager().postSubmit(button);
                }
                else if (senders.instanceOf(Et2Button_1.Et2Button) && senders.getType() !== "buttononly") {
                    senders.clicked = true;
                    senders.getInstanceManager().submit(senders, false, senders.novalidate);
                    senders.clicked = false;
                }
                else {
                    senders.clicked = true;
                    senders.getRoot().getInstanceManager().submit(button);
                    senders.clicked = false;
                }
            }
        };
        Et2Dialog.show_dialog(callbackDialog, dialogMsg, titleMsg, {}, Et2Dialog.BUTTONS_YES_NO, Et2Dialog.WARNING_MESSAGE, undefined, egw);
    };
    ;
    /**
     * Show a dialog for a long-running, multi-part task
     *
     * Given a server url and a list of parameters, this will open a dialog with
     * a progress bar, asynchronously call the url with each parameter, and update
     * the progress bar.
     * Any output from the server will be displayed in a box.
     *
     * When all tasks are done, the callback will be called with boolean true.  It will
     * also be called if the user clicks a button (OK or CANCEL), so be sure to
     * check to avoid executing more than intended.
     *
     * @param {function} _callback Function called when the user clicks a button,
     *	or when the list is done processing.  The context will be the Et2Dialog
     *	widget, and the button constant is passed in.
     * @param {string} _message Message to be place in the dialog.  Usually just
     *	text, but DOM nodes will work too.
     * @param {string} _title Text in the top bar of the dialog.
     * @param {string} _menuaction the menuaction function which should be called and
     * 	which handles the actual request. If the menuaction is a full featured
     * 	url, this one will be used instead.
     * @param {Array[]} _list - List of parameters, one for each call to the
     *	address.  Multiple parameters are allowed, in an array.
     * @param {string|egw} _egw_or_appname egw object with already laoded translations or application name to load translations for
     *
     * @return {Et2Dialog}
     */
    Et2Dialog.long_task = function (_callback, _message, _title, _menuaction, _list, _egw_or_appname) {
        // Special action for cancel
        var buttons = [
            // OK starts disabled
            { "button_id": Et2Dialog.OK_BUTTON, label: 'ok', "default": true, "disabled": true, image: "check" },
            {
                "button_id": Et2Dialog.CANCEL_BUTTON, label: 'cancel', image: "cancel",
                click: function () {
                    // Cancel run
                    cancel = true;
                    var button = dialog.querySelector("button[button_id=" + Et2Dialog.CANCEL_BUTTON + "]");
                    if (button) {
                        button.disabled = true;
                    }
                    updateUi.call(_list.length, '');
                }
            }
        ];
        var document = !_egw_or_appname || typeof _egw_or_appname === 'string' ? window.document : _egw_or_appname.window.document;
        var dialog = new Et2Dialog(_egw_or_appname);
        dialog.transformAttributes({
            template: dialog.egw().webserverUrl + '/api/etemplate.php/api/templates/default/long_task.xet',
            value: {
                content: {
                    message: _message
                }
            },
            callback: function (_button_id, _value) {
                if (_button_id == Et2Dialog.CANCEL_BUTTON) {
                    cancel = true;
                }
                if (typeof _callback == "function") {
                    _callback.call(this, _button_id, _value.value);
                }
            },
            title: _title || 'please wait...',
            isModal: true,
            buttons: buttons
        });
        document.body.appendChild(dialog);
        var log = null;
        var progressbar = null;
        var cancel = false;
        var skip_all = false;
        var totals = {
            success: 0,
            skipped: 0,
            failed: 0,
            widget: null
        };
        var success = [];
        var retryDialog = null;
        // Updates progressbar & log, returns next index
        var updateUi = function (response, index) {
            if (index === void 0) { index = 0; }
            progressbar.set_value(100 * (index / _list.length));
            progressbar.set_label(index + ' / ' + _list.length);
            // Display response information
            switch (response.type) {
                case 'error':
                    var div = document.createElement("DIV");
                    div.className = "message error";
                    div.textContent = response.data;
                    log.appendChild(div);
                    totals.failed++;
                    if (skip_all) {
                        totals.skipped++;
                        break;
                    }
                    // Ask to retry / ignore / abort
                    var retry = new Et2Dialog(dialog.egw());
                    var retry_index_1 = null;
                    retry.transformAttributes({
                        callback: function (button) {
                            switch (button) {
                                case 'dialog[cancel]':
                                    cancel = true;
                                    break;
                                case 'dialog[skip]':
                                    totals.skipped++;
                                    break;
                                case 'dialog[skip_all]':
                                    totals.skipped++;
                                    skip_all = true;
                                    break;
                                default:
                                    // Try again with previous index
                                    retry_index_1 = index - 1;
                            }
                        },
                        message: response.data,
                        title: '',
                        buttons: [
                            // These ones will use the callback, just like normal
                            { label: dialog.egw().lang("Abort"), id: 'dialog[cancel]' },
                            { label: dialog.egw().lang("Retry"), id: 'dialog[retry]' },
                            { label: dialog.egw().lang("Skip"), id: 'dialog[skip]', default: true },
                            { label: dialog.egw().lang("Skip all"), id: 'dialog[skip_all]' }
                        ],
                        dialog_type: Et2Dialog.ERROR_MESSAGE
                    });
                    dialog.egw().window.document.body.appendChild(retry);
                    // Early exit
                    retryDialog = retry.getComplete().then(function () {
                        retryDialog = null;
                        if (retry_index_1 !== null) {
                            sendRequest(retry_index_1);
                        }
                    });
                default:
                    if (response && typeof response === "string") {
                        success.push(_list[index - 1]);
                        totals.success++;
                        var div_1 = document.createElement("DIV");
                        div_1.className = "message";
                        div_1.textContent = response;
                        log.appendChild(div_1);
                    }
                    else if (response) {
                        var div_2 = document.createElement("DIV");
                        div_2.className = "message error";
                        div_2.textContent = JSON.stringify(response);
                        log.appendChild(div_2);
                    }
            }
            // Scroll to bottom
            var height = log.scrollHeight;
            log.scrollTop = height;
            // Update totals
            totals.widget.set_value(dialog.egw().lang("Total: %1 Successful: %2 Failed: %3 Skipped: %4", _list.length, totals.success, totals.failed, totals.skipped));
            // Fire next step
            if (!cancel && index < _list.length) {
                return Promise.resolve(index);
            }
        };
        /** Send off the request for one item */
        var sendRequest = function (index) {
            var _this = this;
            var request = null;
            var parameters = _list[index];
            if (typeof parameters != 'object') {
                parameters = [parameters];
            }
            // Set up timeout for 30 seconds
            var timeout_id = window.setTimeout(function () {
                // Abort request, we'll either skip it or try again
                if (request && request.abort) {
                    request.abort();
                }
                updateUi({ type: 'error', data: dialog.egw().lang("failed") + " " + parameters.join(" ") }, index + 1);
            }, 30000);
            // Async request, we'll take the next step in the callback
            // We can't pass index = 0, it looks like false and causes issues
            try {
                request = dialog.egw().json(_menuaction, parameters).sendRequest()
                    .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, value;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(response && response.response)) return [3 /*break*/, 4];
                                clearTimeout(timeout_id);
                                _i = 0, _a = response.response;
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 4];
                                value = _a[_i];
                                return [4 /*yield*/, updateUi(value.type == "data" ? value.data : value, index + 1)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        clearTimeout(timeout_id);
                        updateUi({ type: 'error', data: (_a = response.message) !== null && _a !== void 0 ? _a : response }, index + 1);
                        return [2 /*return*/];
                    });
                }); });
            }
            catch (e) {
                clearTimeout(timeout_id);
                request.abort();
                updateUi({ type: 'error', data: dialog.egw().lang("No response from server: your data is probably NOT saved") }, index + 1);
            }
            return request;
        };
        // Wait for dialog, then start the process
        dialog.getUpdateComplete().then(function () {
            return __awaiter(this, void 0, void 0, function () {
                var index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Get access to template widgets
                            log = dialog.eTemplate.widgetContainer.getDOMWidgetById('log').getDOMNode();
                            progressbar = dialog.eTemplate.widgetContainer.getWidgetById('progressbar');
                            progressbar.set_label('0 / ' + _list.length);
                            totals.widget = dialog.eTemplate.widgetContainer.getWidgetById('totals');
                            index = 0;
                            _a.label = 1;
                        case 1:
                            if (!(index < _list.length && !cancel)) return [3 /*break*/, 5];
                            return [4 /*yield*/, sendRequest(index)];
                        case 2:
                            _a.sent();
                            if (!retryDialog) return [3 /*break*/, 4];
                            return [4 /*yield*/, retryDialog];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            index++;
                            return [3 /*break*/, 1];
                        case 5:
                            // All done
                            if (!cancel) {
                                progressbar.set_value(100);
                            }
                            // Disable cancel (it's too late), enable OK
                            dialog.querySelector('et2-button[button_id="' + Et2Dialog.CANCEL_BUTTON + '"]').setAttribute("disabled", "");
                            dialog.querySelector('et2-button[button_id="' + Et2Dialog.OK_BUTTON + '"]').removeAttribute("disabled");
                            if (!cancel && typeof _callback == "function") {
                                _callback.call(dialog, true, success);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        });
        return dialog;
    };
    /**
     * Show a dialog to confirm overwriting an existing file or suggest a new name
     *
     * @param {string} etemplate_exec_id
     * @param {string} path File destination, should include trailing /
     * @param {string} filename Original file name
     * @param {string} mimetype
     * @param {boolean} noConfirm Will not ask user about change or overwrite, just return new filename or null
     * @param {string|IegwAppLocal} egw object or application name
     *
     * @return Promise<string | false | null> Accepted file name, false to cancel, null if there was no conflict
     */
    Et2Dialog.confirm_file = function (etemplate_exec_id, path, filename, mimetype, noConfirm, _egw_or_appname) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var confirm_file_dialog, exists;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        confirm_file_dialog = new Et2Dialog(_egw_or_appname);
                        exists = { exists: false, filename: "", errs: 0, msg: "" };
                        return [4 /*yield*/, confirm_file_dialog.egw().request("EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_conflict_check", [
                                etemplate_exec_id,
                                path,
                                filename,
                                mimetype
                            ])];
                    case 1:
                        exists = _c.sent();
                        if (exists && exists.errs) {
                            throw new Error(exists.msg || "Could not check for conflict " + path + "/" + filename);
                        }
                        if (!exists || !exists.exists) {
                            // No conflicts, use requested name
                            return [2 /*return*/, null];
                        }
                        // If they don't want to be prompted, skip it and just return the name
                        if (noConfirm) {
                            return [2 /*return*/, (_a = exists.filename) !== null && _a !== void 0 ? _a : filename];
                        }
                        return [2 /*return*/, confirmConflict(confirm_file_dialog.egw(), path, filename, (_b = exists.filename) !== null && _b !== void 0 ? _b : filename)];
                }
            });
        });
    };
    /**
     * Types
     * @constant
     */
    Et2Dialog.PLAIN_MESSAGE = 0;
    Et2Dialog.INFORMATION_MESSAGE = 1;
    Et2Dialog.QUESTION_MESSAGE = 2;
    Et2Dialog.WARNING_MESSAGE = 3;
    Et2Dialog.ERROR_MESSAGE = 4;
    /* Pre-defined Button combos */
    Et2Dialog.BUTTONS_OK = 0;
    Et2Dialog.BUTTONS_OK_CANCEL = 1;
    Et2Dialog.BUTTONS_YES_NO = 2;
    Et2Dialog.BUTTONS_YES_NO_CANCEL = 3;
    /* Button constants */
    Et2Dialog.CANCEL_BUTTON = 0;
    Et2Dialog.OK_BUTTON = 1;
    Et2Dialog.YES_BUTTON = 2;
    Et2Dialog.NO_BUTTON = 3;
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Dialog.prototype, "callback", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Dialog.prototype, "isModal", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Dialog.prototype, "buttons", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Dialog.prototype, "width", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Dialog.prototype, "height", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Dialog.prototype, "message", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2Dialog.prototype, "dialog_type", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Dialog.prototype, "icon", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Dialog.prototype, "destroyOnClose", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Dialog.prototype, "hideOnEscape", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Dialog.prototype, "noCloseButton", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2Dialog.prototype, "value", null);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Dialog.prototype, "template", null);
    __decorate([
        property_js_1.property()
    ], Et2Dialog.prototype, "title", null);
    return Et2Dialog;
}(Et2Widget_1.Et2Widget(shoelace_2.SlDialog)));
exports.Et2Dialog = Et2Dialog;
/* Ask the user if they want to overwrite or change the name, called by Et2Dialog.confirm_file() */
function confirmConflict(egw, path, fileName, suggestedName) {
    return __awaiter(this, void 0, void 0, function () {
        var buttons, button_id, value;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    buttons = [
                        {
                            label: egw.lang("Overwrite"),
                            id: "overwrite",
                            class: "ui-priority-primary",
                            "default": true,
                            image: 'check'
                        },
                        { label: egw.lang("Rename"), id: "rename", image: 'edit' },
                        { label: egw.lang("Cancel"), id: "cancel", image: "cancel" }
                    ];
                    if (!path.endsWith("/")) return [3 /*break*/, 2];
                    return [4 /*yield*/, Et2Dialog.show_prompt(undefined, egw.lang('Do you want to overwrite existing file %1 in directory %2?', fileName, path), egw.lang('File %1 already exists', fileName), suggestedName !== null && suggestedName !== void 0 ? suggestedName : fileName, buttons, egw).getComplete()];
                case 1:
                    // Filename is up to user, let them rename
                    _a = (_c.sent()), button_id = _a[0], value = _a[1];
                    return [3 /*break*/, 4];
                case 2:
                    // Filename is set, only ask to overwrite
                    buttons.splice(1, 1);
                    fileName = suggestedName !== null && suggestedName !== void 0 ? suggestedName : fileName;
                    return [4 /*yield*/, Et2Dialog.show_dialog(undefined, egw.lang('Do you want to overwrite existing file %1 in directory %2?', fileName, path), egw.lang('File %1 already exists', fileName), undefined, buttons, Et2Dialog.QUESTION_MESSAGE, "", egw).getComplete()];
                case 3:
                    _b = (_c.sent()), button_id = _b[0], value = _b[1];
                    _c.label = 4;
                case 4:
                    switch (button_id) {
                        case "rename":
                            // Take suggestion
                            return [2 /*return*/, value.value];
                        // fall through
                        case "overwrite":
                            // Upload as set
                            return [2 /*return*/, fileName];
                        case "cancel":
                            // Don't upload
                            return [2 /*return*/, false];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//@ts-ignore TS doesn't recognize Et2Dialog as HTMLEntry
customElements.define("et2-dialog", Et2Dialog);
// make Et2Dialog publicly available as we need to call it from templates
{
    window['Et2Dialog'] = Et2Dialog;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
