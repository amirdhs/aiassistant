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
exports.Et2TreeDropdown = void 0;
var lit_1 = require("lit");
var static_html_js_1 = require("lit/static-html.js");
var Et2WidgetWithSelectMixin_1 = require("../Et2Select/Et2WidgetWithSelectMixin");
var property_js_1 = require("lit/decorators/property.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var state_js_1 = require("lit/decorators/state.js");
var slot_1 = require("../Et2Widget/slot");
var map_js_1 = require("lit/directives/map.js");
var shoelace_1 = require("../Styles/shoelace");
var Et2TreeDropdown_styles_1 = require("./Et2TreeDropdown.styles");
var Et2Tag_1 = require("../Et2Select/Tag/Et2Tag");
var SearchMixin_1 = require("../Et2Widget/SearchMixin");
var Required_1 = require("../Validators/Required");
var EgwMenuShoelace_1 = require("../../egw_action/EgwMenuShoelace");
/**
 * @summary A tree that is hidden in a dropdown
 *
 * @dependency sl-dropdown
 * @dependency et2-tree
 * @dependency et2-tag
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the control's value changes.
 * @event sl-show - Emitted when the suggestion menu opens.
 * @event sl-after-show - Emitted after the suggestion menu opens and all animations are complete.
 * @event sl-hide - Emitted when the suggestion menu closes.
 * @event sl-after-hide - Emitted after the suggestion menu closes and all animations are complete.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @since 23.1.x
 */
var Et2TreeDropdown = /** @class */ (function (_super) {
    __extends(Et2TreeDropdown, _super);
    function Et2TreeDropdown() {
        var _this = _super.call(this) || this;
        /** Placeholder text to show as a hint when the select is empty. */
        _this.placeholder = "";
        _this.multiple = false;
        /** Adds a clear button when the dropdown is not empty. */
        _this.clearable = false;
        /** The component's help text. If you need to display HTML, use the `help-text` slot instead. */
        _this.helpText = "";
        /** "JSON URL or menuaction to be called for nodes marked with child=1, but not having children, getSelectedNode() contains node-id" */
        _this.autoloading = "";
        /**
         * Indicates whether the dropdown is open. You can toggle this attribute to show and hide the tree, or you can
         * use the `show()` and `hide()` methods and this attribute will reflect the open state.
         */
        _this.open = false;
        /**
         * Actions (passed to the tree)
         * @type {{}}
         */
        _this.actions = {};
        /**
         * set the corresponding attribute if you want the tree to scroll to the selected item, when it is opened
         * Please already supply the parents of the current selection in an open state from the server side if possible
         */
        _this.openAtSelection = false;
        // We show search results in the same dropdown
        _this.treeOrSearch = "tree";
        _this.hasSlotController = new slot_1.HasSlotController(_this, "help-text", "label");
        _this.displayLabel = '';
        _this.__value = [];
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2TreeDropdown, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2TreeDropdown_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown, "translate", {
        /**
         * List of properties that get translated
         * @returns object
         */
        get: function () {
            return __assign(__assign({}, _super.translate), { placeholder: true });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown.prototype, "leafOnly", {
        get: function () {
            var _a;
            return (_a = this._tree) === null || _a === void 0 ? void 0 : _a.leafOnly;
        },
        /**
         * If true, only leafs (NOT folders) are selectable
         */
        set: function (_leafOnly) {
            var _this = this;
            this.updateComplete.then(function () {
                var tree = _this._tree;
                if (tree) {
                    tree.leafOnly = _leafOnly;
                    tree.requestUpdate("leafOnly");
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown.prototype, "_popup", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("sl-popup");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown.prototype, "_tree", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("et2-tree");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown.prototype, "_tags", {
        get: function () { return Array.from(this.shadowRoot.querySelectorAll("et2-tag")); },
        enumerable: false,
        configurable: true
    });
    Et2TreeDropdown.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        document.addEventListener("click", this.handleDocumentClick);
    };
    Et2TreeDropdown.prototype.firstUpdated = function () {
        var options = this.multiple || !this.emptyLabel ? this.select_options : __spreadArrays([{
                value: "",
                label: this.emptyLabel
            }], this.select_options);
        this._tree._selectOptions = options;
        this._tree.requestUpdate("_selectOptions");
    };
    Et2TreeDropdown.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        document.removeEventListener("click", this.handleDocumentClick);
        this._tree.destroy();
    };
    Et2TreeDropdown.prototype.willUpdate = function (changedProperties) {
        _super.prototype.willUpdate.call(this, changedProperties);
        // Child tree not updating when our emptyLabel changes
        if (this._tree && (changedProperties.has("select_options") || changedProperties.has("emptyLabel"))) {
            var options = this.multiple || !this.emptyLabel ? this.select_options : __spreadArrays([{
                    value: "",
                    label: this.emptyLabel
                }], this.select_options);
            this._tree._selectOptions = options;
            this._tree.requestUpdate("_selectOptions");
            // Trigger displayLabel change
            this.value = this.value;
        }
    };
    Et2TreeDropdown.prototype.updated = function (changedProperties) {
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
        // @ts-ignore Popup sometimes loses the anchor which breaks the sizing
        this._popup.handleAnchorChange();
    };
    Object.defineProperty(Et2TreeDropdown.prototype, "value", {
        get: function () {
            var _a;
            return this.multiple ? this.__value : (((_a = this.__value) === null || _a === void 0 ? void 0 : _a.length) ? this.__value[0] : "");
        },
        /** Selected tree leaves */
        set: function (new_value) {
            var _a, _b;
            if (!new_value)
                new_value = "";
            // @ts-ignore handling invalid number type gracefully
            if (typeof new_value === 'number') {
                new_value = "" + new_value;
            }
            if (typeof new_value === "string") {
                new_value = new_value.split(",");
            }
            var oldValue = this.__value;
            // Filter to make sure there are no trailing commas or duplicates
            this.__value = Array.from(new Set(new_value.filter(function (v) { return v; })));
            this.displayLabel = "";
            if (!this.multiple) {
                var option = (_a = this.optionSearch(this.value, this.select_options, 'value', 'item')) !== null && _a !== void 0 ? _a : this.optionSearch(this.value, this.select_options, 'value', 'children');
                if (option) {
                    this.displayLabel = (_b = option.label) !== null && _b !== void 0 ? _b : option.text;
                }
            }
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2TreeDropdown.prototype, "select_options", {
        get: function () {
            return _super.prototype.select_options;
        },
        set: function (new_options) {
            var _a, _b;
            _super.prototype.select_options = new_options;
            // Overridden so we can update displayLabel in the case where value got set before selectOptions
            if (this.value && !this.multiple) {
                var option = (_a = this.optionSearch(typeof this.value == "string" ? this.value : this.value[0], this.select_options, 'value', 'item')) !== null && _a !== void 0 ? _a : this.optionSearch(typeof this.value == "string" ? this.value : this.value[0], this.select_options, 'value', 'children');
                if (option) {
                    this.displayLabel = (_b = option.label) !== null && _b !== void 0 ? _b : option.text;
                }
            }
            if (this._tree) {
                this._tree._selectOptions = new_options;
                this._tree.requestUpdate("_selectOptions");
            }
        },
        enumerable: false,
        configurable: true
    });
    /** Sets focus on the control. */
    Et2TreeDropdown.prototype.focus = function (options) {
        this.handleFocus();
    };
    /** Removes focus from the control. */
    Et2TreeDropdown.prototype.blur = function () {
        this.handleBlur();
    };
    /** Shows the tree. */
    Et2TreeDropdown.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.readonly || this.disabled) {
                    this.open = false;
                    this.requestUpdate("open", true);
                    return [2 /*return*/, this.updateComplete];
                }
                this.open = true;
                this.requestUpdate("open", false);
                return [2 /*return*/, this.updateComplete.then(function () { _this.openAtSelection && _this._tree.scrollToSelected(); })];
            });
        });
    };
    /** Hides the tree. */
    Et2TreeDropdown.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.open || this.disabled) {
                    return [2 /*return*/, undefined];
                }
                this.open = false;
                this._popup.active = false;
                this._searchNode.value = "";
                this.requestUpdate("open");
                return [2 /*return*/, this.updateComplete];
            });
        });
    };
    Et2TreeDropdown.prototype.setCurrentTag = function (tag) {
        this._tags.forEach(function (t) {
            t.tabIndex = -1;
            if (t.current) {
                t.current = false;
                t.requestUpdate();
            }
        });
        this.currentTag = tag;
        if (tag) {
            this.currentTag.tabIndex = 0;
            this.currentTag.current = true;
            this.currentTag.requestUpdate();
            this.currentTag.focus();
        }
    };
    Et2TreeDropdown.prototype.startSearch = function () {
        _super.prototype.startSearch.call(this);
        // Show the dropdown, that's where the results will go
        this.open = true;
        // Hide the tree
        this.treeOrSearch = "search";
    };
    /**
     * If you have a local list of options, you can search through them on the client and include them in the results.
     *
     * This is done independently from the server-side search, and the results are merged.
     *
     * @param {string} search
     * @param {object} options
     * @returns {Promise<any[]>}
     * @protected
     */
    Et2TreeDropdown.prototype.localSearch = function (search, searchOptions, localOptions) {
        if (localOptions === void 0) { localOptions = []; }
        return _super.prototype.localSearch.call(this, search, searchOptions, this.select_options);
    };
    /**
     * Toggles a search result's selected state
     * Overridden to handle multiple attribute so only 1 result is selected
     */
    Et2TreeDropdown.prototype.toggleResultSelection = function (result, force) {
        if (!this.multiple) {
            this._resultNodes.forEach(function (t) { return t.selected = false; });
        }
        _super.prototype.toggleResultSelection.call(this, result, force);
    };
    Et2TreeDropdown.prototype.searchResultSelected = function () {
        var _this = this;
        var _a, _b;
        _super.prototype.searchResultSelected.call(this);
        var oldValue = __spreadArrays(this.value);
        if (this.multiple && typeof this.value !== "undefined") {
            // Add in the new result(s), no duplicates
            this.value = __spreadArrays(new Set(__spreadArrays(this.value, this.selectedResults.map(function (el) { return el.value; }))));
        }
        else if (typeof this.value !== "undefined") {
            // Just replace our value with whatever they chose
            this.value = (_b = (_a = this.selectedResults[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
        }
        // Done with search, show the tree
        this.treeOrSearch = "tree";
        // Close the dropdown, move on
        if (!this.multiple || this.egw().preference("select_multiple_close") == "close") {
            this.blur();
        }
        else {
            this._tree.value = this.value;
        }
        // Update values
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
        });
        this._tree.requestUpdate("value", oldValue);
        this.requestUpdate("value", oldValue);
    };
    Et2TreeDropdown.prototype.handleClearClick = function (event) {
        var _this = this;
        event.stopPropagation();
        if (this.value.length > 0) {
            this.value = [];
            this.displayInput.focus({ preventScroll: true });
            // Emit after update
            this.updateComplete.then(function () {
                _this.emit('sl-clear');
                _this.emit('sl-input');
                _this.emit('sl-change');
            });
        }
    };
    Et2TreeDropdown.prototype.handleClearMouseDown = function (event) {
        // Don't lose focus or propagate events when clicking the clear button
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * Keyboard events that the search input did not grab
     * (tags, option navigation)
     *
     * @param {KeyboardEvent} event
     */
    Et2TreeDropdown.prototype.handleComboboxKeyDown = function (event) {
        // Navigate between tags
        if (this.currentTag && (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))) {
            var nextTagIndex = this._tags.indexOf(this.currentTag);
            var tagCount = this._tags.length;
            switch (event.key) {
                case 'ArrowLeft':
                    nextTagIndex--;
                    break;
                case 'ArrowRight':
                    nextTagIndex++;
                    break;
                case 'Home':
                    nextTagIndex = 0;
                    break;
                case 'End':
                    nextTagIndex = this._tags.length - 1;
                    break;
            }
            nextTagIndex = Math.max(0, nextTagIndex);
            if (nextTagIndex < tagCount && this._tags[nextTagIndex]) {
                this.setCurrentTag(this._tags[nextTagIndex]);
            }
            else {
                // Arrow back to search, or got lost
                this._searchNode.focus();
            }
            event.stopPropagation();
            return false;
        }
        // Remove tag
        if (event.target instanceof Et2Tag_1.Et2Tag && ["Delete", "Backspace"].includes(event.key)) {
            var tags = this._tags;
            var index = tags.indexOf(event.target);
            event.target.dispatchEvent(new CustomEvent('sl-remove', { bubbles: true }));
            index += event.key == "Delete" ? 1 : -1;
            if (index >= 0 && index < tags.length) {
                this.setCurrentTag(this._tags[index]);
            }
            else {
                this._searchNode.focus();
            }
            event.stopPropagation();
            return;
        }
        // Close popup if focus is on tree
        if (["Escape"].includes(event.key)) {
            this.hide();
            event.stopPropagation();
            return;
        }
    };
    Et2TreeDropdown.prototype.handleDocumentClick = function (event) {
        if (event.target == this || event.composedPath().includes(this)) {
            return;
        }
        if (this.open) {
            event.preventDefault();
            this.hide();
        }
        if (this.hasFocus) {
            this.blur();
        }
    };
    Et2TreeDropdown.prototype.handleFocus = function () {
        var _this = this;
        if (this.disabled || this.readonly) {
            return;
        }
        this.hasFocus = true;
        // Should not be needed, but not firing the update
        this.requestUpdate("hasFocus");
        this.updateComplete.then(function () {
            if (_this._searchNode) {
                _this._searchNode.focus();
            }
            else {
                _this._tree.focus();
            }
            _this.dispatchEvent(new Event("sl-focus"));
        });
    };
    Et2TreeDropdown.prototype.handleBlur = function () {
        var _this = this;
        var _a;
        this.open = false;
        this.treeOrSearch = "tree";
        this.hasFocus = false;
        this.resultsOpen = false;
        this._popup.active = false;
        // Should not be needed, but not firing the update
        this.requestUpdate("resultsOpen");
        this.requestUpdate("open");
        this.requestUpdate("hasFocus");
        (_a = this._searchNode) === null || _a === void 0 ? void 0 : _a.blur();
        clearTimeout(this._searchTimeout);
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("sl-blur"));
        });
    };
    Et2TreeDropdown.prototype.handleClick = function (event) {
        // Open if clicking somewhere in the widget
        if (event.target.classList.contains("tree-dropdown__combobox")) {
            event.stopPropagation();
            this.show();
            this.handleFocus();
        }
    };
    Et2TreeDropdown.prototype.handleSearchFocus = function (event) {
        this.hasFocus = true;
        // Should not be needed, but not firing the update
        this.requestUpdate("hasFocus");
        // Reset tags to not take focus
        this.setCurrentTag(null);
        // Don't show if only tabbed into
        if (!event.relatedTarget && !this.open) {
            this.show();
        }
    };
    Et2TreeDropdown.prototype.handleInternalBlur = function (event) {
        // Focus lost to some other internal component - ignore it
        if (this.shadowRoot.contains(event.target)) {
            return;
        }
        var o = event.relatedTarget;
        while (o) {
            if (o == this.shadowRoot || o instanceof EgwMenuShoelace_1.EgwMenuShoelace) {
                return;
            }
            o = o.parentNode;
        }
        this.handleBlur();
    };
    Et2TreeDropdown.prototype.handleSearchKeyDown = function (event) {
        _super.prototype.handleSearchKeyDown.call(this, event);
        // Hide popup if focus is on search
        if (["Escape"].includes(event.key)) {
            this.hide();
            event.stopPropagation();
            return;
        }
        // Show options if popup is closed on arrow down or space
        if ((event.key == "ArrowDown" || event.key == " " && this._searchNode.value == "") && !this.open && !this.resultsOpen) {
            this.show();
            event.stopPropagation();
            event.preventDefault();
        }
        // Move to tree if popup is open & tree is showing
        else if (event.key == "ArrowDown" && this.treeOrSearch == "tree") {
            this._tree.focus();
            event.stopPropagation();
        }
        // Left at beginning goes to tags
        if (this._searchNode.selectionStart == 0 && event.key == "ArrowLeft") {
            this.hide();
            this._tags.forEach(function (t) { return t.tabIndex = 0; });
            if (this._tags.length > 0) {
                this.setCurrentTag(this._tags[this._tags.length - 1]);
            }
            event.stopPropagation();
            return;
        }
    };
    Et2TreeDropdown.prototype.handleLabelClick = function () {
        this._searchNode.focus();
    };
    Et2TreeDropdown.prototype.handleTagRemove = function (event, value) {
        var _this = this;
        // Find the tag value and remove it from current value
        var valueArray = this.getValueAsArray();
        var oldValue = valueArray.slice(0);
        var index = valueArray.indexOf(value);
        valueArray.splice(index, 1);
        this.value = valueArray;
        this.requestUpdate("value", oldValue);
        // TODO: Clean up this scope violation
        // sl-tree-item is not getting its selected attribute updated
        Array.from(this._tree._tree.querySelectorAll('sl-tree-item')).forEach(function (e) {
            if (_this.value.includes(e.id)) {
                e.setAttribute("selected", "");
            }
            else {
                e.removeAttribute("selected");
            }
        });
        this._tree.requestUpdate();
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
        });
    };
    Et2TreeDropdown.prototype.handleTreeChange = function (event) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var oldValue = this.value.slice(0);
        // For single value, we can just grab selected from the tree.  For multiple, we need to manage it.
        if (!this.multiple) {
            this.value = (_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.selection) === null || _b === void 0 ? void 0 : _b.map(function (i) { return i.id || i.value; })) !== null && _c !== void 0 ? _c : [];
        }
        else {
            var id = (_e = (_d = event === null || event === void 0 ? void 0 : event.detail) === null || _d === void 0 ? void 0 : _d.selection) === null || _e === void 0 ? void 0 : _e.map(function (i) { return i.id || i.value; }).pop();
            if (id && !this.value.includes(id)) {
                // Copy so LitElement knows it changed
                this.value = __spreadArrays(this.value, [id]);
            }
        }
        this.requestUpdate("value", oldValue);
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change", { bubbles: true }));
        });
        if (!this.multiple || this.egw().preference("select_multiple_close") == "close") {
            this.blur();
        }
    };
    Et2TreeDropdown.prototype.handleTriggerClick = function (event) {
        var _this = this;
        if (this.disabled || this.readonly) {
            return;
        }
        event.stopPropagation();
        this.hasFocus = true;
        var oldValue = this.open;
        if (this.open) {
            this._popup.active = false;
            this._searchNode.value = "";
        }
        else {
            this._popup.active = true;
        }
        this.open = this._popup.active;
        this.treeOrSearch = "tree";
        this.requestUpdate("open", oldValue);
        if (this.open) {
            this.updateComplete.then(function () {
                _this._tree.style.minWidth = getComputedStyle(_this).width;
                _this.focus();
            });
        }
    };
    /**
     * Get the icon for the select option
     *
     * @param option
     * @protected
     */
    Et2TreeDropdown.prototype.iconTemplate = function (option) {
        var _a;
        if (!option.icon && !option.im0) {
            return static_html_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
        }
        return static_html_js_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-image slot=\"prefix\" part=\"icon\" src=\"", "\"></et2-image>"], ["\n            <et2-image slot=\"prefix\" part=\"icon\" src=\"", "\"></et2-image>"])), (_a = option.icon) !== null && _a !== void 0 ? _a : option.im0);
    };
    Et2TreeDropdown.prototype.inputTemplate = function () {
        var _this = this;
        var _a, _b;
        var placeholder = "";
        var image = lit_1.nothing;
        if (this.disabled || this.readonly || (!this.open && this.multiple && this.value.length > 0)) {
            placeholder = "";
        }
        else if (this.hasFocus) {
            placeholder = this.egw().lang("Search");
        }
        else {
            placeholder = this.emptyLabel || this.placeholder;
        }
        if (!this.multiple && this.value && !this.open) {
            var option = (_a = this.optionSearch(this.value, this.select_options, 'value', 'item')) !== null && _a !== void 0 ? _a : this.optionSearch(this.value, this.select_options, 'value', 'children');
            image = option ? this.iconTemplate((_b = option === null || option === void 0 ? void 0 : option.option) !== null && _b !== void 0 ? _b : option) : null;
        }
        if (this.disabled || this.readonly) {
            return static_html_js_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", "", ""], ["", "", ""])), image, this.displayLabel || this.emptyLabel || placeholder);
        }
        return static_html_js_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            ", "\n            <input id=\"search\" type=\"text\" part=\"input\"\n                   class=\"tree-dropdown__search search__input\"\n                   autocomplete=\"do-not-autocomplete-", "\"\n                   spellcheck=\"false\"\n                   autocapitalize=\"off\"\n                   aria-controls=\"listbox\"\n                   aria-expanded=", "\n                   aria-haspopup=\"listbox\"\n                   aria-labelledby=\"label\"\n                   aria-disabled=", "\n                   aria-describedby=\"help-text\"\n                   role=\"combobox\"\n\n                   ?disabled=", "\n                   ?readonly=", "\n                   placeholder=\"", "\"\n                   tabindex=\"0\"\n                   .value=", "\n                   @keydown=", "\n                   @blur=", "\n                   @click=", "\n                   @focus=", "\n                   @paste=", "\n            />\n            <input\n                    class=\"tree-dropdown__value-input\"\n                    type=\"text\"\n                    ?disabled=", "\n                    ?required=", "\n                    .value=", "\n                    tabindex=\"-1\"\n                    aria-hidden=\"true\"\n                    @focus=", "\n                    @blur=", "\n            />\n\t\t"], ["\n            ", "\n            <input id=\"search\" type=\"text\" part=\"input\"\n                   class=\"tree-dropdown__search search__input\"\n                   autocomplete=\"do-not-autocomplete-", "\"\n                   spellcheck=\"false\"\n                   autocapitalize=\"off\"\n                   aria-controls=\"listbox\"\n                   aria-expanded=", "\n                   aria-haspopup=\"listbox\"\n                   aria-labelledby=\"label\"\n                   aria-disabled=", "\n                   aria-describedby=\"help-text\"\n                   role=\"combobox\"\n\n                   ?disabled=", "\n                   ?readonly=", "\n                   placeholder=\"", "\"\n                   tabindex=\"0\"\n                   .value=", "\n                   @keydown=", "\n                   @blur=", "\n                   @click=",
            "\n                   @focus=", "\n                   @paste=", "\n            />\n            <input\n                    class=\"tree-dropdown__value-input\"\n                    type=\"text\"\n                    ?disabled=", "\n                    ?required=", "\n                    .value=", "\n                    tabindex=\"-1\"\n                    aria-hidden=\"true\"\n                    @focus=", "\n                    @blur=", "\n            />\n\t\t"])), image, Date.now().toString(36), this.open ? 'true' : 'false', this.disabled ? 'true' : 'false', this.disabled, this.readonly, placeholder, this.hasFocus ? "" : this.displayLabel, this.handleSearchKeyDown, this.handleInternalBlur, function () {
            if (!_this.open) {
                _this.show();
            }
        }, this.handleSearchFocus, this.handlePaste, this.disabled, this.required, Array.isArray(this.value) ? this.value.join(', ') : this.value, this.handleFocus, this.handleBlur);
    };
    Et2TreeDropdown.prototype.styleTemplate = function () {
        return static_html_js_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
    };
    Object.defineProperty(Et2TreeDropdown.prototype, "tagTag", {
        /**
         * Tag used for rendering tags when multiple=true
         * Used for creating, finding & filtering options.
         * @see createTagNode()
         * @returns {string}
         */
        get: function () {
            return static_html_js_1.literal(templateObject_6 || (templateObject_6 = __makeTemplateObject(["et2-tag"], ["et2-tag"])));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Shows the currently selected values as tags when multiple=true
     *
     * @returns {TemplateResult}
     */
    Et2TreeDropdown.prototype.tagsTemplate = function () {
        var _this = this;
        var value = this.getValueAsArray();
        return static_html_js_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <div part=\"tags\" class=\"tree-dropdown__tags\">\n                ", "\n            </div>"], ["\n            <div part=\"tags\" class=\"tree-dropdown__tags\">\n                ",
            "\n            </div>"])), map_js_1.map(value, function (value, index) {
            var _a;
            // Deal with value that is not in options
            var option = (_a = _this.optionSearch(value, _this.select_options, 'value', 'item')) !== null && _a !== void 0 ? _a : _this.optionSearch(value, _this.select_options, 'value', 'children');
            return option ? _this.tagTemplate(option) : lit_1.nothing;
        }));
    };
    Et2TreeDropdown.prototype.tagTemplate = function (option) {
        var _this = this;
        var _a, _b, _c;
        var readonly = (this.readonly || option && typeof (option.disabled) != "undefined" && option.disabled);
        var isEditable = false && !readonly;
        var image = option ? this.iconTemplate((_a = option === null || option === void 0 ? void 0 : option.option) !== null && _a !== void 0 ? _a : option) : null;
        var isValid = true;
        var tagName = this.tagTag;
        return static_html_js_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <", "\n                    part=\"tag\"\n                    exportparts=\"\n                      base:tag__base,\n                      content:tag__content,\n                      remove-button:tag__remove-button,\n                      remove-button__base:tag__remove-button__base,\n                      icon:icon\n                    \"\n                    class=", "\n                    tabindex=\"-1\"\n                    variant=", "\n                    size=", "\n                    title=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    ?editable=", "\n                    .value=", "\n                    @sl-remove=", "\n                    @change=", "\n                    @dblclick=", "\n                    @click=", "\n            >\n                ", "\n                ", "\n            </", ">\n\t\t"], ["\n            <", "\n                    part=\"tag\"\n                    exportparts=\"\n                      base:tag__base,\n                      content:tag__content,\n                      remove-button:tag__remove-button,\n                      remove-button__base:tag__remove-button__base,\n                      icon:icon\n                    \"\n                    class=", "\n                    tabindex=\"-1\"\n                    variant=", "\n                    size=", "\n                    title=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    ?editable=", "\n                    .value=", "\n                    @sl-remove=", "\n                    @change=", "\n                    @dblclick=", "\n                    @click=", "\n            >\n                ", "\n                ", "\n            </", ">\n\t\t"])), tagName, (_b = "tree_tag " + option.class) !== null && _b !== void 0 ? _b : "", isValid ? lit_1.nothing : "danger", this.size || "medium", option.title, !readonly, readonly, isEditable, option.value || option.id, function (e) { return _this.handleTagRemove(e, option.value || option.id); }, this.handleTagEdit, this._handleDoubleClick, typeof this.onTagClick == "function" ? function (e) { return _this.onTagClick(e, e.target); } : lit_1.nothing, image !== null && image !== void 0 ? image : lit_1.nothing, ((_c = option.label) !== null && _c !== void 0 ? _c : option.text).trim(), tagName);
    };
    Et2TreeDropdown.prototype.render = function () {
        var _this = this;
        var hasLabelSlot = this.hasSlotController.test('label');
        var hasHelpTextSlot = this.hasSlotController.test('help-text');
        var hasLabel = this.label ? true : !!hasLabelSlot;
        var hasValue = this.value && this.value.length > 0;
        var hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        var hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
        var isPlaceholderVisible = (this.placeholder || this.emptyLabel) && this.value.length === 0 && !this.disabled && !this.readonly;
        var options = this.multiple || !this.emptyLabel ? this.select_options : __spreadArrays([{
                value: "",
                label: this.emptyLabel
            }], this.select_options);
        return static_html_js_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <sl-popup\n                            class=", "\n                            flip\n                            shift\n                            auto-size=\"both\"\n                            auto-size-padding=\"10\"\n                            ?active=", "\n                            placement=", "\n\t\t\t\t\t\t\tstrategy=\"fixed\"\n                            ?disabled=", "\n                            ?readonly=", "\n                            @sl-after-hide=", "\n                    >\n                        <div\n                                part=\"combobox control\"\n                                class=\"tree-dropdown__combobox\"\n                                slot=\"anchor\"\n                                @keydown=", "\n                                @click=", "\n                        >\n                            <slot part=\"prefix\" name=\"prefix\" class=\"tree-dropdown__prefix\"></slot>\n                            ", "\n                            ", "\n                            ", "\n                            <slot part=\"suffix\" name=\"suffix\" class=\"tree-dropdown__suffix\"></slot>\n                            <slot name=\"expand-icon\" part=\"expand-icon\" class=\"tree-dropdown__expand-icon\"\n                                  @click=", ">\n                                <sl-icon library=\"system\" name=\"chevron-down\" aria-hidden=\"true\"></sl-icon>\n                            </slot>\n                        </div>\n                        ", "\n                        <et2-tree\n                                .id=", "\n                                ._parent=", "\n                                class=\"tree-dropdown__tree\"\n                                exportparts=\"label\"\n                                ?readonly=", "\n                                ?disabled=", "\n                                value=", "\n                                .actions=", "\n                                .styleTemplate=", "\n\t\t\t\t\t\t\t\t.autoloading=\"", "\"\n\t\t\t\t\t\t\t\t?leafOnly = ", "\n\n                                @blur=", "\n                                @et2-click=", "\n                                @keydown=", "\n                                @sl-selection-change=", "\n                        >\n                        </et2-tree>\n                    </sl-popup>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <sl-popup\n                            class=",
            "\n                            flip\n                            shift\n                            auto-size=\"both\"\n                            auto-size-padding=\"10\"\n                            ?active=", "\n                            placement=", "\n\t\t\t\t\t\t\tstrategy=\"fixed\"\n                            ?disabled=", "\n                            ?readonly=", "\n                            @sl-after-hide=", "\n                    >\n                        <div\n                                part=\"combobox control\"\n                                class=\"tree-dropdown__combobox\"\n                                slot=\"anchor\"\n                                @keydown=", "\n                                @click=", "\n                        >\n                            <slot part=\"prefix\" name=\"prefix\" class=\"tree-dropdown__prefix\"></slot>\n                            ", "\n                            ", "\n                            ",
            "\n                            <slot part=\"suffix\" name=\"suffix\" class=\"tree-dropdown__suffix\"></slot>\n                            <slot name=\"expand-icon\" part=\"expand-icon\" class=\"tree-dropdown__expand-icon\"\n                                  @click=", ">\n                                <sl-icon library=\"system\" name=\"chevron-down\" aria-hidden=\"true\"></sl-icon>\n                            </slot>\n                        </div>\n                        ", "\n                        <et2-tree\n                                .id=", "\n                                ._parent=", "\n                                class=\"tree-dropdown__tree\"\n                                exportparts=\"label\"\n                                ?readonly=", "\n                                ?disabled=", "\n                                value=", "\n                                .actions=", "\n                                .styleTemplate=", "\n\t\t\t\t\t\t\t\t.autoloading=\"", "\"\n\t\t\t\t\t\t\t\t?leafOnly = ", "\n\n                                @blur=", "\n                                @et2-click=",
            "\n                                @keydown=", "\n                                @sl-selection-change=", "\n                        >\n                        </et2-tree>\n                    </sl-popup>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': hasLabel,
            'form-control--has-help-text': hasHelpText
        }), hasLabel ? 'false' : 'true', this.label, class_map_js_1.classMap({
            "tree-dropdown": true,
            input: true,
            'tree-dropdown--open': this.open,
            'tree-dropdown--disabled': this.disabled,
            'tree-dropdown--readonly': this.readonly,
            'tree-dropdown--focused': this.hasFocus,
            'tree-dropdown--multiple': this.multiple,
            'tree-dropdown--placeholder-visible': isPlaceholderVisible,
            'tree-dropdown--searching': this.treeOrSearch == "search",
            'tree-dropdown--has-value': hasValue
        }), this.open, this.placement || "bottom", this.disabled, this.readonly, function () { _this.resultsOpen = false; }, this.handleComboboxKeyDown, this.handleClick, this.multiple ? this.tagsTemplate() : lit_1.nothing, this.inputTemplate(), hasClearIcon
            ? static_html_js_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                                        <button\n                                                part=\"clear-button\"\n                                                class=\"select__clear\"\n                                                type=\"button\"\n                                                aria-label=", "\n                                                @mousedown=", "\n                                                @click=", "\n                                                tabindex=\"-1\"\n                                        >\n                                            <slot name=\"clear-icon\">\n                                                <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                                            </slot>\n                                        </button>\n                                    "], ["\n                                        <button\n                                                part=\"clear-button\"\n                                                class=\"select__clear\"\n                                                type=\"button\"\n                                                aria-label=", "\n                                                @mousedown=", "\n                                                @click=", "\n                                                tabindex=\"-1\"\n                                        >\n                                            <slot name=\"clear-icon\">\n                                                <sl-icon name=\"x-circle-fill\" library=\"system\"></sl-icon>\n                                            </slot>\n                                        </button>\n                                    "])), this.localize.term('clearEntry'), this.handleClearMouseDown, this.handleClearClick) : '', this.handleTriggerClick, this.searchResultsTemplate(), this.id + "_tree", this, this.readonly, this.disabled, this.multiple ? lit_1.nothing : this.value, this.actions, function () { return _this.styleTemplate(); }, this.autoloading, this.leafOnly, this.handleInternalBlur, function (e) {
            // Hide the popup when a tree item is clicked
            if (_this._close_on_select || !_this.multiple) {
                _this.hasFocus = false;
                _this.hide();
            }
        }, this.handleComboboxKeyDown, this.handleTreeChange, hasHelpText ? 'false' : 'true', this.helpText);
    };
    __decorate([
        property_js_1.property()
    ], Et2TreeDropdown.prototype, "placeholder", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2TreeDropdown.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2TreeDropdown.prototype, "clearable", void 0);
    __decorate([
        property_js_1.property({ attribute: 'help-text' })
    ], Et2TreeDropdown.prototype, "helpText", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2TreeDropdown.prototype, "autoloading", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2TreeDropdown.prototype, "open", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2TreeDropdown.prototype, "actions", void 0);
    __decorate([
        property_js_1.property()
    ], Et2TreeDropdown.prototype, "leafOnly", null);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2TreeDropdown.prototype, "openAtSelection", void 0);
    __decorate([
        state_js_1.state()
    ], Et2TreeDropdown.prototype, "currentTag", void 0);
    __decorate([
        state_js_1.state()
    ], Et2TreeDropdown.prototype, "treeOrSearch", void 0);
    __decorate([
        property_js_1.property()
    ], Et2TreeDropdown.prototype, "value", null);
    return Et2TreeDropdown;
}(SearchMixin_1.SearchMixin(Et2WidgetWithSelectMixin_1.Et2WidgetWithSelectMixin(lit_1.LitElement))));
exports.Et2TreeDropdown = Et2TreeDropdown;
// @ts-ignore Type problems because of Et2WidgetWithSelectMixin
customElements.define("et2-tree-dropdown", Et2TreeDropdown);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
