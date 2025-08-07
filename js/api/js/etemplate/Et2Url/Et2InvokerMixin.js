"use strict";
/**
 * EGroupware eTemplate2 - InvokerMixing
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2InvokerMixin = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var lit_1 = require("lit");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var dedupe_mixin_1 = require("@open-wc/dedupe-mixin");
exports.Et2InvokerMixin = dedupe_mixin_1.dedupeMixin(function (superclass) {
    var Et2Invoker = /** @class */ (function (_super) {
        __extends(Et2Invoker, _super);
        function Et2Invoker() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /** @private */
            _this.__invokerId = _this.__createUniqueIdForA11y();
            // default for properties
            _this._invokerTitle = 'Click to open';
            return _this;
        }
        Object.defineProperty(Et2Invoker, "properties", {
            /** @type {any} */
            get: function () {
                return {
                    /**
                     * Textual label or image specifier for egw.image()
                     */
                    _invokerLabel: {
                        type: String,
                    },
                    _invokerTitle: {
                        type: String,
                    },
                    _invokerAction: {
                        type: Function,
                    }
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2Invoker, "styles", {
            get: function () {
                return __spreadArrays(_super.styles, [
                    colorsDefStyles_1.colorsDefStyles,
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted(input), input, ::slotted(select) {\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tborder: none !important;\n\t\t\t\t}\n\t\t\t\t.input-group {\n\t\t\t\t\tborder: 1px solid var(--input-border-color);\n\t\t\t\t}\n\t\t\t\t.input-group__suffix{\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t\t.input-group__container {\n\t\t\t\t\talign-items: center\n\t\t\t\t}\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\twidth: 14px;\n\t\t\t\t\tborder: none !important;\n\t\t\t\t\tbackground-color: transparent !important;\n\t\t\t\t\twidth: 1em;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\tbackground-position: center right;\n\t\t\t\t\tbackground-size: contain;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t}\n\t\t\t\t::slotted(:disabled) {cursor: default !important;}\n\t\t\t\t:host(:hover) ::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted(input), input, ::slotted(select) {\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tborder: none !important;\n\t\t\t\t}\n\t\t\t\t.input-group {\n\t\t\t\t\tborder: 1px solid var(--input-border-color);\n\t\t\t\t}\n\t\t\t\t.input-group__suffix{\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t\t.input-group__container {\n\t\t\t\t\talign-items: center\n\t\t\t\t}\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\twidth: 14px;\n\t\t\t\t\tborder: none !important;\n\t\t\t\t\tbackground-color: transparent !important;\n\t\t\t\t\twidth: 1em;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\tbackground-position: center right;\n\t\t\t\t\tbackground-size: contain;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t}\n\t\t\t\t::slotted(:disabled) {cursor: default !important;}\n\t\t\t\t:host(:hover) ::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t"]))),
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2Invoker.prototype, "_invokerNode", {
            /**
             * @protected
             */
            get: function () {
                return /** @type {HTMLElement} */ (this.querySelector("#" + this.__invokerId));
            },
            enumerable: false,
            configurable: true
        });
        /** @private */
        Et2Invoker.prototype.__createUniqueIdForA11y = function () {
            return this.localName + "-" + Math.random().toString(36).substr(2, 10);
        };
        /**
         * @param {PropertyKey} name
         * @param {?} oldValue
         */
        Et2Invoker.prototype.requestUpdate = function (name, oldValue) {
            var _a, _b;
            _super.prototype.requestUpdate.call(this, name, oldValue);
            if (name === 'disabled' || name === 'showsFeedbackFor' || name === 'modelValue') {
                this._toggleInvokerDisabled();
            }
            if (name === '_invokerLabel' || name === '_invokerTitle') {
                this._toggleInvoker();
            }
            if (name === '_invokerAction') {
                if (oldValue)
                    (_a = this._invokerNode) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', oldValue);
                (_b = this._invokerNode) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this._invokerAction.bind(this), true);
            }
        };
        /**
         * (Un)Hide invoker, if no label or action defined
         *
         * @protected
         * */
        Et2Invoker.prototype._toggleInvoker = function () {
            if (this._invokerNode) {
                this._invokerNode.style.display = !this._invokerLabel ? 'none' : 'inline-block';
                var img = this._invokerLabel ? this.egw().image(this._invokerLabel) : null;
                if (img) {
                    this._invokerNode.style.backgroundImage = 'url(' + img + ')';
                    this._invokerNode.innerHTML = '';
                }
                else {
                    this._invokerNode.style.backgroundImage = 'none';
                    this._invokerNode.innerHTML = this._invokerLabel || '';
                }
                this._invokerNode.title = this._invokerTitle || '';
            }
        };
        /**
         * Method to check if invoker can be activated: not disabled, empty or invalid
         *
         * @protected
         * */
        Et2Invoker.prototype._toggleInvokerDisabled = function () {
            if (this._invokerNode) {
                var invokerNode = /** @type {HTMLElement & {disabled: boolean}} */ (this._invokerNode);
                invokerNode.disabled = this.disabled || !this.value || (this.input && !this.input.reportValidity());
            }
        };
        /**
         * Reimplemented to enable/disable invoker on content change
         *
         * @param _ev
         * @returns
         */
        Et2Invoker.prototype._oldChange = function (_ev) {
            this._toggleInvokerDisabled();
            return _super.prototype._oldChange.call(this, _ev);
        };
        /** @param  changedProperties */
        Et2Invoker.prototype.firstUpdated = function (changedProperties) {
            _super.prototype.firstUpdated.call(this, changedProperties);
            lit_1.render(this._invokerTemplate(), this);
            this._toggleInvokerDisabled();
            this._toggleInvoker();
        };
        /**
         * Subclassers can replace this with their custom extension invoker,
         * like `<my-button><calendar-icon></calendar-icon></my-button>`
         */
        // eslint-disable-next-line class-methods-use-this
        Et2Invoker.prototype._invokerTemplate = function () {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <button slot=\"suffix\"\n                        type=\"button\"\n                        class=\"et2-invoker__button\"\n                        @click=\"", "\"\n                        id=\"", "\"\n                        aria-label=\"", "\"\n                        title=\"", "\"\n                >\n                    ", "\n                </button>\n\t\t\t"], ["\n                <button slot=\"suffix\"\n                        type=\"button\"\n                        class=\"et2-invoker__button\"\n                        @click=\"", "\"\n                        id=\"", "\"\n                        aria-label=\"", "\"\n                        title=\"", "\"\n                >\n                    ", "\n                </button>\n\t\t\t"])), this._invokerAction, this.__invokerId, this._invokerTitle, this._invokerTitle, this._invokerLabel);
        };
        return Et2Invoker;
    }(Et2InputWidget_1.Et2InputWidget(superclass)));
    return Et2Invoker;
});
var templateObject_1, templateObject_2;
