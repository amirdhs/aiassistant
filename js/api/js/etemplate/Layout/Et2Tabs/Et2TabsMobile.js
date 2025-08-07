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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2TabsMobile = void 0;
var Et2Tabs_1 = require("./Et2Tabs");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var repeat_js_1 = require("lit/directives/repeat.js");
/**
 * Widget to render tabs in a mobile-friendly way
 *
 * We render tabs as a series of details instead of normal tabs.
 * loadWebComponent() will load this component instead of Et2Tabs on mobile browsers
 */
var Et2TabsMobile = /** @class */ (function (_super) {
    __extends(Et2TabsMobile, _super);
    function Et2TabsMobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2TabsMobile.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
    };
    Et2TabsMobile.prototype.createTabs = function (tabData) {
        var _this = this;
        // "Tabs" are created in render()
        this.tabData = tabData;
        // Create tab panels here though
        tabData.forEach(function (tab, index) {
            var panel = _this.createPanel(tab, true);
            panel.slot = tab.id;
        });
    };
    /**
     * Use the height of the first tab if height not set
     * @protected
     */
    Et2TabsMobile.prototype._sizeTabs = function (tabDates) {
        // no need to do anything, as we use details
    };
    Et2TabsMobile.prototype.getAllTabs = function (includeDisabled) {
        if (includeDisabled === void 0) { includeDisabled = false; }
        var slot = this.shadowRoot.querySelectorAll('et2-details');
        var tabNames = ["et2-details"];
        // It's really not a list of SlTab...
        return __spreadArrays(slot).filter(function (el) {
            return includeDisabled ? tabNames.indexOf(el.tagName.toLowerCase()) != -1 : tabNames.indexOf(el.tagName.toLowerCase()) !== -1 && !el.disabled;
        });
    };
    Et2TabsMobile.prototype.getAllPanels = function () {
        var slot = this.querySelector('slot');
        return __spreadArrays(this.querySelectorAll('et2-tab-panel'));
    };
    Et2TabsMobile.prototype.syncIndicator = function () {
        // Don't have an indicator to sync
    };
    Et2TabsMobile.prototype.repositionIndicator = function () {
        // Don't have an indicator to reposition
    };
    Et2TabsMobile.prototype.preventIndicatorTransition = function () {
        // Don't have an indicator
    };
    /**
     * Reimplement to allow our existing function signatures too
     *
     * @deprecated use this.show(name : string)
     * @param tab number or name of tab (Sl uses that internally with a SlTab!)
     * @param options
     */
    Et2TabsMobile.prototype.setActiveTab = function (tab, options) {
        if (typeof tab === 'number') {
            tab = this.getAllTabs()[tab];
            return this.show(tab.panel);
        }
        if (typeof tab === 'string') {
            return this.show(tab);
        }
        // Don't call super, it hides tab content
    };
    Object.defineProperty(Et2TabsMobile.prototype, "nav", {
        get: function () {
            return this.shadowRoot.querySelector("et2-vbox");
        },
        enumerable: false,
        configurable: true
    });
    Et2TabsMobile.prototype.tabTemplate = function (tab, index) {
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <et2-details\n                    id=\"", "\"\n                    summary=\"", "\"\n                    ?open=", "\n                    ?disabled=", "\n                    ?hidden=", "\n            >\n                <slot name=\"", "\"/>\n            </et2-details>"], ["\n            <et2-details\n                    id=\"", "\"\n                    summary=\"", "\"\n                    ?open=", "\n                    ?disabled=", "\n                    ?hidden=", "\n            >\n                <slot name=\"", "\"/>\n            </et2-details>"])), tab.id, tab.label, index == this._selectedIndex, tab.disabled, tab.hidden, tab.id);
    };
    Et2TabsMobile.prototype.render = function () {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-vbox\n                    part=\"base\"\n                    class=", "\n                    @click=", "\n                    @keydown=", "\n            >\n                ", "\n                <slot>\n            </et2-vbox>\n\t\t"], ["\n            <et2-vbox\n                    part=\"base\"\n                    class=",
            "\n                    @click=", "\n                    @keydown=", "\n            >\n                ", "\n                <slot>\n            </et2-vbox>\n\t\t"])), class_map_js_1.classMap({
            'tab-group': true,
            'tab-group-mobile': true,
            // Get styling as if it were top
            'tab-group--top': true
        }), this.handleClick, this.handleKeyDown, repeat_js_1.repeat(this.tabData, this.tabTemplate.bind(this)));
    };
    return Et2TabsMobile;
}(Et2Tabs_1.Et2Tabs));
exports.Et2TabsMobile = Et2TabsMobile;
if (typeof customElements.get("et2-tabbox_mobile") == "undefined") {
    customElements.define("et2-tabbox_mobile", Et2TabsMobile);
}
var templateObject_1, templateObject_2;
