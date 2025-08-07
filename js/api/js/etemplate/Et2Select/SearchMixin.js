"use strict";
/**
 * EGroupware eTemplate2 - SearchMixin
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
exports.Et2WithSearchMixin = void 0;
var lit_1 = require("lit");
var FindSelectOptions_1 = require("./FindSelectOptions");
var Et2Tag_1 = require("./Tag/Et2Tag");
var StaticOptions_1 = require("./StaticOptions");
var dedupe_mixin_1 = require("@open-wc/dedupe-mixin");
var until_js_1 = require("lit/directives/until.js");
var event_1 = require("../Et2Widget/event");
var class_map_js_1 = require("lit/directives/class-map.js");
var property_js_1 = require("lit/decorators/property.js");
// Otherwise import gets stripped
var keep_import;
/**
 * Base class for things that do search type behaviour
 * Separated to keep things a little simpler.
 *
 * Currently I assume we're extending an Et2Select, so changes may need to be made for better abstraction
 */
exports.Et2WithSearchMixin = dedupe_mixin_1.dedupeMixin(function (superclass) {
    var Et2WidgetWithSearch = /** @class */ (function (_super) {
        __extends(Et2WidgetWithSearch, _super);
        function Et2WidgetWithSearch() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.search = false;
            _this.searchUrl = '';
            /**
             * Allow custom entries that are not in the options
             */
            _this.allowFreeEntries = false;
            /**
             * Additional search parameters that are passed to the server
             * when we query searchUrl
             */
            _this.searchOptions = { app: "addressbook" };
            /**
             * Allow editing tags by clicking on them.
             * allowFreeEntries must be true
             */
            _this.editModeEnabled = false;
            // Hold the original option data from earlier search results, since we discard on subsequent search
            _this._selected_remote = [];
            // Hold current search results, selected or otherwise
            _this._remote_options = [];
            _this._total_result_count = 0;
            _this._searchPromise = null;
            _this.search = false;
            _this.searchUrl = "";
            _this.searchOptions = { app: "addressbook" };
            _this.allowFreeEntries = false;
            _this.editModeEnabled = false;
            // Hiding the selected options from the dropdown means we can't un-select the tags
            // hidden by the max limit.  Prefer no limit.
            _this.maxOptionsVisible = -1;
            _this.validators = [];
            /**
             * Used by Subclassers to add default Validators.
             * A email input for instance, always needs the isEmail validator.
             * @example
             * ```js
             * this.defaultValidators.push(new IsDate());
             * ```
             * @type {Validator[]}
             */
            _this.defaultValidators = [];
            _this.handleOptionClick = _this.handleOptionClick.bind(_this);
            _this._handleChange = _this._handleChange.bind(_this);
            _this.handleTagEdit = _this.handleTagEdit.bind(_this);
            _this._handleAfterShow = _this._handleAfterShow.bind(_this);
            _this._handleMenuHide = _this._handleMenuHide.bind(_this);
            _this._handleSearchBlur = _this._handleSearchBlur.bind(_this);
            _this._handleClear = _this._handleClear.bind(_this);
            _this._handleDoubleClick = _this._handleDoubleClick.bind(_this);
            _this._handleSearchAbort = _this._handleSearchAbort.bind(_this);
            _this._handleSearchClear = _this._handleSearchClear.bind(_this);
            _this._handleSearchChange = _this._handleSearchChange.bind(_this);
            _this._handleSearchKeyDown = _this._handleSearchKeyDown.bind(_this);
            _this._handleSearchMouseDown = _this._handleSearchMouseDown.bind(_this);
            _this._handleEditKeyDown = _this._handleEditKeyDown.bind(_this);
            _this._handlePaste = _this._handlePaste.bind(_this);
            return _this;
        }
        Object.defineProperty(Et2WidgetWithSearch, "styles", {
            get: function () {
                return __spreadArrays((_super.styles ? (Symbol.iterator in Object(_super.styles) ? _super.styles : [_super.styles]) : []), [
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n\t\t\t\t/* Full width search textbox covers loading spinner, lift it up */\n\t\t\t\t::slotted(sl-spinner) {\n\t\t\t\t\tz-index: 2;\n\t\t\t\t}\n\n\t\t\t\t/* Show edit textbox only when editing */\n\t\t\t\t.search_input #edit {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.search_input.editing #search {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.search_input.editing #edit {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t}\n\n\n\t\t\t\t  :host([search]) sl-select[open]::part(prefix), :host([allowfreeentries]) sl-select[open]::part(prefix) {\n\t\t\t\t\torder: 9;\n\t\t\t\t\tflex: 2 1 auto;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t\t:host([search]), :host([allowfreeentries]) {\n\t\t\t\t\t\tsl-select[open]::part(display-input) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tsl-select[open]::part(clear-button) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tsl-select[open]::part(expand-icon) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t  sl-select[open][multiple]::part(tags) {\n\t\t\t\t\tflex-basis: 100%;\n\t\t\t\t  }\n\n\t\t\t\t  sl-select[open][multiple]::part(combobox) {\n\t\t\t\t\tflex-flow: wrap;\n\t\t\t\t  }\n\n\n\t\t\t\t  /* Search textbox general styling, starts hidden */\n\n\t\t\t\t  .search_input {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\t/* See also etemplate2.css, searchbox border turned off in there */\n\t\t\t\t\tborder: none;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\torder: 2;\n\t\t\t\t\tmargin-left: 0px;\n\t\t\t\t\theight: var(--sl-input-height-medium);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\t  background-color: var(--sl-color-neutral-0);\n\t\t\t\t\tz-index: var(--sl-z-index-dropdown);\n\t\t\t\t  }\n\n\t\t\t\t\t:host([search]) et2-textbox::part(base), #edit, #edit:focus-visible {\n\t\t\t\t\tborder: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t\t\toutline: none;\n\t\t\t\t  }\n\n\t\t\t\t  /* Search UI active - show textbox & stuff */\n\n\t\t\t\t  .search_input.active,\n\t\t\t\t  .search_input.editing {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t  }\n\n\t\t\t\t  /* If multiple and no value, overlap search onto widget instead of below */\n\n\t\t\t\t  :host([multiple]) .search_input.active.novalue {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t  }\n\t\t\t\t\n\t\t\t\t/* Hide options that do not match current search text */\n\n\t\t\t\t  :host([search]) sl-option.no-match {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t/* Different cursor for editable tags */\n\t\t\t\t:host([allowfreeentries]):not([readonly]) .search_tag::part(base)  {\n\t\t\t\t\tcursor: text;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t/** Readonly **/\n\t\t\t\t/* No border */\n\t\t\t\t:host([readonly]) .form-control-input {\n\t\t\t\t\tborder: none;\n\t\t\t\t}\n\t\t\t\t/* disable focus border */\n\t\t\t\t:host([readonly]) .form-control-input:focus-within {\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\t\t\t\t/* normal cursor */\n\t\t\t\t:host([readonly]) .select__control {\n\t\t\t\t\tcursor: initial;\n\t\t\t\t}\n\t\t\t\t"], ["\n\n\t\t\t\t/* Full width search textbox covers loading spinner, lift it up */\n\t\t\t\t::slotted(sl-spinner) {\n\t\t\t\t\tz-index: 2;\n\t\t\t\t}\n\n\t\t\t\t/* Show edit textbox only when editing */\n\t\t\t\t.search_input #edit {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.search_input.editing #search {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.search_input.editing #edit {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t}\n\n\n\t\t\t\t  :host([search]) sl-select[open]::part(prefix), :host([allowfreeentries]) sl-select[open]::part(prefix) {\n\t\t\t\t\torder: 9;\n\t\t\t\t\tflex: 2 1 auto;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t\t:host([search]), :host([allowfreeentries]) {\n\t\t\t\t\t\tsl-select[open]::part(display-input) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tsl-select[open]::part(clear-button) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tsl-select[open]::part(expand-icon) {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t  sl-select[open][multiple]::part(tags) {\n\t\t\t\t\tflex-basis: 100%;\n\t\t\t\t  }\n\n\t\t\t\t  sl-select[open][multiple]::part(combobox) {\n\t\t\t\t\tflex-flow: wrap;\n\t\t\t\t  }\n\n\n\t\t\t\t  /* Search textbox general styling, starts hidden */\n\n\t\t\t\t  .search_input {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\t/* See also etemplate2.css, searchbox border turned off in there */\n\t\t\t\t\tborder: none;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\torder: 2;\n\t\t\t\t\tmargin-left: 0px;\n\t\t\t\t\theight: var(--sl-input-height-medium);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\t  background-color: var(--sl-color-neutral-0);\n\t\t\t\t\tz-index: var(--sl-z-index-dropdown);\n\t\t\t\t  }\n\n\t\t\t\t\t:host([search]) et2-textbox::part(base), #edit, #edit:focus-visible {\n\t\t\t\t\tborder: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t\t\toutline: none;\n\t\t\t\t  }\n\n\t\t\t\t  /* Search UI active - show textbox & stuff */\n\n\t\t\t\t  .search_input.active,\n\t\t\t\t  .search_input.editing {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t  }\n\n\t\t\t\t  /* If multiple and no value, overlap search onto widget instead of below */\n\n\t\t\t\t  :host([multiple]) .search_input.active.novalue {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t  }\n\t\t\t\t\n\t\t\t\t/* Hide options that do not match current search text */\n\n\t\t\t\t  :host([search]) sl-option.no-match {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t/* Different cursor for editable tags */\n\t\t\t\t:host([allowfreeentries]):not([readonly]) .search_tag::part(base)  {\n\t\t\t\t\tcursor: text;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t/** Readonly **/\n\t\t\t\t/* No border */\n\t\t\t\t:host([readonly]) .form-control-input {\n\t\t\t\t\tborder: none;\n\t\t\t\t}\n\t\t\t\t/* disable focus border */\n\t\t\t\t:host([readonly]) .form-control-input:focus-within {\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\t\t\t\t/* normal cursor */\n\t\t\t\t:host([readonly]) .select__control {\n\t\t\t\t\tcursor: initial;\n\t\t\t\t}\n\t\t\t\t"])))
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Et2WidgetWithSearch.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            this.classList.toggle("search", this.searchEnabled);
            // Missing any of the required attributes?  Don't change anything.
            // If readonly, skip it
            if (!this.searchEnabled && !this.editModeEnabled && !this.allowFreeEntries || this.readonly) {
                return;
            }
            this._bindListeners();
        };
        Et2WidgetWithSearch.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
            this._searchPromise = null;
            if (this._searchTimeout) {
                window.clearTimeout(this._searchTimeout);
            }
            this._searchTimeout = null;
            this._unbindListeners();
            while (this.lastChild)
                this.lastChild.remove();
            this._selected_remote = [];
            this._remote_options = [];
        };
        Et2WidgetWithSearch.prototype.getUpdateComplete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                        case 1:
                            result = _a.sent();
                            if (!this._searchInputNode) return [3 /*break*/, 3];
                            return [4 /*yield*/, this._searchInputNode.updateComplete];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, result];
                    }
                });
            });
        };
        Et2WidgetWithSearch.prototype.willUpdate = function (changedProperties) {
            var _this = this;
            _super.prototype.willUpdate.call(this, changedProperties);
            // Turn on search if there's more than 20 options
            if (changedProperties.has("select_options") && this.select_options.length > 20) {
                this.search = true;
            }
            // If searchURL is set, turn on search
            if (changedProperties.has("searchUrl") && this.searchUrl) {
                this.search = true;
                // Decode URL, possibly again.  If set in template, it can wind up double-encoded.
                this.searchUrl = this.egw().decodePath(this.searchUrl);
            }
            if (changedProperties.has("searchOptions") && this.searchOptions) {
                try {
                    if (typeof this.searchOptions === 'string') {
                        this.searchOptions = JSON.parse(this.searchOptions);
                    }
                }
                catch (e) {
                    //Could not transform to valid object, keep the string
                }
            }
            // Add missing options if search or free entries enabled
            if (changedProperties.has("value") && this.value) {
                // Overridden to add options if allowFreeEntries=true
                if (this.allowFreeEntries && typeof this.value == "string" && !this.select_options.find(function (o) { return o.value == _this.value; })) {
                    this.createFreeEntry(this.value);
                }
                else if (this.allowFreeEntries && this.multiple) {
                    this.getValueAsArray().forEach(function (e) {
                        if (!_this.select_options.find(function (o) { return o.value == e; })) {
                            _this.createFreeEntry(e);
                        }
                    });
                }
                if (this.searchEnabled) {
                    // Check to see if value is for an option we do not have
                    var checking = [];
                    for (var _i = 0, _a = this.getValueAsArray(); _i < _a.length; _i++) {
                        var newValueElement = _a[_i];
                        if (this.optionSearch(newValueElement, null, "value", "children") ||
                            // Legacy children as value
                            this.optionSearch(newValueElement, null, "value", "value")) {
                            continue;
                        }
                        checking.push(this._missingOption(newValueElement));
                    }
                    // SlSelect removes missing options from its value
                    if (checking.length) {
                        Promise.all(checking).then(function () { _this.value = _this.value; });
                    }
                }
            }
        };
        Et2WidgetWithSearch.prototype.update = function (changedProperties) {
            var _this = this;
            var _a;
            _super.prototype.update.call(this, changedProperties);
            // Update any tags if edit mode changes
            if (changedProperties.has("editModeEnabled") || changedProperties.has("readonly")) {
                // Required because we explicitly create tags instead of doing it in render()
                this.select.shadowRoot.querySelectorAll(".select__tags > div > *").forEach(function (tag) {
                    tag.editable = _this.editModeEnabled && !_this.readonly;
                    tag.removable = !_this.readonly;
                });
                if (this.readonly) {
                    this._unbindListeners();
                }
            }
            // One of the key properties has changed, need to add the needed nodes
            if (changedProperties.has("search") || changedProperties.has("editModeEnabled") || changedProperties.has("allowFreeEntries")) {
                this._unbindListeners();
                // Missing any of the required attributes?  Now we need to take it out.
                if (!this.searchEnabled && !this.editModeEnabled && !this.allowFreeEntries || this.readonly) {
                    (_a = this.querySelector(".search_input")) === null || _a === void 0 ? void 0 : _a.remove();
                    return;
                }
                // Listeners may have been skipped from connectedCallback()
                this._bindListeners();
            }
        };
        Et2WidgetWithSearch.prototype._extraTemplate = function () {
            if (!this.searchEnabled && !this.editModeEnabled && !this.allowFreeEntries || this.readonly) {
                return lit_1.nothing;
            }
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                ", "\n                ", "\n                ", "\n\t\t\t"], ["\n                ", "\n                ", "\n                ", "\n\t\t\t"])), this._searchInputTemplate(), until_js_1.until(this._moreResultsTemplate(), lit_1.nothing), this._noResultsTemplate());
        };
        Et2WidgetWithSearch.prototype._moreResultsTemplate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this._total_result_count <= 0 || !this.select || !this._searchPromise) {
                        return [2 /*return*/, lit_1.nothing];
                    }
                    return [2 /*return*/, this._searchPromise.then(function () {
                            var _a;
                            var moreCount = _this._total_result_count - ((_a = _this.select) === null || _a === void 0 ? void 0 : _a.querySelectorAll("sl-option.match").length);
                            var more = _this.egw().lang("%1 more...", moreCount);
                            return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<span class=\"more\">", "</span>"], ["<span class=\"more\">", "</span>"])), more);
                        })];
                });
            });
        };
        Et2WidgetWithSearch.prototype._searchInputTemplate = function () {
            var _a;
            var edit = lit_1.nothing;
            if (this.editModeEnabled) {
                edit = lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<input id=\"edit\" type=\"text\" part=\"input\"\n                                   autocomplete=\"do-not-autocomplete-", "\"\n                                   style=\"width:100%\"\n                                   aria-label=\"", "\"\n                                   @keydown=", "\n                                   @click=", "\n                                   @blur=", "\n                />"], ["<input id=\"edit\" type=\"text\" part=\"input\"\n                                   autocomplete=\"do-not-autocomplete-", "\"\n                                   style=\"width:100%\"\n                                   aria-label=\"", "\"\n                                   @keydown=", "\n                                   @click=", "\n                                   @blur=", "\n                />"])), Date.now().toString(36), this.egw().lang('Edit tag'), this._handleEditKeyDown, function (e) { return e.stopPropagation(); }, this.stopEdit.bind(this));
            }
            return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                <div class=", " slot=\"prefix\">\n                <et2-textbox id=\"search\" type=\"text\" part=\"input\"\n                             aria-label=\"", "\"\n                             exportparts=\"base:search__base\"\n                             clearable\n                             autocomplete=\"do-not-autocomplete-", "\"\n                             tabindex=\"-1\"\n                             placeholder=\"", "\"\n                             style=\"flex: 1 1 auto;\"\n                             @mousedown=", "\n                             @keydown=", "\n                             @blur=", "\n                             @sl-clear=", "\n                             @sl-change=", "\n                ></et2-textbox>\n                ", "\n                </div>\n\t\t\t"], ["\n                <div class=",
                " slot=\"prefix\">\n                <et2-textbox id=\"search\" type=\"text\" part=\"input\"\n                             aria-label=\"", "\"\n                             exportparts=\"base:search__base\"\n                             clearable\n                             autocomplete=\"do-not-autocomplete-", "\"\n                             tabindex=\"-1\"\n                             placeholder=\"", "\"\n                             style=\"flex: 1 1 auto;\"\n                             @mousedown=", "\n                             @keydown=", "\n                             @blur=", "\n                             @sl-clear=", "\n                             @sl-change=", "\n                ></et2-textbox>\n                ", "\n                </div>\n\t\t\t"])), class_map_js_1.classMap({
                search_input: true,
                novalue: (((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) == 0)
            }), this.egw().lang("search"), Date.now().toString(36), this.egw().lang("search"), this._handleSearchMouseDown, this._handleSearchKeyDown, this._handleSearchBlur, this._handleSearchClear, this._handleSearchChange, edit);
        };
        Et2WidgetWithSearch.prototype._noResultsTemplate = function () {
            var _this = this;
            var _a;
            if (this._total_result_count !== 0 || !((_a = this._searchInputNode) === null || _a === void 0 ? void 0 : _a.value)) {
                return lit_1.nothing;
            }
            var noSuggestions = lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                <div class=\"no-results\">", "</div>"], ["\n                <div class=\"no-results\">", "</div>"])), this.egw().lang("no suggestions"));
            if (!this._searchPromise) {
                return noSuggestions;
            }
            var noResults = this._searchPromise.then(function () {
                return _this._total_result_count == 0 ?
                    noSuggestions :
                    lit_1.nothing;
            });
            return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["", ""], ["",
                ""])), until_js_1.until(noResults, lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    <sl-spinner></sl-spinner>"], ["\n                    <sl-spinner></sl-spinner>"])))));
        };
        Object.defineProperty(Et2WidgetWithSearch.prototype, "searchEnabled", {
            /**
             * Do we have the needed properties set, so we can actually do searching
             *
             * @returns {boolean}
             */
            get: function () {
                return !this.readonly && (this.search || this.searchUrl.length > 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "_searchInputNode", {
            get: function () {
                var _a;
                return (_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.querySelector("#search");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "_editInputNode", {
            get: function () {
                var _a;
                return (_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.querySelector("input#edit");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "_activeControls", {
            get: function () {
                var _a;
                return ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".search_input")) ||
                    this.querySelector(".search_input");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "optionTag", {
            get: function () {
                return 'sl-option';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "localItems", {
            /**
             * Only local options, excludes server options
             *
             * @protected
             */
            get: function () {
                return this.select.querySelectorAll(this.optionTag + ":not(.remote)");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "remoteItems", {
            /**
             * Only remote options from search results
             * @returns {NodeList}
             * @protected
             */
            get: function () {
                var _a, _b;
                return (_b = (_a = this.select) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.optionTag + ".remote")) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "freeEntries", {
            /**
             * Only free entries
             * @returns {NodeList}
             * @protected
             */
            get: function () {
                var _a, _b;
                return (_b = (_a = this.select) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.optionTag + ".freeEntry")) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "select_options", {
            get: function () {
                var _a, _b, _c;
                var options = [];
                // Any provided options
                options = options.concat((_a = this.__select_options) !== null && _a !== void 0 ? _a : []);
                // Any kept remote options
                options = options.concat((_b = this._selected_remote) !== null && _b !== void 0 ? _b : []);
                // Current search results
                options = options.concat((_c = this._remote_options) !== null && _c !== void 0 ? _c : []);
                if (this.allowFreeEntries) {
                    this.freeEntries.forEach(function (item) {
                        if (!options.some(function (i) { return i.value == item.value.replaceAll("___", " "); })) {
                            options.push({ value: item.value, label: item.textContent, class: item.classList.toString() });
                        }
                    });
                }
                return options;
            },
            set: function (options) {
                var _a;
                _super.prototype.select_options = options;
                var _loop_1 = function (remote_index) {
                    var remote = this_1._selected_remote[remote_index];
                    if (options.findIndex(function (o) { return o.value == remote.value; }) != -1) {
                        this_1._selected_remote.splice(remote_index, 1);
                        (_a = this_1.querySelector('[value="' + remote.value + '"]')) === null || _a === void 0 ? void 0 : _a.classList.remove("remote");
                    }
                };
                var this_1 = this;
                // Remove any selected remote, they're real options now
                for (var remote_index = this._selected_remote.length - 1; remote_index >= 0; remote_index--) {
                    _loop_1(remote_index);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetWithSearch.prototype, "value", {
            get: function () {
                return _super.prototype.value;
            },
            set: function (new_value) {
                _super.prototype.value = new_value;
                if (!new_value || !this.allowFreeEntries && !this.searchUrl) {
                    return;
                }
                // If widget is currently open, we may need to re-calculate search / dropdown positioning
                if (this.isOpen) {
                    this._handleMenuShow();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Some [part of a] value is missing from the available options, but should be there, so find and add it.
         *
         * This is used when not all options are sent to the client (search, link list).  Ideally we want to send
         * the options for the current value, but sometimes this is not the best option so here we search or create
         * the option as needed.  These are not free entries, but need to match some list somewhere.
         *
         * @param {string} newValueElement
         * @protected
         */
        Et2WidgetWithSearch.prototype._missingOption = function (newValueElement) {
            var _this = this;
            // Given a value we need to search for - this will add in all matches, including the one needed
            return this.remoteSearch(newValueElement, this.searchOptions).then(function (result) {
                var _a;
                // Server doesn't know either.  Remove it.
                if (!result || !result.length) {
                    if (Array.isArray(_this.value)) {
                        _this.value.splice(_this.value.indexOf(newValueElement), 1);
                    }
                    else {
                        _this.value = "";
                    }
                }
                // Re-set / update value since SlSelect probably removed it by now due to missing option
                if (typeof _this.select != "undefined") {
                    if (_this.id.includes("type")) {
                        debugger;
                    }
                    _this.select.value = (_a = _this.shoelaceValue) !== null && _a !== void 0 ? _a : _this.value;
                    _this.select.requestUpdate("value");
                }
                _this.requestUpdate("value");
            });
        };
        Et2WidgetWithSearch.prototype.fix_bad_value = function () {
            if (!this.allowFreeEntries && !this.searchEnabled) {
                // Let regular select deal with it
                return false;
            }
            var valueArray = Array.isArray(this.value) ? this.value : (!this.value ? [] : this.value.toString().split(','));
            // Check any already found options
            if (Object.values(this.getAllOptions()).filter(function (option) { return valueArray.find(function (val) { return val == option.value; }); }).length === 0) {
                return false;
            }
            return true;
            // TODO? Should we check the server, or just be OK with it?  Passing the "current" value in sel_options makes sure the value is there
        };
        Et2WidgetWithSearch.prototype._bindListeners = function () {
            var _this = this;
            this.addEventListener("sl-clear", this._handleClear);
            this.addEventListener("sl-show", this._handleMenuShow);
            this.addEventListener("sl-after-show", this._handleAfterShow);
            this.addEventListener("sl-hide", this._handleMenuHide);
            // Need our own change to catch the change event from search input
            this.addEventListener("change", this._handleChange);
            if (this.allowFreeEntries) {
                this.addEventListener("paste", this._handlePaste);
            }
            this.updateComplete.then(function () {
                var _a, _b;
                // Search messes up event order.  Since it throws its own bubbling change event,
                // selecting an option fires 2 change events - 1 before the widget is finished adjusting, losing the value
                // We catch all change events, then call this._oldChange only when value changes
                _this.removeEventListener("change", _this._oldChange);
                (_a = _this._searchInputNode) === null || _a === void 0 ? void 0 : _a.removeEventListener("change", _this._searchInputNode.handleChange);
                (_b = _this._searchInputNode) === null || _b === void 0 ? void 0 : _b.addEventListener("change", _this._handleSearchChange);
                //		this.dropdown.querySelector('.select__label').addEventListener("change", this.handleTagEdit);
            });
        };
        Et2WidgetWithSearch.prototype._unbindListeners = function () {
            var _a;
            this.removeEventListener("sl-select", this._handleSelect);
            this.removeEventListener("sl-show", this._handleMenuShow);
            this.removeEventListener("sl-after-show", this._handleAfterShow);
            this.removeEventListener("sl-hide", this._handleMenuHide);
            this.removeEventListener("sl-clear", this._handleClear);
            this.removeEventListener("change", this._handleChange);
            this.removeEventListener("paste", this._handlePaste);
            (_a = this._searchInputNode) === null || _a === void 0 ? void 0 : _a.removeEventListener("change", this._handleSearchChange);
        };
        Et2WidgetWithSearch.prototype._handleMenuShow = function () {
            var _a, _b;
            if (this.readonly) {
                return;
            }
            this.setAttribute("open", "");
            // Move search (& menu) if there's no value
            (_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.classList.toggle("novalue", this.multiple && this.value == '' || !this.multiple);
            // Reset for parent calculations, will be adjusted after if needed
            //this.dropdown.setAttribute("distance", 0);
            if (this.searchEnabled || this.allowFreeEntries) {
                (_b = this._activeControls) === null || _b === void 0 ? void 0 : _b.classList.add("active");
                // Hide edit explicitly since it's so hard via CSS
                if (this._editInputNode) {
                    this._editInputNode.style.display = "none";
                }
            }
            if (this.editModeEnabled && this.allowFreeEntries && !this.multiple && this.value) {
                this.startEdit();
                this._editInputNode.select();
                // Hide search explicitly since it's so hard via CSS
                this._searchInputNode.style.display = "none";
            }
        };
        /**
         * Focus the search input after showing the dropdown so user can just type.
         *
         * Timeout is needed for some systems to properly focus
         */
        Et2WidgetWithSearch.prototype._handleAfterShow = function () {
            var _this = this;
            if (this.searchEnabled || this.allowFreeEntries) {
                window.setTimeout(function () {
                    var _a, _b;
                    (_a = _this._searchInputNode) === null || _a === void 0 ? void 0 : _a.focus();
                    (_b = _this._searchInputNode) === null || _b === void 0 ? void 0 : _b.select();
                }, 100);
            }
        };
        Et2WidgetWithSearch.prototype.focus = function () {
            var _this = this;
            this.show().then(function () {
                var _a;
                (_a = _this._searchInputNode) === null || _a === void 0 ? void 0 : _a.focus();
            });
        };
        Et2WidgetWithSearch.prototype._handleMenuHide = function () {
            var _this = this;
            var _a;
            if (this.readonly) {
                return;
            }
            this.removeAttribute("open");
            event_1.waitForEvent(this, "sl-after-hide").then(function () { return _this.clearSearch(); });
            // Reset display
            if (this._searchInputNode) {
                this._searchInputNode.style.display = "";
            }
            if (this._editInputNode) {
                this._editInputNode.style.display = "";
            }
            (_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.classList.remove("active", "editing");
        };
        Et2WidgetWithSearch.prototype._triggerChange = function (event) {
            // Don't want searchbox events to trigger change event
            if (event.target == this._searchInputNode) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return false;
            }
            // Find and keep any selected remote entries
            // Doing it here catches keypress changes too
            this._keepSelectedRemote();
            return true;
        };
        Et2WidgetWithSearch.prototype._handleChange = function (event) {
            if (event.target == this._searchInputNode) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return false;
            }
            return this._oldChange(event);
        };
        Et2WidgetWithSearch.prototype._handleDoubleClick = function (event) {
            // No edit (shouldn't happen...)
            if (!this.editModeEnabled) {
                return;
            }
            // Find the tag
            var path = event.composedPath();
            var tag = path.find(function (el) { return el instanceof Et2Tag_1.Et2Tag; });
            this.hide();
            this.updateComplete.then(function () {
                tag.startEdit(event);
            });
        };
        Et2WidgetWithSearch.prototype._keepSelectedRemote = function () {
            var _this = this;
            this.select.querySelectorAll("[aria-selected=true].remote").forEach(function (node) {
                var value = node.value.replaceAll("___", " ");
                if (!node.selected || _this._selected_remote.some(function (o) { return o.value == value; })) {
                    return;
                }
                var filter = function (options) {
                    for (var i = options.length - 1; i >= 0; i--) {
                        if (Array.isArray(options[i].value)) {
                            filter(options[i].value);
                        }
                        else if (options[i].value == value) {
                            _this._selected_remote.push(options[i]);
                            options.splice(i, 1);
                        }
                    }
                };
                filter(_this._remote_options);
            });
        };
        /**
         * An option was selected
         */
        Et2WidgetWithSearch.prototype.handleOptionClick = function (event) {
            var _this = this;
            // Only interested in option clicks, but handler is bound higher
            if (event.target.tagName !== "SL-OPTION") {
                return;
            }
            if (typeof _super.prototype.handleOptionClick == "function")
                _super.prototype.handleOptionClick.call(this, event);
            this.updateComplete.then(function () {
                // If they just chose one from the list, re-focus the search
                if (_this.multiple && _this.searchEnabled) {
                    _this._searchInputNode.focus();
                    _this._searchInputNode.select();
                }
                else if (!_this.multiple && _this.searchEnabled) {
                    // Stop all the search stuff when they select an option
                    // this shows all non-matching options again
                    _this._handleSearchAbort(event);
                }
            });
        };
        /**
         * Value was cleared
         */
        Et2WidgetWithSearch.prototype._handleClear = function (e) {
            var _this = this;
            // Only keep remote options that are still used
            this._selected_remote = this._selected_remote.filter(function (option) { var _a; return ((_a = _this.value) === null || _a === void 0 ? void 0 : _a.indexOf(option.value)) !== -1; });
            if (!this.multiple && this.searchEnabled) {
                this._handleSearchAbort(e);
            }
            // Focus the widget again, ready for a search
            this.updateComplete.then(function () {
                _this.dropdown.open = true;
            });
        };
        /**
         * Handle blur from search field
         *
         * Either the user changed fields, or selected an option.  For selecting don't interfere, but for
         * changing fields we need to make sure the menu is hidden.
         *
         * @param event
         */
        Et2WidgetWithSearch.prototype._handleSearchBlur = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    event.stopPropagation();
                    clearTimeout(this._searchTimeout);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle keypresses inside the search input
         * @param {KeyboardEvent} event
         * @protected
         */
        Et2WidgetWithSearch.prototype._handleSearchKeyDown = function (event) {
            var _this = this;
            var _a;
            clearTimeout(this._searchTimeout);
            (_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            // Pass off some keys to select
            if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                // Strip out hidden non-matching selected & disabled items so key navigation works
                // TODO
                return;
            }
            else if (event.key == "Tab" && !this._searchInputNode.value) {
                // Mess with tabindexes to allow focus to easily go to next control
                var input_1 = this.select.shadowRoot.querySelector('[tabindex="0"]');
                input_1.setAttribute("tabindex", "-1");
                this.updateComplete.then(function () {
                    // Set it back so we can get focus again later
                    input_1.setAttribute("tabindex", "0");
                });
                // Allow to propagate
                return;
            }
            event.stopPropagation();
            // Don't allow event to bubble or it will interact with select
            event.stopImmediatePropagation();
            if (Et2WidgetWithSearch.TAG_BREAK.indexOf(event.key) !== -1 && this.allowFreeEntries && this.createFreeEntry(this._searchInputNode.value)) {
                this._searchInputNode.value = "";
                if (!this.multiple) {
                    this.stopEdit(false);
                    // Mess with tabindexes to allow focus to easily go to next control
                    var input_2 = this.select.shadowRoot.querySelector('[tabindex="0"]');
                    input_2.setAttribute("tabindex", "-1");
                    this.updateComplete.then(function () {
                        // Set it back so we can get focus again later
                        input_2.setAttribute("tabindex", "0");
                    });
                    return;
                }
                event.preventDefault();
                this.updateComplete.then(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // update sizing / position before getting ready for another one
                        if (this.multiple) {
                            //	await this.show();
                            this._searchInputNode.focus();
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else if (event.key == "Enter") {
                event.preventDefault();
                this.startSearch();
                return;
            }
            else if (event.key == "Escape") {
                this._handleSearchAbort(event);
                this.hide();
                return;
            }
            // Start the search automatically if they have enough letters
            // -1 because we're in keyDown handler, and value is from _before_ this key was pressed
            if (this._searchInputNode.value.length >= Et2WidgetWithSearch.MIN_CHARS - 1) {
                this._searchTimeout = window.setTimeout(function () { _this.startSearch(); }, Et2WidgetWithSearch.SEARCH_TIMEOUT);
            }
        };
        /**
         * Combobox listens for mousedown, which interferes with search clear button.
         * Here we block it from bubbling
         * @param {MouseEvent} event
         * @protected
         */
        Et2WidgetWithSearch.prototype._handleSearchMouseDown = function (event) {
            event.stopPropagation();
        };
        Et2WidgetWithSearch.prototype._handleEditKeyDown = function (event) {
            // Stop propagation, or parent key handler will add again
            event.stopImmediatePropagation();
            if (Et2WidgetWithSearch.TAG_BREAK.indexOf(event.key) !== -1 && this.allowFreeEntries) {
                this.stopEdit();
                // Mess with tabindexes to allow focus to easily go to next control
                var input_3 = this.select.shadowRoot.querySelector('[tabindex="0"]');
                input_3.setAttribute("tabindex", "-1");
                this.updateComplete.then(function () {
                    // Set it back so we can get focus again later
                    input_3.setAttribute("tabindex", "0");
                });
                return;
            }
            // Abort edit, put original value back
            else if (event.key == "Escape") {
                this.stopEdit(true);
                // Prevent default, since that would try to close popup
                event.preventDefault();
            }
        };
        /**
         * Sometimes users paste multiple comma separated values at once.  Split them then handle normally.
         *
         * @param {ClipboardEvent} event
         * @protected
         */
        Et2WidgetWithSearch.prototype._handlePaste = function (event) {
            var _this = this;
            event.preventDefault();
            var paste = event.clipboardData.getData('text');
            if (!paste) {
                return;
            }
            var selection = window.getSelection();
            if (selection.rangeCount) {
                selection.deleteFromDocument();
            }
            var values = paste.split(/,\t/);
            values.forEach(function (v) {
                _this.createFreeEntry(v.trim());
            });
            this.dropdown.hide();
        };
        /**
         * Start searching
         *
         * If we have local options, we'll search & display any matches.
         * If serverUrl is set, we'll ask the server for results as well.
         */
        Et2WidgetWithSearch.prototype.startSearch = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var clear_button;
                var _this = this;
                return __generator(this, function (_c) {
                    // Stop timeout timer
                    clearTimeout(this._searchTimeout);
                    this.setAttribute("searching", "");
                    clear_button = (_b = (_a = this._searchInputNode) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(".input__clear");
                    if (clear_button) {
                        clear_button.style.display = "none";
                    }
                    // Clear previous results
                    this._total_result_count = 0;
                    this._clearResults();
                    // Start the searches
                    this._searchPromise = Promise.all([
                        this.localSearch(this._searchInputNode.value, this.searchOptions),
                        this.remoteSearch(this._searchInputNode.value, this.searchOptions)
                    ]).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.removeAttribute("searching");
                                    // Restore clear button
                                    if (clear_button) {
                                        clear_button.style.display = "";
                                    }
                                    return [4 /*yield*/, this.updateComplete];
                                case 1:
                                    _a.sent();
                                    this._searchPromise = null;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    this.requestUpdate();
                    return [2 /*return*/, this._searchPromise];
                });
            });
        };
        /**
         * Clear search term and any search results
         *
         * Local options are not removed, but remote options are
         */
        Et2WidgetWithSearch.prototype.clearSearch = function () {
            // Stop timeout timer
            clearTimeout(this._searchTimeout);
            this._clearResults();
            // Clear search term
            if (this._searchInputNode) {
                this._searchInputNode.value = "";
            }
        };
        Et2WidgetWithSearch.prototype._clearResults = function () {
            var target = this._optionTargetNode || this;
            this._keepSelectedRemote();
            this._remote_options = [];
            this._total_result_count = 0;
            // Not searching anymore, clear flag
            var clear_flag = function (option) {
                if (Array.isArray(option.value)) {
                    option.value.map(clear_flag);
                }
                else {
                    option.isMatch = null;
                }
            };
            this.select_options.map(clear_flag);
            this.requestUpdate("select_options");
            // Rendering options using repeat() means we need to explicitly update the nodes since they
            // don't always get re-rendered
            for (var _i = 0, _a = this.select.querySelectorAll(".no-match"); _i < _a.length; _i++) {
                var option = _a[_i];
                option.classList.remove("no-match", "match");
            }
        };
        /**
         * Filter the local options
         *
         * @param {string} search
         * @protected
         */
        Et2WidgetWithSearch.prototype.localSearch = function (search, options) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.select_options.forEach(function (option) {
                    option.isMatch = _this.searchMatch(search, option);
                });
                _this.requestUpdate("select_options");
                resolve();
            });
        };
        /**
         * Ask for remote options and add them in unconditionally
         * @param {string} search
         * @protected
         */
        Et2WidgetWithSearch.prototype.remoteSearch = function (search, options) {
            if (!this.searchUrl) {
                return Promise.resolve([]);
            }
            // Check our URL: JSON file or URL?
            if (this.searchUrl.includes(".json")) {
                // Get the file, search it
                return this.jsonQuery(search, options);
            }
            else {
                // Fire off the query to the server
                return this.remoteQuery(search, options);
            }
        };
        /**
         * Search through a JSON file in the browser
         *
         * @param {string} search
         * @param {object} options
         * @protected
         */
        Et2WidgetWithSearch.prototype.jsonQuery = function (search, options) {
            var _this = this;
            // Get the file
            var controller = new AbortController();
            var signal = controller.signal;
            var response_ok = false;
            var resultLimit = Math.max(parseInt(this.egw().preference('maxmatchs', 'common')), 100);
            return StaticOptions_1.StaticOptions.cached_from_file(this, this.searchUrl)
                .then(function (options) {
                // Filter the options
                var lower_search = search.toLowerCase();
                var filtered = options.filter(function (option) {
                    return option.label.toLowerCase().includes(lower_search) || option.value.includes(search);
                });
                // Limit results
                _this._total_result_count += filtered.length;
                if (filtered.length > resultLimit) {
                    filtered.splice(resultLimit);
                }
                // Add the matches
                _this._total_result_count -= _this.processRemoteResults(filtered);
                return filtered;
            })
                .catch(function (_err) {
                _this.egw().message(_err.statusText || _this.searchUrl, "error");
                return [];
            });
        };
        /**
         * Actually query the server.
         *
         * This can be overridden to change request parameters or eg. send them as POST parameters.
         *
         * Default implementation here sends search string and options:
         * - as two parameters to the AJAX function
         * - and (additional) as GET parameters plus search string as "query"
         *
         * This is done to support as well the old taglist callbacks, as the regular select ones!
         *
         * @param {string} search
         * @param {object} options
         * @returns {any}
         * @protected
         */
        Et2WidgetWithSearch.prototype.remoteQuery = function (search, options) {
            var _this = this;
            var _a;
            // Include a limit, even if options don't, to avoid massive lists breaking the UI
            var sendOptions = __assign({ num_rows: (_a = parseInt(this.egw().preference('maxmatchs', 'common'))) !== null && _a !== void 0 ? _a : 100 }, options);
            return this.egw().request(this.egw().link(this.egw().ajaxUrl(this.egw().decodePath(this.searchUrl)), __assign({ query: search }, sendOptions)), [search, sendOptions]).then(function (results) {
                return _this._processResultCount(results);
            });
        };
        /**
         * Update total result count, checking results for a total attribute, then further processing the results
         * into select options
         *
         * @param results
         * @returns {SelectOption[]}
         * @protected
         */
        Et2WidgetWithSearch.prototype._processResultCount = function (results) {
            // If results have a total included, pull it out.
            // It will cause errors if left in the results
            if (typeof results.total !== "undefined") {
                this._total_result_count += results.total;
                delete results.total;
                // Make it an array, since it was probably an object, and cleanSelectOptions() treats objects differently
                results = Object.values(results);
            }
            else {
                this._total_result_count += results.length;
            }
            var entries = FindSelectOptions_1.cleanSelectOptions(results);
            var entryCount = entries.length;
            this._total_result_count -= this.processRemoteResults(entries);
            return entries;
        };
        /**
         * Add in remote results
         *
         * Any results that already exist will be removed to avoid duplicates
         *
         * @param results
         * @return Duplicate count
         * @protected
         */
        Et2WidgetWithSearch.prototype.processRemoteResults = function (entries) {
            var _this = this;
            if (!(entries === null || entries === void 0 ? void 0 : entries.length)) {
                return 0;
            }
            var duplicateCount = 0;
            var process = function (entries) {
                var _loop_2 = function (i) {
                    var entry = entries[i];
                    entry.class = (entry.class || "") + " remote";
                    // Handle option groups
                    if (Array.isArray(entry.value)) {
                        process(entry.value);
                        return "continue";
                    }
                    // Server says it's a match
                    entry.isMatch = true;
                    // Avoid duplicates with existing options
                    var found = _this.select_options.find(function (o) { return o.value == entry.value; });
                    if (found) {
                        // Server says it's a match, but it's already a local option
                        found.isMatch = true;
                        duplicateCount++;
                        entries.splice(i, 1);
                    }
                };
                // Add a "remote" class so we can tell these apart from any local results
                for (var i = entries.length - 1; i >= 0; i--) {
                    _loop_2(i);
                }
            };
            process(entries);
            this._remote_options = entries;
            this.requestUpdate("select_options");
            return duplicateCount;
        };
        /**
         * Check if one of our [local] items matches the search
         *
         * @param search
         * @param item
         * @returns {boolean}
         * @protected
         */
        Et2WidgetWithSearch.prototype.searchMatch = function (search, option) {
            var _a;
            if (!option || !option.value ||
                // do NOT return folders, if leafOnly is set
                this.leafOnly && typeof option.children === 'undefined') {
                return false;
            }
            if ((_a = option.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
            if (typeof option.value == "string") {
                return option.value.includes(search.toLowerCase());
            }
            return option.value == search;
        };
        /**
         * Create an entry that is not in the options and add it to the value
         *
         * @param {string} text Used as both value and label
         */
        Et2WidgetWithSearch.prototype.createFreeEntry = function (text) {
            var _a;
            if (!text || !this.validateFreeEntry(text)) {
                return false;
            }
            // Make sure not to double-add
            if (!this.querySelector("[value='" + text.replace(/'/g, "\\\'") + "']") && !this.select_options.find(function (o) { return o.value == text; })) {
                this.__select_options.push({
                    value: text.trim(),
                    label: text.trim(),
                    class: "freeEntry",
                    isMatch: false
                });
                this.requestUpdate('select_options');
            }
            // Make sure not to double-add, but wait until the option is there
            if (this.multiple && this.getValueAsArray().indexOf(text) == -1) {
                var value = this.getValueAsArray();
                value.push(text);
                this.value = value;
            }
            else if (!this.multiple && this.value !== text) {
                this.value = text;
            }
            this.dispatchEvent(new Event("change", { bubbles: true }));
            // If we were overlapping edit inputbox with the value display, reset
            if (!this.readonly && ((_a = this._activeControls) === null || _a === void 0 ? void 0 : _a.classList.contains("novalue"))) {
                this._searchInputNode.style.display = "";
            }
            return true;
        };
        /**
         * Check if a free entry value is acceptable.
         * We use validators directly using the proposed value
         *
         * @param text
         * @returns {boolean}
         */
        Et2WidgetWithSearch.prototype.validateFreeEntry = function (text) {
            var _this = this;
            var validators = __spreadArrays(this.validators, this.defaultValidators);
            var result = validators.filter(function (v) {
                return v.execute(text, v.param, { node: _this });
            });
            return validators.length > 0 && result.length == 0 || validators.length == 0;
        };
        Et2WidgetWithSearch.prototype.handleTagEdit = function (event) {
            var value = event.target.value;
            var original = event.target.dataset.original_value;
            if (!value || !this.allowFreeEntries || !this.validateFreeEntry(value)) {
                // Not a good value, reset it.
                event.target.variant = "danger";
                return false;
            }
            event.target.variant = "success";
            // Add to internal list
            this.createFreeEntry(value);
            // Remove original from value & DOM
            if (value != original) {
                if (this.multiple) {
                    this.value = this.value.filter(function (v) { return v !== original; });
                }
                else {
                    this.value = value;
                }
                this.__select_options = this.__select_options.filter(function (v) { return v.value !== original; });
            }
        };
        /**
         * Start editing the current value if multiple=false
         *
         * @param {Et2Tag} tag
         */
        Et2WidgetWithSearch.prototype.startEdit = function (tag) {
            var _this = this;
            var tag_value = tag ? tag.value : this.value.toString();
            // Turn on edit UI
            this._activeControls.classList.add("editing", "active");
            // Pre-set value to tag value
            this._editInputNode.style.display = "";
            this._editInputNode.value = tag_value;
            // If they abort the edit, they'll want the original back.
            this._editInputNode.dataset.initial = tag_value;
            event_1.waitForEvent(this.dropdown, "sl-after-show").then(function () {
                _this._editInputNode.focus();
            });
        };
        Et2WidgetWithSearch.prototype.stopEdit = function (abort) {
            var _this = this;
            var _a, _b, _c, _d, _e;
            if (abort === void 0) { abort = false; }
            // type to select will focus matching entries, but we don't want to stop the edit yet
            if (typeof abort == "object" && abort.type == "blur") {
                if (((_a = abort.relatedTarget) === null || _a === void 0 ? void 0 : _a.localName) == this.optionTag) {
                    return;
                }
                // Edit lost focus, accept changes
                abort = false;
            }
            var original = (_b = this._editInputNode) === null || _b === void 0 ? void 0 : _b.dataset.initial;
            (_c = this._editInputNode) === null || _c === void 0 ? true : delete _c.dataset.initial;
            var value = abort ? original : (_d = this._editInputNode) === null || _d === void 0 ? void 0 : _d.value;
            if (this._editInputNode) {
                this._editInputNode.value = "";
            }
            // Remove original from value & DOM
            if (value != original && original) {
                if (this.multiple) {
                    this.value = this.value.filter(function (v) { return v !== original; });
                }
                else {
                    this.value = value;
                }
                this.select_options = this.select_options.filter(function (v) { return v.value !== original; });
                (_e = this.dropdown.querySelector(".freeEntry[value='" + original.replace(/'/g, "\\\'") + "']")) === null || _e === void 0 ? void 0 : _e.remove();
            }
            if (value && value != original) {
                this.createFreeEntry(value);
            }
            this.requestUpdate("select_options");
            this._activeControls.classList.remove("editing", "active");
            if (!this.multiple) {
                this.updateComplete.then(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // Don't know why, but this doesn't always work leaving the value hidden by prefix
                            return [4 /*yield*/, this.dropdown.hide()];
                            case 1:
                                // Don't know why, but this doesn't always work leaving the value hidden by prefix
                                _a.sent();
                                this.dropdown.classList.remove("select--open");
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        };
        Et2WidgetWithSearch.prototype._handleSearchAbort = function (e) {
            this._activeControls.classList.remove("active");
            this.clearSearch();
        };
        /**
         * et2-searchbox (SlInput) sends out an event on change.
         * We don't care, and if we let it bubble it'll get in the way.
         * @param e
         * @protected
         */
        Et2WidgetWithSearch.prototype._handleSearchChange = function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return false;
        };
        Et2WidgetWithSearch.prototype._handleSearchClear = function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            this.clearSearch();
        };
        /**
         * When user is typing, we wait this long for them to be finished before we start the search
         * @type {number}
         * @protected
         */
        Et2WidgetWithSearch.SEARCH_TIMEOUT = 500;
        /**
         * We need at least this many characters before we start the search
         *
         * @type {number}
         * @protected
         */
        Et2WidgetWithSearch.MIN_CHARS = 2;
        /**
         * These characters will end a free tag
         * @type {string[]}
         */
        Et2WidgetWithSearch.TAG_BREAK = ["Tab", "Enter", ","];
        __decorate([
            property_js_1.property({ type: Boolean, reflect: true })
        ], Et2WidgetWithSearch.prototype, "search", void 0);
        __decorate([
            property_js_1.property({ type: String })
        ], Et2WidgetWithSearch.prototype, "searchUrl", void 0);
        __decorate([
            property_js_1.property({ type: Boolean, reflect: true })
        ], Et2WidgetWithSearch.prototype, "allowFreeEntries", void 0);
        __decorate([
            property_js_1.property({ type: Object })
        ], Et2WidgetWithSearch.prototype, "searchOptions", void 0);
        __decorate([
            property_js_1.property({ type: Boolean })
        ], Et2WidgetWithSearch.prototype, "editModeEnabled", void 0);
        return Et2WidgetWithSearch;
    }(superclass));
    return Et2WidgetWithSearch;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
