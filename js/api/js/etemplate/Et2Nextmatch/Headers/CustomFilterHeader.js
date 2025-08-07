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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2CustomFilterHeader = void 0;
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var Et2Select_1 = require("../../Et2Select/Et2Select");
var Et2InputWidget_1 = require("../../Et2InputWidget/Et2InputWidget");
var FilterMixin_1 = require("./FilterMixin");
var lit_1 = require("lit");
var FindSelectOptions_1 = require("../../Et2Select/FindSelectOptions");
/**
 * Filter by some other type of widget
 * Acts as a wrapper around the other widget, but handles all the nm stuff here
 * Any attributes set are passed to the filter widget
 */
var Et2CustomFilterHeader = /** @class */ (function (_super) {
    __extends(Et2CustomFilterHeader, _super);
    function Et2CustomFilterHeader() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.widgetType = "et2-description";
        _this.widgetOptions = {};
        return _this;
    }
    Object.defineProperty(Et2CustomFilterHeader, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * tag of widget we want to use to filter
                 */
                widgetType: { type: String }, 
                /**
                 * Attributes / properties used for the filter widget
                 */
                widgetOptions: { type: Object } });
        },
        enumerable: false,
        configurable: true
    });
    Et2CustomFilterHeader.prototype.transformAttributes = function (attrs) {
        var _a;
        _super.prototype.transformAttributes.call(this, attrs);
        var widgetType = ((_a = this.getArrayMgr("modifications").getEntry(this.id)) === null || _a === void 0 ? void 0 : _a.widgetType) || attrs.widgetType || "";
        switch (widgetType) {
            case "link-entry":
                this.widgetType = 'et2-nextmatch-header-entry';
                break;
            default:
                this.widgetType = widgetType;
                // Prefer webcomponent, if legacy type was sent
                if (window.customElements.get("et2-" + this.widgetType)) {
                    this.widgetType = "et2-" + this.widgetType;
                }
        }
        if (!window.customElements.get(this.widgetType)) {
            console.error("Unknown widget type '%s'", this.widgetType);
            this.widgetType = 'et2-select';
        }
        // @ts-ignore TS doesn't know about this.getParent()
        this.filter_node = Et2Widget_1.loadWebComponent(this.widgetType, __assign(__assign({}, attrs), this.widgetOptions), this);
        if (this.filter_node instanceof Et2Select_1.Et2Select) {
            this.filter_node.hoist = true;
            this.filter_node.clearable = true;
        }
    };
    Et2CustomFilterHeader.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        if (this.filter_node) {
            this.filter_node.updateComplete.then(function () {
                _this.filter_node.addEventListener("change", _this.handleChange);
            });
        }
    };
    /**
     * New filter options from server
     * @param new_options
     */
    Et2CustomFilterHeader.prototype.set_select_options = function (new_options) {
        var _a;
        var widget_class = window.customElements.get((_a = this.filter_node) === null || _a === void 0 ? void 0 : _a.localName);
        var property = widget_class.getPropertyOptions('select_options');
        if (this.filter_node && property) {
            this.filter_node.select_options = FindSelectOptions_1.cleanSelectOptions(new_options);
        }
    };
    Et2CustomFilterHeader.prototype.render = function () {
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <slot></slot>"], ["\n            <slot></slot>"])));
    };
    Object.defineProperty(Et2CustomFilterHeader.prototype, "value", {
        get: function () {
            var _a;
            return ((_a = this.filter_node) === null || _a === void 0 ? void 0 : _a.value) || undefined;
        },
        set: function (new_value) {
            if (this.filter_node) {
                this.filter_node.value = new_value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Et2CustomFilterHeader;
}(FilterMixin_1.FilterMixin(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement))));
exports.Et2CustomFilterHeader = Et2CustomFilterHeader;
customElements.define("et2-nextmatch-header-custom", Et2CustomFilterHeader);
var templateObject_1;
