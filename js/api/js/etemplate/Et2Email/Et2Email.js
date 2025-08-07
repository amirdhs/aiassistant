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
exports.Et2Email = void 0;
/**
 * EGroupware eTemplate2 - Email WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var style_map_js_1 = require("lit/directives/style-map.js");
var keyed_js_1 = require("lit/directives/keyed.js");
var live_js_1 = require("lit/directives/live.js");
var map_js_1 = require("lit/directives/map.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var slot_1 = require("../Et2Widget/slot");
var shoelace_1 = require("../Styles/shoelace");
var Et2EmailTag_1 = require("../Et2Select/Tag/Et2EmailTag");
var event_1 = require("../Et2Widget/event");
var Et2Email_styles_1 = require("./Et2Email.styles");
var IsEmail_1 = require("../Validators/IsEmail");
var sortable_complete_esm_js_1 = require("sortablejs/modular/sortable.complete.esm.js");
/**
 * @summary Enter email addresses, offering suggestions from contacts
 * @since 23.1
 *
 * @dependency sl-icon
 * @dependency sl-popup
 * @dependency et2-email-tag
 * @dependency et2-textbox
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Like prefix, but after
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the control's value changes.
 * @event sl-input - Emitted when the control receives input.
 * @event sl-focus - Emitted when the control gains focus.
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-show - Emitted when the suggestion menu opens.
 * @event sl-after-show - Emitted after the suggestion menu opens and all animations are complete.
 * @event sl-hide - Emitted when the suggestion menu closes.
 * @event sl-after-hide - Emitted after the suggestion menu closes and all animations are complete.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The textbox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The visible part of the control that is not the listbox - tags, input, prefix & suffix
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart listbox - The listbox container where suggestions are slotted.
 * @csspart input - The input element
 * @csspart option - Each matching email address suggestion
 * @csspart tag - The individual tags that represent each email address.
 *
 * @cssproperty [--height=5] - The maximum height of the widget, to limit size when you have a lot of addresses.  Set by rows property, when set.
 */
