"use strict";
/**
 * EGroupware eTemplate2 - WidgetWithSelectMixin
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
exports.Et2WidgetWithSelectMixin = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var et2_core_xml_1 = require("../et2_core_xml");
var FindSelectOptions_1 = require("./FindSelectOptions");
var repeat_js_1 = require("lit/directives/repeat.js");
exports.Et2WidgetWithSelectMixin = function (superclass) {
    /**
     * @summary Mixin for widgets where you can select from a pre-defined list of options
     *
     * Sample text
     *
     */
    var Et2WidgetWithSelect = /** @class */ (function (_super) {
        __extends(Et2WidgetWithSelect, _super);
        function Et2WidgetWithSelect() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /**
             * The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
             * value attribute will be a space-delimited list of values based on the options selected, and the value property will
             * be an array.
             *
            @property({
                noAccessor: true,
                converter: {
                    fromAttribute: (value : string) => value.split(',')
                }
            })
            value : string | string[] = "";
             */
            /**
             * Textual label for first row, eg: 'All' or 'None'.  It's value will be ''
             */
            _this.emptyLabel = "";
            /**
             * Limit size
             */
            _this.__select_options = [];
            /**
             * When we create the select option elements, it takes a while.
             * If we don't wait for them, it causes issues in SlSelect
             */
            _this._optionRenderPromise = Promise.resolve();
            /**
             * Options found in the XML when reading the template
             * @type {SelectOption[]}
             * @private
             */
            _this._xmlOptions = [];
            _this._close_on_select = false;
            _this.__select_options = [];
            return _this;
        }
        Object.defineProperty(Et2WidgetWithSelect, "translate", {
            /**
             * List of properties that get translated
             * @returns object
             */
            get: function () {
                return __assign(__assign({}, _super.translate), { emptyLabel: true });
            },
            enumerable: false,
            configurable: true
        });
        Et2WidgetWithSelect.prototype.destroy = function () {
            _super.prototype.destroy && _super.prototype.destroy.call(this);
            this.__select_options = [];
            this._xmlOptions = [];
        };
        Et2WidgetWithSelect.prototype.getUpdateComplete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                        case 1:
                            result = _a.sent();
                            return [4 /*yield*/, this._optionRenderPromise];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Et2WidgetWithSelect.prototype.updated = function (changedProperties) {
            _super.prototype.updated.call(this, changedProperties);
            // If the ID changed (or was just set) and select_options wasn't, find the new select options
            if (changedProperties.has("id") && !changedProperties.has("select_options")) {
                var options = FindSelectOptions_1.find_select_options(this, {}, this._xmlOptions);
                if (options.length) {
                    this.select_options = options;
                }
            }
        };
        Et2WidgetWithSelect.prototype.getValueAsArray = function () {
            if (Array.isArray(this.value)) {
                return this.value;
            }
            if (this.value == "null" || this.value == null || typeof this.value == "undefined" || !this.emptyLabel && this.value == "") {
                return [];
            }
            return [this.value];
        };
        /**
         * Search options for a given value, returning the first matching option
         *
         * @return SelectOption | null
         */
        Et2WidgetWithSelect.prototype.optionSearch = function (value, options, searchKey, childKey) {
            if (options === void 0) { options = null; }
            if (searchKey === void 0) { searchKey = "value"; }
            if (childKey === void 0) { childKey = "value"; }
            var result = null;
            var search = function (options, value) {
                return options.find(function (option) {
                    if (!Array.isArray(option[searchKey]) && option[searchKey] == value) {
                        result = option;
                    }
                    if (Array.isArray(option[childKey])) {
                        return search(option[childKey], value);
                    }
                    return option[searchKey] == value;
                });
            };
            search(options !== null && options !== void 0 ? options : this.select_options, value);
            return result;
        };
        Object.defineProperty(Et2WidgetWithSelect.prototype, "select_options", {
            /**
             * Select box options
             *
             * Will be found automatically based on ID and type, or can be set explicitly in the template using
             * <option/> children, or using widget.select_options = SelectOption[]
             */
            get: function () {
                return this.__select_options;
            },
            /**
             * Set the select options
             *
             * @param new_options
             */
            set: function (new_options) {
                var old_options = this.__select_options;
                this.__select_options = FindSelectOptions_1.cleanSelectOptions(new_options);
                this.requestUpdate("select_options", old_options);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set select options
         *
         * @deprecated assign to select_options
         * @param new_options
         */
        Et2WidgetWithSelect.prototype.set_select_options = function (new_options) {
            this.select_options = new_options;
        };
        Object.defineProperty(Et2WidgetWithSelect.prototype, "_optionTargetNode", {
            /**
             * Get the node where we're putting the options
             *
             * If this were a normal selectbox, this would be just the <select> tag (this._inputNode) but in a more
             * complicated widget, this could be anything.
             *
             * @overridable
             * @returns {HTMLElement}
             */
            get: function () {
                return this;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Render the "empty label", used when the selectbox does not currently have a value
         *
         * @overridable
         * @returns {TemplateResult}
         */
        Et2WidgetWithSelect.prototype._emptyLabelTemplate = function () {
            return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), this.emptyLabel);
        };
        /**
         * Render a single option
         *
         * Override this method to specify how to render each option.
         * In a normal selectbox, this would be something like:
         *```
         * <option value="${option.value}" title="${option.title}" ?selected=${option.value == this.modelValue}>
         *     ${option.label}
         * </option>`;
         * ```
         * but you can do whatever you need.  To use a different WebComponent, just use its tag instead of "option".
         * We should even be able to pass the whole SelectOption across
         * ```
         * <special-option .value=${option}></special-option>
         * ```
         *
         * @overridable
         * @param {SelectOption} option
         * @returns {TemplateResult}
         */
        Et2WidgetWithSelect.prototype._optionTemplate = function (option) {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <span>Override _optionTemplate(). ", " => ", "</span>"], ["\n                <span>Override _optionTemplate(). ", " => ", "</span>"])), option.value, option.label);
        };
        Et2WidgetWithSelect.prototype._groupTemplate = function (option) {
            if (!Array.isArray(option.value) && !Array.isArray(option.children) && !option.hasChildren) {
                return this._optionTemplate(option);
            }
            // option.value is deprecated, option.children is defined in SelectOption
            var options = Array.isArray(option.value) ? option.value : option.children;
            return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <small>", "</small>\n                ", "\n                <sl-divider></sl-divider>\n\t\t\t"], ["\n                <small>", "</small>\n                ", "\n                <sl-divider></sl-divider>\n\t\t\t"])), this.noLang ? option.label : this.egw().lang(option.label), repeat_js_1.repeat(options, function (o) { return o.value; }, this._optionTemplate.bind(this)));
        };
        /**
         * Load extra stuff from the template node.  In particular, we're looking for any <option/> tags added.
         *
         * @param {Element} _node
         */
        Et2WidgetWithSelect.prototype.loadFromXML = function (_node) {
            var _this = this;
            this._close_on_select = this.egw().preference("select_multiple_close") == "close";
            var new_options = [];
            // Read the option-tags, but if not rendered there won't be any yet so check existing options
            var options = _node.querySelectorAll("option");
            for (var i = 0; i < options.length; i++) {
                new_options.push({
                    value: et2_core_xml_1.et2_readAttrWithDefault(options[i], "value", options[i].textContent),
                    // allow options to contain multiple translated sub-strings eg: {Firstname}.{Lastname}
                    label: options[i].textContent.replace(/{([^}]+)}/g, function (str, p1) {
                        return _this.egw().lang(p1);
                    }),
                    title: et2_core_xml_1.et2_readAttrWithDefault(options[i], "title", "")
                });
            }
            this._xmlOptions = new_options;
            if (options.length == 0 && this.__select_options.length) {
                // Start with any existing options, (static options from type)
                // Use a copy since we'll probably be modifying it, and we don't want to change for any other
                // widget of the same static type
                new_options = __spreadArrays(this.__select_options);
            }
            if (this.id) {
                new_options = FindSelectOptions_1.find_select_options(this, {}, new_options);
            }
            if (new_options.length) {
                this.select_options = new_options;
            }
            var others = _node.querySelectorAll(":scope > :not(option)");
            // Load the child nodes.
            others.forEach(function (node) {
                var widgetType = node.nodeName.toLowerCase();
                if (widgetType == "#comment" || widgetType == "#text") {
                    return;
                }
                // Create the new element
                _this.createElementFromNode(node);
            });
        };
        __decorate([
            property_js_1.property({ type: String })
        ], Et2WidgetWithSelect.prototype, "emptyLabel", void 0);
        __decorate([
            property_js_1.property({ type: Number, noAccessor: true, reflect: true })
        ], Et2WidgetWithSelect.prototype, "__select_options", void 0);
        __decorate([
            property_js_1.property({ type: Object })
        ], Et2WidgetWithSelect.prototype, "select_options", null);
        return Et2WidgetWithSelect;
    }(Et2InputWidget_1.Et2InputWidget(superclass)));
    return Et2WidgetWithSelect;
};
var templateObject_1, templateObject_2, templateObject_3;
