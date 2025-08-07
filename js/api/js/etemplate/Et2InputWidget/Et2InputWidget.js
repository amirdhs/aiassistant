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
exports.Et2InputWidget = exports.validate = void 0;
var lit_1 = require("lit");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var slot_1 = require("../Et2Widget/slot");
var et2_core_common_1 = require("../et2_core_common");
var property_js_1 = require("lit/decorators/property.js");
var ManualMessage_1 = require("../Validators/ManualMessage");
var Required_1 = require("../Validators/Required");
var dedupe_mixin_1 = require("@open-wc/dedupe-mixin");
/**
 * Massively simplified validate, as compared to what ValidatorMixin gives us, since ValidatorMixin extends
 * FormControlMixin which breaks SlSelect's render()
 *
 * We take all validators for the widget, and if there's a value (or field is required) we check the value
 * with each validator.  For array values we check each element with each validator.  If the value does not
 * pass the validator, we collect the message and display feedback to the user.
 *
 * We handle validation errors from the server with ManualMessages, which always "fail".
 * If the value is empty, we only validate if the field is required.
 *
 * @param skipManual Do not run any manual validators, used during submit check.  We don't want manual validators to block submit.
 */
function validate(widget, skipManual) {
    var _a;
    if (skipManual === void 0) { skipManual = false; }
    return __awaiter(this, void 0, void 0, function () {
        var validators, fieldName, feedbackData, resultPromises, doValidate, doCheck;
        var _this = this;
        return __generator(this, function (_b) {
            if (widget.readonly || widget.disabled) {
                // Don't validate if the widget is read-only, there's nothing the user can do about it
                return [2 /*return*/, Promise.resolve()];
            }
            validators = __spreadArrays((widget.validators || []), (widget.defaultValidators || []));
            fieldName = widget.id;
            feedbackData = [];
            resultPromises = [];
            (_a = widget.querySelector("egw-validation-feedback")) === null || _a === void 0 ? void 0 : _a.remove();
            doValidate = function (validator, value) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!validator.config.fieldName) return [3 /*break*/, 2];
                                return [4 /*yield*/, validator.config.fieldName];
                            case 1:
                                fieldName = _a.sent();
                                _a.label = 2;
                            case 2: 
                            // @ts-ignore [allow-protected]
                            return [2 /*return*/, validator._getMessage({
                                    modelValue: value,
                                    formControl: widget,
                                    fieldName: fieldName,
                                }).then(function (message) {
                                    feedbackData.push({ message: message, type: validator.type, validator: validator });
                                })];
                        }
                    });
                });
            }.bind(widget);
            doCheck = function (value, validator) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    result = validator.execute(value, validator.param, { node: widget });
                    if (result === true) {
                        resultPromises.push(doValidate(validator, value));
                    }
                    else if (result !== false && typeof result.then === 'function') {
                        result.then(doValidate(validator, value));
                        resultPromises.push(result);
                    }
                    return [2 /*return*/];
                });
            }); };
            validators.map(function (validator) { return __awaiter(_this, void 0, void 0, function () {
                var values;
                return __generator(this, function (_a) {
                    values = widget.getValue();
                    if (!Array.isArray(values)) {
                        values = [values];
                    }
                    if (!values.length) {
                        values = [''];
                    } // so required validation works
                    // Run manual validation messages just once, doesn't usually matter what the value is
                    if (validator instanceof ManualMessage_1.ManualMessage) {
                        if (!skipManual) {
                            doCheck(values, validator);
                        }
                    }
                    // Only validate if field is required, or not required and has a value
                    // Don't bother to validate empty fields
                    else if (widget.required || !widget.required && widget.getValue() != '' && widget.getValue() !== null) {
                        // Validate each individual item
                        values.forEach(function (value) { return doCheck(value, validator); });
                    }
                    return [2 /*return*/];
                });
            }); });
            widget.validateComplete = Promise.all(resultPromises);
            // Wait until all validation is finished, then update UI
            widget.validateComplete.then(function () {
                // Show feedback from all failing validators
                if (feedbackData.length > 0) {
                    var feedback = document.createElement("egw-validation-feedback");
                    feedback.feedbackData = feedbackData;
                    feedback.slot = "help-text";
                    widget.append(feedback);
                    if (widget.shadowRoot.querySelector("slot[name='feedback']")) {
                        feedback.slot = "feedback";
                    }
                    else if (widget.shadowRoot.querySelector("#help-text")) {
                        // Not always visible?
                        widget.shadowRoot.querySelector("#help-text").style.display = "initial";
                    }
                    else {
                        // No place to show the validation error.  That's a widget problem, but we'll show it as message
                        widget.egw().message(feedback.textContent, "error");
                    }
                }
            });
            return [2 /*return*/, widget.validateComplete];
        });
    });
}
exports.validate = validate;
var Et2InputWidgetMixin = function (superclass) {
    var Et2InputWidgetClass = /** @class */ (function (_super) {
        __extends(Et2InputWidgetClass, _super);
        function Et2InputWidgetClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.__label = "";
            _this.isSlComponent = false;
            // Allows us to check to see if label or help-text is set.  Override to check additional slots.
            _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'label');
            _this.validators = [];
            _this.defaultValidators = [];
            _this._messagesHeldWhileFocused = [];
            _this.readonly = false;
            _this.required = false;
            _this._oldValue = _this.getValue();
            _this.isSlComponent = typeof _this.handleChange === 'function';
            _this.et2HandleFocus = _this.et2HandleFocus.bind(_this);
            _this.et2HandleBlur = _this.et2HandleBlur.bind(_this);
            _this.autocomplete = 'on';
            return _this;
        }
        Object.defineProperty(Et2InputWidgetClass, "styles", {
            /** WebComponent **/
            get: function () {
                return __spreadArrays(_super.styles, [
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t  /* Allow actually disabled inputs */\n\n\t\t\t\t  :host([disabled]) {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t  }\n\n\t\t\t\t  /* Needed so required can show through */\n\n\t\t\t\t  ::slotted(input), input {\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t  }\n\n\t\t\t\t  /* Used to allow auto-sizing on slotted inputs */\n\n\t\t\t\t  .input-group__container > .input-group__input ::slotted(.form-control) {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t  }\n\n\t\t\t\t  .form-control__help-text {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t  }\n\t\t\t\t"], ["\n\t\t\t\t  /* Allow actually disabled inputs */\n\n\t\t\t\t  :host([disabled]) {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t  }\n\n\t\t\t\t  /* Needed so required can show through */\n\n\t\t\t\t  ::slotted(input), input {\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t  }\n\n\t\t\t\t  /* Used to allow auto-sizing on slotted inputs */\n\n\t\t\t\t  .input-group__container > .input-group__input ::slotted(.form-control) {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t  }\n\n\t\t\t\t  .form-control__help-text {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t  }\n\t\t\t\t"])))
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2InputWidgetClass, "properties", {
            get: function () {
                return __assign(__assign({}, _super.properties), { 
                    /**
                     * The label of the widget
                     * Overridden from parent to use our accessors
                     */
                    label: {
                        type: String, noAccessor: true
                    }, 
                    // readonly is what is in the templates
                    // I put this in here so loadWebComponent finds it when it tries to set it from the template
                    readonly: {
                        type: Boolean,
                        reflect: true
                    }, required: {
                        type: Boolean,
                        reflect: true
                    }, onchange: {
                        type: Function
                    }, 
                    /**
                     * Have browser focus this input on load.
                     * Overrides etemplate2.focusOnFirstInput(), use only once per page
                     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
                     */
                    autofocus: {
                        type: Boolean,
                        reflect: true
                    }, autocomplete: {
                        type: String
                    }, ariaLabel: String, ariaDescription: String, helpText: String });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2InputWidgetClass, "translate", {
            /**
             * List of properties that get translated
             * Done separately to not interfere with properties - if we re-define label property,
             * labels go missing.
             * @returns object
             */
            get: function () {
                return __assign(__assign({}, _super.translate), { placeholder: true, ariaLabel: true, ariaDescription: true, helpText: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2InputWidgetClass.prototype, "needed", {
            /**
             * Compatibility for deprecated name "needed"
             *
             * @deprecated use required instead
             */
            get: function () {
                return this.required;
            },
            /**
             * Compatibility for deprecated name "needed"
             *
             * @deprecated use required instead
             * @param val
             */
            set: function (val) {
                this.required = val;
            },
            enumerable: false,
            configurable: true
        });
        Et2InputWidgetClass.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            this.classList.add("et2-input-widget");
            this._oldChange = this._oldChange.bind(this);
            this.node = this.getInputNode();
            this.updateComplete.then(function () {
                _this.addEventListener(_this.isSlComponent ? 'sl-change' : 'change', _this._oldChange);
            });
            this.addEventListener("focus", this.et2HandleFocus);
            this.addEventListener("blur", this.et2HandleBlur);
            // set aria-label and -description fallbacks (done here and not in updated to ensure reliable fallback order)
            if (!this.ariaLabel)
                this.ariaLabel = this.label || this.placeholder || this.statustext;
            if (!this.ariaDescription)
                this.ariaDescription = this.helpText || (this.statustext !== this.ariaLabel ? this.statustext : '');
            this._setAriaAttributes();
        };
        /**
         * Set aria-attributes on our input node
         *
         * @protected
         */
        Et2InputWidgetClass.prototype._setAriaAttributes = function () {
            // pass them on to input-node,  if we have one / this.getInputNode() returns one
            var input = this.getInputNode();
            if (input) {
                input.ariaLabel = this.ariaLabel;
                input.ariaDescription = this.ariaDescription;
            }
        };
        Et2InputWidgetClass.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
            this.removeEventListener(this.isSlComponent ? 'sl-change' : 'change', this._oldChange);
            this.removeEventListener("focus", this.et2HandleFocus);
            this.removeEventListener("blur", this.et2HandleBlur);
            // Hacky hack to clean up Shoelace form controller
            // https://github.com/shoelace-style/shoelace/issues/2376
            if (this.formControlController && this.formControlController.form) {
                this.formControlController.form.removeEventListener('formdata', this.formControlController.handleFormData);
                this.formControlController.form.removeEventListener('submit', this.formControlController.handleFormSubmit);
                this.formControlController.form.removeEventListener('reset', this.formControlController.handleFormReset);
            }
        };
        Et2InputWidgetClass.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.onchange = null;
            this.change = null;
        };
        /**
         * A property has changed, and we want to make adjustments to other things
         * based on that
         *
         * @param changedProperties
         */
        Et2InputWidgetClass.prototype.updated = function (changedProperties) {
            _super.prototype.updated.call(this, changedProperties);
            // required changed, add / remove validator
            if (changedProperties.has('required')) {
                // Remove all existing Required validators (avoids duplicates)
                this.validators = (this.validators || []).filter(function (validator) { return !(validator instanceof Required_1.Required); });
                if (this.required) {
                    this.validators.push(new Required_1.Required());
                }
            }
            if (changedProperties.has("value")) {
                // Base off this.value, not this.getValue(), to ignore readonly
                this.classList.toggle("hasValue", !(this.value == null || this.value == ""));
            }
            // pass aria-attributes to our input node
            if (changedProperties.has('ariaLabel') || changedProperties.has('ariaDescription')) {
                this._setAriaAttributes();
            }
        };
        /**
         * Change handler calling custom handler set via onchange attribute
         *
         * @param _ev
         * @returns
         */
        Et2InputWidgetClass.prototype._oldChange = function (_ev) {
            if (typeof this.onchange == 'function' && (
            // If we have an instanceManager, make sure it's ready.  Otherwise, we ignore the event
            !this.getInstanceManager() || this.getInstanceManager().isReady)) {
                // Make sure function gets a reference to the widget, splice it in as 2. argument if not
                var args = Array.prototype.slice.call(arguments);
                if (args.indexOf(this) == -1) {
                    args.splice(1, 0, this);
                }
                return this.onchange.apply(this, args);
            }
            return true;
        };
        /**
         * When input receives focus, clear any validation errors.
         *
         * If the value is the same on blur, we'll put them back
         * The ones from the server (ManualMessage) can interfere with submitting.
         *
         * Named et2HandleFocus to avoid overwriting handleFocus() in Shoelace components
         *
         * @param {FocusEvent} _ev
         */
        Et2InputWidgetClass.prototype.et2HandleFocus = function (_ev) {
            var _this = this;
            if (this._messagesHeldWhileFocused.length > 0) {
                return;
            }
            // Collect any ManualMessages
            this._messagesHeldWhileFocused = (this.validators || []).filter(function (validator) { return (validator instanceof ManualMessage_1.ManualMessage); });
            // Remove ManualMessages from validators list
            for (var i = 0; i < this.validators.length; i++) {
                if (this._messagesHeldWhileFocused.indexOf(this.validators[i]) != -1) {
                    this.validators.splice(i, 1);
                }
            }
            this.updateComplete.then(function () {
                // Remove all messages.  Manual will be explicitly replaced, other validators will be re-run on blur.
                _this.querySelectorAll("egw-validation-feedback").forEach(function (e) { return e.remove(); });
            });
        };
        /**
         * If the value is unchanged, put any held validation messages back
         *
         * Named et2HandleBlur to avoid overwriting handleBlur() in Shoelace components
         *
         * @param {FocusEvent} _ev
         */
        Et2InputWidgetClass.prototype.et2HandleBlur = function (_ev) {
            var _this = this;
            if (this._messagesHeldWhileFocused.length > 0 && this.getValue() == this._oldValue) {
                this.validators = this.validators.concat(this._messagesHeldWhileFocused);
                this._messagesHeldWhileFocused = [];
            }
            this.updateComplete.then(function () {
                _this.validate();
            });
        };
        Et2InputWidgetClass.prototype.set_value = function (new_value) {
            this.value = new_value;
            // Save this so we can compare against any user changes
            this._oldValue = this.getValue();
            if (typeof this._callParser == "function") {
                this.modelValue = this._callParser(new_value);
            }
        };
        Et2InputWidgetClass.prototype.get_value = function () {
            return this.getValue();
        };
        Et2InputWidgetClass.prototype.set_readonly = function (new_value) {
            this.readonly = new_value;
        };
        Object.defineProperty(Et2InputWidgetClass.prototype, "readonly", {
            get: function () {
                return this.__readonly;
            },
            // Deal with Lion readOnly vs etemplate readonly
            set: function (new_value) {
                this.__readonly = _super.prototype.__readOnly = new_value;
                this.requestUpdate("readonly");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2InputWidgetClass.prototype, "readOnly", {
            /**
             *  Lion mapping
             * @deprecated
             */
            get: function () {
                return this.readonly;
            },
            /**
             * Was from early days (Lion)
             * @deprecated
             * @param {boolean} new_value
             */
            set: function (new_value) {
                this.readonly = new_value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param boolean submit_value true: call by etemplate2.(getValues|submit|postSubmit)()
         */
        Et2InputWidgetClass.prototype.getValue = function (submit_value) {
            return this.readonly || this.disabled ? null : (
            // Give a clone of objects or receiver might use the reference
            this.value && typeof this.value == "object" ? (typeof this.value.length == "undefined" ? __assign({}, this.value) : __spreadArrays(this.value)) : this.value);
        };
        Object.defineProperty(Et2InputWidgetClass.prototype, "label", {
            get: function () {
                return this.__label;
            },
            /**
             * The label of the widget
             * Legacy support for labels with %s that get wrapped around the widget
             *
             * Not the best way go with webComponents - shouldn't modify their DOM like this
             *
             * @param new_label
             */
            set: function (new_label) {
                var _this = this;
                if (!new_label || !new_label.includes("%s")) {
                    _super.prototype.set_label.call(this, new_label);
                    return;
                }
                this.__label = new_label;
                var _a = et2_core_common_1.et2_csvSplit(new_label, 2, "%s"), pre = _a[0], post = _a[1];
                this.label = pre;
                if ((post === null || post === void 0 ? void 0 : post.trim().length) > 0) {
                    this.__label = pre;
                    this.updateComplete.then(function () {
                        var _a;
                        var label = document.createElement("et2-description");
                        label.innerText = post;
                        // Add into shadowDOM (may go missing, in which case we need a different strategy)
                        (_a = _this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".form-control-input").after(label);
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Et2InputWidgetClass.prototype.isDirty = function () {
            // Readonly can't be dirty, it can't change
            if (this.readonly) {
                return false;
            }
            var value = this.getValue();
            if (typeof value !== typeof this._oldValue) {
                return true;
            }
            if (this._oldValue === value) {
                return false;
            }
            switch (typeof this._oldValue) {
                case "object":
                    if (Array.isArray(this._oldValue) &&
                        this._oldValue.length !== value.length) {
                        return true;
                    }
                    for (var key in this._oldValue) {
                        if (this._oldValue[key] !== value[key]) {
                            return true;
                        }
                    }
                    return false;
                default:
                    return this._oldValue != value;
            }
        };
        Et2InputWidgetClass.prototype.resetDirty = function () {
            this._oldValue = this.getValue();
        };
        /**
         * Used by etemplate2 to determine if we can submit or not
         *
         * @param messages
         * @returns {boolean}
         */
        Et2InputWidgetClass.prototype.isValid = function (messages) {
            var ok = true;
            // Check for required
            if (this.required && !this.readonly && !this.disabled &&
                (this.getValue() == null || this.getValue().valueOf() == '')) {
                messages.push(this.egw().lang('Field must not be empty !!!'));
                ok = false;
            }
            return ok;
        };
        /**
         * Get input to e.g. set aria-attributes
         */
        Et2InputWidgetClass.prototype.getInputNode = function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        };
        Et2InputWidgetClass.prototype.focus = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var tab;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            tab = this.closest('et2-tab-panel');
                            if (!(tab && tab.name)) return [3 /*break*/, 2];
                            tab.parentElement.show(tab.name);
                            return [4 /*yield*/, tab.parentElement.updateComplete];
                        case 1:
                            _b.sent();
                            _b.label = 2;
                        case 2:
                            this.scrollIntoViewIfNeeded && this.scrollIntoViewIfNeeded();
                            _super.prototype.focus && _super.prototype.focus.call(this);
                            (_a = this.getInputNode()) === null || _a === void 0 ? void 0 : _a.focus();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Et2InputWidgetClass.prototype.transformAttributes = function (attrs) {
            _super.prototype.transformAttributes.call(this, attrs);
            // Set attributes for the form / autofill.  It's the individual widget's
            // responsibility to do something appropriate with these properties.
            if (this.autocomplete == "on" && window.customElements.get(this.localName).getPropertyOptions("name") != "undefined" &&
                this.getArrayMgr("content") !== null) {
                this.name = this.getArrayMgr("content").explodeKey(this.id).pop();
            }
            // Check whether an validation error entry exists
            if (this.id && this.getArrayMgr("validation_errors")) {
                var val = this.getArrayMgr("validation_errors").getEntry(this.id);
                if (val) {
                    this.set_validation_error(val);
                }
            }
        };
        /**
         * Massively simplified validate, as compared to what ValidatorMixin gives us, since ValidatorMixin extends
         * FormControlMixin which breaks SlSelect's render()
         *
         * We take all validators for the widget, and if there's a value (or field is required) we check the value
         * with each validator.  For array values we check each element with each validator.  If the value does not
         * pass the validator, we collect the message and display feedback to the user.
         *
         * We handle validation errors from the server with ManualMessages, which always "fail".
         * If the value is empty, we only validate if the field is required.
         *
         * @param skipManual Do not run any manual validators, used during submit check.  We don't want manual validators to block submit.
         */
        Et2InputWidgetClass.prototype.validate = function (skipManual) {
            if (skipManual === void 0) { skipManual = false; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, validate(this, skipManual).then(function () { return _this.requestUpdate(); })];
                });
            });
        };
        Et2InputWidgetClass.prototype.set_validation_error = function (err) {
            /* Shoelace uses constraint validation API
            https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api

            if(err === false && this.setCustomValidity)
            {
                // Remove custom validity
                this.setCustomValidity('');
                return;
            }
            this.setCustomValidity(err);

            // must call reportValidity() or nothing will happen
            this.reportValidity();

             */
            if (err === false) {
                // Remove all Manual validators
                this.validators = (this.validators || []).filter(function (validator) { return !(validator instanceof ManualMessage_1.ManualMessage); });
                return;
            }
            // Need to change interaction state so messages show up
            // submitted is a little heavy-handed, especially on first load, but it works
            this.submitted = true;
            // Add validator
            this.validators.push(new ManualMessage_1.ManualMessage(err));
            // Force a validate - not needed normally, but if you call set_validation_error() manually,
            // it won't show up without validate()
            this.validate();
        };
        Object.defineProperty(Et2InputWidgetClass.prototype, "hasFeedbackFor", {
            /**
             * Get a list of feedback types
             *
             * @returns {string[]}
             */
            get: function () {
                var _a;
                var feedback = ((_a = (this.querySelector("egw-validation-feedback"))) === null || _a === void 0 ? void 0 : _a.feedbackData) || [];
                return feedback.map(function (f) { return f.type; });
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Called whenever the template gets submitted. We return false if the widget
         * is not valid, which cancels the submission.
         *
         * @param _values contains the values which will be sent to the server.
         * 	Listeners may change these values before they get submitted.
         */
        Et2InputWidgetClass.prototype.submit = function (_values) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.submitted = true;
                            if (!this.validate) return [3 /*break*/, 2];
                            // Force update now
                            this.validate(true);
                            return [4 /*yield*/, this.validateComplete];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, (this.hasFeedbackFor || []).indexOf("error") == -1];
                        case 2: return [2 /*return*/, true];
                    }
                });
            });
        };
        /**
         * Common sub-template to add a label.
         * This goes inside the form control wrapper div, before and at the same depth as the input controls.
         *
         *
         * @returns {TemplateResult} Either a TemplateResult or nothing (the object).  Check for nothing to set
         *    'form-control--has-label' class on the wrapper div.
         * @protected
         */
        Et2InputWidgetClass.prototype._labelTemplate = function () {
            var _a;
            var hasLabelSlot = (_a = this.hasSlotController) === null || _a === void 0 ? void 0 : _a.test('label');
            var hasLabel = this.label ? true : !!hasLabelSlot;
            return hasLabel ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n\t\t\t"], ["\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n\t\t\t"])), hasLabel ? 'false' : 'true', typeof this.handleLabelClick == "function" ? this.handleLabelClick : lit_1.nothing, this.label) : lit_1.nothing;
        };
        Et2InputWidgetClass.prototype._helpTextTemplate = function () {
            var _a;
            var hasHelpTextSlot = (_a = this.hasSlotController) === null || _a === void 0 ? void 0 : _a.test('help-text');
            var hasHelpText = this.helpText ? true : !!hasHelpTextSlot || this.hasFeedbackFor.length > 0;
            return hasHelpText ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    ", "\n                    <slot name=\"help-text\"></slot>\n                </div>"], ["\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    ", "\n                    <slot name=\"help-text\"></slot>\n                </div>"])), hasHelpText ? 'false' : 'true', this.helpText) : lit_1.nothing;
        };
        __decorate([
            property_js_1.property()
        ], Et2InputWidgetClass.prototype, "label", null);
        return Et2InputWidgetClass;
    }(Et2Widget_1.Et2Widget(superclass)));
    return Et2InputWidgetClass;
};
exports.Et2InputWidget = dedupe_mixin_1.dedupeMixin(Et2InputWidgetMixin);
var templateObject_1, templateObject_2, templateObject_3;