var Et2Email = /** @class */ (function (_super) {
    __extends(Et2Email, _super);
    function Et2Email() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        /**
         * The current value of the component, an array of valid email addresses.
         * If allowPlaceholder=true, placeholders are also allowed
         */
        _this.value = [];
        /** Placeholder text to show as a hint when the select is empty. */
        _this.placeholder = '';
        /** Allow drag and drop tags between two or more Et2Email widgets */
        _this.allowDragAndDrop = true;
        /** The component's help text. If you need to display HTML, use the `help-text` slot instead. */
        _this.helpText = '';
        /**
         * Indicates whether the suggestions are open. You can toggle this attribute to show and hide the menu, or you can
         * use the `show()` and `hide()` methods and this attribute will reflect the suggestion open state.
         */
        _this.open = false;
        /**
         * Custom search options, passed to the searchUrl along with the search text
         *
         * @type {{includeLists : boolean}}
         */
        _this.searchOptions = { includeLists: true };
        /**
         * Server-side search for suggested email addresses.
         * Set to "" to cancel searching.
         * @type {string}
         */
        _this.searchUrl = "EGroupware\\Api\\Etemplate\\Widget\\Taglist::ajax_email";
        _this.searching = false;
        _this.hasFocus = false;
        /** If the select is limited to 1 row, we show the number of tags not visible */
        _this._tagsHidden = 0;
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'label');
        /** User preference to immediately close the search results after selecting a match
         * @internal
         */
        _this._close_on_select = true;
        _this._searchPromise = Promise.resolve([]);
        _this._selectOptions = [];
        // Overflow Observer for +# display
        _this.tagOverflowObserver = null;
        /**
         * Focus has gone somewhere else
         * @param {MouseEvent} event
         */
        _this.handleLostFocus = function (event) {
            // Close when clicking outside of the component
            var path = event.composedPath();
            if (_this && !path.includes(_this)) {
                _this.hide();
            }
        };
        _this.defaultValidators.push(new IsEmail_1.IsEmail(_this.allowPlaceholder));
        // Set email display to preference, will be overridden by template attribute
        _this.emailDisplay = _this._getEmailDisplayPreference();
        // Additional option for select email, per ticket #79694
        _this._close_on_select = _this.egw().preference("select_multiple_close") != "open";
        _this.handleOpenChange = _this.handleOpenChange.bind(_this);
        _this.handleLostFocus = _this.handleLostFocus.bind(_this);
        _this.handleSortEnd = _this.handleSortEnd.bind(_this);
        _this.handleTagOverflow = _this.handleTagOverflow.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Email, "styles", {
        get: function () {
            return __spreadArrays([
                shoelace_1.default
            ], _super.styles, [
                Et2Email_styles_1.default
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Email.prototype, "_popup", {
        get: function () { return this.shadowRoot.querySelector("sl-popup"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Email.prototype, "_listbox", {
        get: function () { return this.shadowRoot.querySelector("#listbox"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Email.prototype, "_search", {
        get: function () { return this.shadowRoot.querySelector("#search"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Email.prototype, "_tags", {
        get: function () { return Array.from(this.shadowRoot.querySelectorAll("et2-email-tag")); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Email.prototype, "_suggestions", {
        get: function () { return Array.from(this.shadowRoot.querySelectorAll("sl-option")); },
        enumerable: false,
        configurable: true
    });
    Et2Email.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.open = false;
        this._valueUID = this.egw().uid();
        this.updateComplete.then(function () { return _this.makeSortable(); });
        document.addEventListener('focusin', this.handleLostFocus);
    };
    Et2Email.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._sortable) {
            this._sortable.destroy();
        }
        document.removeEventListener('focusin', this.handleLostFocus);
    };
    Et2Email.prototype.set_value = function (_value) {
        if (!Array.isArray(_value)) {
            this.value = parseEmailsString(_value, this.allowPlaceholder);
        }
        else {
            this.value = _value;
        }
        this._valueUID = this.egw().uid();
        this.requestUpdate("value");
    };
    Et2Email.prototype.willUpdate = function (changedProperties) {
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has('allowPlaceholder')) {
            this.defaultValidators = this.defaultValidators.filter(function (v) { return !(v instanceof IsEmail_1.IsEmail); });
            this.defaultValidators.push(new IsEmail_1.IsEmail(this.allowPlaceholder));
        }
    };
    Et2Email.prototype.update = function (changedProperties) {
        _super.prototype.update.call(this, changedProperties);
        if (changedProperties.has("open")) {
            this.handleOpenChange();
        }
    };
    Et2Email.prototype.firstUpdated = function (changedProperties) {
        _super.prototype.firstUpdated.call(this, changedProperties);
        // Make sure validators reflect allowPlaceholder, in case it's not caught by willUpdate()
        this.defaultValidators = this.defaultValidators.filter(function (v) { return !(v instanceof IsEmail_1.IsEmail); });
        this.defaultValidators.push(new IsEmail_1.IsEmail(this.allowPlaceholder));
    };
    Et2Email.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        // Re-set sorting / drag & drop
        if (changedProperties.has("value")) {
            this.makeSortable();
        }
        this.checkTagOverflow();
    };
    Et2Email.prototype._getEmailDisplayPreference = function () {
        var _a;
        var pref = (_a = this.egw().preference("emailTag", "mail")) !== null && _a !== void 0 ? _a : "";
        switch (pref) {
            case "fullemail":
                return "full";
            default:
            case "onlyname":
                return "name";
            case "onlyemail":
                return "email";
            case "domain":
                return "domain";
        }
    };
    Et2Email.prototype.addOpenListeners = function () {
        document.addEventListener('mousedown', this.handleLostFocus);
    };
    Et2Email.prototype.removeOpenListeners = function () {
        document.removeEventListener('mousedown', this.handleLostFocus);
    };
    Et2Email.prototype.makeSortable = function () {
        if (this._sortable) {
            this._sortable.destroy();
        }
        if (!this.allowDragAndDrop) {
            this.classList.remove("et2-sortable-email");
            return;
        }
        this.classList.add("et2-sortable-email");
        var pull = !this.disabled && !this.readonly;
        if (this.readonly && !this.disabled) {
            pull = 'clone';
        }
        this._sortable = sortable_complete_esm_js_1.default.create(this.shadowRoot.querySelector('.email__combobox'), {
            draggable: "et2-email-tag",
            group: {
                name: "email",
                pull: pull,
                put: !(this.readonly || this.disabled)
            },
            onEnd: this.handleSortEnd
        });
    };
    /**
     * Sets the current suggestion, which is the option the user is currently interacting with (e.g. via keyboard).
     * Only one option may be "current" at a time.
     */
    Et2Email.prototype.setCurrentOption = function (option) {
        // Clear selection
        this._suggestions.forEach(function (el) {
            el.current = false;
            el.tabIndex = -1;
        });
        // Select the target option
        this.currentOption = option;
        if (option) {
            option.current = true;
            option.tabIndex = 0;
            option.focus();
        }
    };
    Et2Email.prototype.setCurrentTag = function (tag) {
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
    Et2Email.prototype.checkTagOverflow = function () {
        var _this = this;
        // Create / destroy intersection observer
        if (this.readonly && this.rows == "1" && this.tagOverflowObserver == null) {
            this.tagOverflowObserver = new IntersectionObserver(this.handleTagOverflow, {
                root: this.shadowRoot.querySelector(".email__combobox"),
                threshold: 0.1
            });
        }
        else if ((!this.readonly || this.rows !== 1) && this.tagOverflowObserver !== null) {
            this.tagOverflowObserver.disconnect();
            this.tagOverflowObserver = null;
        }
        if (this.tagOverflowObserver) {
            this.updateComplete.then(function () {
                for (var _i = 0, _a = Array.from(_this.shadowRoot.querySelectorAll(".email__combobox et2-email-tag")); _i < _a.length; _i++) {
                    var tag = _a[_i];
                    _this.tagOverflowObserver.observe(tag);
                }
            });
        }
    };
    /**
     * Create an entry that is not in the suggestions and add it to the value
     *
     * @param {string} text Used as both value and label
     */
    Et2Email.prototype.addAddress = function (text) {
        if (!text || !this.validateAddress(text)) {
            return false;
        }
        // Make sure not to double-add
        if (!this.value.includes(text.replace(/'/g, "\\\'"))) {
            this.value.push(text.trim());
            this.requestUpdate('value');
        }
        this.dispatchEvent(new Event("change", { bubbles: true }));
        return true;
    };
    /**
     * Check if a free entry value is acceptable.
     * We use validators directly using the proposed value
     *
     * @param text
     * @returns {boolean}
     */
    Et2Email.prototype.validateAddress = function (text) {
        var _this = this;
        var validators = __spreadArrays(this.validators, this.defaultValidators);
        var result = validators.filter(function (v) {
            return v.execute(text, v.param, { node: _this });
        });
        return validators.length > 0 && result.length == 0 || validators.length == 0;
    };
    /** Sets focus on the control. */
    Et2Email.prototype.focus = function (options) {
        this.hasFocus = true;
        // Should not be needed, but not firing the update
        this.requestUpdate("hasFocus");
        if (this._search) {
            this._search.focus(options);
        }
    };
    /** Removes focus from the control. */
    Et2Email.prototype.blur = function () {
        this.open = false;
        this.hasFocus = false;
        // Should not be needed, but not firing the update
        this.requestUpdate("open");
        this.requestUpdate("hasFocus");
        this._search.blur();
        clearTimeout(this._searchTimeout);
    };
    /** Shows the listbox. */
    Et2Email.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.open || this.disabled) {
                    this.open = false;
                    this.requestUpdate("open", true);
                    return [2 /*return*/, undefined];
                }
                this.open = true;
                this.requestUpdate("open", false);
                return [2 /*return*/, event_1.waitForEvent(this, 'sl-after-show')];
            });
        });
    };
    /** Hides the listbox. */
    Et2Email.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.open || this.disabled) {
                    return [2 /*return*/, undefined];
                }
                this.open = false;
                this.requestUpdate("open");
                return [2 /*return*/, event_1.waitForEvent(this, 'sl-after-hide')];
            });
        });
    };
    /**
     * Start searching for contacts matching what has been typed
     */
    Et2Email.prototype.startSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Stop timeout timer
                clearTimeout(this._searchTimeout);
                // Clear current option, it's probably going to go away
                this.setCurrentOption(null);
                // If no searchUrl, no search
                if (!this.searchUrl) {
                    return [2 /*return*/];
                }
                this.searching = true;
                this.requestUpdate("searching");
                // Start the searches
                this._searchPromise = this.remoteSearch(this._search.value, this.searchOptions);
                return [2 /*return*/, this._searchPromise.then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.searching = false;
                                    this.requestUpdate("searching", true);
                                    if (!this.open && this.hasFocus) {
                                        this.show();
                                    }
                                    return [4 /*yield*/, this.updateComplete];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
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
     *
     * @param {string} search
     * @param {object} options
     * @returns Promise<SelectOption[]>
     * @protected
     * @internal
     */
    Et2Email.prototype.remoteSearch = function (search, options) {
        var _this = this;
        // Include a limit, even if options don't, to avoid massive lists breaking the UI
        var sendOptions = __assign({ num_rows: 10 }, options);
        return this.egw().request(this.egw().link(this.egw().ajaxUrl(this.egw().decodePath(this.searchUrl)), __assign({ query: search }, sendOptions)), [search, sendOptions]).then(function (results) {
            return _this.processRemoteResults(results);
        });
    };
    /**
     * Add in remote results
     *
     * Any results that already exist will be removed to avoid duplicates
     *
     * @param results
     * @protected
     * @internal
     */
    Et2Email.prototype.processRemoteResults = function (entries) {
        var _this = this;
        this._selectOptions = entries;
        this.updateComplete.then(function () {
            _this.currentOption = _this._suggestions[0];
        });
        this.requestUpdate();
        return entries;
    };
    /**
     * The end of a sort, either internal or between widgets that deal with email
     *
     * @param event
     * @protected
     * @internal
     */
    Et2Email.prototype.handleSortEnd = function (event) {
        var _a, _b, _c, _d, _e;
        if (this.disabled || this.readonly || !((_a = event.item) === null || _a === void 0 ? void 0 : _a.value) || !this.validateAddress(event.item.value) ||
            // No real change
            event.from === event.to && event.oldDraggableIndex == event.newDraggableIndex) {
            return;
        }
        var tag = event.item;
        var from = sortable_complete_esm_js_1.default.utils.closest(event.from, "et2-email, .et2-sortable-email");
        var to = sortable_complete_esm_js_1.default.utils.closest(event.to, "et2-email, .et2-sortable-email");
        if (from == this) {
            var index = this.value.indexOf(tag.value);
            if (index > -1) {
                this.value.splice(index, 1);
            }
            // Reset focus
            /*
            if(typeof from.focus == "function")
            {
                this.updateComplete.then(() =>
                {
                    from.focus();
                });
            }
             */
            // Update key to force Lit to redraw tags
            this._valueUID = (_c = (_b = this.egw()) === null || _b === void 0 ? void 0 : _b.uid()) !== null && _c !== void 0 ? _c : new Date().toISOString();
        }
        if (to === this) {
            var targetIndex = typeof event.newDraggableIndex == "number" ? event.newDraggableIndex : this.value.length;
            this.value.splice(targetIndex, 0, tag.value);
            // Update key to force Lit to redraw tags
            this._valueUID = (_e = (_d = this.egw()) === null || _d === void 0 ? void 0 : _d.uid()) !== null && _e !== void 0 ? _e : new Date().toISOString();
        }
        else if (typeof to.handleSortEnd == "function") {
            to.handleSortEnd(event);
        }
        // Remove tag to avoid occasional duplication
        tag.remove();
        this.requestUpdate("value");
    };
    Et2Email.prototype.handleOpenChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.open && !this.disabled) {
                    // Reset the current option
                    this.setCurrentOption(this._suggestions[0]);
                    // Show
                    this.dispatchEvent(new CustomEvent('sl-show', { bubbles: true }));
                    this.addOpenListeners();
                    this._listbox.hidden = false;
                    this._popup.active = true;
                    // Make sure the current option is scrolled into view (required for Safari)
                    if (this.currentOption) {
                        this.currentOption.scrollIntoView();
                    }
                    this.dispatchEvent(new CustomEvent('sl-after-show', { bubbles: true }));
                }
                else {
                    // Hide
                    this.dispatchEvent(new CustomEvent('sl-hide', { bubbles: true }));
                    this.removeOpenListeners();
                    this._listbox.hidden = true;
                    this._popup.active = false;
                    this.dispatchEvent(new CustomEvent('sl-after-hide', { bubbles: true }));
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Callback for the intersection observer so we know when tags don't fit
     *
     * Here we set the flag to show how many more tags are hidden, but this only happens
     * when there are more tags than space.
     *
     * @param entries
     * @protected
     */
    Et2Email.prototype.handleTagOverflow = function (entries) {
        var oldCount = this._tagsHidden;
        var visibleTagCount = this.value.length - this._tagsHidden;
        var update = false;
        // If we have all tags, start from 0, otherwise it's just a change
        if (entries.length == this.value.length) {
            visibleTagCount = 0;
        }
        else {
            update = true;
        }
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var tag = entries_1[_i];
            if (tag.isIntersecting) {
                visibleTagCount++;
            }
            else if (update && !tag.isIntersecting) {
                visibleTagCount--;
            }
            else {
                break;
            }
        }
        if (visibleTagCount && visibleTagCount < this.value.length) {
            this._tagsHidden = this.value.length - visibleTagCount;
        }
        else {
            this._tagsHidden = 0;
        }
        this.requestUpdate("_tagsHidden", oldCount);
    };
    /**
     * Sometimes users paste multiple comma separated values at once.  Split them then handle normally.
     * Overridden here to handle email addresses that may have commas using the regex from the validator.
     *
     * @param {ClipboardEvent} event
     * @protected
     */
    Et2Email.prototype.handlePaste = function (event) {
        var _this = this;
        var _a, _b;
        event.preventDefault();
        var paste = event.clipboardData.getData('text');
        if (!paste) {
            return;
        }
        var selection = window.getSelection();
        if (selection.rangeCount) {
            selection.deleteFromDocument();
        }
        var values = parseEmailsString(paste, this.allowPlaceholder);
        if (values) {
            values.forEach(function (v) {
                _this.addAddress(v.trim());
            });
            this.hide();
            // Update key to force Lit to redraw tags
            this._valueUID = (_b = (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.uid()) !== null && _b !== void 0 ? _b : new Date().toISOString();
            this.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };
    Et2Email.prototype.handleSearchFocus = function () {
        // Clear any manual message (errors on invalid search text)
        this.set_validation_error(false);
        this.hasFocus = true;
        // Should not be needed, but not firing the update
        this.requestUpdate("hasFocus");
        // Reset tags to not take focus
        this.setCurrentTag(null);
        this._search.setSelectionRange(this._search.value.length, this._search.value.length);
    };
    Et2Email.prototype.handleSearchBlur = function (event) {
        this.hasFocus = false;
        // Should not be needed, but not firing the update
        this.requestUpdate("hasFocus");
        // If they had something OK typed, use it, but only if focus went outside Et2Email
        // because maybe they clicked an option which took focus
        if (event.composedPath().includes(this)) {
            if (this.addAddress(this._search.value.trim())) {
                this._search.value = "";
                this.dispatchEvent(new Event("change", { bubbles: true }));
            }
            else if (this._search.value) {
                // Invalid input, show message.  Not part of the value, so normal validation doesn't apply
                // Can't just call this.validate(), it will get cleared immediately
                this.set_validation_error(this.egw().lang("Invalid email") + ' "' + this._search.value + '"');
            }
        }
    };
    Et2Email.prototype.handleSearchKeyDown = function (event) {
        var _this = this;
        clearTimeout(this._searchTimeout);
        // Left at beginning goes to tags
        if (this._search.selectionStart == 0 && event.key == "ArrowLeft") {
            this.hide();
            this._tags.forEach(function (t) { return t.tabIndex = 0; });
            if (this._tags.length > 0) {
                this.setCurrentTag(this._tags[this._tags.length - 1]);
            }
            event.stopPropagation();
            return;
        }
        // Tab on empty leaves
        if (this._search.value == "" && event.key == "Tab") {
            // Propagate, browser will do its thing
            return;
        }
        // Up / Down navigates options
        if (['ArrowDown', 'ArrowUp'].includes(event.key) && this._suggestions.length) {
            if (!this.open) {
                return this.show();
            }
            return this.handleSuggestionsKeyDown(event);
        }
        // Tab or enter checks current value
        else if (Et2Email.TAG_BREAK.indexOf(event.key) !== -1) {
            // Check for valid email or current selection
            if (!this.validateAddress(this._search.value.trim()) &&
                this.currentOption && this.currentOption.value.toLowerCase().includes(this._search.value.toLowerCase())) {
                this._search.value = this.currentOption.value.replaceAll("___", " ");
            }
            if (this.addAddress(this._search.value.trim())) {
                this.open = false;
                this._search.value = "";
                this.dispatchEvent(new Event("change", { bubbles: true }));
            }
            if (event.key == "Tab") {
                this.blur();
                // Allow tab to change the focus
            }
            else {
                // Don't want the key to do its normal thing
                event.stopPropagation();
                event.preventDefault();
            }
        }
        // Start search immediately
        else if (event.key == "Enter") {
            event.preventDefault();
            this.startSearch();
            return;
        }
        else if (event.key == "Escape") {
            this._selectOptions = [];
            this.hide();
            return;
        }
        // Start the search automatically if they have enough letters
        // -1 because we're in keyDown handler, and value is from _before_ this key was pressed
        if (this._search.value.length - 1 > 0) {
            this._searchTimeout = window.setTimeout(function () { _this.startSearch(); }, Et2Email.SEARCH_TIMEOUT);
        }
    };
    Et2Email.prototype.handleLabelClick = function () {
        this._search.focus();
    };
    /**
     * Keyboard events that the search input did not grab
     * (tags, otion navigation)
     *
     * @param {KeyboardEvent} event
     */
    Et2Email.prototype.handleComboboxKeyDown = function (event) {
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
                this._search.focus();
            }
            event.stopPropagation();
            return false;
        }
        // Remove tag
        if (event.target instanceof Et2EmailTag_1.Et2EmailTag && ["Delete", "Backspace"].includes(event.key)) {
            var tags = this._tags;
            var index = tags.indexOf(event.target);
            event.target.dispatchEvent(new CustomEvent('sl-remove', { bubbles: true }));
            index += event.key == "Delete" ? 1 : -1;
            if (index >= 0 && index < tags.length) {
                this.setCurrentTag(this._tags[index]);
            }
            else {
                this._search.focus();
            }
        }
        // Edit tag
        else if (event.target instanceof Et2EmailTag_1.Et2EmailTag && ["Enter"].includes(event.key)) {
            event.target.startEdit();
        }
    };
    /**
     * If rows=1 and multiple=true, when they put the mouse over the widget show all tags
     * @param {MouseEvent} e
     * @private
     */
    Et2Email.prototype.handleMouseEnter = function (e) {
        if (this.rows == "1" && this.value.length > 1) {
            e.stopPropagation();
            // Bind to turn this all off
            this.addEventListener("mouseleave", this.handleMouseLeave);
            this.classList.add("hover");
            this.requestUpdate();
        }
    };
    /**
     * If we're showing all rows because of _handleMouseEnter, reset when mouse leaves
     * @param {MouseEvent} e
     * @private
     */
    Et2Email.prototype.handleMouseLeave = function (e) {
        this.classList.remove("hover");
        this.requestUpdate();
    };
    /**
     * Keyboard events from the suggestion list
     *
     * @param {KeyboardEvent} event
     */
    Et2Email.prototype.handleSuggestionsKeyDown = function (event) {
        // Select the option
        if (this.currentOption && __spreadArrays(["ArrowRight", " "], Et2Email.TAG_BREAK).includes(event.key) &&
            this.addAddress(this.currentOption.value.replaceAll("___", " "))) {
            if (this._close_on_select) {
                this.open = false;
            }
            this._search.focus();
            this._search.value = "";
            if (event.key !== "Tab") {
                event.stopPropagation();
                event.preventDefault();
            }
            return;
        }
        // Navigate options
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
            event.stopPropagation();
            var suggestions = this._suggestions;
            var currentIndex = suggestions.indexOf(this.currentOption);
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
                    this.setCurrentOption(null);
                    this._search.focus();
                }
            }
            else if (event.key === "Home") {
                newIndex = 0;
            }
            else if (event.key === "End") {
                newIndex = suggestions.length - 1;
            }
            this.setCurrentOption(suggestions[newIndex]);
        }
        else if (["Escape"]) {
            this.open = false;
            this._search.focus();
        }
    };
    /**
     * Mouse up from the suggestion list
     * @param event
     */
    Et2Email.prototype.handleSuggestionsMouseUp = function (event) {
        if (typeof event.target.value == "undefined") {
            return;
        }
        var value = (event.target.value).replaceAll("___", " ");
        this.addAddress(value);
        this._search.value = "";
        this._search.focus();
        this.requestUpdate("value");
        this.dispatchEvent(new Event("change", { bubbles: true }));
        if (this._close_on_select) {
            this.open = false;
        }
    };
    Et2Email.prototype.handleTagChange = function (event) {
        // Need to update our value, or it will just redo the tag with the old value
        if (event.originalValue && this.value.includes(event.originalValue)) {
            var index = this.value.indexOf(event.originalValue);
            this.value[index] = event.target.value;
            this.requestUpdate();
            this.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (event.target.current) {
            this.setCurrentTag(event.target);
        }
    };
    Et2Email.prototype.handleTagRemove = function (event, value) {
        event.stopPropagation();
        // Find the tag value and remove it from current value
        var index = this.value.indexOf(value);
        this.value.splice(index, 1);
        this._valueUID = this.egw().uid();
        this.requestUpdate("value");
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };
    /* Sub-template when [readonly][rows=1] to show all tags in current value in popup */
    Et2Email.prototype.readonlyHoverTemplate = function () {
        if (!this.classList.contains("hover")) {
            return lit_1.nothing;
        }
        // Offset distance to open _over_ the rest
        var distance = (-1 * parseInt(getComputedStyle(this).height)) + 1;
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <sl-popup\n                    active\n                    anchor=", "\n                    auto-size=\"both\"\n                    class=\"hover__popup details hoist details__body\"\n                    distance=", "\n                    placement=\"bottom\"\n                    sync=\"width\"\n            >\n                ", "\n            </sl-popup>\n\t\t"], ["\n            <sl-popup\n                    active\n                    anchor=", "\n                    auto-size=\"both\"\n                    class=\"hover__popup details hoist details__body\"\n                    distance=", "\n                    placement=\"bottom\"\n                    sync=\"width\"\n            >\n                ", "\n            </sl-popup>\n\t\t"])), this, distance, this.tagsTemplate());
    };
    Et2Email.prototype.tagsTemplate = function () {
        var _this = this;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), keyed_js_1.keyed(this._valueUID, map_js_1.map(this.value, function (value, index) { return _this.tagTemplate(value); })));
    };
    Et2Email.prototype.tagTemplate = function (value) {
        var _this = this;
        var _a;
        var readonly = (this.readonly || this.disabled);
        var isEditable = !readonly;
        var isValid = this.validateAddress(value);
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <et2-email-tag\n                    exportparts=\"image\"\n                    part=\"tag\"\n                    class=", "\n                    variant=", "\n                    .emailDisplay=", "\n                    .value=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    ?editable=", "\n                    @sl-remove=", "\n                    @mousedown=", "\n                    @dblclick=", "\n                    @change=", "\n            >\n            </et2-email-tag>"], ["\n            <et2-email-tag\n                    exportparts=\"image\"\n                    part=\"tag\"\n                    class=",
            "\n                    variant=", "\n                    .emailDisplay=", "\n                    .value=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    ?editable=", "\n                    @sl-remove=", "\n                    @mousedown=", "\n                    @dblclick=", "\n                    @change=", "\n            >\n            </et2-email-tag>"])), class_map_js_1.classMap({
            "et2-select-draggable": !this.readonly && this.allowDragAndDrop,
        }), this.isValid ? lit_1.nothing : "danger", (_a = this.emailDisplay) !== null && _a !== void 0 ? _a : lit_1.nothing, live_js_1.live(value), !readonly, readonly, isEditable, function (e) { return _this.handleTagRemove(e, value); }, function (e) { _this._cancelOpen = true; }, function (e) { e.target.startEdit(); }, this.handleTagChange);
    };
    Et2Email.prototype.tagLimitTemplate = function () {
        if (this._tagsHidden == 0) {
            return lit_1.nothing;
        }
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <sl-tag\n                    part=\"tag__limit\"\n                    class=\"tag_limit\"\n                    slot=\"expand-icon\"\n            >+", "\n            </sl-tag>"], ["\n            <sl-tag\n                    part=\"tag__limit\"\n                    class=\"tag_limit\"\n                    slot=\"expand-icon\"\n            >+", "\n            </sl-tag>"])), this._tagsHidden);
    };
    Et2Email.prototype.inputTemplate = function () {
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <input id=\"search\" type=\"text\" part=\"input\"\n                   class=\"email__search\"\n                   exportparts=\"base:search__base\"\n                   autocomplete=\"do-not-autocomplete-", "\"\n                   ?disabled=", "\n                   ?readonly=", "\n                   placeholder=\"", "\"\n                   tabindex=\"0\"\n                   @keydown=", "\n                   @blur=", "\n                   @focus=", "\n                   @paste=", "\n            />\n\t\t"], ["\n            <input id=\"search\" type=\"text\" part=\"input\"\n                   class=\"email__search\"\n                   exportparts=\"base:search__base\"\n                   autocomplete=\"do-not-autocomplete-", "\"\n                   ?disabled=", "\n                   ?readonly=", "\n                   placeholder=\"", "\"\n                   tabindex=\"0\"\n                   @keydown=", "\n                   @blur=", "\n                   @focus=", "\n                   @paste=", "\n            />\n\t\t"])), Date.now().toString(36), this.disabled, this.readonly, this.hasFocus || this.value.length > 0 || this.disabled || this.readonly ? "" : this.placeholder, this.handleSearchKeyDown, this.handleSearchBlur, this.handleSearchFocus, this.handlePaste);
    };
    Et2Email.prototype.suggestionsTemplate = function () {
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["", ""], ["", ""])), repeat_js_1.repeat(this._selectOptions, function (o) { return o.value; }, this.optionTemplate.bind(this)));
    };
    /**
     * Used to render each option into the suggestions
     *
     * @param {SelectOption} option
     * @returns {TemplateResult}
     */
    Et2Email.prototype.optionTemplate = function (option) {
        var classes = option.class ? Object.fromEntries((option.class).split(" ").map(function (k) { return [k, true]; })) : {};
        var value = option.value.replaceAll(" ", "___");
        var isMobile = typeof egwIsMobile == "function" ? egwIsMobile() : false;
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <sl-option\n                    part=\"option\"\n                    exportparts=\"prefix:tag__prefix, suffix:tag__suffix, image\"\n                    title=\"", "\"\n                    class=", "\n                    .value=\"", "\"\n                    .option=", "\n                    ?disabled=", "\n            >\n                <et2-lavatar slot=\"prefix\" exportparts=\"image\" part=\"icon\" size=\"1.8em\"\n                             lname=", "\n                             fname=", "\n                             image=", "\n                >\n                </et2-lavatar>\n                ", "\n            </sl-option>"], ["\n            <sl-option\n                    part=\"option\"\n                    exportparts=\"prefix:tag__prefix, suffix:tag__suffix, image\"\n                    title=\"", "\"\n                    class=",
            "\n                    .value=\"", "\"\n                    .option=", "\n                    ?disabled=", "\n            >\n                <et2-lavatar slot=\"prefix\" exportparts=\"image\" part=\"icon\" size=\"1.8em\"\n                             lname=", "\n                             fname=", "\n                             image=", "\n                >\n                </et2-lavatar>\n                ", "\n            </sl-option>"])), !isMobile && option.title ? (this.noLang ? option.title : this.egw().lang(option.title)) : lit_1.nothing, class_map_js_1.classMap({
            ...classes
        }), value, option, option.disabled, option.lname || lit_1.nothing, option.fname || lit_1.nothing, option.icon || lit_1.nothing, this.noLang ? option.label : this.egw().lang(option.label));
    };
    Et2Email.prototype.render = function () {
        var _this = this;
        var hasLabelSlot = this.hasSlotController.test('label');
        var hasHelpTextSlot = this.hasSlotController.test('help-text');
        var hasLabel = this.label ? true : !!hasLabelSlot;
        var hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        var isPlaceholderVisible = this.placeholder && this.value.length === 0 && !this.disabled && !this.readonly;
        var styles = {};
        if (this.rows !== 0) {
            styles["--height"] = this.rows;
        }
        // TODO Don't forget required & disabled
        return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n                    style=", "\n                    @click=", "\n                    @mouseenter=", "\n                    @mousedown=", "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <sl-popup\n                            class=", "\n                            placement=\"bottom\"\n                            strategy=\"fixed\"\n                            flip\n                            shift\n                            sync=\"width\"\n                            auto-size=\"vertical\"\n                            auto-size-padding=\"10\"\n                            ?active=", "\n                    >\n                        <div\n                                part=\"combobox base\"\n                                class=\"email__combobox\"\n                                slot=\"anchor\"\n                                @keydown=", "\n                        >\n                            <slot part=\"prefix\" name=\"prefix\" class=\"email__prefix\"></slot>\n                            ", "\n                            ", "\n                            ", "\n                            ", "\n                            <slot part=\"suffix\" name=\"suffix\" class=\"email__suffix\"></slot>\n                        </div>\n                        <div\n                                id=\"listbox\"\n                                role=\"listbox\"\n                                aria-expanded=", "\n                                aria-labelledby=\"label\"\n                                part=\"listbox\"\n                                class=\"email__listbox\"\n                                tabindex=\"-1\"\n                                @keydown=", "\n                                @mouseup=", "\n                        >\n                            ", "\n                        </div>\n                    </sl-popup>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n                    style=", "\n                    @click=", "\n                    @mouseenter=", "\n                    @mousedown=",
            "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <sl-popup\n                            class=",
            "\n                            placement=\"bottom\"\n                            strategy=\"fixed\"\n                            flip\n                            shift\n                            sync=\"width\"\n                            auto-size=\"vertical\"\n                            auto-size-padding=\"10\"\n                            ?active=", "\n                    >\n                        <div\n                                part=\"combobox base\"\n                                class=\"email__combobox\"\n                                slot=\"anchor\"\n                                @keydown=", "\n                        >\n                            <slot part=\"prefix\" name=\"prefix\" class=\"email__prefix\"></slot>\n                            ", "\n                            ", "\n                            ", "\n                            ",
            "\n                            <slot part=\"suffix\" name=\"suffix\" class=\"email__suffix\"></slot>\n                        </div>\n                        <div\n                                id=\"listbox\"\n                                role=\"listbox\"\n                                aria-expanded=", "\n                                aria-labelledby=\"label\"\n                                part=\"listbox\"\n                                class=\"email__listbox\"\n                                tabindex=\"-1\"\n                                @keydown=", "\n                                @mouseup=", "\n                        >\n                            ", "\n                        </div>\n                    </sl-popup>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': hasLabel,
            'form-control--has-help-text': hasHelpText
        }), style_map_js_1.styleMap(styles), this.handleLabelClick, this.handleMouseEnter, function () {
            if (!_this.hasFocus) {
                // Helps Sortable work every time
                _this.focus();
            }
        }, hasLabel ? 'false' : 'true', this.handleLabelClick, this.label, this.readonlyHoverTemplate(), class_map_js_1.classMap({
            email: true,
            input: true,
            'email--open': this.open,
            'email--disabled': this.disabled,
            'email--readonly': this.readonly,
            'email--focused': this.hasFocus,
            'email--placeholder-visible': isPlaceholderVisible,
            'email--top': this.placement === 'top',
            'email--bottom': this.placement === 'bottom',
        }), this.open, this.handleComboboxKeyDown, this.tagsTemplate(), this.inputTemplate(), this.tagLimitTemplate(), this.searching ? lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                                <sl-spinner class=\"email__loading\"></sl-spinner>"], ["\n                                <sl-spinner class=\"email__loading\"></sl-spinner>"]))) : lit_1.nothing, this.open ? 'true' : 'false', this.handleSuggestionsKeyDown, this.handleSuggestionsMouseUp, (this._selectOptions && this._selectOptions.length) ? this.suggestionsTemplate() : this.egw().lang("no matches found"), hasHelpText ? 'false' : 'true', this.helpText);
    };
    // Solves some issues with focus
    Et2Email.shadowRootOptions = __assign(__assign({}, lit_1.LitElement.shadowRootOptions), { delegatesFocus: true });
    /**
     * When user is typing, we wait this long for them to be finished before we start the search
     * @type {number}
     * @protected
     * @internal
     */
    Et2Email.SEARCH_TIMEOUT = 500;
    /**
     * Typing these characters will end the email address and start a new one
     * @type {string[]}
     *
     * @internal
     */
    Et2Email.TAG_BREAK = ["Tab", "Enter", ","];
    __decorate([
        property_js_1.property({
            converter: {
                fromAttribute: function (value) {
                    // Parse string into array
                    if (typeof value === 'string' && value.indexOf(',') !== -1) {
                        return parseEmailsString(value, false);
                    }
                    return value;
                },
                toAttribute: function (value) { return value.join(','); }
            }
        })
    ], Et2Email.prototype, "value", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Email.prototype, "placeholder", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Email.prototype, "allowDragAndDrop", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Email.prototype, "allowPlaceholder", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Email.prototype, "includeLists", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Email.prototype, "emailDisplay", void 0);
    __decorate([
        property_js_1.property({ attribute: 'help-text' })
    ], Et2Email.prototype, "helpText", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Email.prototype, "open", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2Email.prototype, "searchOptions", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Email.prototype, "searchUrl", void 0);
    __decorate([
        property_js_1.property({ type: Number, reflect: true })
    ], Et2Email.prototype, "rows", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Email.prototype, "searching", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Email.prototype, "hasFocus", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Email.prototype, "currentOption", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Email.prototype, "currentTag", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Email.prototype, "_tagsHidden", void 0);
    return Et2Email;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2Email = Et2Email;
customElements.define("et2-email", Et2Email);
/**
 * Parse string that may contain multiple comma separated email addresses into an array
 *
 * @param {string} value
 * @returns {string[]}
 * @protected
 */
function parseEmailsString(value, allowPlaceholder) {
    if (allowPlaceholder === void 0) { allowPlaceholder = false; }
    if (!value)
        return [];
    var preg = allowPlaceholder ? IsEmail_1.IsEmail.EMAIL_PLACEHOLDER_PREG : IsEmail_1.IsEmail.EMAIL_PREG;
    // Trim line start / end anchors off validation regex, make global
    var regex = new RegExp(preg.toString().substring(2, preg.toString().length - 3), 'g');
    return value.match(regex);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
