"use strict";
/**
 * EGroupware eTemplate2 - Readonly date WebComponent
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2DateReadonly = void 0;
var lit_1 = require("lit");
var Et2Date_1 = require("./Et2Date");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var DateStyles_1 = require("./DateStyles");
/**
 * This is a stripped-down read-only widget used in nextmatch
 */
var Et2DateReadonly = /** @class */ (function (_super) {
    __extends(Et2DateReadonly, _super);
    function Et2DateReadonly() {
        var _this = _super.call(this) || this;
        _this.parser = Et2Date_1.parseDate;
        _this.formatter = Et2Date_1.formatDate;
        return _this;
    }
    Object.defineProperty(Et2DateReadonly, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                DateStyles_1.dateStyles
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2DateReadonly, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { value: String });
        },
        enumerable: false,
        configurable: true
    });
    Et2DateReadonly.prototype.set_value = function (value) {
        this.value = value;
    };
    Object.defineProperty(Et2DateReadonly.prototype, "innerText", {
        get: function () {
            var parsed = this.value ? this.parser(this.value, this.dataFormat) : false;
            return this.value ? this.formatter(parsed) : '';
        },
        enumerable: false,
        configurable: true
    });
    Et2DateReadonly.prototype.render = function () {
        var _a;
        var parsed = this.value ? this.parser((_a = this.value.date) !== null && _a !== void 0 ? _a : this.value, this.dataFormat) : false;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <span slot=\"label\">", "</span>\n            <time ", "\n                  datetime=\"", "\">\n                ", "\n            </time>\n\t\t"], ["\n            <span slot=\"label\">", "</span>\n            <time ", "\n                  datetime=\"", "\">\n                ", "\n            </time>\n\t\t"])), this.label, this.id ? lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["id=\"", "\""], ["id=\"", "\""])), this._dom_id) : '', parsed ? this.formatter(parsed, { dateFormat: "Y-m-d", timeFormat: "H:i:s" }) : "", this.value ? this.formatter(parsed) : '');
    };
    Et2DateReadonly.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "value", "class", "statustext");
    };
    Et2DateReadonly.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2DateReadonly.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    Et2DateReadonly.prototype.loadFromXML = function () {
        // nope
    };
    return Et2DateReadonly;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2DateReadonly = Et2DateReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-date_ro", Et2DateReadonly);
var templateObject_1, templateObject_2;
