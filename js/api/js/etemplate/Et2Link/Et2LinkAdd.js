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
exports.Et2LinkAdd = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * Find and select a single entry using the link system.
 *
 *
 */
var Et2LinkAdd = /** @class */ (function (_super) {
    __extends(Et2LinkAdd, _super);
    function Et2LinkAdd() {
        var _this = _super.call(this) || this;
        _this.handleButtonClick = _this.handleButtonClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2LinkAdd, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t.form-control {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t\t.form-control {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkAdd.prototype, "application", {
        get: function () {
            return this.value.app;
        },
        /**
         * Limit to just this application - hides app selection
         */
        set: function (app) {
            app = app || "";
            // If initial value got set before only_app, it still needs app in pre-render value
            if (this.value && app) {
                this.value.app = app;
            }
            this.requestUpdate("application");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkAdd.prototype, "_appNode", {
        get: function () {
            return this.shadowRoot.querySelector("et2-link-apps");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkAdd.prototype, "_buttonNode", {
        get: function () {
            return this.shadowRoot.querySelector("et2-button");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add button was clicked
     * @param {MouseEvent} e
     */
    Et2LinkAdd.prototype.handleButtonClick = function (e) {
        this.egw().open(this.value.to_app + ":" + this.value.to_id, this._appNode.value, 'add');
    };
    Et2LinkAdd.prototype.render = function () {
        var _a;
        var hasLabel = this.label ? true : false;
        var hasHelpText = this.helpText ? true : false;
        var isEditable = !(this.disabled || this.readonly);
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <slot part=\"prefix\" name=\"prefix\"></slot>\n                    <et2-link-apps\n                            onlyApp=", "\n                            applicationList=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .value=", "\n                    ></et2-link-apps>\n                    <et2-button\n                            id=", "\n                            image=\"add\"\n                            aria-label=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            noSubmit\n                            @click=", "\n                    ></et2-button>\n                    <slot part=\"suffix\" name=\"suffix\"></slot>\n                </div>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <slot part=\"prefix\" name=\"prefix\"></slot>\n                    <et2-link-apps\n                            onlyApp=", "\n                            applicationList=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .value=", "\n                    ></et2-link-apps>\n                    <et2-button\n                            id=", "\n                            image=\"add\"\n                            aria-label=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            noSubmit\n                            @click=", "\n                    ></et2-button>\n                    <slot part=\"suffix\" name=\"suffix\"></slot>\n                </div>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'link-add': true,
            'link-add__readonly': !isEditable,
            'vlink-add__disabled': this.disabled,
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': hasLabel,
            'form-control--has-help-text': hasHelpText
        }), hasLabel ? 'false' : 'true', this.label, this.application || lit_1.nothing, this.applicationList || lit_1.nothing, this.disabled, this.readonly, (_a = this.value) === null || _a === void 0 ? void 0 : _a.app, this.id + "_add", this.egw().lang("Add entry"), this.disabled, this.readonly, this.handleButtonClick);
    };
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2LinkAdd.prototype, "value", void 0);
    __decorate([
        property_js_1.property()
    ], Et2LinkAdd.prototype, "applicationList", void 0);
    __decorate([
        property_js_1.property()
    ], Et2LinkAdd.prototype, "application", null);
    Et2LinkAdd = __decorate([
        custom_element_js_1.customElement("et2-link-add")
    ], Et2LinkAdd);
    return Et2LinkAdd;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2LinkAdd = Et2LinkAdd;
var templateObject_1, templateObject_2;
