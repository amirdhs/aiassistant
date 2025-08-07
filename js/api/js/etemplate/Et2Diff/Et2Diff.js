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
exports.Et2Diff = void 0;
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var unsafe_html_js_1 = require("lit/directives/unsafe-html.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var Diff2Html = require("diff2html");
var types_1 = require("diff2html/lib/types");
var property_js_1 = require("lit/decorators/property.js");
var shoelace_1 = require("../Styles/shoelace");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
/**
 * Show a nicely formatted diff
 */
var Et2Diff = /** @class */ (function (_super) {
    __extends(Et2Diff, _super);
    function Et2Diff() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = false;
        /**
         * Disable the dialog and show the whole diff
         *
         * @type {boolean}
         */
        _this.noDialog = false;
        _this.diff_options = {
            matching: "words",
            drawFileList: false,
            colorScheme: types_1.ColorSchemeType.AUTO
        };
        return _this;
    }
    Object.defineProperty(Et2Diff, "styles", {
        // CSS in etemplate2.css due to library
        get: function () {
            return __spreadArrays([
                shoelace_1.default
            ], _super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.expand-icon {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tbottom: var(--sl-spacing-medium);\n\t\t\t\t\tright: var(--sl-spacing-medium);\n\t\t\t\t\tbackground-color: var(--sl-panel-background-color);\n\t\t\t\t\tz-index: 1;\n\t\t\t\t}\n\n\t\t\t\t:host(:hover) {\n\t\t\t\t\t.expand-icon {\n\t\t\t\t\t\tdisplay: initial;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t:host(:not([open])) {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t:host(:not([noDialog])) .form-control-input {\n\t\t\t\t\tmax-height: 9em;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.expand-icon {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tbottom: var(--sl-spacing-medium);\n\t\t\t\t\tright: var(--sl-spacing-medium);\n\t\t\t\t\tbackground-color: var(--sl-panel-background-color);\n\t\t\t\t\tz-index: 1;\n\t\t\t\t}\n\n\t\t\t\t:host(:hover) {\n\t\t\t\t\t.expand-icon {\n\t\t\t\t\t\tdisplay: initial;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t:host(:not([open])) {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t:host(:not([noDialog])) .form-control-input {\n\t\t\t\t\tmax-height: 9em;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Diff.prototype.updated = function (changedProperties) {
        var _a;
        if (changedProperties.has("value") || this.value && this.childElementCount == 0) {
            // Put diff into lightDOM so styles can leak, since we can't import the library CSS into the component
            lit_1.render(lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), unsafe_html_js_1.unsafeHTML(Diff2Html.html((_a = this.value) !== null && _a !== void 0 ? _a : "", this.diff_options))), this, { host: this });
        }
    };
    Object.defineProperty(Et2Diff.prototype, "value", {
        set: function (value) {
            if (typeof value == 'string') {
                // Diff2Html likes to have files, we don't have them
                if (value.indexOf('---') !== 0) {
                    value = "--- diff\n+++ diff\n" + value;
                }
                _super.prototype.value = value;
                this.requestUpdate("value");
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Diff.prototype._handleClick = function (e) {
        var oldValue = this.getAttribute("open");
        this.toggleAttribute("open");
        this.requestUpdate("open", oldValue);
    };
    Et2Diff.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "value", "class");
    };
    Et2Diff.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Diff.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    Et2Diff.prototype.render = function () {
        var _this = this;
        var labelTemplate = this._labelTemplate();
        var helpTextTemplate = this._helpTextTemplate();
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <!-- Actual diff goes into lightDOM since we can't import the CSS directly -->\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <!-- Actual diff goes into lightDOM since we can't import the CSS directly -->\n                    ",
            "\n                </div>\n                ", "\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': labelTemplate !== lit_1.nothing,
            'form-control--has-help-text': helpTextTemplate !== lit_1.nothing
        }), labelTemplate, this.open && !this.noDialog ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                          <et2-dialog\n                                  part=dialog\" label=\"Diff\" open\n                                  buttons=", "\n                                  @click=", "\n                                  @close=", "\n                          >\n                              <slot></slot>\n                          </et2-dialog>"], ["\n                          <et2-dialog\n                                  part=dialog\" label=\"Diff\" open\n                                  buttons=", "\n                                  @click=",
            "\n                                  @close=",
            "\n                          >\n                              <slot></slot>\n                          </et2-dialog>"])), Et2Dialog_1.Et2Dialog.BUTTONS_OK, function (e) {
            // Stop bubble or it will re-show dialog
            e.stopPropagation();
        }, function () {
            _this.removeAttribute("open");
            _this.requestUpdate("open", true);
        }) : lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t\t\t\t\t  ", "\n                          <slot></slot>"], ["\n\t\t\t\t\t\t\t  ",
            "\n                          <slot></slot>"])), !this.noDialog ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                                <et2-button-icon\n                                        part=\"expand-icon\"\n                                        class=\"expand-icon\"\n                                        image=\"arrows-fullscreen\" label=\"View\" noSubmit></et2-button-icon>"], ["\n                                <et2-button-icon\n                                        part=\"expand-icon\"\n                                        class=\"expand-icon\"\n                                        image=\"arrows-fullscreen\" label=\"View\" noSubmit></et2-button-icon>"]))) : lit_1.nothing), helpTextTemplate);
    };
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Diff.prototype, "open", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2Diff.prototype, "noDialog", void 0);
    Et2Diff = __decorate([
        custom_element_js_1.customElement("et2-diff")
    ], Et2Diff);
    return Et2Diff;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2Diff = Et2Diff;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
