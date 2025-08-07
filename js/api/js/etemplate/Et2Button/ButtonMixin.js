"use strict";
/**
 * EGroupware eTemplate2 - Common button code
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMixin = void 0;
var lit_1 = require("lit");
require("../Et2Image/Et2Image");
var shoelace_1 = require("../Styles/shoelace");
var egw_keymanager_1 = require("../../egw_action/egw_keymanager");
exports.ButtonMixin = function (superclass) { var _a; return _a = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.clicked = false;
            // Property default values
            _this.__image = '';
            _this.noSubmit = false;
            _this.hideOnReadonly = false;
            _this.noValidation = false;
            return _this;
            // Do not add icon here, no children can be added in constructor
        }
        Object.defineProperty(class_1, "styles", {
            get: function () {
                return __spreadArrays(shoelace_1.default, (_super.styles || []), [
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            :host {\n                padding: 0;\n                /* These should probably come from somewhere else */\n               \tmax-width: 125px;\n               \tmin-width: fit-content;\n               \tdisplay: block;\n            }\n            /* Override general disabled=hide from Et2Widget */\n            :host([disabled]) {\n            \tdisplay: block;\n            }\n            :host([hideonreadonly][disabled]) {\n            \tdisplay:none !important;\n            }\n\n\t\t\t/* Leave label there for accessibility, but position it so it can't be seen */\n\t\t\t:host(.imageOnly) .button__label {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: -999px\n\t\t\t}\n            \n            /* Set size for icon */\n            ::slotted(img.imageOnly) {\n    \t\t\tpadding-right: 0px !important;\n    \t\t\twidth: 16px !important;\n\t\t\t}\n            ::slotted(et2-image) {\n            \theight: 20px;\n                max-width: 20px;\n                display: flex;\n\t\t\t\tfont-size: 20px !important;\n\t\t\t\tpadding-left: var(--et2-button-image-padding-left);\n/*fix for firefox esr: this version does not set a width on the image to fill available space\nso we force the button images to be square*/\n\t\t\t\twidth: 20px;\n            }\n            ::slotted([slot=\"icon\"][src='']) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.imageOnly {\n\t\t\t\twidth:18px;\n\t\t\t\theight: 18px;\n\t\t\t}\n\t\t\t/* Make hover border match other widgets (select) */\n\t\t\t.button--standard.button--default:hover:not(.button--disabled) {\n\t\t\t\tbackground-color: var(--sl-color-gray-150);\n\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\tcolor: var(--sl-input-color-hover);\n\t\t\t}\n\t\t\t.button {\n\t\t\t\tjustify-content: left;\n\t\t\t}\n\t\t\t.button--has-label.button--medium .button__label {\n\t\t\t\tpadding: 0 var(--sl-spacing-medium);\n\t\t\t}\n\t\t\t.button__label {\n\t\t\t\ttext-overflow: ellipsis;\n    \t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t.button__prefix {\n\t\t\t\tpadding-left: 1px;\n\t\t\t}\n\t\t\t\n\t\t\t/* Only image, no label */\n\t\t\t.button--has-prefix:not(.button--has-label) {\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: var(--sl-input-height-medium);\n\t\t\t\tpadding-inline-start: 0;\t\t\t\n\t\t\t}\n\t\t\t.button--has-prefix:not(.button--has-label) ::slotted(et2-image) {\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\t\t\t\n\t\t\t/* Override primary styling - we use variant=primary on first dialog button */\n\t\t\t.button--standard.button--primary {\n\t\t\t\tbackground-color: var(--sl-color-gray-100);\n\t\t\t\tborder-color: var(--sl-color-gray-400);\n\t\t\t\tcolor: var(--sl-input-color-hover);\n\t\t\t}\n\t\t\t.button--standard.button--primary:hover:not(.button--disabled),\n\t\t\t.button--standard.button--primary.button--checked:not(.button--disabled) {\n\t\t\t\tbackground-color: var(--sl-color-gray-150);\n\t\t\t\tborder-color: var(--sl-color-gray-600);\n\t\t\t\tcolor: initial;\n\t\t\t}\n\t\t\t.button--standard.button--primary:active:not(.button--disabled) {\n\t\t\t\tborder-color: var(--sl-color-gray-700);\n\t\t\t\tbackground-color: var(--sl-color-gray-300);\n\t\t\t\tcolor: initial;\n\t\t\t}\n            "], ["\n            :host {\n                padding: 0;\n                /* These should probably come from somewhere else */\n               \tmax-width: 125px;\n               \tmin-width: fit-content;\n               \tdisplay: block;\n            }\n            /* Override general disabled=hide from Et2Widget */\n            :host([disabled]) {\n            \tdisplay: block;\n            }\n            :host([hideonreadonly][disabled]) {\n            \tdisplay:none !important;\n            }\n\n\t\t\t/* Leave label there for accessibility, but position it so it can't be seen */\n\t\t\t:host(.imageOnly) .button__label {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: -999px\n\t\t\t}\n            \n            /* Set size for icon */\n            ::slotted(img.imageOnly) {\n    \t\t\tpadding-right: 0px !important;\n    \t\t\twidth: 16px !important;\n\t\t\t}\n            ::slotted(et2-image) {\n            \theight: 20px;\n                max-width: 20px;\n                display: flex;\n\t\t\t\tfont-size: 20px !important;\n\t\t\t\tpadding-left: var(--et2-button-image-padding-left);\n/*fix for firefox esr: this version does not set a width on the image to fill available space\nso we force the button images to be square*/\n\t\t\t\twidth: 20px;\n            }\n            ::slotted([slot=\"icon\"][src='']) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.imageOnly {\n\t\t\t\twidth:18px;\n\t\t\t\theight: 18px;\n\t\t\t}\n\t\t\t/* Make hover border match other widgets (select) */\n\t\t\t.button--standard.button--default:hover:not(.button--disabled) {\n\t\t\t\tbackground-color: var(--sl-color-gray-150);\n\t\t\t\tborder-color: var(--sl-input-border-color-hover);\n\t\t\t\tcolor: var(--sl-input-color-hover);\n\t\t\t}\n\t\t\t.button {\n\t\t\t\tjustify-content: left;\n\t\t\t}\n\t\t\t.button--has-label.button--medium .button__label {\n\t\t\t\tpadding: 0 var(--sl-spacing-medium);\n\t\t\t}\n\t\t\t.button__label {\n\t\t\t\ttext-overflow: ellipsis;\n    \t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t.button__prefix {\n\t\t\t\tpadding-left: 1px;\n\t\t\t}\n\t\t\t\n\t\t\t/* Only image, no label */\n\t\t\t.button--has-prefix:not(.button--has-label) {\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: var(--sl-input-height-medium);\n\t\t\t\tpadding-inline-start: 0;\t\t\t\n\t\t\t}\n\t\t\t.button--has-prefix:not(.button--has-label) ::slotted(et2-image) {\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\t\t\t\n\t\t\t/* Override primary styling - we use variant=primary on first dialog button */\n\t\t\t.button--standard.button--primary {\n\t\t\t\tbackground-color: var(--sl-color-gray-100);\n\t\t\t\tborder-color: var(--sl-color-gray-400);\n\t\t\t\tcolor: var(--sl-input-color-hover);\n\t\t\t}\n\t\t\t.button--standard.button--primary:hover:not(.button--disabled),\n\t\t\t.button--standard.button--primary.button--checked:not(.button--disabled) {\n\t\t\t\tbackground-color: var(--sl-color-gray-150);\n\t\t\t\tborder-color: var(--sl-color-gray-600);\n\t\t\t\tcolor: initial;\n\t\t\t}\n\t\t\t.button--standard.button--primary:active:not(.button--disabled) {\n\t\t\t\tborder-color: var(--sl-color-gray-700);\n\t\t\t\tbackground-color: var(--sl-color-gray-300);\n\t\t\t\tcolor: initial;\n\t\t\t}\n            "]))),
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1, "properties", {
            get: function () {
                return __assign(__assign({}, _super.properties), { image: { type: String, noAccessor: true }, 
                    /**
                     * If button is set to readonly, do we want to hide it completely (old behaviour) or show it as disabled
                     * (default)
                     * Something's not quite right here, as the attribute shows up as "hideonreadonly" instead of "hide" but
                     * it does not show up without the "attribute", and attribute:"hideonreadonly" does not show as an attribute
                     */
                    hideOnReadonly: { type: Boolean, reflect: true, attribute: "hide" }, 
                    /**
                     * Button should submit the etemplate
                     * Return false from the click handler to cancel the submit, or set noSubmit to true to skip submitting.
                     */
                    noSubmit: { type: Boolean, reflect: false }, 
                    /**
                     * When submitting, skip the validation step.  Allows to submit etemplates directly to the server.
                     */
                    noValidation: { type: Boolean } });
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback && _super.prototype.connectedCallback.call(this);
            this.classList.add("et2-button-widget");
        };
        class_1.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback && _super.prototype.disconnectedCallback.call(this);
            // Remove keycode handler
            if (this._registeredKeycode) {
                var _a = this._registeredKeycode.split("_"), keycode = _a[0], modifiers = _a[1];
                egw_keymanager_1.egw_unregisterGlobalShortcut(keycode, modifiers.includes("S"), modifiers.includes("C"), modifiers.includes("A"));
            }
        };
        class_1.prototype.destroy = function () {
            _super.prototype.destroy && _super.prototype.destroy.call(this);
            // Clean up any added image
            while (this.lastChild)
                this.lastChild.remove();
        };
        Object.defineProperty(class_1.prototype, "image", {
            get: function () {
                return this.__image;
            },
            set: function (new_image) {
                var oldValue = this.__image;
                if (new_image.startsWith("http") || new_image.startsWith(this.egw().webserverUrl)) {
                    this.__image = new_image;
                }
                else {
                    this.__image = this.egw().image(new_image);
                }
                this.requestUpdate("image", oldValue);
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype._handleClick = function (event) {
            var _a, _b;
            // ignore click on readonly button
            if (this.disabled || this.readonly || event.defaultPrevented) {
                event.preventDefault();
                event.stopImmediatePropagation();
                return false;
            }
            this.clicked = true;
            // Cancel buttons don't trigger the close confirmation prompt
            if (this.classList.contains("et2_button_cancel")) {
                (_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.skip_close_prompt();
            }
            if (!_super.prototype._handleClick.call(this, event)) {
                this.clicked = false;
                return false;
            }
            // Submit the form
            if (!this.noSubmit) {
                return this.getInstanceManager().submit(this, undefined, this.noValidation);
            }
            this.clicked = false;
            (_b = this.getInstanceManager()) === null || _b === void 0 ? void 0 : _b.skip_close_prompt(false);
            return true;
        };
        /**
         * Handle changes that have to happen based on changes to properties
         *
         */
        class_1.prototype.requestUpdate = function (name, oldValue) {
            _super.prototype.requestUpdate.call(this, name, oldValue);
            // "disabled" is the attribute from the spec
            if (name == 'readonly') {
                if (this.readonly) {
                    this.setAttribute('disabled', "");
                }
                else {
                    this.removeAttribute("disabled");
                }
            }
            // Default image & class are determined based on ID
            if (name == "id" && this._widget_id) {
                // Check against current value to avoid triggering another update
                if (!this.image) {
                    var image = this._get_default_image(this._widget_id);
                    if (image && image != this.__image) {
                        this.image = image;
                    }
                }
                var default_class = this._get_default_class(this._widget_id);
                if (default_class && !this.classList.contains(default_class)) {
                    this.classList.add(default_class);
                }
            }
        };
        class_1.prototype.updated = function (changedProperties) {
            _super.prototype.updated.call(this, changedProperties);
            if (changedProperties.has("image")) {
                if (this.image && !this._iconNode) {
                    var image = document.createElement("et2-image");
                    image.slot = "prefix";
                    this.prepend(image);
                    image.src = this.__image;
                }
                else if (this._iconNode) {
                    this._iconNode.src = this.__image;
                }
            }
        };
        /**
         * Get a default image for the button based on ID
         *
         * @param {string} check_id
         */
        class_1.prototype._get_default_image = function (check_id) {
            if (!check_id) {
                return "";
            }
            if (!this.image) {
                // @ts-ignore
                for (var image in this.constructor.default_background_images) {
                    // @ts-ignore
                    if (check_id.match(this.constructor.default_background_images[image])) {
                        return image;
                    }
                }
            }
            return "";
        };
        /**
         * If button ID has a default keyboard shortcut (eg: Save: Ctrl+S), register with egw_keymanager
         *
         * @param {string} check_id
         */
        class_1.prototype._register_default_keyhandler = function (check_id) {
            var _this = this;
            if (!check_id) {
                return;
            }
            // @ts-ignore
            for (var keyindex in this.constructor.default_keys) {
                // @ts-ignore
                if (check_id.match(this.constructor.default_keys[keyindex])) {
                    this._registeredKeycode = keyindex.substring(1);
                    var _a = keyindex.substring(1).split("_"), keycode = _a[0], modifiers = _a[1];
                    egw_keymanager_1.egw_registerGlobalShortcut(parseInt(keycode), modifiers.includes("S"), modifiers.includes("C"), modifiers.includes("A"), function () {
                        _this.dispatchEvent(new MouseEvent("click"));
                        return true;
                    }, this);
                }
            }
        };
        /**
         * Get a default class for the button based on ID
         *
         * @param check_id
         * @returns {string}
         */
        class_1.prototype._get_default_class = function (check_id) {
            if (!check_id) {
                return "";
            }
            for (var name in exports.ButtonMixin.default_classes) {
                if (check_id.match(exports.ButtonMixin.default_classes[name])) {
                    return name;
                }
            }
            return "";
        };
        Object.defineProperty(class_1.prototype, "_iconNode", {
            get: function () {
                return (Array.from(this.children)).find(function (el) { return el.slot === "prefix"; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "_labelNode", {
            get: function () {
                return (Array.from(this.childNodes)).find(function (el) { return el.nodeType === 3; });
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Implementation of the et2_IInput interface
         */
        /**
         * Always return false as a button is never dirty
         */
        class_1.prototype.isDirty = function () {
            return false;
        };
        class_1.prototype.resetDirty = function () {
        };
        class_1.prototype.getValue = function () {
            if (this.clicked) {
                return true;
            }
            // If "null" is returned, the result is not added to the submitted
            // array.
            return null;
        };
        /**
         * Reimplemented to pass aria-attributes to button
         */
        class_1.prototype.getInputNode = function () {
            return this.shadowRoot.querySelector('button');
        };
        return class_1;
    }(superclass)),
    /**
     * images to be used as background-image, if none is explicitly applied and id matches given regular expression
     */
    _a.default_background_images = {
        save: /save(&|\]|$)/,
        apply: /apply(&|\]|$)/,
        cancel: /cancel(&|\]|$)/,
        delete: /delete(&|\]|$)/,
        discard: /discard(&|\]|$)/,
        edit: /edit(&|\[|\]|$)/,
        next: /(next|continue)(&|\]|$)/,
        finish: /finish(&|\]|$)/,
        back: /(back|previous)(&|\]|$)/,
        copy: /copy(&|\]|$)/,
        more: /more(&|\]|$)/,
        check: /(yes|check)(&|\]|$)/,
        cancelled: /no(&|\]|$)/,
        ok: /ok(&|\]|$)/,
        close: /close(&|\]|$)/,
        link: /link(&|\]|_|$)/,
        add: /(add(&|\]|$)|create)/ // customfields use create*
    },
    /**
     * Classnames added automatically to buttons to set certain hover background colors
     */
    _a.default_classes = {
        et2_button_cancel: /cancel(&|\]|$)/,
        et2_button_question: /(yes|no)(&|\]|$)/,
        et2_button_delete: /delete(&|\]|$)/ // red
    },
    _a.default_keys = {
        //egw_shortcutIdx : id regex
        _83_C: /save(&|\]|$)/,
        _27_: /cancel(&|\]|$)/,
    },
    _a; };
var templateObject_1;
