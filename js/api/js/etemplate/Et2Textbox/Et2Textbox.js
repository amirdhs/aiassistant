"use strict";
/**
 * EGroupware eTemplate2 - Textbox widget (WebComponent)
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
exports.Et2Textbox = void 0;
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var Regex_1 = require("../Validators/Regex");
var shoelace_1 = require("../Styles/shoelace");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var imask_1 = require("imask");
var shoelace_2 = require("@shoelace-style/shoelace");
var Et2Textbox = /** @class */ (function (_super) {
    __extends(Et2Textbox, _super);
    function Et2Textbox() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        /**
         * Disables the input.  It is still visible.
         * @type {boolean}
         */
        _this.disabled = false;
        _this.inputMode = "text";
        return _this;
    }
    Object.defineProperty(Et2Textbox, "styles", {
        get: function () {
            return __spreadArrays(shoelace_1.default, _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host([type=\"hidden\"]) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.form_control {\n\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t}\n\t\t\t\t.input__control {\n\t\t\t\t\tborder: none;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.input:hover:not(.input--disabled) .input__control {\n\t\t\t\t\tcolor: var(--input-text-color, inherit);\n\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t:host([type=\"hidden\"]) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.form_control {\n\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t}\n\t\t\t\t.input__control {\n\t\t\t\t\tborder: none;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.input:hover:not(.input--disabled) .input__control {\n\t\t\t\t\tcolor: var(--input-text-color, inherit);\n\t\t\t\t}\n\t\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Textbox, "translate", {
        get: function () {
            return Object.assign({
                helpText: true
            }, _super.translate);
        },
        enumerable: false,
        configurable: true
    });
    Et2Textbox.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("et2-textbox-widget");
    };
    Et2Textbox.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("focus", this.handleFocus);
    };
    Et2Textbox.prototype.firstUpdated = function () {
        if (this.maskOptions.mask) {
            this.updateMask();
        }
    };
    /** @param  changedProperties */
    Et2Textbox.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has('validator')) {
            // Remove all existing Pattern validators (avoids duplicates)
            this.validators = (this.validators || []).filter(function (validator) { return !(validator instanceof Regex_1.Regex); });
            this.validators.push(new Regex_1.Regex(this.validator));
        }
        if (changedProperties.has('mask')) {
            this.updateMask();
        }
    };
    Object.defineProperty(Et2Textbox.prototype, "validator", {
        get: function () {
            return this.__validator;
        },
        set: function (value) {
            if (typeof value == 'string') {
                var parts = value.split('/');
                var flags = parts.pop();
                if (parts.length < 2 || parts[0] !== '') {
                    this.egw().debug(this.egw().lang("'%1' has an invalid format !!!", value));
                    return;
                }
                parts.shift();
                this.__validator = new RegExp(parts.join('/'), flags);
                this.requestUpdate("validator");
            }
            else if (value instanceof RegExp) {
                this.__validator = value;
                this.requestUpdate("validator");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Textbox.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (newValue) {
            var oldValue = this.value;
            _super.prototype.value = newValue;
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Textbox.prototype, "maskOptions", {
        /**
         * Get the options for masking.
         * Can be overridden by subclass for additional options.
         *
         * @see https://imask.js.org/guide.html#masked
         */
        get: function () {
            return {
                mask: this.mask,
                lazy: this.placeholder ? true : false,
                autofix: true,
                eager: "append",
                overwrite: "shift"
            };
        },
        enumerable: false,
        configurable: true
    });
    Et2Textbox.prototype.updateMask = function () {
        var _this = this;
        // Skip if there's no mask desired
        if (!this.maskOptions.mask) {
            return;
        }
        var input = this.shadowRoot.querySelector("input");
        if (!this._mask) {
            this._mask = imask_1.default(input, this.maskOptions);
            this.addEventListener("focus", this.handleFocus);
            window.setTimeout(function () {
                _this._mask.updateControl();
            }, 1);
        }
        else {
            this._mask.updateOptions(this.maskOptions);
        }
        if (this._mask) {
            this.updateMaskValue();
        }
    };
    Et2Textbox.prototype.updateMaskValue = function () {
        var _this = this;
        if (!this._mask) {
            return;
        }
        this._mask.unmaskedValue = "" + this.value;
        this._mask.updateValue();
        this.updateComplete.then(function () {
            _this._mask.updateControl();
        });
    };
    Et2Textbox.prototype.handleFocus = function (event) {
        if (this._mask) {
            //	this._mask.updateValue();
        }
    };
    __decorate([
        property_js_1.property()
    ], Et2Textbox.prototype, "placeholder", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Textbox.prototype, "mask", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Textbox.prototype, "disabled", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Textbox.prototype, "onkeypress", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Textbox.prototype, "validator", null);
    __decorate([
        property_js_1.property()
    ], Et2Textbox.prototype, "value", null);
    Et2Textbox = __decorate([
        custom_element_js_1.customElement("et2-textbox")
    ], Et2Textbox);
    return Et2Textbox;
}(Et2InputWidget_1.Et2InputWidget(shoelace_2.SlInput)));
exports.Et2Textbox = Et2Textbox;
var templateObject_1;
