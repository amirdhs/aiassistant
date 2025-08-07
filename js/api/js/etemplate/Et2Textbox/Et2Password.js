"use strict";
/**
 * EGroupware eTemplate2 - Password input widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Ralf Becker
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Password = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2InvokerMixin_1 = require("../Et2Url/Et2InvokerMixin");
var Et2Textbox_1 = require("./Et2Textbox");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var egw_global_1 = require("../../jsapi/egw_global");
var isChromium = (_a = navigator.userAgentData) === null || _a === void 0 ? void 0 : _a.brands.some(function (b) { return b.brand.includes('Chromium'); });
var isFirefox = isChromium ? false : navigator.userAgent.includes('Firefox');
/**
 * @customElement et2-password
 */
var Et2Password = /** @class */ (function (_super) {
    __extends(Et2Password, _super);
    function Et2Password() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        // The password is stored encrypted server side, and passed encrypted.
        // This flag is for if we've decrypted the password to show it already
        _this.encrypted = true;
        _this.visible = false;
        _this.plaintext = true;
        _this.suggest = 0;
        _this._invokerLabel = '';
        _this._invokerTitle = _this.egw().lang("Suggest password");
        _this._invokerAction = function () {
            _this.suggestPassword();
        };
        return _this;
    }
    Object.defineProperty(Et2Password, "properties", {
        /** @type {any} */
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Password is plaintext
                 */
                plaintext: Boolean, 
                /**
                 * Suggest password length (0 for off)
                 */
                suggest: Number });
        },
        enumerable: false,
        configurable: true
    });
    Et2Password.prototype.transformAttributes = function (attrs) {
        if (typeof attrs.suggest !== "undefined") {
            attrs.suggest = parseInt(attrs.suggest);
        }
        attrs.type = 'password';
        if (typeof attrs.viewable !== "undefined") {
            attrs['togglePassword'] = attrs.viewable;
            delete attrs.viewable;
        }
        if (typeof attrs.togglePassword !== "undefined" && !attrs.togglePassword
            || typeof attrs.togglePassword == "string" && !this.getArrayMgr("content").parseBoolExpression(attrs.togglePassword)) {
            // Unset togglePassword if its false.  It's from parent, and it doesn't handle string "false" = false
            delete attrs.togglePassword;
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    /**
     * Method to check if invoker can be activated: not disabled, empty or invalid
     *
     * @protected
     * */
    Et2Password.prototype._toggleInvokerDisabled = function () {
        if (this._invokerNode) {
            var invokerNode = /** @type {HTMLElement & {disabled: boolean}} */ (this._invokerNode);
            invokerNode.disabled = this.disabled || this.readonly;
        }
    };
    /**
     * @param {PropertyKey} name
     * @param {?} oldValue
     */
    Et2Password.prototype.requestUpdate = function (name, oldValue) {
        _super.prototype.requestUpdate.call(this, name, oldValue);
        if (name === 'suggest' && this.suggest != oldValue) {
            this._invokerLabel = this.suggest ? 'generate_password' : '';
            this._toggleInvokerDisabled();
        }
    };
    /**
     * @param _len
     * @deprecated use this.suggest instead
     */
    Et2Password.prototype.set_suggest = function (_len) {
        this.suggest = _len;
    };
    /**
     * Ask the server for a password suggestion
     */
    Et2Password.prototype.suggestPassword = function () {
        var _this = this;
        // They need to see the suggestion
        this.encrypted = false;
        this.type = 'text';
        //this.toggle_visibility(true);
        var suggestion = "Suggestion";
        var request = egw_global_1.egw.request("EGroupware\\Api\\Etemplate\\Widget\\Password::ajax_suggest", [this.suggest])
            .then(function (suggestion) {
            _this.encrypted = false;
            _this.value = suggestion;
            // Check for second password, update it too
            var two = _this.getParent().getWidgetById(_this.id + '_2');
            if (two && two.getType() == _this.getType()) {
                two.type = 'text';
                two.value = suggestion;
            }
        });
    };
    /**
     * If the password is viewable, toggle the visibility.
     * If the password is still encrypted, we'll ask for the user's password then have the server decrypt it.
     */
    Et2Password.prototype.handlePasswordToggle = function () {
        var _this = this;
        _super.prototype.handlePasswordToggle.call(this);
        this.visible = !this.visible; // can't access private isPasswordVisible
        if (!this.visible || !this.encrypted || !this.value) {
            this.type = this.visible ? 'text' : 'password';
            return;
        }
        if (this.plaintext)
            return; // no need to query user-password, if the password is plaintext
        // Need username & password to decrypt
        Et2Dialog_1.Et2Dialog.show_prompt(function (button, user_password) {
            if (button == Et2Dialog_1.Et2Dialog.CANCEL_BUTTON) {
                return _this.handlePasswordToggle();
            }
            _this.egw().request("EGroupware\\Api\\Etemplate\\Widget\\Password::ajax_decrypt", [user_password, _this.value]).then(function (decrypted) {
                if (decrypted) {
                    _this.encrypted = false;
                    _this.value = decrypted;
                    _this.type = 'text';
                }
                else {
                    _this.set_validation_error(_this.egw().lang("invalid password"));
                    window.setTimeout(function () {
                        _this.set_validation_error(false);
                    }, 2000);
                }
            });
        }, this.egw().lang("Enter your password"), this.egw().lang("Authenticate"));
    };
    Et2Password.prototype.render = function () {
        var hasLabelSlot = this.hasSlotController.test('label');
        var hasHelpTextSlot = this.hasSlotController.test('help-text');
        var hasLabel = this.label ? true : !!hasLabelSlot;
        var hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        var hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === 'number' || this.value.length > 0);
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                <label\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        for=\"input\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <div\n                            part=\"base\"\n                            class=", "\n                    >\n                        <slot name=\"prefix\" part=\"prefix\" class=\"input__prefix\"></slot>\n                        <input\n                                part=\"input\"\n                                id=\"input\"\n                                class=\"input__control\"\n                                type=", "\n                                title=", "\n                                name=", "\n                                ?disabled=", "\n                                ?readonly=", "\n                                ?required=", "\n                                placeholder=", "\n                                minlength=", "\n                                maxlength=", "\n                                min=", "\n                                max=", "\n                                step=", "\n                                .value=", "\n                                autocapitalize=", "\n                                autocomplete=", "\n                                autocorrect=\"off\"\n                                ?autofocus=", "\n                                spellcheck=", "\n                                pattern=", "\n                                enterkeyhint=", "\n                                inputmode=", "\n                                aria-describedby=\"help-text\"\n                                @change=", "\n                                @input=", "\n                                @invalid=", "\n                                @keydown=", "\n                                @focus=", "\n                                @blur=", "\n                        />\n                        ", "\n                        ", "\n                        <slot name=\"suffix\" part=\"suffix\" class=\"input__suffix\"></slot>\n                    </div>\n                </div>\n                <slot\n                        name=\"help-text\"\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    ", "\n                </slot>\n            </div>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                <label\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        for=\"input\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <div\n                            part=\"base\"\n                            class=",
            "\n                    >\n                        <slot name=\"prefix\" part=\"prefix\" class=\"input__prefix\"></slot>\n                        <input\n                                part=\"input\"\n                                id=\"input\"\n                                class=\"input__control\"\n                                type=", "\n                                title=", /* An empty title prevents browser validation tooltips from appearing on hover */ "\n                                name=", "\n                                ?disabled=", "\n                                ?readonly=", "\n                                ?required=", "\n                                placeholder=", "\n                                minlength=", "\n                                maxlength=", "\n                                min=", "\n                                max=", "\n                                step=", "\n                                .value=", "\n                                autocapitalize=", "\n                                autocomplete=", "\n                                autocorrect=\"off\"\n                                ?autofocus=", "\n                                spellcheck=", "\n                                pattern=", "\n                                enterkeyhint=", "\n                                inputmode=", "\n                                aria-describedby=\"help-text\"\n                                @change=", "\n                                @input=", "\n                                @invalid=", "\n                                @keydown=", "\n                                @focus=", "\n                                @blur=", "\n                        />\n                        ",
            "\n                        ",
            "\n                        <slot name=\"suffix\" part=\"suffix\" class=\"input__suffix\"></slot>\n                    </div>\n                </div>\n                <slot\n                        name=\"help-text\"\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    ", "\n                </slot>\n            </div>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--small': this.size === 'small',
            'form-control--medium': this.size === 'medium',
            'form-control--large': this.size === 'large',
            'form-control--has-label': hasLabel,
            'form-control--has-help-text': hasHelpText
        }), hasLabel ? 'false' : 'true', this.label, class_map_js_1.classMap({
            input: true,
            // Sizes
            'input--small': this.size === 'small',
            'input--medium': this.size === 'medium',
            'input--large': this.size === 'large',
            // States
            'input--pill': this.pill,
            'input--standard': !this.filled,
            'input--filled': this.filled,
            'input--disabled': this.disabled,
            'input--focused': this.hasFocus,
            'input--empty': !this.value,
            'input--no-spin-buttons': this.noSpinButtons,
            'input--is-firefox': isFirefox
        }), this.type === 'password' && this.passwordVisible ? 'text' : this.type, this.title /* An empty title prevents browser validation tooltips from appearing on hover */, if_defined_js_1.ifDefined(this.name), this.disabled, this.readonly || this.autocomplete == "new-password", this.required, if_defined_js_1.ifDefined(this.placeholder), if_defined_js_1.ifDefined(this.minlength), if_defined_js_1.ifDefined(this.maxlength), if_defined_js_1.ifDefined(this.min), if_defined_js_1.ifDefined(this.max), if_defined_js_1.ifDefined(this.step), this.value, if_defined_js_1.ifDefined(this.type === 'password' ? 'off' : this.autocapitalize), if_defined_js_1.ifDefined(this.autocomplete), this.autofocus, this.spellcheck, if_defined_js_1.ifDefined(this.pattern), if_defined_js_1.ifDefined(this.enterkeyhint), if_defined_js_1.ifDefined(this.inputmode), this.handleChange, this.handleInput, this.handleInvalid, this.handleKeyDown, this.handleFocus, this.handleBlur, hasClearIcon
            ? lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                    <button\n                                            part=\"clear-button\"\n                                            class=\"input__clear\"\n                                            type=\"button\"\n                                            aria-label=", "\n                                            @click=", "\n                                            tabindex=\"-1\"\n                                    >\n                                        <slot name=\"clear-icon\">\n                                            <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                                        </slot>\n                                    </button>\n                                "], ["\n                                    <button\n                                            part=\"clear-button\"\n                                            class=\"input__clear\"\n                                            type=\"button\"\n                                            aria-label=", "\n                                            @click=", "\n                                            tabindex=\"-1\"\n                                    >\n                                        <slot name=\"clear-icon\">\n                                            <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                                        </slot>\n                                    </button>\n                                "])), this.localize.term('clearEntry'), this.handleClearClick) : '', this.togglePassword && !this.disabled
            ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                                    <button\n                                            part=\"password-toggle-button\"\n                                            class=\"input__password-toggle\"\n                                            type=\"button\"\n                                            aria-label=", "\n                                            @click=", "\n                                            tabindex=\"-1\"\n                                    >\n                                        ", "\n                                    </button>\n                                "], ["\n                                    <button\n                                            part=\"password-toggle-button\"\n                                            class=\"input__password-toggle\"\n                                            type=\"button\"\n                                            aria-label=", "\n                                            @click=", "\n                                            tabindex=\"-1\"\n                                    >\n                                        ",
                "\n                                    </button>\n                                "])), this.localize.term(this.isPasswordVisible ? 'hidePassword' : 'showPassword'), this.handlePasswordToggle, this.isPasswordVisible
                ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                                                    <slot name=\"show-password-icon\">\n                                                        <sl-icon name=\"eye-slash\" library=\"system\"></sl-icon>\n                                                    </slot>\n                                                "], ["\n                                                    <slot name=\"show-password-icon\">\n                                                        <sl-icon name=\"eye-slash\" library=\"system\"></sl-icon>\n                                                    </slot>\n                                                "]))) : lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                                                    <slot name=\"hide-password-icon\">\n                                                        <sl-icon name=\"eye\" library=\"system\"></sl-icon>\n                                                    </slot>\n                                                "], ["\n                                                    <slot name=\"hide-password-icon\">\n                                                        <sl-icon name=\"eye\" library=\"system\"></sl-icon>\n                                                    </slot>\n                                                "])))) : '', hasHelpText ? 'false' : 'true', this.helpText);
    };
    Et2Password.prototype.handleFocus = function (e) {
        if (!this.readonly) {
            this.shadowRoot.querySelector("input").removeAttribute("readonly");
        }
        _super.prototype.handleFocus.call(this, e);
    };
    return Et2Password;
}(Et2InvokerMixin_1.Et2InvokerMixin(Et2Textbox_1.Et2Textbox)));
exports.Et2Password = Et2Password;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-password", Et2Password);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
