"use strict";
/**
 * EGroupware eTemplate2 - Readonly duration WebComponent
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
exports.Et2DateDurationReadonly = void 0;
var lit_1 = require("lit");
var Et2DateDuration_1 = require("./Et2DateDuration");
var DateStyles_1 = require("./DateStyles");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
/**
 * This is a stripped-down read-only widget used in nextmatch
 *
 * @slot prefix - Used to prepend a presentational icon or similar element to the widget.
 * @slot suffix - Like prefix, but after
 */
var Et2DateDurationReadonly = /** @class */ (function (_super) {
    __extends(Et2DateDurationReadonly, _super);
    function Et2DateDurationReadonly() {
        var _this = _super.call(this) || this;
        // Property defaults
        _this.selectUnit = false; // otherwise just best matching unit will be used for eg. display_format "h:m:s"
        return _this;
    }
    Object.defineProperty(Et2DateDurationReadonly, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, DateStyles_1.dateStyles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\tborder: none;\n\t\t\tmin-width: 2em;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\tborder: none;\n\t\t\tmin-width: 2em;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateDurationReadonly.prototype, "value", {
        get: function () {
            return this.__value;
        },
        set: function (_value) {
            var old_value = this.__value;
            this.__value = _value;
            this.requestUpdate("value", old_value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateDurationReadonly.prototype, "innerText", {
        get: function () {
            return this.shadowRoot.querySelector('span').innerText;
        },
        enumerable: false,
        configurable: true
    });
    Et2DateDurationReadonly.prototype.render = function () {
        var parsed = this.__value;
        var format_options = {
            selectUnit: this.selectUnit,
            displayFormat: this.displayFormat,
            dataFormat: this.dataFormat,
            numberFormat: this.egw().preference("number_format"),
            hoursPerDay: this.hoursPerDay,
            emptyNot0: this.emptyNot0
        };
        var display = this.formatter(parsed, format_options);
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <slot name=\"prefix\"></slot>\n            <span ", ">\n                  ", "", "\n            </span>\n            <slot name=\"suffix\"></slot>\n\t\t"], ["\n            <slot name=\"prefix\"></slot>\n            <span ", ">\n                  ", "", "\n            </span>\n            <slot name=\"suffix\"></slot>\n\t\t"])), this.id ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["id=\"", "\""], ["id=\"", "\""])), this._dom_id) : '', display.value, display.unit);
    };
    /**
     * These are the attributes we allow to change for each row
     *
     * @param attrs
     */
    Et2DateDurationReadonly.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "value", "class", "disabled");
    };
    Et2DateDurationReadonly.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2DateDurationReadonly.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    Et2DateDurationReadonly = __decorate([
        custom_element_js_1.customElement("et2-date-duration_ro")
    ], Et2DateDurationReadonly);
    return Et2DateDurationReadonly;
}(Et2DateDuration_1.Et2DateDuration));
exports.Et2DateDurationReadonly = Et2DateDurationReadonly;
var templateObject_1, templateObject_2, templateObject_3;
