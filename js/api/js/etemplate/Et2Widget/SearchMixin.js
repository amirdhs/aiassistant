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
exports.SearchMixin = void 0;
var lit_1 = require("lit");
var state_js_1 = require("lit/decorators/state.js");
var property_js_1 = require("lit/decorators/property.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var until_js_1 = require("lit/directives/until.js");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * @summary Strongly typed mixin for asking the server for values that match a string the user types in and displaying those
 * matches for the user to choose from.
 *
 * # How to use this mixin:
 * ## Extend:
 * export class MySearchingWidget extends SearchMixin(...)
 *
 * ## Override:
 * These methods must be overridden:
 * searchResultSelected() - Called when the user has selected a search result. You need to call super.selectionChanged(), then
 * update your value from `this.selectedResults`.
 *
 * ```ts
 * protected searchResultSelected() {
 * 	super.searchResultSelected();
 * 	this.value = this.selectedResults[0];
 * }
 * ```
 * Other methods can be overridden if needed.
 *
 * ## Render:
 * ```
 * render() {
 * return html`
 * 	...
 * 	${this.searchInputTemplate()}
 * 	...
 * 	${this.searchResultsTemplate()}
 * 	...
 * `;
 * }
 * Call `searchInputTemplate()` and `searchResultsTemplate()` from your `render()` method
 *
 *
 * @param {T} superClass
 * @returns {Constructor<SearchMixinInterface<DataType, Results>> & T}
 * @constructor
 *
 * @event et2-select - Emitted when the selection changes
 */
exports.SearchMixin = function (superClass) {
    var SearchMixinClass = /** @class */ (function (_super) {
        __extends(SearchMixinClass, _super);
        function SearchMixinClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /**
             * Enable or disable searching
             */
            _this.search = true;
            /**
             * Get [additional] options from the server when you search, instead of just searching in the browser
             */
            _this.searchUrl = "";
            /**
             * Additional search parameters that are passed to the server
             * when we query searchUrl
             */
            _this.searchOptions = {};
            /**
             * Indicates whether the search results are open. You can toggle this attribute to show and hide the results list.
             */
            _this.resultsOpen = false;
            // A search is currently in progress
            _this.searching = false;
            // The component has the focus
            _this.hasFocus = false;
            // For keyboard navigation of search results
            _this.currentResult = null;
            // Search result nodes marked as "selected"
            _this.selectedResults = [];
            // You can set specific class options here.  They will be overridden by searchOptions.
            _this._classSearchOptions = {};
            _this._totalResults = 0;
            _this._searchPromise = Promise.resolve([]);
            _this._searchResults = [];
            _this.handleResultsKeyDown = _this.handleResultsKeyDown.bind(_this);
            _this.handleSuggestionsMouseUp = _this.handleSuggestionsMouseUp.bind(_this);
            return _this;
        }
        Object.defineProperty(SearchMixinClass.prototype, "_searchNode", {
            // Input where user types to filter
            get: function () { return this.shadowRoot.querySelector("#search"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchMixinClass.prototype, "_listNode", {
            // Element where we render the search results
            get: function () { return this.shadowRoot.querySelector("#listbox"); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchMixinClass.prototype, "_resultNodes", {
            get: function () { return this._listNode ? Array.from(this._listNode.querySelectorAll(":scope > :not(div)")) : []; },
            enumerable: false,
            configurable: true
        });
        /**
         * Start searching for results matching what has been typed
         */
        SearchMixinClass.prototype.startSearch = function () {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_e) {
                    // Stop timeout timer
                    clearTimeout(this._searchTimeout);
                    this._totalResults = 0;
                    this._searchResults = [];
                    // Clear current option, it's probably going to go away
                    this.setCurrentResult(null);
                    this.searching = true;
                    this.resultsOpen = true;
                    this.requestUpdate("searching");
                    // Start the searches
                    this._searchPromise = Promise.all([
                        this.localSearch((_b = (_a = this._searchNode) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "", this.searchOptions),
                        this.remoteSearch((_d = (_c = this._searchNode) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "", this.searchOptions)
                    ]).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.searching = false;
                                    this.requestUpdate("searching", true);
                                    if (!this.resultsOpen && this.hasFocus) {
                                        this.resultsOpen = true;
                                        this.requestUpdate("resultsOpen");
                                    }
                                    return [4 /*yield*/, this.updateComplete];
                                case 1:
                                    _a.sent();
                                    this.currentResult = this._resultNodes[0];
                                    return [2 /*return*/, this._searchResults];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        SearchMixinClass.prototype.getValueAsArray = function () {
            if (Array.isArray(this.value)) {
                return this.value;
            }
            if (this.value == "null" || this.value == null || typeof this.value == "undefined" || this.value == "") {
                return [];
            }
            return [this.value];
        };
        /**
         * Check if one of our [local] items matches the search
         *
         * @param search
         * @returns {boolean}
         * @protected
         */
        SearchMixinClass.prototype.searchMatch = function (search, searchOptions, option) {
            var _a;
            if (!option || !option.value ||
                // do NOT return folders, if leafOnly is set
                this.leafOnly && typeof option.children !== 'undefined') {
                return false;
            }
            // Search all string fields
            var searchString = search.toLowerCase();
            var searchFields = ["label", "value", "title"];
            for (var i = 0; i < searchFields.length; i++) {
                var field = searchFields[i];
                if ((_a = option[field]) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchString)) {
                    return true;
                }
            }
            return false;
        };
        /**
         * If you have a local list of options, you can search through them on the client and include them in the results.
         *
         * This is done independently from the server-side search, and the results are merged.
         *
         * @param {string} search
         * @param {object} searchOptions
         * @returns {Promise<any[]>}
         * @protected
         */
        SearchMixinClass.prototype.localSearch = function (search, searchOptions, localOptions) {
            var _this = this;
            if (localOptions === void 0) { localOptions = []; }
            var local = {
                results: [],
                total: 0
            };
            var doSearch = function (options, value) {
                options.forEach(function (option) {
                    if (typeof option !== "object") {
                        return;
                    }
                    if (_this.searchMatch(value, searchOptions, option)) {
                        local.results.push(option);
                        local.total++;
                    }
                    if (typeof option.children != "undefined" && Array.isArray(option.children)) {
                        return doSearch(option.children, value);
                    }
                });
            };
            doSearch(localOptions, search);
            return Promise.resolve(this.processLocalResults(local));
        };
        SearchMixinClass.prototype.remoteSearch = function (search, options) {
            var _this = this;
            // If no searchUrl, no search
            if (!this.searchUrl) {
                return Promise.resolve([]);
            }
            // Include a limit by default to avoid massive lists breaking the UI
            // This can be overridden by setting a different limit in this.searchOptions
            var sendOptions = __assign(__assign({ num_rows: 100 }, this._classSearchOptions), options);
            return this.egw().request(this.egw().link(this.egw().ajaxUrl(this.egw().decodePath(this.searchUrl)), __assign({ query: search }, sendOptions)), [search, sendOptions]).then(function (results) {
                return _this.processRemoteResults(results);
            });
        };
        /**
         * Handle the search results from wherever we got them
         *
         * @param {Results} results
         * @protected
         */
        SearchMixinClass.prototype.processResults = function (results) {
            var _a;
            var _loop_1 = function (i) {
                var entry = results.results[i];
                // Filter to avoid duplicates
                var found = this_1._searchResults.find(function (o) { return o.value == entry.value; });
                if (found) {
                    // Server says it's a match, but it's already a local option
                    found.isMatch = true;
                    results.total--;
                    results.results.splice(i, 1);
                }
            };
            var this_1 = this;
            // Look through results, we may reject some
            for (var i = results.results.length - 1; i >= 0; i--) {
                _loop_1(i);
            }
            (_a = this._searchResults).splice.apply(_a, __spreadArrays([this._searchResults.length, 0], results.results));
            this._totalResults += results.total;
            if (typeof results.message) {
                //this.statustext = results.message;
            }
            this.requestUpdate();
        };
        /**
         * Process local results
         */
        SearchMixinClass.prototype.processLocalResults = function (results) {
            var _a;
            this.processResults(results);
            return (_a = results === null || results === void 0 ? void 0 : results.results) !== null && _a !== void 0 ? _a : [];
        };
        /**
         * Process remote results
         *
         * Any results that already exist will be removed to avoid duplicates
         *
         * @param results
         * @protected
         * @internal
         */
        SearchMixinClass.prototype.processRemoteResults = function (results) {
            var _a;
            this.processResults(results);
            return (_a = results === null || results === void 0 ? void 0 : results.results) !== null && _a !== void 0 ? _a : [];
        };
        /**
         * Sets the current search result, which is the one the user is currently interacting with (e.g. via keyboard).
         * Only one result may be "current" at a time.
         */
        SearchMixinClass.prototype.setCurrentResult = function (result) {
            // Clear selection
            this._resultNodes.forEach(function (el) {
                el.current = false;
                el.tabIndex = -1;
                el.requestUpdate("current");
            });
            // Select the target option
            if (result) {
                this.currentResult = result;
                result.current = true;
                result.tabIndex = 0;
                result.focus();
                result.requestUpdate("current");
            }
        };
        /**
         * Toggles a search result's selected state
         */
        SearchMixinClass.prototype.toggleResultSelection = function (result, force) {
            if (force === true || force === false) {
                result.selected = force;
            }
            else {
                result.selected = !result.selected;
            }
            if (result instanceof lit_1.LitElement) {
                result.requestUpdate("selected");
            }
            this.searchResultSelected();
        };
        /**
         * This method must be called whenever the selection changes. It will update the selected file cache, the current
         * value, and the display value
         */
        SearchMixinClass.prototype.searchResultSelected = function () {
            var _this = this;
            // Update selected files cache
            this.selectedResults = this._resultNodes.filter(function (el) { return el.selected; });
            /**
             * Update the value:
             * eg:
            if(this.multiple && typeof this.value !== "undefined")
            {
                this.value.splice(0, this.value.length, ...this.selectedResults.map(el => el.value));
            }
            else if (typeof this.value !== "undefined")
            {
                this.value.splice(0,this.value.length, ...(this.selectedResults[0]?.value ?? []));
            }
            // Dispatch the change event
            this.updateComplete.then(() =>
            {
                this.dispatchEvent(new Event("change", {bubbles: true}));
            });
             */
            this.updateComplete.then(function () {
                _this.dispatchEvent(new Event("et2-select"));
            });
        };
        /**
         * Keyboard events from the search results list
         *
         * @param {KeyboardEvent} event
         */
        SearchMixinClass.prototype.handleResultsKeyDown = function (event) {
            // Navigate options
            if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                event.stopPropagation();
                var suggestions = this._resultNodes;
                var currentIndex = suggestions.indexOf(this.currentResult);
                var newIndex = Math.max(0, currentIndex);
                // Prevent scrolling
                event.preventDefault();
                if (event.key === "ArrowDown") {
                    newIndex = currentIndex + 1;
                    if (newIndex > suggestions.length - 1) {
                        newIndex = suggestions.length - 1;
                    }
                }
                else if (event.key === "ArrowUp") {
                    newIndex = currentIndex - 1;
                    if (newIndex < 0) {
                        this.setCurrentResult(null);
                        this._searchNode.focus();
                    }
                }
                else if (event.key === "Home") {
                    newIndex = 0;
                }
                else if (event.key === "End") {
                    newIndex = suggestions.length - 1;
                }
                this.setCurrentResult(suggestions[newIndex]);
            }
            // Close results on escape
            else if (["Escape", "Tab"].includes(event.key)) {
                this.resultsOpen = false;
                this._searchNode.focus();
            }
            else if ([" ", "Enter"].includes(event.key) && this.currentResult) {
                event.preventDefault();
                this.toggleResultSelection(this.currentResult, true);
                this.searchResultSelected();
            }
        };
        SearchMixinClass.prototype.handleSearchKeyDown = function (event) {
            var _this = this;
            clearTimeout(this._searchTimeout);
            // Tab on empty leaves
            if (this._searchNode.value == "" && event.key == "Tab") {
                // Propagate, browser will do its thing
                return;
            }
            // Up / Down navigates options
            if (['ArrowDown', 'ArrowUp'].includes(event.key) && this._searchResults.length) {
                if (!this.resultsOpen) {
                    this.resultsOpen = true;
                    this.requestUpdate("resultsOpen", false);
                }
                event.stopPropagation();
                this.setCurrentResult(this.currentResult && this.contains(this.currentResult) ?
                    this.currentResult : this._resultNodes[0]);
                return;
            }
            // Start search immediately
            else if (event.key == "Enter") {
                event.preventDefault();
                this.startSearch();
                return;
            }
            else if (event.key == "Escape") {
                this.resultsOpen = false;
                this.requestUpdate("resultsOpen", true);
                event.stopPropagation();
                return;
            }
            // Start the search automatically if they have enough letters
            if (this._searchNode.value.length > 0) {
                this._searchTimeout = window.setTimeout(function () { _this.startSearch(); }, 500);
            }
        };
        /**
         * Mouse up from the suggestion list
         * @param event
         */
        SearchMixinClass.prototype.handleSuggestionsMouseUp = function (event) {
            var target = event.target;
            if (typeof (target === null || target === void 0 ? void 0 : target.value) == "undefined") {
                return;
            }
            this.toggleResultSelection(target);
            this._searchNode.value = "";
        };
        /**
         * Show all the search results
         * Include this in your render()
         *
         * @returns {TemplateResult<1>}
         * @protected
         */
        SearchMixinClass.prototype.searchResultsTemplate = function () {
            return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                <div\n                        id=\"listbox\"\n                        role=\"listbox\"\n                        aria-expanded=", "\n                        aria-labelledby=\"label\"\n                        part=\"listbox\"\n                        class=\"search__results\"\n                        tabindex=\"-1\"\n                        @keydown=", "\n                        @mouseup=", "\n                >\n                    ", "\n                </div>"], ["\n                <div\n                        id=\"listbox\"\n                        role=\"listbox\"\n                        aria-expanded=", "\n                        aria-labelledby=\"label\"\n                        part=\"listbox\"\n                        class=\"search__results\"\n                        tabindex=\"-1\"\n                        @keydown=", "\n                        @mouseup=", "\n                >\n                    ", "\n                </div>"])), this.resultsOpen ? 'true' : 'false', this.handleResultsKeyDown, this.handleSuggestionsMouseUp, this.resultsTemplate());
        };
        SearchMixinClass.prototype.searchInputTemplate = function () {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <input id=\"search\" type=\"text\" part=\"input\"\n                       class=\"search__input\"\n                       autocomplete=\"do-not-autocomplete-", "\"\n                       ?disabled=", "\n                       ?readonly=", "\n                       placeholder=\"", "\"\n                       tabindex=\"0\"\n                       @keydown=", "\n                />\n\t\t\t"], ["\n                <input id=\"search\" type=\"text\" part=\"input\"\n                       class=\"search__input\"\n                       autocomplete=\"do-not-autocomplete-", "\"\n                       ?disabled=", "\n                       ?readonly=", "\n                       placeholder=\"", "\"\n                       tabindex=\"0\"\n                       @keydown=", "\n                />\n\t\t\t"])), Date.now().toString(36), this.disabled, this.readonly, this.hasFocus || this.value && this.value.length > 0 || this.disabled || this.readonly ? "" : this['placeholder'], this.handleSearchKeyDown);
        };
        SearchMixinClass.prototype.resultsTemplate = function () {
            var _this = this;
            var empty = this._searchResults.length == 0;
            var promise = this._searchPromise.then(function () {
                return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    ", ""], ["\n                    ",
                    ""])), empty ? _this.noResultsTemplate() : lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                        ", "\n                        ", "\n                    "], ["\n                        ", "\n                        ", "\n                    "])), repeat_js_1.repeat(_this._searchResults, function (result) { return result.value; }, function (result, index) { return _this.resultTemplate(result, index); }), until_js_1.until(_this.moreResultsTemplate(), lit_1.nothing)));
            });
            return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                ", ""], ["\n                ",
                ""])), until_js_1.until(promise, lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    <div class=\"search__loading\">\n                        <sl-spinner></sl-spinner>\n                    </div>"], ["\n                    <div class=\"search__loading\">\n                        <sl-spinner></sl-spinner>\n                    </div>"])))));
        };
        SearchMixinClass.prototype.resultTemplate = function (result, index) {
            // Exclude non-matches when searching
            // unless they're already selected, in which case removing them removes them from value
            if (typeof result.isMatch == "boolean" && !result.isMatch && !this.getValueAsArray().includes(result.value)) {
                return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
            }
            // We pass the DataType object along so SearchMixin can grab it if needed
            var value = result.value.replaceAll(" ", "___");
            var classes = result.class ? Object.fromEntries((result.class).split(" ").map(function (k) { return [k, true]; })) : {};
            return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                <sl-option\n                        part=\"option\"\n                        exportparts=\"prefix:tag__prefix, suffix:tag__suffix\"\n                        value=\"", "\"\n                        title=\"", "\"\n                        class=", "\n                        .value=", "\n                        .option=", "\n                        .selected=", "\n                        ?disabled=", "\n                >\n                    ", "\n                    ", "\n                </sl-option>"], ["\n                <sl-option\n                        part=\"option\"\n                        exportparts=\"prefix:tag__prefix, suffix:tag__suffix\"\n                        value=\"", "\"\n                        title=\"", "\"\n                        class=",
                "\n                        .value=", "\n                        .option=", "\n                        .selected=", "\n                        ?disabled=", "\n                >\n                    ", "\n                    ", "\n                </sl-option>"])), value, !result.title || this.noLang ? result.title : this.egw().lang(result.title), class_map_js_1.classMap({
                "match": this.search && (result.isMatch || false),
                "no-match": this.search && result.isMatch == false,
                ...classes
            }), result.value, result, this.getValueAsArray().some(function (v) { return v == value; }), result.disabled, this.iconTemplate(result), this.noLang ? result.label : this.egw().lang(result.label));
        };
        /**
         * Get the icon template for a given result
         *
         * @param option
         * @protected
         */
        SearchMixinClass.prototype.iconTemplate = function (option) {
            if (!option.icon) {
                return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""])));
            }
            return lit_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                <et2-image slot=\"prefix\" part=\"icon\" src=\"", "\"></et2-image>"], ["\n                <et2-image slot=\"prefix\" part=\"icon\" src=\"", "\"></et2-image>"])), option.icon);
        };
        SearchMixinClass.prototype.noResultsTemplate = function () {
            return lit_1.html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                <div class=\"search__empty\">\n                    <!--<et2-image src=\"logo\"></et2-image>-->\n                    ", "\n                </div>"], ["\n                <div class=\"search__empty\">\n                    <!--<et2-image src=\"logo\"></et2-image>-->\n                    ", "\n                </div>"])), this.egw().lang("no results match"));
        };
        SearchMixinClass.prototype.moreResultsTemplate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this._totalResults <= 0 || !this._searchPromise || !this._listNode) {
                        return [2 /*return*/, lit_1.nothing];
                    }
                    return [2 /*return*/, this._searchPromise.then(function () {
                            var moreCount = _this._totalResults - _this._searchResults.length;
                            var more = _this.egw().lang("%1 more...", moreCount);
                            return lit_1.html(templateObject_13 || (templateObject_13 = __makeTemplateObject(["", ""], ["",
                                ""])), moreCount > 0 ? lit_1.html(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                                  <div class=\"search__more\">", "</div>"], ["\n                                  <div class=\"search__more\">", "</div>"])), more) : lit_1.nothing);
                        })];
                });
            });
        };
        __decorate([
            property_js_1.property({ type: Boolean })
        ], SearchMixinClass.prototype, "search", void 0);
        __decorate([
            property_js_1.property()
        ], SearchMixinClass.prototype, "searchUrl", void 0);
        __decorate([
            property_js_1.property({ type: Object })
        ], SearchMixinClass.prototype, "searchOptions", void 0);
        __decorate([
            property_js_1.property({ type: Boolean, reflect: true })
        ], SearchMixinClass.prototype, "resultsOpen", void 0);
        __decorate([
            state_js_1.state()
        ], SearchMixinClass.prototype, "searching", void 0);
        __decorate([
            state_js_1.state()
        ], SearchMixinClass.prototype, "hasFocus", void 0);
        __decorate([
            state_js_1.state()
        ], SearchMixinClass.prototype, "currentResult", void 0);
        __decorate([
            state_js_1.state()
        ], SearchMixinClass.prototype, "selectedResults", void 0);
        return SearchMixinClass;
    }(superClass));
    ;
    return SearchMixinClass;
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
