"use strict";
/**
 * EGroupware eTemplate2 - Select WebComponent
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
exports.Et2Select = exports.Et2WidgetWithSelect = void 0;
var lit_1 = require("lit");
var static_html_js_1 = require("lit/static-html.js");
var Et2WidgetWithSelectMixin_1 = require("./Et2WidgetWithSelectMixin");
var shoelace_1 = require("../Styles/shoelace");
var RowLimitedMixin_1 = require("../Layout/RowLimitedMixin");
var SearchMixin_1 = require("./SearchMixin");
var property_js_1 = require("lit/decorators/property.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var state_js_1 = require("lit/decorators/state.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
// export Et2WidgetWithSelect which is used as type in other modules
var Et2WidgetWithSelect = /** @class */ (function (_super) {
    __extends(Et2WidgetWithSelect, _super);
    function Et2WidgetWithSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Gets an array of all <sl-option> elements
    Et2WidgetWithSelect.prototype.getAllOptions = function () {
        // @ts-ignore
        return __spreadArrays(this.querySelectorAll('sl-option'));
    };
    return Et2WidgetWithSelect;
}(RowLimitedMixin_1.RowLimitedMixin(Et2WidgetWithSelectMixin_1.Et2WidgetWithSelectMixin(lit_1.LitElement))));
exports.Et2WidgetWithSelect = Et2WidgetWithSelect;
;
/**
 * @summary Select one or more options from a given list
 * @since 23.1
 *
 * @dependency sl-select
 * @dependency sl-option
 *
 * At its most basic, you can select one option from a list provided.  The list can be passed from the server in
 * the sel_options array or options can be added as children in the template.  Some extending classes provide specific
 * options, such as Et2SelectPercent or Et2SelectCountry.  All provided options will be mixed together and used.
 *
 * To allow selecting more than one option, use the attribute multiple="true".   This will take & return an array
 * as value instead of just a string.
 *
 * SearchMixin adds additional abilities to ALL select boxes
 * @see Et2WithSearchMixin
 *
 * Override for extending widgets:
 * # Custom display of selected value
 * 	When selecting a single value (!multiple) you can override doLabelChange() to customise the displayed label
 * 	@see Et2SelectCategory, which adds in the category icon
 *
 * # Custom option rows
 *  Options can have 'class' and 'icon' properties that will be used for the option
 * 	The easiest way for further customisation to use CSS in an external file (like etemplate2.css) and ::part().
 * 	@see Et2SelectCountry which displays flags via CSS instead of using SelectOption.icon
 *
 * # Custom tags
 * 	When multiple is set, instead of a single value each selected value is shown in a tag.  While it's possible to
 * 	use CSS to some degree, we can also use a custom tag class that extends Et2Tag.
 * 	1.  Create the extending class
 * 	2.  Make sure it's loaded (add to etemplate2.ts)
 * 	3.  In your extending Et2Select, override get tagTag() to return the custom tag name
 *
 * @slot - Reflected into listbox options. Must be <sl-option> elements. You can use <sl-divider> to group items visually.  Normally you set the options by parameter.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the control's value changes.
 * @event sl-clear - Emitted when the control’s value is cleared.
 * @event sl-input - Emitted when the control receives input.
 * @event sl-focus - Emitted when the control gains focus.
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-show - Emitted when the suggestion menu opens.
 * @event sl-after-show - Emitted after the suggestion menu opens and all animations are complete.
 * @event sl-hide - Emitted when the suggestion menu closes.
 * @event sl-after-hide - Emitted after the suggestion menu closes and all animations are complete.
 *
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart tags - The container that houses option tags when multiselect is used.
 * @csspart display-input - The element that displays the selected option’s label, an <input> element.
 * @csspart expand-icon - The container that wraps the expand icon.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart option - The options in the listbox container
 * @csspart icon - Icon in the option
 * @csspart emptyLabel - Wrapper around the label shown when there is no option selected
 * @csspart tag__prefix - The container that wraps the option prefix
 * @csspart tag__suffix - The container that wraps the option suffix
 * @csspart tag__limit - Element that is shown when the number of selected options exceeds maxOptionsVisible
 */
