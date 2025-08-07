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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectCategory = void 0;
/**
 * Use a custom tag for when multiple=true
 *
 * @returns {string}
 */
var static_html_js_1 = require("lit/static-html.js");
var property_js_1 = require("lit/decorators/property.js");
var until_js_1 = require("lit/directives/until.js");
var lit_1 = require("lit");
var Et2TreeDropdown_1 = require("../../Et2Tree/Et2TreeDropdown");
var StaticOptions_1 = require("../StaticOptions");
/**
 * @since 23.1.x
 * This is not a classical Select box but a structured tree
 */
var Et2SelectCategory = /** @class */ (function (_super) {
    __extends(Et2SelectCategory, _super);
    function Et2SelectCategory() {
        var _this = _super.call(this) || this;
        /**
         * Application to get categories from
         */
        _this.application = '';
        /**
         * Include global categories
         */
        _this.globalCategories = true;
        // we should not translate categories name
        _this.noLang = true;
        return _this;
    }
    Object.defineProperty(Et2SelectCategory, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\t--category-color: transparent;\n\t\t\t\t}\n\n\t\t\t\t/* Color on tree items */\n\t\t\t\t::part(item-item) {\n\t\t\t\t\tborder-inline-start: 4px solid transparent;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, transparent);\n\t\t\t\t}\n\n\t\t\t\t/* Color on tags */\n\t\t\t\t:host(:not([multiple])) .tree_tag::part(base) {\n\t\t\t\t\tborder-inline-start: 4px solid transparent;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, transparent);\n\t\t\t\t}\n\n\t\t\t\t/* Color on single value */\n\n\t\t\t\t:host(:not([multiple])) .tree-dropdown:not(.tree-dropdown--has-value) .tree-dropdown__combobox {\n\t\t\t\t\tpadding-inline-start: 3px;\n\t\t\t\t}\n\n\t\t\t\t:host(:not([multiple])) .tree-dropdown--has-value .tree-dropdown__combobox {\n\t\t\t\t\tborder-inline-start: 4px solid;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, var(--sl-input-border-color));\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\t--category-color: transparent;\n\t\t\t\t}\n\n\t\t\t\t/* Color on tree items */\n\t\t\t\t::part(item-item) {\n\t\t\t\t\tborder-inline-start: 4px solid transparent;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, transparent);\n\t\t\t\t}\n\n\t\t\t\t/* Color on tags */\n\t\t\t\t:host(:not([multiple])) .tree_tag::part(base) {\n\t\t\t\t\tborder-inline-start: 4px solid transparent;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, transparent);\n\t\t\t\t}\n\n\t\t\t\t/* Color on single value */\n\n\t\t\t\t:host(:not([multiple])) .tree-dropdown:not(.tree-dropdown--has-value) .tree-dropdown__combobox {\n\t\t\t\t\tpadding-inline-start: 3px;\n\t\t\t\t}\n\n\t\t\t\t:host(:not([multiple])) .tree-dropdown--has-value .tree-dropdown__combobox {\n\t\t\t\t\tborder-inline-start: 4px solid;\n\t\t\t\t\tborder-inline-start-color: var(--category-color, var(--sl-input-border-color));\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectCategory.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Default the application if not set
        if (!this.application && this.getInstanceManager()) {
            this.application = this.getInstanceManager().app;
        }
        // Set the search options from our properties
        this.searchOptions.application = this.application;
        this.searchOptions.globalCategories = this.globalCategories;
        this.fetchComplete = StaticOptions_1.StaticOptions.cat(this).then(function (options) {
            _this._static_options = options;
            _this.requestUpdate("select_options");
        });
    };
    Et2SelectCategory.prototype.disconnectedCallback = function () {
        var _a;
        _super.prototype.disconnectedCallback.call(this);
        var box = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tree-dropdown__combobox');
        if (box) {
            this.egw().tooltipUnbind(box);
        }
    };
    Et2SelectCategory.prototype.bindTooltip = function () {
        var _this = this;
        //overide so tooltip wont be bound
        this.updateComplete.then(function () {
            var _a;
            var box = (_a = _this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tree-dropdown__combobox');
            if (box) {
                _this.egw().tooltipBind(box, _this.egw().lang(_this.statustext));
            }
        });
    };
    Et2SelectCategory.prototype.willUpdate = function (changedProperties) {
        var _this = this;
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has("globalCategories") ||
            changedProperties.has("application") || changedProperties.has("parentCat")) {
            this.fetchComplete = StaticOptions_1.StaticOptions.cat(this).then(function (options) {
                _this._static_options = options;
                _this.requestUpdate("select_options");
            });
        }
        if (changedProperties.has('application')) {
            this.searchOptions.application = this.application;
        }
        if (changedProperties.has('globalCategories')) {
            this.searchOptions.globalCategories = this.globalCategories;
        }
    };
    Object.defineProperty(Et2SelectCategory.prototype, "tagTag", {
        get: function () {
            return static_html_js_1.literal(templateObject_2 || (templateObject_2 = __makeTemplateObject(["et2-category-tag"], ["et2-category-tag"])));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set CSS category colors
     * @returns {TemplateResult}
     * @protected
     */
    Et2SelectCategory.prototype.styleTemplate = function () {
        var css = "";
        var catColor = function (option) {
            var _a;
            css += ".cat_" + option.value + " {--category-color: var(--cat-" + option.value + "-color ,transparent);}\n";
            if (typeof option.children === 'object') {
                (_a = option.children) === null || _a === void 0 ? void 0 : _a.forEach(function (option) { return catColor(option); });
            }
        };
        this.select_options.forEach((function (option) { return catColor(option); }));
        // @formatter:off
        return static_html_js_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <style>", "</style>\n\t\t"], ["\n            <style>", "</style>\n\t\t"])), lit_1.unsafeCSS(css));
        // @formatter:on
    };
    Et2SelectCategory.prototype.handleValueChange = function (e) {
        _super.prototype.handleValueChange.call(this, e);
        // Just re-draw to get the colors & icon
        this.requestUpdate();
    };
    Et2SelectCategory.prototype.render = function () {
        var _this = this;
        var style = lit_1.nothing;
        if (this.value && !this.multiple) {
            style = this.fetchComplete.then(function () {
                var option = _this.optionSearch(_this.value, _this.select_options, 'value', 'children');
                if (option) {
                    var css_1 = ".tree-dropdown--has-value .tree-dropdown__combobox {" +
                        "--category-color: var(--cat-" + option.value + "-color ,var(--sl-input-border-color));" +
                        "}\n";
                    return static_html_js_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        <style>", "</style>"], ["\n                        <style>", "</style>"])), lit_1.unsafeCSS(css_1));
                }
            });
        }
        return static_html_js_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            ", "\n            ", "\n\t\t"], ["\n            ", "\n            ", "\n\t\t"])), until_js_1.until(style, lit_1.nothing), _super.prototype.render.call(this));
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2SelectCategory.prototype, "application", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2SelectCategory.prototype, "globalCategories", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2SelectCategory.prototype, "parentCat", void 0);
    return Et2SelectCategory;
}(StaticOptions_1.Et2StaticSelectMixin(Et2TreeDropdown_1.Et2TreeDropdown)));
exports.Et2SelectCategory = Et2SelectCategory;
// @ts-ignore Type problems because of Et2WidgetWithSelectMixin in parent
customElements.define("et2-select-cat", Et2SelectCategory);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
