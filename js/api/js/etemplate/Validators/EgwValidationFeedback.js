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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgwValidationFeedback = void 0;
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var lit_1 = require("lit");
/**
 * @desc Takes care of accessible rendering of error messages
 * Should be used in conjunction with FormControl having ValidateMixin applied
 *
 * Based on Lion
 */
var EgwValidationFeedback = /** @class */ (function (_super) {
    __extends(EgwValidationFeedback, _super);
    function EgwValidationFeedback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.feedbackData = [];
        return _this;
    }
    /**
     * @overridable
     * @param {Object} opts
     * @param {string | Node | TemplateResult } opts.message message or feedback node or TemplateResult
     * @param {string} [opts.type]
     * @param {Validator} [opts.validator]
     * @protected
     */
    // eslint-disable-next-line class-methods-use-this
    EgwValidationFeedback.prototype._messageTemplate = function (_a) {
        var message = _a.message;
        return message;
    };
    /**
     * @param  changedProperties
     */
    EgwValidationFeedback.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (this.feedbackData && this.feedbackData[0]) {
            this.setAttribute('type', this.feedbackData[0].type);
            this.currentType = this.feedbackData[0].type;
            window.clearTimeout(this.removeMessage);
            // TODO: this logic should be in ValidateMixin, so that [show-feedback-for] is in sync,
            // plus duration should be configurable
            if (this.currentType === 'success') {
                this.removeMessage = window.setTimeout(function () {
                    _this.removeAttribute('type');
                    /** @type {messageMap[]} */
                    _this.feedbackData = [];
                }, 3000);
            }
        }
        else if (this.currentType !== 'success') {
            this.removeAttribute('type');
        }
    };
    EgwValidationFeedback.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            ", "\n\t\t"], ["\n            ",
            "\n\t\t"])), this.feedbackData &&
            this.feedbackData.map(function (_a) {
                var message = _a.message, type = _a.type, validator = _a.validator;
                return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                        ", "\n                    "], ["\n                        ", "\n                    "])), _this._messageTemplate({ message: message, type: type, validator: validator }));
            }));
    };
    __decorate([
        property_js_1.property({ type: Array, attribute: false })
    ], EgwValidationFeedback.prototype, "feedbackData", void 0);
    EgwValidationFeedback = __decorate([
        custom_element_js_1.customElement("egw-validation-feedback")
    ], EgwValidationFeedback);
    return EgwValidationFeedback;
}(lit_1.LitElement));
exports.EgwValidationFeedback = EgwValidationFeedback;
var templateObject_1, templateObject_2;