var Et2Select = /** @class */ (function (_super) {
    __extends(Et2Select, _super);
    function Et2Select() {
        var _this = _super.call(this) || this;
        /** Placeholder text to show as a hint when the select is empty. */
        _this.placeholder = '';
        /** Allows more than one option to be selected. */
        _this.multiple = false;
        /** Disables the select control. */
        _this.disabled = false;
        /** Adds a clear button when the select is not empty. */
        _this.clearable = false;
        /** The select's label. If you need to display HTML, use the `label` slot instead. */
        _this.label = '';
        /**
         * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
         * inside of the viewport.
         */
        _this.placement = 'bottom';
        /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
        _this.helpText = '';
        /** If the select is limited to 1 row, we show the number of tags not visible */
        _this._tagsHidden = 0;
        _this.__value = "";
        // Flag to avoid issues with free entries & fix_bad_value
        _this.__inInitialSetup = true;
        _this.tagOverflowObserver = null;
        _this.hoist = true;
        _this._tagTemplate = _this._tagTemplate.bind(_this);
        _this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
        _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
        _this._handleTagOverflow = _this._handleTagOverflow.bind(_this);
        _this.handleTagClick = _this.handleTagClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Select, "styles", {
        get: function () {
            return [
                // Parent (SlSelect) returns a single cssResult, not an array
                shoelace_1.default,
                _super.styles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 0 auto;\n\t\t\t\t\t--icon-width: 20px;\n\t\t\t\t}\n\n\t\t\t\t.form-control--has-label::part(form-control-label) {\n\t\t\t\t\tmargin-right: var(--sl-spacing-medium);\n\t\t\t\t}\n\n\t\t\t\t::slotted(img), img {\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\n\t\t\t\t/* No wrapping */\n\n\t\t\t\tsl-option::part(base) {\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t}\n\n\t\t\t\t/* No horizontal scrollbar, even if options are long */\n\n\t\t\t\t.dropdown__panel {\n\t\t\t\t\toverflow-x: clip;\n\t\t\t\t}\n\n\t\t\t\t/* Ellipsis when too small */\n\n\t\t\t\t::part(tags) {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t.select__label {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\t/* This is usually not used due to flex, but is the basis for ellipsis calculation */\n\t\t\t\t\twidth: 10ex;\n\t\t\t\t}\n\n\t\t\t\t/** multiple=true uses tags for each value **/\n\t\t\t\t/* styling for icon inside tag (not option) */\n\n\t\t\t\t.tag_image {\n\t\t\t\t\tmargin-right: var(--sl-spacing-x-small);\n\t\t\t\t}\n\n\t\t\t\t/* Maximum height + scrollbar on tags (+ other styling) */\n\n\t\t\t\t::part(tags) {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\tmargin-left: 0px;\n\t\t\t\t\tmax-height: initial;\n\t\t\t\t\tmin-height: auto;\n\t\t\t\t\tgap: 0.1rem 0.5rem;\n\t\t\t\t}\n\n\t\t\t\t:host([rows]) ::part(tags) {\n\t\t\t\t\tmax-height: calc(var(--rows, 5) * (var(--sl-input-height-medium) * 0.8))\n\t\t\t\t}\n\n\t\t\t\t:host([readonly][rows='1']) ::part(tags) {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t/* No rows set, default height limit about 5 rows */\n\n\t\t\t\t:host(:not([rows])) ::part(tags) {\n\t\t\t\t\tmax-height: 11em;\n\t\t\t\t}\n\n\t\t\t\tselect:hover {\n\t\t\t\t\tbox-shadow: 1px 1px 1px rgb(0 0 0 / 60%);\n\t\t\t\t}\n\n\t\t\t\t/* Hide dropdown trigger when multiple & readonly */\n\n\t\t\t\t:host([readonly][multiple]:not([rows='1']))::part(expand-icon) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t/* Style for tag count if rows=1 */\n\n\t\t\t\t.tag_limit {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\ttop: 0px;\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t\tbox-shadow: rgb(0 0 0/50%) -1.5ex 0px 1ex -1ex, rgb(0 0 0 / 0%) 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.tag_limit::part(base) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: var(--sl-input-background-color);\n\t\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\t\tborder-bottom-left-radius: 0;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tmin-width: 3em;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t/* Show all rows on hover if rows=1 */\n\n\t\t\t\t:host([ readonly ][ multiple ][ rows ]) .hover__popup {\n\t\t\t\t\twidth: -webkit-fill-available;\n\t\t\t\t\twidth: -moz-fill-available;\n\t\t\t\t\twidth: fill-available;\n\t\t\t\t}\n\n\t\t\t\t:host([readonly][multiple][rows]) .hover__popup::part(popup) {\n\t\t\t\t\tz-index: var(--sl-z-index-dropdown);\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([ readonly ][ multiple ][ rows ]) .hover__popup .select__tags {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t}\n\n\t\t\t\t::part(listbox) {\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\tbackground: var(--sl-input-background-color);\n\t\t\t\t\tpadding: var(--sl-input-spacing-small);\n\t\t\t\t\tpadding-left: 2px;\n\n\t\t\t\t\tbox-shadow: var(--sl-shadow-large);\n\t\t\t\t\tmin-width: fit-content;\n\t\t\t\t\tborder-radius: var(--sl-border-radius-small);\n\t\t\t\t\tborder: 1px solid var(--sl-color-neutral-200);\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t::part(display-label) {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t:host::part(display-label) {\n\t\t\t\t\tmax-height: 8em;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t:host([readonly])::part(combobox) {\n\t\t\t\t\tbackground: none;\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tborder: none;\n\t\t\t\t}\n\n\t\t\t\t/* Position & style of group titles */\n\n\t\t\t\tsmall {\n\t\t\t\t\tpadding: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 0 auto;\n\t\t\t\t\t--icon-width: 20px;\n\t\t\t\t}\n\n\t\t\t\t.form-control--has-label::part(form-control-label) {\n\t\t\t\t\tmargin-right: var(--sl-spacing-medium);\n\t\t\t\t}\n\n\t\t\t\t::slotted(img), img {\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\n\t\t\t\t/* No wrapping */\n\n\t\t\t\tsl-option::part(base) {\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t}\n\n\t\t\t\t/* No horizontal scrollbar, even if options are long */\n\n\t\t\t\t.dropdown__panel {\n\t\t\t\t\toverflow-x: clip;\n\t\t\t\t}\n\n\t\t\t\t/* Ellipsis when too small */\n\n\t\t\t\t::part(tags) {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t.select__label {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\t/* This is usually not used due to flex, but is the basis for ellipsis calculation */\n\t\t\t\t\twidth: 10ex;\n\t\t\t\t}\n\n\t\t\t\t/** multiple=true uses tags for each value **/\n\t\t\t\t/* styling for icon inside tag (not option) */\n\n\t\t\t\t.tag_image {\n\t\t\t\t\tmargin-right: var(--sl-spacing-x-small);\n\t\t\t\t}\n\n\t\t\t\t/* Maximum height + scrollbar on tags (+ other styling) */\n\n\t\t\t\t::part(tags) {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\tmargin-left: 0px;\n\t\t\t\t\tmax-height: initial;\n\t\t\t\t\tmin-height: auto;\n\t\t\t\t\tgap: 0.1rem 0.5rem;\n\t\t\t\t}\n\n\t\t\t\t:host([rows]) ::part(tags) {\n\t\t\t\t\tmax-height: calc(var(--rows, 5) * (var(--sl-input-height-medium) * 0.8))\n\t\t\t\t}\n\n\t\t\t\t:host([readonly][rows='1']) ::part(tags) {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t/* No rows set, default height limit about 5 rows */\n\n\t\t\t\t:host(:not([rows])) ::part(tags) {\n\t\t\t\t\tmax-height: 11em;\n\t\t\t\t}\n\n\t\t\t\tselect:hover {\n\t\t\t\t\tbox-shadow: 1px 1px 1px rgb(0 0 0 / 60%);\n\t\t\t\t}\n\n\t\t\t\t/* Hide dropdown trigger when multiple & readonly */\n\n\t\t\t\t:host([readonly][multiple]:not([rows='1']))::part(expand-icon) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t/* Style for tag count if rows=1 */\n\n\t\t\t\t.tag_limit {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\ttop: 0px;\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t\tbox-shadow: rgb(0 0 0/50%) -1.5ex 0px 1ex -1ex, rgb(0 0 0 / 0%) 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.tag_limit::part(base) {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: var(--sl-input-background-color);\n\t\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\t\tborder-bottom-left-radius: 0;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tmin-width: 3em;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t/* Show all rows on hover if rows=1 */\n\n\t\t\t\t:host([ readonly ][ multiple ][ rows ]) .hover__popup {\n\t\t\t\t\twidth: -webkit-fill-available;\n\t\t\t\t\twidth: -moz-fill-available;\n\t\t\t\t\twidth: fill-available;\n\t\t\t\t}\n\n\t\t\t\t:host([readonly][multiple][rows]) .hover__popup::part(popup) {\n\t\t\t\t\tz-index: var(--sl-z-index-dropdown);\n\t\t\t\t\tbackground-color: var(--sl-color-neutral-0);\n\t\t\t\t}\n\n\t\t\t\t:host([ readonly ][ multiple ][ rows ]) .hover__popup .select__tags {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t}\n\n\t\t\t\t::part(listbox) {\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\tbackground: var(--sl-input-background-color);\n\t\t\t\t\tpadding: var(--sl-input-spacing-small);\n\t\t\t\t\tpadding-left: 2px;\n\n\t\t\t\t\tbox-shadow: var(--sl-shadow-large);\n\t\t\t\t\tmin-width: fit-content;\n\t\t\t\t\tborder-radius: var(--sl-border-radius-small);\n\t\t\t\t\tborder: 1px solid var(--sl-color-neutral-200);\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t::part(display-label) {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t:host::part(display-label) {\n\t\t\t\t\tmax-height: 8em;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t:host([readonly])::part(combobox) {\n\t\t\t\t\tbackground: none;\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tborder: none;\n\t\t\t\t}\n\n\t\t\t\t/* Position & style of group titles */\n\n\t\t\t\tsmall {\n\t\t\t\t\tpadding: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Select, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Toggle between single and multiple selection
                 */
                multiple: {
                    type: Boolean,
                    reflect: true,
                }, 
                /**
                 * Click handler for individual tags instead of the select as a whole.
                 * Only used if multiple=true so we have tags
                 */
                onTagClick: {
                    type: Function,
                } });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Select.prototype, "dropdown", {
        get: function () { return this.select; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Select, "translate", {
        /**
         * List of properties that get translated
         *
         * @returns object
         */
        get: function () {
            return __assign(__assign({}, _super.translate), { emptyLabel: true });
        },
        enumerable: false,
        configurable: true
    });
    Et2Select.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.classList.add("et2-select-widget");
        this.addEventListener("focusin", this.handleFocus);
        this.updateComplete.then(function () {
            var _a, _b, _c, _d;
            _this.addEventListener("sl-change", _this._triggerChange);
            // Fixes missing empty label
            (_a = _this.select) === null || _a === void 0 ? void 0 : _a.requestUpdate("value");
            // Fixes incorrect opening position
            (_c = (_b = _this.select) === null || _b === void 0 ? void 0 : _b.popup) === null || _c === void 0 ? void 0 : _c.handleAnchorChange();
            // requestUpdate("value") above means we need to check tags again
            (_d = _this.select) === null || _d === void 0 ? void 0 : _d.updateComplete.then(function () { _this.checkTagOverflow(); });
        });
    };
    Et2Select.prototype.disconnectedCallback = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("focusin", this.handleFocus);
        this.removeEventListener("sl-change", this._triggerChange);
        this.removeEventListener("mouseleave", this._handleMouseLeave);
        // Hacky hack to clean up Shoelace form controller
        // https://github.com/shoelace-style/shoelace/issues/2376
        if (((_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.formControlController) && ((_b = this.dropdown) === null || _b === void 0 ? void 0 : _b.formControlController.form)) {
            (_c = this.dropdown) === null || _c === void 0 ? void 0 : _c.formControlController.form.removeEventListener('formdata', (_d = this.dropdown) === null || _d === void 0 ? void 0 : _d.formControlController.handleFormData);
            (_e = this.dropdown) === null || _e === void 0 ? void 0 : _e.formControlController.form.removeEventListener('submit', (_f = this.dropdown) === null || _f === void 0 ? void 0 : _f.formControlController.handleFormSubmit);
            (_g = this.dropdown) === null || _g === void 0 ? void 0 : _g.formControlController.form.removeEventListener('reset', (_h = this.dropdown) === null || _h === void 0 ? void 0 : _h.formControlController.handleFormReset);
        }
    };
    Et2Select.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var more;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        more = _a.sent();
                        return [4 /*yield*/, this.select.updateComplete];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, more];
                }
            });
        });
    };
    Et2Select.prototype._triggerChange = function (e) {
        if (_super.prototype._triggerChange.call(this, e)) {
            this.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };
    /**
     * Handle the case where there is no value set, or the value provided is not an option.
     * If this happens, we choose the first option or empty label.
     *
     * Careful when this is called.  We change the value here, so an infinite loop is possible if the widget has
     * onchange.
     *
     */
    Et2Select.prototype.fix_bad_value = function () {
        var _this = this;
        var _a;
        // Stop if there are no options
        if (!Array.isArray(this.select_options) || this.select_options.length == 0) {
            // Nothing to do here
            return;
        }
        // emptyLabel is fine
        if ((this.value == '' || this.value == []) && (this.emptyLabel || this.placeholder)) {
            return;
        }
        var valueArray = this.getValueAsArray();
        // Check for value using missing options (deleted or otherwise not allowed)
        var filtered = this.filterOutMissingOptions(valueArray);
        if (filtered.length != valueArray.length) {
            this.value = filtered;
            return;
        }
        // Multiple is allowed to be empty, and if we don't have an emptyLabel or options nothing to do
        if (this.multiple || (!this.emptyLabel && this.select_options.length === 0)) {
            return;
        }
        // See if parent (search / free entry) is OK with it
        if (_super.prototype.fix_bad_value.call(this)) {
            return;
        }
        // If somebody gave '' as a select_option, let it be
        if (this.value === '' && this.select_options.filter(function (option) { return _this.value === option.value; }).length == 1) {
            return;
        }
        // If no value is set, choose the first option
        // Only do this on once during initial setup, or it can be impossible to clear the value
        if (!this.__inInitialSetup) {
            return;
        }
        // value not in options --> use emptyLabel, if exists, or first option otherwise
        if (valueArray.filter(function (val) { return _this.optionSearch(val, _this.select_options, "value", "children") ||
            // Legacy children as value
            _this.optionSearch(val, _this.select_options, "value", "value"); }).length == 0) {
            var oldValue = this.value;
            this.value = this.emptyLabel ? "" : "" + ((_a = this.select_options[0]) === null || _a === void 0 ? void 0 : _a.value);
            // ""+ to cast value of 0 to "0", to not replace with ""
            this.requestUpdate("value", oldValue);
        }
    };
    Object.defineProperty(Et2Select.prototype, "value", {
        get: function () {
            var _a, _b;
            // Handle a bunch of non-values, if it's multiple we want an array
            if (this.multiple && (this.__value == "null" || this.__value == null || typeof this.__value == "undefined" ||
                !this.emptyLabel && this.__value == "" && !this.select_options.find(function (o) { return o.value == ""; }))) {
                return [];
            }
            if (!this.multiple && !this.emptyLabel && this.__value == "" && !this.select_options.find(function (o) { return o.value == ""; })) {
                return null;
            }
            return this.multiple ? (_a = this.__value) !== null && _a !== void 0 ? _a : [] : (_b = this.__value) !== null && _b !== void 0 ? _b : "";
        },
        // @ts-ignore
        set: function (val) {
            if (typeof val === "undefined" || val == null) {
                val = "";
            }
            if (typeof val === 'string' && val.indexOf(',') !== -1 && this.multiple) {
                val = val.split(',');
            }
            if (typeof val === 'number') {
                val = val.toString();
            }
            var oldValue = this.value;
            if (Array.isArray(val)) {
                // Make sure value has no duplicates, and values are strings
                this.__value = __spreadArrays(new Set(val.map(function (v) { return (typeof v === 'number' ? v.toString() : v || ''); })));
            }
            else {
                this.__value = val;
            }
            if (this.multiple && typeof this.__value == "string") {
                this.__value = this.__value != "" ? [this.__value] : [];
            }
            else if (!this.multiple && Array.isArray(this.__value)) {
                this.__value = this.__value.toString();
            }
            if (this.select) {
                this.select.value = this.shoelaceValue;
            }
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check a value for missing options and remove them.
     *
     * We'll warn about it in the helpText, and if they save the change will be made.
     * This is to avoid the server-side validation error, which the user can't do much about.
     *
     * @param {string[]} value
     * @returns {string[]}
     */
    Et2Select.prototype.filterOutMissingOptions = function (value) {
        var _this = this;
        if (!this.readonly && value && value.length > 0 && !this.allowFreeEntries && this.select_options.length > 0) {
            var filterBySelectOptions = function (arrayToFilter, options) {
                var filteredArray = arrayToFilter.filter(function (item) {
                    // Check if item is found in options
                    return !_this.optionSearch(item, options, "value", "children") &&
                        // Legacy children as value
                        !_this.optionSearch(value, options, "value", "value");
                });
                return filteredArray;
            };
            // Empty is allowed, if there's an emptyLabel
            if (value.toString() == "" && this.emptyLabel) {
                return value;
            }
            var missing_1 = filterBySelectOptions(value, this.select_options);
            if (missing_1.length > 0) {
                console.warn("Invalid option '" + missing_1.join(", ") + "' removed from " + this.id, this);
                value = value.filter(function (item) { return missing_1.indexOf(item) == -1; });
            }
        }
        return value;
    };
    /**
     * Additional customisations from the XET node
     *
     * @param {Element} _node
     */
    Et2Select.prototype.loadFromXML = function (_node) {
        var _this = this;
        _super.prototype.loadFromXML.call(this, _node);
        // Wait for update to be complete before we check for bad value so extending selects can have a chance
        this.updateComplete.then(function () {
            _this.fix_bad_value();
            _this.__inInitialSetup = false;
        });
    };
    /** @param changedProperties */
    Et2Select.prototype.willUpdate = function (changedProperties) {
        var _this = this;
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has("multiple")) {
            this.value = this.__value;
        }
        if (changedProperties.has("select_options") || changedProperties.has("value") || changedProperties.has("emptyLabel")) {
            this.updateComplete.then(function () {
                _this.fix_bad_value();
            });
        }
    };
    Et2Select.prototype.firstUpdated = function (changedProperties) {
        _super.prototype.firstUpdated.call(this, changedProperties);
        // Avoid a memory leak by overwriting slot change handler
        if (this.select) {
            this.select.handleDefaultSlotChange = this.handleDefaultSlotChange;
        }
    };
    /**
     * After render, DOM nodes are there
     *
     * Check to see if tags overflow, set the counter flag
     *
     * @param {PropertyValues} changedProperties
     */
    Et2Select.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        this.checkTagOverflow();
    };
    Et2Select.prototype.checkTagOverflow = function () {
        var _this = this;
        // Create / destroy intersection observer
        if (this.readonly && this.rows == "1" && this.multiple && this.tagOverflowObserver == null) {
            this.tagOverflowObserver = new IntersectionObserver(this._handleTagOverflow, {
                root: this.select.shadowRoot.querySelector(".select__tags"),
                threshold: 0.1
            });
        }
        else if ((!this.readonly || this.rows !== "1" || !this.multiple) && this.tagOverflowObserver !== null) {
            this.tagOverflowObserver.disconnect();
            this.tagOverflowObserver = null;
        }
        if (this.tagOverflowObserver) {
            this.select.updateComplete.then(function () {
                // @ts-ignore
                for (var _i = 0, _a = _this.select.shadowRoot.querySelectorAll(".select__tags *:not(div):not(sl-tag)"); _i < _a.length; _i++) {
                    var tag = _a[_i];
                    _this.tagOverflowObserver.observe(tag);
                }
            });
        }
    };
    Object.defineProperty(Et2Select.prototype, "tagTag", {
        /**
         * Tag used for rendering tags when multiple=true
         * Used for creating, finding & filtering options.
         * @see createTagNode()
         * @returns {string}
         */
        get: function () {
            return static_html_js_1.literal(templateObject_2 || (templateObject_2 = __makeTemplateObject(["et2-tag"], ["et2-tag"])));
        },
        enumerable: false,
        configurable: true
    });
    /** Sets focus on the control. */
    Et2Select.prototype.focus = function (options) {
        _super.prototype.focus.call(this);
        this.handleFocus();
    };
    /** Removes focus from the control. */
    Et2Select.prototype.blur = function () {
        if (typeof _super.prototype.blur == "function") {
            _super.prototype.blur.call(this);
        }
        return this.hide();
    };
    Et2Select.prototype.handleDefaultSlotChange = function () {
        var _this = this;
        var _a;
        var allOptions = this.getAllOptions();
        var value = Array.isArray(this.value) ? this.value : [this.value];
        var values = [];
        // Check for duplicate values in menu items
        if (customElements.get('sl-option')) {
            allOptions.forEach(function (option) { return values.push(option.value); });
            // Select only the options that match the new value
            (_a = this.select) === null || _a === void 0 ? void 0 : _a.setSelectedOptions(allOptions.filter(function (el) { return value.includes(el.value); }));
        }
        else {
            // Rerun this handler when <sl-option> is registered
            customElements.whenDefined('sl-option').then(function () { return _this.handleDefaultSlotChange(); });
        }
    };
    Et2Select.prototype.handleFocus = function () {
        var _a;
        if (this.disabled || this.readonly) {
            return;
        }
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.focus();
    };
    /**
     * Apply the user preference to close the dropdown if an option is clicked, even if multiple=true.
     * The default (from SlSelect) leaves the dropdown open for multiple=true
     *
     * @param {MouseEvent} event
     * @private
     */
    Et2Select.prototype.handleOptionClick = function (event) {
        _super.prototype.handleOptionClick.call(this, event);
        // Only interested in option clicks, but handler is bound higher
        if (event.composedPath().filter(function (e) { return e.tagName == "SL-OPTION"; }).length == 0) {
            return;
        }
        if (this._close_on_select) {
            this.hide();
        }
    };
    Et2Select.prototype.et2HandleBlur = function (event) {
        if (typeof _super.prototype.et2HandleBlur === "function") {
            _super.prototype.et2HandleBlur.call(this, event);
        }
    };
    Et2Select.prototype.handleValueChange = function (e) {
        // Only interested when selected value changes, not any nested inputs
        if (e.target !== this.select) {
            return;
        }
        var old_value = this.__value;
        this.__value = Array.isArray(this.select.value) ?
            this.select.value.map(function (e) { return e.replaceAll("___", " "); }) :
            this.select.value.replaceAll("___", " ");
        this.requestUpdate("value", old_value);
    };
    /**
     * Always close the dropdown if an option is clicked, even if multiple=true.  This differs from SlSelect,
     * which leaves the dropdown open for multiple=true
     *
     * @param {KeyboardEvent} event
     * @private
     */
    Et2Select.prototype.handleKeyDown = function (event) {
        var _this = this;
        if (event.key === 'Enter' || (event.key === ' ' && this.typeToSelectString === '')) {
            this.dropdown.hide().then(function () {
                if (typeof _this.handleMenuHide == "function") {
                    // Make sure search gets hidden
                    _this.handleMenuHide();
                }
            });
            event.stopPropagation();
        }
    };
    Et2Select.prototype.handleTagClick = function (event) {
        if (typeof this.onTagClick == "function") {
            event.stopPropagation();
            return this.onTagClick(event, event.target);
        }
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
    Et2Select.prototype._handleTagOverflow = function (entries) {
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
     * If rows=1 and multiple=true, when they put the mouse over the widget show all tags
     * @param {MouseEvent} e
     * @private
     */
    Et2Select.prototype._handleMouseEnter = function (e) {
        var _this = this;
        if (this.readonly && this.rows == "1" && this.multiple == true && this.value.length > 1) {
            e.stopPropagation();
            var distance_1 = (-1 * parseInt(getComputedStyle(this).height)) + 2;
            // Bind to turn this all off
            this.addEventListener("mouseleave", this._handleMouseLeave);
            // Popup - this might get wiped out next render(), might not
            this.updateComplete.then(function () {
                var tags = _this.select.shadowRoot.querySelector(".select__tags");
                var popup = document.createElement("sl-popup");
                popup.anchor = _this;
                popup.distance = distance_1;
                popup.placement = "bottom";
                popup.strategy = "fixed";
                popup.active = true;
                popup.sync = "width";
                popup.setAttribute("exportparts", "tags, popup");
                popup.classList.add("hover__popup", "details", "hoist", "details__body");
                _this.shadowRoot.append(popup);
                popup.appendChild(tags.cloneNode(true));
                tags.style.width = getComputedStyle(_this).width;
                tags.style.margin = 0;
            });
        }
    };
    /**
     * If we're showing all rows because of _handleMouseEnter, reset when mouse leaves
     * @param {MouseEvent} e
     * @private
     */
    Et2Select.prototype._handleMouseLeave = function (e) {
        var popup = this.shadowRoot.querySelector("sl-popup");
        if (popup) {
            // Popup still here.  Remove it
            popup.remove();
        }
        this.select.requestUpdate();
    };
    Et2Select.prototype._handleMouseWheel = function (e) {
        // Grab & stop mousewheel to prevent scrolling sidemenu when scrolling through options
        if (this.open) {
            e.stopImmediatePropagation();
        }
    };
    /** Shows the listbox. */
    Et2Select.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.select.show()];
            });
        });
    };
    /** Hides the listbox. */
    Et2Select.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.select.hide()];
            });
        });
    };
    Object.defineProperty(Et2Select.prototype, "open", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.select) === null || _a === void 0 ? void 0 : _a.open) !== null && _b !== void 0 ? _b : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Select.prototype, "select", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("sl-select");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Custom, dynamic styling
     *
     * Put as much as you can in static styles for performance reasons
     * Override this for custom dynamic styles
     *
     * @returns {TemplateResult}
     * @protected
     */
    Et2Select.prototype._styleTemplate = function () {
        return null;
    };
    /**
     * Used for the "no value" option for single select
     * Placeholder is used for multi-select with no value
     *
     * @returns {TemplateResult}
     */
    Et2Select.prototype._emptyLabelTemplate = function () {
        if (!this.emptyLabel || this.multiple) {
            return static_html_js_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
        }
        return static_html_js_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <sl-option\n                    part=\"emptyLabel option\"\n                    value=\"\"\n                    .selected=", "\n            >\n                ", "\n            </sl-option>"], ["\n            <sl-option\n                    part=\"emptyLabel option\"\n                    value=\"\"\n                    .selected=", "\n            >\n                ", "\n            </sl-option>"])), this.getValueAsArray().some(function (v) { return v == ""; }), this.emptyLabel);
    };
    /**
     * Iterate over all the options
     * @returns {TemplateResult}
     * @protected
     */
    Et2Select.prototype._optionsTemplate = function () {
        var _this = this;
        return static_html_js_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ""], ["",
            ""])), repeat_js_1.repeat(this.select_options
            // Filter out empty values if we have empty label to avoid duplicates
            .filter(function (o) { return _this.emptyLabel ? o.value !== '' : o; }), function (o) { return o.value; }, this._groupTemplate.bind(this)));
    };
    /**
     * Used to render each option into the select
     * Override for custom select options.  Note that spaces are not allowed in option values,
     * and sl-select _requires_ options to be <sl-option>
     *
     * @param {SelectOption} option
     * @returns {TemplateResult}
     */
    Et2Select.prototype._optionTemplate = function (option) {
        // Exclude non-matches when searching
        // unless they're already selected, in which case removing them removes them from value
        if (typeof option.isMatch == "boolean" && !option.isMatch && !this.getValueAsArray().includes(option.value)) {
            return static_html_js_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
        }
        // Tag used must match this.optionTag, but you can't use the variable directly.
        // Pass option along so SearchMixin can grab it if needed
        var value = option.value.replaceAll(" ", "___");
        var classes = option.class ? Object.fromEntries((option.class).trim().split(" ").map(function (k) { return [k, true]; })) : {};
        return static_html_js_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <sl-option\n                    part=\"option\"\n                    exportparts=\"prefix:tag__prefix, suffix:tag__suffix\"\n                    value=\"", "\"\n                    title=\"", "\"\n                    class=", "\n                    .option=", "\n                    .selected=", "\n                    ?disabled=", "\n            >\n                ", "\n                ", "\n            </sl-option>"], ["\n            <sl-option\n                    part=\"option\"\n                    exportparts=\"prefix:tag__prefix, suffix:tag__suffix\"\n                    value=\"", "\"\n                    title=\"", "\"\n                    class=",
            "\n                    .option=", "\n                    .selected=", "\n                    ?disabled=", "\n            >\n                ", "\n                ", "\n            </sl-option>"])), value, !option.title || this.noLang ? option.title : this.egw().lang(option.title), class_map_js_1.classMap({
            "match": this.searchEnabled && (option.isMatch || false),
            "no-match": this.searchEnabled && option.isMatch == false,
            ...classes
        }), option, this.getValueAsArray().some(function (v) { return v == value; }), option.disabled, this._iconTemplate(option), this.noLang ? option.label : this.egw().lang(option.label));
    };
    /**
     * Get the icon for the select option
     *
     * @param option
     * @protected
     */
    Et2Select.prototype._iconTemplate = function (option) {
        if (!option.icon) {
            return static_html_js_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
        }
        return static_html_js_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <et2-image slot=\"prefix\" part=\"icon\" style=\"width: var(--icon-width)\"\n                       src=\"", "\"></et2-image>"], ["\n            <et2-image slot=\"prefix\" part=\"icon\" style=\"width: var(--icon-width)\"\n                       src=\"", "\"></et2-image>"])), option.icon);
    };
    /**
     * Custom tag
     *
     * Override this to customise display when multiple=true.
     * There is no restriction on the tag used, unlike _optionTemplate()
     *
     * @param {Et2Option} option
     * @param {number} index
     * @returns {TemplateResult}
     * @protected
     */
    Et2Select.prototype._tagTemplate = function (option, index) {
        var _a;
        var readonly = (this.readonly || option && typeof (option.disabled) != "undefined" && option.disabled);
        var isEditable = this.editModeEnabled && !readonly;
        var image = this._iconTemplate((_a = option.option) !== null && _a !== void 0 ? _a : option);
        var tagName = this.tagTag;
        return static_html_js_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            <", "\n                    part=\"tag\"\n                    exportparts=\"\n                      base:tag__base,\n                      content:tag__content,\n                      remove-button:tag__remove-button,\n                      remove-button__base:tag__remove-button__base,\n                      icon:icon\n                    \"\n                    class=", "\n                    tabindex=\"-1\"\n                    ?pill=", "\n                    size=", "\n                    title=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    .editable=", "\n                    .value=", "\n                    @change=", "\n                    @dblclick=", "\n                    @mousedown=", "\n            >\n                ", "\n                ", "\n            </", ">\n\t\t"], ["\n            <", "\n                    part=\"tag\"\n                    exportparts=\"\n                      base:tag__base,\n                      content:tag__content,\n                      remove-button:tag__remove-button,\n                      remove-button__base:tag__remove-button__base,\n                      icon:icon\n                    \"\n                    class=", "\n                    tabindex=\"-1\"\n                    ?pill=", "\n                    size=", "\n                    title=", "\n                    ?removable=", "\n                    ?readonly=", "\n                    .editable=", "\n                    .value=", "\n                    @change=", "\n                    @dblclick=", "\n                    @mousedown=", "\n            >\n                ", "\n                ", "\n            </", ">\n\t\t"])), tagName, "search_tag " + option.classList.value, this.pill, this.size || "medium", option.title, !readonly, readonly, isEditable, option.value.replaceAll("___", " "), this.handleTagEdit, this._handleDoubleClick, typeof this.onTagClick == "function" ? this.handleTagClick : lit_1.nothing, image !== null && image !== void 0 ? image : lit_1.nothing, option.getTextLabel().trim(), tagName);
    };
    Et2Select.prototype._tagLimitTemplate = function () {
        if (this._tagsHidden == 0) {
            return lit_1.nothing;
        }
        return static_html_js_1.html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            <sl-tag\n                    part=\"tag__limit\"\n                    class=\"tag_limit\"\n                    slot=\"expand-icon\"\n            >+", "\n            </sl-tag>"], ["\n            <sl-tag\n                    part=\"tag__limit\"\n                    class=\"tag_limit\"\n                    slot=\"expand-icon\"\n            >+", "\n            </sl-tag>"])), this._tagsHidden);
    };
    /**
     * Additional customisation template
     * Override if needed.  Added after select options.
     *
     * @protected
     */
    Et2Select.prototype._extraTemplate = function () {
        return typeof _super.prototype._extraTemplate == "function" ? _super.prototype._extraTemplate.call(this) : lit_1.nothing;
    };
    Object.defineProperty(Et2Select.prototype, "shoelaceValue", {
        /**
         * Shoelace select uses space as multiple separator, so our values cannot have a space in them.
         * We replace spaces with "___" before passing the value to SlSelect
         *
         * @protected
         */
        get: function () {
            return Array.isArray(this.value) ?
                this.value.map(function (v) { return v.replaceAll(" ", "___"); }) :
                (typeof this.value == "string" ? this.value.replaceAll(" ", "___") : "");
        },
        enumerable: false,
        configurable: true
    });
    Et2Select.prototype.render = function () {
        var value = this.shoelaceValue;
        var icon = lit_1.nothing;
        if (!this.multiple) {
            var icon_option = this.select_options.find(function (o) { return (o.value == value || Array.isArray(value) && value.includes(o.value)) && o.icon; });
            if (icon_option) {
                icon = this._iconTemplate(icon_option);
            }
        }
        return static_html_js_1.html(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            ", "\n            <sl-select\n                    id=\"sl_select_", "\"\n                    class=", "\n                    exportparts=\"form-control-label, prefix, tags, display-input, expand-icon, combobox, combobox:base, listbox, option, icon\"\n                    label=", "\n                    placeholder=", "\n\t\t\t\t\taria-label=", "\n                    aria-description=", "\n                    ?multiple=", "\n                    ?disabled=", "\n                    ?clearable=", "\n                    ?required=", "\n                    hoist\n                    placement=", "\n                    tabindex=\"0\"\n                    .getTag=", "\n                    .maxOptionsVisible=", "\n                    value=", "\n                    @sl-change=", "\n                    @mouseenter=", "\n                    @mousewheel=", "\n                    @mouseup=", "\n                    size=", "\n            >\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                <slot name=\"prefix\" slot=\"prefix\"></slot>\n                <slot></slot>\n            </sl-select>\n            <div slot=\"helpText\">", "</div>\n\t\t"], ["\n            ", "\n            <sl-select\n                    id=\"sl_select_", "\"\n                    class=",
            "\n                    exportparts=\"form-control-label, prefix, tags, display-input, expand-icon, combobox, combobox:base, listbox, option, icon\"\n                    label=", "\n                    placeholder=", "\n\t\t\t\t\taria-label=", "\n                    aria-description=", "\n                    ?multiple=", "\n                    ?disabled=", "\n                    ?clearable=", "\n                    ?required=", "\n                    hoist\n                    placement=", "\n                    tabindex=\"0\"\n                    .getTag=", "\n                    .maxOptionsVisible=", "\n                    value=", "\n                    @sl-change=", "\n                    @mouseenter=", "\n                    @mousewheel=", "\n                    @mouseup=", "\n                    size=", "\n            >\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                <slot name=\"prefix\" slot=\"prefix\"></slot>\n                <slot></slot>\n            </sl-select>\n            <div slot=\"helpText\">", "</div>\n\t\t"])), this._styleTemplate(), this.dom_id, class_map_js_1.classMap({
            "form-control--has-label": this.label !== ""
        }), this.label, this.placeholder || (this.multiple && this.emptyLabel ? this.emptyLabel : ""), this.ariaLabel, this.ariaDesciption, this.multiple, this.disabled || this.readonly, this.clearable, this.required, this.placement, this._tagTemplate, 0, Array.isArray(value) ? value.join(" ") : value, this.handleValueChange, this._handleMouseEnter, this._handleMouseWheel, this.handleOptionClick, this.size || "medium", icon, this._emptyLabelTemplate(), this._optionsTemplate(), this._tagLimitTemplate(), this._extraTemplate(), this._helpTextTemplate());
    };
    // Solves some issues with focus
    Et2Select.shadowRootOptions = __assign(__assign({}, lit_1.LitElement.shadowRootOptions), { delegatesFocus: true });
    __decorate([
        property_js_1.property()
    ], Et2Select.prototype, "placeholder", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Select.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Select.prototype, "disabled", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Select.prototype, "clearable", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Select.prototype, "label", void 0);
    __decorate([
        property_js_1.property({ reflect: true })
    ], Et2Select.prototype, "placement", void 0);
    __decorate([
        property_js_1.property({ attribute: 'help-text' })
    ], Et2Select.prototype, "helpText", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Select.prototype, "_tagsHidden", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Select.prototype, "value", null);
    Et2Select = __decorate([
        custom_element_js_1.customElement('et2-select')
        // @ts-ignore SlSelect styles is a single CSSResult, not an array, so TS complains
    ], Et2Select);
    return Et2Select;
}(SearchMixin_1.Et2WithSearchMixin(Et2WidgetWithSelect)));
exports.Et2Select = Et2Select;
if (typeof customElements.get("et2-select") === "undefined") {
    customElements.define("et2-select", Et2Select);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
